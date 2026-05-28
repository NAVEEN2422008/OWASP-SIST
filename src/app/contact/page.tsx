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
                    <form className="space-y-5" aria-label="Contact form">
                        <div>
                            <label className="font-mono text-sm text-[color:var(--muted-strong)]" htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                required
                                className="page-textarea mt-2"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="font-mono text-sm text-[color:var(--muted-strong)]" htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="page-textarea mt-2"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="font-mono text-sm text-[color:var(--muted-strong)]" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="page-textarea mt-2 resize-none"
                                placeholder="What can we help you with?"
                            />
                        </div>

                        <button
                            type="submit"
                            className="ui-button ui-button-primary w-full px-6 py-3 font-bold"
                        >
                            Send message
                        </button>
                    </form>
                </div>

                <div className="glass-panel page-panel">
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
        </RoutePageShell>
    );
}

