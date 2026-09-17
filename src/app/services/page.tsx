import React from "react";
import type { Metadata } from "next";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import AIEnabledOperations from "@/components/AIEnabledOperations";
import CTA from "@/components/CTA";
import { Headphones, Sparkles, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Outsourced Customer Support & BPO Services",
  description: "Explore our full suite of BPO services: Customer Support, Technical Support, Chat & Email Support, Back-Office Operations, Sales Support, QA, and AI-Enabled Operations.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 font-sans bg-[#050816] text-white">
      {/* Page Header */}
      <section className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#071B4D]/60 via-[#050816] to-[#050816]">
        <div className="absolute inset-0 bpo-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Headphones className="w-3.5 h-3.5" />
            <span>Full-Spectrum Customer Operations</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase leading-[1.05]">
            WHAT WE <br />
            <span className="text-gradient-blue">OPERATE FOR YOUR BUSINESS.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            From 24/7 omnichannel customer care and technical helpdesks to high-accuracy back-office workflows, we build and manage dedicated operational teams aligned with your brand.
          </p>
        </div>
      </section>

      {/* Interactive 01 - 07 Services Suite */}
      <Services />

      {/* CRM & Helpdesk Tech Stack Integrations */}
      <TechStack />

      {/* AI-Enabled Operations Multiplier */}
      <AIEnabledOperations />

      {/* Full-Screen CTA */}
      <CTA />
    </div>
  );
}
