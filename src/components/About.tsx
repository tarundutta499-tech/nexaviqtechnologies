import React from "react";
import { companyConfig } from "@/config/company";
import { Award, Target, Settings, ShieldCheck, Users, TrendingUp } from "lucide-react";

export default function About() {
  const strengths = [
    {
      title: "12+ Years CX Operations",
      desc: "Proven track record managing customer support desks and service delivery centers.",
      icon: Award
    },
    {
      title: "Lean Six Sigma Quality",
      desc: "Applying root cause analysis and performance management to resolve system bottlenecks.",
      icon: ShieldCheck
    },
    {
      title: "Custom SLA & KPI Focus",
      desc: "Designing tailored SLA parameters that align support directly with business milestones.",
      icon: Target
    },
    {
      title: "Scalable Team Setup",
      desc: "Quick recruitment and onboarding pipeline to scale teams during seasonal support spikes.",
      icon: Users
    },
    {
      title: "Root Cause Auditing",
      desc: "Structured ticket monitoring and process improvement that stops recurring issues.",
      icon: Settings
    },
    {
      title: "Continuous Improvement",
      desc: "Weekly operational reviews and coaching that keeps agent quality scores above 98%.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="py-24 bg-charcoal-950 border-b border-white/10 font-sans relative overflow-hidden">
      {/* Background AI grid */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[35rem] h-[35rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Founder's First-person Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
                Operational Leadership
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Driven by Experience. <br />
              <span className="text-gradient-blue">Built on Quality.</span>
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              We aren&apos;t a traditional, low-cost outsourced call center. We build premium, high-functioning customer support operations that act as seamless extensions of your internal team.
            </p>

            {/* Quote Block (First-Person Founder Voice) */}
            <div className="relative bg-charcoal-900/90 border border-white/10 border-l-4 border-l-neon-cyan-400 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <span className="absolute top-2 right-4 text-7xl text-brand-blue-500/15 font-serif leading-none select-none">
                “
              </span>
              <p className="relative text-xs sm:text-sm text-slate-200 italic leading-relaxed z-10">
                &ldquo;{companyConfig.founder.statement}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="font-bold text-sm text-white">
                  {companyConfig.founder.name}
                </div>
                <div className="text-xs text-neon-cyan-400 mt-0.5 font-medium">
                  12+ Years Operations Leader & QA Expert
                </div>
              </div>
            </div>

            {/* Small experience highlights list */}
            <div className="pt-2 space-y-2.5">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Areas of Expert Management:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Quality Assurance",
                  "SLA Monitoring",
                  "Process Improvement",
                  "Service Desk Operations",
                  "Root Cause Analysis"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-[11px] font-semibold text-slate-300 bg-charcoal-900/90 border border-white/10 rounded-lg px-3 py-1 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Strengths Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-center lg:text-left space-y-1">
              <h4 className="text-lg font-bold text-white">
                Why Support Operations Partners Choose Us
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                A structured, metrics-driven BPO operation built to elevate customer retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {strengths.map((strength) => {
                const IconComponent = strength.icon;
                return (
                  <div
                    key={strength.title}
                    className="flex gap-4 items-start p-5 bg-charcoal-900/70 border border-white/10 rounded-2xl hover:border-neon-cyan-400/50 hover:shadow-xl hover:shadow-neon-cyan-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-charcoal-950 border border-white/10 text-neon-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-brand-blue-500/20 group-hover:border-neon-cyan-400/40 transition-colors shadow-inner">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-bold text-white text-sm group-hover:text-neon-cyan-300 transition-colors">
                        {strength.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {strength.desc}
                      </p>
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
