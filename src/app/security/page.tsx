"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Shield,
  ShieldCheck,
  Lock,
  Key,
  Terminal,
  Send,
  Copy,
  Check,
  AlertTriangle,
  Award,
  CheckCircle2,
  ExternalLink,
  Mail,
  Clock,
  Sparkles,
} from "lucide-react";

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState<"in-scope" | "out-of-scope" | "severity">("in-scope");
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);

  const [reportData, setReportData] = useState({
    name: "",
    email: "",
    category: "IDOR",
    severity: "P2 - High",
    target: "admin.docentbase.com",
    title: "",
    steps: "",
    impact: "",
    requestHof: true,
    hofHandle: "",
  });

  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.1.0
Comment: DocentBase Security Vulnerability Disclosure Key

mQENBF/h65kBCADaO4J9j3K9...[DOCENTBASE-SECURITY-DISCLOSURE-PGP-KEY]...
=abcd
-----END PGP PUBLIC KEY BLOCK-----`;

  const generateMarkdown = () => {
    return `# [SECURITY REPORT] ${reportData.title || "Vulnerability Report Summary"}

**Target Asset:** ${reportData.target || "https://admin.docentbase.com"}
**Category:** ${reportData.category || "Vulnerability Finding"}
**Severity:** ${reportData.severity}
**Reporter:** ${reportData.name || "Security Researcher"} (${reportData.email || "researcher@example.com"})
**Hall of Fame Credit:** ${reportData.requestHof ? `Yes (Handle: ${reportData.hofHandle || reportData.name || "Anonymous"})` : "No (Private)"}
**Date:** ${new Date().toISOString().split("T")[0]}

---

### 1. Vulnerability Description & Steps to Reproduce
${reportData.steps || "1. Step one to reproduce...\n2. Step two..."}

### 2. Impact & Suggested Remediation
${reportData.impact || "Describe unauthorized data access, privilege escalation, or session hijacking impact."}

---
*Submitted via DocentBase Responsible Disclosure Portal (docentbase.com/security).*`;
  };

  const handleCopyMarkdown = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(generateMarkdown());
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2500);
  };

  const handleOpenEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Vulnerability Report] ${reportData.severity}: ${reportData.title || "Security Finding"}`);
    const body = encodeURIComponent(generateMarkdown());
    window.location.href = `mailto:security@docentbase.com?subject=${subject}&body=${body}`;
  };

  const handleCopyPgp = () => {
    navigator.clipboard.writeText(pgpKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-800 mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>DocentBase Trust & Responsible Disclosure</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                Responsible Vulnerability Disclosure <br />
                <span className="text-blue-600">&amp; Bug Bounty Program</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                We believe security is a collaborative effort. We invite independent researchers and ethical hackers to discover and disclose vulnerabilities under our Safe Harbor policy.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span><strong>&lt; 4h</strong> Triage SLA for Criticals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>Hall of Fame &amp; Monetary Bounties</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Safe Harbor Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scope & Program Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-stitch">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("in-scope")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "in-scope"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  In-Scope Targets
                </button>
                <button
                  onClick={() => setActiveTab("out-of-scope")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "out-of-scope"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  Out-of-Scope Rules
                </button>
                <button
                  onClick={() => setActiveTab("severity")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "severity"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  Severity &amp; Bounty Tiers
                </button>
              </div>
            </div>

            <div className="mt-6">
              {activeTab === "in-scope" && (
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-zinc-900">
                    The following production domains are eligible for bounty assessment and Hall of Fame credit:
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-zinc-200 rounded-lg">
                      <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-mono">
                        <tr>
                          <th className="p-3">Target Asset</th>
                          <th className="p-3">Type</th>
                          <th className="p-3">Eligible Vulnerabilities</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 text-zinc-700">
                        <tr>
                          <td className="p-3 font-mono font-semibold text-blue-600">*.docentbase.com</td>
                          <td className="p-3">Web Application</td>
                          <td className="p-3">Authentication bypass, IDOR, SQLi, Remote Code Execution, Privilege Escalation</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-semibold text-blue-600">admin.docentbase.com</td>
                          <td className="p-3">Teacher & Admin Cockpit</td>
                          <td className="p-3">Multi-tenant data isolation, RBAC role escalation, unauthorized student data export</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-semibold text-blue-600">student.docentbase.com</td>
                          <td className="p-3">Student & Parent Portal</td>
                          <td className="p-3">Join code brute-forcing, fee verification bypass, unauthorized scorecard disclosure</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "out-of-scope" && (
                <div className="space-y-3 text-xs text-zinc-600">
                  <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/50 text-amber-900 font-medium">
                    Please avoid the following actions. Violations void Safe Harbor protections.
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Denial of Service (DoS / DDoS) attacks that degrade infrastructure performance.</li>
                    <li>Social engineering, phishing, or physical attacks against DocentBase staff or coaching centers.</li>
                    <li>Automated scanner spam without manual PoC verification.</li>
                    <li>Accessing or deleting data belonging to real students or teachers beyond what is minimally required for PoC.</li>
                  </ul>
                </div>
              )}

              {activeTab === "severity" && (
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-4 rounded-lg border border-red-200 bg-red-50/40 space-y-1">
                    <div className="font-bold text-red-700 font-mono">P1 — CRITICAL</div>
                    <div className="font-semibold text-zinc-950">৳15,000 – ৳50,000 / $500+</div>
                    <div className="text-[11px] text-zinc-500">RCE, SQLi, Full Multi-Tenant Account Takeover. 4h SLA.</div>
                  </div>
                  <div className="p-4 rounded-lg border border-amber-200 bg-amber-50/40 space-y-1">
                    <div className="font-bold text-amber-700 font-mono">P2 — HIGH</div>
                    <div className="font-semibold text-zinc-950">৳5,000 – ৳15,000 / $150+</div>
                    <div className="text-[11px] text-zinc-500">IDOR leading to cross-student financial records, Stored XSS. 24h SLA.</div>
                  </div>
                  <div className="p-4 rounded-lg border border-blue-200 bg-blue-50/40 space-y-1">
                    <div className="font-bold text-blue-700 font-mono">P3 — MEDIUM</div>
                    <div className="font-semibold text-zinc-950">Swag &amp; Hall of Fame</div>
                    <div className="text-[11px] text-zinc-500">CSRF on sensitive state changes, join code brute forcing. 48h SLA.</div>
                  </div>
                  <div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50 space-y-1">
                    <div className="font-bold text-zinc-700 font-mono">P4 — LOW</div>
                    <div className="font-semibold text-zinc-950">Hall of Fame Credit</div>
                    <div className="text-[11px] text-zinc-500">Information disclosure, missing security headers. 72h SLA.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Interactive Report Builder */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-7 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-stitch">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-semibold text-zinc-950">
                  Interactive Vulnerability Report Builder
                </h3>
              </div>

              <form className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-zinc-700 mb-1">Your Name / Handle</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex"
                      value={reportData.name}
                      onChange={(e) => setReportData({ ...reportData, name: e.target.value })}
                      className="w-full h-9 rounded-md border border-zinc-200 px-3 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-zinc-700 mb-1">Contact Email</label>
                    <input
                      type="email"
                      placeholder="researcher@domain.com"
                      value={reportData.email}
                      onChange={(e) => setReportData({ ...reportData, email: e.target.value })}
                      className="w-full h-9 rounded-md border border-zinc-200 px-3 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-zinc-700 mb-1">Estimated Severity</label>
                    <select
                      value={reportData.severity}
                      onChange={(e) => setReportData({ ...reportData, severity: e.target.value })}
                      className="w-full h-9 rounded-md border border-zinc-200 px-3 focus:border-blue-600 focus:outline-none bg-white"
                    >
                      <option value="P1 - Critical">P1 - Critical (RCE, Auth Bypass)</option>
                      <option value="P2 - High">P2 - High (IDOR, Stored XSS)</option>
                      <option value="P3 - Medium">P3 - Medium (CSRF, Rate Limit)</option>
                      <option value="P4 - Low">P4 - Low (Info Leak)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-zinc-700 mb-1">Affected Asset</label>
                    <input
                      type="text"
                      placeholder="admin.docentbase.com"
                      value={reportData.target}
                      onChange={(e) => setReportData({ ...reportData, target: e.target.value })}
                      className="w-full h-9 rounded-md border border-zinc-200 px-3 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Summary Title</label>
                  <input
                    type="text"
                    placeholder="IDOR on Student Fee Ledger Endpoint..."
                    value={reportData.title}
                    onChange={(e) => setReportData({ ...reportData, title: e.target.value })}
                    className="w-full h-9 rounded-md border border-zinc-200 px-3 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Steps to Reproduce &amp; PoC</label>
                  <textarea
                    rows={4}
                    placeholder="1. Authenticate as Teacher\n2. Intercept GET /api/v1/fee-ledger?studentId=DOC-8102\n3. Change studentId to DOC-9901..."
                    value={reportData.steps}
                    onChange={(e) => setReportData({ ...reportData, steps: e.target.value })}
                    className="w-full rounded-md border border-zinc-200 p-2.5 font-mono text-[11px] focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reportData.requestHof}
                      onChange={(e) => setReportData({ ...reportData, requestHof: e.target.checked })}
                      className="rounded text-blue-600"
                    />
                    <span className="font-semibold text-zinc-800">List me on Security Hall of Fame</span>
                  </label>
                  {reportData.requestHof && (
                    <input
                      type="text"
                      placeholder="Twitter / GitHub @handle"
                      value={reportData.hofHandle}
                      onChange={(e) => setReportData({ ...reportData, hofHandle: e.target.value })}
                      className="h-7 w-48 rounded border border-zinc-200 px-2 text-[11px] bg-white focus:outline-none"
                    />
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleOpenEmail}
                    className="flex-1 flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] text-xs font-semibold text-white hover:bg-[#1e40af] shadow-stitch"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send to security@docentbase.com</span>
                  </button>
                  <button
                    onClick={handleCopyMarkdown}
                    className="flex h-10 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-800 hover:bg-zinc-50"
                  >
                    {copiedMd ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedMd ? "Copied" : "Copy Markdown"}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Live Markdown Preview Column */}
            <div className="lg:col-span-5 rounded-2xl border border-zinc-200 bg-zinc-950 text-white p-6 shadow-stitch flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 border-b border-zinc-800 pb-3">
                  <span className="font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Auto-Generated PoC Preview</span>
                  </span>
                  <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded font-mono">Markdown</span>
                </div>
                <pre className="font-mono text-[11px] text-zinc-300 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto">
                  {generateMarkdown()}
                </pre>
              </div>

              {/* PGP Block */}
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Key className="w-3 h-3 text-amber-400" />
                    <span>Encrypted PGP Key: 0xDOCENT88</span>
                  </span>
                  <button
                    onClick={handleCopyPgp}
                    className="text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    {copiedKey ? "Copied" : "Copy PGP Key"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hall of Fame */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-stitch">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                  SECURITY CONTRIBUTIONS
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mt-1">
                  Security Researcher Hall of Fame
                </h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">2026 Honor Roll</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {[
                { name: "Tariqul Hasan", handle: "@tariq_sec", impact: "P1 Auth Token Triage", date: "Aug 2026" },
                { name: "Saifur Rahman", handle: "@saifur_bounty", impact: "P2 IDOR Fee Ledger", date: "Jul 2026" },
                { name: "Anonymous Researcher", handle: "N/A", impact: "P3 Rate Limiting PoC", date: "Jun 2026" },
              ].map((res, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-zinc-900">{res.name}</div>
                    <div className="text-[11px] text-zinc-500 font-mono">{res.handle}</div>
                  </div>
                  <div className="text-right">
                    <span className="rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 text-[10px] font-bold">
                      {res.impact}
                    </span>
                    <div className="text-[10px] text-zinc-400 mt-1">{res.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
