"use client";

import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { Mail, MapPin, Phone, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040a] text-white font-sans border-t border-white/10 relative overflow-hidden">
      {/* Top Edge Beam */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 via-indigo-400/50 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/30 border border-white/20">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-tight text-white uppercase">
                  NEXAVIQ TECHNOLOGIES
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  PVT. LTD.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Business Process Outsourcing &bull; Customer Experience &bull; AI-Enabled Operations. Delivering scalable, high-performance customer and back-office operations from India to global businesses.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400/50 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Enterprise SLA Governance</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Pages */}
          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-blue-400 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/services" className="hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/why-nexaviq" className="hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  Why Outsource With Nexaviq
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  How We Work (Process)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  About Delivery Center
                </Link>
              </li>
              <li>
                <Link href="/ai-platform" className="text-violet-400 hover:text-violet-300 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span>Nexaviq AI Platform &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries We Operate For */}
          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-blue-400 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Industry Playbooks
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">E-Commerce &amp; Retail</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">Fintech &amp; Payments</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">SaaS &amp; Technology</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">Healthcare &amp; Biotech</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">Travel &amp; Hospitality</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">Logistics &amp; Mobility</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Operations */}
          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-blue-400 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Operations Center
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">{companyConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-blue-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${companyConfig.contact.email}`} className="hover:text-blue-400 transition-colors">
                  {companyConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-blue-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-blue-400 transition-colors">
                  {companyConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {currentYear} {companyConfig.name} All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/quality" className="hover:text-slate-200 transition-colors">
              Security Framework
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact Desk
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/ai-platform" className="hover:text-blue-400 transition-colors">
              AI Platform
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
