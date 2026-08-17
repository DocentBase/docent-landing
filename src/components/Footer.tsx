"use client";

import React from "react";
import { ShieldCheck, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-[#fafaf9] pt-12 pb-10 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-zinc-200/80">
          
          {/* Col 1: Brand & Tagline (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/final_logo.jpg"
                alt="Docent Logo"
                className="w-7 h-7 rounded-md object-contain border border-zinc-200/80"
              />
              <span className="font-semibold text-sm tracking-tight text-zinc-950">DOCENT</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                COCKPIT
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              The calm operating system for educators, coaching centers, and academies. Automated fee collection, multi-modal attendance, 10-point daily homework, and 24/7 on-site data entry support.
            </p>

            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>256-Bit Encrypted Academic Infrastructure</span>
            </div>
          </div>

          {/* Col 2: Core Solutions */}
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900 text-xs uppercase tracking-wider font-mono">Features</div>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li><a href="#fee-engine" className="hover:text-zinc-900 transition">Grace Period Fee Engine</a></li>
              <li><a href="#attendance" className="hover:text-zinc-900 transition">Biometric &amp; USI Attendance</a></li>
              <li><a href="#homework-reports" className="hover:text-zinc-900 transition">10-Point Daily Homework</a></li>
              <li><a href="#homework-reports" className="hover:text-zinc-900 transition">Automated Parent SMS</a></li>
              <li><a href="#calculator" className="hover:text-zinc-900 transition">Coaching ROI Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Ecosystem & Subdomains */}
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900 text-xs uppercase tracking-wider font-mono">Workspaces</div>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li>
                <a 
                  href="https://admin.docentbase.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#1d4ed8] transition flex items-center gap-1 font-medium text-zinc-700"
                >
                  <span>admin.docentbase.com</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://student.docentbase.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#1d4ed8] transition flex items-center gap-1 font-medium text-zinc-700"
                >
                  <span>student.docentbase.com</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://docentbase.com" 
                  className="hover:text-zinc-900 transition"
                >
                  docentbase.com (Home)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Ground Support */}
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900 text-xs uppercase tracking-wider font-mono">Ground Layer</div>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li><span>Data Entry as a Service</span></li>
              <li><span>On-Site Center Setup</span></li>
              <li><span>Question Bank Printing</span></li>
              <li><span>24/7 Teacher Hotline</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} Docent Technologies (DocentBase). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-zinc-600 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-600 transition">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-600 transition">Security Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
