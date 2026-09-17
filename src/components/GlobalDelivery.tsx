"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import { Globe, MapPin, Radio, Clock, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";

export default function GlobalDelivery() {
  const data = companyConfig.globalDelivery;

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-blue-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>International Delivery Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
            BUILT IN INDIA. <br />
            <span className="text-gradient-blue">READY FOR GLOBAL OPERATIONS.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {data.copy}
          </p>
        </div>

        {/* Global Delivery Map & Region Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Abstract Global Telemetry Hub Map */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono text-slate-900 font-bold uppercase">
                  DELIVERY CENTER: INDIA
                </span>
              </div>

              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold border border-blue-200">
                24/7/365 OPERATIONS
              </span>
            </div>

            {/* Abstract Vector Graphic representation of Global Delivery Lines */}
            <div className="relative py-8 px-4 flex flex-col items-center justify-center space-y-6">
              
              {/* Origin Hub */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-blue-200 shadow-md shadow-blue-500/10 z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-xs">
                  IND
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase">Primary Delivery Hub</div>
                  <div className="text-[11px] text-slate-500 font-mono">Jaitsar, Rajasthan, India</div>
                </div>
              </div>

              {/* Connecting Radiation Vectors */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {data.regions.map((reg) => (
                  <div
                    key={reg.name}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-left space-y-1 hover:border-blue-300 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900 uppercase">
                      <span>{reg.name}</span>
                      <Radio className="w-3 h-3 text-blue-600 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-blue-700 font-mono font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{reg.timezone}</span>
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {reg.focus}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>English &amp; Regional Languages</span>
              <span className="text-emerald-700 font-semibold">Low-Latency IP Telephony</span>
            </div>

          </div>

          {/* Right Column: Key Delivery Advantages */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-blue-200 transition-all shadow-xs">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Timezone Synchronization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need dedicated day shifts aligned with US/Europe business hours or 24/7 overnight queue drainage, our delivery center operates around your schedule.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-blue-200 transition-all shadow-xs">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Physical &amp; Network Redundancy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated dual ISP failovers, online UPS power backup, clean-desk isolation, and 24/7 CCTV surveillance ensure high-availability operational security.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-blue-200 transition-all shadow-xs">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <Globe className="w-4 h-4 text-violet-600" />
                Strict Global NDAs &amp; Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Legally enforceable non-disclosure agreements, data minimization workflows, and GDPR/CCPA alignment before knowledge transfer begins.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
