import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DocentBase Comparisons — Why Coaching Centers Switch from Excel & Generic ERPs",
  description: "Detailed feature comparison: DocentBase vs. Manual Excel Spreadsheets, Paper Registers, and Heavy Generic ERP software.",
  keywords: [
    "coaching software comparison",
    "DocentBase vs Excel",
    "DocentBase vs generic ERP",
    "best coaching management tool Bangladesh",
  ],
  openGraph: {
    title: "DocentBase vs. Alternatives Comparison",
    description: "See why 120+ coaching centers replaced paper notebooks and generic ERPs with DocentBase.",
    url: "https://docentbase.com/compare",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/compare",
  },
};

export default function CompareIndexPage() {
  const comparisonRows = [
    {
      feature: "Fee Collection Automation",
      docent: "Automated grace countdown, direct bKash/Nagad checkout, instant SMS receipts",
      excel: "Manual reconciliation of 10-digit TrxIDs, forgotten dues, high leakage",
      genericErp: "Cumbersome payment gateway requiring bank merchant credentials",
    },
    {
      feature: "Attendance Speed (500 Students)",
      docent: "3.2 minutes total (ZKTeco Biometrics + USI 2D Barcode scanner)",
      excel: "15–20 minutes lost per batch using paper roll-calls",
      genericErp: "Slow RFID readers with 5-second processing delays",
    },
    {
      feature: "Free Human Data Entry",
      docent: "100% Free 24h register digitization & ongoing on-site setup",
      excel: "You must type all student records yourself",
      genericErp: "Costly implementation consultants ($500+ onboarding fee)",
    },
    {
      feature: "Daily Homework & Progress",
      docent: "90-second 10-point micro-evaluation with weekly parent graph",
      excel: "No parent visibility into homework or daily performance",
      genericErp: "Complex grading rubrics requiring manual teacher entries",
    },
    {
      feature: "Multi-Batch Enrollment (USI)",
      docent: "Single student ID across all morning/evening batches with conflict prevention",
      excel: "Duplicate rows causing balance mismatches and wrong totals",
      genericErp: "Rigid single-class structure built for K-12 schools",
    },
    {
      feature: "Parent Absent Alert SMS",
      docent: "Automated instant SMS (< 3s) via BTRC masking routes",
      excel: "Requires manual copy-pasting into bulk SMS portals",
      genericErp: "Delayed email notifications rarely checked by guardians",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Objective Feature Breakdown</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 max-w-3xl mx-auto leading-tight">
              Why leading coaching centers switch to <span className="text-blue-600">DocentBase</span>.
            </h1>
            <p className="mt-4 text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
              Compare DocentBase against manual spreadsheets and bloated generic school ERPs.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="overflow-x-auto rounded-2xl border border-zinc-200/90 bg-white shadow-stitch">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 font-mono text-zinc-600">
                  <th className="p-5 font-semibold text-zinc-900 w-1/4">Operational Capability</th>
                  <th className="p-5 font-bold text-blue-700 bg-blue-50/60 w-1/4">
                    DocentBase Cockpit
                  </th>
                  <th className="p-5 font-semibold w-1/4">Manual Excel / Registers</th>
                  <th className="p-5 font-semibold w-1/4">Traditional School ERPs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-5 font-semibold text-zinc-950 align-top">
                      {row.feature}
                    </td>
                    <td className="p-5 bg-blue-50/30 text-zinc-900 font-medium align-top">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{row.docent}</span>
                      </div>
                    </td>
                    <td className="p-5 text-zinc-500 align-top">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.excel}</span>
                      </div>
                    </td>
                    <td className="p-5 text-zinc-500 align-top">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{row.genericErp}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Dedicated Subpage Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/vs/excel"
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-stitch hover:border-blue-400 transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                HEAD-TO-HEAD
              </span>
              <h3 className="text-xl font-bold text-zinc-950 mt-1 group-hover:text-blue-600 transition-colors">
                DocentBase vs. Manual Excel Spreadsheets
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                Why 10-digit bKash reconciliation in Excel breaks down at 100+ students, and how automated ledgers recover ৳35,000+ monthly.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Read Full Comparison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/vs/traditional-erp"
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-stitch hover:border-blue-400 transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                HEAD-TO-HEAD
              </span>
              <h3 className="text-xl font-bold text-zinc-950 mt-1 group-hover:text-blue-600 transition-colors">
                DocentBase vs. Traditional School ERPs
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                Why heavy K-12 school systems fail in high-speed coaching batches with multi-shift routines and daily homework micro-evaluations.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Read Full Comparison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
