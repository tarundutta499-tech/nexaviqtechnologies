"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  Search,
  PenTool,
  Rocket,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = companyConfig.howWeWork.steps;

  const getStepIcon = (num: string) => {
    switch (num) {
      case "01": return <Search className="w-5 h-5 text-blue-400" />;
      case "02": return <PenTool className="w-5 h-5 text-indigo-400" />;
      case "03": return <Rocket className="w-5 h-5 text-violet-400" />;
      case "04": return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="how-we-work" className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[35rem] h-[25rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>4-Stage Operating Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            HOW WE <br />
            <span className="text-gradient-blue">WORK FOR YOU.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {companyConfig.howWeWork.subheadline}
          </p>
        </div>

        {/* 4-Step Horizontal Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 border transition-all duration-300 space-y-5 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#071B4D] border-blue-400/60 shadow-2xl shadow-blue-500/20 scale-[1.02]"
                    : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-black px-2.5 py-1 rounded-full ${
                    isSelected ? "bg-blue-500 text-white" : "bg-white/10 text-slate-400"
                  }`}>
                    STEP {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                    {getStepIcon(step.num)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-xl font-black font-editorial uppercase tracking-tight ${
                    isSelected ? "text-white" : "text-slate-200"
                  }`}>
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className={isSelected ? "text-blue-400 font-bold" : "text-slate-500"}>
                    {isSelected ? "Active Phase" : "Inspect Step"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-blue-400" : "text-slate-600"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Indicator Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-[#071B4D]/35 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-300 backdrop-blur-md">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            Typical Ramp-up Timeline: 10 to 14 Business Days to Full Go-Live
          </span>
          <span className="hidden sm:inline text-slate-500">
            Structured SOP Ingestion &bull; Mock Scenarios &bull; Hypercare
          </span>
        </div>

      </div>
    </section>
  );
}
