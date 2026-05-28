import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import EventsArchiveClient from "@/components/events/EventsArchiveClient";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
    title: `Events — ${siteConfig.name}`,
    description: "Browse past and upcoming chapter events.",
};

export default function EventsPage() {
    return (
        <RoutePageShell>
            <RoutePageIntro
                eyebrow="Events"
                title="Operation Events"
                description="Explore chapter activities with category filters and full-text search."
            />
            <EventsArchiveClient />
        </RoutePageShell>
    );
}
