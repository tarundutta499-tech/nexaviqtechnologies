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
      <section id="industries" className="py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        {/* Ambient lighting */}
        <div className="absolute top-1/4 right-0 w-[35rem] h-[35rem] bg-blue-300/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Domain-Specific Expertise</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-slate-900 uppercase leading-tight">
              BUILT AROUND <br />
              <span className="text-gradient-blue">YOUR BUSINESS.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
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
                        ? "bg-white border-blue-600 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20"
                        : "bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50"
                      }`}>
                        {getIndustryIcon(ind.id)}
                      </div>
                      <span className={`text-xs sm:text-sm font-bold uppercase tracking-tight transition-colors ${
                        isSelected ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                      }`}>
                        {ind.name}
                      </span>
                    </div>

                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? "text-blue-600 translate-x-0.5" : "text-slate-400 group-hover:text-slate-600"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Industry Deep Dive Spotlight */}
            <div className="lg:col-span-7 sticky top-28">
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-900/5 relative overflow-hidden">
                
                {/* Industry Header */}
                <div className="space-y-2 border-b border-slate-100 pb-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      INDUSTRY OPERATING PLAYBOOK
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeIndustry.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-editorial text-slate-900 uppercase tracking-tight pt-2">
                    {activeIndustry.name} Operations
                  </h3>

                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {activeIndustry.tagline}
                  </p>
                </div>

                {/* Specific Operations Operated */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                    Specialized Workflows We Manage
                  </h4>

                  <div className="space-y-2.5">
                    {activeIndustry.services.map((serviceName, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="font-semibold">{serviceName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Strip */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Get an industry-specific operating pod deployed in 10-14 days.
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 transition-all"
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
