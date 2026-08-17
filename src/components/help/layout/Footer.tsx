"use client";

import Link from "next/link";
import { Shield, GraduationCap, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-600 text-xs">
      {/* Top footer columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand overview */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-zinc-950 tracking-[-0.02em]">
                DOCENT<span className="text-blue-600">BASE</span>
              </span>
              <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-mono uppercase text-zinc-600">
                Help & Operations
              </span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
              The operational knowledge base and troubleshooting hub for DocentBase. Supporting high-volume coaching centers, private academies, and teacher communities across Bangladesh.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-[11px] font-medium pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>99.9% Uptime SLA • Cloudflare Edge Network</span>
            </div>
          </div>

          {/* Col 2: Admin Cockpit Guides */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-900 flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-blue-600" />
              <span>Admin Operations</span>
            </div>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <Link href="/help/articles/admin-quickstart" className="hover:text-zinc-900 transition-colors">
                  10-Min Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/help/articles/rapid-attendance" className="hover:text-zinc-900 transition-colors">
                  3s Rapid Attendance
                </Link>
              </li>
              <li>
                <Link href="/help/articles/monthly-payments" className="hover:text-zinc-900 transition-colors">
                  Grace Period Fee Engine
                </Link>
              </li>
              <li>
                <Link href="/help/articles/payment-gateways" className="hover:text-zinc-900 transition-colors">
                  bKash/Nagad Gateways
                </Link>
              </li>
              <li>
                <Link href="/help/articles/team-and-roles" className="hover:text-zinc-900 transition-colors">
                  8 RBAC Staff Roles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student & Parent Cockpit Guides */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-900 flex items-center gap-1.5">
              <GraduationCap className="w-3 h-3 text-emerald-600" />
              <span>Student & Parents</span>
            </div>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <Link href="/help/articles/join-code-guide" className="hover:text-zinc-900 transition-colors">
                  6-Digit Join Code Guide
                </Link>
              </li>
              <li>
                <Link href="/help/articles/student-portal-guide" className="hover:text-zinc-900 transition-colors">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/help/articles/student-fee-payment" className="hover:text-zinc-900 transition-colors">
                  1-Click Fee Checkout
                </Link>
              </li>
              <li>
                <Link href="/help/articles/student-attendance-check" className="hover:text-zinc-900 transition-colors">
                  Attendance History Log
                </Link>
              </li>
              <li>
                <Link href="/help/articles/student-routine-exams" className="hover:text-zinc-900 transition-colors">
                  Routines & Model Tests
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Hotlines */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-900">
              Direct Portals
            </div>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <a
                  href="https://admin.docentbase.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors font-medium text-zinc-700"
                >
                  <span>admin.docentbase.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://student.docentbase.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-600 transition-colors font-medium text-zinc-700"
                >
                  <span>student.docentbase.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/help/troubleshoot" className="hover:text-zinc-900 transition-colors">
                  Diagnostic Problem Solver
                </Link>
              </li>
              <li>
                <Link href="/help/articles/white-glove-support" className="hover:text-zinc-900 transition-colors">
                  White-Glove Support Desk
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-zinc-900 transition-colors font-medium">
                  docentbase.com (Home)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="border-t border-zinc-100 bg-zinc-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} Docent Technologies (DocentBase). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/help" className="hover:text-zinc-700 transition-colors">
              Help Center
            </Link>
            <span>•</span>
            <Link href="/help/troubleshoot" className="hover:text-zinc-700 transition-colors">
              Troubleshooter
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-zinc-700 transition-colors">
              Landing Page
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
