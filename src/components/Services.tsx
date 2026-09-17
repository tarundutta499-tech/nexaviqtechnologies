"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  Headphones,
  Terminal,
  MessageSquare,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  Activity
} from "lucide-react";
import BookingModal from "./BookingModal";

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = companyConfig.services;
  const activeService = services[activeServiceIndex];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Headphones": return <Headphones className="w-5 h-5" />;
      case "Terminal": return <Terminal className="w-5 h-5" />;
      case "MessageSquare": return <MessageSquare className="w-5 h-5" />;
      case "FileSpreadsheet": return <FileSpreadsheet className="w-5 h-5" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      default: return <Headphones className="w-5 h-5" />;
    }
  };

  return (
    <>
      <section id="services" className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
        {/* Subtle lighting backdrop */}
        <div className="absolute top-1/3 -left-32 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Operations</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
              WHAT WE <br />
              <span className="text-gradient-blue">OPERATE FOR YOU.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We take ownership of your customer-facing and back-office processes with dedicated specialists, documented governance, and intelligent technology.
            </p>
          </div>

          {/* Interactive Presentation Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Vertical 01 - 07 Service Navigation List */}
            <div className="lg:col-span-5 space-y-2">
              {services.map((service, index) => {
                const isActive = activeServiceIndex === index;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveServiceIndex(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "bg-[#071B4D]/80 border-blue-500/50 shadow-xl shadow-blue-500/15"
                        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-base sm:text-lg font-black transition-colors ${
                        isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"
                      }`}>
                        {service.num}
                      </span>

                      <div>
                        <h3 className={`text-sm sm:text-base font-bold uppercase tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}>
                          {service.title}
                        </h3>
                        <span className="text-[11px] text-slate-400 block font-mono">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "bg-white/[0.04] text-slate-400 group-hover:text-white group-hover:bg-white/[0.08]"
                    }`}>
                      {getServiceIcon(service.iconName)}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Service Detailed Spotlight & Interactive Telemetry Panel */}
            <div className="lg:col-span-7 sticky top-28">
              <div className="rounded-3xl bg-[#071B4D]/50 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
                
                {/* Background Watermark Number */}
                <div className="absolute top-2 right-6 text-8xl sm:text-9xl font-black font-mono text-white/[0.03] select-none pointer-events-none">
                  {activeService.num}
                </div>

                {/* Service Header */}
                <div className="space-y-4 relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-400/30">
                      SERVICE {activeService.num} &bull; {activeService.tag}
                    </span>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-300">
                      <span className="text-slate-400">{activeService.metricLabel}:</span>
                      <span className="font-bold text-emerald-400">{activeService.metricValue}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-editorial text-white uppercase tracking-tight">
                    {activeService.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {activeService.shortDesc}
                  </p>
                </div>

                {/* Scope & Capabilities Checklist */}
                <div className="space-y-3 relative z-10 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    Operational Scope &amp; Deliverables
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#050816]/70 border border-white/[0.06] text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Telemetry / Tech Stack Bar */}
                <div className="p-4 rounded-2xl bg-[#050816]/90 border border-blue-500/20 relative z-10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-2 text-white font-bold">
                      <Zap className="w-3.5 h-3.5 text-blue-400" />
                      Deployment Model
                    </span>
                    <span className="text-emerald-400">Dedicated Pod + SLA</span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">
                      CRM Native Integration
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">
                      Supervised Shift Leads
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">
                      Weekly QA Calibration
                    </span>
                  </div>
                </div>

                {/* Service Bottom CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 relative z-10">
                  <span className="text-xs text-slate-400">
                    Need a custom operational pod for this service?
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <span>Request Service Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
