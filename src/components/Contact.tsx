"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
  User,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    outsourceService: "Customer Support (Voice / Chat / Email)",
    expectedVolume: "1,000 - 5,000 tickets/calls / month",
    message: "",
    website_hp: "", // Honeypot field for bot trapping
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          channel: `${formData.outsourceService} [Volume: ${formData.expectedVolume}]`,
          message: formData.message,
          website_hp: formData.website_hp,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Submission could not be completed. Please reach out directly via email.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please reach out directly to supporthelp@nexaviq.com.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050816] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[40rem] h-[25rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Operations Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-editorial tracking-tight text-white uppercase leading-tight">
            START THE <br />
            <span className="text-gradient-blue">CONVERSATION.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Tell us what you are trying to improve, scale, or outsource. Our operations team will connect to design your customized delivery pod within 4 business hours.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-[#071B4D]/50 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
              <h3 className="text-lg font-black font-editorial text-white uppercase tracking-tight">
                Global Operations Coordinates
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#050816]/70 border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Operations Email</span>
                    <a href={`mailto:${companyConfig.contact.email}`} className="font-semibold text-white hover:text-blue-400 transition-colors">
                      {companyConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#050816]/70 border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Direct Line</span>
                    <a href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`} className="font-semibold text-white hover:text-blue-400 transition-colors">
                      {companyConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#050816]/70 border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Operations Delivery Hub</span>
                    <span className="font-semibold text-slate-200 leading-snug block">
                      {companyConfig.contact.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  NDA &amp; DPA Ready
                </span>
                <span className="text-slate-500">Response &lt; 4 Hours</span>
              </div>
            </div>

            {/* Direct WhatsApp Pill */}
            <a
              href={companyConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#071B4D]/30 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase">Instant WhatsApp Chat</div>
                  <div className="text-[11px] text-slate-400">Connect directly with operations leadership</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#071B4D]/60 border border-white/15 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6">
              
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black font-editorial text-white uppercase">
                    Thank You. Request Received.
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Our operations leadership has received your request and will review your requirements to prepare a tailored proposal within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        outsourceService: "Customer Support (Voice / Chat / Email)",
                        expectedVolume: "1,000 - 5,000 tickets/calls / month",
                        message: "",
                        website_hp: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Honeypot Spam Trap (Hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_hp"
                      value={formData.website_hp}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. HyperScale Labs"
                        className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@hyperscale.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Outsource Service Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
                      What do you want to outsource? *
                    </label>
                    <select
                      name="outsourceService"
                      value={formData.outsourceService}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Customer Support (Voice / Chat / Email)">Customer Support (Voice / Chat / Email)</option>
                      <option value="Technical Support (L1 / L2 Helpdesk)">Technical Support (L1 / L2 Helpdesk)</option>
                      <option value="Back-Office & Data Operations">Back-Office &amp; Data Operations</option>
                      <option value="Sales Support & Outreach">Sales Support &amp; Outreach</option>
                      <option value="Quality Assurance & Auditing">Quality Assurance &amp; Auditing</option>
                      <option value="AI-Enabled Operations Deployment">AI-Enabled Operations Deployment</option>
                      <option value="Multi-Process / Full End-to-End BPO">Multi-Process / Full End-to-End BPO</option>
                    </select>
                  </div>

                  {/* Expected Volume */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
                      Expected Monthly Volume
                    </label>
                    <select
                      name="expectedVolume"
                      value={formData.expectedVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Pilot / Under 1,000 interactions / month">Pilot / Under 1,000 interactions / month</option>
                      <option value="1,000 - 5,000 interactions / month">1,000 - 5,000 interactions / month</option>
                      <option value="5,000 - 20,000 interactions / month">5,000 - 20,000 interactions / month</option>
                      <option value="20,000+ interactions / month">20,000+ interactions / month</option>
                      <option value="Dedicated Full-Time Pod (3+ Agents)">Dedicated Full-Time Pod (3+ Agents)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
                      Briefly describe your process or objectives
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Looking to transition our weekend live chat and L1 email queues to a dedicated pod with Zendesk integration."
                      className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Error Alert */}
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Sending Consultation Request...</span>
                    ) : (
                      <>
                        <span>Start the Conversation</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1 font-mono">
                    Protected by Honeypot Bot Shield &bull; Strict Non-Disclosure Guaranteed
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
