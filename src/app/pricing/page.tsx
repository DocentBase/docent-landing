"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building,
  Headphones,
  Sparkles,
  HelpCircle,
  Calculator,
} from "lucide-react";

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);

  const tiers = [
    {
      name: "Starter Batch",
      badge: "SOLO TEACHERS & CIRCLES",
      monthlyPrice: 1999,
      annualPrice: 1499,
      students: "Up to 150 Students",
      description: "Perfect for independent teachers, small subject batches, and private academic tutors.",
      features: [
        "150 Active Student USI Profiles",
        "Web Tap 3-Second Attendance",
        "Grace Period Fee Engine with bKash/Nagad",
        "10-Point Daily Homework Tracker",
        "Student & Parent Portal Access",
        "Free Paper Register Data Digitization",
        "Standard Email & Chat Support",
      ],
      ctaText: "Start Starter Plan",
      highlight: false,
    },
    {
      name: "Academy Growth",
      badge: "MOST POPULAR FOR COACHING",
      monthlyPrice: 4999,
      annualPrice: 3999,
      students: "Up to 600 Students",
      description: "Designed for expanding coaching centers, multi-shift batches, and high-volume HSC/SSC centers.",
      features: [
        "600 Active Student USI Profiles",
        "ZKTeco Biometric Terminal Direct Sync",
        "USI 2D Thermal Barcode Scanning",
        "BTRC-Approved Masking SMS Gateway",
        "Automated Model Test & OMR Rank Lists",
        "Multi-Branch Timetable Conflict Detection",
        "Free 24h Data Migration as a Service",
        "On-Site Hardware Technician Dispatch",
        "Dedicated WhatsApp VIP Support Lead",
      ],
      ctaText: "Start Academy Growth",
      highlight: true,
    },
    {
      name: "Institutional Chain",
      badge: "LARGE ACADEMIES & BRANCHES",
      monthlyPrice: 9999,
      annualPrice: 7999,
      students: "1,500+ Students (Multi-Branch)",
      description: "For established educational brands, cadet prep academies, and admission networks.",
      features: [
        "Unlimited Student USI Profiles",
        "Multi-Branch Centralized Super-Admin",
        "Custom Telco Sender ID Integration",
        "Automated Biometric Turnstile Integration",
        "Overnight Question Bank Commercial Printing",
        "Custom Financial & Accounting Export Vouchers",
        "Dedicated On-Site Field Support Engineer",
        "99.9% Uptime Service Level Agreement (SLA)",
        "24/7 Priority Emergency Hotline",
      ],
      ctaText: "Talk to Institutional Team",
      highlight: false,
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
              <span>Transparent & Predictable Pricing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 max-w-3xl mx-auto leading-tight">
              Invest in peace of mind. <br />
              <span className="text-blue-600">Zero hidden fees. Zero per-SMS gouging.</span>
            </h1>
            <p className="mt-4 text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
              Every plan includes free human data entry, so you never have to spend weekends typing student lists into software.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl border border-zinc-200 bg-zinc-50">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  !annualBilling ? "bg-white text-zinc-950 shadow-stitch" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  annualBilling ? "bg-[#1d4ed8] text-white shadow-stitch" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <span>Annual Billing</span>
                <span className="rounded bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 uppercase font-bold">
                  2 Months Free
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-2xl border p-8 transition-all ${
                  t.highlight
                    ? "border-blue-600 bg-white shadow-stitch-lg ring-2 ring-blue-600/10 relative"
                    : "border-zinc-200/90 bg-white shadow-stitch hover:border-zinc-300"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Recommended for Academies
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                    {t.badge}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-zinc-950">{t.name}</h3>
                  <p className="mt-1 text-xs text-zinc-500 min-h-[32px]">{t.description}</p>

                  <div className="mt-6 border-y border-zinc-100 py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 font-mono">
                        ৳{annualBilling ? t.annualPrice.toLocaleString() : t.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">/ month</span>
                    </div>
                    <div className="mt-1 text-xs font-semibold text-blue-700">
                      {t.students}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      INCLUDED WITH PLAN:
                    </div>
                    <ul className="space-y-2.5 text-xs text-zinc-700">
                      {t.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <a
                    href="https://admin.docentbase.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex h-11 items-center justify-center gap-2 rounded-lg text-xs font-semibold shadow-stitch transition-all ${
                      t.highlight
                        ? "bg-[#1d4ed8] text-white hover:bg-[#1e40af]"
                        : "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                    }`}
                  >
                    <span>{t.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Migration Guarantee Callout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-900 font-semibold">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>The DocentBase Zero-Friction Migration Promise</span>
              </div>
              <p className="text-xs text-blue-800/90 leading-relaxed max-w-2xl">
                Worried about the pain of moving 500+ student registers? Our data operations team formats and enters your entire institution's data for free. If you are not 100% satisfied in 30 days, receive a full refund.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-xs font-semibold text-white hover:bg-blue-700 shadow-sm"
            >
              <span>Speak with an Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
