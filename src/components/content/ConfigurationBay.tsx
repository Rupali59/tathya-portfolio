"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, HardDrive, Cloud, Cpu, Database, Shield, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const primaryObjectives = [
  "Grow My Business",
  "Improve Customer Experience",
  "Scale Operations",
  "Better Data Insights",
  "Secure My Data",
];

const modules = [
  { id: "crm", name: "Customer Management", icon: HardDrive },
  { id: "erp", name: "Business Operations", icon: Cloud },
  { id: "ai", name: "Smart Automation", icon: Cpu },
  { id: "data", name: "Data Analytics", icon: Database },
  { id: "security", name: "Bank-Level Security", icon: Shield },
  { id: "devops", name: "Instant Scaling", icon: Zap },
];

export default function ConfigurationBay(): JSX.Element {
  const [step, setStep] = useState(1);
  const [companyId, setCompanyId] = useState("");
  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [provisionProgress, setProvisionProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const handleNext = () => {
    if (step === 1 && !companyId) return;
    if (step === 2 && !selectedObjective) return;
    if (step === 3 && selectedModules.length === 0) return;
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleModuleClick = (moduleId: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleSubmit = async () => {
    setIsProvisioning(true);
    setProvisionProgress(0);

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setProvisionProgress(i);
    }

    setIsProvisioning(false);
    setIsComplete(true);
  };

  return (
    <section id="configuration-bay" className="relative architect-section" style={{ backgroundColor: isLight ? '#F8F9FA' : '#000000' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
            Build Your System
          </h2>
          <p className="text-xl font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
            Customize your business solution. Request a quote tailored to your needs.
          </p>
        </motion.div>

        {/* Recessed Hardware Panel */}
        <motion.div
          className={`hardware-panel relative p-8 rounded-lg overflow-hidden ${
            isLight 
              ? 'bg-[#F8F9FA] border border-[#E2E8F0]' 
              : 'bg-[#121212] border border-[#0F52BA]'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Step 1: Define Company ID */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block mb-6">
                <span className={`font-sans text-sm font-semibold mb-3 block ${
                  isLight ? 'text-[#0747A6]' : 'text-[#0F52BA]'
                }`}>
                  Your Company Name:
                </span>
                <input
                  type="text"
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg font-sans focus:outline-none transition-all duration-300 ${
                    isLight 
                      ? 'bg-white border border-[#E2E8F0] text-[#0F172A] focus:border-[#0747A6] shadow-sm' 
                      : 'bg-[#000000] border border-[#0F52BA]/20 text-white focus:border-[#0F52BA]'
                  }`}
                  placeholder="Enter your company name"
                />
              </label>
              <motion.button
                onClick={handleNext}
                disabled={!companyId.trim()}
                className={`w-full px-6 py-3 rounded-lg text-white transition-all duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed ${
                  isLight ? 'bg-[#0747A6] hover:bg-[#0747A6]/90' : 'bg-[#0F52BA] hover:bg-[#0F52BA]/80'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue →
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Primary Objective */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block mb-6">
                <span className={`font-sans text-sm font-semibold mb-4 block ${
                  isLight ? 'text-[#0747A6]' : 'text-[#0F52BA]'
                }`}>
                  What's your main goal?
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {primaryObjectives.map((objective) => (
                    <motion.button
                      key={objective}
                      onClick={() => setSelectedObjective(objective)}
                      className={`px-6 py-3 rounded-lg border transition-all duration-300 font-mono text-sm ${
                        selectedObjective === objective
                          ? isLight
                            ? "border-[#2D8A4E] bg-[#2D8A4E]/10 text-[#2D8A4E]"
                            : "border-[#50C878] bg-[#50C878]/20 text-[#50C878]"
                          : isLight
                            ? "border-[#E2E8F0] bg-white hover:border-[#0747A6] text-[#475569] shadow-sm"
                            : "border-[#0F52BA]/20 bg-[#121212] hover:border-[#0F52BA] text-white/70"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {objective}
                    </motion.button>
                  ))}
                </div>
              </label>
              <div className="flex gap-4">
                <motion.button
                  onClick={handleBack}
                  className={`flex-1 px-6 py-3 rounded-lg transition-all duration-300 font-mono ${
                    isLight 
                      ? 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#0747A6] shadow-sm' 
                      : 'bg-[#121212] border border-[#0F52BA]/20 text-white hover:border-[#0F52BA]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  disabled={!selectedObjective}
                  className={`flex-1 px-6 py-3 rounded-lg text-white transition-all duration-300 font-sans disabled:opacity-50 disabled:cursor-not-allowed ${
                    isLight ? 'bg-[#0747A6] hover:bg-[#0747A6]/90' : 'bg-[#0F52BA] hover:bg-[#0F52BA]/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Next →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Module Selection - Snap Effect */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block mb-6">
                <span className={`font-sans text-sm font-semibold mb-4 block ${
                  isLight ? 'text-[#0747A6]' : 'text-[#0F52BA]'
                }`}>
                  Select the features you need:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {modules.map((module) => {
                    const isSelected = selectedModules.includes(module.id);
                    const IconComponent = module.icon;
                    return (
                      <motion.button
                        key={module.id}
                        onClick={() => handleModuleClick(module.id)}
                        className={`relative p-4 flex flex-col items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? isLight
                              ? "frost-panel-active border-forest-emerald bg-forest-emerald/10 text-forest-emerald"
                              : "border-[#50C878] bg-[#50C878]/20 text-[#50C878] rounded-lg"
                            : isLight
                              ? "frost-panel hover:border-sapphire-ink text-[#475569]"
                              : "border-[#0F52BA]/20 bg-[#121212] hover:border-[#0F52BA] text-white/70 rounded-lg"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                          scale: isSelected ? [1, 1.1, 1] : 1,
                          boxShadow: isSelected
                            ? isLight
                              ? "0 0 12px rgba(45, 138, 78, 0.3)"
                              : "0 0 12px rgba(80, 200, 120, 0.4)"
                            : "none",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent 
                          className={`w-8 h-8 mb-2 transition-colors duration-75 ${
                            isSelected 
                              ? (isLight ? "text-forest-emerald" : "text-[#50C878]")
                              : (isLight ? "text-sapphire-ink" : "text-[#0F52BA]")
                          }`}
                        />
                        <span className="font-sans text-xs text-center">{module.name}</span>
                        {/* LED Pearl Indicator */}
                        <div className={`absolute top-2 right-2 ${
                          isSelected 
                            ? (isLight ? "led-pearl-emerald" : "w-3 h-3 rounded-full bg-[#50C878]")
                            : (isLight ? "led-pearl-sapphire" : "w-3 h-3 rounded-full bg-[#0F52BA]")
                        }`}>
                          {isSelected && (
                            <motion.div
                              className="w-full h-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </label>
              <div className="flex gap-4">
                <motion.button
                  onClick={handleBack}
                  className={`flex-1 px-6 py-3 rounded-lg transition-all duration-300 font-mono ${
                    isLight 
                      ? 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#0747A6] shadow-sm' 
                      : 'bg-[#121212] border border-[#0F52BA]/20 text-white hover:border-[#0F52BA]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  onClick={handleSubmit}
                  disabled={isProvisioning || selectedModules.length === 0}
                  className={`flex-1 px-6 py-3 rounded-lg text-white transition-all duration-300 font-sans disabled:opacity-50 disabled:cursor-not-allowed ${
                    isLight ? 'bg-[#2D8A4E] hover:bg-[#2D8A4E]/90' : 'bg-[#50C878] hover:bg-[#50C878]/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isProvisioning ? "Processing..." : "Request Quote"}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 4: System Provisioning */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isProvisioning ? (
                <div className="text-center">
                  <Loader2 className={`w-12 h-12 animate-spin mx-auto mb-4 ${
                    isLight ? 'text-[#2D8A4E]' : 'text-[#50C878]'
                  }`} />
                  <p className="text-xl font-sans mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
                    Processing Your Request...
                  </p>
                  <div className={`w-full rounded-full h-3 mb-4 overflow-hidden border ${
                    isLight ? 'bg-[#F8F9FA] border-[#E2E8F0]' : 'bg-[#000000] border-[#0F52BA]/20'
                  }`}>
                    <motion.div
                      className={`h-full rounded-full ${
                        isLight ? 'bg-[#2D8A4E]' : 'bg-[#50C878]'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${provisionProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="text-sm font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
                    {provisionProgress}% Complete
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <CheckCircle2 className={`w-12 h-12 mx-auto mb-4 ${
                    isLight ? 'text-[#2D8A4E]' : 'text-[#50C878]'
                  }`} />
                  <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
                    Request Received!
                  </h3>
                  <p style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
                    We'll contact you within 24 hours with a custom quote for your business.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
