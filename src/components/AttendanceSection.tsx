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
  UserCheck, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export function AttendanceSection() {
  const [activeTab, setActiveTab] = useState<"phone" | "fingerprint" | "qr" | "paper">("phone");
  const [usiSimulationActive, setUsiSimulationActive] = useState(false);

  return (
    <section id="attendance" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            HIGH-THROUGHPUT ATTENDANCE COCKPIT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Log 1,000+ Students Daily with Zero Friction
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Whether you want a rapid tap on your smartphone, a biometric fingerprint scanner at your center gate, a QR check-in, or traditional paper logs — Docent seamlessly handles it all.
          </p>
        </div>

        {/* 4 Attendance Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div 
            onClick={() => setActiveTab("phone")}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeTab === "phone" 
                ? "bg-blue-50/50 border-blue-600 shadow-xs" 
                : "bg-[#F8FAFC] border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-zinc-900">A. Mobile Green/Red Tap</h3>
            <p className="text-xs text-zinc-500 mt-1">
              Teacher's phone shows student photo, roll, name. Tap big Green (Present) or Red (Absent) in seconds.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab("fingerprint")}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeTab === "fingerprint" 
                ? "bg-blue-50/50 border-blue-600 shadow-xs" 
                : "bg-[#F8FAFC] border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
              <Fingerprint className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-zinc-900">B. Biometric Fingerprint</h3>
            <p className="text-xs text-zinc-500 mt-1">
              High-volume optical sensors installed at your coaching entrance. Automated hands-free logging.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab("qr")}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeTab === "qr" 
                ? "bg-blue-50/50 border-blue-600 shadow-xs" 
                : "bg-[#F8FAFC] border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-zinc-900">C. Dynamic QR Check-in</h3>
            <p className="text-xs text-zinc-500 mt-1">
              Students scan a rotating QR code or their personal student ID card on arrival.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab("paper")}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeTab === "paper" 
                ? "bg-blue-50/50 border-blue-600 shadow-xs" 
                : "bg-[#F8FAFC] border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-zinc-900">D. Paper Ledger Backup</h3>
            <p className="text-xs text-zinc-500 mt-1">
              Full printable attendance sheets with barcode strips for traditional institutions.
            </p>
          </div>

        </div>

        {/* The Universal Student Identifier (USI) Breakthrough Callout */}
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/40 p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900">
                  PATENTED ARCHITECTURE
                </span>
                <span className="text-xs font-bold text-amber-900">Universal Student Identifier (USI)</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900">
                Solving the Classic Cross-Batch & Late Arrival Dilemma
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                What happens when a student enrolled in the <strong className="text-zinc-900">Morning 8:00 AM Batch</strong> comes to the <strong className="text-zinc-900">Afternoon 4:30 PM Batch</strong> instead? In other apps, teachers waste 10 minutes searching other batch rosters. With Docent USI, a single fingerprint or QR scan immediately links to their master profile, credits attendance, and tags them as a Cross-Batch Guest.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs space-y-3 min-w-[280px]">
              <div className="text-xs font-bold text-zinc-900">Live USI Simulator</div>
              <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-[11px] font-mono space-y-1">
                <div>Scan: <span className="font-bold text-blue-600">USI-9941 (Afridi Islam)</span></div>
                <div>Primary: <span className="text-zinc-600">Batch-A Morning</span></div>
                <div className="text-amber-700 font-semibold">Active Session: Batch-B Evening</div>
              </div>
              <button
                onClick={() => {
                  setUsiSimulationActive(true);
                  setTimeout(() => setUsiSimulationActive(false), 5000);
                }}
                className="w-full h-8 rounded-lg bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 transition"
              >
                {usiSimulationActive ? "✓ Attendance Auto-Logged Across Batches!" : "Test Universal Cross-Batch Scan"}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
