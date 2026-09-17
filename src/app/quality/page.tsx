import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import QualityAssurance from "@/components/QualityAssurance";
import SecurityCompliance from "@/components/SecurityCompliance";
import { Award, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance & Security Compliance Framework",
  description: "Learn how we maintain 98%+ CSAT scores using structured weekly QA scorecards, root cause analysis, role-based access control, and enforceable NDAs.",
};

export default function QualitySecurityPage() {
  return (
    <div className="pt-24 font-sans bg-[#F8FAFC] text-slate-900 min-h-screen">
      {/* Page Header */}
      <section className="py-20 border-b border-slate-200/80 relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-emerald-50/30 to-[#F8FAFC]">
        <div className="absolute inset-0 light-mesh-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200 shadow-sm">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Operational Rigor</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Quality Assurance &amp; Data Security Framework
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We operate on continuous auditing and Lean Six Sigma methodology. Every team is backed by independent QA scorecards, root cause analysis, and workstation-level data security.
          </p>
        </div>
      </section>

      {/* Quality Assurance Section with Scorecard Blueprint */}
      <QualityAssurance />

      {/* Security & Compliance Framework */}
      <SecurityCompliance />

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-100/70 border-t border-slate-200/80 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Need to Review Our Standard DPA or NDA?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              We provide mutual non-disclosure agreements (NDAs) and standard Data Protection Agreements (DPAs) before any product walkthrough or knowledge transfer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20 group"
              >
                <span>Request DPA / Security Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

