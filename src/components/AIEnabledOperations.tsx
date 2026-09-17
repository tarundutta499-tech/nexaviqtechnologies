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
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-violet-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-violet-600" />
            <span>AI-Enhanced Operational Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
            AI DOESN&apos;T REPLACE THE TEAM. <br />
            <span className="text-gradient-violet">IT MAKES THE TEAM BETTER.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
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
                    ? "bg-white border-violet-600 shadow-xl shadow-violet-500/10 ring-2 ring-violet-500/20 scale-[1.03]"
                    : "bg-slate-50 border-slate-200/80 hover:bg-white hover:border-violet-300 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-violet-600 text-white" : "bg-slate-200/80 text-slate-600"
                  }`}>
                    STEP {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                    {getStepIcon(index)}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className={`text-xs sm:text-sm font-black font-editorial uppercase tracking-tight ${
                    isSelected ? "text-violet-600" : "text-slate-900"
                  }`}>
                    {item.label}
                  </h3>
                  <span className="text-[10px] text-slate-500 block font-mono">
                    {item.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-violet-50/40 border border-violet-200 shadow-lg shadow-violet-900/5 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-violet-200/60 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-violet-700 uppercase tracking-wider block font-bold">
                Operational Pipeline Detail &bull; Step {flow[activeStep].step}
              </span>
              <h4 className="text-xl sm:text-2xl font-black font-editorial text-slate-900 uppercase">
                {flow[activeStep].label} &bull; {flow[activeStep].role}
              </h4>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-xs font-mono text-violet-800 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Continuous Calibration</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-4 max-w-3xl">
            {stepDescriptions[activeStep]}
          </p>
        </div>

      </div>
    </section>
  );
}
