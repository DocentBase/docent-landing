"use client";

import React from "react";
import { 
  Headphones, 
  MapPin, 
  FileSpreadsheet, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Printer, 
  PhoneCall, 
  Users,
  Building2,
  Clock
} from "lucide-react";

export function PhysicalSupportSection() {
  return (
    <section id="physical-support" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em]">THE UNFAIR COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            24/7 Physical Layer Support: We Do The Work For You
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Teachers are not IT system administrators. While other software companies leave you stuck with spreadsheets, Docent deploys physical field staff directly to your coaching center.
          </p>
        </div>

        {/* 4 Superpowers Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between hover:border-zinc-300 transition">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">1. Data Entry as a Service</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Never type 500+ student profiles manually. Send us your paper admission slips, notebook photos, or excel sheets — our team digitizes and formats everything for free.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-semibold text-blue-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% Free Onboarding Included
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between hover:border-zinc-300 transition">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">2. On-Site Physical Visits</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Facing a hardware issue or want your staff trained in person? Our physical field engineers visit your coaching center directly to set up scanners and guide your team.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-semibold text-amber-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Local Field Engineers
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between hover:border-zinc-300 transition">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">3. Publications & Marketing</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We leverage professional publications, question banks, and promotional center materials as a master marketing engine to help your coaching center attract 3x more students.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Student Growth Engine
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between hover:border-zinc-300 transition">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">4. 24/7 Live Teacher Hotline</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Direct phone and WhatsApp access to dedicated support managers. Any doubt or urgent change is handled within 2 minutes flat.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-semibold text-purple-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              &lt; 2 Minute Response Time
            </div>
          </div>

        </div>

        {/* Comparison Callout Box */}
        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">THE DOCENT COMMITMENT</span>
              <h3 className="text-xl font-bold text-zinc-900">
                "Our Goal: Make Teaching 100% Friction-Free"
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                When you switch to Docent, you don't just get software. You get an operations team that inserts student profiles, tests your hardware, prints your materials, and ensures you never waste a single minute on technical headaches.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://admin.docentbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition"
              >
                Launch Admin & Teacher Portal
              </a>
              <a
                href="#pricing"
                className="w-full h-11 inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition"
              >
                View Transparent Pricing
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
