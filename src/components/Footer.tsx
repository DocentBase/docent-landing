"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-[#fafaf9] pt-12 pb-10 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-zinc-200/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Docent Logo"
                className="w-7 h-7 rounded-md object-contain"
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

          {/* Col 2: Solutions & Features */}
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900 text-xs uppercase tracking-wider font-mono">Product</div>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li><Link href="/features" className="hover:text-zinc-900 transition">Operating System Features</Link></li>
              <li><Link href="/services" className="hover:text-zinc-900 transition">Ground Field Support</Link></li>
              <li><Link href="/coaching-software" className="hover:text-zinc-900 transition">For Coaching Academies</Link></li>
              <li><Link href="/pricing" className="hover:text-zinc-900 transition">Pricing Plans</Link></li>
              <li><Link href="/compare" className="hover:text-zinc-900 transition">DocentBase vs. Excel &amp; ERPs</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources & Guides */}
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900 text-xs uppercase tracking-wider font-mono">Resources</div>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li><Link href="/help" className="hover:text-[#1d4ed8] text-[#1d4ed8] font-medium transition">Help Center &amp; Docs (/help)</Link></li>
              <li><Link href="/help/troubleshoot" className="hover:text-zinc-900 transition">Diagnostic Troubleshooter</Link></li>
              <li><Link href="/blog" className="hover:text-zinc-900 transition">Field Blog &amp; Insights</Link></li>
              <li><Link href="/customers" className="hover:text-zinc-900 transition">Case Studies &amp; Stories</Link></li>
              <li><Link href="/security" className="hover:text-zinc-900 transition">Security &amp; Bug Bounty</Link></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem & Company */}
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900 text-xs uppercase tracking-wider font-mono">Company</div>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li><Link href="/about" className="hover:text-zinc-900 transition">About DocentBase</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-900 transition">Contact Operations Desk</Link></li>
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
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} Docent Technologies (DocentBase). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <Link href="/security" className="hover:text-zinc-600 transition">Security Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-zinc-600 transition">Support Hotline</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-zinc-600 transition">About</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
