"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-charcoal-950 border-b border-white/10 font-sans scroll-mt-16 relative overflow-hidden">
      {/* Background AI Grid & Glow Accents */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-cyber-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan-400" />
            <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
              Common Questions
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about setting up a team, checking QA scores, and scaling up operations.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {companyConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 backdrop-blur-xl ${
                  isOpen
                    ? "border-brand-blue-500/80 bg-charcoal-900/90 shadow-xl shadow-brand-blue-500/10"
                    : "border-white/10 hover:border-brand-blue-500/40 bg-charcoal-900/50 hover:bg-charcoal-900/80"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-4 items-start pr-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                      isOpen
                        ? "bg-brand-blue-500/20 border-brand-blue-400/40 text-neon-cyan-400"
                        : "bg-charcoal-800/80 border-white/10 text-slate-400 group-hover:text-neon-cyan-300 group-hover:border-brand-blue-500/30"
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className={`font-bold text-sm sm:text-base transition-colors duration-200 mt-1 ${
                      isOpen ? "text-neon-cyan-300" : "text-white group-hover:text-slate-100"
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? "bg-brand-blue-500/20 border-brand-blue-400/40 text-neon-cyan-400"
                      : "bg-charcoal-800/50 border-white/10 text-slate-400 group-hover:bg-charcoal-800 group-hover:text-white"
                  }`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* FAQ Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 border-t border-white/10 bg-white/[0.02]" : "max-h-0"
                  }`}
                >
                  <p className="p-5 sm:p-6 text-sm text-slate-300 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

