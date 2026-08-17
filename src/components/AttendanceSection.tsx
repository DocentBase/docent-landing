"use client";

import React, { useState } from "react";
import { 
  Fingerprint, 
  QrCode, 
  CheckCircle2, 
  XCircle, 
  Barcode, 
  ArrowRight,
  Smartphone
} from "lucide-react";

export function AttendanceSection() {
  const [usiSimulationActive, setUsiSimulationActive] = useState(false);
  const [liveStudents, setLiveStudents] = useState([
    { name: "Chloe Kim", status: "present", time: "08:01 AM", roll: "01" },
    { name: "James Patel", status: "present", time: "08:02 AM", roll: "02" },
    { name: "Sofia Rossi", status: "absent", time: "Pending", roll: "03" },
  ]);

  return (
    <section id="attendance" className="py-20 bg-[#fafaf9] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stitch Two-Column Feature Showcase */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Live Scanner Card */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-zinc-200/90 shadow-stitch space-y-4">
            <div className="flex justify-between items-center pb-2.5 border-b border-zinc-200/80">
              <div className="flex items-center gap-2">
                <Barcode className="w-4 h-4 text-[#0037b0]" />
                <span className="text-xs font-semibold text-zinc-900">Live Attendance Scanner</span>
              </div>
              <span className="text-xs text-[#0037b0] flex items-center gap-1.5 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>

            <div className="space-y-2.5">
              {liveStudents.map((st) => (
                <div key={st.name} className="flex items-center justify-between p-2.5 rounded bg-zinc-50 border border-zinc-200/60 shadow-stitch text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full ${st.status === "present" ? "bg-emerald-500" : "bg-red-500"}`} />
                    <div className="flex flex-col">
                      <span className="font-semibold text-zinc-900">{st.name}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">Roll #{st.roll} • {st.time}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                    st.status === "present" 
                      ? "text-emerald-800 bg-emerald-50 border border-emerald-200" 
                      : "text-red-800 bg-red-50 border border-red-200"
                  }`}>
                    {st.status === "present" ? "Present" : "Absent (Alert Dispatched)"}
                  </span>
                </div>
              ))}
            </div>

            {/* USI Resolver Simulation Box */}
            <div className="pt-2 border-t border-zinc-100 space-y-2">
              <div className="p-2.5 rounded bg-blue-50/60 border border-blue-200/70 text-xs space-y-1">
                <div className="font-semibold text-[#0037b0] flex items-center gap-1.5">
                  <Fingerprint className="w-3.5 h-3.5" />
                  <span>Universal Student ID (USI) Auto-Resolver</span>
                </div>
                <p className="text-[11px] text-zinc-600">
                  Morning batch student attending the evening session? Scanner credits attendance to their enrolled roster automatically.
                </p>
              </div>

              <button
                onClick={() => {
                  setUsiSimulationActive(true);
                  setTimeout(() => setUsiSimulationActive(false), 4500);
                }}
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded text-xs font-medium transition shadow-stitch"
              >
                {usiSimulationActive ? "✓ Attendance Resolved Across Batches!" : "Test USI Cross-Batch Scan"}
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-white text-zinc-700 shadow-stitch">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0037b0] font-mono">
                Hardware &amp; App Sync
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Multi-Modal High-Speed Attendance
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Capture attendance in seconds. Support for biometric scanning, QR codes, and manual lookup. Automated 3-minute absentee alerts instantly notify parents.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
              <li className="flex items-center gap-2">
                <Fingerprint className="w-4 h-4 text-[#0037b0] shrink-0" />
                <span>Biometric Hardware Integration (Plug &amp; Play USB optical readers)</span>
              </li>
              <li className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-[#0037b0] shrink-0" />
                <span>Secure Dynamic QR &amp; Student ID Card Scanning</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#0037b0] shrink-0" />
                <span>1-Tap Mobile Cockpit for individual classroom teachers</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://admin.docentbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0037b0] hover:text-[#1d4ed8]"
              >
                <span>Explore Live Attendance Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
