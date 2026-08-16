import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeeEngineSection } from "@/components/FeeEngineSection";
import { AttendanceSection } from "@/components/AttendanceSection";
import { PhysicalSupportSection } from "@/components/PhysicalSupportSection";
import { HomeworkReportSection } from "@/components/HomeworkReportSection";
import { OperationsHubSection } from "@/components/OperationsHubSection";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ComparisonSection } from "@/components/ComparisonSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { PortalsCtaSection } from "@/components/PortalsCtaSection";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <FeeEngineSection />
      <AttendanceSection />
      <PhysicalSupportSection />
      <HomeworkReportSection />
      <OperationsHubSection />
      <RoiCalculator />
      <ComparisonSection />
      <PricingSection />
      <FaqSection />
      <PortalsCtaSection />
      <Footer />
    </main>
  );
}
