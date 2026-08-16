"use client";

import React, { useState } from "react";
import { ArrowRight, Users, ShieldCheck, Sparkles, Smartphone, CheckCircle, ExternalLink } from "lucide-react";

export function PortalsCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [centerName, setCenterName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!centerName || !phone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with Split View */}
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-[#F8FAFC] to-white p-8 sm:p-12 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Direct Access to Both Portals (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>INSTANT ACCESS WORKSPACES</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  Ready to Experience Zero Friction in Your Teaching?
                </h2>
                
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  Join hundreds of forward-thinking educators, academies, and coaching centers operating on the Docent ecosystem.
                </p>
              </div>

              {/* Two Direct Portal Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Admin Portal Card */}
                <div className="rounded-2xl border-2 border-blue-600/30 bg-blue-50/40 p-5 space-y-3 flex flex-col justify-between hover:border-blue-600 transition">
                  <div className="space-y-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                      TEACHER & ADMIN COCKPIT
                    </span>
                    <h3 className="font-bold text-base text-zinc-900">admin.docentbase.com</h3>
                    <p className="text-xs text-zinc-600">
                      Attendance logger, monthly grace-period fee manager, 10-point daily homework grader, and SMS engine.
                    </p>
                  </div>
                  <a
                    href="https://admin.docentbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-xs font-bold text-white shadow-2xs hover:bg-blue-700 transition"
                  >
                    <span>Open Teacher Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Student Portal Card */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3 flex flex-col justify-between hover:border-zinc-300 transition">
                  <div className="space-y-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-700 uppercase tracking-wider">
                      STUDENT & PARENT HUB
                    </span>
                    <h3 className="font-bold text-base text-zinc-900">student.docentbase.com</h3>
                    <p className="text-xs text-zinc-600">
                      Monthly attendance stats, test scores, lecture notes download, topic syllabus, and fee receipts.
                    </p>
                  </div>
                  <a
                    href="https://student.docentbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition"
                  >
                    <Users className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Open Student Portal</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>

              </div>

            </div>

            {/* Right: Request Free On-Site Onboarding Form (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-md shadow-zinc-200/50 space-y-4">
              
              <div className="space-y-1">
                <h3 className="font-bold text-base text-zinc-900">Schedule Free On-Site Onboarding</h3>
                <p className="text-xs text-zinc-500">
                  Our field engineers will visit your coaching center, insert all student data, and test your biometric scanners.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-2 animate-fadeIn">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Request Received Successfully!
                  </div>
                  <p>
                    A Docent onboarding specialist will call you at <strong className="font-semibold">{phone}</strong> within 30 minutes to arrange your center visit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 block mb-1">Coaching / Academy Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Master Physics Coaching"
                      value={centerName}
                      onChange={(e) => setCenterName(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-zinc-200 text-xs bg-zinc-50 focus:bg-white focus:border-blue-600 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700 block mb-1">Contact Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1700-000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-zinc-200 text-xs bg-zinc-50 focus:bg-white focus:border-blue-600 focus:outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-10 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 active:scale-98 transition shadow-xs"
                  >
                    Request Physical Center Visit & Data Setup
                  </button>

                  <div className="text-[11px] text-zinc-400 text-center">
                    Zero obligation • 100% Free Data Digitization
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
