import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Industries from "@/components/Industries";
import { ArrowRight, ShieldCheck, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Outsourced Customer Support Services & Channels",
  description: "Explore our dedicated customer service channels: Customer Service Desk, Email Support & Ticketing, and 24/7 Live Chat Support.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 font-sans bg-charcoal-950">
      {/* Page Header */}
      <section className="bg-charcoal-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 text-neon-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-blue-400/30 backdrop-blur-sm">
            <Headphones className="w-3.5 h-3.5" />
            <span>Dedicated Channel Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Customer Experience Channels Built for High Resolution Rates
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            From technical live chat to high-volume email ticketing and complex customer service desks, our dedicated teams deliver tailored SLA performance.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <Services />

      {/* Tech Stack Integrations */}
      <TechStack />

      {/* Industries We Serve */}
      <Industries />

      {/* Bottom Conversion Banner */}
      <section className="py-20 bg-charcoal-950 text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-charcoal-900/80 border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 backdrop-blur-xl shadow-2xl shadow-brand-blue-500/10">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-500/20 border border-brand-blue-400/30 text-neon-cyan-400 flex items-center justify-center mx-auto shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Need a Custom Support Architecture?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              We configure dedicated teams with bespoke shift schedules, specific CRM access permissions, and custom QA scorecards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal-800/80 hover:bg-charcoal-800 text-white border border-white/10 font-bold text-sm transition-all group"
              >
                <span>View Onboarding Process</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-brand-blue-500/25"
              >
                <span>Request Custom Proposal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

