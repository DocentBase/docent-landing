"use client";

import React, { useState } from "react";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";

export function RoiCalculator() {
  const [studentCount, setStudentCount] = useState(250);
  const [feePerStudent, setFeePerStudent] = useState(2500);

  // Calculations
  const monthlyRevenue = studentCount * feePerStudent;
  const lostFeeRecoveryEstimate = Math.round(monthlyRevenue * 0.08); // 8% fee recovered from parent grace alert
  const hoursSavedPerMonth = Math.round(studentCount * 0.12); // ~30 hrs saved on attendance + bookkeeping

  return (
    <section id="calculator" className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-[#fafaf9] text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Operational ROI Simulator
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Calculate Hours &amp; Revenue Reclaimed
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Estimate monthly hours saved on manual roll-calls and recovered tuition fees by eliminating student cash withholding with automated Grace SMS.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="mt-10 max-w-4xl mx-auto rounded-xl border border-zinc-200/90 bg-[#fafaf9] p-6 sm:p-8 shadow-stitch">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Controls Column */}
            <div className="space-y-5">
              
              {/* Slider 1: Student Count */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-semibold text-zinc-800">Total Enrolled Students</label>
                  <span className="font-semibold text-sm text-[#1d4ed8] tabular-nums">{studentCount} Students</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1500"
                  step="10"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded appearance-none cursor-pointer accent-[#1d4ed8]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                  <span>30</span>
                  <span>750</span>
                  <span>1,500+</span>
                </div>
              </div>

              {/* Slider 2: Monthly Fee per student */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-semibold text-zinc-800">Monthly Tuition Fee per Student</label>
                  <span className="font-semibold text-sm text-[#1d4ed8] tabular-nums">৳{feePerStudent.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={feePerStudent}
                  onChange={(e) => setFeePerStudent(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded appearance-none cursor-pointer accent-[#1d4ed8]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                  <span>৳500</span>
                  <span>৳5,000</span>
                  <span>৳10,000</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-white border border-zinc-200/80 text-xs text-zinc-600 space-y-1 shadow-stitch">
                <div className="font-medium text-zinc-800">Estimated Monthly Tuition Volume:</div>
                <div className="text-lg font-semibold text-zinc-950 tabular-nums">
                  ৳{monthlyRevenue.toLocaleString()} <span className="text-xs font-normal text-zinc-500">/ month</span>
                </div>
              </div>

            </div>

            {/* Projected Gains Column */}
            <div className="rounded-lg border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-stitch space-y-5">
              
              <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1d4ed8]">
                  Projected Monthly Savings
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Data-Backed
                </span>
              </div>

              <div className="space-y-4">
                
                {/* Metric 1 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-emerald-50 text-emerald-700 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-semibold text-zinc-950 tabular-nums">
                      ৳{lostFeeRecoveryEstimate.toLocaleString()}
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      Estimated Lost Fees Recovered by eliminating payment withholding.
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-blue-50 text-[#1d4ed8] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-semibold text-zinc-950 tabular-nums">
                      {hoursSavedPerMonth} Hours / Mo
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      Reclaimed from manual attendance roll-calls and fee bookkeeping.
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-zinc-100">
                <a
                  href="https://admin.docentbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-9 flex items-center justify-center gap-2 rounded bg-[#1d4ed8] hover:bg-[#1e40af] text-xs font-semibold text-white shadow-stitch transition"
                >
                  <span>Start Free Trial in Teacher Cockpit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
