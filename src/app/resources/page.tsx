import { Metadata } from "next";
import { resources } from "@/data/resources";
import { siteConfig } from "@/lib/site";
import ResourceGrid from "@/components/sections/ResourceGrid";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
  title: `Learning Resources - ${siteConfig.name}`,
  description:
    "Explore curated YouTube channels and hands-on practice platforms for practical security learning.",
};

export default function ResourcesPage() {
  return (
    <RoutePageShell>
      <RoutePageIntro
        eyebrow="Learning Resources"
        title="Open-source learning references for practical security work."
        description="Explore the chapter's curated YouTube channels and practice platforms for application security learning."
      />
      <ResourceGrid resources={resources} />
    </RoutePageShell>
  );
}
