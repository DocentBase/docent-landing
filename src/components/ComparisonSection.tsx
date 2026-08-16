"use client";

import React from "react";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

export function ComparisonSection() {
  const comparisonRows = [
    { feature: "Data Entry Onboarding", docent: "We type & insert 100% of student data for you", others: "You spend 30+ hrs typing spreadsheets", paper: "Manual handwriting every month" },
    { feature: "Grace Period Fee Alerts", docent: "Automated Unpaid List + Parent SMS on 15th", others: "Manual phone calls or generic notices", paper: "Zero tracking, massive fee leakage" },
    { feature: "Attendance Speed & Modes", docent: "1-Sec Tap, Biometric Fingerprint & QR", others: "App tap only (frequent lag)", paper: "15 minutes wasted per class" },
    { feature: "Cross-Batch & Late Arrivals", docent: "Universal Student ID (USI) Auto-Routing", others: "Manual cross-search across batches", paper: "Writing on back of page" },
    { feature: "Daily Homework Evaluation", docent: "2-Sec 10-point rater during attendance", others: "Complex assignment grading forms", paper: "Ignored or unchecked" },
    { feature: "Monthly Parent Dossiers", docent: "Automated SMS / WhatsApp report cards", others: "Parents must install bloated app", paper: "Printed report cards twice a year" },
    { feature: "Physical Support Layer", docent: "24/7 on-site visits & center setup", others: "Chatbot email ticket support only", paper: "None" },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            HEAD-TO-HEAD COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Why Docent Outperforms Traditional Methods
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            See why individual teachers, coaching centers, and private tutoring institutions are replacing legacy software with Docent.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="py-4 px-5 font-bold text-zinc-900 w-1/3">Capability</th>
                  <th className="py-4 px-5 font-bold text-blue-700 bg-blue-50/70 border-x border-blue-200 w-1/3">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>DOCENT OS</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-semibold text-zinc-500 w-1/3">Traditional Apps / Excel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/80 transition">
                    <td className="py-4 px-5 font-semibold text-zinc-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 bg-blue-50/30 border-x border-blue-100 font-medium text-zinc-900">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.docent}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-zinc-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
