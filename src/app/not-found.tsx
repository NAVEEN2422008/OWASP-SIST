import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
            <div className="glass-panel max-w-xl w-full rounded-[2rem] p-8 text-center">
                <div className="text-cyber-green font-mono text-sm mb-4 uppercase tracking-[0.3em]">404 — Route Not Found</div>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                    The page you requested doesn’t exist.
                </h1>
                <p className="text-[color:var(--muted)] mb-8">
                    Use the navigation to explore events, resources, and learning tracks.
                </p>
                <Link
                    href="/"
                    className="ui-button ui-button-primary inline-flex items-center justify-center px-6 py-3 font-bold"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

