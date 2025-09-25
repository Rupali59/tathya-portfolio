"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatInterface(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm here to help you with your digital needs. What can I assist you with today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Thank you for your message! I'm here to help with web development, CRM integration, business strategy, and more. How can I assist you further?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const quickActions = [
    "Web Development",
    "CRM Integration",
    "Business Strategy",
    "UX Enhancement",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto relative z-10">
      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--color-border-primary)",
        }}
      >
        {/* Chat Header */}
        <div
          className="px-4 py-2 border-b flex items-center space-x-2"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--color-border-primary)",
          }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <Logo size="sm" showTagline={false} />
        </div>

        {/* Messages Container */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isUser ? "bg-blue-500 text-white" : ""
                  }`}
                  style={{
                    backgroundColor: message.isUser
                      ? "var(--btn-cta-bg)"
                      : "var(--bg-secondary)",
                    color: message.isUser
                      ? "var(--btn-cta-text)"
                      : "var(--text-primary)",
                  }}
                >
                  <p className="text-sm">{message.content}</p>
                  <p
                    className="text-xs mt-1"
                    style={{
                      color: message.isUser
                        ? "rgba(255,255,255,0.8)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div
                className="rounded-lg px-4 py-2"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div
          className="p-4 border-t"
          style={{
            borderColor: "var(--color-border-primary)",
          }}
        >
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{
                borderColor: "var(--color-border-primary)",
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
              }}
              disabled={isLoading}
            />
            <motion.button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              style={{
                backgroundColor: "var(--btn-cta-bg)",
                color: "var(--btn-cta-text)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {quickActions.map((action) => (
          <motion.button
            key={action}
            onClick={() => setInputValue(action)}
            className="px-4 py-2 border rounded-full transition-colors duration-200 text-sm font-medium"
            style={{
              backgroundColor: "var(--bg-primary)",
              color: "var(--text-primary)",
              borderColor: "var(--color-border-primary)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {action}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
