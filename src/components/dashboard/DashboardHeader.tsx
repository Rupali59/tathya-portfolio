"use client";

import { ThemeToggle } from "../common/ThemeToggle";
import { Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="fixed top-0 right-0 left-64 z-40 h-16 border-b border-white/5 bg-black/50 backdrop-blur-md flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-emerald-500/80">
          SYSTEM_STATUS: ACTIVE
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <div className="h-4 w-[1px] bg-white/10" />
        <ThemeToggle />
        <div className="h-8 w-8 rounded bg-blue-900/20 border border-blue-500/30 flex items-center justify-center">
          <span className="font-mono text-xs font-bold text-blue-400">USR</span>
        </div>
      </div>
    </header>
  );
}
