"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  ShoppingBag,
  CreditCard,
  Laptop,
  HeartPulse,
  Plane,
  Truck,
  Car,
  Radio,
  Store,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";
import BookingModal from "./BookingModal";

export default function Industries() {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const industries = companyConfig.industries;
  const activeIndustry = industries[activeIndustryIndex];

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "ecommerce": return <ShoppingBag className="w-4 h-4" />;
      case "fintech": return <CreditCard className="w-4 h-4" />;
      case "saas": return <Laptop className="w-4 h-4" />;
      case "healthcare": return <HeartPulse className="w-4 h-4" />;
      case "travel": return <Plane className="w-4 h-4" />;
      case "logistics": return <Truck className="w-4 h-4" />;
      case "mobility": return <Car className="w-4 h-4" />;
      case "telecom": return <Radio className="w-4 h-4" />;
      case "retail": return <Store className="w-4 h-4" />;
      case "consumer-services": return <Users className="w-4 h-4" />;
      default: return <ShoppingBag className="w-4 h-4" />;
    }
  };

  return (
    <>
      <section id="industries" className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
        {/* Ambient lighting */}
        <div className="absolute top-1/4 right-0 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Domain-Specific Expertise</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
              BUILT AROUND <br />
              <span className="text-gradient-blue">YOUR BUSINESS.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We tailor our training curriculums, SLA rubrics, and security standards around the exact operational demands of your vertical.
            </p>
          </div>

          {/* Interactive Industries Grid & Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 10 Interactive Industry Pills / Buttons */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {industries.map((ind, index) => {
                const isSelected = activeIndustryIndex === index;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveIndustryIndex(index)}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? "bg-[#071B4D] border-blue-500/60 shadow-xl shadow-blue-500/15"
                        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? "bg-blue-600 text-white" : "bg-white/[0.05] text-slate-400 group-hover:text-white"
                      }`}>
                        {getIndustryIcon(ind.id)}
                      </div>
                      <span className={`text-xs sm:text-sm font-bold uppercase tracking-tight transition-colors ${
                        isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}>
                        {ind.name}
                      </span>
                    </div>

                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? "text-blue-400 translate-x-0.5" : "text-slate-600 group-hover:text-slate-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Industry Deep Dive Spotlight */}
            <div className="lg:col-span-7 sticky top-28">
              <div className="rounded-3xl bg-[#071B4D]/55 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                
                {/* Industry Header */}
                <div className="space-y-2 border-b border-white/10 pb-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-400/30">
                      INDUSTRY OPERATING PLAYBOOK
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {activeIndustry.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-editorial text-white uppercase tracking-tight pt-2">
                    {activeIndustry.name} Operations
                  </h3>

                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    {activeIndustry.tagline}
                  </p>
                </div>

                {/* Specific Operations Operated */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                    Specialized Workflows We Manage
                  </h4>

                  <div className="space-y-2.5">
                    {activeIndustry.services.map((serviceName, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#050816]/75 border border-white/[0.06] text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="font-medium">{serviceName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Strip */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Get an industry-specific operating pod deployed in 10-14 days.
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <span>Talk to Industry Lead</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Discovery Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
