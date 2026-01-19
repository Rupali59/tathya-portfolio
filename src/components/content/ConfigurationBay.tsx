"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, HardDrive, Cloud, Cpu, Database, Shield, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const primaryObjectives = [
  "Automate Workflows",
  "Enhance Customer Experience",
  "Scale Operations",
  "Improve Data Insights",
  "Secure Infrastructure",
];

const modules = [
  { id: "crm", name: "CRM Integration", icon: HardDrive },
  { id: "erp", name: "ERP Solutions", icon: Cloud },
  { id: "ai", name: "AI/ML Automation", icon: Cpu },
  { id: "data", name: "Data Warehousing", icon: Database },
  { id: "security", name: "Advanced Security", icon: Shield },
  { id: "devops", name: "DevOps Automation", icon: Zap },
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
  const isDark = resolvedTheme === "dark";

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
    <section className="relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Integrated Configuration Bay
          </h2>
          <p className="text-xl font-sans" style={{ color: 'var(--text-secondary)' }}>
            Provision your custom business ecosystem with our interactive onboarding interface.
          </p>
        </motion.div>

        <motion.div
          className={`relative p-8 rounded-lg overflow-hidden ${
            isDark 
              ? 'bg-[#121212] border border-[#0F52BA]' 
              : 'bg-white border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]'
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
                <span className={`font-mono text-sm mb-3 block ${
                  isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'
                }`}>
                  Define_Company_ID:
                </span>
                <input
                  type="text"
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg font-mono focus:outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-[#000000] border border-[#0F52BA]/20 text-white focus:border-[#0F52BA]' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-[#0A3D7A]'
                  }`}
                  placeholder="Enter your Company ID"
                />
              </label>
              <motion.button
                onClick={handleNext}
                disabled={!companyId.trim()}
                className={`w-full px-6 py-3 rounded-lg text-white transition-all duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark ? 'bg-[#0F52BA] hover:bg-[#0F52BA]/80' : 'bg-[#0A3D7A] hover:bg-[#0A3D7A]/80'
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
                <span className={`font-mono text-sm mb-4 block ${
                  isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'
                }`}>
                  Primary_Objective:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {primaryObjectives.map((objective) => (
                    <motion.button
                      key={objective}
                      onClick={() => setSelectedObjective(objective)}
                      className={`px-6 py-3 rounded-lg border transition-all duration-300 font-mono text-sm tactile-button ${
                        selectedObjective === objective
                          ? isDark
                            ? "border-[#50C878] bg-[#50C878]/20 text-[#50C878]"
                            : "border-[#2D8659] bg-[#2D8659]/10 text-[#2D8659]"
                          : isDark
                            ? "border-[#0F52BA]/20 bg-[#121212] hover:border-[#0F52BA] text-white/70"
                            : "border-gray-300 bg-white hover:border-[#0A3D7A] text-gray-700 shadow-sm"
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
                    isDark 
                      ? 'bg-[#121212] border border-[#0F52BA]/20 text-white hover:border-[#0F52BA]' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#0A3D7A] shadow-sm'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  disabled={!selectedObjective}
                  className={`flex-1 px-6 py-3 rounded-lg text-white transition-all duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDark ? 'bg-[#0F52BA] hover:bg-[#0F52BA]/80' : 'bg-[#0A3D7A] hover:bg-[#0A3D7A]/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Next →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Module Selection - LED Snap Effect */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block mb-6">
                <span className={`font-mono text-sm mb-4 block ${
                  isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'
                }`}>
                  Module_Selection:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {modules.map((module) => {
                    const isSelected = selectedModules.includes(module.id);
                    const IconComponent = module.icon;
                    return (
                      <motion.button
                        key={module.id}
                        onClick={() => handleModuleClick(module.id)}
                        className={`relative p-4 rounded-lg border transition-all duration-300 flex flex-col items-center justify-center tactile-button ${
                          isSelected
                            ? isDark
                              ? "border-[#50C878] bg-[#50C878]/20 text-[#50C878]"
                              : "border-[#2D8659] bg-[#2D8659]/10 text-[#2D8659]"
                            : isDark
                              ? "border-[#0F52BA]/20 bg-[#121212] hover:border-[#0F52BA] text-white/70"
                              : "border-gray-300 bg-white hover:border-[#0A3D7A] text-gray-700 shadow-sm"
                        } led-snap ${isSelected ? 'active' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                          boxShadow: isSelected
                            ? isDark
                              ? "0 0 12px rgba(80, 200, 120, 0.4)"
                              : "0 0 12px rgba(45, 134, 89, 0.3)"
                            : "none",
                        }}
                        transition={{ duration: 0.05 }}
                      >
                        <IconComponent 
                          className={`w-8 h-8 mb-2 transition-colors duration-75 ${
                            isSelected 
                              ? (isDark ? "text-[#50C878]" : "text-[#2D8659]")
                              : (isDark ? "text-[#0F52BA]" : "text-[#0A3D7A]")
                          }`}
                        />
                        <span className="font-mono text-xs text-center">{module.name}</span>
                        {isSelected && (
                          <motion.div
                            className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                              isDark ? 'bg-[#50C878]' : 'bg-[#2D8659]'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </label>
              <div className="flex gap-4">
                <motion.button
                  onClick={handleBack}
                  className={`flex-1 px-6 py-3 rounded-lg transition-all duration-300 font-mono ${
                    isDark 
                      ? 'bg-[#121212] border border-[#0F52BA]/20 text-white hover:border-[#0F52BA]' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#0A3D7A] shadow-sm'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  onClick={handleSubmit}
                  disabled={isProvisioning || selectedModules.length === 0}
                  className={`flex-1 px-6 py-3 rounded-lg text-white transition-all duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDark ? 'bg-[#50C878] hover:bg-[#50C878]/80' : 'bg-[#2D8659] hover:bg-[#2D8659]/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isProvisioning ? "Provisioning..." : "Master Switch"}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Provisioning / Completion */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isProvisioning ? (
                <div className="text-center">
                  <Loader2 className={`w-12 h-12 animate-spin mx-auto mb-4 ${
                    isDark ? 'text-[#50C878]' : 'text-[#2D8659]'
                  }`} />
                  <p className="text-xl font-mono mb-4" style={{ color: 'var(--text-primary)' }}>
                    Provisioning Workspace...
                  </p>
                  <div className={`w-full rounded-full h-3 mb-4 overflow-hidden border ${
                    isDark ? 'bg-[#000000] border-[#0F52BA]/20' : 'bg-gray-100 border-gray-300'
                  }`}>
                    <motion.div
                      className={`h-full rounded-full ${
                        isDark ? 'bg-[#50C878]' : 'bg-[#2D8659]'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${provisionProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
                    {provisionProgress}% Complete
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <CheckCircle2 className={`w-12 h-12 mx-auto mb-4 ${
                    isDark ? 'text-[#50C878]' : 'text-[#2D8659]'
                  }`} />
                  <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Workspace Provisioned!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Your custom business ecosystem is ready.
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
