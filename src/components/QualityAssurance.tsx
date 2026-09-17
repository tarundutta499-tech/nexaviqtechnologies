import React from "react";
import { companyConfig } from "@/config/company";
import { CheckCircle, Award, FileSpreadsheet } from "lucide-react";

export default function QualityAssurance() {
  const qaChecklist = [
    "Dedicated QA Auditors (Independent from agents)",
    "Weekly ticket audits (Randomized selection)",
    "CSAT correlation & negative score analysis",
    "Continuous Knowledge Base updates",
    "Weekly SLA achievement dashboards",
    "Underperforming agent remediation plans"
  ];

  return (
    <section id="quality-assurance" className="py-24 bg-charcoal-950 text-white font-sans scroll-mt-16 relative overflow-hidden border-b border-white/10">
      {/* Background AI grid */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
            <span className="text-xs uppercase font-bold tracking-wider text-neon-cyan-400">
              Our Strongest Differentiator
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            The Quality Assurance Framework
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            We operate on a structured, repeatable auditing schedule. Every team is backed by dedicated quality analysts who score tickets, lead coaching, and track operational metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyConfig.qaFramework.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="space-y-3 bg-charcoal-900/80 border border-white/10 rounded-2xl p-6 hover:border-neon-cyan-400/50 hover:shadow-xl hover:shadow-neon-cyan-500/10 transition-all duration-300 backdrop-blur-xl group"
                >
                  <div className="w-10 h-10 bg-charcoal-950 border border-white/10 text-neon-cyan-400 rounded-xl flex items-center justify-center group-hover:bg-brand-blue-500/20 group-hover:border-neon-cyan-400/40 transition-colors shadow-inner">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-neon-cyan-300 transition-colors">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="bg-charcoal-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h5 className="font-bold text-xs uppercase tracking-wider text-neon-cyan-400 mb-4">
                Operational QA Checklists
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {qaChecklist.map((item) => (
                  <div key={item} className="flex gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scorecard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-blue-500/30 to-cyber-purple-500/30 rounded-3xl blur-xl opacity-75" />

            <div className="relative bg-charcoal-900/90 border border-brand-blue-500/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl">
              {/* Card Header */}
              <div className="bg-charcoal-950/90 px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4.5 h-4.5 text-neon-cyan-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-white">
                    QA Scorecard Blueprint
                  </span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 bg-brand-blue-500/20 text-neon-cyan-400 font-bold tracking-wider rounded-full border border-brand-blue-500/30">
                  Standard Audit
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                <p className="text-[11px] text-slate-400 italic">
                  A representative weekly evaluation dashboard for an agent. We score every criterion out of 100%.
                </p>

                {/* Criteria bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">1. Greeting & Brand Voice</span>
                      <span className="text-neon-cyan-400 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-charcoal-950 h-2 rounded-full overflow-hidden border border-white/5">
                      <div className="bg-gradient-to-r from-brand-blue-600 to-neon-cyan-400 h-full rounded-full" style={{ width: "98%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">2. Technical Accuracy & Steps</span>
                      <span className="text-neon-cyan-400 font-bold">96%</span>
                    </div>
                    <div className="w-full bg-charcoal-950 h-2 rounded-full overflow-hidden border border-white/5">
                      <div className="bg-gradient-to-r from-brand-blue-600 to-neon-cyan-400 h-full rounded-full" style={{ width: "96%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">3. Compliance & Security Verification</span>
                      <span className="text-emerald-400 font-bold">100%</span>
                    </div>
                    <div className="w-full bg-charcoal-950 h-2 rounded-full overflow-hidden border border-white/5">
                      <div className="bg-gradient-to-r from-emerald-500 to-neon-cyan-400 h-full rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">4. Internal System Logging & CRM Docs</span>
                      <span className="text-neon-cyan-400 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-charcoal-950 h-2 rounded-full overflow-hidden border border-white/5">
                      <div className="bg-gradient-to-r from-brand-blue-600 to-neon-cyan-400 h-full rounded-full" style={{ width: "95%" }} />
                    </div>
                  </div>
                </div>

                {/* Score Summary Box */}
                <div className="bg-charcoal-950/90 rounded-xl p-4 flex justify-between items-center border border-white/10">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Weighted QA score
                    </div>
                    <div className="text-2xl font-black text-white mt-0.5 text-gradient-cyan">97.25%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Remediation
                    </div>
                    <div className="text-xs text-emerald-400 font-bold mt-1">
                      No Action Needed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
