import React from "react";
import { companyConfig } from "@/config/company";
import { Layers, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function TechStack() {
  const row1 = [...companyConfig.techStack, ...companyConfig.techStack];
  const row2 = [...companyConfig.techStack].reverse().concat([...companyConfig.techStack].reverse());

  return (
    <section id="tech-stack" className="py-24 bg-charcoal-900 border-b border-white/10 font-sans relative overflow-hidden">
      {/* Background Glow Orbs & AI Grid Pattern */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
              <Layers className="w-3.5 h-3.5 text-neon-cyan-400" />
              <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">
                Seamless Tech Integration
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              We Plug Into Your Existing Helpdesk & Tooling from Day 1
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              No need to change your existing infrastructure. Our agents and supervisors work natively inside your preferred CRM, ticketing system, and knowledge bases.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-charcoal-950/80 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero software migration required</span>
          </div>
        </div>

        {/* Animated Horizontal Marquee Conveyors */}
        <div className="space-y-4 mask-gradient-x overflow-hidden py-2">
          {/* Row 1: Left to Right */}
          <div className="animate-marquee flex gap-4">
            {row1.map((tool, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-64 shrink-0 bg-charcoal-950/80 border border-white/10 hover:border-neon-cyan-400/50 rounded-2xl p-4.5 hover:shadow-xl hover:shadow-neon-cyan-500/10 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-charcoal-900 border border-white/10 group-hover:border-neon-cyan-400/40 group-hover:bg-brand-blue-500/20 flex items-center justify-center font-bold text-sm text-neon-cyan-400 transition-colors shadow-inner">
                    {tool.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-blue-500/15 text-brand-blue-300 border border-brand-blue-500/30 group-hover:bg-neon-cyan-400/20 group-hover:text-neon-cyan-300 transition-colors">
                    {tool.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white group-hover:text-neon-cyan-400 transition-colors flex items-center justify-between">
                    <span>{tool.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-neon-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Right to Left (Reverse) */}
          <div className="animate-marquee-reverse flex gap-4">
            {row2.map((tool, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-64 shrink-0 bg-charcoal-950/80 border border-white/10 hover:border-brand-blue-400/50 rounded-2xl p-4.5 hover:shadow-xl hover:shadow-brand-blue-500/10 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-charcoal-900 border border-white/10 group-hover:border-brand-blue-400/40 group-hover:bg-brand-blue-500/20 flex items-center justify-center font-bold text-sm text-brand-blue-400 transition-colors shadow-inner">
                    {tool.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cyber-purple-500/15 text-cyber-purple-400 border border-cyber-purple-500/30 group-hover:bg-brand-blue-500/20 group-hover:text-brand-blue-300 transition-colors">
                    {tool.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white group-hover:text-brand-blue-400 transition-colors flex items-center justify-between">
                    <span>{tool.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Bottom Trust Statement */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span>Using a proprietary internal or custom-built CRM? We can onboard your team via custom SOP documentation within 3 business days.</span>
          </div>
          <a
            href="#contact"
            className="text-neon-cyan-400 font-bold hover:text-neon-cyan-300 hover:underline shrink-0"
          >
            Confirm Custom Tool Compatibility &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
