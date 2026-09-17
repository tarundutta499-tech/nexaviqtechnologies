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
      <section className="py-24 sm:py-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white relative overflow-hidden">
        {/* Subtle light effects */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-violet-400/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Ready to Scale Your Operations?</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-editorial tracking-tight text-white uppercase leading-[0.95]">
            LET&apos;S BUILD YOUR <br />
            <span className="text-cyan-200">NEXT OPERATION.</span>
          </h2>

          <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
            {data.copy}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-slate-950/20 hover:scale-[1.02] border border-white/40 group active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>{data.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all backdrop-blur-md shadow-xs"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{data.secondaryCTA}</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-blue-100">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              Strict Non-Disclosure Agreements (NDAs)
            </span>
            <span className="text-blue-200">&bull;</span>
            <span>Custom Pod Sizing &amp; SLAs</span>
            <span className="text-blue-200">&bull;</span>
            <span>10 to 14-Day Rapid Deployment</span>
          </div>

        </div>
      </section>

      {/* Discovery Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
