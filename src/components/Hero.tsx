"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Sparkles, LayoutDashboard, Sliders } from "lucide-react";
import { HeroCockpit } from "./HeroCockpit";

export function Hero() {
  const [viewMode, setViewMode] = useState<"interactive" | "preview">("interactive");

  return (
    <header className="relative pt-24 sm:pt-32 pb-14 overflow-hidden bg-gradient-to-b from-[#fbf8ff] to-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Top Editorial Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          
          {/* Section Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-200/90 bg-white text-zinc-700 shadow-stitch">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1d4ed8]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-600 font-mono">
              High-End Coaching Infrastructure
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-zinc-950 leading-[1.12] sm:leading-[1.06]">
            The Calm Operating System for Coaching Centers &amp; Teachers.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Automate fee collection, secure multi-modal attendance, and get white-glove on-site support. Designed to let educators focus purely on teaching, not administration.
          </p>

          {/* Main Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#0037b0] hover:bg-[#1d4ed8] px-6 text-xs sm:text-sm font-semibold text-white shadow-stitch active:translate-y-px transition"
            >
              <span>Launch Teacher Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#physical-support"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-5 text-xs sm:text-sm font-medium text-zinc-800 shadow-stitch hover:bg-zinc-50 active:translate-y-px transition"
            >
              <span>Book On-Site Setup</span>
            </a>

            <a
              href="https://student.docentbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-4 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Student Portal</span>
            </a>
          </div>

          {/* Trust bullet signals */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-normal">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Zero technical knowledge needed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              White-glove paper data entry included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Universal Student ID (USI) auto-resolver
            </span>
          </div>

        </div>

        {/* View Toggle Bar (Interactive Simulator vs High-Fidelity Preview) */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center p-0.5 bg-zinc-200/60 rounded-md border border-zinc-200 text-xs font-medium">
            <button
              onClick={() => setViewMode("interactive")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded transition ${
                viewMode === "interactive"
                  ? "bg-white text-zinc-950 shadow-stitch font-semibold"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-[#0037b0]" />
              <span>Interactive Cockpit Simulator</span>
            </button>
            <button
              onClick={() => setViewMode("preview")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded transition ${
                viewMode === "preview"
                  ? "bg-white text-zinc-950 shadow-stitch font-semibold"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#0037b0]" />
              <span>Dashboard UI Frame</span>
            </button>
          </div>
        </div>

        {/* Main Hero Showcase */}
        <div className="mt-4">
          {viewMode === "interactive" ? (
            <HeroCockpit />
          ) : (
            <div className="max-w-5xl mx-auto border border-zinc-200/90 rounded-xl overflow-hidden shadow-stitch-md bg-white p-2">
              <img
                src="/images/hero-ui.png"
                alt="Docent Dashboard Interface"
                className="w-full h-auto rounded-lg border border-zinc-200/60 object-cover"
              />
            </div>
          )}
        </div>

        {/* High-Velocity Metric Counter Strip */}
        <div className="mt-8 border-y border-zinc-200/80 bg-white py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-[#0037b0] tabular-nums">0 hrs</div>
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mt-0.5">Teacher Data Entry</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-[#0037b0] tabular-nums">100%</div>
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mt-0.5">Parent SMS Delivery</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-[#0037b0] tabular-nums">&lt;1s</div>
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mt-0.5">Biometric Check-in</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-[#0037b0] tabular-nums">24/7</div>
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mt-0.5">On-Ground Field Team</div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
