"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-mono min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-red-900/50 bg-[#050505] p-8 rounded-lg shadow-2xl relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <AlertTriangle className="w-24 h-24 text-red-500" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="space-y-2 border-b border-red-900/30 pb-4">
              <div className="text-[10px] text-red-500 tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                SYSTEM_CRITICAL_FAILURE
              </div>
              <h1 className="text-2xl font-bold text-white">Kernel Panic</h1>
            </div>

            <div className="space-y-4">
              <p className="text-zinc-400 text-sm leading-relaxed">
                The application encountered an unrecoverable error in the root
                layout stream. The visual engine has been suspended to prevent
                data corruption.
              </p>

              <div className="p-4 bg-red-950/10 border border-red-900/30 rounded font-mono text-xs text-red-400 break-all">
                {error.digest && (
                  <span>
                    ERR_DIGEST: {error.digest}
                    <br />
                  </span>
                )}
                {error.message}
              </div>
            </div>

            <button
              onClick={() => reset()}
              className="w-full py-3 bg-red-900/20 hover:bg-red-900/30 border border-red-900/50 text-red-400 hover:text-red-300 transition-all rounded flex items-center justify-center gap-2 group"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-xs tracking-widest uppercase font-bold">
                REBOOT_SYSTEM
              </span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
