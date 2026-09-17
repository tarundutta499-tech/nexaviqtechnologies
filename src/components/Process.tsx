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
    <section id="how-we-work" className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[35rem] h-[25rem] bg-indigo-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>4-Stage Operating Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
            HOW WE <br />
            <span className="text-gradient-blue">WORK FOR YOU.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
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
                    ? "bg-white border-blue-600 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20 scale-[1.02]"
                    : "bg-slate-50 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-black px-2.5 py-1 rounded-full ${
                    isSelected ? "bg-blue-600 text-white" : "bg-slate-200/80 text-slate-600"
                  }`}>
                    STEP {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getStepIcon(step.num)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-xl font-black font-editorial uppercase tracking-tight ${
                    isSelected ? "text-blue-600" : "text-slate-900"
                  }`}>
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className={isSelected ? "text-blue-600 font-bold" : "text-slate-400"}>
                    {isSelected ? "Active Phase" : "Inspect Step"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-blue-600" : "text-slate-400"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Indicator Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600 shadow-xs">
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Typical Ramp-up Timeline: 10 to 14 Business Days to Full Go-Live
          </span>
          <span className="hidden sm:inline text-slate-400">
            Structured SOP Ingestion &bull; Mock Scenarios &bull; Hypercare
          </span>
        </div>

      </div>
    </section>
  );
}
