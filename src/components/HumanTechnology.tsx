"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import {
  Users,
  Cpu,
  HeartHandshake,
  MessageSquare,
  Scale,
  Lightbulb,
  UserCheck,
  Bot,
  Zap,
  BarChart3,
  GitMerge,
  Eye,
  Sparkles,
  Layers
} from "lucide-react";

export default function HumanTechnology() {
  const data = companyConfig.humanTechnology;

  const peopleIcons = [
    <HeartHandshake key="p1" className="w-4 h-4 text-blue-400" />,
    <MessageSquare key="p2" className="w-4 h-4 text-blue-400" />,
    <Scale key="p3" className="w-4 h-4 text-blue-400" />,
    <Lightbulb key="p4" className="w-4 h-4 text-blue-400" />,
    <UserCheck key="p5" className="w-4 h-4 text-blue-400" />,
  ];

  const techIcons = [
    <Bot key="t1" className="w-4 h-4 text-violet-400" />,
    <Zap key="t2" className="w-4 h-4 text-violet-400" />,
    <BarChart3 key="t3" className="w-4 h-4 text-violet-400" />,
    <GitMerge key="t4" className="w-4 h-4 text-violet-400" />,
    <Eye key="t5" className="w-4 h-4 text-violet-400" />,
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-300/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-300/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>The Nexaviq Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
            PEOPLE POWER THE EXPERIENCE. <br />
            <span className="text-gradient-electric">TECHNOLOGY MULTIPLIES IT.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Great customer operations cannot be built on software alone, nor on unassisted manual effort. We fuse high-empathy human judgment with intelligent operational automation.
          </p>
        </div>

        {/* Convergence Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-center">
          
          {/* Left Column: Human Expertise (People) */}
          <div className="lg:col-span-5 rounded-3xl bg-blue-50/40 border border-blue-200/80 p-6 sm:p-8 space-y-6 shadow-lg shadow-blue-900/5 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-blue-200/60 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-editorial text-slate-900 uppercase tracking-tight">
                    {data.peopleTitle}
                  </h3>
                  <span className="text-[11px] font-mono text-blue-700 font-semibold">The Delivery Engine</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-100 text-blue-800 border border-blue-200">
                100% Dedicated Talent
              </span>
            </div>

            <div className="space-y-3">
              {data.peopleTraits.map((trait, index) => (
                <div
                  key={trait.name}
                  className="p-3.5 rounded-2xl bg-white border border-blue-100/90 flex items-start gap-3 hover:border-blue-300 shadow-2xs transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    {peopleIcons[index]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      {trait.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Bridge: Convergence Hub */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 border-2 border-white flex flex-col items-center justify-center shadow-lg shadow-blue-500/25 p-2 text-center animate-float-subtle">
              <span className="text-[9px] font-mono font-black text-white leading-none uppercase">NEXAVIQ</span>
              <span className="text-[7px] text-blue-100 font-mono tracking-tighter uppercase mt-0.5 font-bold">FUSION</span>
            </div>
            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-blue-300 via-indigo-300 to-transparent my-2" />
          </div>

          {/* Right Column: Technology Advantage */}
          <div className="lg:col-span-5 rounded-3xl bg-violet-50/40 border border-violet-200/80 p-6 sm:p-8 space-y-6 shadow-lg shadow-violet-900/5 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-violet-200/60 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 border border-violet-200 text-violet-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-editorial text-slate-900 uppercase tracking-tight">
                    {data.techTitle}
                  </h3>
                  <span className="text-[11px] font-mono text-violet-700 font-semibold">The Multiplier Advantage</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-100 text-violet-800 border border-violet-200">
                AI + Workflow Telemetry
              </span>
            </div>

            <div className="space-y-3">
              {data.techTraits.map((trait, index) => (
                <div
                  key={trait.name}
                  className="p-3.5 rounded-2xl bg-white border border-violet-100/90 flex items-start gap-3 hover:border-violet-300 shadow-2xs transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0 mt-0.5">
                    {techIcons[index]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      {trait.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Center Sub-banner */}
        <div className="mt-12 text-center p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto shadow-xs">
          <span className="text-xs sm:text-sm font-mono font-bold text-slate-700">
            NEXAVIQ PROMISE &bull; <span className="text-blue-600">Better operations.</span> <span className="text-violet-600">Better experiences.</span>
          </span>
        </div>

      </div>
    </section>
  );
}
