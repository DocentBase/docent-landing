import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Building,
  Users,
  Award,
  ArrowRight,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About DocentBase — The Story Behind the Coaching Operating System",
  description: "Learn about DocentBase's mission to eliminate administrative friction for educators, teachers, and coaching centers across Bangladesh.",
  keywords: [
    "about DocentBase",
    "Docent Technologies",
    "coaching software mission",
    "education management Bangladesh",
  ],
  openGraph: {
    title: "About DocentBase — Built for Educators",
    description: "Our mission: Let teachers focus 100% on teaching by automating administrative friction.",
    url: "https://docentbase.com/about",
    siteName: "DocentBase",
  },
  alternates: {
    canonical: "https://docentbase.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-24 swiss-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-4">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Our Mission &amp; Purpose</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
                We believe teachers should teach. <br />
                <span className="text-blue-600">Not manage registers and chase fees</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                DocentBase was born out of deep respect for Bangladeshi educators. We saw brilliant teachers spending 20+ hours a week dealing with paper attendance, manual bKash reconciliation, and awkward debt collection. We set out to fix it.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-stitch space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950">Ground-First Execution</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Software alone is never enough. We provide free human data entry, on-site hardware deployment, and local support dispatch across Bangladesh.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-stitch space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950">Bank-Grade Data Integrity</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Every transaction, student record, and exam result is backed by 256-bit encryption and multi-tenant isolation on Cloudflare's edge network.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-stitch space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950">Radical Simplicity</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                No 50-step ERP workflows. Mark batch attendance in 3 seconds, generate receipts with 1-click, and let the software handle the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Office & Operations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12 shadow-stitch">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                  HEADQUARTERS & OPERATIONS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">
                  Headquartered in Dhaka, serving nationwide.
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Our engineering and physical dispatch teams operate out of Dhaka and Chittagong, maintaining daily touchpoints with over 120 partner academies.
                </p>
                <div className="pt-2 flex flex-col gap-2 text-xs text-zinc-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Level 4, Science Lab / Farmgate Operations Center, Dhaka 1205</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Chawkbazar Hub, Chittagong 4000</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] px-6 text-xs font-semibold text-white shadow-stitch hover:bg-[#1e40af] transition-all"
                >
                  <span>Contact Operations Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
