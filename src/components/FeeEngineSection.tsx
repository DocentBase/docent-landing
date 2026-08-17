"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Search, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  Building2,
  ArrowRight,
  MoreHorizontal
} from "lucide-react";

export function FeeEngineSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "paid" | "unpaid">("all");
  const [showFullSimulator, setShowFullSimulator] = useState(false);
  
  const [studentList, setStudentList] = useState([
    { id: "USI-102", name: "Alex Chen", roll: "01", batch: "Batch-A (Physics HSC)", fee: 2500, status: "PAID", date: "Oct 25", phone: "+880 1711-223344" },
    { id: "USI-103", name: "Maria R.", roll: "02", batch: "Batch-A (Physics HSC)", fee: 2500, status: "PAID", date: "Oct 24", phone: "+880 1819-556677" },
    { id: "USI-104", name: "David Lee", roll: "03", batch: "Batch-B (Math Special)", fee: 3000, status: "UNPAID", date: "Oct 24", phone: "+880 1912-778899" },
    { id: "USI-105", name: "Anika Tabassum", roll: "04", batch: "Batch-B (Math Special)", fee: 3000, status: "REMINDER_20TH", date: "Oct 23", phone: "+880 1623-112233" },
    { id: "USI-106", name: "Tanvir Hossain", roll: "05", batch: "Batch-C (Chemistry Pro)", fee: 2800, status: "UNPAID", date: "Oct 22", phone: "+880 1715-990011" },
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const setStatus = (id: string, newStatus: string) => {
    setStudentList(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
    const target = studentList.find(s => s.id === id);
    if (newStatus === "PAID") {
      setToastMessage(`✓ Marked ${target?.name} as PAID. Instant confirmation SMS sent to parent.`);
    } else if (newStatus === "UNPAID") {
      setToastMessage(`Overdue notice SMS dispatched to ${target?.name}'s parent.`);
    } else if (newStatus === "NEXT_MONTH") {
      setToastMessage(`Merged ${target?.name}'s due fee with next month's invoice.`);
    } else {
      setToastMessage(`Automated reminder scheduled for ${target?.name}.`);
    }
    setTimeout(() => setToastMessage(null), 4500);
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
    <section id="fee-engine" className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stitch Two-Column Feature Showcase */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-[#fafaf9] text-zinc-700 shadow-stitch">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0037b0] font-mono">
                Financial Architecture
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Automated Tuition Fee &amp; Ledger Engine
            </h2>
            
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Eliminate financial tracking errors. Our engine provides real-time payment countdowns, one-click adjustments, and ensures zero leakage in your revenue stream.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0037b0] shrink-0" />
                <span>Automated SMS payment reminders on grace expiry</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0037b0] shrink-0" />
                <span>Digital receipt generation pushed directly to parent phones</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0037b0] shrink-0" />
                <span>Instant ledger reconciliation with zero cash leakage</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => setShowFullSimulator(!showFullSimulator)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0037b0] hover:text-[#1d4ed8]"
              >
                <span>{showFullSimulator ? "Collapse Interactive Simulator" : "Expand Live Ledger Simulator"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Stitch Micro-Ledger Card */}
          <div className="bg-[#fafaf9] p-5 sm:p-6 rounded-xl border border-zinc-200/90 shadow-stitch space-y-4">
            <div className="flex justify-between items-center pb-2.5 border-b border-zinc-200/80">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#0037b0]" />
                <span className="text-xs font-semibold text-zinc-900">Recent Transactions</span>
              </div>
              <MoreHorizontal className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-zinc-700" />
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs p-2 rounded bg-white border border-zinc-200/60 shadow-stitch">
                <div className="flex flex-col">
                  <span className="font-semibold text-zinc-900">Alex Chen</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Roll #01 • Batch-A</span>
                </div>
                <span className="text-zinc-500 font-mono text-[11px]">Oct 25</span>
                <span className="font-semibold text-zinc-950 tabular-nums">৳2,500</span>
                <span className="text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                  Paid
                </span>
              </div>

              <div className="flex justify-between items-center text-xs p-2 rounded bg-white border border-zinc-200/60 shadow-stitch">
                <div className="flex flex-col">
                  <span className="font-semibold text-zinc-900">Maria R.</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Roll #02 • Batch-A</span>
                </div>
                <span className="text-zinc-500 font-mono text-[11px]">Oct 24</span>
                <span className="font-semibold text-zinc-950 tabular-nums">৳2,500</span>
                <span className="text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                  Paid
                </span>
              </div>

              <div className="flex justify-between items-center text-xs p-2 rounded bg-white border border-zinc-200/60 shadow-stitch">
                <div className="flex flex-col">
                  <span className="font-semibold text-zinc-900">David Lee</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Roll #03 • Batch-B</span>
                </div>
                <span className="text-zinc-500 font-mono text-[11px]">Oct 24</span>
                <span className="font-semibold text-zinc-950 tabular-nums">৳3,000</span>
                <span className="text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                  Pending
                </span>
              </div>
            </div>

            <button 
              onClick={() => setShowFullSimulator(true)}
              className="w-full py-2 border border-zinc-200 bg-white hover:bg-zinc-50 rounded text-xs font-semibold text-zinc-700 transition-colors shadow-stitch"
            >
              View Full Ledger &amp; Action Controls
            </button>
          </div>

        </div>

        {/* Expandable Full Interactive Simulator if requested */}
        {showFullSimulator && (
          <div className="mt-8 rounded-xl border border-zinc-200/90 bg-[#fafaf9] p-5 sm:p-6 shadow-stitch animate-fadeIn">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pb-4 border-b border-zinc-200/80">
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-zinc-900">Live Fee Ledger Cockpit</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Test real-time status changes and parent SMS dispatch.</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search student, roll, batch..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-8 pl-7.5 pr-2.5 text-xs rounded border border-zinc-200 bg-white focus:border-[#0037b0] focus:outline-none w-52 transition"
                  />
                </div>

                <div className="flex items-center p-0.5 bg-zinc-200/60 rounded text-xs font-medium">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-2.5 py-1 rounded transition ${activeFilter === "all" ? "bg-white text-zinc-900 shadow-stitch" : "text-zinc-600"}`}
                  >
                    All ({studentList.length})
                  </button>
                  <button
                    onClick={() => setActiveFilter("paid")}
                    className={`px-2.5 py-1 rounded transition ${activeFilter === "paid" ? "bg-white text-emerald-800 shadow-stitch" : "text-zinc-600"}`}
                  >
                    Paid (2)
                  </button>
                  <button
                    onClick={() => setActiveFilter("unpaid")}
                    className={`px-2.5 py-1 rounded transition ${activeFilter === "unpaid" ? "bg-white text-red-800 shadow-stitch" : "text-zinc-600"}`}
                  >
                    Unpaid (3)
                  </button>
                </div>
              </div>
            </div>

            {toastMessage && (
              <div className="mt-3 p-2.5 rounded bg-zinc-900 text-white text-xs font-normal flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-[#60a5fa]" />
                  <span>{toastMessage}</span>
                </div>
                <button onClick={() => setToastMessage(null)} className="text-zinc-400 hover:text-white text-xs">Dismiss</button>
              </div>
            )}

            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-100/70 border-b border-zinc-200 text-zinc-500 font-medium text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-3">Student &amp; Roll</th>
                    <th className="py-2.5 px-3">Batch</th>
                    <th className="py-2.5 px-3">Fee Amount</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Action Controls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/60 bg-white">
                  {filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-zinc-50 transition">
                      <td className="py-3 px-3">
                        <div className="font-semibold text-zinc-900">{s.name}</div>
                        <div className="text-[11px] font-mono text-zinc-400">Roll #{s.roll} • {s.phone}</div>
                      </td>
                      <td className="py-3 px-3 text-zinc-700">{s.batch}</td>
                      <td className="py-3 px-3 font-semibold text-zinc-950 tabular-nums">৳{s.fee.toLocaleString()}</td>
                      <td className="py-3 px-3">
                        {s.status === "PAID" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Paid
                          </span>
                        )}
                        {s.status === "UNPAID" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-red-50 text-red-800 border border-red-200">
                            Overdue (Grace Expired)
                          </span>
                        )}
                        {s.status === "NEXT_MONTH" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                            Next Month Deferral
                          </span>
                        )}
                        {s.status === "REMINDER_20TH" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-800 border border-blue-200">
                            Reminder Set: Oct 20
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => setStatus(s.id, "PAID")}
                            className="px-2 py-1 rounded text-[11px] font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition active:scale-98"
                          >
                            Receive
                          </button>
                          <button
                            onClick={() => setStatus(s.id, "UNPAID")}
                            className="px-2 py-1 rounded text-[11px] font-medium bg-red-50 text-red-800 border border-red-200 hover:bg-red-100 transition active:scale-98"
                          >
                            SMS Due
                          </button>
                          <button
                            onClick={() => setStatus(s.id, "NEXT_MONTH")}
                            className="px-2 py-1 rounded text-[11px] font-medium border border-zinc-200 bg-white hover:bg-zinc-50 transition text-zinc-700"
                          >
                            Next Mo
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
