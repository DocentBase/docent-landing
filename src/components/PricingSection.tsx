"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Headphones, Shield } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            TRANSPARENT INSTITUTION PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Simple Plans with Free White-Glove Onboarding
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Every plan includes our 24/7 Physical Layer: we insert your students, set up your hardware, and guarantee 100% friction-free operations.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="inline-flex items-center p-1 bg-zinc-100 rounded-xl border border-zinc-200 text-xs font-semibold">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  billingCycle === "monthly" ? "bg-white text-zinc-950 shadow-2xs" : "text-zinc-600"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                  billingCycle === "yearly" ? "bg-white text-blue-700 shadow-2xs" : "text-zinc-600"
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">20% OFF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Plan 1: Solo Teacher */}
          <div className="rounded-2xl border border-zinc-200 bg-[#F8FAFC] p-6 sm:p-7 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-zinc-900">Solo Educator</h3>
                <p className="text-xs text-zinc-500 mt-1">For independent batch teachers with up to 150 students.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-zinc-950 tabular-nums">
                  {billingCycle === "yearly" ? "৳1,200" : "৳1,500"}
                </span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Up to 150 Active Students</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mobile Phone Attendance (Green/Red Tap)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated Grace Period & Unpaid List</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Parent SMS Fee Confirmations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Initial Data Entry by Docent</span>
                </li>
              </ul>
            </div>

            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 flex items-center justify-center rounded-xl border border-zinc-300 bg-white text-xs font-bold text-zinc-800 hover:bg-zinc-50 transition"
            >
              Get Started Free
            </a>
          </div>

          {/* Plan 2: Coaching Center (Featured) */}
          <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 sm:p-7 shadow-lg shadow-blue-500/10 flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-2xs">
              MOST POPULAR FOR ACADEMIES
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <h3 className="font-bold text-lg text-zinc-900">Coaching Academy</h3>
                <p className="text-xs text-zinc-500 mt-1">For growing coaching centers with multiple batches & staff.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-zinc-950 tabular-nums">
                  {billingCycle === "yearly" ? "৳2,800" : "৳3,500"}
                </span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-700">
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Up to 600 Active Students</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Biometric Fingerprint + QR Scanner Support</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Universal Student ID (USI Cross-Batch)</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Daily 10-Pt Homework & Parent Dossiers</span>
                </li>
                <li className="flex items-center gap-2 font-medium text-amber-800 bg-amber-50 px-2 py-1 rounded-md">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>On-Site Center Setup & Physical Visits</span>
                </li>
              </ul>
            </div>

            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-xs font-bold text-white shadow-md hover:bg-blue-700 active:scale-98 transition"
            >
              <span>Deploy for Your Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Plan 3: Multi-Branch Institution */}
          <div className="rounded-2xl border border-zinc-200 bg-[#F8FAFC] p-6 sm:p-7 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-zinc-900">Multi-Branch Institute</h3>
                <p className="text-xs text-zinc-500 mt-1">For multi-campus institutions, colleges & large coaching hubs.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-zinc-950 tabular-nums">
                  {billingCycle === "yearly" ? "৳6,000" : "৳7,500"}
                </span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unlimited Students & Multiple Branches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Biometric Hardware Deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Physical Support Manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Publication & Marketing Materials Package</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Domain Sub-Branding</span>
                </li>
              </ul>
            </div>

            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 flex items-center justify-center rounded-xl border border-zinc-300 bg-white text-xs font-bold text-zinc-800 hover:bg-zinc-50 transition"
            >
              Contact Enterprise Sales
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
