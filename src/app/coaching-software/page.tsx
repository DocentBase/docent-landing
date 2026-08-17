import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  CreditCard,
  Fingerprint,
  BookOpen,
  Users,
  Smartphone,
  Star,
  Building,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coaching Center Management Software in Bangladesh — DocentBase",
  description: "The #1 coaching software for HSC, SSC, Cadet & University Admission academies in Bangladesh. Automated bKash fees, biometric attendance, and 24/7 on-site support.",
  keywords: [
    "coaching management software bangladesh",
    "coaching center software dhaka",
    "hsc admission coaching software",
    "tuition fee app bangladesh",
    "biometric student attendance bangladesh",
    "coaching billing software bkash",
  ],
  openGraph: {
    title: "DocentBase — Coaching Center Management Software",
    description: "Built for Bangladeshi coaching centers. Stop manual book-keeping and automate fee collection with 1-click bKash receipts.",
    url: "https://docentbase.com/coaching-software",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/coaching-software",
  },
};

export default function CoachingSoftwarePage() {
  const specializedTypes = [
    {
      title: "HSC & SSC Academic Coaching",
      slogan: "High-volume multi-shift batches (500–2,000 students)",
      description:
        "Manage overlapping morning and evening shifts for Class 9 through 12. Instant SMS alerts when students miss physics or math classes, with automated monthly grace fee schedules.",
    },
    {
      title: "Medical & Engineering Admission Batches",
      slogan: "Intensive model tests with negative marking",
      description:
        "Run 4 model tests per week with instant percentile calculations, highest score benchmarks, and automated SMS marks distribution to guardians within 15 minutes of exam completion.",
    },
    {
      title: "Cadet College & BCS / Job Preparation",
      slogan: "Weekend mock tests & centralized OMR scorecards",
      description:
        "Custom batch rankings, question bank printing dispatch, and multi-subject fee packages with automated student performance trend analytics.",
    },
    {
      title: "Private Teacher Circles & Small Batches",
      slogan: "50–200 students across 4–6 daily batches",
      description:
        "Zero hardware requirement. Mark attendance in 3 seconds from your mobile phone and accept direct bKash fees without awkward verbal debt collection.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-800 mb-4">
                <Building className="w-3.5 h-3.5 text-emerald-600" />
                <span>Purpose-Built for Bangladeshi Coaching Academies</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                Stop wasting hours on ledgers. <br />
                <span className="text-blue-600">Run your coaching center on autopilot</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                DocentBase handles 100% of the administrative friction—from biometric attendance and bKash fees to 10-point daily homework and parent SMS. Plus, we digitize your registers for free.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://admin.docentbase.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] px-5 text-xs font-semibold text-white shadow-stitch transition-all"
                >
                  <span>Start Free Trial (admin.docentbase.com)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 shadow-stitch transition-colors"
                >
                  <span>Book In-Person Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories of Coaching */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-10 text-center sm:text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
              ACADEMIC SPECIALIZATIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 mt-1">
              Engineered for every coaching format in Bangladesh
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedTypes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-stitch"
              >
                <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider">
                  {item.slogan}
                </span>
                <h3 className="text-xl font-semibold text-zinc-950 mt-2">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant Setup Ready</span>
                  </span>
                  <Link
                    href="/contact"
                    className="font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Get Setup</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why DocentBase Beats Excel */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12 shadow-stitch">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                  THE PROVEN ROI
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight">
                  Recover ৳35,000+ in lost tuition fees every single month.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  When you eliminate manual payment entry errors, stop forgotten dues, and automate guardian SMS reminders, the system pays for itself in the first 7 days of every month.
                </p>
              </div>

              <div className="flex flex-col gap-3 justify-center">
                <Link
                  href="/pricing"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-xs font-semibold text-white hover:bg-blue-700 shadow-stitch transition-all"
                >
                  <span>Explore Transparent Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/compare"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-6 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  <span>Compare vs. Excel &amp; Heavy ERPs</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
