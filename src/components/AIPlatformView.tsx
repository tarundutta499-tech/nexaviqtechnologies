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
      color: "text-blue-600",
      border: "hover:border-blue-500/50",
      glow: "hover:shadow-blue-500/10"
    },
    {
      icon: FileUp,
      title: "SOP Scorecard & Rubric Builder",
      desc: "Upload your exact grading rubric or SOP document (PDF or Word doc). The AI learns your specific business rules and compliance guidelines in seconds.",
      color: "text-indigo-600",
      border: "hover:border-indigo-500/50",
      glow: "hover:shadow-indigo-500/10"
    },
    {
      icon: Activity,
      title: "Real-Time Agent Co-Pilot",
      desc: "Equip your agents with a lightweight Chrome Extension that listens live, presents guidance prompts, and ticks off compliance checklists as they speak.",
      color: "text-violet-600",
      border: "hover:border-violet-500/50",
      glow: "hover:shadow-violet-500/10"
    },
    {
      icon: Layers,
      title: "CRM Auto-Logging (Zero ACW)",
      desc: "Eliminate manual after-call wrap-up work. Nexaviq instantly drafts call summaries and disposition codes and pushes them directly to Salesforce or Zendesk.",
      color: "text-amber-600",
      border: "hover:border-amber-500/50",
      glow: "hover:shadow-amber-500/10"
    },
    {
      icon: Sparkles,
      title: "Pulse AI Chat Analyst",
      desc: "Conversational cognitive analyst allowing leadership to query QA data, CSAT drivers, agent performance trends, and AHT metrics in natural language.",
      color: "text-cyan-600",
      border: "hover:border-cyan-500/50",
      glow: "hover:shadow-cyan-500/10"
    },
    {
      icon: OctagonAlert,
      title: "Fatal Error & Compliance Alerts",
      desc: "Instantly detect critical compliance breaches—like missing mandatory disclaimers or PCI violations. Managers are alerted the moment an error occurs.",
      color: "text-rose-600",
      border: "hover:border-rose-500/50",
      glow: "hover:shadow-rose-500/10"
    },
    {
      icon: HeartPulse,
      title: "Empathy, Tone & Sentiment Scoring",
      desc: "Go beyond text transcripts. Acoustic & lexical AI detects customer frustration, agent warmth, and professionalism to ensure high emotional intelligence.",
      color: "text-pink-600",
      border: "hover:border-pink-500/50",
      glow: "hover:shadow-pink-500/10"
    },
    {
      icon: Globe,
      title: "Telephony & CCaaS Connectors",
      desc: "Secure SIPREC and media stream connectors to easily link Twilio, Amazon Connect, Genesys Cloud, Talkdesk, Five9, and custom telephony streams.",
      color: "text-emerald-600",
      border: "hover:border-emerald-500/50",
      glow: "hover:shadow-emerald-500/10"
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
    <div className="pt-24 font-sans bg-[#F8FAFC] text-slate-900 min-h-screen relative overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 light-mesh-grid opacity-50 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] bg-gradient-to-tr from-blue-400/15 via-indigo-400/10 to-violet-400/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 rounded-full border border-blue-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span className="text-xs uppercase font-extrabold tracking-wider text-blue-700">
                  Nexaviq AI Platform 2.0
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-editorial tracking-tight text-slate-900 leading-[1.08] uppercase">
                Audit 100% of Customer Interactions.{" "}
                <span className="text-gradient-electric">
                  Automatically.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Nexaviq AI scores every customer call and support conversation against your exact SOPs in seconds. No sampling. No reviewer bias. No missed compliance issues.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold text-sm transition-all shadow-xl shadow-blue-500/20 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Schedule AI Platform Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-bold text-sm transition-all shadow-sm"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-black text-slate-900">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Interaction Auditing</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-600">&lt; 2s</div>
                  <div className="text-[11px] text-slate-500 font-medium">Audit Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-violet-600">0 ACW</div>
                  <div className="text-[11px] text-slate-500 font-medium">Auto CRM Summaries</div>
                </div>
              </div>
            </div>

            {/* Right Interactive AI Audit Console Simulator */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-xl shadow-slate-200/60">
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-900">Audit: Call #4829</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Grade: A (98%)
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Agent: <span className="text-slate-800 font-medium">Priya Sharma</span> &bull; Telephony: <span className="text-slate-800 font-medium">Amazon Connect</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                    aria-label="Toggle playback simulator"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Simulated Audio Waveform */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 mb-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 text-blue-700 font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      Streaming Voice Audio (SIPREC)
                    </span>
                    <span className="font-mono text-slate-700 font-semibold">03:42 / 04:12</span>
                  </div>
                  <div className="h-8 flex items-center justify-between gap-1 px-1">
                    {[45, 80, 60, 30, 95, 70, 50, 85, 40, 90, 65, 35, 75, 100, 55, 40, 85, 70, 95, 60, 50, 75, 90, 45, 80, 65, 50].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${isPlaying ? height : 20}%` }}
                        className={`w-1.5 rounded-full transition-all duration-300 ${
                          i > 18
                            ? "bg-slate-300"
                            : i % 2 === 0
                            ? "bg-gradient-to-t from-blue-600 to-indigo-500"
                            : "bg-violet-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Interactive Tab Switcher */}
                <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 mb-4 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("audit")}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === "audit"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    QA Scores
                  </button>
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === "summary"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    CRM Summary
                  </button>
                  <button
                    onClick={() => setActiveTab("coaching")}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === "coaching"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    AI Coaching
                  </button>
                </div>

                {/* Tab Content 1: QA Scores */}
                {activeTab === "audit" && (
                  <div className="space-y-3 animate-fade-in-up">
                    {/* Empathy Score */}
                    <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-700 font-medium">Empathy &amp; Active Listening</span>
                        <span className="font-mono font-bold text-blue-700">96 / 100</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full w-[96%]" />
                      </div>
                    </div>

                    {/* SOP Compliance */}
                    <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-700 font-medium">SOP &amp; Script Adherence</span>
                        <span className="font-mono font-bold text-violet-700">99 / 100</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-violet-500 h-full rounded-full w-[99%]" />
                      </div>
                    </div>

                    {/* Fatal Errors & Verification */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <div className="font-bold text-emerald-800 text-[11px]">Fatal Errors</div>
                          <div className="text-[10px] text-emerald-600 font-medium">0 Detected (Pass)</div>
                        </div>
                      </div>
                      <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 text-[11px]">Silence &amp; Hold</div>
                          <div className="text-[10px] text-slate-500 font-medium">18s (Optimal)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: CRM Summary (Zero ACW) */}
                {activeTab === "summary" && (
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2.5 text-xs animate-fade-in-up">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                      <span className="font-bold text-blue-700 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        Salesforce / Zendesk Auto-Draft
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700 font-mono font-bold border border-blue-200">
                        Synced via API
                      </span>
                    </div>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      <strong>Customer Intent:</strong> Billing dispute regarding annual SaaS tier auto-renewal.
                    </p>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      <strong>Resolution:</strong> Identity verified via 2FA OTP. Applied 15% loyalty retention discount per SOP #4B. Customer opted to remain on annual billing.
                    </p>
                    <div className="flex gap-2 text-[10px] font-mono text-slate-600 pt-1">
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Tag: Billing_Retention</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">FCR: Resolved</span>
                    </div>
                  </div>
                )}

                {/* Tab Content 3: AI Coaching Notes */}
                {activeTab === "coaching" && (
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2.5 text-xs animate-fade-in-up">
                    <div className="font-bold text-violet-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Instant Agent Feedback Note
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span>Excellent active listening during caller&apos;s initial explanation.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span>Stated mandatory compliance disclaimer within 15 seconds.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">&rarr;</span>
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
      <section className="py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-200">
              The Fundamental QA Gap
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-slate-900 uppercase">
              Traditional QA Is Broken. Nexaviq AI Fixes It.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Manual QA sampling leaves 98% of your customer conversations unmonitored. We replace subjective samples with 100% automated coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-rose-200 hover:border-rose-300 hover:shadow-md transition-all">
              <div className="text-4xl font-black text-rose-600 mb-4 font-mono">2% vs 100%</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Eliminate Blind Spots</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional QA audits only 2% of calls. Nexaviq AI automatically evaluates 100% of all customer voice and chat tickets in real time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all">
              <div className="text-4xl font-black text-amber-600 mb-4 font-mono">Zero Bias</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Objective Scoring</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scores never vary based on reviewer mood. Every agent is graded consistently against your exact documented business SOP rubrics.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-4xl font-black text-blue-600 mb-4 font-mono">Instant</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Real-Time Coaching</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No waiting weeks for audit sheets. Feedback and tailored coaching notes reach agents immediately after each interaction finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 8 CORE PLATFORM CAPABILITIES */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 rounded-full border border-blue-200">
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
                Operations Engine
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-slate-900 uppercase">
              Enterprise QA Capabilities Built for Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Everything you need to automate QA, slash after-call work (ACW), and guide support teams with cognitive intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`group relative p-6 rounded-2xl bg-white border border-slate-200 ${feat.border} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm ${feat.glow}`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
      <section id="how-it-works" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-indigo-50 rounded-full border border-indigo-200">
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-xs uppercase font-bold tracking-wider text-indigo-700">
                Rapid Deployment
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-slate-900 uppercase">
              Up and Running in 3 Simple Steps
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Deploy AI-powered QA across your contact center without complex engineering overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 relative space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900">Upload Your SOP</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your exact grading rubric or SOP document in PDF or Word format. The AI learns your specific brand rules and compliance guidelines in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 relative space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900">Connect Call Audio</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect your call recording buckets (AWS S3, Google Cloud) or stream live audio automatically via SIPREC / Media Stream APIs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 relative space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-violet-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900">Get Instant AI Reports</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Receive instant audit scorecards with detailed rubric breakdowns, fatal error flags, and personalized coaching notes for every agent on the floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TELEPHONY & CRM INTEGRATIONS */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Native Platform Connectivity
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-slate-900">
              Works Seamlessly With Your Telephony &amp; CRM Stack
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {integrationTools.map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all font-medium flex items-center gap-2 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONVERSION CTA */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-blue-50/50 border-t border-slate-200/80 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-slate-900 uppercase">
              Ready to Automate 100% of Your Quality Assurance?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Schedule an interactive live demonstration with our AI operations engineers and see how Nexaviq grades your calls against your actual SOPs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Live AI Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
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
