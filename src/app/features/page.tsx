import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CreditCard,
  Fingerprint,
  BookOpen,
  Users,
  ShieldCheck,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Sparkles,
  BarChart3,
  Sliders,
  Send,
  Layers,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DocentBase Features — The Operating System for Coaching Centers",
  description: "Explore all features of DocentBase: Grace Period Fee Engine, Biometric & USI Attendance, 10-Point Daily Homework, Automated Parent SMS, and 24/7 Ground Field Support.",
  keywords: [
    "coaching software features",
    "tuition fee engine",
    "biometric attendance for coaching",
    "student routine management",
    "coaching management app Bangladesh",
    "SMS parent notifications",
  ],
  openGraph: {
    title: "DocentBase Operating System Features",
    description: "Complete feature suite built specifically for coaching centers, academy directors, and batch educators.",
    url: "https://docentbase.com/features",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/features",
  },
};

export default function FeaturesPage() {
  const featureList = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      tag: "FINANCIAL INFRASTRUCTURE",
      title: "Automated Grace Period Fee Engine",
      description:
        "Eliminate manual fee tracking and awkward verbal reminders. Automatic grace period countdowns, bKash/Nagad checkout, and instant digital receipts.",
      points: [
        "Automated bKash, Nagad, Rocket, and Bank transfer reconciliation",
        "Configurable grace periods (e.g. 1st to 10th of every month)",
        "Instant SMS digital receipt dispatched to guardians upon payment",
        "Student fee balance ledger visible in real-time on Student Cockpit",
      ],
      linkText: "Read Fee Engine Guide",
      linkUrl: "/help/articles/monthly-payments",
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-emerald-600" />,
      tag: "MULTI-MODAL ATTENDANCE",
      title: "3-Second Biometric & USI Barcode Attendance",
      description:
        "Clear 500+ student batches in under 4 minutes. Seamlessly links with ZKTeco fingerprint machines, thermal QR scanners, and mobile web tap.",
      points: [
        "Sub-second punch throughput with zero line congestion",
        "Instant absent alert SMS triggered directly to guardian mobile numbers",
        "Teacher 1-tap mobile fallback for power outages or field classes",
        "Monthly attendance percentage tracked automatically on student scorecards",
      ],
      linkText: "Explore Attendance Specs",
      linkUrl: "/help/articles/rapid-attendance",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      tag: "ACADEMIC EXCELLENCE",
      title: "10-Point Daily Homework & Progress Tracking",
      description:
        "Replace messy diaries with micro-evaluations. Rate homework and class performance in 90 seconds per batch, cutting dropouts by 40%.",
      points: [
        "10-Point standardized rating rubric across all subjects",
        "Weekly parent progress trend chart displayed on Student Portal",
        "Early intervention alerts when a student drops below threshold for 2 days",
        "Batch leaderboard recognition for consistent top performers",
      ],
      linkText: "Read Homework Framework",
      linkUrl: "/blog/homework-grading-10-point-system-student-retention",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      tag: "ARCHITECTURE",
      title: "Universal Student Identifier (USI) Multi-Batch Hub",
      description:
        "Manage students enrolled in multiple morning, evening, and weekend batches without duplicating accounts or messy Excel entries.",
      points: [
        "Single unique identifier (e.g. DOC-8120) across all subjects",
        "Cross-batch timetable conflict detection prevents double booking",
        "One-click batch transfers with preserved payment history",
        "Multi-branch student synchronization for expanding coaching chains",
      ],
      linkText: "USI Technical Blueprint",
      linkUrl: "/help/articles/student-enrollment",
    },
    {
      icon: <Send className="w-6 h-6 text-blue-600" />,
      tag: "COMMUNICATIONS",
      title: "BTRC-Compliant Automated Parent SMS Gateway",
      description:
        "Deliver critical notices, daily absenteeism alerts, exam marksheets, and fee reminders with 99.8% delivery rate across all Bangladesh telcos.",
      points: [
        "Official 11-character alphanumeric sender ID masking support",
        "High-priority transactional route for emergency closures and notices",
        "1-Click WhatsApp direct report card share fallback",
        "Real-time SMS credit balance tracking and low-balance warnings",
      ],
      linkText: "Telco Compliance Guide",
      linkUrl: "/blog/btrc-sms-masking-guidelines-educational-institutions",
    },
    {
      icon: <Headphones className="w-6 h-6 text-emerald-600" />,
      tag: "GROUND SUPPORT LAYER",
      title: "24/7 Human Operations & Free Data Entry",
      description:
        "Software is only as good as the data in it. Our physical operations team digitizes paper registers and dispatches engineers to your center for free.",
      points: [
        "Free 24-hour turnaround paper register to DocentBase digitization",
        "On-site hardware deployment (ZKTeco turnstiles, LAN/Wi-Fi configuration)",
        "Dedicated VIP WhatsApp hotline for teacher & admin assistance",
        "Question bank and model test exam sheet bulk printing service",
      ],
      linkText: "Request Ground Support",
      linkUrl: "/services",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Feature Architecture</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                Built exclusively for the chaotic reality of <span className="text-blue-600">coaching centers</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                Generic school ERPs fail in batch coaching academies because they don't understand multi-shift schedules, daily cash dues, and high-frequency attendance. DocentBase was engineered from the ground up for educators.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://admin.docentbase.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] px-5 text-xs font-semibold text-white shadow-stitch active:scale-[0.98] transition-all"
                >
                  <span>Launch Teacher Cockpit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 shadow-stitch transition-colors"
                >
                  <span>View Pricing Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureList.map((f, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-stitch hover:border-blue-300 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                      {f.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors">
                    {f.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                    {f.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
                    {f.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <Link
                    href={f.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{f.linkText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-semibold tracking-tight">
                Ready to experience the calm operating system?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Join 120+ leading coaching centers across Dhaka, Chittagong, and Sylhet. We will digitize your student data for free within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-6 text-xs font-semibold text-white shadow-md transition-all"
              >
                <span>Request Free Migration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
