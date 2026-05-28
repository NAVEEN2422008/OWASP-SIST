import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ctfChallenges } from "@/data/ctf";
import { siteConfig } from "@/lib/site";
import { RoutePageShell } from "@/components/ui/RoutePageShell";

export function generateStaticParams() {
    return ctfChallenges.map((challenge) => ({ challengeSlug: challenge.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ challengeSlug: string }> }): Promise<Metadata> {
    const { challengeSlug } = await params;
    const ch = ctfChallenges.find((c) => c.slug === challengeSlug);
    if (!ch) return { title: `CTF Challenge — ${siteConfig.name}` };
    return {
        title: `${ch.name} — ${siteConfig.name}`,
        description: ch.description,
    };
}

export default async function CtfChallengePage({ params }: { params: Promise<{ challengeSlug: string }> }) {
    const { challengeSlug } = await params;
    const ch = ctfChallenges.find((c) => c.slug === challengeSlug);
    if (!ch) notFound();
    const Writeup = ch.writeup;

    return (
        <RoutePageShell className="!pt-0">
            <div className="page-wrap max-w-4xl">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Link href="/ctf" className="page-back">
                        ← Back to CTF Archive
                    </Link>
                </div>

                <div className="glass-panel page-panel mt-8 rounded-[1.8rem]">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-green">{ch.difficulty}</div>
                            <h1 className="mt-3 text-3xl font-heading font-bold text-white sm:text-4xl">{ch.name}</h1>
                            <p className="mt-4 leading-relaxed text-[color:var(--muted)]">{ch.description}</p>
                        </div>
                        <div className="min-w-[200px]">
                            <div className="font-mono text-xs uppercase text-[color:var(--soft)]">Category</div>
                            <div className="mt-2 text-lg font-mono text-white/90">{ch.category}</div>
                            <div className="mt-4 font-mono text-xs uppercase text-[color:var(--soft)]">Points</div>
                            <div className="mt-2 text-sm font-mono text-white/90">{ch.points}</div>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/8 pt-6">
                        <h2 className="text-lg font-bold text-white">Downloadables</h2>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a
                                href="#"
                                className="page-tag"
                                aria-label="Download challenge starter"
                            >
                                {ch.downloadLabel ?? "challenge.zip"}
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/8 pt-6">
                        <h2 className="text-lg font-bold text-white">Writeup</h2>
                        {Writeup ? (
                            <div className="mdx-content mt-6 space-y-6 text-gray-300">
                                <Writeup />
                            </div>
                        ) : (
                            <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
                                Writeup content is coming soon. This section is ready to render secure MDX content from the chapter&apos;s writeup library.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </RoutePageShell>
    );
}

