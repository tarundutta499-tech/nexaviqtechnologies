"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  X,
  Calendar,
  MessageSquare,
  Phone,
  CheckCircle2,
  ArrowRight,
  Building,
  Mail,
  User,
  Clock,
  Sparkles,
  Send,
  Loader2,
  Check
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUPPORT_CHANNELS = [
  "Inbound/Outbound Voice",
  "Email & Ticketing",
  "24/7 Live Chat",
  "IT Helpdesk (L1)",
  "Back-Office Operations",
  "AI Quality Platform",
];

const TEAM_SIZES = [
  "1–3 Dedicated Agents",
  "4–10 Agents (Standard Pod)",
  "10+ Agents (Enterprise Desk)",
  "AI Quality Platform Only",
  "Custom / Scoping Needed",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    channels: [] as string[],
    volumeOrTeamSize: "1–3 Dedicated Agents",
    preferredTime: "",
    notes: "",
    website_hp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const toggleChannel = (channel: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter((c) => c !== channel)
        : [...prev.channels, channel],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit discovery call request");
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error("Booking error:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      channels: [],
      volumeOrTeamSize: "1–3 Dedicated Agents",
      preferredTime: "",
      notes: "",
      website_hp: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 font-sans overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#030712]/85 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Container */}
      <div className="relative bg-charcoal-900/95 border border-white/15 rounded-3xl shadow-2xl shadow-brand-blue-500/20 max-w-xl w-full p-5 sm:p-8 overflow-hidden z-10 animate-fade-in-up backdrop-blur-2xl my-auto max-h-[92vh] flex flex-col">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-500/15 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer z-20"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 mb-5 relative z-10 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-blue-500/20 border border-brand-blue-400/30 text-neon-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>15-Minute Strategy Consultation</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            Schedule a Discovery Call
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            Submit your company details below. Our CX operations leadership will review your requirements and email you at your business inbox.
          </p>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 pr-1 -mr-1">
          {isSuccess ? (
            /* Success State */
            <div className="py-8 text-center space-y-5 animate-fade-in-up">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">
                  Discovery Call Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have dispatched your request for <strong className="text-white">{formData.companyName}</strong> to our operations desk at <span className="text-neon-cyan-400 font-mono">supporthelp@nexaviq.com</span>.
                </p>
                <div className="p-3 bg-charcoal-950/80 border border-white/10 rounded-2xl max-w-md mx-auto text-xs text-slate-300 text-left space-y-1">
                  <div><strong>Email confirmation:</strong> Sent to {formData.email}</div>
                  <div><strong>Response Time:</strong> Within 2 business hours</div>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={companyConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-bold text-xs transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 text-white font-bold text-xs transition-all border border-white/10 cursor-pointer"
                >
                  <span>Done</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Company Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Security Honeypot Field - Hidden from humans */}
              <div className="hidden" aria-hidden="true" tabIndex={-1}>
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Grid: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-slate-300">
                    Your Full Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full pl-9 pr-3 py-2.5 bg-charcoal-950/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-bold text-slate-300">
                    Business Email <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-charcoal-950/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Grid: Company & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-slate-300">
                    Company / Organization <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Acme Cloud Inc."
                      className="w-full pl-9 pr-3 py-2.5 bg-charcoal-950/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-bold text-slate-300">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-9 pr-3 py-2.5 bg-charcoal-950/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Support Channels Multi-Select Pills */}
              <div className="space-y-1.5">
                <label className="block font-bold text-slate-300">
                  Channels or Services Needed
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {SUPPORT_CHANNELS.map((channel) => {
                    const isSelected = formData.channels.includes(channel);
                    return (
                      <button
                        key={channel}
                        type="button"
                        onClick={() => toggleChannel(channel)}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                          isSelected
                            ? "bg-brand-blue-600 text-white border-brand-blue-400 shadow-sm"
                            : "bg-charcoal-950/80 text-slate-300 border-white/10 hover:border-brand-blue-500/40 hover:text-white"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-neon-cyan-300" />}
                        <span>{channel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid: Estimated Headcount & Preferred Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-slate-300">
                    Estimated Team Size / Volume
                  </label>
                  <select
                    value={formData.volumeOrTeamSize}
                    onChange={(e) => setFormData({ ...formData, volumeOrTeamSize: e.target.value })}
                    className="w-full px-3 py-2.5 bg-charcoal-950/80 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon-cyan-400 transition-colors cursor-pointer"
                  >
                    {TEAM_SIZES.map((size) => (
                      <option key={size} value={size} className="bg-charcoal-900 text-white">
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-bold text-slate-300">
                    Preferred Time / Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      placeholder="e.g. This Thursday 3 PM EST"
                      className="w-full pl-9 pr-3 py-2.5 bg-charcoal-950/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Notes / Current Challenges */}
              <div className="space-y-1">
                <label className="block font-bold text-slate-300">
                  Project Details / Target SLA Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your current support volume, tools (Zendesk, Salesforce, etc.), or QA challenges..."
                  className="w-full p-2.5 bg-charcoal-950/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-neon-cyan-500 hover:from-brand-blue-500 hover:to-neon-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-brand-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-neon-cyan-200" />
                      <span>Sending Company Details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-neon-cyan-200" />
                      <span>Submit Discovery Call Request</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2.5 px-1">
                  <span>✉ Dispatched directly to: <strong className="text-slate-300">supporthelp@nexaviq.com</strong></span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>2h Response SLA</span>
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
