"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I have to type in all my student details myself?",
      a: "No. This is Docent's premier differentiator. We provide 'Data Entry as a Service'. You send us paper admission slips, notebooks, or Excel files, and our dedicated operations team inputs student names, roll numbers, photos, batches, and parent contact details into your system completely free."
    },
    {
      q: "How does the Grace Period and Parent SMS feature stop fee theft?",
      a: "Many students collect tuition cash from parents but withhold paying the teacher. With Docent, you set a Grace Period (e.g. 10th-15th). The moment payment is logged, an automated confirmation SMS hits the parent. If unpaid past the 15th, an overdue notice is dispatched. Parents stay informed, ensuring complete fee transparency."
    },
    {
      q: "What if a student from the Morning Batch comes to the Afternoon Batch?",
      a: "Our Universal Student Identifier (USI) automatically handles cross-batch attendance. When the student scans their fingerprint or QR card in the afternoon session, the system identifies them as an enrolled morning student, credits their daily attendance, and logs them without corrupting the afternoon roster."
    },
    {
      q: "Can I use both manual cash payments and online gateways?",
      a: "Yes. You can accept cash directly or let students pay via your personal bKash/Nagad and tap [Receive] in 1 second. Alternatively, you can enable our automated payment gateway (SSLCommerz/bKash) where fees are collected digitally and routed straight to your bank account."
    },
    {
      q: "How does the 24/7 Physical Support and On-Site Visits work?",
      a: "If you need fingerprint scanners installed, reception staff trained, or technical issues resolved, our local field engineers physically visit your coaching center. We also provide direct 24/7 WhatsApp and phone support with under-2-minute response times."
    },
    {
      q: "Where do students and teachers log in?",
      a: "Teachers and center staff access their cockpit at https://admin.docentbase.com, while students and parents log in to view attendance, homework, notes, and notices at https://student.docentbase.com."
    }
  ];

  return (
    <section className="py-20 bg-[#fafaf9] border-t border-zinc-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-200 bg-white text-zinc-700 shadow-stitch">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8]">
              Documentation &amp; FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about transitioning your coaching center to Docent.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-zinc-200/90 bg-white overflow-hidden shadow-stitch transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-medium text-xs sm:text-sm text-zinc-900 hover:text-[#1d4ed8] transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180 text-[#1d4ed8]" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 pt-1 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
