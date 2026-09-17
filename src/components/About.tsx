"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import { Sparkles, ShieldCheck, Award, Target, Users, Zap, ArrowRight } from "lucide-react";

export default function About() {
  const data = companyConfig.about;

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-gradient-to-tr from-blue-300/15 via-indigo-300/15 to-violet-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Company Mission</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
            WE&apos;RE BUILDING <br />
            <span className="text-gradient-blue">A BETTER WAY TO OUTSOURCE.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            {data.copy}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-blue-200 transition-all shadow-xs">
              <span className="text-xs font-bold font-mono text-blue-700 uppercase">01. People-First</span>
              <p className="text-xs text-slate-600 leading-relaxed">Empowered, dedicated specialists trained specifically on your brand culture.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-indigo-200 transition-all shadow-xs">
              <span className="text-xs font-bold font-mono text-indigo-700 uppercase">02. Process-Driven</span>
              <p className="text-xs text-slate-600 leading-relaxed">Documented standard operating procedures and measurable SLA accountability.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:border-violet-200 transition-all shadow-xs">
              <span className="text-xs font-bold font-mono text-violet-700 uppercase">03. Tech-Multiplied</span>
              <p className="text-xs text-slate-600 leading-relaxed">AI quality intelligence and live telemetry providing complete operational visibility.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
