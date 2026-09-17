"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  Bot,
  User,
  Cpu,
  ShieldCheck,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Layers
} from "lucide-react";

export default function AIEnabledOperations() {
  const [activeStep, setActiveStep] = useState(2); // AI Assistance default
  const flow = companyConfig.aiEnabledBPO.flowSteps;

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <User className="w-5 h-5 text-blue-400" />;
      case 1: return <Bot className="w-5 h-5 text-blue-300" />;
      case 2: return <Cpu className="w-5 h-5 text-violet-400" />;
      case 3: return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 4: return <Award className="w-5 h-5 text-amber-400" />;
      case 5: return <TrendingUp className="w-5 h-5 text-blue-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const stepDescriptions = [
    "Customer engages across any digital or voice channel expecting rapid, accurate resolution.",
    "Trained, dedicated human support specialist receives full context and customer history.",
    "Real-time AI Co-Pilot retrieves SOP guidelines, drafts suggested responses, and checks compliance live.",
    "100% of interaction audio and transcripts are automatically audited for sentiment and accuracy.",
    "Operations Manager reviews real-time QA dashboards for targeted agent coaching and process calibration.",
    "Workflows and knowledge bases are updated continuously, driving compounding CSAT and SLA gains."
  ];

  return (
    <section className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-300 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>AI-Enhanced Operational Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            AI DOESN&apos;T REPLACE THE TEAM. <br />
            <span className="text-gradient-violet">IT MAKES THE TEAM BETTER.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {companyConfig.aiEnabledBPO.copy}
          </p>
        </div>

        {/* 6-Step Operational Pipeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {flow.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-[#071B4D] border-violet-400/60 shadow-xl shadow-violet-500/20 scale-[1.03]"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-violet-500 text-white" : "bg-white/10 text-slate-400"
                  }`}>
                    STEP {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                    {getStepIcon(index)}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className={`text-xs sm:text-sm font-black font-editorial uppercase tracking-tight ${
                    isSelected ? "text-white" : "text-slate-200"
                  }`}>
                    {item.label}
                  </h3>
                  <span className="text-[10px] text-slate-400 block font-mono">
                    {item.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#071B4D]/60 border border-violet-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block">
                Operational Pipeline Detail &bull; Step {flow[activeStep].step}
              </span>
              <h4 className="text-xl sm:text-2xl font-black font-editorial text-white uppercase">
                {flow[activeStep].label} &bull; {flow[activeStep].role}
              </h4>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-xs font-mono text-violet-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Continuous Calibration</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-4 max-w-3xl">
            {stepDescriptions[activeStep]}
          </p>
        </div>

      </div>
    </section>
  );
}
