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
    <section className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Nexaviq Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            PEOPLE POWER THE EXPERIENCE. <br />
            <span className="text-gradient-electric">TECHNOLOGY MULTIPLIES IT.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Great customer operations cannot be built on software alone, nor on unassisted manual effort. We fuse high-empathy human judgment with intelligent operational automation.
          </p>
        </div>

        {/* Convergence Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-center">
          
          {/* Left Column: Human Expertise (People) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#071B4D]/50 border border-blue-500/25 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-editorial text-white uppercase tracking-tight">
                    {data.peopleTitle}
                  </h3>
                  <span className="text-[11px] font-mono text-blue-300">The Delivery Engine</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300">
                100% Dedicated Talent
              </span>
            </div>

            <div className="space-y-3">
              {data.peopleTraits.map((trait, index) => (
                <div
                  key={trait.name}
                  className="p-3.5 rounded-2xl bg-[#050816]/70 border border-white/[0.06] flex items-start gap-3 hover:border-blue-500/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    {peopleIcons[index]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      {trait.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Bridge: Convergence Hub */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] border-2 border-white/30 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/30 p-2 text-center animate-float-subtle">
              <span className="text-[9px] font-mono font-black text-white leading-none uppercase">NEXAVIQ</span>
              <span className="text-[7px] text-blue-200 font-mono tracking-tighter uppercase mt-0.5">FUSION</span>
            </div>
            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-blue-500 via-violet-500 to-transparent my-2" />
          </div>

          {/* Right Column: Technology Advantage */}
          <div className="lg:col-span-5 rounded-3xl bg-[#071B4D]/50 border border-violet-500/25 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-400/30 text-violet-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-editorial text-white uppercase tracking-tight">
                    {data.techTitle}
                  </h3>
                  <span className="text-[11px] font-mono text-violet-300">The Multiplier Advantage</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300">
                AI + Workflow Telemetry
              </span>
            </div>

            <div className="space-y-3">
              {data.techTraits.map((trait, index) => (
                <div
                  key={trait.name}
                  className="p-3.5 rounded-2xl bg-[#050816]/70 border border-white/[0.06] flex items-start gap-3 hover:border-violet-500/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-violet-950/80 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    {techIcons[index]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      {trait.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Center Sub-banner */}
        <div className="mt-12 text-center p-4 rounded-2xl bg-[#071B4D]/40 border border-white/10 max-w-2xl mx-auto backdrop-blur-md">
          <span className="text-xs sm:text-sm font-mono font-bold text-slate-200">
            NEXAVIQ PROMISE &bull; <span className="text-blue-400">Better operations.</span> <span className="text-violet-400">Better experiences.</span>
          </span>
        </div>

      </div>
    </section>
  );
}
