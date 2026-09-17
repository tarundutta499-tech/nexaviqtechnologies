"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import { TrendingUp, ArrowRight, Layers, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function OperationalScale() {
  const phases = companyConfig.operationalScale.phases;

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Frictionless Scaling Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
            START WITH ONE PROCESS. <br />
            <span className="text-gradient-blue">SCALE WHEN YOU&apos;RE READY.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {companyConfig.operationalScale.subheadline}
          </p>
        </div>

        {/* 5-Phase Horizontal Scale Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {phases.map((phase, idx) => (
            <div
              key={phase.name}
              className="rounded-3xl p-5 sm:p-6 bg-white border border-slate-200/80 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-block">
                  PHASE 0{idx + 1}
                </span>

                <h3 className="text-lg font-black font-editorial text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {phase.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-600" />
                <span>Zero Lock-in</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-banner */}
        <div className="mt-10 text-center p-4 rounded-2xl bg-white border border-slate-200 max-w-xl mx-auto shadow-xs">
          <span className="text-xs font-mono text-slate-600">
            Expand headcount or scope anytime as your customer volume fluctuates.
          </span>
        </div>

      </div>
    </section>
  );
}
