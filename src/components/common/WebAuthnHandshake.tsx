"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Fingerprint, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

export default function WebAuthnHandshake({
  onComplete,
}: {
  onComplete: () => void;
}): JSX.Element {
  const [status, setStatus] = useState<"idle" | "scanning" | "verified">(
    "idle",
  );

  const startHandshake = async () => {
    setStatus("scanning");
    // Simulate biometric delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("verified");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#0a0a0a] border border-zinc-800 p-12 max-w-sm w-full text-center space-y-8 rounded-2xl shadow-2xl"
      >
        <div className="relative inline-block">
          <motion.div
            animate={
              status === "scanning"
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-24 h-24 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
              status === "verified"
                ? "border-emerald-500 bg-emerald-500/10"
                : "border-blue-500 bg-blue-500/10"
            }`}
          >
            {status === "verified" ? (
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            ) : (
              <Fingerprint className="w-12 h-12 text-blue-500" />
            )}
          </motion.div>

          {status === "scanning" && (
            <motion.div
              className="absolute inset-0 border-2 border-blue-500 rounded-full"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-mono font-bold tracking-tighter uppercase text-white">
            {status === "idle" && "System_Handshake"}
            {status === "scanning" && "Verifying_Biometrics"}
            {status === "verified" && "Biometrics_Verified"}
          </h3>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
            {status === "idle" && "Ready_for_biometric_auth"}
            {status === "scanning" && "Scanning_hardware_tokens..."}
            {status === "verified" && "Encrypted_tunnel_established"}
          </p>
        </div>

        <div className="pt-4">
          {status === "idle" ? (
            <button
              onClick={startHandshake}
              className="w-full py-4 bg-blue-600 text-white font-mono text-xs tracking-[0.2em] font-bold uppercase rounded-lg hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Start_Initialize
            </button>
          ) : (
            <div className="flex justify-center gap-4 text-emerald-500">
              <ShieldCheck className="w-4 h-4" />
              <Zap className="w-4 h-4 animate-pulse" />
              <ActivityIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
