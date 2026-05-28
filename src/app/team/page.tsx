import { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/lib/site";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
    title: `Team — ${siteConfig.name}`,
    description: "Meet the OWASP SIST Student Chapter team and contributors.",
};

function Avatar({ initials }: { initials: string }) {
    return (
        <div className="glass-panel flex h-12 w-12 items-center justify-center rounded-2xl font-heading font-bold text-white">
            {initials}
        </div>
    );
}

export default function TeamPage() {
    return (
        <RoutePageShell>
            <RoutePageIntro
                eyebrow="Team"
                title="Contributors"
                description="Leadership, coordinators, and learning stewards powering secure education."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {teamMembers.map((member) => (
                    <article key={member.name} className="glass-panel rounded-[1.7rem] p-6">
                        <div className="flex items-start gap-4">
                            <Avatar initials={member.avatarInitials} />
                            <div className="min-w-0">
                                <div className="font-mono text-xs uppercase tracking-[0.28em] text-cyber-blue">{member.role}</div>
                                <h2 className="mt-2 text-xl font-bold text-white">{member.name}</h2>
                                <p className="mt-3 leading-relaxed text-[color:var(--muted)]">{member.bio}</p>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {member.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="page-tag"
                                    aria-label={social.label}
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </RoutePageShell>
    );
}

