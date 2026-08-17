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
  Headphones, 
  Sparkles, 
  FileSpreadsheet, 
  ShieldCheck, 
  Award,
  Layers
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
    }, 800);
  };

  const triggerUsiDemo = () => {
    setUsiCrossBatchResolved(true);
    setTimeout(() => {
      setUsiCrossBatchResolved(false);
    }, 6000);
  };

  return (
    <div className="w-full rounded-xl border border-zinc-200/90 bg-white shadow-stitch-md overflow-hidden text-zinc-900">
      
      {/* Top Cockpit Frame Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200/80 bg-zinc-50/80 px-4 sm:px-6 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 inline-block" />
          </div>
          <div className="hidden sm:flex items-center gap-2 ml-3 px-2 py-0.5 rounded bg-white border border-zinc-200 text-[11px] font-mono text-zinc-600">
            <span className="text-zinc-400">cockpit:</span>
            <span className="font-medium text-[#1d4ed8]">admin.docentbase.com/live</span>
          </div>
        </div>

        {/* Live status indicator */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            System Live &amp; Synced
          </span>
        </div>
      </div>

      {/* Cockpit Mode Tab Switcher */}
      <div className="bg-zinc-50 border-b border-zinc-200/80 p-1.5 sm:p-2 flex items-center gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab("fees")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
            activeTab === "fees"
              ? "bg-white text-zinc-950 shadow-stitch border border-zinc-200/90 font-semibold"
              : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
          }`}
        >
          <CreditCard className="w-3.5 h-3.5 text-[#1d4ed8]" />
          <span>Fee Engine &amp; Grace Period</span>
          <span className="px-1.5 py-0.2 text-[10px] rounded bg-red-50 text-red-700 border border-red-200 font-semibold">1 Alert</span>
        </button>

        <button
          onClick={() => setActiveTab("attendance")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
            activeTab === "attendance"
              ? "bg-white text-zinc-950 shadow-stitch border border-zinc-200/90 font-semibold"
              : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
          }`}
        >
          <Fingerprint className="w-3.5 h-3.5 text-[#1d4ed8]" />
          <span>Biometric &amp; USI Attendance</span>
        </button>

        <button
          onClick={() => setActiveTab("homework")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
            activeTab === "homework"
              ? "bg-white text-zinc-950 shadow-stitch border border-zinc-200/90 font-semibold"
              : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
          }`}
        >
          <Award className="w-3.5 h-3.5 text-[#1d4ed8]" />
          <span>10-Point Daily Homework</span>
        </button>

        <button
          onClick={() => setActiveTab("support")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
            activeTab === "support"
              ? "bg-white text-zinc-950 shadow-stitch border border-zinc-200/90 font-semibold"
              : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
          }`}
        >
          <Headphones className="w-3.5 h-3.5 text-amber-700" />
          <span>24/7 Ground Support Layer</span>
        </button>
      </div>

      {/* Cockpit Interactive Content Canvas */}
      <div className="p-4 sm:p-6 bg-white">
        
        {/* SMS Notification Banner when triggered */}
        {smsAlert && (
          <div className="mb-4 p-3 rounded-md bg-zinc-900 text-white text-xs font-normal flex items-start gap-2.5 animate-fadeIn">
            <Send className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-semibold text-white">Automated SMS Engine: </span>
              <span className="text-zinc-300">{smsAlert}</span>
            </div>
          </div>
        )}

        {/* TAB 1: FEES & GRACE PERIOD ENGINE */}
        {activeTab === "fees" && (
          <div className="space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-50/70 p-3 rounded-lg border border-zinc-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center font-bold text-xs">
                  15th
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-900">Active Grace Period Threshold</div>
                  <div className="text-[11px] text-zinc-500">Grace period ends on 15th • Automatic parent reminder triggers on 16th</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 tabular-nums">
                  Collected: ৳1,42,500
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-medium bg-red-50 text-red-800 border border-red-200">
                  Unpaid: 4 Students
                </span>
              </div>
            </div>

            {/* Table of Students with Actions */}
            <div className="rounded-lg border border-zinc-200/80 overflow-hidden shadow-stitch">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 border-b border-zinc-200/80 text-zinc-500 font-medium text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-3.5">Student &amp; USI</th>
                      <th className="py-2.5 px-3">Batch</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Grace Status</th>
                      <th className="py-2.5 px-3.5 text-right">Instant Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 bg-white">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-zinc-50/60 transition-colors">
                        <td className="py-3 px-3.5">
                          <div className="font-semibold text-zinc-900">{student.name}</div>
                          <div className="text-[11px] font-mono text-zinc-400">{student.id} • {student.phone}</div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="text-zinc-700">{student.batch}</span>
                          <div className="text-[11px] text-zinc-400">Roll #{student.roll}</div>
                        </td>
                        <td className="py-3 px-3 font-semibold text-zinc-950 tabular-nums">
                          {student.fee}
                        </td>
                        <td className="py-3 px-3">
                          {student.status === "PAID" && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Paid
                            </span>
                          )}
                          {student.status === "UNPAID" && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-red-50 text-red-800 border border-red-200">
                              <XCircle className="w-3 h-3 text-red-600" /> Unpaid ({student.dueDays})
                            </span>
                          )}
                          {student.status === "NEXT_MONTH" && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                              <Clock className="w-3 h-3 text-amber-600" /> Merged Next Mo
                            </span>
                          )}
                          {student.status === "REMINDER" && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-800 border border-blue-200">
                              <Clock className="w-3 h-3 text-blue-600" /> Scheduled 20th
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3.5 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={() => handleAction(student.id, "PAID")}
                              className="px-2 py-1 rounded text-[11px] font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition active:scale-98"
                              title="Mark Paid & Send SMS receipt to Parent"
                            >
                              Receive
                            </button>
                            <button
                              onClick={() => handleAction(student.id, "UNPAID")}
                              className="px-2 py-1 rounded text-[11px] font-medium bg-red-50 hover:bg-red-100 text-red-800 border border-red-200 transition active:scale-98"
                              title="Trigger Parent Due Reminder SMS"
                            >
                              SMS Alert
                            </button>
                            <button
                              onClick={() => handleAction(student.id, "NEXT_MONTH")}
                              className="px-2 py-1 rounded text-[11px] font-medium border border-zinc-200 bg-white hover:bg-zinc-50 transition active:scale-98 text-zinc-700"
                              title="Defer and merge with next month"
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
          </div>
        )}

        {/* TAB 2: BIOMETRIC & ATTENDANCE HUB */}
        {activeTab === "attendance" && (
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setAttendanceMode("phone")}
                className={`px-3 py-1 rounded text-xs font-medium transition ${
                  attendanceMode === "phone" ? "bg-[#1d4ed8] text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                1. Mobile Tap (Teacher Cockpit)
              </button>
              <button
                onClick={() => setAttendanceMode("fingerprint")}
                className={`px-3 py-1 rounded text-xs font-medium transition ${
                  attendanceMode === "fingerprint" ? "bg-[#1d4ed8] text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                2. Biometric Fingerprint Device
              </button>
              <button
                onClick={() => setAttendanceMode("usi")}
                className={`px-3 py-1 rounded text-xs font-medium transition ${
                  attendanceMode === "usi" ? "bg-[#1d4ed8] text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                3. USI Cross-Batch Auto-Resolver
              </button>
            </div>

            {/* Mode A: Teacher Phone Tap */}
            {attendanceMode === "phone" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {phoneTapList.map((st, i) => (
                  <div key={st.name} className="bg-zinc-50/60 p-3.5 rounded-lg border border-zinc-200/80 flex flex-col justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-zinc-200 text-zinc-800 flex items-center justify-center font-bold text-xs">
                        {st.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-zinc-900">{st.name}</div>
                        <div className="text-[11px] text-zinc-500">Roll {st.roll} • {st.batch}</div>
                      </div>
                    </div>
                    
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => toggleAttendance(i, "present")}
                        className={`h-8 rounded font-semibold text-xs flex items-center justify-center gap-1 transition ${
                          st.status === "present"
                            ? "bg-emerald-600 text-white"
                            : "bg-white text-emerald-800 border border-zinc-200 hover:bg-emerald-50"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Present
                      </button>
                      <button
                        onClick={() => toggleAttendance(i, "absent")}
                        className={`h-8 rounded font-semibold text-xs flex items-center justify-center gap-1 transition ${
                          st.status === "absent"
                            ? "bg-red-600 text-white"
                            : "bg-white text-red-800 border border-zinc-200 hover:bg-red-50"
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
              <div className="bg-zinc-50/60 p-5 rounded-lg border border-zinc-200/80 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-[#1d4ed8] shadow-stitch">
                  <Fingerprint className={`w-7 h-7 ${fingerprintScanning ? "text-emerald-600 animate-pulse" : ""}`} />
                </div>
                <div className="max-w-md">
                  <h4 className="font-semibold text-zinc-900 text-xs sm:text-sm">High-Speed Automated Biometric Scanner</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Students touch scanner at entrance. Instant check-in in under 1 second with automated parent SMS.</p>
                </div>
                <button
                  onClick={triggerFingerprintScan}
                  disabled={fingerprintScanning}
                  className="h-8.5 px-4 rounded bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold text-xs shadow-stitch transition disabled:opacity-50"
                >
                  {fingerprintScanning ? "Scanning..." : "Simulate Biometric Scan"}
                </button>
                {scannedStudent && (
                  <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium animate-fadeIn">
                    ✓ {scannedStudent}
                  </div>
                )}
              </div>
            )}

            {/* Mode C: USI Universal Student Identifier */}
            {attendanceMode === "usi" && (
              <div className="bg-zinc-50/60 p-4 rounded-lg border border-zinc-200/80 space-y-3">
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-zinc-900">Universal Student Identifier (USI) Cross-Batch Auto-Resolver</h4>
                  <p className="text-[11px] text-zinc-600 mt-0.5">
                    If a Morning batch student attends the Evening batch, the system automatically marks them present in their enrolled ledger without creating duplicate records.
                  </p>
                </div>

                <div className="p-3 rounded bg-white border border-zinc-200 text-[11px] space-y-1 font-mono text-zinc-700">
                  <div>Incoming: USI-8821 [Tanvir Ahmed]</div>
                  <div>Enrolled: Batch-A (Morning 08:00 AM)</div>
                  <div className="text-[#1d4ed8] font-semibold">Detected Arrival: 04:15 PM (Evening Session)</div>
                </div>

                <button
                  onClick={triggerUsiDemo}
                  className="h-8 px-3 rounded bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 transition"
                >
                  Simulate Cross-Batch Match
                </button>

                {usiCrossBatchResolved && (
                  <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium animate-fadeIn">
                    ✓ Resolved: Logged Tanvir Ahmed as Present in Batch-A master ledger automatically.
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
            <div className="bg-zinc-50/60 p-4 rounded-lg border border-zinc-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-900">Daily Homework Grader</span>
                <span className="text-xs text-[#1d4ed8] font-medium">Samiya Noor (Roll #03)</span>
              </div>

              <div>
                <label className="text-[11px] font-medium text-zinc-600 block mb-1.5">
                  Daily Score: <span className="font-semibold text-zinc-900">{hwScore} / 10</span>
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => setHwScore(num)}
                      className={`h-7.5 rounded text-xs font-semibold transition ${
                        hwScore === num
                          ? "bg-[#1d4ed8] text-white"
                          : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setHwSaved(true);
                  setTimeout(() => setHwSaved(false), 3000);
                }}
                className="w-full h-8 rounded bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition"
              >
                {hwSaved ? "✓ Saved to Master Record" : "Save Daily Score"}
              </button>
            </div>

            {/* Right: Parent Monthly Report Preview */}
            <div className="bg-zinc-50/60 p-4 rounded-lg border border-zinc-200/80 space-y-2.5">
              <div className="flex items-center justify-between border-b border-zinc-200/80 pb-1.5">
                <div className="flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span className="text-xs font-semibold text-zinc-900">Parent Monthly Summary Card</span>
                </div>
                <span className="text-[10px] font-medium text-zinc-500">Auto SMS Ready</span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-0.5">
                  <span className="text-zinc-500">Monthly Attendance:</span>
                  <span className="font-medium text-zinc-900">25 / 26 Days (96%)</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-zinc-500">Avg Homework Score:</span>
                  <span className="font-semibold text-[#1d4ed8]">{((hwScore + 8.5) / 2).toFixed(1)} / 10</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-zinc-500">Physics Chapter Test:</span>
                  <span className="font-medium text-emerald-700">92 / 100</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200/80 text-[11px] text-zinc-500 italic">
                "Dear Parent, here is Samiya's August Summary from Master Academy. Attendance: 96%, Avg HW: 8.8/10."
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 24/7 PHYSICAL SUPPORT LAYER */}
        {activeTab === "support" && (
          <div className="bg-zinc-50/60 p-4 rounded-lg border border-zinc-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-zinc-900">On-Site Data Entry &amp; Ground Visits</h4>
                <p className="text-[11px] text-zinc-500">We do the administrative groundwork so teachers can focus purely on teaching.</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                Full Ground Support
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded bg-white border border-zinc-200/80 shadow-stitch">
                <div className="text-xs font-semibold text-zinc-900">1. Data Entry as a Service</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Send paper lists or photos; we digitize every student with parent phone numbers into the ledger.</div>
              </div>
              <div className="p-3 rounded bg-white border border-zinc-200/80 shadow-stitch">
                <div className="text-xs font-semibold text-zinc-900">2. In-Person Hardware Setup</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Our field engineer visits your center to set up fingerprint hardware and train desk staff.</div>
              </div>
              <div className="p-3 rounded bg-white border border-zinc-200/80 shadow-stitch">
                <div className="text-xs font-semibold text-zinc-900">3. Question Bank Printing</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">We assist in formatting and physical printing of lecture sheets and center publications.</div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Cockpit Footer Status Bar */}
      <div className="border-t border-zinc-200/80 bg-zinc-50/80 px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between text-[11px] text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ed8]" />
            256-Bit Encrypted Academic Ledger
          </span>
          <span className="text-zinc-300">•</span>
          <span>Instant Webhook &amp; Parent SMS Engine</span>
        </div>
        <div className="font-mono text-zinc-400 text-[10px]">
          Status: Active
        </div>
      </div>

    </div>
  );
}
