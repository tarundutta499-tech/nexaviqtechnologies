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
    <div className="pt-24 font-sans bg-[#F8FAFC] text-slate-900 min-h-screen">
      {/* Page Header */}
      <section className="py-20 border-b border-slate-200/80 relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-[#F8FAFC]">
        <div className="absolute inset-0 light-mesh-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-gradient-to-tr from-blue-400/15 to-indigo-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Vertical-Specific Playbooks</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-[1.05]">
            BUILT AROUND <br />
            <span className="text-gradient-blue">YOUR INDUSTRY DEMANDS.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Every vertical requires specific tone, compliance rules, software integrations, and resolution speeds. We deploy dedicated teams trained in your exact industry workflows.
          </p>
        </div>
      </section>

      {/* Interactive Industries Component with 10 Industry Playbooks */}
      <Industries />

      {/* Industry Operational Standards Banner */}
      <section className="py-20 border-b border-slate-200/80 bg-slate-100/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase">Domain-Trained Pods</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Agents undergo rigorous curriculum training covering terminology, compliance boundaries, and common customer friction points specific to your sector.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase">SOP Calibration</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We ingest your existing help center articles, knowledge base docs, and refund/escalation policies to build precise agent rubrics.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 text-violet-600 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase">Data Privacy by Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
