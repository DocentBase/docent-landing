"use client";

import React from "react";
import { 
  AlertTriangle, 
  CheckCircle2, 
  CreditCard, 
  Clock, 
  UserX, 
  FileWarning, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles
} from "lucide-react";

export function ProblemSolution() {
  const problems = [
    {
      problemIcon: AlertTriangle,
      problemTitle: "Fee Leakage & 'Money Laundering' via Students",
      problemDesc: "Students take monthly tuition money from parents but spend it on personal items or delay paying the teacher for months.",
      solutionTitle: "Automated Parent SMS & Grace Period Engine",
      solutionDesc: "Set grace dates (e.g. 10th-15th). The second a student is marked Paid, an SMS confirmation hits the parents. If unpaid by the 15th, an alert is sent. No more fee theft.",
      tag: "Fee Recovery"
    },
    {
      problemIcon: Clock,
      problemTitle: "Attendance Chaos & Cross-Batch Confusion",
      problemDesc: "Morning batch students showing up in the evening, late arrivals, or spending 15 minutes of class time calling roll numbers one by one.",
      solutionTitle: "Universal Student ID & Fingerprint/QR Check-in",
      solutionDesc: "Students scan fingerprints or QR codes in 1 second. Universal Student Identifier (USI) automatically tags morning students attending evening sessions without manual batch switching.",
      tag: "Multi-Modal"
    },
    {
      problemIcon: FileWarning,
      problemTitle: "Teachers Are Not IT Experts (Data Entry Dread)",
      problemDesc: "Other software forces busy teachers to spend 20+ hours typing in hundreds of student profiles, photos, and parent contacts into spreadsheets.",
      solutionTitle: "24/7 Physical Layer: Data Entry Done For You",
      solutionDesc: "We provide White-Glove Data Entry as a Service. Hand us your admission slips or paper registers; our field team digitizes and formats everything.",
      tag: "Unfair Advantage"
    },
    {
      problemIcon: UserX,
      problemTitle: "Parents in the Dark & Untracked Homework",
      problemDesc: "Parents call complaining about bad exam scores because they had no visibility into daily missed classes or ignored homework assignments.",
      solutionTitle: "Daily 10-Point Rating & Automated Monthly Report",
      solutionDesc: "Grade daily homework on a simple 10-point scale during attendance. System synthesizes monthly PDF/SMS report cards directly to parent phones.",
      tag: "Parent Trust"
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            THE REALITY OF RUNNING A COACHING CENTER
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Built Directly For What Teachers Actually Suffer From
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Teaching is noble, but operational friction destroys teacher bandwidth. Here is how Docent transforms everyday administrative chaos into quiet order.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl border border-zinc-200 bg-[#F8FAFC] p-6 sm:p-7 hover:border-zinc-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header with category tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-200/80 text-zinc-700">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">0{idx + 1} / 04</span>
                </div>

                {/* Problem Box */}
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                    <item.problemIcon className="w-3.5 h-3.5" />
                    <span>The Pain Point</span>
                  </div>
                  <h3 className="font-bold text-sm text-zinc-900">{item.problemTitle}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.problemDesc}</p>
                </div>

                {/* Solution Box */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Docent Solution</span>
                  </div>
                  <h3 className="font-bold text-sm text-zinc-900">{item.solutionTitle}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.solutionDesc}</p>
                </div>

              </div>

              <div className="mt-5 pt-4 border-t border-zinc-200/70 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-medium">100% Friction-Free Execution</span>
                <span className="text-blue-600 font-semibold flex items-center gap-1">
                  Active in Docent OS →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
