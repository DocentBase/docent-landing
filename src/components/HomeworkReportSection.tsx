"use client";

import React, { useState } from "react";
import { 
  Award, 
  BookOpen, 
  Send, 
  CheckCircle2, 
  FileText, 
  TrendingUp, 
  Star, 
  Calendar,
  Sparkles,
  Smartphone
} from "lucide-react";

export function HomeworkReportSection() {
  const [activeScore, setActiveScore] = useState(9);
  const [selectedStudent, setSelectedStudent] = useState("Tanvir Ahmed");

  return (
    <section id="homework-reports" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            CONTINUOUS PARENT TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Daily 10-Point Homework Rating & Monthly Parent Reports
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Never hear parents complain at exam time again. Teachers mark daily homework completion in 2 seconds, compiling into automated monthly SMS & WhatsApp reports pushed straight to parents.
          </p>
        </div>

        {/* Two-Column Interactive Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Daily 10-Point Homework Grader Demo (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-200 bg-[#F8FAFC] p-6 shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-200/80 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Daily Homework Screen
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                During Attendance
              </span>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-zinc-700 block">Select Student:</label>
              <div className="grid grid-cols-2 gap-2">
                {["Tanvir Ahmed (Roll 12)", "Ayesha Siddiqua (Roll 04)", "Mahir Faisal (Roll 19)", "Nusrat Jahan (Roll 07)"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStudent(st.split(" (")[0])}
                    className={`p-2 rounded-lg text-left text-xs font-medium border transition ${
                      selectedStudent === st.split(" (")[0]
                        ? "bg-white border-blue-600 text-blue-700 shadow-2xs"
                        : "bg-white/60 border-zinc-200 text-zinc-600 hover:bg-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-zinc-800">
                  Today's Homework Rating:
                </label>
                <span className="text-base font-bold text-blue-600 tabular-nums">
                  {activeScore} / 10
                </span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 pt-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                  <button
                    key={score}
                    onClick={() => setActiveScore(score)}
                    className={`h-9 rounded-lg font-bold text-xs transition ${
                      activeScore === score
                        ? "bg-blue-600 text-white shadow-2xs"
                        : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                    }`}
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-zinc-700 space-y-1">
              <div className="font-semibold text-blue-900">Why the 10-point scale works:</div>
              <p className="text-[11px] text-zinc-600 leading-relaxed">
                Zero typing needed. Just tap 1 to 10 as you inspect the student's notebook. The algorithm calculates cumulative rolling monthly averages automatically.
              </p>
            </div>

          </div>

          {/* Right Column: Monthly Parent Report Card & SMS Dispatcher (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-zinc-900">Automated Parent Monthly Dossier</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700">Auto-Dispatched on 1st</span>
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">Recipient: Parents of {selectedStudent} • Phone: +880 1712-445892</div>
              </div>
              
              <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Delivery
              </div>
            </div>

            {/* Generated Report Card Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-medium text-zinc-500">A. Attendance</div>
                <div className="text-lg font-bold text-zinc-900 mt-1">25 / 26 Days</div>
                <div className="text-[10px] text-emerald-600 font-semibold">96.1% (Excellent)</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-medium text-zinc-500">B. Daily Homework</div>
                <div className="text-lg font-bold text-blue-600 mt-1">{activeScore}.2 / 10</div>
                <div className="text-[10px] text-blue-700 font-semibold">Consistent Quality</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-medium text-zinc-500">C. Monthly Exam</div>
                <div className="text-lg font-bold text-zinc-900 mt-1">94 / 100</div>
                <div className="text-[10px] text-emerald-600 font-semibold">Rank #3 in Batch</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-medium text-zinc-500">D. Academic Status</div>
                <div className="text-sm font-bold text-emerald-700 mt-1.5">Advancing</div>
                <div className="text-[10px] text-zinc-500">Ready for Finals</div>
              </div>
            </div>

            {/* Live SMS Preview box */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-900 text-white p-4 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                  SMS & WhatsApp Notification Preview:
                </span>
                <span>Delivered: 1st of Month, 09:00 AM</span>
              </div>
              <p className="text-zinc-200 leading-relaxed pt-1">
                "Dear Parent, here is {selectedStudent}'s Academic Summary from Master Academy: Attendance: 96% (25/26), Daily HW Avg: {activeScore}.2/10, Monthly Physics Test: 94/100 (Rank #3). Overall status: Advancing Rapidly. View full analytics: student.docentbase.com/report/{selectedStudent.toLowerCase().replace(" ", "-")}"
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>Parents stay informed effortlessly without calling you during class.</span>
              <a 
                href="https://student.docentbase.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline"
              >
                Explore Student Portal →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
