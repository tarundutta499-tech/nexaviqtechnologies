"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import { Users, Workflow, Cpu, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const principles = companyConfig.whyNexaviq.principles;

  const getPrincipleIcon = (num: string) => {
    switch (num) {
      case "01": return <Users className="w-6 h-6 text-blue-400" />;
      case "02": return <Workflow className="w-6 h-6 text-indigo-400" />;
      case "03": return <Cpu className="w-6 h-6 text-violet-400" />;
      case "04": return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="why-nexaviq" className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[40rem] h-[25rem] bg-blue-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Operational Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
            WHY BUSINESSES OUTSOURCE <br />
            <span className="text-gradient-blue">WITH NEXAVIQ.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            We reject the traditional low-cost, unmonitored call-center model. We build high-performing, accountable operations around four core pillars.
          </p>
        </div>

        {/* 4 Large Bold Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div
              key={p.num}
              className="rounded-3xl bg-slate-50 border border-slate-200/80 p-7 sm:p-8 space-y-6 glass-card-light relative overflow-hidden group flex flex-col justify-between hover:border-blue-300 hover:bg-white transition-all"
            >
              {/* Background large number */}
              <div className="absolute top-2 right-4 text-7xl font-black font-mono text-slate-200/60 select-none group-hover:text-blue-100 transition-colors">
                {p.num}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getPrincipleIcon(p.num)}
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-blue-600 font-bold uppercase tracking-widest block">
                    PILLAR {p.num}
                  </span>
                  <h3 className="text-2xl font-black font-editorial text-slate-900 uppercase tracking-tight">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-mono text-blue-600 group-hover:text-blue-700 font-semibold transition-colors">
                <span>Governance Assured</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
