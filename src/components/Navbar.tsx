"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyConfig } from "@/config/company";
import { Menu, X, ArrowRight, Sparkles, PhoneCall, ChevronRight } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Why Nexaviq", href: "/why-nexaviq" },
    { name: "How We Work", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "AI Suite", href: "/ai-platform", badge: "AI" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3.5"
            : "bg-[#050816]/40 backdrop-blur-md py-5 border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-blue-500/30 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <span>N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors uppercase">
                  NEXAVIQ <span className="font-light text-slate-300 text-xs sm:text-sm">TECHNOLOGIES</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest font-mono uppercase">
                  BPO &amp; Customer Operations
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#071B4D]/40 border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-full uppercase tracking-wider ${
                        isActive ? "bg-white/20 text-white" : "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border border-white/20"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="px-3 py-1.5 text-[11px] font-bold text-white bg-blue-600 rounded-lg"
              >
                Talk to Us
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#050816]/98 border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-2xl animate-fade-in-up">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        : "text-slate-200 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {link.badge && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold bg-blue-500/20 text-blue-400 border border-blue-400/30 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Discovery Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
