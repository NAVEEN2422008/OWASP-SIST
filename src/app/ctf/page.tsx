import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import CtfArchiveClient from "@/components/ctf/CtfArchiveClient";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
    title: `CTF Archive — ${siteConfig.name}`,
    description: "Browse CTF challenges by category and difficulty.",
};

export default function CtfArchivePage() {
    return (
        <RoutePageShell>
            <RoutePageIntro
                eyebrow="CTF Archive"
                title="Challenges"
                description="A curated set of challenges with writeups, categories, and difficulty ratings."
            />
            <CtfArchiveClient />
        </RoutePageShell>
    );
}

