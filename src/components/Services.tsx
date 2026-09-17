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
      <section id="services" className="py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        {/* Subtle lighting backdrop */}
        <div className="absolute top-1/3 -left-32 w-[35rem] h-[35rem] bg-blue-300/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-violet-300/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Spectrum Operations</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
              WHAT WE <br />
              <span className="text-gradient-blue">OPERATE FOR YOU.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
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
                        ? "bg-white border-blue-600 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20"
                        : "bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-base sm:text-lg font-black transition-colors ${
                        isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                      }`}>
                        {service.num}
                      </span>

                      <div>
                        <h3 className={`text-sm sm:text-base font-bold uppercase tracking-tight transition-colors ${
                          isActive ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                        }`}>
                          {service.title}
                        </h3>
                        <span className="text-[11px] text-slate-500 block font-mono">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "bg-slate-100 text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50"
                    }`}>
                      {getServiceIcon(service.iconName)}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Service Detailed Spotlight & Interactive Telemetry Panel */}
            <div className="lg:col-span-7 sticky top-28">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-8 shadow-xl shadow-slate-900/5 relative overflow-hidden">
                
                {/* Background Watermark Number */}
                <div className="absolute top-2 right-6 text-8xl sm:text-9xl font-black font-mono text-slate-100 select-none pointer-events-none">
                  {activeService.num}
                </div>

                {/* Service Header */}
                <div className="space-y-4 relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      SERVICE {activeService.num} &bull; {activeService.tag}
                    </span>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800">
                      <span className="text-emerald-700">{activeService.metricLabel}:</span>
                      <span className="font-bold text-emerald-900">{activeService.metricValue}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-editorial text-slate-900 uppercase tracking-tight">
                    {activeService.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activeService.shortDesc}
                  </p>
                </div>

                {/* Scope & Capabilities Checklist */}
                <div className="space-y-3 relative z-10 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                    Operational Scope &amp; Deliverables
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Telemetry / Tech Stack Bar */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-blue-100 relative z-10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                    <span className="flex items-center gap-2 text-slate-900 font-bold">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      Deployment Model
                    </span>
                    <span className="text-emerald-700 font-semibold">Dedicated Pod + SLA</span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700">
                      CRM Native Integration
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700">
                      Supervised Shift Leads
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700">
                      Weekly QA Calibration
                    </span>
                  </div>
                </div>

                {/* Service Bottom CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 relative z-10">
                  <span className="text-xs text-slate-500 font-medium">
                    Need a custom operational pod for this service?
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 transition-all"
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
