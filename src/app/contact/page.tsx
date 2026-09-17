import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Operations & Schedule a Consultation",
  description: "Get in touch with Nexaviq Technologies operations in Mumbai, India. Submit a proposal request or book an instant 15-minute discovery call.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 font-sans bg-charcoal-950">
      {/* Page Header */}
      <section className="bg-charcoal-950 text-white py-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 text-neon-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-blue-400/30 backdrop-blur-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Operations Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Schedule a Consultation or Request a Proposal
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Connect with our operations leadership to discuss your support channels, response time requirements, and team rollout.
          </p>
        </div>
      </section>

      {/* Main Contact & Discovery Booking Component */}
      <Contact />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}

