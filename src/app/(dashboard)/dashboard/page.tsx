"use client";

import { useSystemStatus } from "@/hooks/useSystemStatus";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { Globe } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Shield } from "lucide-react";
import { Zap } from "lucide-react";

export default function DashboardPage() {
  const status = useSystemStatus();

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-mono font-bold tracking-tight">
            SYSTEM_OVERVIEW
          </h1>
          <p className="text-muted-foreground font-mono text-sm mt-1">
            Real-time telemetry and infrastructure status
          </p>
        </div>
        <div className="flex items-center gap-3 bg-muted px-4 py-2 rounded-lg border border-border">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span className="font-mono text-xs font-bold text-foreground">
            LIVE_CONNECTION
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="UPTIME"
          value={status.uptime}
          icon={Activity}
          color="emerald"
        />
        <StatCard
          label="ACTIVE_NODES"
          value={status.activeNodes}
          icon={Globe}
          color="blue"
        />
        <StatCard
          label="LATENCY"
          value={`${status.latency}ms`}
          icon={Zap}
          color="amber"
        />
        <StatCard
          label="SECURITY"
          value={status.securityLevel}
          icon={Shield}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[400px]">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 relative overflow-hidden flex flex-col">
          <h3 className="font-mono text-sm font-bold text-muted-foreground mb-4">
            TRAFFIC_DISTRIBUTION
          </h3>
          <div className="flex-1 border border-dashed border-border rounded-lg flex items-center justify-center bg-muted/20">
            <span className="font-mono text-xs text-muted-foreground animate-pulse">
              [ RENDERING_REALTIME_DATA_STREAM... ]
            </span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-mono text-sm font-bold text-muted-foreground mb-4">
            RECENT_ALERTS
          </h3>
          <ul className="space-y-4 font-mono text-xs">
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-emerald-500">[INFO]</span>
              <span>Backup sequence completed</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-blue-500">[LOG]</span>
              <span>New node provisioning initiated</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-amber-500">[WARN]</span>
              <span>Latency spike detected in AP-South-1</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-blue-500">[LOG]</span>
              <span>System optimization routine active</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: "emerald" | "blue" | "amber" | "purple";
}) {
  const colorStyles = {
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-xl border ${colorStyles[color]} flex flex-col justify-between h-32`}
    >
      <div className="flex justify-between items-start">
        <span className="font-mono text-xs font-bold opacity-70">{label}</span>
        <Icon className="w-5 h-5 opacity-80" />
      </div>
      <div className="font-mono text-2xl font-bold tracking-tight">{value}</div>
    </motion.div>
  );
}
