"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Users, 
  CreditCard, 
  Fingerprint, 
  BookOpen, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled 
          ? "bg-[#fafaf9]/95 backdrop-blur-md border-b border-zinc-200/80 shadow-stitch" 
          : "bg-[#fafaf9]/80 backdrop-blur-xs border-b border-zinc-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Brand Logo & Editorial Wordmark */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Docent Logo"
              className="w-8 h-8 rounded-md object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[15px] tracking-tight text-zinc-950">DOCENT</span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                  COCKPIT
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 font-medium tracking-tight hidden sm:inline-block">Coaching Operating System</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-zinc-600">
          <a href="#fee-engine" className="hover:text-zinc-950 transition-colors">
            Fee Engine
          </a>
          <a href="#attendance" className="hover:text-zinc-950 transition-colors">
            Attendance
          </a>
          <a href="#physical-support" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5">
            <span>Ground Support</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-50 text-amber-900 border border-amber-200">ON-SITE</span>
          </a>
          <a href="#homework-reports" className="hover:text-zinc-950 transition-colors">
            Daily 10-Pt Report
          </a>
          <a href="#calculator" className="hover:text-zinc-950 transition-colors">
            ROI Calculator
          </a>
          <a href="#pricing" className="hover:text-zinc-950 transition-colors">
            Pricing
          </a>
          <a href="/help" className="hover:text-[#1d4ed8] text-[#1d4ed8] font-semibold transition-colors flex items-center gap-1">
            <span>Help &amp; Docs</span>
          </a>
        </nav>

        {/* Action Buttons & Portal Direct Links */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Student Portal Link */}
          <a 
            href="https://student.docentbase.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-8.5 items-center justify-center gap-1.5 rounded-md border border-zinc-200/90 bg-white px-3 text-xs font-medium text-zinc-800 shadow-stitch hover:bg-zinc-50 active:translate-y-px transition"
          >
            <Users className="w-3.5 h-3.5 text-zinc-500" />
            <span>Student Portal</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>

          {/* Admin / Teacher Dashboard Link */}
          <a 
            href="https://admin.docentbase.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-8.5 items-center justify-center gap-1.5 rounded-md bg-[#1d4ed8] hover:bg-[#1e40af] px-3.5 text-xs font-semibold text-white shadow-stitch active:translate-y-px transition"
          >
            <span>Teacher Cockpit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a 
            href="https://admin.docentbase.com"
            className="inline-flex h-8 items-center justify-center rounded-md bg-[#1d4ed8] px-2.5 text-xs font-semibold text-white"
          >
            Login
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 shadow-stitch-md">
          <div className="grid grid-cols-1 gap-1.5 pt-2 border-t border-zinc-100">
            <a 
              href="#fee-engine" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>Automated Fee & Grace Engine</span>
              <CreditCard className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#attendance" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>Biometric & QR Attendance</span>
              <Fingerprint className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#physical-support" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>24/7 Ground Field Support</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-50 text-amber-900 border border-amber-200">ON-SITE</span>
            </a>
            <a 
              href="#homework-reports" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>10-Point Daily Homework & SMS</span>
              <BookOpen className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              ROI Calculator
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Pricing Plans
            </a>
            <a 
              href="/help" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-semibold text-[#1d4ed8] bg-blue-50/50 hover:bg-blue-50 flex items-center justify-between"
            >
              <span>Help Center &amp; Documentation</span>
              <BookOpen className="w-4 h-4 text-[#1d4ed8]" />
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-100 space-y-2">
            <a 
              href="https://admin.docentbase.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex h-9.5 items-center justify-center gap-2 rounded-md bg-[#1d4ed8] text-xs font-semibold text-white shadow-stitch"
            >
              <span>Launch Teacher Cockpit (admin.docentbase.com)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://student.docentbase.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex h-9.5 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white text-xs font-semibold text-zinc-800 shadow-stitch"
            >
              <Users className="w-3.5 h-3.5 text-zinc-500" />
              <span>Student & Parent Portal (student.docentbase.com)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
