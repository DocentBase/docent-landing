"use client";

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  Users, 
  CreditCard, 
  Fingerprint, 
  Sparkles, 
  BookOpen, 
  GraduationCap,
  ExternalLink,
  ChevronDown
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/final_logo.jpg"
              alt="Docent Logo"
              className="w-9 h-9 rounded-lg object-contain shadow-2xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-zinc-950">DOCENT</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60">
                  OS 2.4
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 font-medium hidden sm:inline-block">The Teacher's Operating System</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <a href="#fee-engine" className="text-[13px] font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Fee & Grace Period
          </a>
          <a href="#attendance" className="text-[13px] font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Biometric & QR Attendance
          </a>
          <a href="#physical-support" className="text-[13px] font-medium text-zinc-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <span>24/7 Physical Layer</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">GAME CHANGER</span>
          </a>
          <a href="#homework-reports" className="text-[13px] font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Homework & Reports
          </a>
          <a href="#calculator" className="text-[13px] font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            ROI Calculator
          </a>
          <a href="#pricing" className="text-[13px] font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Action Buttons & Portal Direct Links */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Student Portal Link */}
          <a 
            href="https://student.docentbase.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700 shadow-2xs hover:border-zinc-300 hover:bg-zinc-50 active:translate-y-px transition"
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
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3.5 text-xs font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:translate-y-px transition"
          >
            <span>Teacher Login</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a 
            href="https://admin.docentbase.com"
            className="inline-flex h-8 items-center justify-center rounded-lg bg-blue-600 px-2.5 text-xs font-semibold text-white"
          >
            Login
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 gap-2 pt-2 border-t border-zinc-100">
            <a 
              href="#fee-engine" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>Monthly Fee & Grace Engine</span>
              <CreditCard className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#attendance" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>Biometric & Universal ID Attendance</span>
              <Fingerprint className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#physical-support" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>24/7 Physical Layer Support</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">GAME CHANGER</span>
            </a>
            <a 
              href="#homework-reports" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 flex items-center justify-between"
            >
              <span>10-Point Homework & Parent SMS</span>
              <BookOpen className="w-4 h-4 text-zinc-400" />
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Pricing & Plans
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-100 space-y-2">
            <a 
              href="https://admin.docentbase.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 text-xs font-semibold text-white shadow-sm"
            >
              <span>Launch Teacher & Staff Cockpit (admin.docentbase.com)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://student.docentbase.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white text-xs font-semibold text-zinc-800"
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
