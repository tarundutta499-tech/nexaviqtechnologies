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
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-900/5 py-3.5"
            : "bg-white/70 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/25 border border-white/40 group-hover:scale-105 transition-transform duration-300">
                <span>N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                  NEXAVIQ <span className="font-semibold text-slate-500 text-xs sm:text-sm">TECHNOLOGIES</span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-widest font-semibold uppercase">
                  BPO &amp; Customer Operations
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200/90 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/90"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-full uppercase tracking-wider ${
                        isActive ? "bg-white/20 text-white" : "bg-violet-100 text-violet-700 border border-violet-200"
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
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-white/20 active:scale-95"
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
                className="px-3 py-1.5 text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-sm shadow-blue-500/20"
              >
                Talk to Us
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-2xl shadow-xl animate-fade-in-up">
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
                        ? "bg-blue-50 text-blue-600 border border-blue-200 font-bold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {link.badge && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold bg-violet-100 text-violet-700 border border-violet-200 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-md shadow-blue-500/25"
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
