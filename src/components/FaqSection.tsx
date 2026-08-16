"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I have to type in all my student details myself?",
      a: "No! This is Docent's #1 differentiator. We provide 'Data Entry as a Service'. You simply send us your admission slips, paper notebooks, or Excel files, and our dedicated team inputs all student names, roll numbers, photos, batches, and parent contact details into your system completely free."
    },
    {
      q: "How does the Grace Period and Parent SMS feature stop fee theft?",
      a: "Many students collect tuition cash from parents but delay or withhold paying the teacher. With Docent, you set a Grace Period (e.g. 10th-15th). The instant a payment is logged, an automated confirmation SMS hits the parent. If unpaid past the 15th, an overdue alert is dispatched. Parents are always aware, ensuring 100% fee transparency."
    },
    {
      q: "What if a student from the Morning Batch comes to the Afternoon Batch?",
      a: "Our Universal Student Identifier (USI) automatically handles this. When the student scans their fingerprint or QR code in the afternoon session, the system identifies them as an enrolled morning student, credits their daily attendance, and logs them as a Cross-Batch Guest without corrupting the afternoon roster."
    },
    {
      q: "Can I use both manual cash payments and online gateways?",
      a: "Yes. You can take cash directly or let students pay via your personal bKash/Nagad number and tap [Paid] in 1 second. Alternatively, you can enable our automated payment gateway (SSLCommerz/bKash/Nagad) where fees are collected digitally and routed straight to your bank account."
    },
    {
      q: "How does the 24/7 Physical Support and On-Site Visits work?",
      a: "If you need fingerprint readers installed, staff trained, or technical issues resolved, our local field engineers can physically visit your coaching center. We also provide instant 24/7 WhatsApp and phone support with under-2-minute response times."
    },
    {
      q: "Where do students and teachers log in?",
      a: "Teachers and center staff access their cockpit at https://admin.docentbase.com, while students and parents log in to view attendance, homework, notes, and notices at https://student.docentbase.com."
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Everything You Need to Know About Docent
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Got questions? We have answers. Contact our team anytime for a personalized demo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-2xs transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-zinc-900 hover:text-blue-600 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 animate-fadeIn">
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
