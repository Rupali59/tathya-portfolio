"use client";

import { useSystemStatus } from "@/hooks/useSystemStatus";
import { Activity, Globe, Shield, Copy, Zap } from "lucide-react";
import { useTactileEvents } from "@/providers/TactileProvider";

export default function DashboardPage() {
  const status = useSystemStatus();
  const { onPointerDown } = useTactileEvents("soft");

  const copyInstanceId = () => {
    // Mock copy formatted ID
    navigator.clipboard.writeText("TTH-884-29X-001");
  };

  return (
    <div className="space-y-8">
      {/* Vitals Grid */}
      <h2 className="font-mono text-xs font-bold text-muted-foreground tracking-widest pl-1">
        CORE_VITALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Widget 1: Real-time Latency */}
        <div className="hardware-blade p-6 flex flex-col justify-between h-32 group">
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] font-bold text-blue-400/70 tracking-wider">
              LATENCY
            </span>
            <Zap className="w-4 h-4 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-bold text-foreground">
              {status.latency.replace("ms", "")}
            </span>
            <span className="font-mono text-xs text-muted-foreground">ms</span>
          </div>
        </div>

        {/* Widget 2: Database Uptime */}
        <div className="hardware-blade p-6 flex flex-col justify-between h-32 group">
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] font-bold text-emerald-400/70 tracking-wider">
              DB_UPTIME
            </span>
            <Activity className="w-4 h-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="font-mono text-3xl font-bold text-foreground">
            99.99<span className="text-lg text-emerald-500/50">%</span>
          </div>
        </div>

        {/* Widget 3: Active Nodes */}
        <div className="hardware-blade p-6 flex flex-col justify-between h-32 group">
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] font-bold text-purple-400/70 tracking-wider">
              NODES_ONLINE
            </span>
            <Globe className="w-4 h-4 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="font-mono text-3xl font-bold text-foreground">
            {status.activeNodes}
          </div>
        </div>

        {/* Widget 4: Instance ID */}
        <div className="hardware-blade p-6 flex flex-col justify-between h-32 group relative">
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] font-bold text-amber-400/70 tracking-wider">
              INSTANCE_ID
            </span>
            <Shield className="w-4 h-4 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl font-bold text-foreground tracking-tight">
              TTH-***-29X
            </span>
            <button
              onClick={copyInstanceId}
              onPointerDown={onPointerDown}
              className="p-1.5 rounded hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              <Copy className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Control Panel Area (Placeholder for Blade views) */}
      <h2 className="font-mono text-xs font-bold text-muted-foreground tracking-widest pl-1 pt-4">
        ACTIVE_BLADES
      </h2>
      <div className="hardware-blade min-h-[400px] p-8 flex items-center justify-center border-dashed border-white/5 bg-transparent">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            AWAITING_BLADE_SELECTION
          </p>
        </div>
      </div>
    </div>
  );
}
