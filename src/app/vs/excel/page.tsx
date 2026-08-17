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
  title: "DocentBase vs. Excel Spreadsheets — Coaching Management Comparison",
  description: "Discover why relying on Excel for tuition fee tracking and student attendance causes 15% revenue leakage, and how DocentBase automates the entire process.",
  keywords: [
    "DocentBase vs Excel",
    "coaching excel template alternative",
    "tuition fee excel vs software",
  ],
  openGraph: {
    title: "DocentBase vs. Excel Spreadsheets for Coaching Centers",
    description: "Compare automated bKash reconciliation, sub-second biometric attendance, and USI student tracking against manual Excel sheets.",
    url: "https://docentbase.com/vs/excel",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/vs/excel",
  },
};

export default function VsExcelPage() {
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
            <span className="rounded bg-blue-50 text-blue-700 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
              Head-to-Head Architecture Breakdown
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              DocentBase vs. Excel Spreadsheets
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Why spreadsheet formulas, manual bKash TrxID copy-pasting, and disconnected files cost coaching academies 18+ hours a week.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-xs sm:text-sm text-zinc-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950">
                1. The Limitation of Manual bKash TrxID Matching
              </h2>
              <p>
                In Excel, matching a student's monthly fee requires an administrator to read SMS alerts on a mobile phone, verify the 10-character transaction ID, locate the student's row, and type the amount. When dealing with 300+ students across multiple batches, typos and forgotten dues lead to <strong>14.8% revenue leakage</strong>.
              </p>
              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-blue-900 font-medium">
                <strong>DocentBase Approach:</strong> When a guardian pays via bKash or Nagad on the student portal, payment is instantly reconciled, the ledger is cleared, and an official SMS receipt is sent in under 2 seconds without human touch.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950">
                2. Real-Time Hardware &amp; Biometric Synchronization
              </h2>
              <p>
                Excel cannot connect to ZKTeco biometric terminals or 2D thermal barcode scanners. Attendance must be entered manually from paper roll-call sheets, taking 15–20 minutes per batch.
              </p>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 text-emerald-900 font-medium">
                <strong>DocentBase Approach:</strong> 500 students clear the turnstile in under 4 minutes, and absent guardians receive immediate SMS alerts.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950">
                3. We Move Your Data for Free
              </h2>
              <p>
                You don't have to spend hours converting your current Excel files. Send your files or photos to DocentBase, and our team digitizes your entire center within 24 hours at zero cost.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">Ready to leave messy spreadsheets behind?</h3>
              <p className="text-xs text-zinc-400 mt-1">Start your free 30-day trial with full data digitization included.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-xs font-semibold text-white hover:bg-blue-500 shrink-0"
            >
              <span>Switch to DocentBase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
