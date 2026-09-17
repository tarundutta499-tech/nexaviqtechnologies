import React from "react";
import { companyConfig } from "@/config/company";
import { Layers, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function TechStack() {
  const row1 = [...companyConfig.techStack, ...companyConfig.techStack];
  const row2 = [...companyConfig.techStack].reverse().concat([...companyConfig.techStack].reverse());

  return (
    <section id="tech-stack" className="py-24 bg-white border-b border-slate-200/80 font-sans relative overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 light-mesh-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 rounded-full border border-blue-200 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                Seamless Tech Integration
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-slate-900 leading-tight uppercase">
              We Plug Into Your Existing Helpdesk &amp; Tooling from Day 1
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              No need to change your existing infrastructure. Our agents and supervisors work natively inside your preferred CRM, ticketing system, and knowledge bases.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                className="w-64 shrink-0 bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white rounded-2xl p-4.5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50 flex items-center justify-center font-bold text-sm text-blue-600 transition-colors shadow-sm">
                    {tool.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 group-hover:bg-blue-100 transition-colors">
                    {tool.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>{tool.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Right to Left (Reverse) */}
          <div className="animate-marquee-reverse flex gap-4">
            {row2.map((tool, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-64 shrink-0 bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-white rounded-2xl p-4.5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 group-hover:border-indigo-300 group-hover:bg-indigo-50 flex items-center justify-center font-bold text-sm text-indigo-600 transition-colors shadow-sm">
                    {tool.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 group-hover:bg-indigo-100 transition-colors">
                    {tool.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                    <span>{tool.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Bottom Trust Statement */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
            </span>
            <span>Using a proprietary internal or custom-built CRM? We can onboard your team via custom SOP documentation within 3 business days.</span>
          </div>
          <a
            href="#contact"
            className="text-blue-600 font-bold hover:text-blue-700 hover:underline shrink-0"
          >
            Confirm Custom Tool Compatibility &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
