"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyConfig } from "@/config/company";
import { Menu, X, PhoneCall, ArrowRight, Calendar } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "AI Quality Platform", href: "/ai-platform", badge: "AI 2.0" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "QA & Security", href: "/quality" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-950/40 py-3"
            : "bg-charcoal-950/60 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue-500 to-neon-cyan-400 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-9 h-9 bg-gradient-to-br from-brand-blue-600 via-brand-blue-500 to-cyber-purple-600 rounded-lg flex items-center justify-center text-white font-extrabold text-lg shadow-lg border border-white/20">
                    N
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-brand-blue-200 group-hover:to-neon-cyan-400 transition-all duration-300">
                    {companyConfig.name}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex space-x-1 items-center bg-charcoal-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-xs font-semibold px-3.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white shadow-md shadow-brand-blue-500/25 border border-white/15"
                        : "text-charcoal-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-gradient-to-r from-neon-cyan-400 to-brand-blue-400 text-charcoal-950 tracking-wider shadow-sm animate-pulse">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Call to Action */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-charcoal-200 hover:text-white bg-charcoal-900/80 hover:bg-charcoal-850 rounded-xl transition-all duration-200 border border-white/10 hover:border-brand-blue-500/40 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-neon-cyan-400" />
                <span>Book a Call</span>
              </button>

              <Link
                href="/contact"
                className="relative group inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-cyber-purple-600 rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue-500/20 hover:shadow-brand-blue-500/40 hover:scale-[1.02] border border-white/20"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal-200 hover:text-white focus:outline-none p-2 rounded-xl bg-charcoal-900/80 border border-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal-950/95 backdrop-blur-2xl shadow-2xl border-b border-white/10 py-5 animate-fade-in-up">
            <div className="px-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-sans text-sm transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white font-bold shadow-md"
                        : "font-medium text-charcoal-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-gradient-to-r from-neon-cyan-400 to-brand-blue-400 text-charcoal-950 tracking-wider">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
              <hr className="border-white/10 my-3" />
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-charcoal-900 border border-white/10 rounded-xl hover:bg-charcoal-850 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-neon-cyan-400" />
                  <span>Book a 15-Min Discovery Call</span>
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-bold text-white bg-gradient-to-r from-brand-blue-600 to-cyber-purple-600 rounded-xl transition-all shadow-lg"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-charcoal-400 hover:text-charcoal-200"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-neon-cyan-400" />
                  <span>{companyConfig.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
