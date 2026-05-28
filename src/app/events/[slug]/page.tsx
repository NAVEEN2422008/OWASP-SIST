import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/data/events";
import { siteConfig } from "@/lib/site";
import { RoutePageShell } from "@/components/ui/RoutePageShell";

export function generateStaticParams() {
    return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const ev = events.find((e) => e.slug === params.slug);
    if (!ev) return { title: `Event — ${siteConfig.name}` };
    return {
        title: `${ev.title} — ${siteConfig.name}`,
        description: ev.description,
    };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
    const ev = events.find((e) => e.slug === params.slug);
    if (!ev) notFound();

    return (
        <RoutePageShell className="!pt-0">
            <div className="page-wrap max-w-4xl">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Link href="/events" className="page-back">
                        ← Back to Events
                    </Link>
                </div>

                <div className="glass-panel page-panel mt-8 rounded-[1.8rem]">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-green">{ev.category}</div>
                            <h1 className="mt-3 text-3xl font-heading font-bold text-white sm:text-4xl">{ev.title}</h1>
                            <p className="mt-4 leading-relaxed text-[color:var(--muted)]">{ev.description}</p>
                        </div>
                        <div className="min-w-[200px]">
                            <div className="font-mono text-xs uppercase text-[color:var(--soft)]">Date</div>
                            <div className="mt-2 text-lg font-mono text-white/90">{ev.dateISO}</div>
                        </div>
                    </div>

                    <div className="mt-7">
                        <div className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--soft)]">Tags</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {ev.tags.map((tag) => (
                                <span key={tag} className="page-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/8 pt-6">
                        <h2 className="text-lg font-bold text-white">What to expect</h2>
                        <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
                            <li className="flex gap-3"><span className="text-cyber-green">▸</span> Secure-by-default learning flow with actionable takeaways.</li>
                            <li className="flex gap-3"><span className="text-cyber-green">▸</span> Hands-on sessions aligned to OWASP practices.</li>
                            <li className="flex gap-3"><span className="text-cyber-green">▸</span> Community feedback and post-event resources.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </RoutePageShell>
    );
}

