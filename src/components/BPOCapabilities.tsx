"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import { Layers, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export default function BPOCapabilities() {
  const [activeStage, setActiveStage] = useState(0);
  const stages = companyConfig.bpoCapabilities.stages;

  return (
    <section className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Scalable Engagement Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            FROM ONE PROCESS <br />
            <span className="text-gradient-blue">TO AN ENTIRE OPERATION.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {companyConfig.bpoCapabilities.subheadline}
          </p>
        </div>

        {/* 4-Stage Progressive Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stages.map((stage, index) => {
            const isSelected = activeStage === index;
            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(index)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 border transition-all duration-300 relative space-y-4 ${
                  isSelected
                    ? "bg-[#071B4D]/80 border-blue-400/60 shadow-2xl shadow-blue-500/20 scale-[1.02]"
                    : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20"
                }`}
              >
                {/* Stage Step Pill */}
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-black px-2.5 py-1 rounded-full ${
                    isSelected ? "bg-blue-500 text-white" : "bg-white/10 text-slate-400"
                  }`}>
                    STAGE {stage.step}
                  </span>

                  <span className="text-[11px] font-mono text-slate-500">
                    {index === 0 ? "Initial Focus" : index === 3 ? "Enterprise Scale" : "Expansion"}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className={`text-lg font-black font-editorial uppercase tracking-tight ${
                    isSelected ? "text-white" : "text-slate-200"
                  }`}>
                    {stage.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>

                {/* Interactive Node Indicator */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className={`${isSelected ? "text-blue-400" : "text-slate-500"}`}>
                    {isSelected ? "Active Blueprint" : "Click to Inspect"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? "text-blue-400 translate-x-1" : "text-slate-600"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Blueprint Deep Dive Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#071B4D]/40 border border-white/10 backdrop-blur-xl space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">
                Selected Operational Phase
              </span>
              <h4 className="text-xl font-black font-editorial text-white uppercase">
                {stages[activeStage].name} Framework
              </h4>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full SLA Governance Guaranteed</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {stages[activeStage].desc} We ensure smooth onboarding through customized process documentation, daily QA tracking, and ongoing supervisor oversight.
          </p>
        </div>

      </div>
    </section>
  );
}
