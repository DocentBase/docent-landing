"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Shield,
  GraduationCap,
  Rocket,
  Users,
  CheckCircle2,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  Headphones,
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { Header } from "@/components/help/layout/Header";
import { Footer } from "@/components/help/layout/Footer";
import { CommandPalette } from "@/components/help/search/CommandPalette";
import { InteractiveTroubleshooter } from "@/components/help/troubleshoot/InteractiveTroubleshooter";
import { WhiteGloveModal } from "@/components/help/support/WhiteGloveModal";
import { HELP_CATEGORIES, HELP_ARTICLES, PortalType } from "@/data/help-articles";
import { cn } from "@/lib/utils";

export default function HelpHomePage() {
  const [activePortal, setActivePortal] = useState<PortalType>("all");
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [searchOpen, setSearchOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [quickQuery, setQuickQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (activePortal === "all") return HELP_CATEGORIES;
    return HELP_CATEGORIES.filter((c) => c.portal === "all" || c.portal === activePortal);
  }, [activePortal]);

  const filteredArticles = useMemo(() => {
    let list = HELP_ARTICLES;
    if (activePortal !== "all") {
      list = list.filter((a) => a.portal === "all" || a.portal === activePortal);
    }
    if (quickQuery.trim()) {
      const q = quickQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activePortal, quickQuery]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket": return <Rocket className="w-4 h-4 text-blue-600" />;
      case "Users": return <Users className="w-4 h-4 text-blue-600" />;
      case "CheckCircle2": return <CheckCircle2 className="w-4 h-4 text-blue-600" />;
      case "CreditCard": return <CreditCard className="w-4 h-4 text-blue-600" />;
      case "MessageSquare": return <MessageSquare className="w-4 h-4 text-blue-600" />;
      case "GraduationCap": return <GraduationCap className="w-4 h-4 text-emerald-600" />;
      case "ShieldCheck": return <ShieldCheck className="w-4 h-4 text-blue-600" />;
      case "Headphones": return <Headphones className="w-4 h-4 text-amber-600" />;
      default: return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-zinc-900 font-sans">
      <Header
        activePortal={activePortal}
        onSelectPortal={setActivePortal}
        language={language}
        onToggleLanguage={() => setLanguage(language === "en" ? "bn" : "en")}
      />

      <main className="flex-1">
        {/* Swiss Minimalist Hero Section */}
        <section className="relative border-b border-zinc-200/90 bg-white py-14 sm:py-20 overflow-hidden swiss-grid-pattern">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>DocentBase Knowledge & Operations Desk</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                {language === "en" ? (
                  <>
                    How can we help your <span className="text-blue-600">coaching operations</span> today?
                  </>
                ) : (
                  <>
                    আপনার <span className="text-blue-600">কোচিং পরিচালনা</span> সম্পর্কিত যেকোনো সহায়তায় আমরা প্রস্তুত।
                  </>
                )}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
                {language === "en"
                  ? "Explore precision documentation, interactive troubleshooting wizards, and operational blueprints for DocentBase Admin (admin.docentbase.com) and Student Cockpit (student.docentbase.com)."
                  : "অ্যাডমিন পোর্টাল ও স্টুডেন্ট পোর্টালের সম্পূর্ণ ব্যবহার নির্দেশিকা, দ্রুত সমস্যা সমাধান এবং হোয়াইট-গ্লোভ সাপোর্ট।"}
              </p>

              {/* Main Search Interactive Box */}
              <div className="mt-8 relative max-w-2xl">
                <div className="flex items-center rounded-xl border border-zinc-300 bg-white p-2 shadow-sm focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <Search className="w-5 h-5 text-zinc-400 ml-2.5 shrink-0" />
                  <input
                    type="text"
                    placeholder={
                      language === "en"
                        ? "Search documentation, error symptoms, bKash fees, USI, attendance... (Press ⌘K)"
                        : "খুঁজুন: উপস্থিতি, বিকাশ পেমেন্ট, জয়েন কোড, এসএমএস নোটিশ... (⌘K চাপুন)"
                    }
                    value={quickQuery}
                    onChange={(e) => setQuickQuery(e.target.value)}
                    className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                  />
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="hidden sm:inline-flex items-center gap-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 px-2.5 py-1.5 text-[11px] font-medium text-zinc-700 transition-colors"
                  >
                    <span>⌘K</span>
                  </button>
                </div>

                {/* Popular Search Pills */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-zinc-500">
                  <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Popular:</span>
                  {[
                    { label: "3s Rapid Attendance", slug: "rapid-attendance" },
                    { label: "bKash Fee Automation", slug: "payment-gateways" },
                    { label: "USI Cross-Batch", slug: "student-enrollment" },
                    { label: "Join Code Guide", slug: "join-code-guide" },
                    { label: "8 RBAC Roles", slug: "team-and-roles" },
                  ].map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/help/articles/${tag.slug}`}
                      className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[11px] text-zinc-600 hover:border-blue-300 hover:text-blue-700 transition-colors"
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Portal Focus Switcher Bar */}
        <section className="border-b border-zinc-200 bg-white sticky top-14 z-30 shadow-2xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="flex items-center justify-between overflow-x-auto py-2.5 gap-4">
              <div className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400 mr-1" />
                <span className="text-xs font-semibold text-zinc-700">Filter Portal:</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActivePortal("all")}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                      activePortal === "all"
                        ? "bg-zinc-900 text-white font-semibold shadow-2xs"
                        : "text-zinc-600 hover:bg-zinc-100"
                    )}
                  >
                    All Documentation ({HELP_ARTICLES.length})
                  </button>
                  <button
                    onClick={() => setActivePortal("admin")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                      activePortal === "admin"
                        ? "bg-blue-600 text-white font-semibold shadow-2xs"
                        : "text-zinc-600 hover:bg-zinc-100"
                    )}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Admin Portal (admin.docentbase.com)</span>
                  </button>
                  <button
                    onClick={() => setActivePortal("student")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                      activePortal === "student"
                        ? "bg-emerald-600 text-white font-semibold shadow-2xs"
                        : "text-zinc-600 hover:bg-zinc-100"
                    )}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Student Portal (student.docentbase.com)</span>
                  </button>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3 text-xs text-zinc-500">
                <span>Showing {filteredArticles.length} guides</span>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories Grid */}
        <section className="py-12 sm:py-16 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                EXPLORE TOPICS
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 mt-0.5">
                Documentation Modules
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="group relative rounded-xl border border-zinc-200 bg-white p-5 shadow-2xs hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-zinc-400">
                    {cat.articleCount} {cat.articleCount === 1 ? "article" : "articles"}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {language === "en" ? cat.name : cat.nameBn}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-medium text-blue-600">
                  <span className="text-[11px] text-zinc-400 font-mono">
                    {cat.portal === "admin" ? "Admin Cockpit" : cat.portal === "student" ? "Student App" : "Universal"}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Browse</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Documentation Guides & Articles Grid */}
        <section className="py-12 bg-white border-y border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                  DOCUMENTATION REPOSITORY
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 mt-0.5">
                  Core Functionality Blueprints
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 font-medium">Sorted by operational priority</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/help/articles/${article.slug}`}
                  className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 hover:border-blue-500 hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 group-hover:text-blue-600">
                        {article.categoryName}
                      </span>
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 text-[10px] font-medium font-mono",
                          article.portal === "admin"
                            ? "bg-blue-50 text-blue-700"
                            : article.portal === "student"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-zinc-100 text-zinc-600"
                        )}
                      >
                        {article.portal === "admin" ? "admin.*" : article.portal === "student" ? "student.*" : "all"}
                      </span>
                    </div>

                    <h3 className="mt-2 text-sm font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors leading-snug">
                      {language === "en" ? article.title : article.titleBn}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                      {language === "en" ? article.summary : article.summaryBn}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="font-mono">{article.readTime}</span>
                    <span className="flex items-center gap-1 font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Self-Service Troubleshooting Section */}
        <section className="py-16 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">
              SELF-SERVICE DIAGNOSTIC
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 mt-0.5">
              Interactive Problem Solver
            </h2>
            <p className="text-xs text-zinc-500 mt-1 max-w-2xl">
              Facing an issue with attendance syncing, bKash fee verification, join codes, or parent SMS? Select your symptom below for an instant guided resolution path.
            </p>
          </div>

          <InteractiveTroubleshooter language={language} />
        </section>

        {/* White-Glove Support Concierge Hero */}
        <section className="py-12 bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-md bg-blue-900/60 border border-blue-700/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-300">
                  <Headphones className="w-3 h-3" />
                  <span>White-Glove Human Operations Desk</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Have 500+ students on paper registers? Let our team do the data entry for free.
                </h2>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                  We know transitioning from paper books or messy Excel sheets takes time. Send us photos of your student register or request an on-site hardware engineer to set up biometric turnstiles at your coaching academy.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>24h Turnaround Data Digitisation</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>ZKTeco & Wi-Fi On-Site Engineer Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dedicated WhatsApp Hotline</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => setSupportOpen(true)}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-xs font-semibold text-white hover:bg-blue-500 active:scale-[0.98] transition-all shadow-md"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Request White-Glove Support</span>
                </button>
                <a
                  href="https://wa.me/8801700000000?text=Hello%20DocentBase,%20I%20need%20help%20with%20my%20coaching%20center"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp (+880)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Global Modals */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <WhiteGloveModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </div>
  );
}
