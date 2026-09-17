"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Calendar,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import { companyConfig } from "@/config/company";
import BookingModal from "./BookingModal";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  actionType?: "booking" | "whatsapp" | "proposal" | "ai_demo" | "services";
  actionText?: string;
  actionUrl?: string;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "init-1",
    role: "assistant",
    content: `Hello! 👋 I'm the **Nexaviq Technologies AI Assistant**.\n\nI can answer questions about our **dedicated customer support channels**, explain our **AI Quality Platform (100% automated call auditing & zero ACW)**, or help you book a **15-minute Discovery Call** with our operations leadership.\n\nHow can I help you today?`,
    timestamp: "Just now",
  },
];

const SUGGESTED_PROMPTS = [
  { label: "⚡ AI Quality Platform", query: "How does the AI Quality Platform audit 100% of calls?" },
  { label: "💰 Pricing & Pods", query: "What are your team pricing and pod savings models?" },
  { label: "🎧 Support Channels", query: "What channels and helpdesk tools do you support?" },
  { label: "📅 Book 15-Min Call", query: "I would like to schedule a 15-minute discovery call" },
  { label: "🛡️ Security & NDAs", query: "What security standards and NDAs do you provide?" },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const promptText = textToSend || input.trim();
    if (!promptText || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await res.json();
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.reply || "Thank you for reaching out. How else can I assist you?",
        actionType: data.actionType,
        actionText: data.actionText,
        actionUrl: data.actionUrl,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chatbot error:", err);
      const errorMessage: Message = {
        id: `bot-err-${Date.now()}`,
        role: "assistant",
        content:
          "I'm currently assisting multiple visitors. You can schedule a 15-minute Discovery Call directly with our operations leadership or connect on WhatsApp for instant assistance.",
        actionType: "booking",
        actionText: "Open Booking Calendar",
        actionUrl: companyConfig.calendlyUrl,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  const handleActionButton = (msg: Message) => {
    if (msg.actionType === "booking") {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-[95] font-sans">
        {!isOpen && (
          <div className="relative group">
            {/* Glow halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-blue-500 via-neon-cyan-400 to-cyber-purple-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse" />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-charcoal-900 border border-white/20 text-white shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-xl"
              aria-label="Open Nexaviq AI Chat Assistant"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-blue-600 to-neon-cyan-500 flex items-center justify-center text-white shadow-md shadow-brand-blue-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-cyan-400 text-charcoal-950 font-black text-[10px] rounded-full flex items-center justify-center border border-charcoal-950">
                    {unreadCount}
                  </span>
                )}
              </div>

              <div className="flex flex-col text-left pr-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Nexaviq AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan-400 animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-300 font-medium">Ask questions & book</span>
              </div>
            </button>
          </div>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="relative w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-charcoal-900/95 border border-white/15 rounded-3xl shadow-2xl shadow-blue-950/60 backdrop-blur-2xl flex flex-col overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="p-4 bg-charcoal-950/90 border-b border-white/10 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue-600 via-brand-blue-500 to-neon-cyan-500 flex items-center justify-center text-white shadow-md border border-white/15">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-white">Nexaviq AI Assistant</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold uppercase bg-brand-blue-500/30 text-neon-cyan-300 border border-brand-blue-400/40">
                      AI 2.0
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Operational Intelligence &amp; CX</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Reset conversation"
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Reset chat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close chat window"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((msg) => {
                const isBot = msg.role === "assistant";
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${isBot ? "items-start" : "items-end justify-end"}`}
                  >
                    {isBot && (
                      <div className="w-7 h-7 rounded-lg bg-brand-blue-600/30 border border-brand-blue-400/40 text-neon-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div className={`max-w-[85%] space-y-2.5 ${isBot ? "text-left" : "text-right"}`}>
                      <div
                        className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                          isBot
                            ? "bg-charcoal-950/80 border border-white/10 text-slate-200"
                            : "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white font-medium shadow-md shadow-brand-blue-500/20"
                        }`}
                      >
                        {msg.content}
                      </div>

                      {/* Attached Action Card / Interactive Button */}
                      {isBot && msg.actionType && (
                        <div className="pt-1">
                          {msg.actionType === "booking" ? (
                            <button
                              type="button"
                              onClick={() => handleActionButton(msg)}
                              className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-neon-cyan-500 text-white font-bold text-xs shadow-md shadow-brand-blue-500/25 hover:from-brand-blue-500 hover:to-neon-cyan-400 transition-all cursor-pointer group"
                            >
                              <div className="flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{msg.actionText || "Schedule Discovery Call"}</span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          ) : msg.actionType === "whatsapp" ? (
                            <a
                              href={msg.actionUrl || companyConfig.contact.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs hover:bg-emerald-500/25 transition-all"
                            >
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                                <span>{msg.actionText || "Chat on WhatsApp"}</span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <Link
                              href={msg.actionUrl || "/services"}
                              className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-charcoal-800 border border-white/10 text-neon-cyan-300 font-bold text-xs hover:bg-charcoal-750 transition-all"
                            >
                              <span>{msg.actionText || "Learn More"}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </div>
                      )}

                      <div className="text-[10px] text-slate-500 px-1">
                        {msg.timestamp}
                      </div>
                    </div>

                    {!isBot && (
                      <div className="w-7 h-7 rounded-lg bg-charcoal-800 border border-white/10 text-slate-300 flex items-center justify-center shrink-0 mb-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2.5 text-slate-400">
                  <div className="w-7 h-7 rounded-lg bg-brand-blue-600/20 border border-brand-blue-400/30 text-neon-cyan-400 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="p-3 bg-charcoal-950/80 border border-white/10 rounded-2xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Chips */}
            <div className="px-3 py-2 bg-charcoal-950/60 border-t border-white/5 overflow-x-auto no-scrollbar flex gap-1.5">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt.query)}
                  className="px-2.5 py-1 rounded-lg bg-charcoal-800/80 hover:bg-charcoal-750 border border-white/10 text-[11px] text-slate-300 hover:text-white whitespace-nowrap transition-all shrink-0 cursor-pointer"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-charcoal-950 border-t border-white/10 relative z-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question or request a quote..."
                  disabled={isLoading}
                  className="flex-1 bg-charcoal-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan-400/60 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 rounded-xl bg-gradient-to-r from-brand-blue-600 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 px-1">
                <span>⚡ Powered by Nexaviq AI</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-neon-cyan-400" />
                  <span>Enterprise Protected</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Booking Modal Linkage */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
