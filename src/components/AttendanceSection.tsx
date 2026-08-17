"use client";

import React, { useState } from "react";
import { 
  Fingerprint, 
  Smartphone, 
  QrCode, 
  FileSpreadsheet, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowRight
} from "lucide-react";

export function AttendanceSection() {
  const [activeTab, setActiveTab] = useState<"phone" | "fingerprint" | "qr" | "paper">("phone");
  const [usiSimulationActive, setUsiSimulationActive] = useState(false);

  return (
    <section id="attendance" className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-[#fafaf9] text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Multi-Modal Hardware &amp; App Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Multi-Modal High-Speed Attendance
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Capture attendance in seconds across hundreds of students. Support for phone tap, optical fingerprint hardware, dynamic QR cards, and automated parent absentee alerts.
          </p>
        </div>

        {/* 4 Attendance Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          <div 
            onClick={() => setActiveTab("phone")}
            className={`p-4.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "phone" 
                ? "bg-[#fafaf9] border-[#1d4ed8] shadow-stitch" 
                : "bg-white border-zinc-200/90 hover:border-zinc-300"
            }`}
          >
            <div className="text-xs font-semibold text-[#1d4ed8] font-mono mb-2">MODE A</div>
            <h3 className="font-semibold text-sm text-zinc-900">Mobile Tap Cockpit</h3>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Teacher phone displays student roll, photo, and name. Tap Present or Absent in under a second.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab("fingerprint")}
            className={`p-4.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "fingerprint" 
                ? "bg-[#fafaf9] border-[#1d4ed8] shadow-stitch" 
                : "bg-white border-zinc-200/90 hover:border-zinc-300"
            }`}
          >
            <div className="text-xs font-semibold text-[#1d4ed8] font-mono mb-2">MODE B</div>
            <h3 className="font-semibold text-sm text-zinc-900">Biometric Sensor</h3>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Plug-and-play optical USB sensors at center gate. Students scan finger for automated verification.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab("qr")}
            className={`p-4.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "qr" 
                ? "bg-[#fafaf9] border-[#1d4ed8] shadow-stitch" 
                : "bg-white border-zinc-200/90 hover:border-zinc-300"
            }`}
          >
            <div className="text-xs font-semibold text-[#1d4ed8] font-mono mb-2">MODE C</div>
            <h3 className="font-semibold text-sm text-zinc-900">Dynamic QR Cards</h3>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Students tap physical ID barcode/QR cards or scan rotating screen QR at center reception.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab("paper")}
            className={`p-4.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "paper" 
                ? "bg-[#fafaf9] border-[#1d4ed8] shadow-stitch" 
                : "bg-white border-zinc-200/90 hover:border-zinc-300"
            }`}
          >
            <div className="text-xs font-semibold text-[#1d4ed8] font-mono mb-2">MODE D</div>
            <h3 className="font-semibold text-sm text-zinc-900">Printable Ledger</h3>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              One-click PDF printable roll sheets with barcode strips for paper-first coaching institutes.
            </p>
          </div>

        </div>

        {/* The Universal Student Identifier (USI) Breakdown */}
        <div className="mt-8 rounded-xl border border-zinc-200/90 bg-[#fafaf9] p-5 sm:p-6 shadow-stitch">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-zinc-200 text-zinc-800 px-2 py-0.5 rounded">
                  Core Innovation
                </span>
                <span className="text-xs font-semibold text-zinc-900">Universal Student Identifier (USI)</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-950">
                Solving the Cross-Batch &amp; Rescheduled Session Dilemma
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                When a student enrolled in the <strong className="text-zinc-900 font-medium">Morning 8:00 AM session</strong> attends the <strong className="text-zinc-900 font-medium">Evening 4:30 PM session</strong>, traditional software requires teachers to manually search across different rosters. With Docent USI, a single fingerprint or QR scan automatically links to their master profile, credits attendance, and notifies parents.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-zinc-200 shadow-stitch space-y-2.5 min-w-[280px]">
              <div className="text-xs font-semibold text-zinc-900">Live USI Resolver Simulator</div>
              <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200 text-[11px] font-mono space-y-1 text-zinc-700">
                <div>Scan: <span className="font-medium text-[#1d4ed8]">USI-9941 (Afridi Islam)</span></div>
                <div>Primary: <span className="text-zinc-500">Batch-A Morning</span></div>
                <div className="text-zinc-900 font-medium">Detected: Batch-B Evening</div>
              </div>
              <button
                onClick={() => {
                  setUsiSimulationActive(true);
                  setTimeout(() => setUsiSimulationActive(false), 4500);
                }}
                className="w-full h-8 rounded bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition"
              >
                {usiSimulationActive ? "✓ Attendance Resolved Seamlessly!" : "Test Cross-Batch Resolver"}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
