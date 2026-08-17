"use client";

import React from "react";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
  const comparisonRows = [
    { feature: "Initial Data Entry Onboarding", docent: "We type & insert 100% of student records for you", others: "You spend 30+ hrs typing spreadsheets" },
    { feature: "Grace Period Fee Alerts", docent: "Automated Unpaid Ledger + Parent SMS on 15th", others: "Manual phone calls or generic notices" },
    { feature: "Attendance Speed & Modes", docent: "<1-Sec Tap, Biometric Fingerprint & QR", others: "App tap only (frequent sync lag)" },
    { feature: "Cross-Batch & Late Arrivals", docent: "Universal Student ID (USI) Auto-Routing", others: "Manual search across separate batch lists" },
    { feature: "Daily Homework Evaluation", docent: "2-Sec 10-point rater during roll-call", others: "Complex assignment forms or none" },
    { feature: "Monthly Parent Digests", docent: "Automated SMS / WhatsApp report cards", others: "Parents must download separate bloated app" },
    { feature: "Physical Support Layer", docent: "24/7 on-site visits & center setup", others: "Chatbot email ticket support only" },
  ];

  return (
    <section className="py-20 bg-[#fafaf9] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-white text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Architectural Comparison
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Why Coaching Centers Choose Docent
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            See how Docent's calm operating system compares to legacy spreadsheets, chaotic WhatsApp groups, and generic software.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 max-w-4xl mx-auto rounded-lg border border-zinc-200/90 bg-white overflow-hidden shadow-stitch">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 border-b border-zinc-200/80">
                <tr>
                  <th className="py-3 px-4 font-semibold text-zinc-900 w-1/3">Capability</th>
                  <th className="py-3 px-4 font-semibold text-[#1d4ed8] bg-blue-50/40 border-x border-zinc-200/80 w-1/3">
                    Docent OS
                  </th>
                  <th className="py-3 px-4 font-medium text-zinc-500 w-1/3">Traditional Apps / Excel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/60 transition">
                    <td className="py-3 px-4 font-medium text-zinc-900">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 bg-blue-50/20 border-x border-zinc-200/80 font-medium text-zinc-900">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.docent}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-zinc-500">
                      <div className="flex items-start gap-1.5">
                        <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
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
