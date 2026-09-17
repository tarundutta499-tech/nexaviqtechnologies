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
    <section id="why-nexaviq" className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[40rem] h-[25rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            WHY BUSINESSES OUTSOURCE <br />
            <span className="text-gradient-blue">WITH NEXAVIQ.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            We reject the traditional low-cost, unmonitored call-center model. We build high-performing, accountable operations around four core pillars.
          </p>
        </div>

        {/* 4 Large Bold Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div
              key={p.num}
              className="rounded-3xl bg-[#071B4D]/40 border border-white/10 p-7 sm:p-8 backdrop-blur-xl space-y-6 glass-card-hover relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Background large number */}
              <div className="absolute top-2 right-4 text-7xl font-black font-mono text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors">
                {p.num}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#050816] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  {getPrincipleIcon(p.num)}
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-widest block">
                    PILLAR {p.num}
                  </span>
                  <h3 className="text-2xl font-black font-editorial text-white uppercase tracking-tight">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-blue-400 group-hover:text-blue-300 transition-colors">
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
