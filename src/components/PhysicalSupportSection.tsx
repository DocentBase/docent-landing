"use client";

import React from "react";
import { 
  FileSpreadsheet, 
  MapPin, 
  Printer, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export function PhysicalSupportSection() {
  return (
    <section id="physical-support" className="py-20 bg-[#fafaf9] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-amber-200 bg-amber-50/80 text-amber-900 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em]">
              White-Glove Physical Layer
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            24/7 Ground Field Support &amp; On-Site Data Entry
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Teachers are educators, not database administrators. While standard SaaS expects you to type hundreds of student profiles, Docent deploys physical field staff directly to your center.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">SERVICE 01</div>
              <h3 className="font-semibold text-sm text-zinc-900">Data Entry as a Service</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Send paper admission slips, notebook photos, or excel sheets. Our dedicated team digitizes and verifies all student records for free.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-medium text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% Free Onboarding
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-amber-700 font-mono">SERVICE 02</div>
              <h3 className="font-semibold text-sm text-zinc-900">In-Person Center Visits</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Need biometric hardware installed or reception staff trained? Our field engineers visit your physical coaching center in person.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-medium text-amber-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
              On-Ground Engineers
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">SERVICE 03</div>
              <h3 className="font-semibold text-sm text-zinc-900">Publications &amp; Question Banks</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We assist in formatting, layout, and printing of customized question banks, lecture sheets, and promotional center materials.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-medium text-zinc-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Print &amp; Growth Support
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">SERVICE 04</div>
              <h3 className="font-semibold text-sm text-zinc-900">24/7 Priority Hotline</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Direct phone and WhatsApp access to dedicated account managers. Urgent roster adjustments or technical questions answered in minutes.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs font-medium text-zinc-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              &lt; 2-Minute Response
            </div>
          </div>

        </div>

        {/* Commitment Box */}
        <div className="mt-8 rounded-xl border border-zinc-200/90 bg-white p-6 shadow-stitch">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1d4ed8]">The Docent Guarantee</span>
              <h3 className="text-lg font-semibold text-zinc-950">
                "Zero Hours Lost to Administrative Friction"
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                When you partner with Docent, you don't just get software. You receive an operational support team that enters student profiles, configures hardware on-site, and ensures your coaching center runs effortlessly.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://admin.docentbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-9.5 inline-flex items-center justify-center rounded-md bg-[#1d4ed8] hover:bg-[#1e40af] text-xs font-semibold text-white shadow-stitch transition"
              >
                <span>Launch Teacher Cockpit</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a
                href="#pricing"
                className="w-full h-9.5 inline-flex items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-xs font-medium text-zinc-800 transition"
              >
                <span>View Transparent Pricing</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
