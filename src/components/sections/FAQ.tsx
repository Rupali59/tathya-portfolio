"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web infrastructure provisioning, CRM integration, data warehousing, security suites, performance optimization, and AI/ML processing modules. All services are provisioned as isolated, dedicated infrastructure on our Motherboard system.",
    },
    {
      question: "How long does workspace provisioning take?",
      answer:
        "Workspace provisioning typically takes 24-48 hours after configuration approval. Complex setups with multiple modules may take up to 5 business days. We provide real-time status updates throughout the provisioning process.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we provide comprehensive ongoing support and maintenance for all provisioned workspaces. Our support packages include 24/7 monitoring, regular security updates, performance optimization, and dedicated technical support through our Shell Interface console.",
    },
    {
      question:
        "What is the difference between standard hosting and your Motherboard infrastructure?",
      answer:
        "Our Motherboard infrastructure provides isolated sovereignty - each client gets dedicated repositories and isolated server environments. Unlike shared hosting, you have complete data autonomy, modular intelligence with Go-based microservices, and private management consoles for real-time control.",
    },
    {
      question: "Can I integrate existing systems with your infrastructure?",
      answer:
        "Absolutely. Our modular architecture supports seamless integration with existing CRM, ERP, and data systems. We provide API gateways and integration modules that connect your current infrastructure with your provisioned workspace.",
    },
    {
      question: "What security measures are in place?",
      answer:
        "We implement enterprise-grade security including advanced security modules, encrypted data transmission, isolated server environments, regular security audits, and compliance with industry standards. Each workspace is completely isolated from others for maximum security.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-base relative py-16 md:py-20 lg:py-24 mt-12 md:mt-16 lg:mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Everything you need to know about our infrastructure
          </p>
        </motion.div>

        <dl className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <article className="relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 shadow-md">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 min-h-[44px] flex items-center justify-between text-left transition-all duration-300 ${
                      isOpen ? "border-b border-primary/20" : ""
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <dt className="text-foreground text-lg font-semibold pr-4">
                      {faq.question}
                    </dt>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-primary"
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <motion.dd
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 border-t border-primary/10">
                      <p className="text-muted-foreground pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.dd>
                </article>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
