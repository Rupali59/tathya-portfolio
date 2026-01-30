"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Box } from "lucide-react";
import { Brain } from "lucide-react";
import { Database } from "lucide-react";
import { Layers } from "lucide-react";
import { Loader2 } from "lucide-react";
import { Shield } from "lucide-react";
import { Terminal } from "lucide-react";
import { Zap } from "lucide-react";
import { useState } from "react";
import { useTactileEvents } from "@/providers/TactileProvider";
import SystemTicket from "@/components/common/SystemTicket";

// State Machine Types
type Step = 1 | 2 | 3 | 4;

interface FormState {
  step: Step;
  companyName: string;
  primaryObjective: string | null;
  selectedModules: string[];
  isProvisioning: boolean;
  provisionProgress: number;
  logs: string[];
  isComplete: boolean;
}

const primaryObjectives = [
  "Maximize Market Reach",
  "Optimize Operations",
  "Scalable Infrastructure",
  "Data Integrity",
  "Custom Automation",
];

const modules = [
  { id: "engine", name: "Core Engine", icon: Box, spec: "High-Speed Go" },
  { id: "brain", name: "AI Insight", icon: Brain, spec: "Custom NLP" },
  { id: "vault", name: "The Vault", icon: Shield, spec: "WebAuthn Ready" },
  { id: "db", name: "Atomic DB", icon: Database, spec: "High-Availability" },
  { id: "nexus", name: "Social Nexus", icon: Layers, spec: "API Integrated" },
  { id: "turbo", name: "Turbo Mode", icon: Zap, spec: "Optimized Edge" },
];

export default function ConfigurationBay(): JSX.Element {
  const snap = useTactileEvents("snap");
  const soft = useTactileEvents("soft");
  const heavy = useTactileEvents("heavy");

  // State Machine
  const [state, setState] = useState<FormState>({
    step: 1,
    companyName: "",
    primaryObjective: null,
    selectedModules: [],
    isProvisioning: false,
    provisionProgress: 0,
    logs: [],
    isComplete: false,
  });

  const nextStep = (e?: React.PointerEvent) => {
    if (e) snap.onPointerDown(e);
    setState((prev) => ({ ...prev, step: (prev.step + 1) as Step }));
  };

  const prevStep = (e?: React.PointerEvent) => {
    if (e) soft.onPointerDown(e);
    setState((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) as Step }));
  };

  const submitForm = async () => {
    setState((prev) => ({
      ...prev,
      isProvisioning: true,
      provisionProgress: 0,
      logs: ["Initializing handshake protocol..."],
    }));

    const logSequence = [
      "Allocating Isolated Cluster...",
      "Hardwiring WebAuthn Sockets...",
      "Encrypting Data Vaults...",
      "Optimizing Go-Runtime latency...",
      "Generating Provisioning Manifest...",
      "COMPLETE",
    ];

    for (let i = 0; i <= 100; i += 2) {
      await new Promise((resolve) => setTimeout(resolve, 60)); // 3 seconds total

      if (i % 20 === 0 && i < 100) {
        const logIndex = i / 20;
        if (logSequence[logIndex]) {
          setState((prev) => ({
            ...prev,
            logs: [...prev.logs, logSequence[logIndex]],
          }));
        }
      }

      setState((prev) => ({ ...prev, provisionProgress: i }));
    }

    // Play snap sound (ticket reveal)
    snap.onPointerDown({} as React.PointerEvent);

    setState((prev) => ({
      ...prev,
      isProvisioning: false,
      isComplete: true,
      step: 4,
    }));
  };

  const toggleModule = (id: string) => {
    setState((prev) => ({
      ...prev,
      selectedModules: prev.selectedModules.includes(id)
        ? prev.selectedModules.filter((m) => m !== id)
        : [...prev.selectedModules, id],
    }));
  };

  return (
    <section
      id="request-build"
      className="section-base py-24 bg-background relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left mb-16 border-l-4 border-primary pl-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-foreground text-3xl md:text-5xl font-mono font-bold tracking-tighter uppercase mb-4">
            [ SYSTEM_CONFIGURATOR ]
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl opacity-70">
            Define your business requirements and manifest your dedicated
            Motherboard engine. Estimated provisioning time: 48-72 hours.
          </p>
        </motion.div>

        {/* Industrial Panel Wrapper */}
        <div className="relative p-[1px] bg-gradient-to-br from-primary/30 via-border to-transparent rounded-2xl overflow-hidden">
          <div className="bg-card rounded-2xl p-8 md:p-12 relative overflow-hidden border border-border shadow-xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Terminal className="w-32 h-32" />
            </div>

            <AnimatePresence mode="wait">
              {state.step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em]">
                      01_IDENTIFICATION
                    </span>
                    <input
                      type="text"
                      placeholder="ENTER_COMPANY_NAME"
                      value={state.companyName}
                      onChange={(e) =>
                        setState((p) => ({ ...p, companyName: e.target.value }))
                      }
                      className="w-full bg-transparent border-b-2 border-border py-6 text-3xl md:text-5xl font-bold text-foreground focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <button
                    disabled={!state.companyName}
                    onPointerDown={nextStep}
                    className="px-12 py-4 bg-primary text-primary-foreground font-mono text-xs tracking-widest font-bold uppercase rounded hover:bg-primary/90 transition-all disabled:opacity-20"
                  >
                    PROCEED_TO_OBJECTIVES
                  </button>
                </motion.div>
              )}

              {state.step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="space-y-6">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em]">
                      02_MISSION_PROFILE
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {primaryObjectives.map((obj) => (
                        <button
                          key={obj}
                          onPointerDown={(e) => {
                            soft.onPointerDown(e);
                            setState((p) => ({ ...p, primaryObjective: obj }));
                          }}
                          className={`text-left p-6 border transition-all duration-300 ${
                            state.primaryObjective === obj
                              ? "bg-primary/10 border-primary text-foreground"
                              : "bg-muted/40 border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          <div className="font-mono text-[10px] uppercase opacity-50 mb-2">
                            TARGET_GOAL
                          </div>
                          <div className="text-xl font-bold">{obj}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onPointerDown={prevStep}
                      className="px-8 py-4 border border-border font-mono text-xs tracking-widest uppercase"
                    >
                      BACK
                    </button>
                    <button
                      disabled={!state.primaryObjective}
                      onPointerDown={nextStep}
                      className="px-8 py-4 bg-primary text-primary-foreground font-mono text-xs tracking-widest font-bold uppercase rounded disabled:opacity-20 hover:bg-primary/90"
                    >
                      NEXT_MODULE_SELECTION
                    </button>
                  </div>
                </motion.div>
              )}

              {state.step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="space-y-6">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em]">
                      03_ENGINE_ASSEMBLY
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {modules.map((mod) => {
                        const Icon = mod.icon;
                        const isSelected = state.selectedModules.includes(
                          mod.id,
                        );
                        return (
                          <button
                            key={mod.id}
                            onPointerDown={(e) => {
                              snap.onPointerDown(e);
                              toggleModule(mod.id);
                            }}
                            className={`group relative p-6 border transition-all duration-500 overflow-hidden ${
                              isSelected
                                ? "bg-secondary/10 border-secondary text-foreground"
                                : "bg-muted/40 border-border text-muted-foreground hover:border-muted-foreground/50"
                            }`}
                          >
                            <Icon
                              className={`w-8 h-8 mb-4 ${isSelected ? "text-secondary" : "text-muted-foreground"}`}
                            />
                            <div className="font-bold text-lg mb-1">
                              {mod.name}
                            </div>
                            <div className="font-mono text-[10px] opacity-40">
                              {mod.spec}
                            </div>
                            {isSelected && (
                              <motion.div
                                layoutId="module-check"
                                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onPointerDown={prevStep}
                      className="px-8 py-4 border border-border font-mono text-xs tracking-widest uppercase"
                    >
                      BACK
                    </button>
                    <button
                      disabled={state.selectedModules.length === 0}
                      onPointerDown={(e) => {
                        heavy.onPointerDown(e);
                        submitForm();
                      }}
                      className="flex-1 px-8 py-4 bg-secondary text-secondary-foreground font-mono text-xs tracking-widest font-bold uppercase rounded hover:bg-secondary/90 transition-all disabled:opacity-20"
                    >
                      MANIFEST_SYSTEM_v5.0
                    </button>
                  </div>
                </motion.div>
              )}

              {state.step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col items-center justify-center min-h-[400px]"
                >
                  {state.isProvisioning ? (
                    <div className="w-full max-w-md space-y-6 font-mono">
                      <div className="flex items-center gap-4 text-primary">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span className="text-sm tracking-widest uppercase">
                          system_provisioning_in_progress...
                        </span>
                      </div>

                      <div className="bg-black/40 p-6 rounded-lg border border-border h-48 overflow-hidden flex flex-col justify-end">
                        {state.logs.map((log, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xs text-green-500/80 mb-1"
                          >
                            &gt; {log}
                          </motion.div>
                        ))}
                      </div>

                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: "0%" }}
                          animate={{ width: `${state.provisionProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <SystemTicket
                        companyName={state.companyName}
                        modules={state.selectedModules.map(
                          (id) => modules.find((m) => m.id === id)?.name || id,
                        )}
                        provisionId={`TX-${Math.floor(Math.random() * 10000)}-${new Date().getFullYear()}`}
                        onDownload={() => {
                          // Mock download
                          window.print();
                        }}
                      />

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center mt-8"
                      >
                        <button
                          onClick={() =>
                            setState((p) => ({
                              ...p,
                              step: 1,
                              logs: [],
                              selectedModules: [],
                              companyName: "",
                              primaryObjective: null,
                            }))
                          }
                          className="text-muted-foreground hover:text-foreground font-mono text-[10px] tracking-widest uppercase transition-colors"
                        >
                          [ PROVISION_NEW_NODE ]
                        </button>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
