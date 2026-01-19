"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ(): JSX.Element {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "We offer web infrastructure provisioning, CRM integration, data warehousing, security suites, performance optimization, and AI/ML processing modules. All services are provisioned as isolated, dedicated infrastructure on our Motherboard system.",
    },
    {
      question: "How long does workspace provisioning take?",
      answer: "Workspace provisioning typically takes 24-48 hours after configuration approval. Complex setups with multiple modules may take up to 5 business days. We provide real-time status updates throughout the provisioning process.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide comprehensive ongoing support and maintenance for all provisioned workspaces. Our support packages include 24/7 monitoring, regular security updates, performance optimization, and dedicated technical support through our Shell Interface console.",
    },
    {
      question: "What is the difference between standard hosting and your Motherboard infrastructure?",
      answer: "Our Motherboard infrastructure provides isolated sovereignty - each client gets dedicated repositories and isolated server environments. Unlike shared hosting, you have complete data autonomy, modular intelligence with Go-based microservices, and private management consoles for real-time control.",
    },
    {
      question: "Can I integrate existing systems with your infrastructure?",
      answer: "Absolutely. Our modular architecture supports seamless integration with existing CRM, ERP, and data systems. We provide API gateways and integration modules that connect your current infrastructure with your provisioned workspace.",
    },
    {
      question: "What security measures are in place?",
      answer: "We implement enterprise-grade security including advanced security modules, encrypted data transmission, isolated server environments, regular security audits, and compliance with industry standards. Each workspace is completely isolated from others for maximum security.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative architect-section" style={{ backgroundColor: isLight ? '#F8F9FA' : '#000000' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
            Everything you need to know about our infrastructure
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`${
                    isLight ? 'frost-panel' : 'bg-[#121212] border border-[#0F52BA] rounded-lg'
                  } overflow-hidden transition-all duration-300`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 ${
                      isOpen && isLight ? 'frost-panel-active' : ''
                    }`}
                  >
                    <h3
                      className="text-lg font-serif font-semibold pr-4"
                      style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ${
                        isLight ? 'text-sapphire-ink' : 'text-[#0F52BA]'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-4 ${
                      isLight ? 'border-t border-silver-edge' : 'border-t border-[#0F52BA]/20'
                    }`}>
                      <p
                        className="pt-4 font-sans leading-relaxed"
                        style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
