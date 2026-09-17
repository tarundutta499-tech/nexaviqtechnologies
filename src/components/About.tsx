"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import { Sparkles, ShieldCheck, Award, Target, Users, Zap, ArrowRight } from "lucide-react";

export default function About() {
  const data = companyConfig.about;

  return (
    <section id="about" className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Company Mission</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            WE&apos;RE BUILDING <br />
            <span className="text-gradient-blue">A BETTER WAY TO OUTSOURCE.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {data.copy}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            <div className="p-5 rounded-2xl bg-[#071B4D]/40 border border-white/10 space-y-2">
              <span className="text-xs font-bold font-mono text-blue-400 uppercase">01. People-First</span>
              <p className="text-xs text-slate-300">Empowered, dedicated specialists trained specifically on your brand culture.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#071B4D]/40 border border-white/10 space-y-2">
              <span className="text-xs font-bold font-mono text-indigo-400 uppercase">02. Process-Driven</span>
              <p className="text-xs text-slate-300">Documented standard operating procedures and measurable SLA accountability.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#071B4D]/40 border border-white/10 space-y-2">
              <span className="text-xs font-bold font-mono text-violet-400 uppercase">03. Tech-Multiplied</span>
              <p className="text-xs text-slate-300">AI quality intelligence and live telemetry providing complete operational visibility.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
