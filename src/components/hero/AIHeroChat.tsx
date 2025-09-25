"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

interface ChatMessage {
  id: string;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
}

interface FormData {
  projectType: string;
  timeline: string;
  budget: string;
  contact: string;
}

export default function AIHeroChat(): JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    timeline: "",
    budget: "",
    contact: "",
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const questions = [
    {
      type: "text",
      label: "What do you want to build?",
      placeholder: "e.g., A portfolio site with CRM",
      key: "projectType" as keyof FormData,
    },
    {
      type: "dropdown",
      label: "What's your timeline?",
      options: ["1-3 months", "3-6 months", "6+ months"],
      key: "timeline" as keyof FormData,
    },
    {
      type: "dropdown",
      label: "What's your budget range?",
      options: ["₹50k–₹2L", "₹2L–₹10L", "₹10L+"],
      key: "budget" as keyof FormData,
    },
    {
      type: "text",
      label: "How can we reach you?",
      placeholder: "Email or phone",
      key: "contact" as keyof FormData,
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (content: string, type: "ai" | "user") => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = async (text: string, delay: number = 1000) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, delay));
    addMessage(text, "ai");
    setIsTyping(false);
  };

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (currentStep < questions.length) {
      const currentQuestion = questions[currentStep];
      const answer = formData[currentQuestion.key];

      if (answer) {
        addMessage(answer, "user");
        setCurrentStep((prev) => prev + 1);

        // Clear the input
        setFormData((prev) => ({ ...prev, [currentQuestion.key]: "" }));

        // Show next question or final CTA
        if (currentStep + 1 < questions.length) {
          setTimeout(() => {
            simulateTyping(questions[currentStep + 1].label);
          }, 500);
        } else {
          setTimeout(() => {
            simulateTyping(
              "Perfect! Based on your requirements, I'll generate a customized plan for your project. Ready to get started?"
            );
            setShowForm(true);
          }, 500);
        }
      }
    }
  };

  const handleGeneratePlan = () => {
    addMessage("Generate Your Plan", "user");
    simulateTyping(
      "🎉 Excellent! I've generated your personalized project plan. Our team will reach out to you within 24 hours with detailed proposals and next steps. Thank you for choosing Tathya!"
    );
  };

  useEffect(() => {
    // Initial AI greeting
    const timer = setTimeout(() => {
      simulateTyping("👋 Hi, I'm Tathya AI. Let's design your next project.");
      setTimeout(() => {
        simulateTyping(questions[0].label);
      }, 1500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-2xl"
      >
        {/* Chat Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-10 h-10 bg-tiffany-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Tathya AI
            </h3>
            <p className="text-sm text-text-secondary">Online now</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-tiffany-blue text-white"
                      : "bg-white/10 text-text-primary backdrop-blur-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 bg-tiffany-blue rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-tiffany-blue rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-tiffany-blue rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Form Input */}
        {currentStep < questions.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="text-sm text-text-secondary mb-3">
              {questions[currentStep].label}
            </div>

            {questions[currentStep].type === "text" ? (
              <div className="flex gap-3">
                <input
                  type="text"
                  value={formData[questions[currentStep].key]}
                  onChange={(e) =>
                    handleInputChange(
                      questions[currentStep].key,
                      e.target.value
                    )
                  }
                  placeholder={questions[currentStep].placeholder}
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-tiffany-blue/50 focus:border-transparent"
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                />
                <motion.button
                  onClick={handleSubmit}
                  disabled={!formData[questions[currentStep].key]}
                  className="px-6 py-3 bg-tiffany-blue text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {questions[currentStep].options?.map((option) => (
                    <motion.button
                      key={option}
                      onClick={() =>
                        handleInputChange(questions[currentStep].key, option)
                      }
                      className={`px-4 py-3 rounded-lg border transition-all ${
                        formData[questions[currentStep].key] === option
                          ? "bg-tiffany-blue text-white border-transparent"
                          : "bg-white/10 backdrop-blur-sm border-white/20 text-text-primary hover:border-tiffany-blue/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
                <motion.button
                  onClick={handleSubmit}
                  disabled={!formData[questions[currentStep].key]}
                  className="w-full px-6 py-3 bg-tiffany-blue text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue
                </motion.button>
              </div>
            )}
          </motion.div>
        )}

        {/* Final CTA */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.button
              onClick={handleGeneratePlan}
              className="px-8 py-4 bg-tiffany-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Generate Your Plan
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
