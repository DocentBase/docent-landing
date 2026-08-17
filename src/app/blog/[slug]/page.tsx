import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight, User } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found — DocentBase",
    };
  }

  return {
    title: `${post.title} — DocentBase Insights`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://docentbase.com/blog/${post.slug}`,
      siteName: "DocentBase",
      type: "article",
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `https://docentbase.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Article Breadcrumbs & Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all insights</span>
            </Link>
          </div>

          <div className="space-y-4 border-b border-zinc-200/80 pb-8">
            <div className="flex items-center gap-2">
              <span className="rounded bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                {post.category}
              </span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-zinc-950 leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-serif">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 text-xs text-zinc-500">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-zinc-700">
                  {post.author.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">{post.author.name}</div>
                  <div className="text-[11px] text-zinc-400">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.publishedAt}</span>
              </div>
            </div>
          </div>

          {/* Article Markdown-like Body */}
          <div className="mt-10 prose prose-zinc max-w-none text-zinc-800 leading-relaxed space-y-6 text-sm sm:text-base">
            <div className="whitespace-pre-line leading-relaxed font-sans">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Conversion Box */}
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/50 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-semibold text-zinc-950">
                Want to implement this framework in your coaching center?
              </h4>
              <p className="text-xs text-zinc-600 max-w-xl">
                DocentBase automates this entire operational flow. We digitize your registers for free in 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-xs font-semibold text-white hover:bg-blue-700 shadow-sm"
            >
              <span>Get Free Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-zinc-200">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-400 mb-6">
              RELATED OPERATIONAL PLAYBOOKS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-blue-400 shadow-stitch transition-all"
                >
                  <div className="text-[10px] font-bold text-zinc-400 uppercase">
                    {rel.category}
                  </div>
                  <h4 className="mt-2 text-xs font-semibold text-zinc-950 leading-snug line-clamp-2">
                    {rel.title}
                  </h4>
                  <div className="mt-4 text-[10px] text-blue-600 font-semibold flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
