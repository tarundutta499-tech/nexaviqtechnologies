import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Process from "@/components/Process";
import { Workflow, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | 6-Step Implementation & Onboarding Process",
  description: "Learn how we recruit, train, launch, and continuously optimize dedicated customer support teams with structured quality assurance.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-28 font-sans bg-charcoal-950">
      {/* Page Header */}
      <section className="bg-charcoal-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 text-neon-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-blue-400/30 backdrop-blur-sm">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Implementation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How We Partner With You to Build a High-Performing Support Desk
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A zero-risk, battle-tested onboarding framework that transitions support operations cleanly without disruptions to your customers.
          </p>
        </div>
      </section>

      {/* 6-Step Process Component */}
      <Process />

      {/* Call to Action */}
      <section className="py-20 bg-charcoal-950 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-charcoal-900/80 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-brand-blue-500/10 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Ready to Begin Requirement Discovery?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              Schedule a 15-minute introductory call to review your current volumes and receive a custom launch schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-brand-blue-500/25 group"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

