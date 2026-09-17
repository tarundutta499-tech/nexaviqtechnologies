"use client";

import React from "react";
import { companyConfig } from "@/config/company";
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function TrustMarquee() {
  const marqueeItems = companyConfig.trustSection.marquee;

  return (
    <section className="py-20 bg-[#050816] border-y border-white/[0.08] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[15rem] bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strategic Operations Partnership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-editorial text-white tracking-tight leading-tight uppercase">
            MORE THAN A VENDOR. <br />
            <span className="text-gradient-blue">AN EXTENSION OF YOUR TEAM.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
            {companyConfig.trustSection.copy}
          </p>
        </div>
      </div>

      {/* Infinite Moving Marquee */}
      <div className="relative w-full overflow-hidden py-4 bg-[#071B4D]/40 border-y border-white/[0.06] backdrop-blur-md">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First loop */}
          {marqueeItems.map((item, index) => (
            <div key={`m1-${index}`} className="flex items-center mx-6 gap-3">
              <span className="text-xs sm:text-sm font-black font-mono tracking-widest text-slate-300 uppercase hover:text-blue-400 transition-colors cursor-default">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500/70" />
            </div>
          ))}

          {/* Duplicate loop for smooth continuous marquee */}
          {marqueeItems.map((item, index) => (
            <div key={`m2-${index}`} className="flex items-center mx-6 gap-3">
              <span className="text-xs sm:text-sm font-black font-mono tracking-widest text-slate-300 uppercase hover:text-blue-400 transition-colors cursor-default">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
