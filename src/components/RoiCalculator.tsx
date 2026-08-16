"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Clock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export function RoiCalculator() {
  const [studentCount, setStudentCount] = useState(250);
  const [feePerStudent, setFeePerStudent] = useState(2500);

  // Calculations
  const monthlyRevenue = studentCount * feePerStudent;
  const lostFeeRecoveryEstimate = Math.round(monthlyRevenue * 0.08); // 8% fee recovered from parent grace alert
  const hoursSavedPerMonth = Math.round(studentCount * 0.12); // ~30 hrs saved on attendance + bookkeeping

  return (
    <section id="calculator" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            BUSINESS IMPACT SIMULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            How Much Time & Money Does Docent Save You?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            See the exact monthly hours saved and recovered tuition fees when you switch from manual notebooks to Docent OS.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-zinc-200 bg-[#F8FAFC] p-6 sm:p-10 shadow-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Controls Column */}
            <div className="space-y-6">
              
              {/* Slider 1: Student Count */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-800">Total Enrolled Students</label>
                  <span className="font-bold text-base text-blue-600 tabular-nums">{studentCount} Students</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1500"
                  step="10"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                  <span>30</span>
                  <span>500</span>
                  <span>1,500+</span>
                </div>
              </div>

              {/* Slider 2: Monthly Fee per student */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-800">Monthly Tuition Fee per Student</label>
                  <span className="font-bold text-base text-blue-600 tabular-nums">৳{feePerStudent.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={feePerStudent}
                  onChange={(e) => setFeePerStudent(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                  <span>৳500</span>
                  <span>৳5,000</span>
                  <span>৳10,000</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-500 space-y-1">
                <div className="font-bold text-zinc-800">Estimated Monthly Coaching Turnover:</div>
                <div className="text-xl font-bold text-zinc-950 tabular-nums">
                  ৳{monthlyRevenue.toLocaleString()} <span className="text-xs font-normal text-zinc-500">/ month</span>
                </div>
              </div>

            </div>

            {/* Projected Gains Column */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-2xs space-y-5">
              
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Monthly Projected Returns
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                  Guaranteed ROI
                </span>
              </div>

              <div className="space-y-4">
                
                {/* Metric 1 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-950 tabular-nums">
                      ৳{lostFeeRecoveryEstimate.toLocaleString()}
                    </div>
                    <div className="text-xs text-zinc-500 font-medium">
                      Estimated Lost Fees Recovered (by eliminating student cash withholding via Grace SMS alerts)
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-950 tabular-nums">
                      {hoursSavedPerMonth} Hours / Mo
                    </div>
                    <div className="text-xs text-zinc-500 font-medium">
                      Saved on manual attendance roll-calls, phone calls to parents, and spreadsheet data entry
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-zinc-100">
                <a
                  href="https://admin.docentbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition"
                >
                  <span>Start Free Trial on Teacher Portal</span>
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
