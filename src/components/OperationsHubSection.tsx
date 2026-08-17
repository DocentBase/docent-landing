"use client";

import React from "react";
import { 
  Bell, 
  Calendar, 
  FileText, 
  Users, 
  Layers,
  BarChart3
} from "lucide-react";

export function OperationsHubSection() {
  return (
    <section className="py-20 bg-[#fafaf9] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-white text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Academic Orchestration
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Total Academic Operations in One Cockpit
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            From lecture notes and topic-specific routines to digital notice boards and exam rank lists — everything syncs directly between teacher and student portals.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Card 1: Notice Board */}
          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">01. BROADCAST</div>
              <h3 className="font-semibold text-sm text-zinc-900">Instant Notice Board</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Publish urgent announcements, exam schedules, and holiday updates. Alerts sync to student portal and parent SMS feed instantly.
              </p>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200/80 text-[11px] text-zinc-600 font-mono">
              Notice: Special Problem-Solving Class on Friday 9:00 AM.
            </div>
          </div>

          {/* Card 2: Topic-Level Class Routines */}
          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">02. SYLLABUS</div>
              <h3 className="font-semibold text-sm text-zinc-900">Topic-Specific Class Routines</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Specify exact chapters and topics for each session so students and parents always know what will be taught in advance.
              </p>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200/80 text-[11px] text-zinc-600 font-mono">
              Monday 4:00 PM • Topic: Organic Chemistry (Alkyl Halides)
            </div>
          </div>

          {/* Card 3: Lecture Notes & PDF Hub */}
          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">03. REPOSITORY</div>
              <h3 className="font-semibold text-sm text-zinc-900">Lecture Notes &amp; Formula Sheets</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Upload handwritten notes, solution sheets, and formula banks for instant download via student.docentbase.com.
              </p>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200/80 text-[11px] text-zinc-600 font-mono">
              Physics-Chapter-04-Vector-Calculus.pdf (3.8 MB)
            </div>
          </div>

          {/* Card 4: Exam & Ranking Engine */}
          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">04. EVALUATION</div>
              <h3 className="font-semibold text-sm text-zinc-900">Exam Scores &amp; Batch Rankings</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Record weekly model test results, generate merit rank sheets, and monitor longitudinal student progress trajectories.
              </p>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200/80 text-[11px] text-zinc-600 font-mono">
              HSC Model Test #4 • Batch Avg: 78.4% • Top Score: 98%
            </div>
          </div>

          {/* Card 5: Student Profile Vault */}
          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">05. DOSSIER</div>
              <h3 className="font-semibold text-sm text-zinc-900">360° Student Information Vault</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Universal Student Identifier (USI), blood group, guardian contact, previous school history, and complete fee history in one view.
              </p>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200/80 text-[11px] text-zinc-600 font-mono">
              USI-1029 • Sabbir Rahman • Guardian: Dr. Rafiq
            </div>
          </div>

          {/* Card 6: Dual Portal Architecture */}
          <div className="rounded-lg border border-zinc-200/90 bg-white p-5 shadow-stitch space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#1d4ed8] font-mono">06. ECOSYSTEM</div>
              <h3 className="font-semibold text-sm text-zinc-900">Dual Live Subdomains</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Dedicated independent portals: admin.docentbase.com for educators and student.docentbase.com for students and parents.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-medium">
              <a 
                href="https://admin.docentbase.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1d4ed8] hover:underline"
              >
                Teacher Portal →
              </a>
              <span className="text-zinc-300">•</span>
              <a 
                href="https://student.docentbase.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1d4ed8] hover:underline"
              >
                Student Portal →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
