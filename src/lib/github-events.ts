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

import localTimeline from "../data/operation-timeline.json";

type TimelineEvent = {
  slug?: string;
  title?: string;
  name?: string;
  speaker?: string;
  theme?: string;
  topic?: string;
  location?: string;
  venue?: string;
  dateISO?: string;
  date?: string;
  dateStr?: string;
  imageUrl?: string;
};

function parseEventDate(dateString: string | undefined): number {
  if (!dateString) return 0;
  const timestamp = Date.parse(dateString);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export async function fetchGithubEvents(): Promise<ParsedEvent[]> {
  const timeline = Array.isArray(localTimeline) ? (localTimeline as TimelineEvent[]) : [];

  const events = timeline
    .map((event, index) => {
      const dateSource = event.dateISO || event.date || event.dateStr || "";
      const dateSortKey = parseEventDate(dateSource);
      return {
        id: event.slug || `event-${index}`,
        title: event.title || event.name || "",
        speaker: event.speaker,
        topic: event.theme || event.topic,
        venue: event.location || event.venue,
        dateStr: dateSource || undefined,
        dateSortKey,
        imageUrl: event.imageUrl || undefined,
        status: dateSortKey > Date.now() ? ("upcoming" as const) : ("completed" as const),
      } as ParsedEvent;
    })
    .filter((event) => event.title);

  events.sort((a, b) => {
    if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
    return b.dateSortKey - a.dateSortKey;
  });

  return events;
}
