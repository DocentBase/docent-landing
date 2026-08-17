import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Headphones,
  FileSpreadsheet,
  Wrench,
  Printer,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DocentBase Ground Services — On-Site Support & Free Data Entry",
  description: "24/7 on-site physical support for coaching centers in Bangladesh. Free student register data entry, biometric turnstile installation, and question bank printing.",
  keywords: [
    "coaching data entry service",
    "biometric attendance installation Dhaka",
    "ZKTeco coaching setup",
    "coaching management physical support",
    "question bank bulk printing",
  ],
  openGraph: {
    title: "DocentBase Ground Support & Physical Operations",
    description: "The only coaching software backed by 24/7 on-site data entry and hardware engineer dispatch across Bangladesh.",
    url: "https://docentbase.com/services",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-blue-600" />,
      badge: "100% FREE OF CHARGE",
      title: "Data Entry & Register Digitization as a Service",
      description:
        "Transitioning from paper notebooks or messy Excel sheets shouldn't waste your teachers' time. Send us photos of your student ledger, and our operations team digitizes, formats, and verifies every record into DocentBase within 24 hours.",
      deliverables: [
        "Full student biographical & guardian mobile number verification",
        "Unique Student Identifier (USI) barcode generation for all batches",
        "Historical fee balance & dues carryover into the live engine",
        "Morning/Evening shift routine and teacher allocation mapping",
      ],
    },
    {
      icon: <Wrench className="w-6 h-6 text-emerald-600" />,
      badge: "ACTIVE DISPATCH",
      title: "On-Site Hardware Installation & Wi-Fi Configuration",
      description:
        "We dispatch certified hardware technicians directly to your coaching academy to set up ZKTeco biometric terminals, USB barcode scanners, thermal receipt printers, and backup power failover routers.",
      deliverables: [
        "Zero-latency LAN and Wi-Fi synchronization setup",
        "Biometric turnstile and magnetic door lock integration",
        "Backup offline tap attendance cache configuration",
        "On-site staff training on device maintenance and routine cleaning",
      ],
    },
    {
      icon: <Printer className="w-6 h-6 text-purple-600" />,
      badge: "OVERNIGHT DELIVERY",
      title: "Model Test & Question Bank High-Volume Printing",
      description:
        "Preparing 500 copies of model test papers, OMR sheets, or lecture sheets during admission season? Send us your PDF draft, and our high-speed commercial print hubs deliver bound, cut, and sealed exam bundles to your center overnight.",
      deliverables: [
        "High-contrast 70 GSM & 80 GSM paper with optical OMR compatibility",
        "Confidential sealed question paper bundling per batch",
        "Batch-wise student name & roll number variable data printing",
        "Emergency same-day dispatch available across Dhaka Metro",
      ],
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-amber-600" />,
      badge: "VIP PRIORITY",
      title: "Dedicated Teacher & Admin WhatsApp Hotline",
      description:
        "No robotic ticket queues. When a teacher or branch manager encounters a payment dispute or routine emergency, our support desk is reachable instantly via voice call or WhatsApp with a guaranteed 15-minute SLA.",
      deliverables: [
        "Saturday to Thursday, 9:00 AM – 10:00 PM live coverage",
        "Dedicated account manager assigned to your institution",
        "Remote AnyDesk troubleshooting for immediate desktop resolution",
        "Instant SMS balance top-up processing within 5 minutes",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-amber-200 bg-amber-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                <span>Ground Operations Desk</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                Software in the cloud. <br className="hidden sm:inline" />
                <span className="text-blue-600">Engineers on the ground</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                Most SaaS tools fail because educators are left alone to input thousands of student records and wire biometric terminals. DocentBase provides physical, on-site execution at every step.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] px-5 text-xs font-semibold text-white shadow-stitch transition-all"
                >
                  <span>Book On-Site Engineer Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://wa.me/8801700000000?text=Hi%20DocentBase,%20I%20need%20help%20with%20data%20entry%20for%20my%20coaching%20center"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 shadow-stitch transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Dispatch (+880)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-stitch"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-100">
                      {s.icon}
                    </div>
                    <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-mono font-semibold text-zinc-700">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-semibold text-zinc-950">
                    {s.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="mt-6 border-t border-zinc-100 pt-5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-3">
                      KEY DELIVERABLES:
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-700">
                      {s.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10 shadow-stitch">
            <div className="flex items-center gap-2 text-zinc-900 font-semibold mb-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Physical Field Coverage Across Bangladesh</span>
            </div>
            <p className="text-xs text-zinc-500 max-w-xl">
              Our hardware specialists and operations partners are stationed across key coaching hubs with same-day emergency dispatch.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-xs font-medium text-zinc-700">
              <div className="p-3 rounded-lg border border-zinc-100 bg-zinc-50">
                <div className="font-semibold text-zinc-900">Dhaka Metro</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Farmgate, Mirpur, Uttara, Shantinagar, Mouchak</div>
              </div>
              <div className="p-3 rounded-lg border border-zinc-100 bg-zinc-50">
                <div className="font-semibold text-zinc-900">Chittagong Metro</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Chawkbazar, GEC Circle, Agrabad</div>
              </div>
              <div className="p-3 rounded-lg border border-zinc-100 bg-zinc-50">
                <div className="font-semibold text-zinc-900">Rajshahi & Bogura</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Shaheb Bazar, Talaimari, Jaleshwari Tola</div>
              </div>
              <div className="p-3 rounded-lg border border-zinc-100 bg-zinc-50">
                <div className="font-semibold text-zinc-900">Sylhet & Khulna</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Zindabazar, Shibganj, Boyra, Moylapota</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
