"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"form" | "booking">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    channel: "multichannel",
    message: "",
    website_hp: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", channel: "multichannel", message: "", website_hp: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Failed to connect to the server. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-950 border-b border-white/10 font-sans scroll-mt-16 relative overflow-hidden">
      {/* Background AI grid */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[40rem] h-[40rem] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-500/15 rounded-full border border-brand-blue-400/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan-400" />
            <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">
              Start Your Support Operation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s Build a Customer Support Team That Your Customers Will Love
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Tell us about your support ticket volumes, channel requirements, and SLA timelines. We will prepare a customized proposal within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Office Coordinates & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-white">Operations & Global Desk</h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex gap-4 items-start p-4 bg-charcoal-900/70 border border-white/10 rounded-2xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-950 border border-white/10 text-neon-cyan-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Direct Phone</div>
                    <a href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`} className="text-sm font-semibold text-white hover:text-neon-cyan-400 transition-colors">
                      {companyConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start p-4 bg-charcoal-900/70 border border-white/10 rounded-2xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-950 border border-white/10 text-neon-cyan-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Operations Email</div>
                    <a href={`mailto:${companyConfig.contact.email}`} className="text-sm font-semibold text-white hover:text-neon-cyan-400 transition-colors">
                      {companyConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start p-4 bg-charcoal-900/70 border border-white/10 rounded-2xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-950 border border-white/10 text-neon-cyan-400 flex items-center justify-center shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Operations Center</div>
                    <span className="text-sm font-semibold text-slate-200 leading-snug block">
                      {companyConfig.contact.address}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">Direct Support Line</div>
                    <a
                      href={companyConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-300 hover:underline block"
                    >
                      Connect on WhatsApp (Instant Response)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed Placeholder */}
            <div className="w-full h-52 rounded-2xl overflow-hidden border border-white/10 shadow-xl relative shrink-0">
              <iframe
                title="Nexaviq Technologies Office Location"
                src={companyConfig.contact.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Tabbed Form & Discovery Booking */}
          <div className="lg:col-span-7 bg-charcoal-900/90 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl flex flex-col relative overflow-hidden">
            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue-400/40 to-transparent" />

            {/* Tabs Header */}
            <div className="flex bg-charcoal-950 p-1 rounded-2xl mb-6 border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "form"
                    ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white shadow-md border border-white/15"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Send className="w-3.5 h-3.5 text-neon-cyan-300" />
                <span>Request Custom Proposal</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("booking")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "booking"
                    ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white shadow-md border border-white/15"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-neon-cyan-300" />
                <span>Book 15-Min Strategy Call</span>
              </button>
            </div>

            {/* Tab 1: Proposal Form */}
            {activeTab === "form" && (
              <>
                {status === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white">Proposal Request Received!</h3>
                      <p className="text-sm text-slate-300 max-w-sm mx-auto">
                        Thank you for reaching out. An operations manager will review your submission and contact you within 4 business hours with a custom SLA proposal.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-5 py-2 text-xs font-bold text-neon-cyan-400 hover:text-neon-cyan-300 focus:outline-none"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Security Honeypot Anti-Spam Trap */}
                    <div className="hidden" aria-hidden="true" tabIndex={-1}>
                      <input
                        type="text"
                        name="website_hp"
                        value={formData.website_hp}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          required
                          className="w-full text-sm bg-charcoal-950 text-white placeholder-slate-500 border border-white/10 focus:border-neon-cyan-400 focus:ring-1 focus:ring-neon-cyan-400/30 rounded-xl px-4 py-2.5 outline-none transition-all"
                        />
                      </div>

                      {/* Work Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                          Work Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          required
                          className="w-full text-sm bg-charcoal-950 text-white placeholder-slate-500 border border-white/10 focus:border-neon-cyan-400 focus:ring-1 focus:ring-neon-cyan-400/30 rounded-xl px-4 py-2.5 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full text-sm bg-charcoal-950 text-white placeholder-slate-500 border border-white/10 focus:border-neon-cyan-400 focus:ring-1 focus:ring-neon-cyan-400/30 rounded-xl px-4 py-2.5 outline-none transition-all"
                        />
                      </div>

                      {/* Channel Requirement */}
                      <div className="space-y-1.5">
                        <label htmlFor="channel" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                          Preferred Channel
                        </label>
                        <select
                          id="channel"
                          name="channel"
                          value={formData.channel}
                          onChange={handleChange}
                          className="w-full text-sm bg-charcoal-950 text-white border border-white/10 focus:border-neon-cyan-400 focus:ring-1 focus:ring-neon-cyan-400/30 rounded-xl px-4 py-2.5 outline-none transition-all"
                        >
                          <option value="multichannel" className="bg-charcoal-950 text-white">Multichannel (Chat, Email, Helpdesk)</option>
                          <option value="live-chat" className="bg-charcoal-950 text-white">Live Chat Support Desk</option>
                          <option value="email-support" className="bg-charcoal-950 text-white">Email Support & Ticketing</option>
                          <option value="customer-service" className="bg-charcoal-950 text-white">Customer Service Desk</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                        Support Needs / Scope Details <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="We average 350 tickets/day using Zendesk. We require 24/7 coverage..."
                        required
                        className="w-full text-sm bg-charcoal-950 text-white placeholder-slate-500 border border-white/10 focus:border-neon-cyan-400 focus:ring-1 focus:ring-neon-cyan-400/30 rounded-xl px-4 py-2.5 outline-none transition-all font-sans"
                      />
                    </div>

                    {/* Status Messages */}
                    {status === "error" && (
                      <div className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-cyber-purple-600 hover:from-brand-blue-500 hover:to-cyber-purple-500 disabled:opacity-50 rounded-xl transition-all shadow-xl shadow-brand-blue-500/25 border border-white/20 hover:scale-[1.01]"
                    >
                      {status === "submitting" ? (
                        <span>Preparing Your Request...</span>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </>
            )}

            {/* Tab 2: Instant Booking Scheduler */}
            {activeTab === "booking" && (
              <div className="h-full flex flex-col justify-between space-y-6 py-2">
                <div className="space-y-4">
                  <div className="bg-charcoal-950/80 border border-brand-blue-500/30 rounded-2xl p-5 space-y-3 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-neon-cyan-400 font-bold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Direct 15-Minute Strategy Call</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Pick a time that fits your calendar. You will speak directly with our Operations Director to review SLA requirements, SOP knowledge transfer, and team ramp-up timelines.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Why Schedule a Call:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Instant verification of your tech stack & CRM integration</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Discuss tailored SLA targets (FRT & Resolution Rates)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Receive a formal NDA and transparent pricing proposal within 24h</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <a
                    href={companyConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-cyber-purple-600 hover:from-brand-blue-500 hover:to-cyber-purple-500 text-white font-bold text-sm transition-all shadow-xl shadow-brand-blue-500/25 border border-white/20 hover:scale-[1.01]"
                  >
                    <Calendar className="w-4 h-4 text-neon-cyan-300" />
                    <span>Open Calendar & Pick a Time</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
                    <span>No waiting for email replies</span>
                    <a
                      href={companyConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline"
                    >
                      Or chat on WhatsApp now &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
