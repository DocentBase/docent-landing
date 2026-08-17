"use client";

import { useState } from "react";
import Link from "next/link";
import { Wrench, CheckCircle2, ArrowRight, RefreshCw, AlertCircle, Headphones, ChevronRight } from "lucide-react";
import { TROUBLESHOOTING_FLOWS, TroubleshootingFlow } from "@/data/help-articles";
import { WhiteGloveModal } from "@/components/help/support/WhiteGloveModal";
import { cn } from "@/lib/utils";

export function InteractiveTroubleshooter({
  initialFlowId,
  language = "en",
}: {
  initialFlowId?: string;
  language?: "en" | "bn";
}) {
  const [selectedFlow, setSelectedFlow] = useState<TroubleshootingFlow | null>(() => {
    if (initialFlowId) {
      return TROUBLESHOOTING_FLOWS.find((f) => f.id === initialFlowId) || null;
    }
    return null;
  });

  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const handleSelectFlow = (flow: TroubleshootingFlow) => {
    setSelectedFlow(flow);
    setActiveStep(0);
    setCompletedSteps([]);
  };

  const handleToggleStepComplete = (idx: number) => {
    if (completedSteps.includes(idx)) {
      setCompletedSteps(completedSteps.filter((i) => i !== idx));
    } else {
      setCompletedSteps([...completedSteps, idx]);
      if (idx === activeStep && activeStep < (selectedFlow?.steps.length || 0) - 1) {
        setActiveStep(activeStep + 1);
      }
    }
  };

  const handleReset = () => {
    setSelectedFlow(null);
    setActiveStep(0);
    setCompletedSteps([]);
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-xs overflow-hidden">
      {/* Troubleshooter Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/70 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-50 text-amber-700 border border-amber-200">
            <Wrench className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-900">
              {language === "en" ? "Interactive Problem Solver" : "ইন্টারেক্টিভ সমস্যা সমাধানকারী"}
            </h3>
            <p className="text-[11px] text-zinc-500">
              {language === "en"
                ? "Self-service diagnostic wizard for payment, attendance, and join codes"
                : "পেমেন্ট, উপস্থিতি ও জয়েন কোড সমস্যার দ্রুত সমাধান নির্দেশিকা"}
            </p>
          </div>
        </div>

        {selectedFlow && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-[11px] font-medium text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>{language === "en" ? "Choose Another Problem" : "অন্য সমস্যা নির্বাচন করুন"}</span>
          </button>
        )}
      </div>

      <div className="p-5">
        {!selectedFlow ? (
          /* Step 1: Select a problem */
          <div className="space-y-3">
            <div className="text-xs font-semibold text-zinc-700">
              {language === "en"
                ? "What issue are you currently experiencing?"
                : "আপনি বর্তমানে কোন সমস্যার সম্মুখীন হচ্ছেন?"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {TROUBLESHOOTING_FLOWS.map((flow) => (
                <button
                  key={flow.id}
                  onClick={() => handleSelectFlow(flow)}
                  className="flex flex-col text-left p-3.5 rounded-lg border border-zinc-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 group-hover:text-blue-600">
                      {flow.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {flow.steps.length} Steps
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-900 group-hover:text-blue-900 mt-1">
                    {language === "en" ? flow.problem : flow.problemBn}
                  </div>
                  <div className="text-[11px] text-zinc-500 line-clamp-1 mt-1">
                    {flow.symptoms[0]}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-blue-600 group-hover:text-blue-700">
                    <span>Start Diagnostic</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Step 2: Diagnostic workflow */
          <div className="space-y-6">
            {/* Problem Overview Card */}
            <div className="rounded-lg border border-amber-200 bg-amber-50/40 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-800">
                    DIAGNOSTIC: {selectedFlow.category}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-950 mt-0.5">
                    {language === "en" ? selectedFlow.problem : selectedFlow.problemBn}
                  </h4>
                </div>
                <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-mono font-semibold text-amber-800 shrink-0">
                  {completedSteps.length}/{selectedFlow.steps.length} Resolved
                </span>
              </div>

              {/* Symptoms checklist */}
              <div className="mt-3 pt-3 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-zinc-700">
                {selectedFlow.symptoms.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Step Timeline */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                Step-by-Step Resolution Path
              </div>

              <div className="space-y-3">
                {selectedFlow.steps.map((step, idx) => {
                  const isDone = completedSteps.includes(idx);
                  const isCurrent = activeStep === idx;

                  return (
                    <div
                      key={idx}
                      className={cn(
                        "rounded-lg border p-4 transition-all",
                        isDone
                          ? "border-emerald-200 bg-emerald-50/30"
                          : isCurrent
                          ? "border-blue-300 bg-white shadow-xs ring-1 ring-blue-500/20"
                          : "border-zinc-200 bg-zinc-50/50 opacity-80"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => handleToggleStepComplete(idx)}
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
                            isDone
                              ? "border-emerald-600 bg-emerald-600 text-white"
                              : "border-zinc-300 bg-white hover:border-zinc-400"
                          )}
                        >
                          {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : <span className="text-[10px] font-bold text-zinc-500">{idx + 1}</span>}
                        </button>

                        <div className="flex-1 space-y-1.5 text-xs">
                          <div className="flex items-center justify-between">
                            <h5 className={cn("font-semibold", isDone ? "text-emerald-900" : "text-zinc-900")}>
                              {step.title}
                            </h5>
                            {isDone && (
                              <span className="text-[10px] font-semibold text-emerald-700 uppercase">Completed</span>
                            )}
                          </div>
                          <p className="text-zinc-600 leading-relaxed">{step.description}</p>

                          {step.actionUrl && (
                            <div className="pt-1">
                              <Link
                                href={step.actionUrl}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700"
                              >
                                <span>{step.actionText || "Read Complete Guide"}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Escalation Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3.5 text-xs">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-zinc-500 shrink-0" />
                <span className="text-zinc-600 text-[11px]">
                  {selectedFlow.escalationTip}
                </span>
              </div>
              <button
                onClick={() => setSupportModalOpen(true)}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Escalate to Human Desk</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <WhiteGloveModal isOpen={supportModalOpen} onClose={() => setSupportModalOpen(false)} />
    </div>
  );
}
