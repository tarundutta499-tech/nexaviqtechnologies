import React from "react";
import { companyConfig } from "@/config/company";
import {
  ShieldCheck,
  Lock,
  CreditCard,
  Server,
  FileCheck,
  CheckCircle2,
  KeyRound,
  Shield,
  FileText
} from "lucide-react";

export default function SecurityCompliance() {
  const getSecurityIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-blue-600" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-indigo-600" />;
      case "Server":
        return <Server className="w-5 h-5 text-violet-600" />;
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Shield className="w-5 h-5 text-emerald-600" />;
    }
  };

  const securityChecklist = [
    "Strict Role-Based Access Control (RBAC)",
    "Hardware-enforced Multi-Factor Auth (MFA)",
    "Zero local storage / USB blocking protocols",
    "Screen watermarking & session audit logs",
    "Dedicated VPNs with static IP whitelisting",
    "Standard Data Protection Agreements (DPAs)",
  ];

  return (
    <section id="security" className="py-24 bg-slate-50 border-b border-slate-200/80 font-sans scroll-mt-16 relative overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 light-mesh-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[35rem] h-[35rem] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 rounded-full border border-emerald-200 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold text-emerald-700 tracking-wide uppercase">
              Enterprise Data Security &amp; Trust
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-slate-900 leading-tight uppercase">
            Institutional-Grade Security &amp; Compliance Framework
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Your customer data is protected at every touchpoint. We enforce strict data minimization, logical access isolation, and binding non-disclosure guarantees across every team member.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Security Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyConfig.securityFramework.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 shadow-sm group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-emerald-300 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                    {getSecurityIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Security Protocol Panel */}
          <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-8 border border-slate-200/90 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <KeyRound className="w-4 h-4 text-emerald-600" />
                <span>Zero Trust Architecture</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900">
                Workstation Safeguards
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our infrastructure guarantees that client information cannot be exported, downloaded, or shared beyond authorized helpdesk tools.
              </p>
            </div>

            <hr className="border-slate-200 relative z-10" />

            <div className="space-y-3 relative z-10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Enforced Operational Controls:
              </h4>
              <ul className="space-y-2.5">
                {securityChecklist.map((check, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 relative z-10">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold tracking-wide transition-all shadow-lg shadow-blue-500/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Security Whitepaper / DPA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
