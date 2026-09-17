import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Playbooks & Specialized CX Operations",
  description: "Explore industry-tailored BPO playbooks across E-Commerce, Fintech, SaaS, Healthcare, Travel, Logistics, Mobility, Telecom, Retail, and Consumer Services.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-24 font-sans bg-[#050816] text-white">
      {/* Page Header */}
      <section className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#071B4D]/60 via-[#050816] to-[#050816]">
        <div className="absolute inset-0 bpo-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5" />
            <span>Vertical-Specific Playbooks</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase leading-[1.05]">
            BUILT AROUND <br />
            <span className="text-gradient-blue">YOUR INDUSTRY DEMANDS.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Every vertical requires specific tone, compliance rules, software integrations, and resolution speeds. We deploy dedicated teams trained in your exact industry workflows.
          </p>
        </div>
      </section>

      {/* Interactive Industries Component with 10 Industry Playbooks */}
      <Industries />

      {/* Industry Operational Standards Banner */}
      <section className="py-20 border-b border-white/[0.08] bg-[#071B4D]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#050816]/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white uppercase">Domain-Trained Pods</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Agents undergo rigorous curriculum training covering terminology, compliance boundaries, and common customer friction points specific to your sector.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#050816]/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white uppercase">SOP Calibration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We ingest your existing help center articles, knowledge base docs, and refund/escalation policies to build precise agent rubrics.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#050816]/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white uppercase">Data Privacy by Design</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                From HIPAA-aligned patient coordination to financial KYC handling, all operations are isolated under zero-trust physical and logical security controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic Full-Screen CTA */}
      <CTA />
    </div>
  );
}
