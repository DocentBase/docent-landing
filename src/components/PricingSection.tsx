"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-[#fafaf9] text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Transparent Pricing Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Simple Plans with Free White-Glove Onboarding
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Every plan includes our 24/7 Physical Layer: we insert your students, configure your hardware, and ensure zero operational downtime.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex items-center p-0.5 bg-zinc-100 rounded border border-zinc-200 text-xs font-medium">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-3 py-1 rounded transition ${
                  billingCycle === "monthly" ? "bg-white text-zinc-950 shadow-stitch font-semibold" : "text-zinc-600"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-3 py-1 rounded transition flex items-center gap-1.5 ${
                  billingCycle === "yearly" ? "bg-white text-[#1d4ed8] shadow-stitch font-semibold" : "text-zinc-600"
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-800 font-semibold">20% OFF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch">
          
          {/* Plan 1: Solo Teacher */}
          <div className="rounded-lg border border-zinc-200/90 bg-[#fafaf9] p-5 sm:p-6 shadow-stitch flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div>
                <h3 className="font-semibold text-base text-zinc-900">Solo Educator</h3>
                <p className="text-xs text-zinc-500 mt-0.5">For independent teachers with up to 150 students.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-semibold text-zinc-950 tabular-nums">
                  {billingCycle === "yearly" ? "৳1,200" : "৳1,500"}
                </span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>

              <ul className="space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Up to 150 Active Students</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mobile Phone Attendance (Green/Red Tap)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Automated Grace Period &amp; Unpaid Ledger</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Parent SMS Fee Confirmations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free Initial Data Digitization</span>
                </li>
              </ul>
            </div>

            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-8.5 flex items-center justify-center rounded border border-zinc-300 bg-white text-xs font-semibold text-zinc-800 hover:bg-zinc-50 shadow-stitch transition"
            >
              Get Started
            </a>
          </div>

          {/* Plan 2: Coaching Center (Featured) */}
          <div className="rounded-lg border-2 border-[#1d4ed8] bg-white p-5 sm:p-6 shadow-stitch-md flex flex-col justify-between space-y-5 relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded bg-[#1d4ed8] text-white text-[10px] font-semibold uppercase tracking-wider">
              Most Popular for Academies
            </div>

            <div className="space-y-3.5 pt-1">
              <div>
                <h3 className="font-semibold text-base text-zinc-900">Coaching Academy</h3>
                <p className="text-xs text-zinc-500 mt-0.5">For centers with multiple batches, subjects &amp; staff.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-semibold text-zinc-950 tabular-nums">
                  {billingCycle === "yearly" ? "৳2,800" : "৳3,500"}
                </span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>

              <ul className="space-y-2 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                  <span>Up to 600 Active Students</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                  <span>Biometric Fingerprint + QR Scanner Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                  <span>Universal Student ID (USI Cross-Batch)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                  <span>Daily 10-Pt Homework &amp; Parent Digests</span>
                </li>
                <li className="flex items-center gap-2 text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>On-Site Center Setup &amp; Physical Visits</span>
                </li>
              </ul>
            </div>

            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-9 flex items-center justify-center gap-1.5 rounded bg-[#1d4ed8] hover:bg-[#1e40af] text-xs font-semibold text-white shadow-stitch transition"
            >
              <span>Deploy Academy Cockpit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Plan 3: Multi-Branch Institution */}
          <div className="rounded-lg border border-zinc-200/90 bg-[#fafaf9] p-5 sm:p-6 shadow-stitch flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div>
                <h3 className="font-semibold text-base text-zinc-900">Multi-Branch Institute</h3>
                <p className="text-xs text-zinc-500 mt-0.5">For multi-campus institutions, colleges &amp; large hubs.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-semibold text-zinc-950 tabular-nums">
                  {billingCycle === "yearly" ? "৳6,000" : "৳7,500"}
                </span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>

              <ul className="space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Unlimited Students &amp; Multiple Branches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dedicated Biometric Hardware Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dedicated Physical Account Manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Publication &amp; Question Bank Print Support</span>
                </li>
              </ul>
            </div>

            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-8.5 flex items-center justify-center rounded border border-zinc-300 bg-white text-xs font-semibold text-zinc-800 hover:bg-zinc-50 shadow-stitch transition"
            >
              Contact Enterprise
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
