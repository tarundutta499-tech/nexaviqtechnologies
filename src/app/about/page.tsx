import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Award, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Operational Leadership & CX Experience",
  description: "Learn about Nexaviq's 12+ years of Customer Service Operations, Service Desk Management, Quality Assurance, and Lean Six Sigma methodology.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 font-sans bg-charcoal-950">
      {/* Page Header */}
      <section className="bg-charcoal-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 text-neon-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-blue-400/30 backdrop-blur-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Founder-Led Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built on 12+ Years of Customer Service Operations Excellence
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            We are customer support operations veterans. We combine structured Lean Six Sigma process improvement with dedicated, highly-trained support agents.
          </p>
        </div>
      </section>

      {/* About Component with Founder Statement & Strengths */}
      <About />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal-950 text-white text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-cyber-purple-500/15 text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-500/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Operations Consultation</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Your Dedicated Support Desk
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Speak directly with our leadership to discuss your support workflow and SLA goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-brand-blue-500/25 group"
            >
              <span>Contact Leadership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

