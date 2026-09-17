import React from "react";
import type { Metadata } from "next";
import Process from "@/components/Process";
import OperationalScale from "@/components/OperationalScale";
import QualityAssurance from "@/components/QualityAssurance";
import CTA from "@/components/CTA";
import { Workflow, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | 4-Stage Implementation Pipeline & Scaling Model",
  description: "Learn how Nexaviq Technologies scopes, designs, onboards, launches, and continuously scales dedicated customer support and BPO operations.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24 font-sans bg-[#050816] text-white">
      {/* Page Header */}
      <section className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#071B4D]/60 via-[#050816] to-[#050816]">
        <div className="absolute inset-0 bpo-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Workflow className="w-3.5 h-3.5" />
            <span>Disciplined Onboarding Framework</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase leading-[1.05]">
            HOW WE BUILD &amp; RUN <br />
            <span className="text-gradient-blue">YOUR OPERATION.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            A battle-tested, zero-disruption onboarding process that transitions your workflows to dedicated, brand-trained teams in 10 to 14 business days.
          </p>
        </div>
      </section>

      {/* 4-Stage Operating Pipeline (Discover, Design, Deploy, Optimize) */}
      <Process />

      {/* 5-Phase Operational Scaling Journey */}
      <OperationalScale />

      {/* SLA & Quality Governance Scorecards */}
      <QualityAssurance />

      {/* Full-Screen CTA */}
      <CTA />
    </div>
  );
}
