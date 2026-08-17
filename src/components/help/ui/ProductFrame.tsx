import React from "react";
import { cn } from "@/lib/utils";

interface ProductFrameProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
  badge?: string;
}

export function ProductFrame({
  children,
  url = "admin.docentbase.com/overview",
  className,
  badge = "Live Production",
}: ProductFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm", className)}>
      <div className="flex h-10 items-center justify-between border-b border-zinc-200/80 bg-zinc-50/95 px-3.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <div className="ml-2 flex h-5 min-w-[200px] items-center rounded border border-zinc-200 bg-white px-2.5 text-[11px] font-mono text-zinc-500">
            https://{url}
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {badge}
        </span>
      </div>
      <div className="p-4 sm:p-6 bg-[#f8fafc]">{children}</div>
    </div>
  );
}
