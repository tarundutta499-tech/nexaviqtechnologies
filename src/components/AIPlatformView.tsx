"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  FileUp,
  Activity,
  Layers,
  Sparkles,
  OctagonAlert,
  HeartPulse,
  Globe,
  ArrowRight,
  Play,
  Pause,
  CheckCircle2,
  Clock,
  Sliders,
  Terminal,
  Zap,
  Calendar,
  MessageSquare
} from "lucide-react";
import BookingModal from "./BookingModal";

export default function AIPlatformView() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"audit" | "summary" | "coaching">("audit");

  const coreFeatures = [
    {
      icon: Shield,
      title: "100% Call & Chat Coverage",
      desc: "Stop relying on 2% random sampling. Nexaviq automatically ingests and audits every single customer interaction—ensuring zero blind spots.",
      color: "text-brand-blue-400",
      border: "hover:border-brand-blue-500/50",
      glow: "group-hover:shadow-brand-blue-500/10"
    },
    {
      icon: FileUp,
      title: "SOP Scorecard & Rubric Builder",
      desc: "Upload your exact grading rubric or SOP document (PDF or Word doc). The AI learns your specific business rules and compliance guidelines in seconds.",
      color: "text-neon-cyan-400",
      border: "hover:border-neon-cyan-400/50",
      glow: "group-hover:shadow-neon-cyan-500/10"
    },
    {
      icon: Activity,
      title: "Real-Time Agent Co-Pilot",
      desc: "Equip your agents with a lightweight Chrome Extension that listens live, presents guidance prompts, and ticks off compliance checklists as they speak.",
      color: "text-cyber-purple-400",
      border: "hover:border-cyber-purple-500/50",
      glow: "group-hover:shadow-cyber-purple-500/10"
    },
    {
      icon: Layers,
      title: "CRM Auto-Logging (Zero ACW)",
      desc: "Eliminate manual after-call wrap-up work. Nexaviq instantly drafts call summaries and disposition codes and pushes them directly to Salesforce or Zendesk.",
      color: "text-amber-400",
      border: "hover:border-amber-400/50",
      glow: "group-hover:shadow-amber-500/10"
    },
    {
      icon: Sparkles,
      title: "Pulse AI Chat Analyst",
      desc: "Conversational cognitive analyst allowing leadership to query QA data, CSAT drivers, agent performance trends, and AHT metrics in natural language.",
      color: "text-neon-cyan-400",
      border: "hover:border-neon-cyan-400/50",
      glow: "group-hover:shadow-neon-cyan-500/10"
    },
    {
      icon: OctagonAlert,
      title: "Fatal Error & Compliance Alerts",
      desc: "Instantly detect critical compliance breaches—like missing mandatory disclaimers or PCI violations. Managers are alerted the moment an error occurs.",
      color: "text-rose-400",
      border: "hover:border-rose-400/50",
      glow: "group-hover:shadow-rose-500/10"
    },
    {
      icon: HeartPulse,
      title: "Empathy, Tone & Sentiment Scoring",
      desc: "Go beyond text transcripts. Acoustic & lexical AI detects customer frustration, agent warmth, and professionalism to ensure high emotional intelligence.",
      color: "text-pink-400",
      border: "hover:border-pink-400/50",
      glow: "group-hover:shadow-pink-500/10"
    },
    {
      icon: Globe,
      title: "Telephony & CCaaS Connectors",
      desc: "Secure SIPREC and media stream connectors to easily link Twilio, Amazon Connect, Genesys Cloud, Talkdesk, Five9, and custom telephony streams.",
      color: "text-emerald-400",
      border: "hover:border-emerald-400/50",
      glow: "group-hover:shadow-emerald-500/10"
    }
  ];

  const integrationTools = [
    "Amazon Connect",
    "Twilio Flex",
    "Genesys Cloud",
    "Salesforce Service Cloud",
    "Zendesk",
    "Freshdesk",
    "Gorgias",
    "Five9",
    "Talkdesk",
    "Dialpad",
    "HubSpot",
    "Intercom"
  ];

  return (
    <div className="pt-28 font-sans bg-charcoal-950 text-white min-h-screen relative overflow-hidden selection:bg-brand-blue-500/30 selection:text-white">
      {/* Background AI grid and ambient glows */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] bg-gradient-to-tr from-brand-blue-600/15 via-cyber-purple-600/10 to-neon-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan-400" />
                </span>
                <span className="text-xs uppercase font-extrabold tracking-wider text-neon-cyan-400">
                  Nexaviq AI Platform 2.0
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Audit 100% of Customer Interactions.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan-400 via-brand-blue-400 to-cyber-purple-400">
                  Automatically.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Nexaviq AI scores every customer call and support conversation against your exact SOPs in seconds. No sampling. No reviewer bias. No missed compliance issues.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white font-bold text-sm transition-all shadow-xl shadow-brand-blue-500/25 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-neon-cyan-200" />
                  <span>Schedule AI Platform Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-charcoal-900/80 hover:bg-charcoal-850 text-slate-300 hover:text-white border border-white/10 font-bold text-sm transition-all"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-[11px] text-slate-400">Interaction Auditing</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-neon-cyan-400">&lt; 2s</div>
                  <div className="text-[11px] text-slate-400">Audit Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyber-purple-400">0 ACW</div>
                  <div className="text-[11px] text-slate-400">Auto CRM Summaries</div>
                </div>
              </div>
            </div>

            {/* Right Interactive AI Audit Console Simulator */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-charcoal-900/90 border border-white/15 p-5 sm:p-7 backdrop-blur-2xl shadow-2xl shadow-brand-blue-500/20">
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-600 to-neon-cyan-500 flex items-center justify-center text-white shadow-md">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-white">Audit: Call #4829</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Grade: A (98%)
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Agent: <span className="text-slate-200">Priya Sharma</span> &bull; Telephony: <span className="text-slate-200">Amazon Connect</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-lg bg-charcoal-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Toggle playback simulator"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Simulated Audio Waveform */}
                <div className="bg-charcoal-950/80 border border-white/10 rounded-2xl p-3.5 mb-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-neon-cyan-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-neon-cyan-400 animate-pulse" />
                      Streaming Voice Audio (SIPREC)
                    </span>
                    <span className="font-mono text-slate-300">03:42 / 04:12</span>
                  </div>
                  <div className="h-8 flex items-center justify-between gap-1 px-1">
                    {[45, 80, 60, 30, 95, 70, 50, 85, 40, 90, 65, 35, 75, 100, 55, 40, 85, 70, 95, 60, 50, 75, 90, 45, 80, 65, 50].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${isPlaying ? height : 20}%` }}
                        className={`w-1.5 rounded-full transition-all duration-300 ${
                          i > 18
                            ? "bg-slate-700"
                            : i % 2 === 0
                            ? "bg-gradient-to-t from-brand-blue-500 to-neon-cyan-400"
                            : "bg-cyber-purple-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Interactive Tab Switcher */}
                <div className="flex gap-1.5 p-1 bg-charcoal-950/90 rounded-xl border border-white/10 mb-4 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("audit")}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === "audit"
                        ? "bg-brand-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    QA Scores
                  </button>
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === "summary"
                        ? "bg-brand-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    CRM Summary
                  </button>
                  <button
                    onClick={() => setActiveTab("coaching")}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === "coaching"
                        ? "bg-brand-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    AI Coaching
                  </button>
                </div>

                {/* Tab Content 1: QA Scores */}
                {activeTab === "audit" && (
                  <div className="space-y-3 animate-fade-in-up">
                    {/* Empathy Score */}
                    <div className="p-3 bg-charcoal-950/60 border border-white/10 rounded-xl space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium">Empathy & Active Listening</span>
                        <span className="font-mono font-bold text-neon-cyan-300">96 / 100</span>
                      </div>
                      <div className="w-full bg-charcoal-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-brand-blue-500 to-neon-cyan-400 h-full rounded-full w-[96%]" />
                      </div>
                    </div>

                    {/* SOP Compliance */}
                    <div className="p-3 bg-charcoal-950/60 border border-white/10 rounded-xl space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium">SOP & Script Adherence</span>
                        <span className="font-mono font-bold text-cyber-purple-300">99 / 100</span>
                      </div>
                      <div className="w-full bg-charcoal-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-brand-blue-500 to-cyber-purple-400 h-full rounded-full w-[99%]" />
                      </div>
                    </div>

                    {/* Fatal Errors & Verification */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <div className="font-bold text-emerald-300 text-[11px]">Fatal Errors</div>
                          <div className="text-[10px] text-emerald-400/80">0 Detected (Pass)</div>
                        </div>
                      </div>
                      <div className="p-2.5 bg-charcoal-950/60 border border-white/10 rounded-xl flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neon-cyan-400 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-200 text-[11px]">Silence & Hold</div>
                          <div className="text-[10px] text-slate-400">18s (Low / Optimal)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: CRM Summary (Zero ACW) */}
                {activeTab === "summary" && (
                  <div className="p-3.5 bg-charcoal-950/80 border border-white/10 rounded-xl space-y-2.5 text-xs animate-fade-in-up">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-bold text-neon-cyan-400 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        Salesforce / Zendesk Auto-Draft
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-brand-blue-500/20 text-brand-blue-300 font-mono">
                        Synced via API
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      <strong>Customer Intent:</strong> Billing dispute regarding annual SaaS tier auto-renewal.
                    </p>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      <strong>Resolution:</strong> Identity verified via 2FA OTP. Applied 15% loyalty retention discount per SOP #4B. Customer opted to remain on annual billing.
                    </p>
                    <div className="flex gap-2 text-[10px] font-mono text-slate-400 pt-1">
                      <span className="bg-charcoal-800 px-2 py-0.5 rounded border border-white/10">Tag: Billing_Retention</span>
                      <span className="bg-charcoal-800 px-2 py-0.5 rounded border border-white/10">FCR: Resolved</span>
                    </div>
                  </div>
                )}

                {/* Tab Content 3: AI Coaching Notes */}
                {activeTab === "coaching" && (
                  <div className="p-3.5 bg-charcoal-950/80 border border-white/10 rounded-xl space-y-2.5 text-xs animate-fade-in-up">
                    <div className="font-bold text-cyber-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Instant Agent Feedback Note
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-300">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">&check;</span>
                        <span>Excellent active listening during caller&apos;s initial explanation.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">&check;</span>
                        <span>Stated mandatory compliance disclaimer within 15 seconds.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-neon-cyan-400 font-bold">&rarr;</span>
                        <span>Tip: Offer knowledge base self-service link before ending call.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE OLD WAY VS THE NEXAVIQ AI WAY */}
      <section className="py-20 bg-charcoal-900/90 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/15 text-rose-400 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/30">
              The Fundamental QA Gap
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Traditional QA Is Broken. Nexaviq AI Fixes It.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Manual QA sampling leaves 98% of your customer conversations unmonitored. We replace subjective samples with 100% automated coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-charcoal-950/80 border border-rose-500/20 hover:border-rose-500/40 transition-all backdrop-blur-xl">
              <div className="text-4xl font-black text-rose-400 mb-4 font-mono">2% vs 100%</div>
              <h3 className="text-lg font-bold text-white mb-2">Eliminate Blind Spots</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Traditional QA audits only 2% of calls. Nexaviq AI automatically evaluates 100% of all customer voice and chat tickets in real time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-charcoal-950/80 border border-amber-500/20 hover:border-amber-500/40 transition-all backdrop-blur-xl">
              <div className="text-4xl font-black text-amber-400 mb-4 font-mono">Zero Bias</div>
              <h3 className="text-lg font-bold text-white mb-2">Objective Scoring</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Scores never vary based on reviewer mood. Every agent is graded consistently against your exact documented business SOP rubrics.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-charcoal-950/80 border border-neon-cyan-500/20 hover:border-neon-cyan-500/40 transition-all backdrop-blur-xl">
              <div className="text-4xl font-black text-neon-cyan-400 mb-4 font-mono">Instant</div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Coaching</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No waiting weeks for audit sheets. Feedback and tailored coaching notes reach agents immediately after each interaction finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 8 CORE PLATFORM CAPABILITIES */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30">
              <Sliders className="w-3.5 h-3.5 text-neon-cyan-400" />
              <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
                Operations Engine
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Enterprise QA Capabilities Built for Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Everything you need to automate QA, slash after-call work (ACW), and guide support teams with cognitive intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`group relative p-6 rounded-2xl bg-charcoal-900/70 border border-white/10 ${feat.border} hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between shadow-lg ${feat.glow}`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-charcoal-950 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-neon-cyan-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 3-STEP ZERO-CODE DEPLOYMENT PIPELINE */}
      <section id="how-it-works" className="py-24 bg-charcoal-900/90 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-cyber-purple-500/15 rounded-full border border-purple-500/30">
              <Zap className="w-3.5 h-3.5 text-cyber-purple-400" />
              <span className="text-xs uppercase font-bold tracking-wider text-purple-300">
                Rapid Deployment
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Up and Running in 3 Simple Steps
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Deploy AI-powered QA across your contact center without complex engineering overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-charcoal-950/80 border border-white/10 relative space-y-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Upload Your SOP</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Upload your exact grading rubric or SOP document in PDF or Word format. The AI learns your specific brand rules and compliance guidelines in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-charcoal-950/80 border border-white/10 relative space-y-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-neon-cyan-500 text-charcoal-950 font-extrabold text-base flex items-center justify-center shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Connect Call Audio</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect your call recording buckets (AWS S3, Google Cloud) or stream live audio automatically via SIPREC / Media Stream APIs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-charcoal-950/80 border border-white/10 relative space-y-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-cyber-purple-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Get Instant AI Reports</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Receive instant audit scorecards with detailed rubric breakdowns, fatal error flags, and personalized coaching notes for every agent on the floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TELEPHONY & CRM INTEGRATIONS */}
      <section className="py-20 bg-charcoal-950 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neon-cyan-400">
              Native Platform Connectivity
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-white">
              Works Seamlessly With Your Telephony & CRM Stack
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {integrationTools.map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 rounded-xl bg-charcoal-900/90 border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white hover:border-brand-blue-500/50 hover:bg-charcoal-850 transition-all font-medium flex items-center gap-2 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-brand-blue-400" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONVERSION CTA */}
      <section className="py-20 bg-charcoal-950 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-charcoal-900/80 border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-brand-blue-500/10 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-500/20 border border-brand-blue-400/30 text-neon-cyan-400 flex items-center justify-center mx-auto shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Automate 100% of Your Quality Assurance?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              Schedule an interactive live demonstration with our AI operations engineers and see how Nexaviq grades your calls against your actual SOPs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-brand-blue-500/25 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Live AI Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-charcoal-800/80 hover:bg-charcoal-800 text-slate-200 hover:text-white border border-white/10 font-bold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-neon-cyan-400" />
                <span>Contact Operations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
