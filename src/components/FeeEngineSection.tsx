"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Search, 
  Send, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Smartphone, 
  Calendar,
  Building,
  ArrowRight,
  Filter
} from "lucide-react";

export function FeeEngineSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "paid" | "unpaid">("all");
  
  const [studentList, setStudentList] = useState([
    { id: "USI-102", name: "Sabbir Rahman", roll: "01", batch: "Batch-A (Physics HSC)", fee: 2500, status: "PAID", phone: "+880 1711-223344" },
    { id: "USI-103", name: "Mariam Akhter", roll: "02", batch: "Batch-A (Physics HSC)", fee: 2500, status: "UNPAID", phone: "+880 1819-556677" },
    { id: "USI-104", name: "Fahim Shahriar", roll: "03", batch: "Batch-B (Math Special)", fee: 3000, status: "NEXT_MONTH", phone: "+880 1912-778899" },
    { id: "USI-105", name: "Anika Tabassum", roll: "04", batch: "Batch-B (Math Special)", fee: 3000, status: "REMINDER_20TH", phone: "+880 1623-112233" },
    { id: "USI-106", name: "Tanvir Hossain", roll: "05", batch: "Batch-C (Chemistry Pro)", fee: 2800, status: "UNPAID", phone: "+880 1715-990011" },
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const setStatus = (id: string, newStatus: string) => {
    setStudentList(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
    const target = studentList.find(s => s.id === id);
    if (newStatus === "PAID") {
      setToastMessage(`✓ Marked ${target?.name} as PAID. Instant confirmation SMS sent to ${target?.phone}`);
    } else if (newStatus === "UNPAID") {
      setToastMessage(`⚠️ Alert: Overdue Fee reminder SMS sent to ${target?.name}'s parents.`);
    } else if (newStatus === "NEXT_MONTH") {
      setToastMessage(`✓ Merged ${target?.name}'s due fee with next month.`);
    } else if (newStatus === "NO_MORE") {
      setToastMessage(`✓ Student ${target?.name} marked as No More (archived from active billing ledger).`);
    } else {
      setToastMessage(`✓ Automated reminder scheduled for ${target?.name}.`);
    }
    setTimeout(() => setToastMessage(null), 5000);
  };

  const filteredStudents = studentList.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.roll.includes(searchTerm) || 
                          s.batch.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeFilter === "paid") return matchesSearch && s.status === "PAID";
    if (activeFilter === "unpaid") return matchesSearch && (s.status === "UNPAID" || s.status === "NEXT_MONTH" || s.status.includes("REMINDER"));
    return matchesSearch;
  });

  return (
    <section id="fee-engine" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            FINANCIAL ZERO-LEAKAGE ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Monthly Fee Collection with Automated Grace Periods
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            No more lost tuition cash or awkward phone calls. Docent automates grace periods, generates instant unpaid lists, dispatches parent receipts, and supports both manual & digital payments.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white border border-zinc-200 p-5 rounded-xl shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
              A
            </div>
            <h3 className="font-bold text-sm text-zinc-900">Seamless Multi-Search</h3>
            <p className="text-xs text-zinc-500">
              Instantly find any student across 1,000+ records by typing their Name, Roll, Phone number, or Batch name.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-5 rounded-xl shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
              B
            </div>
            <h3 className="font-bold text-sm text-zinc-900">Grace Period & Auto-Unpaid</h3>
            <p className="text-xs text-zinc-500">
              Define fee windows (e.g. 10th-15th). On the 16th, the system compiles the Unpaid List automatically.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-5 rounded-xl shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
              C
            </div>
            <h3 className="font-bold text-sm text-zinc-900">4 Unpaid Action Controls</h3>
            <p className="text-xs text-zinc-500">
              One-click decisions: <strong className="text-zinc-800">[Paid]</strong>, <strong className="text-zinc-800">[Next Month]</strong>, <strong className="text-zinc-800">[Reminder on Date]</strong>, or <strong className="text-zinc-800">[No More]</strong>.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-5 rounded-xl shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
              D
            </div>
            <h3 className="font-bold text-sm text-zinc-900">Automated Parent SMS Engine</h3>
            <p className="text-xs text-zinc-500">
              Dispatches real-time SMS receipts when paid and courteous fee reminders when overdue.
            </p>
          </div>
        </div>

        {/* Interactive Fee Management Simulator */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-100">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-zinc-900">Live Fee Ledger Cockpit</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700">Interactive Demo</span>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5">Try filtering, searching, or clicking action buttons below.</p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search name, roll, batch..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-9 pl-8 pr-3 text-xs rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-600 focus:outline-none w-56 transition"
                />
              </div>

              <div className="flex items-center p-0.5 bg-zinc-100 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-2.5 py-1 rounded-md transition ${activeFilter === "all" ? "bg-white text-zinc-900 shadow-2xs" : "text-zinc-600"}`}
                >
                  All ({studentList.length})
                </button>
                <button
                  onClick={() => setActiveFilter("paid")}
                  className={`px-2.5 py-1 rounded-md transition ${activeFilter === "paid" ? "bg-white text-emerald-700 shadow-2xs" : "text-zinc-600"}`}
                >
                  Paid (1)
                </button>
                <button
                  onClick={() => setActiveFilter("unpaid")}
                  className={`px-2.5 py-1 rounded-md transition ${activeFilter === "unpaid" ? "bg-white text-red-700 shadow-2xs" : "text-zinc-600"}`}
                >
                  Unpaid (4)
                </button>
              </div>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="mt-4 p-3 rounded-lg bg-zinc-900 text-white text-xs font-medium flex items-center justify-between animate-fadeIn">
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-blue-400" />
                <span>{toastMessage}</span>
              </div>
              <button onClick={() => setToastMessage(null)} className="text-zinc-400 hover:text-white text-xs">Dismiss</button>
            </div>
          )}

          {/* Student Ledger Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-semibold text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-3">Student & Roll</th>
                  <th className="py-3 px-3">Batch</th>
                  <th className="py-3 px-3">Fee Amount</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Action Buttons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filteredStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-zinc-50/80 transition">
                    <td className="py-3 px-3">
                      <div className="font-semibold text-zinc-900">{s.name}</div>
                      <div className="text-[11px] text-zinc-400">Roll #{s.roll} • {s.phone}</div>
                    </td>
                    <td className="py-3 px-3 text-zinc-700">{s.batch}</td>
                    <td className="py-3 px-3 font-semibold text-zinc-950 tabular-nums">৳{s.fee.toLocaleString()}</td>
                    <td className="py-3 px-3">
                      {s.status === "PAID" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" /> Paid
                        </span>
                      )}
                      {s.status === "UNPAID" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                          Overdue (Grace Ended)
                        </span>
                      )}
                      {s.status === "NEXT_MONTH" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                          Next Month Deferral
                        </span>
                      )}
                      {s.status === "REMINDER_20TH" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          Reminder Set: Aug 20
                        </span>
                      )}
                      {s.status === "NO_MORE" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-100 text-zinc-500 border border-zinc-200">
                          Archived (No More)
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => setStatus(s.id, "PAID")}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition active:scale-95"
                        >
                          [ Paid ]
                        </button>
                        <button
                          onClick={() => setStatus(s.id, "UNPAID")}
                          className="px-2 py-1 rounded-md text-[11px] font-medium bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition active:scale-95"
                        >
                          [ Unpaid ]
                        </button>
                        <button
                          onClick={() => setStatus(s.id, "NEXT_MONTH")}
                          className="px-2 py-1 rounded-md text-[11px] font-medium border border-zinc-200 bg-white hover:bg-zinc-50 transition text-zinc-700"
                        >
                          [ Next Mo ]
                        </button>
                        <button
                          onClick={() => setStatus(s.id, "NO_MORE")}
                          className="px-2 py-1 rounded-md text-[11px] font-medium border border-zinc-200 bg-white hover:bg-zinc-50 transition text-zinc-400 hover:text-red-600"
                        >
                          [ No More ]
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Gateways Integration Note */}
          <div className="mt-6 pt-5 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/60 flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-zinc-900">Path A: Manual Verification</h4>
                <p className="text-xs text-zinc-600 mt-0.5">
                  Students hand cash or send money directly to the teacher's personal bKash/Nagad. The teacher taps `[Paid]` in 1 second.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/60 flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-zinc-900">Path B: Fully Automated Online Gateways</h4>
                <p className="text-xs text-zinc-600 mt-0.5">
                  Integrated with SSLCommerz, bKash, Nagad, Visa, Mastercard. Webhook auto-marks the student as Paid and routes funds directly to your bank.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
