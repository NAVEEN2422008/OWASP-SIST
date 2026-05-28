import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import { siteConfig } from "@/lib/site";
import { RoutePageShell } from "@/components/ui/RoutePageShell";

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);
    if (!post) return { title: `Blog — ${siteConfig.name}` };

    return {
        title: `${post.title} — ${siteConfig.name}`,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);
    if (!post) notFound();
    const PostContent = post.component;

    return (
        <RoutePageShell className="!pt-0">
            <div className="page-wrap max-w-4xl">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Link href="/blogs" className="page-back">
                        ← Back to Blogs
                    </Link>
                </div>

                <article className="glass-panel page-panel mt-8 rounded-[1.8rem]">
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-green">{post.category}</div>
                    <h1 className="mt-3 text-3xl font-heading font-bold text-white sm:text-4xl">{post.title}</h1>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[color:var(--muted)]">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.dateISO}</span>
                    </div>

                    <div className="mdx-content mt-10 space-y-6 text-gray-300">
                        <PostContent />
                    </div>
                </article>
            </div>
        </RoutePageShell>
    );
}

