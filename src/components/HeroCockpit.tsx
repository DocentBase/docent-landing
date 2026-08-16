"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Fingerprint, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Send, 
  Smartphone, 
  QrCode, 
  Headphones, 
  Search, 
  Sparkles, 
  FileSpreadsheet, 
  ArrowRight,
  TrendingUp,
  UserCheck,
  Shield,
  ShieldCheck,
  Award,
  AlertCircle
} from "lucide-react";

export function HeroCockpit() {
  const [activeTab, setActiveTab] = useState<"fees" | "attendance" | "homework" | "support">("fees");

  // State for Fee Engine Demo
  const [students, setStudents] = useState([
    { id: "USI-8821", name: "Tanvir Ahmed", roll: "12", batch: "Batch-A (Morning)", fee: "৳2,500", status: "UNPAID", dueDays: "3 days past 15th", phone: "+880 1712-445892" },
    { id: "USI-9043", name: "Ayesha Siddiqua", roll: "04", batch: "Batch-B (Evening)", fee: "৳2,500", status: "PAID", dueDays: "Paid on 11th Aug", phone: "+880 1823-998811" },
    { id: "USI-7712", name: "Mahir Faisal", roll: "19", batch: "Batch-A (Morning)", fee: "৳2,500", status: "NEXT_MONTH", dueDays: "Deferred to Sept 10", phone: "+880 1911-332244" },
    { id: "USI-6520", name: "Nusrat Jahan", roll: "07", batch: "Batch-C (Weekend)", fee: "৳3,000", status: "REMINDER", dueDays: "Reminder set: 20th Aug", phone: "+880 1622-778899" },
  ]);

  const [smsAlert, setSmsAlert] = useState<string | null>(null);

  // State for Attendance Demo
  const [attendanceMode, setAttendanceMode] = useState<"phone" | "fingerprint" | "usi">("phone");
  const [phoneTapList, setPhoneTapList] = useState([
    { name: "Rahid Hasan", roll: "01", batch: "Morning", status: "present", avatar: "RH" },
    { name: "Farhan Kabir", roll: "02", batch: "Morning", status: "absent", avatar: "FK" },
    { name: "Samiya Noor", roll: "03", batch: "Morning", status: "present", avatar: "SN" },
  ]);
  const [fingerprintScanning, setFingerprintScanning] = useState(false);
  const [scannedStudent, setScannedStudent] = useState<string | null>(null);
  const [usiCrossBatchResolved, setUsiCrossBatchResolved] = useState(false);

  // State for Homework Demo
  const [hwScore, setHwScore] = useState<number>(9);
  const [hwSaved, setHwSaved] = useState(false);

  const handleAction = (id: string, newStatus: "PAID" | "UNPAID" | "NEXT_MONTH" | "REMINDER") => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
    const target = students.find(s => s.id === id);
    if (newStatus === "PAID") {
      setSmsAlert(`SMS dispatched to ${target?.name}'s parent (${target?.phone}): "Tuition fee of ${target?.fee} received successfully. Thank you."`);
    } else if (newStatus === "UNPAID") {
      setSmsAlert(`SMS dispatched to ${target?.name}'s parent (${target?.phone}): "Gentle reminder: Monthly tuition fee of ${target?.fee} was due on the 15th. Please settle promptly."`);
    } else if (newStatus === "NEXT_MONTH") {
      setSmsAlert(`Status updated: ${target?.name}'s fee merged with next month's invoice. No SMS sent.`);
    } else {
      setSmsAlert(`Automated reminder scheduled for 20th Aug at 10:00 AM for ${target?.name}.`);
    }
    setTimeout(() => {
      setSmsAlert(null);
    }, 6000);
  };

  const toggleAttendance = (index: number, status: "present" | "absent") => {
    setPhoneTapList(prev => {
      const copy = [...prev];
      copy[index].status = status;
      return copy;
    });
  };

  const triggerFingerprintScan = () => {
    setFingerprintScanning(true);
    setScannedStudent(null);
    setTimeout(() => {
      setFingerprintScanning(false);
      setScannedStudent("USI-8821: Tanvir Ahmed • Batch-A Morning • Attendance Logged 08:02 AM (Ontime)");
    }, 900);
  };

  const triggerUsiDemo = () => {
    setUsiCrossBatchResolved(true);
    setTimeout(() => {
      setUsiCrossBatchResolved(false);
    }, 7000);
  };

  return (
    <div className="w-full rounded-[22px] sm:rounded-[28px] border border-zinc-200/90 bg-white shadow-[0_25px_70px_-20px_rgba(15,23,42,0.15)] overflow-hidden">
      
      {/* Top Cockpit Chrome Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50/95 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <div className="hidden sm:flex items-center gap-2 ml-3 px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-600">
            <span className="text-zinc-400">workspace:</span>
            <span className="font-semibold text-blue-600">admin.docentbase.com/cockpit</span>
          </div>
        </div>

        {/* Live operational badge */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Center Engine
          </span>
        </div>
      </div>

      {/* Cockpit Mode Tab Switcher */}
      <div className="bg-zinc-100/70 p-2 sm:p-2.5 border-b border-zinc-200 flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("fees")}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all whitespace-nowrap ${
            activeTab === "fees"
              ? "bg-white text-blue-700 shadow-xs border border-zinc-200"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>1. Grace Period & Fee Engine</span>
          <span className="px-1.5 py-0.2 text-[10px] rounded-md bg-red-100 text-red-700 font-bold">Unpaid Alert</span>
        </button>

        <button
          onClick={() => setActiveTab("attendance")}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all whitespace-nowrap ${
            activeTab === "attendance"
              ? "bg-white text-blue-700 shadow-xs border border-zinc-200"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"
          }`}
        >
          <Fingerprint className="w-3.5 h-3.5" />
          <span>2. Biometric & USI Attendance</span>
        </button>

        <button
          onClick={() => setActiveTab("homework")}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all whitespace-nowrap ${
            activeTab === "homework"
              ? "bg-white text-blue-700 shadow-xs border border-zinc-200"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>3. 10-Pt Homework & Parent Report</span>
        </button>

        <button
          onClick={() => setActiveTab("support")}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all whitespace-nowrap ${
            activeTab === "support"
              ? "bg-white text-blue-700 shadow-xs border border-zinc-200"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"
          }`}
        >
          <Headphones className="w-3.5 h-3.5 text-amber-600" />
          <span>4. 24/7 Physical Support Layer</span>
        </button>
      </div>

      {/* Cockpit Interactive Content Canvas */}
      <div className="p-4 sm:p-7 bg-[#F8FAFC]">
        
        {/* SMS Notification Banner when triggered */}
        {smsAlert && (
          <div className="mb-5 p-3.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-medium flex items-start gap-2.5 shadow-md shadow-blue-500/20 animate-fadeIn">
            <Send className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-bold">Automated Parent SMS Engine: </span>
              {smsAlert}
            </div>
          </div>
        )}

        {/* TAB 1: FEES & GRACE PERIOD ENGINE */}
        {activeTab === "fees" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  15th
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Active Grace Period Policy</div>
                  <div className="text-xs text-zinc-500">10th to 15th of month • Auto-flag unpaid accounts on 16th at 00:01 AM</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Collected: ৳1,42,500
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                  Unpaid Queue: 4 Students
                </span>
              </div>
            </div>

            {/* Table of Students with Actions */}
            <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-semibold text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Student & USI</th>
                      <th className="py-3 px-3">Batch / Roll</th>
                      <th className="py-3 px-3">Amount</th>
                      <th className="py-3 px-3">Grace Status</th>
                      <th className="py-3 px-4 text-right">Instant Action Controls</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-zinc-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-zinc-900">{student.name}</div>
                          <div className="text-[11px] font-mono text-zinc-400">{student.id} • {student.phone}</div>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="font-medium text-zinc-700">{student.batch}</span>
                          <div className="text-[11px] text-zinc-400">Roll #{student.roll}</div>
                        </td>
                        <td className="py-3.5 px-3 font-semibold text-zinc-950 tabular-nums">
                          {student.fee}
                        </td>
                        <td className="py-3.5 px-3">
                          {student.status === "PAID" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3" /> Paid
                            </span>
                          )}
                          {student.status === "UNPAID" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                              <XCircle className="w-3 h-3" /> Unpaid ({student.dueDays})
                            </span>
                          )}
                          {student.status === "NEXT_MONTH" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                              <Clock className="w-3 h-3" /> Merged Next Mo
                            </span>
                          )}
                          {student.status === "REMINDER" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                              <Clock className="w-3 h-3" /> Scheduled 20th
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={() => handleAction(student.id, "PAID")}
                              className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition active:scale-95 shadow-2xs"
                              title="Mark Paid & Send SMS receipt to Parent"
                            >
                              [ Paid ]
                            </button>
                            <button
                              onClick={() => handleAction(student.id, "UNPAID")}
                              className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-100 text-red-800 hover:bg-red-200 transition active:scale-95"
                              title="Trigger Parent Due Reminder SMS"
                            >
                              [ Unpaid SMS ]
                            </button>
                            <button
                              onClick={() => handleAction(student.id, "NEXT_MONTH")}
                              className="px-2 py-1 rounded-md text-[11px] font-medium border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition active:scale-95 text-zinc-700"
                              title="Defer and merge with next month"
                            >
                              [ Next Month ]
                            </button>
                            <button
                              onClick={() => handleAction(student.id, "REMINDER")}
                              className="hidden sm:inline-block px-2 py-1 rounded-md text-[11px] font-medium border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition active:scale-95 text-zinc-700"
                              title="Set automated reminder date"
                            >
                              [ Reminder ]
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between text-xs text-zinc-500 pt-1 px-1">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Zero fee leakage: Eliminates students keeping cash meant for coaching tuition.</span>
              </div>
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                Export Unpaid PDF Report →
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: BIOMETRIC & ATTENDANCE HUB */}
        {activeTab === "attendance" && (
          <div className="space-y-4">
            
            {/* Sub Mode Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setAttendanceMode("phone")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                  attendanceMode === "phone" ? "bg-blue-600 text-white" : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>A. Teacher Phone (Green/Red Tap)</span>
              </button>
              <button
                onClick={() => setAttendanceMode("fingerprint")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                  attendanceMode === "fingerprint" ? "bg-blue-600 text-white" : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <Fingerprint className="w-3.5 h-3.5" />
                <span>B. Biometric Sensor (Plug & Play)</span>
              </button>
              <button
                onClick={() => setAttendanceMode("usi")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                  attendanceMode === "usi" ? "bg-blue-600 text-white" : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>C. USI Universal Cross-Batch Resolver</span>
              </button>
            </div>

            {/* Mode A: Teacher Phone Tap */}
            {attendanceMode === "phone" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {phoneTapList.map((st, i) => (
                  <div key={st.name} className="bg-white p-4 rounded-xl border border-zinc-200 shadow-2xs flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                        {st.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-zinc-900">{st.name}</div>
                        <div className="text-xs text-zinc-500">Roll {st.roll} • {st.batch} Batch</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => toggleAttendance(i, "present")}
                        className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 ${
                          st.status === "present"
                            ? "bg-emerald-600 text-white shadow-xs"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Present
                      </button>
                      <button
                        onClick={() => toggleAttendance(i, "absent")}
                        className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 ${
                          st.status === "absent"
                            ? "bg-red-600 text-white shadow-xs"
                            : "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
                        }`}
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        Absent
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mode B: Fingerprint Sensor */}
            {attendanceMode === "fingerprint" && (
              <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Fingerprint className={`w-10 h-10 ${fingerprintScanning ? "text-emerald-600 animate-pulse" : ""}`} />
                </div>
                <div className="max-w-md">
                  <h4 className="font-bold text-zinc-900 text-sm">High-Volume Automated Biometric Scanner</h4>
                  <p className="text-xs text-zinc-500 mt-1">Students tap their finger at center entrance. 1,000+ students logged in seconds with zero teacher interaction.</p>
                </div>
                <button
                  onClick={triggerFingerprintScan}
                  disabled={fingerprintScanning}
                  className="h-10 px-5 rounded-lg bg-blue-600 text-white font-semibold text-xs shadow-md hover:bg-blue-700 active:scale-95 transition disabled:opacity-50"
                >
                  {fingerprintScanning ? "Reading Fingerprint..." : "Simulate Student Fingerprint Scan"}
                </button>
                {scannedStudent && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold animate-fadeIn">
                    ✓ {scannedStudent}
                  </div>
                )}
              </div>
            )}

            {/* Mode C: USI Universal Student Identifier */}
            {attendanceMode === "usi" && (
              <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900">Universal Student Identifier (USI) Cross-Batch Resolver</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Edge-case solved: Morning batch student comes late to the afternoon batch? No manual searching across lists. The USI automatically tags their arrival in the correct record.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 text-xs space-y-2 font-mono">
                  <div className="text-zinc-600">Incoming Scan: USI-8821 [Student: Tanvir Ahmed]</div>
                  <div className="text-zinc-600">Enrolled Batch: Batch-A (Morning 08:00 AM)</div>
                  <div className="text-amber-700 font-bold">Detected Arrival: 04:15 PM (Batch-B Afternoon session)</div>
                </div>

                <button
                  onClick={triggerUsiDemo}
                  className="h-9 px-4 rounded-lg bg-zinc-900 text-white font-semibold text-xs hover:bg-zinc-800 transition active:scale-95"
                >
                  Simulate Cross-Batch USI Intercept
                </button>

                {usiCrossBatchResolved && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold animate-fadeIn">
                    ✓ Resolved: Logged Tanvir Ahmed as Present (Cross-Batch Guest) in Batch-A master ledger without disrupting Afternoon attendance list.
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* TAB 3: 10-POINT HOMEWORK & MONTHLY PARENT REPORT */}
        {activeTab === "homework" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Left: 10-pt Rating Input */}
            <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Daily Homework Grader</span>
                <span className="text-xs font-semibold text-blue-600">Student: Samiya Noor (Roll #03)</span>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-700 block mb-2">
                  Select Daily Score: <span className="font-bold text-blue-600 text-base">{hwScore} / 10</span>
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => setHwScore(num)}
                      className={`h-9 rounded-lg font-bold text-xs transition ${
                        hwScore === num
                          ? "bg-blue-600 text-white shadow-2xs"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setHwSaved(true);
                    setTimeout(() => setHwSaved(false), 4000);
                  }}
                  className="w-full h-9 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition active:scale-98"
                >
                  {hwSaved ? "✓ Daily Score Saved to Master Ledger" : "Commit Daily Homework Score"}
                </button>
              </div>

              <p className="text-[11px] text-zinc-500">
                Takes only 2 seconds per student. Compounds automatically into monthly parent analytical cards.
              </p>
            </div>

            {/* Right: Parent Monthly Report Preview */}
            <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-zinc-900">Parent Monthly Report Card</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700">SMS / WhatsApp Ready</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-500">Monthly Attendance:</span>
                  <span className="font-bold text-zinc-900">25 / 26 Days (96%)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-500">Avg Homework Score:</span>
                  <span className="font-bold text-blue-600">{((hwScore + 8.5) / 2).toFixed(1)} / 10</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-500">Physics Chapter Test:</span>
                  <span className="font-bold text-emerald-600">92 / 100 (Rank #2)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Overall Trajectory:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Advancing Rapidly</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100">
                <div className="text-[11px] text-zinc-400 italic">
                  "Dear Parent, here is Samiya's August Academic Summary from Master Academy. Attendance: 96%, Avg HW: 8.8/10. Keep it up!"
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: 24/7 PHYSICAL SUPPORT LAYER */}
        {activeTab === "support" && (
          <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  24/7
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">Physical Layer & Data Entry as a Service</h4>
                  <p className="text-xs text-zinc-500">Teachers are educators, not IT technicians. We do the heavy lifting for you.</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900">
                White-Glove Included
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                <div className="text-xs font-bold text-zinc-900">1. Zero Manual Data Entry</div>
                <div className="text-xs text-zinc-500 mt-1">Send us paper sheets or photos. Our team inputs all 500+ students with photos & phones into your database.</div>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                <div className="text-xs font-bold text-zinc-900">2. On-Site Center Visits</div>
                <div className="text-xs text-zinc-500 mt-1">Need biometric setup or staff trained? Our field engineer visits your physical coaching center in person.</div>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                <div className="text-xs font-bold text-zinc-900">3. Friction-Free Publishing</div>
                <div className="text-xs text-zinc-500 mt-1">We assist in printing publications, question banks, and promotional flyers for your center.</div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Cockpit Footer Status Bar */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between text-[11px] text-zinc-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            256-Bit Encrypted Master Ledger
          </span>
          <span className="hidden sm:inline-block text-zinc-300">•</span>
          <span className="hidden sm:inline-block">SSLCommerz / bKash / Nagad Instant Webhook Sync</span>
        </div>
        <div className="font-mono text-zinc-400">
          Sync Status: 100% Operational
        </div>
      </div>

    </div>
  );
}
