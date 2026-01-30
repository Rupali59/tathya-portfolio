"use client";

import {
  ArrowUpIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  CogIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PaperClipIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ConversationData {
  service: string;
  responses: string[];
  contact: string;
}

interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: string;
  type: string;
}

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: Date;
}

export default function AIHeroChat(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [conversationData, setConversationData] = useState<ConversationData>({
    service: "",
    responses: [],
    contact: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showServiceTags, setShowServiceTags] = useState(true);
  const [selectedService, setSelectedService] = useState<
    (typeof serviceTags)[number] | null
  >(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [_showFileUpload, setShowFileUpload] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const serviceTags = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites & web applications",
      icon: ComputerDesktopIcon,
      conversationIntro:
        "Great! I'd love to help you with web development. Are you looking to build a new website, update an existing one, or create a custom web application?",
      conversationFlow: [
        {
          question: "What type of web project are you planning?",
          suggestions: [
            "New business website",
            "E-commerce store",
            "Web application",
            "Portfolio site",
            "Corporate website",
          ],
        },
        {
          question: "What features do you need?",
          suggestions: [
            "Contact forms",
            "User authentication",
            "Payment processing",
            "Content management",
            "Database integration",
          ],
        },
        {
          question: "What's your timeline for this project?",
          suggestions: [
            "Within 1 month",
            "2-3 months",
            "3-6 months",
            "6+ months",
            "Flexible",
          ],
        },
        {
          question: "What's your budget range?",
          suggestions: [
            "Under $5,000",
            "$5,000 - $15,000",
            "$15,000 - $30,000",
            "$30,000 - $50,000",
            "Over $50,000",
          ],
        },
      ],
    },
    {
      id: "crm-integration",
      title: "CRM Integration",
      description: "Connect your website with CRM systems",
      icon: CogIcon,
      conversationIntro:
        "Excellent choice! CRM integration can really streamline your business processes. Which CRM system are you currently using or planning to use?",
      conversationFlow: [
        {
          question: "Which CRM platform do you use?",
          suggestions: [
            "Salesforce",
            "HubSpot",
            "Pipedrive",
            "Custom CRM",
            "Not sure yet",
          ],
        },
        {
          question: "What data do you want to sync?",
          suggestions: [
            "Lead information",
            "Customer data",
            "Sales activities",
            "Support tickets",
            "All of the above",
          ],
        },
        {
          question: "What's your main goal with CRM integration?",
          suggestions: [
            "Automate lead capture",
            "Improve customer experience",
            "Streamline sales process",
            "Better reporting",
            "Data centralization",
          ],
        },
        {
          question: "When do you need this integration completed?",
          suggestions: [
            "ASAP",
            "Within 1 month",
            "2-3 months",
            "3-6 months",
            "Flexible timeline",
          ],
        },
      ],
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Improve search rankings & traffic",
      icon: SparklesIcon,
      conversationIntro:
        "Perfect! SEO optimization is crucial for online success. What's your current website's main challenge with search visibility?",
      conversationFlow: [
        {
          question: "What's your main SEO challenge?",
          suggestions: [
            "Low search rankings",
            "Poor organic traffic",
            "Technical SEO issues",
            "Content optimization",
            "Local SEO",
          ],
        },
        {
          question: "What's your target audience?",
          suggestions: [
            "Local customers",
            "National market",
            "International",
            "B2B clients",
            "B2C consumers",
          ],
        },
        {
          question: "What keywords are you targeting?",
          suggestions: [
            "Don't know yet",
            "Have a list",
            "Need keyword research",
            "Want competitor analysis",
            "Focus on long-tail keywords",
          ],
        },
        {
          question: "What's your SEO budget range?",
          suggestions: [
            "Under $2,000/month",
            "$2,000 - $5,000/month",
            "$5,000 - $10,000/month",
            "Over $10,000/month",
            "Need consultation",
          ],
        },
      ],
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      description: "Speed up your website",
      icon: ComputerDesktopIcon,
      conversationIntro:
        "Great! Website performance directly impacts user experience and SEO rankings. What performance issues are you experiencing?",
      conversationFlow: [
        {
          question: "What performance issues are you facing?",
          suggestions: [
            "Slow loading times",
            "Poor Core Web Vitals",
            "High bounce rate",
            "Mobile performance",
            "Server issues",
          ],
        },
        {
          question: "What's your current PageSpeed score?",
          suggestions: ["Under 50", "50-70", "70-85", "85-95", "Don't know"],
        },
        {
          question: "What's your website's main purpose?",
          suggestions: [
            "E-commerce",
            "Lead generation",
            "Content/blog",
            "Portfolio",
            "Corporate",
          ],
        },
        {
          question: "What's your optimization timeline?",
          suggestions: [
            "ASAP",
            "Within 1 month",
            "2-3 months",
            "Ongoing optimization",
            "Flexible",
          ],
        },
      ],
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "iOS & Android mobile apps",
      icon: DevicePhoneMobileIcon,
      conversationIntro:
        "Fantastic! Mobile apps can significantly expand your reach. Are you looking for a native app, cross-platform solution, or Progressive Web App?",
      conversationFlow: [
        {
          question: "What type of mobile solution do you need?",
          suggestions: [
            "Native iOS app",
            "Native Android app",
            "Cross-platform app",
            "Progressive Web App",
            "Not sure",
          ],
        },
        {
          question: "What's your app's main functionality?",
          suggestions: [
            "E-commerce",
            "Social networking",
            "Productivity",
            "Entertainment",
            "Business tool",
          ],
        },
        {
          question: "Do you need backend integration?",
          suggestions: [
            "Yes, full backend",
            "API integration only",
            "Simple data sync",
            "No backend needed",
            "Need consultation",
          ],
        },
        {
          question: "What's your development timeline?",
          suggestions: [
            "3-6 months",
            "6-12 months",
            "12+ months",
            "MVP first",
            "Flexible",
          ],
        },
      ],
    },
    {
      id: "technical-consulting",
      title: "Technical Consulting",
      description: "Technology strategy & guidance",
      icon: BuildingOfficeIcon,
      conversationIntro:
        "Excellent! Technical consulting can help you make informed technology decisions. What's your main technical challenge or goal?",
      conversationFlow: [
        {
          question: "What's your main technical challenge?",
          suggestions: [
            "Technology stack selection",
            "System architecture",
            "Performance issues",
            "Security concerns",
            "Scalability planning",
          ],
        },
        {
          question: "What's your current technology situation?",
          suggestions: [
            "Starting from scratch",
            "Upgrading existing system",
            "Integrating new tools",
            "Migrating platforms",
            "Need assessment",
          ],
        },
        {
          question: "What's your business size?",
          suggestions: [
            "Startup",
            "Small business",
            "Medium business",
            "Enterprise",
            "Non-profit",
          ],
        },
        {
          question: "What's your consulting timeline?",
          suggestions: [
            "Immediate",
            "Within 1 month",
            "2-3 months",
            "Ongoing relationship",
            "Project-based",
          ],
        },
      ],
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  // Typing animation effect
  const typeText = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setTypingText("");
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 30); // Adjust speed as needed
  };

  const handleUserMessage = async (message: string) => {
    if ((!message.trim() && uploadedFiles.length === 0) || isProcessing) return;

    // Hide service tags and suggestions after first message
    setShowServiceTags(false);
    setShowSuggestions(false);

    // Create message content with file information
    let messageContent = message;
    if (uploadedFiles.length > 0) {
      const fileInfo = uploadedFiles
        .map((file) => `${file.name} (${file.size})`)
        .join(", ");
      messageContent = message
        ? `${message}\n\nAttached files: ${fileInfo}`
        : `Attached files: ${fileInfo}`;
    }

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: messageContent,
      isAI: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setUploadedFiles([]); // Clear uploaded files after sending

    // Update conversation data
    setConversationData((prev) => ({
      ...prev,
      responses: [...prev.responses, message],
    }));

    setIsProcessing(true);

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Get next question or complete conversation
    const nextQuestion = getNextQuestion();

    if (nextQuestion) {
      // Use typing animation for AI response
      typeText(nextQuestion, () => {
        // Add AI response after typing animation completes
        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          content: nextQuestion,
          isAI: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsProcessing(false);
        setCurrentStep(currentStep + 1);
      });
    } else {
      // Check if this is the contact step
      if (currentStep === selectedService?.conversationFlow.length) {
        // Complete the conversation
        setTimeout(() => {
          setIsComplete(true);
        }, 1000);
      } else {
        // Complete the conversation
        const completionMessage =
          "Perfect! I have all the information I need. I'll review your requirements and get back to you within 24 hours with a detailed proposal and next steps. How can I reach you?";

        typeText(completionMessage, () => {
          const aiMessage: Message = {
            id: `ai-${Date.now()}`,
            content: completionMessage,
            isAI: true,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, aiMessage]);
          setIsProcessing(false);
          setCurrentStep(currentStep + 1);
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUserMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUserMessage(inputValue);
    }
  };

  const handleServiceSelect = (service: (typeof serviceTags)[number]) => {
    setSelectedService(service);
    setConversationData((prev) => ({ ...prev, service: service.title }));
    setShowServiceTags(false);

    // Add AI intro message
    const aiMessage: Message = {
      id: `ai-${Date.now()}`,
      content: service.conversationIntro,
      isAI: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiMessage]);
  };

  const getNextQuestion = () => {
    if (!selectedService) return null;

    const currentFlowStep = selectedService.conversationFlow[currentStep];
    return currentFlowStep ? currentFlowStep.question : null;
  };

  const getCurrentSuggestions = () => {
    if (!selectedService) return [];
    const currentFlowStep = selectedService.conversationFlow[currentStep];
    return currentFlowStep ? currentFlowStep.suggestions : [];
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: `file-${Date.now()}-${Math.random()}`,
      file,
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    setShowFileUpload(true);
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  if (isComplete) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-success-500 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <CheckCircleIcon className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mb-4 text-text-primary"
          >
            Perfect! I&apos;ve got everything I need
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-text-secondary mb-6"
          >
            I&apos;ll review your project details and get back to you within 24
            hours with a detailed proposal and next steps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-text-secondary"
          >
            <p>Service: {conversationData.service}</p>
            {conversationData.responses.map((response, index) => (
              <p key={index}>
                Response {index + 1}: {response}
              </p>
            ))}
            {conversationData.contact && (
              <p>Contact: {conversationData.contact}</p>
            )}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* AI Tool Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-[600px] flex flex-col"
      >
        {/* Header */}
        <div className="text-center mb-8">
          {/* Animated Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <motion.h1
              className="text-3xl font-bold text-text-primary mb-2"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              What would you like to build today?
            </motion.h1>
          </motion.div>
        </div>

        {/* Service Tags */}
        {showServiceTags && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceTags.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="p-4 bg-background-secondary border border-border-primary rounded-xl hover:border-primary-400 transition-all duration-200 text-left group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-primary mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Messages Container */}
        <div className="flex-1 mb-8 space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`flex ${
                  message.isAI ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-3xl ${message.isAI ? "mr-16" : "ml-16"}`}
                >
                  <div
                    className={`px-6 py-4 rounded-2xl ${
                      message.isAI
                        ? "bg-background-secondary text-text-primary border border-border-primary"
                        : "bg-primary-500 text-white"
                    }`}
                  >
                    <p className="text-base leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Processing Indicator */}
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="max-w-3xl mr-16">
                <div className="bg-background-secondary px-6 py-4 rounded-2xl border border-border-primary">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce [animation-delay:0.1s]"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce [animation-delay:0.2s]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Typing Animation */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="max-w-3xl mr-16">
                <div className="bg-background-secondary px-6 py-4 rounded-2xl border border-border-primary">
                  <p className="text-base leading-relaxed text-text-primary">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Smart Suggestions */}
        {showSuggestions && getCurrentSuggestions().length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {getCurrentSuggestions().map(
                (suggestion: string, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSuggestionSelect(suggestion)}
                    className="px-3 py-2 bg-background-secondary border border-border-primary rounded-lg text-sm text-text-primary hover:border-primary-400 hover:bg-primary-50 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {suggestion}
                  </motion.button>
                ),
              )}
            </div>
          </motion.div>
        )}

        {/* Uploaded Files Display */}
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {uploadedFiles.map((file) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-2 bg-background-secondary border border-border-primary rounded-lg px-3 py-2 text-sm"
                >
                  <PaperClipIcon className="w-4 h-4 text-primary-500" />
                  <span className="text-text-primary truncate max-w-[150px]">
                    {file.name}
                  </span>
                  <span className="text-text-secondary text-xs">
                    {file.size}
                  </span>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="sticky bottom-0"
        >
          <form onSubmit={handleSubmit} className="relative">
            <div className="glass rounded-2xl border border-border-primary p-2">
              <div className="flex items-end space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    id="chatInput"
                    name="chatInput"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setShowSuggestions(e.target.value.length > 0);
                    }}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setShowSuggestions(inputValue.length > 0)}
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 200)
                    }
                    placeholder={
                      messages.length === 0
                        ? "What project would you like to build today?"
                        : "Continue the conversation..."
                    }
                    className="w-full px-4 py-3 bg-transparent text-text-primary placeholder-text-secondary resize-none focus:outline-none min-h-[60px] max-h-[200px] h-auto overflow-hidden"
                    disabled={isProcessing || isTyping}
                    rows={1}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
                    }}
                  />
                </div>

                {/* File Upload Button */}
                <motion.button
                  type="button"
                  onClick={triggerFileUpload}
                  disabled={isProcessing || isTyping}
                  className="p-3 bg-background-secondary hover:bg-background-primary text-text-primary border border-border-primary rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 self-end"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PaperClipIcon className="w-5 h-5" />
                </motion.button>

                {/* Send Button */}
                <motion.button
                  type="submit"
                  disabled={
                    (!inputValue.trim() && uploadedFiles.length === 0) ||
                    isProcessing ||
                    isTyping
                  }
                  className="p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 self-end"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUpIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              id="fileUpload"
              name="fileUpload"
              multiple
              accept="image/*,.pdf,.doc,.docx,.txt,.zip,.rar"
              onChange={handleFileSelect}
              className="hidden"
            />
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
