export interface ParsedEvent {
  id: string;
  title: string;
  speaker?: string;
  topic?: string;
  venue?: string;
  dateStr?: string;
  imageUrl?: string;
  status: "upcoming" | "completed";
}

const UPCOMING_EVENTS_URL =
  "https://raw.githubusercontent.com/OWASP/www-chapter-sathyabama-institute-of-science-and-technology/main/tab_upcoming.md";
const PAST_EVENTS_URL =
  "https://raw.githubusercontent.com/OWASP/www-chapter-sathyabama-institute-of-science-and-technology/main/tab_pastevents.md";

/**
 * Custom parser to extract event details from the OWASP chapter markdown format
 */
function parseEventsMarkdown(
  markdown: string,
  status: "upcoming" | "completed"
): ParsedEvent[] {
  const events: ParsedEvent[] = [];
  
  // Split the markdown by the horizontal rule used to separate events "___"
  const blocks = markdown.split(/___+/);

  blocks.forEach((block, index) => {
    // If the block is just frontmatter or empty, skip it
    if (!block.trim() || block.includes("title: pastevents") || block.includes("title: upcoming")) return;

    // Extract fields using Regex based on the markdown format
    const titleMatch = block.match(/\*\*Event Title\s*:\s*(.*?)\*\*/i);
    const speakerMatch = block.match(/\*\*Event Speaker\s*:\s*(.*?)\*\*/i);
    const topicMatch = block.match(/\*\*Event Topic\s*:\s*\*\*\s*([\s\S]*?)(?=\*\*|$)/i);
    const venueMatch = block.match(/\*\*Event Venue\s*:\s*(.*?)\*\*/i);
    const dateMatch = block.match(/\*\*Event Date\s*:\s*(.*?)\*\*/i);
    const imageMatch = block.match(/<img\s+src="([^"]+)"/i);

    if (titleMatch) {
      let imageUrl = imageMatch ? imageMatch[1].trim() : undefined;
      if (imageUrl) {
        // Encode spaces and convert github.com blob links to direct raw links
        imageUrl = imageUrl.replace(/ /g, "%20");
        if (imageUrl.includes("github.com") && imageUrl.includes("/blob/")) {
          imageUrl = imageUrl.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
        }
      }

      events.push({
        id: `${status}-${index}`,
        title: titleMatch[1].trim(),
        speaker: speakerMatch ? speakerMatch[1].trim() : undefined,
        topic: topicMatch ? topicMatch[1].trim() : undefined,
        venue: venueMatch ? venueMatch[1].trim() : undefined,
        dateStr: dateMatch ? dateMatch[1].trim() : undefined,
        imageUrl,
        status,
      });
    }
  });

  return events;
}

export async function fetchGithubEvents(): Promise<ParsedEvent[]> {
  try {
    // Fetch both markdown files concurrently, revalidate every hour
    const [upcomingRes, pastRes] = await Promise.all([
      fetch(UPCOMING_EVENTS_URL, { next: { revalidate: 3600 } }),
      fetch(PAST_EVENTS_URL, { next: { revalidate: 3600 } }),
    ]);

    if (!upcomingRes.ok || !pastRes.ok) {
      throw new Error("Failed to fetch events from GitHub");
    }

    const upcomingMd = await upcomingRes.text();
    const pastMd = await pastRes.text();

    const upcomingEvents = parseEventsMarkdown(upcomingMd, "upcoming");
    const pastEvents = parseEventsMarkdown(pastMd, "completed");

    return [...upcomingEvents, ...pastEvents];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
