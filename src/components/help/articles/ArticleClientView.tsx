"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  Headphones,
  ArrowRight,
  Shield,
  GraduationCap,
} from "lucide-react";
import { Header } from "@/components/help/layout/Header";
import { Footer } from "@/components/help/layout/Footer";
import { Callout, StatusBadge } from "@/components/help/ui/Callout";
import { CopyButton } from "@/components/help/ui/CopyButton";
import { WhiteGloveModal } from "@/components/help/support/WhiteGloveModal";
import { HelpArticle } from "@/data/help-articles";

export function ArticleClientView({
  article,
  relatedArticles,
}: {
  article: HelpArticle;
  relatedArticles: HelpArticle[];
}) {
  const [feedbackGiven, setFeedbackGiven] = useState<"yes" | "no" | null>(null);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-zinc-900 font-sans">
      <Header />

      <main className="flex-1">
        {/* Article Breadcrumb Header Bar */}
        <div className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <nav className="flex items-center gap-2 text-xs text-zinc-500">
                <Link href="/help" className="hover:text-zinc-900 transition-colors">
                  Help Center
                </Link>
                <span>/</span>
                <span className="text-zinc-700 font-medium">{article.categoryName}</span>
                <span>/</span>
                <span className="text-zinc-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                  {article.title}
                </span>
              </nav>

              <div className="flex items-center gap-2">
                <StatusBadge portal={article.portal} />
                <CopyButton text={typeof window !== "undefined" ? window.location.href : ""} />
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Layout */}
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Editorial Column */}
            <article className="lg:col-span-8 rounded-xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-2xs">
              {/* Article Header */}
              <div className="space-y-4 border-b border-zinc-100 pb-8">
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{article.readTime}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Updated {article.lastUpdated}</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-semibold tracking-[-0.04em] text-zinc-950 leading-tight">
                  {article.title}
                </h1>

                <div className="rounded-lg bg-zinc-50 border border-zinc-200/80 p-4 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700 mb-1">
                    SUMMARY OVERVIEW
                  </div>
                  <p>{article.summary}</p>
                </div>
              </div>

              {/* Body Sections */}
              <div className="mt-8 space-y-10 text-xs sm:text-sm leading-relaxed text-zinc-700">
                {article.sections.map((section, idx) => (
                  <section key={idx} className="space-y-3.5">
                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 border-b border-zinc-100 pb-2">
                      {section.heading}
                    </h2>

                    <p className="text-zinc-600 leading-relaxed">{section.content}</p>

                    {/* Step-by-step list if available */}
                    {section.steps && (
                      <div className="my-4 rounded-lg border border-zinc-200 bg-zinc-50/50 p-4 space-y-2.5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                          ACTIONABLE CHECKLIST:
                        </div>
                        <ul className="space-y-2">
                          {section.steps.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5 text-xs text-zinc-800">
                              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Callouts */}
                    {section.callout && (
                      <Callout type={section.callout.type}>
                        {section.callout.text}
                      </Callout>
                    )}
                  </section>
                ))}
              </div>

              {/* Was this helpful feedback widget */}
              <div className="mt-12 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-600 font-medium">
                  Was this article helpful to your operations?
                </div>

                <div className="flex items-center gap-2">
                  {feedbackGiven ? (
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Thank you for your feedback!
                    </span>
                  ) : (
                    <>
                      <button
                        onClick={() => setFeedbackGiven("yes")}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-colors"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Yes</span>
                      </button>
                      <button
                        onClick={() => setFeedbackGiven("no")}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-colors"
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                        <span>No</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </article>

            {/* Sidebar Sticky Navigation & Help Escalation */}
            <aside className="lg:col-span-4 space-y-5">
              {/* Portal Context Card */}
              <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-2xs">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400 mb-2">
                  PORTAL SPECIFICATION
                </div>
                <div className="flex items-center gap-2.5">
                  {article.portal === "admin" ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                      <Shield className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-semibold text-zinc-900">
                      {article.portal === "admin"
                        ? "Admin Portal (admin.docentbase.com)"
                        : article.portal === "student"
                        ? "Student App (student.docentbase.com)"
                        : "Universal Ecosystem"}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      Category: {article.categoryName}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Guides List */}
              {relatedArticles.length > 0 && (
                <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-2xs">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-3">
                    RELATED DOCUMENTATION
                  </div>
                  <div className="space-y-2.5">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/help/articles/${rel.slug}`}
                        className="block rounded-lg border border-zinc-100 p-3 hover:border-blue-400 hover:bg-blue-50/20 transition-all group"
                      >
                        <div className="text-xs font-medium text-zinc-900 group-hover:text-blue-700 leading-snug">
                          {rel.title}
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px] text-zinc-400">
                          <span>{rel.readTime}</span>
                          <span className="text-blue-600 font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                            View <ArrowRight className="w-2.5 h-2.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* White-Glove Support Widget */}
              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-blue-900">
                  <Headphones className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold">Need Hands-on Assistance?</span>
                </div>
                <p className="text-xs text-blue-800/80 leading-relaxed">
                  Our white-glove engineering and operations desk is available 24/7 for data migration, batch setups, and on-site hardware dispatch.
                </p>
                <button
                  onClick={() => setSupportOpen(true)}
                  className="w-full flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700 active:scale-[0.98] transition-all"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Request Support Dispatch</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <WhiteGloveModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </div>
  );
}
