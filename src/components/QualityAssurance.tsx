"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import {
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Activity,
  FileCheck2,
  Lock,
  Layers
} from "lucide-react";

export default function QualityAssurance() {
  const data = companyConfig.qualitySection;

  return (
    <section id="quality" className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Governance &amp; Accountability</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            QUALITY YOU CAN SEE. <br />
            <span className="text-gradient-blue">PERFORMANCE YOU CAN MEASURE.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {data.subheadline}
          </p>
        </div>

        {/* Demonstrative Metrics Dashboard */}
        <div className="rounded-3xl bg-[#071B4D]/50 border border-white/15 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">
                  OPERATIONAL SLA &amp; QA SCORECARD BLUEPRINT
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  Continuous Calibration &bull; 100% Interaction Auditing
                </span>
              </div>
            </div>

            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30">
              ILLUSTRATIVE GOVERNANCE FRAMEWORK
            </span>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data.illustrativeMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl bg-[#050816]/75 border border-white/[0.08] space-y-3 hover:border-blue-500/40 transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 uppercase">{metric.label}</span>
                  <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-400/20">
                    {metric.target}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {metric.value}
                </div>

                <p className="text-[11px] text-slate-400 border-t border-white/5 pt-2">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>

          {/* Governance Footer Pill */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Weekly Calibration Sessions with Your Internal CX Leadership
            </span>
            <span className="text-slate-500">
              Root Cause Analysis (RCA) on all escalations
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
