"use client";

import React, { useState } from "react";
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Smartphone,
  ArrowRight
} from "lucide-react";

export function HomeworkReportSection() {
  const [activeScore, setActiveScore] = useState(9);
  const [selectedStudent, setSelectedStudent] = useState("Tanvir Ahmed");

  return (
    <section id="homework-reports" className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-[#fafaf9] text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Continuous Parent Transparency
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Daily 10-Point Homework Rating &amp; Automated Parent Reports
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Eliminate exam-time surprises. Teachers log daily lecture homework scores in 2 seconds, compiling into structured monthly progress reports pushed directly to parents via SMS.
          </p>
        </div>

        {/* Two-Column Interactive Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Daily 10-Point Homework Grader Demo (5 cols) */}
          <div className="lg:col-span-5 rounded-lg border border-zinc-200/90 bg-[#fafaf9] p-5 shadow-stitch space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1d4ed8]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                  Daily Homework Grader
                </span>
              </div>
              <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.2 rounded border border-emerald-200">
                Live Rating
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-700 block">Select Student Record:</label>
              <div className="grid grid-cols-2 gap-1.5">
                {["Tanvir Ahmed (Roll 12)", "Ayesha Siddiqua (Roll 04)", "Mahir Faisal (Roll 19)", "Nusrat Jahan (Roll 07)"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStudent(st.split(" (")[0])}
                    className={`p-2 rounded text-left text-xs transition ${
                      selectedStudent === st.split(" (")[0]
                        ? "bg-white border border-[#1d4ed8] text-zinc-950 font-semibold shadow-stitch"
                        : "bg-white/70 border border-zinc-200 text-zinc-600 hover:bg-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-zinc-800">
                  Daily Rating:
                </label>
                <span className="text-sm font-semibold text-[#1d4ed8] tabular-nums">
                  {activeScore} / 10
                </span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                  <button
                    key={score}
                    onClick={() => setActiveScore(score)}
                    className={`h-7.5 rounded text-xs font-semibold transition ${
                      activeScore === score
                        ? "bg-[#1d4ed8] text-white"
                        : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                    }`}
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded bg-white border border-zinc-200/80 text-xs text-zinc-600 space-y-1 shadow-stitch">
              <div className="font-semibold text-zinc-900 text-[11px]">Precision Micro-Grading:</div>
              <p className="text-[11px] leading-relaxed">
                Zero typing. Just tap 1-10 during roll call. The engine aggregates rolling weekly averages and homework completion percentages automatically.
              </p>
            </div>

          </div>

          {/* Right Column: Monthly Parent Report Card & SMS Dispatcher (7 cols) */}
          <div className="lg:col-span-7 rounded-lg border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-stitch space-y-5">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-zinc-900">Parent Monthly Academic Digest</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Auto-Dispatched on 1st
                  </span>
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">Recipient: Parents of {selectedStudent} • +880 1712-445892</div>
              </div>
              
              <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Verified SMS Route
              </div>
            </div>

            {/* Generated Report Card Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded bg-zinc-50 border border-zinc-200/80">
                <div className="text-[11px] text-zinc-500 font-mono">ATTENDANCE</div>
                <div className="text-base font-semibold text-zinc-900 mt-0.5">25 / 26 Days</div>
                <div className="text-[10px] text-emerald-700 font-medium">96.1% Rate</div>
              </div>

              <div className="p-3 rounded bg-zinc-50 border border-zinc-200/80">
                <div className="text-[11px] text-zinc-500 font-mono">HOMEWORK</div>
                <div className="text-base font-semibold text-[#1d4ed8] mt-0.5">{activeScore}.2 / 10</div>
                <div className="text-[10px] text-zinc-600 font-medium">Consistent</div>
              </div>

              <div className="p-3 rounded bg-zinc-50 border border-zinc-200/80">
                <div className="text-[11px] text-zinc-500 font-mono">EXAM SCORE</div>
                <div className="text-base font-semibold text-zinc-900 mt-0.5">94 / 100</div>
                <div className="text-[10px] text-emerald-700 font-medium">Rank #3</div>
              </div>

              <div className="p-3 rounded bg-zinc-50 border border-zinc-200/80">
                <div className="text-[11px] text-zinc-500 font-mono">TRAJECTORY</div>
                <div className="text-xs font-semibold text-emerald-800 mt-1">Advancing</div>
                <div className="text-[10px] text-zinc-500">Target on Track</div>
              </div>
            </div>

            {/* Live SMS Preview box */}
            <div className="rounded-lg border border-zinc-200/80 bg-zinc-900 text-white p-3.5 space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3 h-3 text-[#60a5fa]" />
                  SMS Notification Digest:
                </span>
                <span>Scheduled 1st of Month</span>
              </div>
              <p className="text-zinc-200 text-[11px] leading-relaxed">
                "Dear Parent, here is {selectedStudent}'s Academic Summary from Master Academy: Attendance: 96% (25/26), Daily HW Avg: {activeScore}.2/10, Monthly Physics Test: 94/100 (Rank #3). View full report: student.docentbase.com/report/{selectedStudent.toLowerCase().replace(" ", "-")}"
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>Parents receive transparent analytical updates without teacher intervention.</span>
              <a 
                href="https://student.docentbase.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-[#1d4ed8] hover:underline"
              >
                Student Portal →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
