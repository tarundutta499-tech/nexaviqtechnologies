import React from "react";
import { companyConfig } from "@/config/company";
import { Clock, ShieldCheck, BadgePercent, Settings2 } from "lucide-react";

export default function WhyChooseUs() {
  const stats = [
    {
      value: "12+ Years",
      label: "Operations & QA Experience",
      detail: "Founder-led desk management expertise",
      icon: Settings2
    },
    {
      value: "24/7/365",
      label: "Timezone Coverage Options",
      detail: "Covering India, US, UK, and European timezones",
      icon: Clock
    },
    {
      value: "100%",
      label: "Customizable SLA Targets",
      detail: "Tailored to your exact resolution window",
      icon: BadgePercent
    },
    {
      value: "Secure",
      label: "Privacy & Tool Integrations",
      detail: "Seamless connection with your existing Helpdesk",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-charcoal-900 border-b border-white/10 font-sans scroll-mt-16 relative overflow-hidden">
      {/* Background AI grid */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
                Why Partner With Us
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              A Support Partner Driven by SLA Benchmarks
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              We focus on absolute operational transparency. Instead of presenting fabricated case stats, we stand by our structured quality audits and our ability to customize support processes around your internal tools and KPIs.
            </p>
            <div className="space-y-4 pt-2">
              {companyConfig.benefits.slice(0, 3).map((benefit) => (
                <div key={benefit.title} className="flex gap-3.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-brand-blue-500/20 text-neon-cyan-400 border border-brand-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-white">{benefit.title}</h5>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Stat Counters Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-charcoal-950/80 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-neon-cyan-400/50 hover:shadow-xl hover:shadow-neon-cyan-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl group"
                  >
                    <div className="flex justify-between items-start mb-5">
                      <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon-cyan-400 transition-all">
                        {stat.value}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-white/10 text-neon-cyan-400 flex items-center justify-center group-hover:bg-brand-blue-500/20 group-hover:border-neon-cyan-400/40 transition-colors shadow-inner">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-neon-cyan-300 transition-colors">{stat.label}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{stat.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
