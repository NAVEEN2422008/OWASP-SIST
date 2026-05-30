import { fetchGithubEvents } from "@/lib/github-events";
import EventsCarousel from "./EventsCarousel";

export default async function EventsTimeline() {
  const events = await fetchGithubEvents();

  return (
    <div id="events">
      <EventsCarousel events={events} />
    </div>
  );
}
