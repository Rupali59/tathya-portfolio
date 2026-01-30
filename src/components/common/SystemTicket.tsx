"use client";

import { motion } from "framer-motion";
import { Download, Server, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface SystemTicketProps {
  companyName: string;
  modules: string[];
  provisionId: string;
  onDownload?: () => void;
}

export default function SystemTicket({
  companyName,
  modules,
  provisionId,
  onDownload,
}: SystemTicketProps): JSX.Element {
  const [timestamp, setTimestamp] = useState<{ date: string; time: string }>({
    date: "0000-00-00",
    time: "00:00:00",
  });

  useEffect(() => {
    const now = new Date();
    setTimestamp({
      date: now.toISOString().split("T")[0],
      time: now.toISOString().split("T")[1].split(".")[0],
    });
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full max-w-md mx-auto perspective-1000"
    >
      <div className="relative bg-[#050505] border border-blue-900/50 rounded-lg overflow-hidden shadow-2xl hardware-blade-thick">
        {/* Header Strip */}
        <div className="bg-blue-950/20 border-b border-blue-900/30 p-4 flex justify-between items-center">
          <div className="font-mono text-[10px] text-blue-400 tracking-widest uppercase">
            SYSTEM_PROVISIONING_MANIFEST // TATHYA.DEV_v2.6
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse box-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </div>

        {/* Content Body */}
        <div className="p-8 space-y-8 relative">
          {/* Holographic Seal Background */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 blur-xl pointer-events-none" />

          {/* Section I: Client ID */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest border-b border-zinc-900 pb-1 mb-2">
              I. CLIENT_IDENTIFICATION
            </div>
            <div className="font-mono text-sm text-zinc-300">
              <span className="text-blue-500">OWNER:</span> {companyName}
            </div>
            <div className="font-mono text-sm text-zinc-300">
              <span className="text-blue-500">NODE_LOC:</span> INDIA_SOUTH_01
            </div>
            <div className="font-mono text-sm text-zinc-300">
              <span className="text-blue-500">PROVISION_ID:</span> {provisionId}
            </div>
          </div>

          {/* Section II: Core Engine */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest border-b border-zinc-900 pb-1 mb-2">
              II. CORE_INFRASTRUCTURE
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <Server className="w-3 h-3 text-emerald-500" />
                CHASSIS: Motherboard_Std
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                AUTH: WebAuthn_Biometric
              </div>
            </div>
          </div>

          {/* Section III: Installed Blades */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest border-b border-zinc-900 pb-1 mb-2">
              III. INSTALLED_MODULE_BLADES
            </div>
            <div className="flex flex-wrap gap-2">
              {modules.length > 0 ? (
                modules.map((mod) => (
                  <span
                    key={mod}
                    className="px-2 py-1 bg-blue-950/30 border border-blue-900/50 rounded font-mono text-[10px] text-blue-300 uppercase"
                  >
                    {mod}
                  </span>
                ))
              ) : (
                <span className="font-mono text-[10px] text-zinc-600 italic">
                  NO_ADDITIONAL_MODULES
                </span>
              )}
            </div>
          </div>

          {/* Timestamp & Checksum */}
          <div className="pt-6 border-t border-zinc-900 flex justify-between items-end">
            <div className="space-y-1">
              <div className="font-mono text-[8px] text-zinc-600 uppercase">
                TIMESTAMP: {timestamp.date} {timestamp.time}
              </div>
              <div className="font-mono text-[8px] text-zinc-600 uppercase">
                CHECKSUM: {Math.random().toString(36).substring(2, 15)}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-instrument-serif text-2xl text-white italic">
                Tathya.dev
              </div>
              <div className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest">
                VERIFIED_INFRASTRUCTURE
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <button
          onClick={onDownload}
          className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 border-t border-zinc-800 transition-colors flex items-center justify-center gap-2 text-zinc-400 hover:text-white group"
        >
          <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="font-mono text-xs tracking-widest uppercase">
            [ DOWNLOAD_MANIFEST ]
          </span>
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider">
          This manifest confirms your ownership of a sovereign infrastructure
          node on the Motherboard network.
        </p>
      </div>
    </motion.div>
  );
}
