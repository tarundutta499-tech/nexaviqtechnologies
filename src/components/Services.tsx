"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  Headset,
  MailCheck,
  MessageSquareCode,
  Terminal,
  Layers,
  BadgeCheck,
  ArrowRight,
  Calendar
} from "lucide-react";
import Link from "next/link";
import BookingModal from "./BookingModal";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<"all" | "support" | "tech" | "backoffice">("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "voice-support":
        return <Headset className="w-6 h-6 text-neon-cyan-400" />;
      case "email-support":
        return <MailCheck className="w-6 h-6 text-neon-cyan-400" />;
      case "live-chat":
        return <MessageSquareCode className="w-6 h-6 text-neon-cyan-400" />;
      case "it-helpdesk":
        return <Terminal className="w-6 h-6 text-neon-cyan-400" />;
      case "backoffice-data":
        return <Layers className="w-6 h-6 text-neon-cyan-400" />;
      default:
        return <BadgeCheck className="w-6 h-6 text-neon-cyan-400" />;
    }
  };

  const filteredServices = activeFilter === "all"
    ? companyConfig.services
    : companyConfig.services.filter((s) => s.category === activeFilter);

  return (
    <>
      <section id="services" className="py-24 bg-charcoal-950 border-b border-white/10 font-sans scroll-mt-16 relative overflow-hidden">
        {/* Ambient Decorative AI Glow */}
        <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyber-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
                Services Suite & Delivery Models
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Comprehensive Customer Support & Operations
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              From empathetic customer care and live chat to technical helpdesk and back-office data processing, our dedicated teams operate as seamless extensions of your brand.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {([
              { id: "all", label: "All Services" },
              { id: "support", label: "Customer Care & CX" },
              { id: "tech", label: "Tech & IT Helpdesk" },
              { id: "backoffice", label: "Back-Office & Operations" },
            ] as const).map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 backdrop-blur-md ${
                  activeFilter === f.id
                    ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white shadow-lg shadow-brand-blue-500/25 border border-white/20"
                    : "bg-charcoal-900/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-charcoal-850"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-charcoal-900/80 border border-white/10 rounded-2xl p-7.5 hover:border-neon-cyan-400/50 hover:shadow-2xl hover:shadow-neon-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group scroll-mt-24 backdrop-blur-xl relative overflow-hidden"
              >
                {/* Top specular highlight on card */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="space-y-5">
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-charcoal-950 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-neon-cyan-400/40 group-hover:bg-brand-blue-500/20 transition-all duration-300 shadow-inner shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    {service.tag && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-brand-blue-500/15 text-brand-blue-300 border border-brand-blue-500/30 uppercase tracking-wide">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  <hr className="border-white/10" />

                  {/* Scope Feature List */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Foot */}
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neon-cyan-400">
                    Dedicated Support Delivery
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    Custom SLAs
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-gradient-to-r from-charcoal-900 via-brand-blue-950/50 to-charcoal-900 text-white rounded-3xl p-8 sm:p-10 border border-brand-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-2 text-center md:text-left relative z-10">
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Looking for a Custom Support Architecture?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                We design dedicated teams with custom shift hours, bilingual agents, and tailored escalation protocols.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 relative z-10">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-500 hover:to-brand-blue-400 text-white font-bold text-xs transition-all shadow-lg shadow-brand-blue-500/25 border border-white/15"
              >
                <Calendar className="w-3.5 h-3.5 text-neon-cyan-300" />
                <span>Book 15-Min Strategy Call</span>
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 text-white border border-white/15 font-bold text-xs transition-all"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
