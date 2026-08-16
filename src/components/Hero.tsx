"use client";

import React from "react";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Sparkles, Building2, Users, FileText, ChevronRight } from "lucide-react";
import { HeroCockpit } from "./HeroCockpit";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden bg-dot-pattern">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/60 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Top Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-blue-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em]">
              THE CALM OPERATOR COCKPIT FOR COACHING CENTERS
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.08] sm:leading-[1.04]">
            Frictionless Operations for Teachers Who Just Want to <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-4">Teach.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Eliminate fee chasing, automated parent SMS on grace period expiry, multi-modal attendance (phone tap, biometric & QR), and 10-point daily homework tracking. <strong className="text-zinc-900 font-semibold">Backed by 24/7 on-site data entry and physical center visits.</strong>
          </p>

          {/* Main Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-[0.98] transition"
            >
              <span>Access Teacher Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://student.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-800 shadow-2xs hover:bg-zinc-50 active:scale-[0.98] transition"
            >
              <Users className="w-4 h-4 text-zinc-500" />
              <span>Student & Parent Portal</span>
            </a>

            <a
              href="#physical-support"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-50 border border-amber-200/80 px-4 text-xs font-bold text-amber-900 hover:bg-amber-100/70 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Request Free Center Visit</span>
            </a>
          </div>

          {/* Trust bullet signals */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Zero Tech Knowledge Needed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              We Type & Insert All Student Data For You
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Universal Student ID (Cross-Batch Auto Resolver)
            </span>
          </div>

        </div>

        {/* Interactive Master Hero Cockpit */}
        <div className="mt-12 sm:mt-16">
          <HeroCockpit />
        </div>

        {/* Operational Proof Metric Pills */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <div className="text-2xl font-bold text-zinc-950 tabular-nums">0 hrs</div>
            <div className="text-xs text-zinc-500 font-medium mt-0.5">Teacher Data Entry Time (We do it)</div>
          </div>
          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <div className="text-2xl font-bold text-emerald-600 tabular-nums">100%</div>
            <div className="text-xs text-zinc-500 font-medium mt-0.5">Parent SMS Receipt Delivery</div>
          </div>
          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <div className="text-2xl font-bold text-zinc-950 tabular-nums">1-Sec</div>
            <div className="text-xs text-zinc-500 font-medium mt-0.5">Biometric & QR Check-In Speed</div>
          </div>
          <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-2xs">
            <div className="text-2xl font-bold text-blue-600 tabular-nums">24/7</div>
            <div className="text-xs text-zinc-500 font-medium mt-0.5">On-Ground & Remote Support</div>
          </div>
        </div>

      </div>
    </section>
  );
}
