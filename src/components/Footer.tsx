"use client";

import React from "react";
import { GraduationCap, ShieldCheck, Heart, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white pt-14 pb-10 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-zinc-100">
          
          {/* Col 1: Brand & Tagline (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/final_logo.jpg"
                alt="Docent Logo"
                className="w-8 h-8 rounded-lg object-contain shadow-xs"
              />
              <span className="font-bold text-base tracking-tight text-zinc-950">DOCENT</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                OS 2.4
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              The calm operating system for individual teachers, coaching centers, and educational institutions. Zero fee leakage, biometric & QR attendance, 10-point daily homework, and 24/7 physical data entry support.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted Academic Infrastructure</span>
            </div>
          </div>

          {/* Col 2: Core Solutions */}
          <div className="space-y-2.5">
            <div className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Features</div>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#fee-engine" className="hover:text-blue-600 transition">Grace Period Fee Engine</a></li>
              <li><a href="#attendance" className="hover:text-blue-600 transition">Biometric & USI Attendance</a></li>
              <li><a href="#homework-reports" className="hover:text-blue-600 transition">10-Point Daily Homework</a></li>
              <li><a href="#homework-reports" className="hover:text-blue-600 transition">Automated Parent SMS Reports</a></li>
              <li><a href="#calculator" className="hover:text-blue-600 transition">Center ROI Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Ecosystem & Subdomains */}
          <div className="space-y-2.5">
            <div className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Live Workspaces</div>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>
                <a 
                  href="https://admin.docentbase.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition flex items-center gap-1 font-semibold text-zinc-700"
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
                  className="hover:text-blue-600 transition flex items-center gap-1 font-semibold text-zinc-700"
                >
                  <span>student.docentbase.com</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://docentbase.com" 
                  className="hover:text-blue-600 transition"
                >
                  docentbase.com (Home)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: White-Glove Support */}
          <div className="space-y-2.5">
            <div className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Physical Layer</div>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><span>Data Entry as a Service</span></li>
              <li><span>On-Site Center Visits</span></li>
              <li><span>Publications & Marketing</span></li>
              <li><span>24/7 Teacher Hotline</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} Docent Technologies (DocentBase). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
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
