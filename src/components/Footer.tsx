import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020611] text-white font-sans border-t border-white/10 relative overflow-hidden">
      {/* Top Edge Neon Beam */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-blue-500/50 via-neon-cyan-400/50 to-transparent" />

      {/* Ambient background glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyber-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue-600 to-neon-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-brand-blue-500/30 border border-white/20">
                N
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {companyConfig.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              Premium customer experience and support outsourcing managed by operations veterans. Driven by QA benchmarks and Lean Six Sigma methodology.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-charcoal-900/90 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-neon-cyan-400 hover:border-neon-cyan-400/50 hover:bg-charcoal-800 transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-charcoal-900/80 border border-white/10 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-neon-cyan-400" />
                <span>Enterprise SLA</span>
              </div>
            </div>
          </div>

          {/* Quick Links / Navigation */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-neon-cyan-400 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan-400 animate-pulse" />
              Explore Pages
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/ai-platform" className="hover:text-neon-cyan-300 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 font-medium text-neon-cyan-400">
                  <span>AI Quality Platform</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold uppercase bg-brand-blue-500/30 border border-brand-blue-400/40 text-neon-cyan-300">AI 2.0</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-neon-cyan-300 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200">
                  <span>Services & Channels</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-neon-cyan-300 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200">
                  <span>How It Works (6-Step Process)</span>
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-neon-cyan-300 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200">
                  <span>QA Framework & Security</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neon-cyan-300 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200">
                  <span>About Our Leadership</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neon-cyan-300 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200">
                  <span>Schedule Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Served */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-neon-cyan-400 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan-400 animate-pulse" />
              Industries We Serve
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-300">
              {companyConfig.industries.slice(0, 5).map((industry) => (
                <li key={industry} className="truncate">
                  <Link href="/services" className="hover:text-neon-cyan-300 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200">
                    <span>{industry} Support</span>
                  </Link>
                </li>
              ))}
              <li className="text-xs text-slate-400 pt-1">
                <Link href="/about" className="text-brand-blue-400 hover:text-neon-cyan-300 inline-flex items-center gap-1 transition-colors">
                  <span>+ and {companyConfig.industries.length - 5} more industries &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-neon-cyan-400 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan-400 animate-pulse" />
              Contact Operations
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-charcoal-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-neon-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">{companyConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-charcoal-900 border border-white/10 flex items-center justify-center shrink-0 text-neon-cyan-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-neon-cyan-300 transition-colors"
                >
                  {companyConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-charcoal-900 border border-white/10 flex items-center justify-center shrink-0 text-neon-cyan-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${companyConfig.contact.email}`} className="hover:text-neon-cyan-300 transition-colors">
                  {companyConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <a
                  href={companyConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>WhatsApp Live Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {companyConfig.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <Link href="/quality" className="hover:text-neon-cyan-300 transition-colors">
              Security & Privacy
            </Link>
            <Link href="/contact" className="hover:text-neon-cyan-300 transition-colors">
              Contact Operations
            </Link>
            <a
              href={`mailto:${companyConfig.contact.email}?subject=Careers%20Inquiry`}
              className="hover:text-neon-cyan-300 transition-colors font-medium text-brand-blue-400"
            >
              Careers / Agent Registry
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

