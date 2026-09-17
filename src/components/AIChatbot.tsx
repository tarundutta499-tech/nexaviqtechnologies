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
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-300 animate-pulse" />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 shadow-xl shadow-slate-900/10 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-xl active:scale-95"
              aria-label="Open Nexaviq AI Chat Assistant"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white font-black text-[10px] rounded-full flex items-center justify-center border border-white">
                    {unreadCount}
                  </span>
                )}
              </div>

              <div className="flex flex-col text-left pr-1">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span>Nexaviq AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-500 font-medium">Ask questions &amp; book</span>
              </div>
            </button>
          </div>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="relative w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-900/15 flex flex-col overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm border border-white/40">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-slate-900">Nexaviq AI Assistant</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold uppercase bg-violet-100 text-violet-700 border border-violet-200">
                      AI 2.0
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Operational Intelligence &amp; CX</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Reset conversation"
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Reset chat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close chat window"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-[#F8FAFC]">
              {messages.map((msg) => {
                const isBot = msg.role === "assistant";
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${isBot ? "items-start" : "items-end justify-end"}`}
                  >
                    {isBot && (
                      <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div className={`max-w-[85%] space-y-2.5 ${isBot ? "text-left" : "text-right"}`}>
                      <div
                        className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                          isBot
                            ? "bg-white border border-slate-200 text-slate-800 shadow-2xs"
                            : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md shadow-blue-500/20"
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
                              className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-xs shadow-md shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 transition-all cursor-pointer group active:scale-95"
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
                              className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-all shadow-xs"
                            >
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                                <span>{msg.actionText || "Chat on WhatsApp"}</span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <Link
                              href={msg.actionUrl || "/services"}
                              className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-blue-600 font-bold text-xs hover:bg-slate-50 transition-all shadow-xs"
                            >
                              <span>{msg.actionText || "Learn More"}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </div>
                      )}

                      <div className="text-[10px] text-slate-400 px-1 font-mono">
                        {msg.timestamp}
                      </div>
                    </div>

                    {!isBot && (
                      <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mb-0.5 shadow-xs">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2.5 text-slate-500">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Chips */}
            <div className="px-3 py-2 bg-white border-t border-slate-200 overflow-x-auto no-scrollbar flex gap-1.5">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt.query)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-[11px] text-slate-700 hover:text-slate-900 whitespace-nowrap transition-all shrink-0 cursor-pointer font-medium"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-slate-200 relative z-10">
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
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-blue-500/20 cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 px-1">
                <span>⚡ Powered by Nexaviq AI</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3 h-3 text-blue-600" />
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
