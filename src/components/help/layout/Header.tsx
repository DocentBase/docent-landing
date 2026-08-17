"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Globe, Headphones, ExternalLink, Shield, GraduationCap, LayoutGrid, Home } from "lucide-react";
import { CommandPalette } from "@/components/help/search/CommandPalette";
import { WhiteGloveModal } from "@/components/help/support/WhiteGloveModal";
import { cn } from "@/lib/utils";

export function Header({
  activePortal = "all",
  onSelectPortal,
  language = "en",
  onToggleLanguage,
}: {
  activePortal?: "all" | "admin" | "student";
  onSelectPortal?: (portal: "all" | "admin" | "student") => void;
  language?: "en" | "bn";
  onToggleLanguage?: () => void;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/90 bg-white/95 backdrop-blur-md">
        {/* Top utility sub-bar */}
        <div className="hidden sm:flex h-8 items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 sm:px-8 text-[11px] text-zinc-600">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-1 font-medium text-zinc-700 hover:text-blue-600 transition-colors">
              <Home className="w-3 h-3 text-zinc-500" />
              <span>docentbase.com</span>
            </Link>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 font-medium text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>DocentBase Knowledge Base & Operations Desk</span>
            </span>
            <span className="text-zinc-300">|</span>
            <a
              href="https://admin.docentbase.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <Shield className="w-3 h-3 text-blue-600" />
              <span>Admin Portal (admin.docentbase.com)</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
            <span className="text-zinc-300">|</span>
            <a
              href="https://student.docentbase.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
            >
              <GraduationCap className="w-3 h-3 text-emerald-600" />
              <span>Student Portal (student.docentbase.com)</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleLanguage && onToggleLanguage()}
              className="flex items-center gap-1 text-zinc-600 hover:text-zinc-950 font-medium transition-colors"
            >
              <Globe className="w-3 h-3 text-zinc-400" />
              <span>{language === "en" ? "English (EN)" : "বাংলা (BN)"}</span>
            </button>
            <span className="text-zinc-300">|</span>
            <button
              onClick={() => setSupportOpen(true)}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <Headphones className="w-3 h-3" />
              <span>White-Glove Hotline</span>
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-6">
            <Link href="/help" className="flex items-center gap-2.5 group">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-zinc-200 bg-white p-0.5 shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="DocentBase Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain rounded"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-[-0.03em] text-zinc-950 flex items-center gap-1.5">
                  DocentBase <span className="text-blue-600 font-bold">Help</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-zinc-400">
                  Docs & Troubleshoot
                </span>
              </div>
            </Link>

            {/* Portal Switcher Tabs */}
            {onSelectPortal && (
              <div className="hidden md:flex items-center rounded-lg border border-zinc-200 bg-zinc-100/80 p-0.5 text-xs font-medium">
                <button
                  onClick={() => onSelectPortal("all")}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-md transition-all",
                    activePortal === "all"
                      ? "bg-white text-zinc-900 shadow-2xs font-semibold"
                      : "text-zinc-600 hover:text-zinc-900"
                  )}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>All Docs</span>
                </button>
                <button
                  onClick={() => onSelectPortal("admin")}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-md transition-all",
                    activePortal === "admin"
                      ? "bg-white text-blue-700 shadow-2xs font-semibold"
                      : "text-zinc-600 hover:text-zinc-900"
                  )}
                >
                  <Shield className="w-3.5 h-3.5 text-blue-600" />
                  <span>Admin / Teachers</span>
                </button>
                <button
                  onClick={() => onSelectPortal("student")}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-md transition-all",
                    activePortal === "student"
                      ? "bg-white text-emerald-700 shadow-2xs font-semibold"
                      : "text-zinc-600 hover:text-zinc-900"
                  )}
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Students & Parents</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-9 items-center gap-2 sm:gap-4 rounded-lg border border-zinc-200 bg-zinc-50/80 px-3 text-xs text-zinc-500 hover:border-zinc-300 hover:bg-white hover:text-zinc-800 transition-all shadow-2xs"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Search docs, bKash, attendance...</span>
              <span className="sm:hidden">Search...</span>
              <kbd className="hidden sm:inline-flex items-center rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
                ⌘K
              </kbd>
            </button>

            {/* Troubleshooter CTA */}
            <Link
              href="/help/troubleshoot"
              className="hidden lg:inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-2xs"
            >
              <span>Diagnose Issue</span>
            </Link>

            {/* White Glove Support CTA */}
            <button
              onClick={() => setSupportOpen(true)}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 text-xs font-semibold text-white hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Contact Support</span>
              <span className="sm:hidden">Support</span>
            </button>
          </div>
        </div>
      </header>

      {/* Modals */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <WhiteGloveModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </>
  );
}
