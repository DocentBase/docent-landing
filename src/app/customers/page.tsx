import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building,
  Quote,
  Clock,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DocentBase Customer Stories — Real Coaching Center Transformations",
  description: "See how coaching centers across Dhaka, Chittagong, and Rajshahi eliminated fee leakage and cut roll call time by 90% with DocentBase.",
  keywords: [
    "coaching center case studies",
    "tuition fee recovery stories",
    "biometric attendance success",
    "DocentBase reviews",
  ],
  openGraph: {
    title: "DocentBase Case Studies & Academy Transformations",
    description: "Real metrics from real Bangladeshi coaching centers operating 500+ students on DocentBase.",
    url: "https://docentbase.com/customers",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/customers",
  },
};

export default function CustomersPage() {
  const caseStudies = [
    {
      institution: "Apex Science Academy",
      location: "Farmgate, Dhaka",
      students: "850 Students (HSC Batches)",
      leadTeacher: "Engr. Mahmudul Hasan",
      quote:
        "Before DocentBase, the first 10 days of every month were spent arguing over bKash transaction IDs and writing paper receipts. Now, 98% of fees are paid automatically through the student portal before the grace period ends.",
      metrics: [
        { label: "Monthly Fee Recovery", val: "+৳42,000", delta: "Zero forgotten dues" },
        { label: "Queue Clearing Time", val: "3.2 mins", delta: "For 250 students" },
        { label: "Parent Satisfaction", val: "99.4%", delta: "Daily SMS updates" },
      ],
      tags: ["Biometric Attendance", "bKash Automation", "HSC Science"],
    },
    {
      institution: "Sigma Medical Admission Care",
      location: "Chawkbazar, Chittagong",
      students: "620 Students (Admission Batches)",
      leadTeacher: "Dr. Rafiqul Anam",
      quote:
        "Running 4 model tests every week with negative marking was impossible with Excel. DocentBase calculates percentiles and sends parents SMS results within 10 minutes of exam submission.",
      metrics: [
        { label: "Result Publication Delay", val: "< 15 mins", delta: "Down from 24 hours" },
        { label: "Dropouts Prevented", val: "38%", delta: "10-pt homework alerts" },
        { label: "Admin Staff Hours Saved", val: "22 hrs/wk", delta: "Automated OMR" },
      ],
      tags: ["Model Tests", "Negative Marking", "Medical Admission"],
    },
    {
      institution: "Pinnacle Cadet & School Academy",
      location: "Uttara, Dhaka",
      students: "340 Students (Cadet & SSC)",
      leadTeacher: "Major (Retd.) S. Ahmed",
      quote:
        "The free data entry service was a lifesaver. Their team digitized our entire paper register of 340 students overnight. We launched without a single hiccup.",
      metrics: [
        { label: "Data Digitization", val: "100% Free", delta: "24h turnaround" },
        { label: "Guardian Absent Alerts", val: "Instant", delta: "Under 3 seconds" },
        { label: "Timetable Clashes", val: "0 Clashes", delta: "Multi-batch USI" },
      ],
      tags: ["Cadet Coaching", "Free Data Entry", "Parent SMS"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>Proven Customer Results</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                Loved by 120+ coaching centers. <br />
                <span className="text-blue-600">Powering 65,000+ students daily</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                Discover how leading academies across Bangladesh stopped administrative chaos, automated tuition collections, and delighted parents.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="space-y-12">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200/90 bg-white p-8 sm:p-12 shadow-stitch"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Story */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-zinc-100 px-2 py-0.5 text-[11px] font-mono font-semibold text-zinc-700">
                        {cs.location}
                      </span>
                      <span className="rounded bg-blue-50 text-blue-700 px-2 py-0.5 text-[11px] font-semibold">
                        {cs.students}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-950">
                      {cs.institution}
                    </h3>

                    <div className="relative pl-6 border-l-2 border-blue-600 my-4">
                      <Quote className="w-4 h-4 text-blue-400 absolute -left-2.5 -top-1 bg-white" />
                      <p className="text-xs sm:text-sm text-zinc-700 italic leading-relaxed">
                        "{cs.quote}"
                      </p>
                      <div className="mt-2 text-xs font-semibold text-zinc-900 not-italic">
                        — {cs.leadTeacher}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cs.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] text-zinc-600"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Metrics Grid */}
                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 bg-zinc-50 border border-zinc-200/80 rounded-xl p-5">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 bg-white rounded-lg border border-zinc-200/60 shadow-2xs">
                        <div className="text-[11px] font-semibold text-zinc-500">{m.label}</div>
                        <div className="text-xl sm:text-2xl font-extrabold text-blue-600 font-mono mt-0.5">
                          {m.val}
                        </div>
                        <div className="text-[10px] text-emerald-600 font-medium mt-0.5">
                          ✓ {m.delta}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl border border-blue-200 bg-blue-600 text-white p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-semibold">Transform your coaching academy this month</h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
                Let our team digitize your registers for free. Get up and running in under 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-xs font-semibold text-blue-900 hover:bg-blue-50 shadow-md shrink-0 transition-colors"
            >
              <span>Request Free Digitization</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
