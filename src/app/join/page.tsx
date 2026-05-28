import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
    title: `Join Us — ${siteConfig.name}`,
    description: "Recruitment and how to join the OWASP SIST Student Chapter.",
};

export default function JoinPage() {
    return (
        <RoutePageShell>
            <RoutePageIntro
                eyebrow="Recruitment"
                title="Join the chapter"
                description="A focused path for building real security engineering skills."
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="glass-panel page-panel lg:col-span-2">
                    <h2 className="text-2xl font-bold text-white">What you get</h2>
                    <ul className="mt-5 space-y-3 text-[color:var(--muted)]">
                        <li className="flex gap-3"><span className="text-cyber-green">▸</span> Structured learning tracks mapped to OWASP practices.</li>
                        <li className="flex gap-3"><span className="text-cyber-green">▸</span> Hands-on labs: CTFs, threat modeling, and secure-by-default reviews.</li>
                        <li className="flex gap-3"><span className="text-cyber-green">▸</span> Community mentorship and post-event resource library.</li>
                    </ul>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {["Beginner-friendly", "Project-based", "Mentorship", "Community-led"].map((tag) => (
                            <div key={tag} className="page-tag inline-flex justify-center sm:justify-start">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel page-panel">
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-blue">Next steps</div>
                    <h2 className="mt-3 text-2xl font-heading font-bold text-white">Apply</h2>
                    <p className="mt-4 leading-relaxed text-[color:var(--muted)]">Use this CTA to start your onboarding flow.</p>

                    <Link
                        href="/contact"
                        className="ui-button ui-button-primary mt-7 inline-flex w-full justify-center px-6 py-3 font-bold"
                    >
                        Request onboarding
                    </Link>

                    <div className="mt-5 font-mono text-xs text-[color:var(--soft)]">
                        Note: Final form wiring comes in the validation/security phase.
                    </div>
                </div>
            </div>
        </RoutePageShell>
    );
}

