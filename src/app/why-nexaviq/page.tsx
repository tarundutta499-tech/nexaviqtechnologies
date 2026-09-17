import React from "react";
import type { Metadata } from "next";
import WhyChooseUs from "@/components/WhyChooseUs";
import HumanTechnology from "@/components/HumanTechnology";
import BPOCapabilities from "@/components/BPOCapabilities";
import QualityAssurance from "@/components/QualityAssurance";
import CTA from "@/components/CTA";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Nexaviq | Our People, Process & Technology Advantage",
  description: "Discover why fast-growing brands and global enterprises partner with Nexaviq Technologies for high-performing customer operations and SLA governance.",
};

export default function WhyNexaviqPage() {
  return (
    <div className="pt-24 font-sans bg-[#050816] text-white">
      {/* Page Header */}
      <section className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#071B4D]/60 via-[#050816] to-[#050816]">
        <div className="absolute inset-0 bpo-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Advantage</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase leading-[1.05]">
            WHY BUSINESSES OUTSOURCE <br />
            <span className="text-gradient-electric">WITH NEXAVIQ.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            We combine dedicated, highly-trained human specialists with rigorous process governance and AI-enabled quality monitoring to deliver measurable operational excellence.
          </p>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <WhyChooseUs />

      {/* Human + Technology Convergence */}
      <HumanTechnology />

      {/* Capabilities Progression: One Team -> End-to-End Operations */}
      <BPOCapabilities />

      {/* Quality Assurance & SLA Governance */}
      <QualityAssurance />

      {/* Full-Screen CTA */}
      <CTA />
    </div>
  );
}
