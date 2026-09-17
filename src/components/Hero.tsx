"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Bot,
  UserCheck,
  BarChart3,
  Layers,
  Clock,
  Compass
} from "lucide-react";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeQueueTab, setActiveQueueTab] = useState<"live" | "analytics">("live");

  return (
    <>
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-[#F8FAFC] text-slate-900 overflow-hidden">
        {/* Ambient background light gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[32rem] bg-gradient-to-tr from-blue-400/15 via-indigo-400/15 to-violet-400/10 rounded-full blur-[110px] pointer-events-none animate-pulse-mesh" />
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-sky-300/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 light-mesh-grid opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Massive Editorial Typography & Narrative */}
            <div className="lg:col-span-6 space-y-8 animate-fade-in-up">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span className="text-[11px] font-bold tracking-widest text-blue-700 uppercase">
                  Next-Gen BPO &amp; Customer Operations
                </span>
              </div>

              {/* Large Editorial Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-editorial tracking-tight text-slate-900 leading-[0.95] uppercase">
                  CUSTOMER <br />
                  <span className="text-gradient-blue">OPERATIONS.</span> <br />
                  BUILT TO <br />
                  <span className="text-gradient-electric">SCALE.</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal pt-2">
                  {companyConfig.description}
                </p>
              </div>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:scale-[1.02] border border-white/20 group"
                >
                  <PhoneCall className="w-4 h-4 text-blue-100" />
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 hover:text-blue-600 border border-slate-200 hover:border-blue-300 transition-all shadow-xs"
                >
                  <span>Explore Our Services</span>
                  <Compass className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </a>
              </div>

              {/* Operational Anchors */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Human + AI</div>
                  <div className="text-[11px] text-slate-500 font-medium">Trained pods + live co-pilots</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">SLA Governance</div>
                  <div className="text-[11px] text-slate-500 font-medium">Strict tailored metrics</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Zero Lock-In</div>
                  <div className="text-[11px] text-slate-500 font-medium">Scale up or down smoothly</div>
                </div>
              </div>
            </div>

            {/* Right Column: Abstract Modern Customer Operations Center Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Glow ring behind visual */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-violet-400/20 blur-2xl opacity-70" />

                {/* Primary Operations Console */}
                <div className="relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xl shadow-slate-900/5 overflow-hidden space-y-5">
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-700 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                        NEXAVIQ LIVE OPERATIONS TELEMETRY
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                      ACTIVE POD 01
                    </span>
                  </div>

                  {/* Operational Telemetry Grid */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Live SLA Adherence</span>
                      <div className="text-lg font-black text-slate-900 font-mono">99.4%</div>
                      <span className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Strict Target
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1">
                      <span className="text-[10px] text-slate-500 uppercase font-mono font-semibold">First Contact Res</span>
                      <div className="text-lg font-black text-blue-700 font-mono">89.2%</div>
                      <span className="text-[9px] text-blue-600 font-semibold flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" /> High Resolution
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-violet-50/50 border border-violet-100 space-y-1">
                      <span className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Quality Score</span>
                      <div className="text-lg font-black text-violet-700 font-mono">98.6%</div>
                      <span className="text-[9px] text-violet-600 font-semibold flex items-center gap-0.5">
                        <ShieldCheck className="w-2.5 h-2.5" /> Continuous QA
                      </span>
                    </div>
                  </div>

                  {/* Simulated Live Interaction Stream */}
                  <div className="space-y-3 bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-mono flex items-center gap-1.5 text-blue-700 font-semibold">
                        <MessageSquare className="w-3.5 h-3.5" /> Live Ticket Interaction
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">Channel: Omnichannel Chat</span>
                    </div>

                    {/* Chat Bubble 1: Customer */}
                    <div className="flex gap-2.5 items-start">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700 shrink-0">
                        C
                      </div>
                      <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-3 text-xs text-slate-800 shadow-xs max-w-[85%]">
                        &ldquo;We need to adjust our delivery window and confirm the invoice breakdown for order #8492.&rdquo;
                      </div>
                    </div>

                    {/* Chat Bubble 2: Agent + AI Assistance Card */}
                    <div className="space-y-2">
                      <div className="flex gap-2.5 items-start justify-end">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl rounded-tr-sm p-3 text-xs text-white max-w-[85%] shadow-md shadow-blue-500/20">
                          &ldquo;I have updated the delivery window to 2:00 PM and sent the itemized tax invoice directly to your registered email.&rdquo;
                        </div>
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0 shadow-xs">
                          A
                        </div>
                      </div>

                      {/* Sub-card: AI Co-Pilot Assistance */}
                      <div className="mx-6 p-2.5 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-between text-[11px]">
                        <span className="text-blue-900 flex items-center gap-1.5 font-medium">
                          <Bot className="w-3.5 h-3.5 text-blue-600" />
                          <span>AI Co-Pilot: Verified SLA &amp; Auto-Summary Generated</span>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">100% QA Pass</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow footer bar */}
                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Dedicated Pod: 24/7 Operations Ready
                    </span>
                    <span className="font-mono text-slate-400">Zendesk • Salesforce • Gorgias</span>
                  </div>

                </div>

                {/* Floating Telemetry Pill - Top Left */}
                <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-lg shadow-slate-900/5 animate-float-subtle">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Dedicated Specialist</span>
                    <span className="text-[10px] text-slate-500">Brand-Trained &amp; Supervised</span>
                  </div>
                </div>

                {/* Floating Telemetry Pill - Bottom Right */}
                <div className="hidden sm:flex absolute -bottom-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-lg shadow-slate-900/5 animate-float-subtle">
                  <Zap className="w-4 h-4 text-violet-600" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">AI-Enabled QA</span>
                    <span className="text-[10px] text-slate-500">Continuous Process Lift</span>
                  </div>
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
