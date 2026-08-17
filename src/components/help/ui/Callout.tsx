import React from "react";
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "tip" | "important" | "warning" | "note";
  children: React.ReactNode;
  className?: string;
}

export function Callout({ type = "note", children, className }: CalloutProps) {
  const configs = {
    tip: {
      border: "border-blue-200 bg-blue-50/60 text-blue-950",
      icon: <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />,
      label: "PRO TIP",
      labelColor: "text-blue-700",
    },
    important: {
      border: "border-amber-200 bg-amber-50/60 text-amber-950",
      icon: <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />,
      label: "IMPORTANT",
      labelColor: "text-amber-800",
    },
    warning: {
      border: "border-red-200 bg-red-50/60 text-red-950",
      icon: <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />,
      label: "WARNING",
      labelColor: "text-red-700",
    },
    note: {
      border: "border-zinc-200 bg-zinc-50/80 text-zinc-900",
      icon: <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />,
      label: "NOTE",
      labelColor: "text-zinc-700",
    },
  };

  const current = configs[type];

  return (
    <div className={cn("my-4 rounded-lg border p-3.5 text-xs leading-relaxed", current.border, className)}>
      <div className="flex items-start gap-2.5">
        {current.icon}
        <div className="space-y-0.5">
          <span className={cn("text-[10px] font-bold uppercase tracking-[0.14em]", current.labelColor)}>
            {current.label}
          </span>
          <div className="text-zinc-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function StatusBadge({
  status,
  portal,
}: {
  status?: "ACTIVE" | "PENDING" | "RESOLVED" | "DEPRECATED";
  portal?: "admin" | "student" | "all";
}) {
  if (portal) {
    const portalConfigs = {
      admin: {
        label: "Admin Portal",
        style: "bg-blue-50 text-blue-700 border-blue-200",
        domain: "admin.docentbase.com",
      },
      student: {
        label: "Student Portal",
        style: "bg-emerald-50 text-emerald-700 border-emerald-200",
        domain: "student.docentbase.com",
      },
      all: {
        label: "All Portals",
        style: "bg-zinc-100 text-zinc-700 border-zinc-200",
        domain: "docentbase.com",
      },
    };
    const c = portalConfigs[portal];
    return (
      <span className={cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-medium", c.style)}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        <span>{c.label}</span>
      </span>
    );
  }

  const configs = {
    ACTIVE: "border-emerald-200 text-emerald-700 bg-emerald-50/70",
    PENDING: "border-amber-200 text-amber-700 bg-amber-50/70",
    RESOLVED: "border-blue-200 text-blue-700 bg-blue-50/70",
    DEPRECATED: "border-zinc-200 text-zinc-600 bg-zinc-50/70",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase",
        configs[status || "ACTIVE"]
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status || "ACTIVE"}
    </span>
  );
}
