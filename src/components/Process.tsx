import React from "react";
import { companyConfig } from "@/config/company";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-charcoal-950 border-b border-white/10 font-sans scroll-mt-16 relative overflow-hidden">
      {/* Background AI grid */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[15rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
            <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
              How We Partner & Support You
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            How to Partner With Us & Get Help
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A structured, risk-free methodology that ensures knowledge transfer is flawless and launch is completely stable.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[1.75rem] left-8 right-8 h-0.5 bg-gradient-to-r from-neon-cyan-500/40 via-brand-blue-500 to-cyber-purple-500/40 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {companyConfig.process.map((step) => (
              <div key={step.step} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group">
                {/* Step circle */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue-600 via-brand-blue-500 to-cyber-purple-600 text-white font-black flex items-center justify-center text-base shadow-xl shadow-brand-blue-500/25 border border-white/25 group-hover:scale-110 group-hover:shadow-neon-cyan-500/30 transition-all duration-300">
                  {step.step}
                </div>

                {/* Step details */}
                <div className="space-y-1.5 px-3 lg:px-0">
                  <h4 className="font-bold text-sm text-white group-hover:text-neon-cyan-400 transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
