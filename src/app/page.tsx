import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import { ArrowRight, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. Hero with Interactive Live Chat & CRM Dashboard Mockup */}
      <Hero />

      {/* 2. Seamless Tech Stack Integration Strip */}
      <TechStack />

      {/* 3. Core Support Channels & Services */}
      <Services />

      {/* 4. Why Choose Us & Operational Highlights */}
      <WhyChooseUs />

      {/* 5. High-Trust Quality & Security Overview Banner */}
      <section className="py-20 bg-charcoal-950 text-white font-sans border-b border-white/10 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-charcoal-900/80 border border-white/10 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-xl shadow-2xl shadow-brand-blue-500/10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-neon-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="lg:col-span-8 space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 text-neon-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-blue-400/30 backdrop-blur-sm">
                <Award className="w-3.5 h-3.5" />
                <span>Quality & Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Weekly QA Scorecards, RCA Audits & Workstation Security
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                We grade support interactions weekly against rigorous quality scorecards, perform root cause analyses on escalations, and protect your customer data with role-based access control and binding NDAs.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end relative z-10">
              <Link
                href="/quality"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-brand-blue-500/25 text-center group"
              >
                <span>View QA & Security Framework</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-Step Implementation Process */}
      <Process />

      {/* 7. Contact & Instant Discovery Call Booking */}
      <Contact />
    </>
  );
}
