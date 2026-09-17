import React from "react";
import { companyConfig } from "@/config/company";
import {
  Cloud,
  ShoppingCart,
  Cpu,
  HeartPulse,
  Plane,
  GraduationCap,
  DollarSign,
  Wifi,
  Briefcase
} from "lucide-react";

export default function Industries() {
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "SaaS & Software":
        return <Cloud className="w-6 h-6 text-neon-cyan-400" />;
      case "E-commerce & Retail":
        return <ShoppingCart className="w-6 h-6 text-neon-cyan-400" />;
      case "Technology & Hardware":
        return <Cpu className="w-6 h-6 text-neon-cyan-400" />;
      case "Healthcare & Biotech":
        return <HeartPulse className="w-6 h-6 text-neon-cyan-400" />;
      case "Travel & Hospitality":
        return <Plane className="w-6 h-6 text-neon-cyan-400" />;
      case "Education & EdTech":
        return <GraduationCap className="w-6 h-6 text-neon-cyan-400" />;
      case "Financial Services":
        return <DollarSign className="w-6 h-6 text-neon-cyan-400" />;
      case "Telecommunications":
        return <Wifi className="w-6 h-6 text-neon-cyan-400" />;
      case "Professional Services":
        return <Briefcase className="w-6 h-6 text-neon-cyan-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-neon-cyan-400" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-charcoal-900 border-b border-white/10 font-sans relative overflow-hidden">
      {/* Background AI grid */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
            <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
              Domain Expertise
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Tailored Solutions Across Industries
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            We match agents with domain knowledge, vocabulary, and specific technical background suited to your niche.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {companyConfig.industries.map((industry) => (
            <div
              key={industry}
              className="p-6 bg-charcoal-950/80 border border-white/10 rounded-2xl flex items-center gap-4 hover:border-neon-cyan-400/50 hover:shadow-xl hover:shadow-neon-cyan-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue-500/20 group-hover:border-neon-cyan-400/40 transition-all duration-300 shadow-inner">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {getIndustryIcon(industry)}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white group-hover:text-neon-cyan-300 transition-colors">
                  {industry}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Dedicated customer operations
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
