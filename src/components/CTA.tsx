"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import { PhoneCall, FileText, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import BookingModal from "./BookingModal";

export default function CTA() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const data = companyConfig.ctaSection;

  return (
    <>
      <section className="py-28 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
        {/* Cinematic Gradient Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071B4D] via-[#050816] to-[#2563EB]/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-violet-600/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bpo-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Scale Your Operations?</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-editorial tracking-tight text-white uppercase leading-[0.95]">
            LET&apos;S BUILD YOUR <br />
            <span className="text-gradient-electric">NEXT OPERATION.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            {data.copy}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] border border-white/20 group"
            >
              <PhoneCall className="w-4 h-4 text-blue-200" />
              <span>{data.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold text-slate-200 bg-[#071B4D]/70 hover:bg-[#071B4D] hover:text-white border border-white/15 hover:border-blue-400/40 transition-all backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>{data.secondaryCTA}</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Strict Non-Disclosure Agreements (NDAs)
            </span>
            <span className="text-slate-600">&bull;</span>
            <span>Custom Pod Sizing &amp; SLAs</span>
            <span className="text-slate-600">&bull;</span>
            <span>10 to 14-Day Rapid Deployment</span>
          </div>

        </div>
      </section>

      {/* Discovery Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
