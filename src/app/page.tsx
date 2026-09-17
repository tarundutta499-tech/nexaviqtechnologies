import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import HumanTechnology from "@/components/HumanTechnology";
import GlobalDelivery from "@/components/GlobalDelivery";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import { companyConfig } from "@/config/company";
import {
  ArrowRight,
  Headphones,
  Terminal,
  MessageSquare,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Sparkles,
  Building2,
  Workflow,
  CheckCircle2,
  Layers
} from "lucide-react";

export default function Home() {
  const topServices = companyConfig.services.slice(0, 4);
  const industries = companyConfig.industries.slice(0, 6);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Headphones": return <Headphones className="w-5 h-5 text-blue-400" />;
      case "Terminal": return <Terminal className="w-5 h-5 text-indigo-400" />;
      case "MessageSquare": return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case "FileSpreadsheet": return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      default: return <Headphones className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050816] text-white">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Trust Statement & Continuous Marquee */}
      <TrustMarquee />

      {/* 3. Core Operational Services Highlights */}
      <section className="py-24 bg-[#050816] border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>What We Operate For You</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-editorial text-white uppercase tracking-tight">
                FULL-SPECTRUM <br />
                <span className="text-gradient-blue">CUSTOMER OPERATIONS.</span>
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#071B4D] hover:bg-blue-600 border border-white/10 hover:border-blue-400 transition-all self-start md:self-auto group"
            >
              <span>Explore All 7 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl p-6 bg-[#071B4D]/40 border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-4 glass-card-hover group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                      {service.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <h3 className="text-base font-black font-editorial text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-emerald-400">{service.metricValue}</span>
                  <Link href="/services" className="text-blue-400 hover:text-white flex items-center gap-1 transition-colors">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Human + Technology Convergence */}
      <HumanTechnology />

      {/* 5. Industries We Operate For */}
      <section className="py-24 bg-[#050816] border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Tailored Domain Playbooks</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-editorial text-white uppercase tracking-tight">
                BUILT AROUND <br />
                <span className="text-gradient-blue">YOUR INDUSTRY.</span>
              </h2>
            </div>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#071B4D] hover:bg-blue-600 border border-white/10 hover:border-blue-400 transition-all self-start md:self-auto group"
            >
              <span>View All 10 Playbooks</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                href="/industries"
                className="p-4 rounded-2xl bg-[#071B4D]/35 border border-white/10 text-center space-y-2 hover:border-blue-400 hover:bg-[#071B4D] transition-all group block"
              >
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors">
                  {ind.name}
                </div>
                <span className="text-[10px] font-mono text-slate-400 block">
                  Dedicated Pods
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Global Delivery Coverage from India */}
      <GlobalDelivery />

      {/* 7. Dramatic Full-Screen CTA */}
      <CTA />

      {/* 8. Lead Consultation & Contact Form */}
      <Contact />
    </div>
  );
}
