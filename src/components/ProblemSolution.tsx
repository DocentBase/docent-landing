"use client";

import React from "react";
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  FileWarning, 
  UserX,
  ArrowRight
} from "lucide-react";

export function ProblemSolution() {
  const problems = [
    {
      problemIcon: AlertCircle,
      problemTitle: "Fee Leakage & Withholding via Cash",
      problemDesc: "Students take tuition money from parents but delay or withhold paying the coaching center for months without parent knowledge.",
      solutionTitle: "Automated Grace Period & Parent SMS Receipts",
      solutionDesc: "Define grace periods (10th-15th). The instant a payment is logged, an automated SMS receipt hits the parent. If unpaid past the 15th, an overdue notice triggers.",
      tag: "Fee Recovery"
    },
    {
      problemIcon: Clock,
      problemTitle: "Attendance Overhead & Cross-Batch Confusion",
      problemDesc: "Morning students attending evening classes causes roll-call confusion and wastes 15 minutes of lecture time every single day.",
      solutionTitle: "Universal Student ID (USI) & Biometric Scan",
      solutionDesc: "Students scan fingerprints or QR codes in under 1 second. The USI auto-routes morning students in evening batches without manual list switching.",
      tag: "High-Throughput"
    },
    {
      problemIcon: FileWarning,
      problemTitle: "Data Entry Burden on Busy Teachers",
      problemDesc: "Typical SaaS forces teachers to spend 20+ hours manually typing student rosters, phone numbers, and photos into spreadsheets.",
      solutionTitle: "White-Glove Data Entry Done For You",
      solutionDesc: "Send paper registers, admission slips, or notebook photos. Our dedicated operations team formats and inputs all student data for free.",
      tag: "Zero Tech Burden"
    },
    {
      problemIcon: UserX,
      problemTitle: "Parents in the Dark Regarding Daily Homework",
      problemDesc: "Parents only learn of academic issues when exam results crash, creating friction and parent complaints.",
      solutionTitle: "Daily 10-Point Homework Rating & Monthly Digests",
      solutionDesc: "Grade daily homework on a 10-point scale in 2 seconds during attendance. The engine synthesizes monthly parent analytical digests automatically.",
      tag: "Parent Trust"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-[#fafaf9] text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Coaching Reality vs Docent Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Engineered for What Teachers Actually Experience
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Teaching is demanding. Administrative friction makes it exhausting. Here is how Docent transforms daily coaching center friction into systematic calm.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className="rounded-lg border border-zinc-200/90 bg-[#fafaf9] p-5 shadow-stitch flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Tag & Index */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-200 text-zinc-800">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">0{idx + 1} / 04</span>
                </div>

                {/* Problem Box */}
                <div className="rounded border border-red-200 bg-white p-3.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-red-700 font-semibold text-[11px] uppercase tracking-wider">
                    <item.problemIcon className="w-3.5 h-3.5" />
                    <span>The Operational Friction</span>
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm text-zinc-900">{item.problemTitle}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.problemDesc}</p>
                </div>

                {/* Solution Box */}
                <div className="rounded border border-emerald-200 bg-white p-3.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px] uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Docent System</span>
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm text-zinc-900">{item.solutionTitle}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.solutionDesc}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200/60 flex items-center justify-between text-xs text-zinc-500">
                <span>Friction Eliminated</span>
                <span className="text-[#1d4ed8] font-medium">Standard Feature</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
