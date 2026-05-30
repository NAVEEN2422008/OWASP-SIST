export interface ParsedEvent {
  id: string;
  title: string;
  speaker?: string;
  topic?: string;
  venue?: string;
  dateStr?: string;
  dateSortKey: number; // Unix timestamp for sorting
  imageUrl?: string;
  status: "upcoming" | "completed";
}

const UPCOMING_EVENTS_URL =
  "https://raw.githubusercontent.com/OWASP/www-chapter-sathyabama-institute-of-science-and-technology/main/tab_upcoming.md";
const PAST_EVENTS_URL =
  "https://raw.githubusercontent.com/OWASP/www-chapter-sathyabama-institute-of-science-and-technology/main/tab_pastevents.md";

/**
 * Parse DD/MM/YYYY (with possible range like "27/06/2023 & 28/06/2023") into a Unix ms timestamp.
 * Returns 0 if unparseable (will sort to the end).
 */
function parseDateToTimestamp(dateStr: string): number {
  // Strip labels like "[OFFLINE EVENT]" and take the first date in a range
  const cleaned = dateStr.replace(/\[.*?\]/g, "").trim();
  const first = cleaned.split(/[&,]/)[0].trim(); // e.g. "27/06/2023"
  const parts = first.split("/");
  if (parts.length !== 3) return 0;
  const [day, month, year] = parts.map((p) => parseInt(p, 10));
  if (isNaN(day) || isNaN(month) || isNaN(year)) return 0;
  return new Date(year, month - 1, day).getTime();
}

/**
 * Normalise image URLs from GitHub blob links to raw.githubusercontent.com
 */
function normaliseImageUrl(raw: string): string {
  let url = raw.trim().replace(/ /g, "%20");
  // Strip ?raw=true suffix (we'll use raw.githubusercontent.com directly)
  url = url.replace(/\?raw=true$/, "");
  if (url.includes("github.com") && url.includes("/blob/")) {
    url = url
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/blob/", "/");
  }
  return url;
}

/**
 * Parse multiple events from an OWASP chapter markdown file.
 * The file uses "___" as separators between event blocks.
 * The first event may have no preceding "___".
 */
function parseEventsMarkdown(
  markdown: string,
  status: "upcoming" | "completed"
): ParsedEvent[] {
  const events: ParsedEvent[] = [];

  // Split on horizontal rules (three or more underscores)
  const blocks = markdown.split(/^___+$/m);

  blocks.forEach((block, index) => {
    const trimmed = block.trim();
    // Skip frontmatter / empty blocks
    if (
      !trimmed ||
      trimmed.includes("title: pastevents") ||
      trimmed.includes("title: upcoming")
    )
      return;

    // Extract fields — Event Title/Speaker/Venue have value inline after ":"
    const titleMatch = trimmed.match(/\*\*Event Title\s*:\s*(.*?)\*\*/i);
    const speakerMatch = trimmed.match(/\*\*Event Speaker\s*:\s*(.*?)\*\*/i);
    const venueMatch = trimmed.match(/\*\*Event Venue\s*:\s*(.*?)\*\*/i);
    const dateMatch = trimmed.match(/\*\*Event Date\s*:\s*(.*?)\*\*/i);

    // Event Topic may span multiple lines (value after "**Event Topic :**")
    const topicMatch = trimmed.match(
      /\*\*Event Topic\s*:\s*\*\*\s*([\s\S]*?)(?=\*\*Event|$)/i
    );

    // Image src — may appear in <img src="..."> or <img src='...'>
    const imageMatch = trimmed.match(/<img\s+src=["']([^"']+)["']/i);

    if (!titleMatch) return;

    const rawDateStr = dateMatch ? dateMatch[1].trim() : "";

    events.push({
      id: `${status}-${index}`,
      title: titleMatch[1].trim(),
      speaker: speakerMatch ? speakerMatch[1].trim() : undefined,
      topic: topicMatch ? topicMatch[1].trim().replace(/\s+/g, " ") : undefined,
      venue: venueMatch ? venueMatch[1].trim() : undefined,
      dateStr: rawDateStr || undefined,
      dateSortKey: parseDateToTimestamp(rawDateStr),
      imageUrl: imageMatch ? normaliseImageUrl(imageMatch[1]) : undefined,
      status,
    });
  });

  return events;
}

export async function fetchGithubEvents(): Promise<ParsedEvent[]> {
  try {
    const [upcomingRes, pastRes] = await Promise.all([
      fetch(UPCOMING_EVENTS_URL, { next: { revalidate: 3600 } }),
      fetch(PAST_EVENTS_URL, { next: { revalidate: 3600 } }),
    ]);

    const upcomingMd = upcomingRes.ok ? await upcomingRes.text() : "";
    const pastMd = pastRes.ok ? await pastRes.text() : "";

    const upcomingEvents = parseEventsMarkdown(upcomingMd, "upcoming");
    const pastEvents = parseEventsMarkdown(pastMd, "completed");

    // Merge and sort newest first (upcoming always on top regardless of date)
    const all = [...upcomingEvents, ...pastEvents];
    all.sort((a, b) => {
      // Upcoming events always precede completed ones
      if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
      // Within same status: newest first
      return b.dateSortKey - a.dateSortKey;
    });

    return all;
  } catch (error) {
    console.error("Error fetching GitHub events:", error);
    return [];
  }
}
