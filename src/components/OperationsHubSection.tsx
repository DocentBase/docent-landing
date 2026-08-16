"use client";

import React from "react";
import { 
  Bell, 
  Calendar, 
  FileText, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  Clock, 
  Layers,
  Sparkles,
  BarChart3
} from "lucide-react";

export function OperationsHubSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            TOTAL ACADEMIC ORCHESTRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Complete Operations Suite for the Modern Coaching Center
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            From lecture notes and topic-by-topic class routines to digital notice boards and exam rank lists — everything connects directly to the student portal.
          </p>
        </div>

        {/* 6 Feature Bento Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Notice Board */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">1. Instant Notice Board</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Broadcast urgent announcements, holiday notices, and schedule updates. Instant push notifications trigger in the student portal & parent SMS feed.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-500 font-mono">
              📢 Notice: Special Physics Problem-Solving Session on Friday 9:00 AM.
            </div>
          </div>

          {/* Card 2: Topic-Level Class Routines */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">2. Routines with Specific Topics</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Never just say "Monday Class". Specify exact chapters and sub-topics: <em>Electromagnetism - Faradays Law & Lenz Law (Pages 120-145)</em>.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-500 font-mono">
              🗓️ Monday 4:00 PM • Topic: Organic Chemistry - Alkyl Halides
            </div>
          </div>

          {/* Card 3: Lecture Notes & PDF Hub */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">3. Notes & Formula Sheets Hub</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Upload handwritten notes, solution PDFs, and formula cheat-sheets. Students access them on <code className="text-blue-600 font-mono">student.docentbase.com</code> in 1 click.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-500 font-mono">
              📄 Chapter-04-Vector-Calculus-Handwritten.pdf (3.8 MB)
            </div>
          </div>

          {/* Card 4: Exam & Ranking Engine */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">4. Exam Scores & Batch Ranking</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Record weekly test scores, generate batch-wide merit rankings, and track individual student trajectories over a 12-month period.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-500 font-mono">
              🏆 HSC Model Test #4 • Batch Average: 78.4% • Top Score: 98%
            </div>
          </div>

          {/* Card 5: Student & Parent Profile Vault */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">5. 360° Student Information</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Universal Student Identifier (USI), blood group, guardian contact, previous school history, payment archives, and disciplinary notes in one cockpit.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-500 font-mono">
              👤 USI-1029 • Sabbir Rahman • Guardian: Dr. Rafiq (+88017...)
            </div>
          </div>

          {/* Card 6: Dual Portal Synchronization */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-900">6. Dual Live Subdomains</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Dedicated real-time endpoints: <strong className="text-zinc-900">admin.docentbase.com</strong> for teachers and <strong className="text-zinc-900">student.docentbase.com</strong> for students.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="https://admin.docentbase.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Admin Portal →
              </a>
              <span className="text-zinc-300">•</span>
              <a 
                href="https://student.docentbase.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-600 hover:underline"
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
