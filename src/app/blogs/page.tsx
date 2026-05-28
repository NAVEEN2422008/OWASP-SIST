import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/data/blogs";
import { RoutePageIntro, RoutePageShell } from "@/components/ui/RoutePageShell";

export const metadata: Metadata = {
    title: `Blogs — ${siteConfig.name}`,
    description: "OWASP SIST articles and writeups.",
};

export default function BlogsIndexPage() {
    const posts = [...blogPosts].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

    return (
        <RoutePageShell>
            <RoutePageIntro
                eyebrow="Blogs"
                title="Writeups & Articles"
                description="Curated chapter articles, event recaps, and secure engineering guidance."
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blogs/${post.slug}`}
                        className="page-link-card glass-panel h-full rounded-[1.7rem] p-6"
                    >
                        <div className="font-mono text-sm uppercase tracking-[0.3em] text-cyber-blue">{post.category}</div>
                        <h2 className="mt-4 text-2xl font-bold text-white">{post.title}</h2>
                        <p className="mt-4 leading-relaxed text-[color:var(--muted)]">{post.description}</p>
                        <div className="mt-6 flex items-center justify-between text-sm text-[color:var(--muted)]">
                            <span>{post.author}</span>
                            <span>{post.dateISO}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </RoutePageShell>
    );
}

