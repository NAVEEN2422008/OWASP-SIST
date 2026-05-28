import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/lib/site";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
    title: `Gallery — ${siteConfig.name}`,
    description: "A visual archive of events and community activities.",
};

export default function GalleryPage() {
    return (
        <RoutePageShell>
            <RoutePageIntro
                eyebrow="Gallery"
                title="Moments"
                description="Premium, minimal card layout built for fast rendering."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((it) => (
                    <Link key={it.id} href="/" className="page-link-card glass-panel overflow-hidden rounded-[1.7rem]">
                        <div className="relative aspect-[4/3] bg-black/20">
                            <Image src={it.imageUrl} alt={it.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                        </div>
                        <div className="p-6">
                            <div className="font-mono text-sm uppercase tracking-[0.3em] text-cyber-blue">Archive</div>
                            <div className="mt-2 text-xl font-bold text-white">{it.title}</div>
                            <div className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{it.description}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </RoutePageShell>
    );
}

