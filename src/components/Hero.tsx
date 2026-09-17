"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Clock,
  Check,
  Calendar,
  Lock
} from "lucide-react";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"chat" | "dashboard">("chat");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "customer", text: "Hi, I need to update my shipping address for order #4092.", time: "10:02 AM" },
    { sender: "agent", text: "Hello! I can definitely help with that. Let me look up your order details.", time: "10:02 AM" },
    { sender: "agent", text: "I have updated the delivery address to Maker Maxity, Bandra Kurla Complex, Mumbai. You'll receive a confirmation email shortly.", time: "10:03 AM" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Add user message
    const updatedMessages = [
      ...chatMessages,
      { sender: "customer", text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ];
    setChatMessages(updatedMessages);
    setNewMessage("");

    // Simulate Agent Auto-Response after 1 second
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { sender: "agent", text: "Thanks for your response. Our team will verify this update in our CRM database immediately.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    }, 1000);
  };

  return (
    <>
      <section className="relative bg-charcoal-950 overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48 lg:pb-36 border-b border-white/10 font-sans">
        {/* Futuristic AI Neural Nodes & Ambient Glow Background */}
        <div className="absolute inset-0 ai-grid-pattern opacity-70 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[45rem] h-[45rem] bg-gradient-to-br from-brand-blue-500/20 via-cyber-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-gradient-to-tr from-neon-cyan-500/15 via-brand-blue-700/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle Decorative Digital Mesh & Connected Node SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-nodes" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="1.5" fill="#38bdf8" />
              <path d="M 60 60 L 120 60 M 60 60 L 60 120 M 60 60 L 0 60 M 60 60 L 60 0" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="3,6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-nodes)" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-6 space-y-8 animate-fade-in-up">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-brand-blue-900/60 to-charcoal-900/80 rounded-full border border-brand-blue-400/30 backdrop-blur-md shadow-inner shadow-brand-blue-500/20">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan-400" />
                </div>
                <Sparkles className="w-3.5 h-3.5 text-neon-cyan-400" />
                <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">
                  Premium Customer Experience Partner
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  Exceptional Customer Support. <br />
                  <span className="text-gradient-blue">Delivered by Experts.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                  {companyConfig.description}
                </p>
              </div>

              {/* Quick trust metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg pt-1">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-charcoal-900/70 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-neon-cyan-400 shrink-0" />
                  <span>12+ Years QA & Operations Leadership</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-charcoal-900/70 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-brand-blue-400 shrink-0" />
                  <span>Tailored SLAs & Strict NDAs</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="relative group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-cyber-purple-600 rounded-xl transition-all duration-300 shadow-xl shadow-brand-blue-500/25 hover:shadow-brand-blue-500/50 hover:scale-[1.02] border border-white/20"
                >
                  <Calendar className="w-4 h-4 text-neon-cyan-300" />
                  <span>Schedule 15-Min Discovery Call</span>
                </button>
                
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-slate-200 bg-charcoal-900/80 hover:bg-charcoal-850 hover:text-white rounded-xl border border-white/10 hover:border-brand-blue-500/40 transition-all duration-200 backdrop-blur-md"
                >
                  <span>Explore Support Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Trust Badges Strip */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enterprise Access Governance</span>
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-300">GDPR & CCPA Aligned</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-300">Plug & Play CRM Integration</span>
              </div>
            </div>

            {/* Right Column: Interactive Mockup Workspace */}
            <div className="lg:col-span-6 relative animate-fade-in-up animate-delay-200">
              {/* Outer ambient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-blue-500/30 via-neon-cyan-500/20 to-cyber-purple-500/30 rounded-3xl blur-xl opacity-75" />
              
              <div className="relative border border-white/15 rounded-2xl bg-charcoal-900/90 backdrop-blur-xl shadow-2xl overflow-hidden text-white max-w-lg mx-auto">
                {/* Window Header */}
                <div className="bg-charcoal-950/90 border-b border-white/10 px-4 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 block shadow-xs shadow-rose-500/50" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 block shadow-xs shadow-amber-500/50" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 block shadow-xs shadow-emerald-500/50" />
                  </div>
                  {/* Navigation Tabs */}
                  <div className="flex bg-charcoal-900/90 p-1 rounded-xl border border-white/10 text-xs">
                    <button
                      onClick={() => setActiveTab("chat")}
                      className={`px-3.5 py-1.5 rounded-lg transition-all font-semibold ${
                        activeTab === "chat"
                          ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white shadow-md border border-white/15"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Live Chat UI
                    </button>
                    <button
                      onClick={() => setActiveTab("dashboard")}
                      className={`px-3.5 py-1.5 rounded-lg transition-all font-semibold ${
                        activeTab === "dashboard"
                          ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white shadow-md border border-white/15"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      CRM Snippet
                    </button>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Tab 1: Live Chat UI Mockup */}
                {activeTab === "chat" && (
                  <div className="h-96 flex flex-col justify-between bg-charcoal-950/95">
                    <div className="p-4 space-y-4 overflow-y-auto flex-grow flex flex-col justify-end">
                      {chatMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col max-w-[82%] ${
                            msg.sender === "customer" ? "self-end items-end" : "self-start items-start"
                          }`}
                        >
                          <div
                            className={`rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                              msg.sender === "customer"
                                ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white rounded-br-none shadow-md shadow-brand-blue-500/20 border border-white/15"
                                : "bg-charcoal-850/90 text-slate-100 rounded-bl-none border border-white/10"
                            }`}
                          >
                            {msg.text}
                          </div>
                          <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-charcoal-900/95 flex gap-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a customer query to test client interface..."
                        className="bg-charcoal-950 text-white placeholder-slate-500 border border-white/10 rounded-xl px-4 py-2 text-xs sm:text-sm flex-grow focus:outline-none focus:border-neon-cyan-400 focus:ring-1 focus:ring-neon-cyan-400/30 transition-all"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-brand-blue-600 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 px-4 py-2 text-xs font-bold rounded-xl transition-all text-white shrink-0 shadow-md shadow-brand-blue-500/20"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                )}

                {/* Tab 2: CRM Snippet Dashboard */}
                {activeTab === "dashboard" && (
                  <div className="h-96 p-6 bg-charcoal-950/95 space-y-5 overflow-y-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <h4 className="font-semibold text-xs sm:text-sm tracking-wide text-brand-blue-300">
                        Operations Dashboard
                      </h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 bg-emerald-500/15 text-emerald-400 rounded-full border border-emerald-500/30">
                        Active SLA Target
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-charcoal-900/90 border border-white/10 rounded-xl p-4 space-y-2">
                        <div className="flex justify-between items-center text-slate-400">
                          <span className="text-xs font-semibold">Avg Response Time</span>
                          <Clock className="w-4 h-4 text-neon-cyan-400" />
                        </div>
                        <div className="text-2xl font-black text-white tracking-tight">42s</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                          <Check className="w-3 h-3" /> Exceeds 2m SLA window
                        </div>
                      </div>

                      <div className="bg-charcoal-900/90 border border-white/10 rounded-xl p-4 space-y-2">
                        <div className="flex justify-between items-center text-slate-400">
                          <span className="text-xs font-semibold">Current CSAT Rate</span>
                          <MessageCircle className="w-4 h-4 text-neon-cyan-400" />
                        </div>
                        <div className="text-2xl font-black text-white tracking-tight">98.4%</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                          <Check className="w-3 h-3" /> Exceeds 95% target
                        </div>
                      </div>
                    </div>

                    <div className="bg-charcoal-900/90 border border-white/10 rounded-xl p-4 space-y-3">
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                        Weekly QA Audit Log
                      </h5>
                      <div className="space-y-2.5">
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-400">Resolution Accuracy</span>
                            <span className="font-bold text-emerald-400">99.2%</span>
                          </div>
                          <div className="w-full bg-charcoal-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-500 to-neon-cyan-400 h-full rounded-full" style={{ width: "99.2%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-400">Tone & Brand Compliance</span>
                            <span className="font-bold text-emerald-400">98.9%</span>
                          </div>
                          <div className="w-full bg-charcoal-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-500 to-neon-cyan-400 h-full rounded-full" style={{ width: "98.9%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Float Element badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-charcoal-900/90 border border-white/15 shadow-2xl backdrop-blur-xl rounded-2xl p-4 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-500/20 text-neon-cyan-400 flex items-center justify-center border border-brand-blue-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">ISO QA Process Alignment</div>
                  <div className="text-[10px] text-slate-400">Structured Root Cause Analysis (RCA)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
