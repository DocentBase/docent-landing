"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Headphones,
  FileSpreadsheet,
  Wrench,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    phone: "",
    approxStudents: "200-500",
    serviceType: "free-data-entry",
    city: "Dhaka",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">
                <Headphones className="w-3.5 h-3.5" />
                <span>DocentBase Operations Desk</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                Get in touch with our <br />
                <span className="text-blue-600">engineering &amp; field support team</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                Whether you need free paper register digitization, an on-site hardware setup, or custom multi-branch pricing, we respond within 15 minutes during operating hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-10 shadow-stitch">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">
                Request Service or Consultation
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Fill out the details below and an operations specialist will coordinate your institution setup.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950">Thank You! Request Dispatched</h4>
                  <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                    We will call you at <span className="font-mono font-semibold text-zinc-900">{formData.phone || "+880 17XXXXXXXX"}</span> within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-zinc-700 mb-1">Coaching / Academy Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Apex Science Care"
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        className="w-full h-10 rounded-lg border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-zinc-700 mb-1">Contact Person Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Prof. Rafiq"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full h-10 rounded-lg border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-zinc-700 mb-1">Mobile / WhatsApp Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="017XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-10 rounded-lg border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-zinc-700 mb-1">Primary Requirement</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full h-10 rounded-lg border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none bg-white"
                      >
                        <option value="free-data-entry">Free Data Entry & Register Digitization</option>
                        <option value="hardware-visit">On-Site Biometric Engineer Visit</option>
                        <option value="software-demo">Software Demo & Trial Setup</option>
                        <option value="enterprise-chain">Multi-Branch Enterprise Pricing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-zinc-700 mb-1">Approximate Student Count</label>
                      <select
                        value={formData.approxStudents}
                        onChange={(e) => setFormData({ ...formData, approxStudents: e.target.value })}
                        className="w-full h-10 rounded-lg border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none bg-white"
                      >
                        <option value="50-200">50 - 200 Students</option>
                        <option value="200-500">200 - 500 Students</option>
                        <option value="500-1500">500 - 1,500 Students</option>
                        <option value="1500+">1,500+ Students (Multi-Branch)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-medium text-zinc-700 mb-1">City / Location</label>
                      <input
                        type="text"
                        placeholder="e.g. Farmgate, Dhaka"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full h-10 rounded-lg border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-zinc-700 mb-1">Additional Notes / Special Instructions</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your batch timings, current ledger format, or hardware questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 p-3 text-xs focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] text-xs font-semibold text-white hover:bg-[#1e40af] shadow-stitch active:scale-[0.99] transition-all"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct WhatsApp Callout */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-stitch space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span>Instant WhatsApp VIP Dispatch</span>
                </div>
                <p className="text-xs text-emerald-800/90 leading-relaxed">
                  Need an instant answer or want to send photos of your student register directly? Chat with our lead operations coordinator on WhatsApp.
                </p>
                <a
                  href="https://wa.me/8801700000000?text=Hello%20DocentBase,%20I%20would%20like%20to%20set%20up%20my%20coaching%20center"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 text-xs font-semibold text-white hover:bg-emerald-700 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+880)</span>
                </a>
              </div>

              {/* Direct Contacts */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-stitch space-y-4 text-xs">
                <div className="font-bold text-zinc-950 uppercase tracking-wider text-[11px]">
                  DIRECT CONTACT CHANNELS
                </div>
                <div className="space-y-3 text-zinc-700">
                  <div className="flex items-start gap-3">
                    <PhoneCall className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-950 font-mono">+880 1700-000000</div>
                      <div className="text-[11px] text-zinc-500">Sat–Thu: 9:00 AM – 10:00 PM</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-950 font-mono">support@docentbase.com</div>
                      <div className="text-[11px] text-zinc-500">Official Operations Desk</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-950">Dhaka Operations Center</div>
                      <div className="text-[11px] text-zinc-500">Level 4, Science Lab / Farmgate, Dhaka 1205</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
