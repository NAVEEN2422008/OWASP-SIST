import { Metadata } from "next";
import { resources } from "@/data/resources";
import { siteConfig } from "@/lib/site";
import ResourceGrid from "@/components/sections/ResourceGrid";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
  title: `Learning Resources - ${siteConfig.name}`,
  description:
    "Explore curated YouTube channels, hands-on practice platforms, and OWASP references used by the OWASP SIST Student Chapter.",
};

export default function ResourcesPage() {
  return (
    <RoutePageShell>
      <RoutePageIntro
        eyebrow="Learning Resources"
        title="Open-source learning references for practical security work."
        description="Explore the chapter's curated YouTube channels, practice platforms, and OWASP references for application security learning."
      />
      <ResourceGrid resources={resources} />
    </RoutePageShell>
  );
}
