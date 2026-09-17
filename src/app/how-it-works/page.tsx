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
    <div className="pt-24 font-sans bg-[#F8FAFC] text-slate-900 min-h-screen">
      {/* Page Header */}
      <section className="py-20 border-b border-slate-200/80 relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-[#F8FAFC]">
        <div className="absolute inset-0 light-mesh-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-gradient-to-tr from-blue-400/15 to-indigo-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-blue-600" />
            <span>Disciplined Onboarding Framework</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-[1.05]">
            HOW WE BUILD &amp; RUN <br />
            <span className="text-gradient-blue">YOUR OPERATION.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
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
