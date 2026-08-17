"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Wrench, ArrowRight, X, Sparkles } from "lucide-react";
import { HELP_ARTICLES, TROUBLESHOOTING_FLOWS } from "@/data/help-articles";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return {
        articles: HELP_ARTICLES.slice(0, 5),
        troubleshoot: TROUBLESHOOTING_FLOWS.slice(0, 3),
      };
    }

    const q = query.toLowerCase();
    const articles = HELP_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.keywords.some((k) => k.toLowerCase().includes(q)) ||
        a.categoryName.toLowerCase().includes(q)
    );

    const troubleshoot = TROUBLESHOOTING_FLOWS.filter(
      (t) =>
        t.problem.toLowerCase().includes(q) ||
        t.symptoms.some((s) => s.toLowerCase().includes(q)) ||
        t.category.toLowerCase().includes(q)
    );

    return { articles, troubleshoot };
  }, [query]);

  const totalItems = searchResults.articles.length + searchResults.troubleshoot.length;

  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-zinc-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3.5 bg-zinc-50/50">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search guides, attendance, bKash fees, join codes, error symptoms... (⌘K)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="flex-1 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-zinc-400 hover:text-zinc-600 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-zinc-100 text-xs">
          {/* Troubleshooting Section */}
          {searchResults.troubleshoot.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700 flex items-center gap-1.5">
                <Wrench className="w-3 h-3" />
                <span>Interactive Troubleshooters</span>
              </div>
              <div className="space-y-1 mt-1">
                {searchResults.troubleshoot.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleSelect(`/help/troubleshoot?id=${t.id}`)}
                    className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-left hover:bg-amber-50/60 transition-colors group"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 rounded bg-amber-100 text-amber-800 p-1">
                        <Wrench className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 group-hover:text-amber-900">
                          {t.problem}
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1">
                          {t.symptoms[0]}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] uppercase font-semibold text-zinc-400 group-hover:text-amber-700 flex items-center gap-1">
                      Solve <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {searchResults.articles.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 flex items-center gap-1.5">
                <FileText className="w-3 h-3" />
                <span>Documentation Guides ({searchResults.articles.length})</span>
              </div>
              <div className="space-y-1 mt-1">
                {searchResults.articles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => handleSelect(`/help/articles/${article.slug}`)}
                    className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-left hover:bg-blue-50/60 transition-colors group"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 rounded bg-zinc-100 text-zinc-600 p-1 group-hover:bg-blue-100 group-hover:text-blue-700">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 group-hover:text-blue-900">
                          {article.title}
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1">
                          {article.summary}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-zinc-600 group-hover:bg-blue-100 group-hover:text-blue-800">
                      {article.portal === "admin" ? "Admin" : article.portal === "student" ? "Student" : "All"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {totalItems === 0 && (
            <div className="py-12 text-center">
              <Sparkles className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-zinc-800">No matching documentation found</p>
              <p className="text-xs text-zinc-500 mt-1">
                Try searching for keywords like "attendance", "bKash", "USI", or "roles".
              </p>
            </div>
          )}
        </div>

        {/* Footer command helper */}
        <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/80 px-4 py-2.5 text-[11px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-zinc-700">Esc</kbd> to close
            </span>
            <span>
              <kbd className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-zinc-700">↵</kbd> to select
            </span>
          </div>
          <span className="font-mono text-zinc-400">DocentBase Help Index</span>
        </div>
      </div>
    </div>
  );
}
