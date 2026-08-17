import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DocentBase vs. Traditional School ERPs — Built for Fast-Paced Coaching",
  description: "Why traditional school ERP software fails in batch coaching centers, and how DocentBase provides the frictionless alternative.",
  keywords: [
    "DocentBase vs school ERP",
    "coaching software vs school management",
    "best coaching ERP bangladesh",
  ],
  openGraph: {
    title: "DocentBase vs. Traditional School ERP Systems",
    description: "Compare rapid 3-second attendance, 10-point daily homework, and 1-click bKash receipts with bloated generic school ERPs.",
    url: "https://docentbase.com/vs/traditional-erp",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/vs/traditional-erp",
  },
};

export default function VsTraditionalErpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/compare"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Comparisons</span>
          </Link>

          <div className="space-y-4 border-b border-zinc-200/80 pb-8">
            <span className="rounded bg-purple-50 text-purple-700 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
              Head-to-Head Architecture Breakdown
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              DocentBase vs. Traditional School ERPs
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Why heavyweight school software built for K-12 institutions breaks down in high-velocity coaching academies.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-xs sm:text-sm text-zinc-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950">
                1. Multi-Shift Batch Routines vs. Rigid School Schedules
              </h2>
              <p>
                Traditional school ERPs assume every student attends from 8:00 AM to 2:00 PM with fixed homerooms. In coaching academies, students arrive for specialized batches (e.g. Morning 7:30 AM HSC Physics, Evening 5:00 PM Higher Math). DocentBase's USI architecture manages cross-batch timetable clashes automatically.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950">
                2. Onboarding &amp; Usability
              </h2>
              <p>
                Generic ERPs require weeks of expensive staff training, thick user manuals, and mandatory field consultants. DocentBase is intuitive, beautifully minimal, and operable from day one without training.
              </p>
              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-blue-900 font-medium">
                <strong>Zero Training Required:</strong> Teachers mark attendance and record 10-point daily homework in under 90 seconds directly from their mobile phone.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950">
                3. Physical Ground Support
              </h2>
              <p>
                Generic software vendors leave you to figure out hardware wiring alone. DocentBase dispatches on-site technicians to configure your ZKTeco devices and digitizes all paper records for free.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">Switch to the calm coaching operating system</h3>
              <p className="text-xs text-zinc-400 mt-1">Free 24h data migration from any legacy system.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-xs font-semibold text-white hover:bg-blue-500 shrink-0"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
