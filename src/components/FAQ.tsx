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
    <section id="faq" className="py-24 bg-[#F8FAFC] border-b border-slate-200/80 font-sans scroll-mt-16 relative overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 light-mesh-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 rounded-full border border-blue-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
              Common Questions
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-slate-900 leading-tight uppercase">
            Frequently Asked Questions
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
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
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-blue-400/80 bg-white shadow-lg shadow-blue-500/5"
                    : "border-slate-200 hover:border-slate-300 bg-white hover:shadow-sm"
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
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : "bg-slate-50 border-slate-200 text-slate-500 group-hover:text-blue-600 group-hover:border-blue-200"
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className={`font-bold text-sm sm:text-base transition-colors duration-200 mt-1 ${
                      isOpen ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600"
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-50 border-blue-200 text-blue-600"
                      : "bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-700"
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
                    isOpen ? "max-h-96 border-t border-slate-100 bg-slate-50/50" : "max-h-0"
                  }`}
                >
                  <p className="p-5 sm:p-6 text-sm text-slate-600 leading-relaxed font-normal">
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

