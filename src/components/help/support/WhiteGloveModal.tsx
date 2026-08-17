"use client";

import { useState } from "react";
import { X, Headphones, FileSpreadsheet, Wrench, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhiteGloveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhiteGloveModal({ isOpen, onClose }: WhiteGloveModalProps) {
  const [activeTab, setActiveTab] = useState<"data-entry" | "engineer" | "whatsapp">("data-entry");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPhone: "",
    approxStudents: "200-500",
    city: "Dhaka",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/70 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 tracking-[-0.01em]">
                DocentBase White-Glove Support Desk
              </h3>
              <p className="text-[11px] text-zinc-500">24/7 Human Operations & Engineering Concierge</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50/50 text-xs font-medium text-zinc-600">
          <button
            onClick={() => { setActiveTab("data-entry"); setSubmitted(false); }}
            className={cn(
              "flex items-center justify-center gap-1.5 py-3 border-b-2 transition-colors",
              activeTab === "data-entry"
                ? "border-blue-600 text-blue-700 bg-white font-semibold"
                : "border-transparent hover:text-zinc-900"
            )}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Data Entry (Free)</span>
          </button>
          <button
            onClick={() => { setActiveTab("engineer"); setSubmitted(false); }}
            className={cn(
              "flex items-center justify-center gap-1.5 py-3 border-b-2 transition-colors",
              activeTab === "engineer"
                ? "border-blue-600 text-blue-700 bg-white font-semibold"
                : "border-transparent hover:text-zinc-900"
            )}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>On-Site Engineer</span>
          </button>
          <button
            onClick={() => { setActiveTab("whatsapp"); setSubmitted(false); }}
            className={cn(
              "flex items-center justify-center gap-1.5 py-3 border-b-2 transition-colors",
              activeTab === "whatsapp"
                ? "border-blue-600 text-blue-700 bg-white font-semibold"
                : "border-transparent hover:text-zinc-900"
            )}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp / Call</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-semibold text-zinc-900">Request Dispatched to Ops Team</h4>
              <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                Our support lead will call you at <span className="font-mono font-medium text-zinc-900">{formData.contactPhone || "+88017XXXXXXXX"}</span> within 15 minutes to coordinate your data import / visit.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-2 inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : activeTab === "data-entry" ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-3 text-blue-900">
                <p className="font-medium">Free Migration Service</p>
                <p className="text-[11px] text-blue-700 mt-0.5">
                  Have registers, paper books, or messy Excel sheets? Hand them over to our team. We format, verify, and digitize all student data for your coaching center.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Coaching / Academy Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Science Care Academy"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full h-9 rounded-md border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Contact Mobile Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="017XXXXXXXX"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    className="w-full h-9 rounded-md border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Approximate Student Count</label>
                  <select
                    value={formData.approxStudents}
                    onChange={(e) => setFormData({ ...formData, approxStudents: e.target.value })}
                    className="w-full h-9 rounded-md border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none bg-white"
                  >
                    <option value="50-200">50 - 200 Students</option>
                    <option value="200-500">200 - 500 Students</option>
                    <option value="500-1500">500 - 1,500 Students</option>
                    <option value="1500+">1,500+ Students (Multi-branch)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Location / District</label>
                  <input
                    type="text"
                    placeholder="e.g. Farmgate, Dhaka"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-9 rounded-md border border-zinc-200 px-3 text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-zinc-700 mb-1">Additional Notes / Upload Links (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Paste Google Drive / WhatsApp sheet link or special batch instructions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-md border border-zinc-200 p-2 text-xs focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-9 px-3.5 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-9 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-[0.98] shadow-sm transition-all"
                >
                  Submit Migration Request
                </button>
              </div>
            </form>
          ) : activeTab === "engineer" ? (
            <div className="space-y-4 text-xs">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-3 text-zinc-700">
                <h5 className="font-semibold text-zinc-900">Biometric & Network Engineer On-Site Setup</h5>
                <p className="text-[11px] text-zinc-500 mt-1">
                  We send hardware specialists to your coaching center to link ZKTeco fingerprint scanners, Wi-Fi networks, and USI thermal barcode printers directly into DocentBase.
                </p>
              </div>

              <div className="space-y-2 border border-zinc-200 rounded-lg p-3.5 bg-white">
                <div className="flex items-center justify-between text-zinc-900 font-medium">
                  <span>Coverage Regions</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Active Dispatch</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-600 pt-1">
                  <div>• Dhaka Metro (Mirpur, Uttara, Farmgate)</div>
                  <div>• Chattogram Metro</div>
                  <div>• Rajshahi & Bogura</div>
                  <div>• Sylhet & Khulna</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/8801700000000?text=Hi%20DocentBase,%20I%20need%20an%20on-site%20engineer%20visit%20for%20my%20coaching%20center"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Dispatch on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs text-center py-4">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">Direct Support Hotline (Bangladesh)</h4>
                <p className="text-xs text-zinc-500 mt-0.5">Available Saturday to Thursday, 9:00 AM – 10:00 PM</p>
              </div>

              <div className="border border-zinc-200 rounded-lg p-4 bg-zinc-50/50 space-y-2">
                <div className="text-base font-mono font-semibold text-zinc-950">+880 1700-000000</div>
                <div className="text-[11px] text-zinc-500">Official WhatsApp & Voice Hotline</div>
              </div>

              <div className="flex justify-center gap-3">
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-600 px-4 text-xs font-medium text-white hover:bg-emerald-700"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+8801700000000"
                  className="inline-flex h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 text-xs font-medium text-zinc-800 hover:bg-zinc-50"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Call Directly
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
