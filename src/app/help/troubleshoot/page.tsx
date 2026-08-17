"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Wrench, Headphones } from "lucide-react";
import { Header } from "@/components/help/layout/Header";
import { Footer } from "@/components/help/layout/Footer";
import { InteractiveTroubleshooter } from "@/components/help/troubleshoot/InteractiveTroubleshooter";
import { WhiteGloveModal } from "@/components/help/support/WhiteGloveModal";
import { useState } from "react";

function TroubleshootContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") || undefined;
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-zinc-900 font-sans">
      <Header />

      <main className="flex-1">
        {/* Sub Header Bar */}
        <div className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Link href="/help" className="hover:text-zinc-900 transition-colors flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Help Center</span>
                </Link>
                <span>/</span>
                <span className="text-zinc-900 font-semibold">Self-Service Diagnostic Center</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSupportOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Talk to an Engineer</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-10">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-800 mb-2">
              <Wrench className="w-3 h-3 text-amber-600" />
              <span>Interactive Diagnostic Engine</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-zinc-950">
              Troubleshoot Coaching & Student Operations
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Step-by-step diagnostic workflows designed to resolve payment mismatches, biometric attendance lags, join code errors, and SMS delivery blocks in minutes.
            </p>
          </div>

          <div className="max-w-4xl">
            <InteractiveTroubleshooter initialFlowId={initialId} />
          </div>
        </div>
      </main>

      <Footer />
      <WhiteGloveModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </div>
  );
}

export default function TroubleshootPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <TroubleshootContent />
    </Suspense>
  );
}
