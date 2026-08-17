"use client";

import React, { useState } from "react";
import { ArrowRight, Users, CheckCircle2, ExternalLink } from "lucide-react";

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
    <section className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with Split View */}
        <div className="rounded-xl border border-zinc-200/90 bg-[#fafaf9] p-6 sm:p-10 shadow-stitch">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Direct Access to Both Portals (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white border border-zinc-200 text-zinc-700 text-[11px] font-semibold uppercase tracking-wider">
                  <span>Direct Workspace Access</span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                  Ready to Experience Calm in Your Teaching?
                </h2>
                
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Join hundreds of educators, academies, and private coaching centers operating effortlessly on Docent.
                </p>
              </div>

              {/* Two Direct Portal Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                
                {/* Admin Portal Card */}
                <div className="rounded-lg border border-zinc-200/90 bg-white p-4.5 space-y-3 flex flex-col justify-between shadow-stitch">
                  <div className="space-y-1">
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-zinc-100 text-zinc-800 uppercase tracking-wider">
                      Teacher &amp; Admin Cockpit
                    </span>
                    <h3 className="font-semibold text-sm text-zinc-900">admin.docentbase.com</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Attendance logger, monthly grace-period fee ledger, 10-point daily homework, and SMS engine.
                    </p>
                  </div>
                  <a
                    href="https://admin.docentbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8.5 items-center justify-center gap-1.5 rounded bg-[#1d4ed8] hover:bg-[#1e40af] text-xs font-semibold text-white shadow-stitch transition"
                  >
                    <span>Launch Teacher Cockpit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Student Portal Card */}
                <div className="rounded-lg border border-zinc-200/90 bg-white p-4.5 space-y-3 flex flex-col justify-between shadow-stitch">
                  <div className="space-y-1">
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-zinc-100 text-zinc-800 uppercase tracking-wider">
                      Student &amp; Parent Hub
                    </span>
                    <h3 className="font-semibold text-sm text-zinc-900">student.docentbase.com</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Monthly attendance stats, test scores, lecture notes download, topic syllabus, and fee receipts.
                    </p>
                  </div>
                  <a
                    href="https://student.docentbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8.5 items-center justify-center gap-1.5 rounded border border-zinc-300 bg-white text-xs font-semibold text-zinc-800 hover:bg-zinc-50 shadow-stitch transition"
                  >
                    <Users className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Open Student Portal</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>

              </div>

            </div>

            {/* Right: Request Free On-Site Onboarding Form (5 cols) */}
            <div className="lg:col-span-5 rounded-lg border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-stitch space-y-3.5">
              
              <div className="space-y-0.5">
                <h3 className="font-semibold text-sm sm:text-base text-zinc-900">Schedule Free On-Site Onboarding</h3>
                <p className="text-xs text-zinc-500">
                  Our field engineers will visit your coaching center, digitize student records, and test your scanners.
                </p>
              </div>

              {submitted ? (
                <div className="p-3.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-1 animate-fadeIn">
                  <div className="font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Request Received Successfully
                  </div>
                  <p className="text-[11px]">
                    An onboarding specialist will reach out to <strong className="font-semibold">{phone}</strong> shortly to confirm your center visit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-700 block mb-1">Coaching / Academy Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Master Physics Coaching"
                      value={centerName}
                      onChange={(e) => setCenterName(e.target.value)}
                      className="w-full h-8.5 px-3 rounded border border-zinc-200 text-xs bg-zinc-50 focus:bg-white focus:border-[#1d4ed8] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-700 block mb-1">Contact Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1700-000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-8.5 px-3 rounded border border-zinc-200 text-xs bg-zinc-50 focus:bg-white focus:border-[#1d4ed8] focus:outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-9 rounded bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-semibold shadow-stitch transition"
                  >
                    Request Physical Center Visit &amp; Data Setup
                  </button>

                  <div className="text-[10px] text-zinc-400 text-center">
                    Zero obligation • 100% Free Data Digitization Included
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
