import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "DocentBase Blog — Coaching Operations, Retention & EdTech Guides",
  description: "Tactical guides, business frameworks, hardware reviews, and operational playbooks for coaching center owners, academy directors, and teachers in Bangladesh.",
  keywords: [
    "coaching business blog",
    "tuition fee collection tips",
    "biometric attendance guide",
    "student retention coaching",
    "coaching management bangladesh",
  ],
  openGraph: {
    title: "DocentBase Operational Insights & Blog",
    description: "Battle-tested guides to scaling coaching academies, stopping fee leakage, and automating academic admin.",
    url: "https://docentbase.com/blog",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/blog",
  },
};

export default function BlogIndexPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const remaining = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge Base &amp; Field Insights</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                Tactical playbooks for running <br />
                <span className="text-blue-600">frictionless coaching academies</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                Real data, hardware benchmarks, fee recovery frameworks, and retention strategies from 120+ institutions across Bangladesh.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700 mb-6">
            FEATURED ARTICLES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-stitch hover:border-blue-400 hover:shadow-stitch-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="rounded bg-blue-50 text-blue-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="font-medium text-zinc-800">{post.author.name}</div>
                    <span className="text-zinc-300">•</span>
                    <div className="text-zinc-400">{post.publishedAt}</div>
                  </div>
                  <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Posts Archive */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-400 mb-6">
            ALL OPERATIONAL GUIDES ({BLOG_POSTS.length})
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remaining.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-zinc-200/90 bg-white p-6 shadow-stitch hover:border-blue-400 hover:shadow-stitch-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="font-semibold text-zinc-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="font-mono">{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>{post.publishedAt}</span>
                  <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
