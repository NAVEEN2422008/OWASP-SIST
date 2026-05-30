import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
    title: `Contact — ${siteConfig.name}`,
    description: "Get in touch with the OWASP SIST Student Chapter.",
};

export default function ContactPage() {
    return (
        <RoutePageShell>
            <RoutePageIntro
                eyebrow="Contact"
                title="Contact the chapter"
                description="Reach the OWASP SIST Student Chapter for collaboration, event coordination, mentoring, or community questions."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="glass-panel page-panel">
                    <div className="space-y-5">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-blue">Direct</div>
                        <h2 className="mt-3 text-2xl font-heading font-bold text-white">{siteConfig.email}</h2>
                        <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
                            For partnership requests, collaboration, or mentorship, use the email address above while the web form submission flow is being finalized.
                        </p>
                        <div className="mt-6 text-sm text-[color:var(--muted-strong)]">
                            Response time: typically 2–4 business days.
                        </div>
                    </div>
                </div>
            </div>
        </RoutePageShell>
    );
}

