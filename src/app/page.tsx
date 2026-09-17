import React from "react";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Services from "@/components/Services";
import HumanTechnology from "@/components/HumanTechnology";
import BPOCapabilities from "@/components/BPOCapabilities";
import AIEnabledOperations from "@/components/AIEnabledOperations";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import QualityAssurance from "@/components/QualityAssurance";
import Process from "@/components/Process";
import OperationalScale from "@/components/OperationalScale";
import GlobalDelivery from "@/components/GlobalDelivery";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050816] text-white">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Trust & Positioning Section with Continuous Marquee */}
      <TrustMarquee />

      {/* 3. Interactive Services Section (01 - 07) */}
      <Services />

      {/* 4. Human + Technology Convergence Section */}
      <HumanTechnology />

      {/* 5. BPO Capabilities Progression (One Team -> End-to-End) */}
      <BPOCapabilities />

      {/* 6. AI-Enabled BPO Operations (Customer -> Manager Flow) */}
      <AIEnabledOperations />

      {/* 7. Industry Playbooks (10 Interactive Domains) */}
      <Industries />

      {/* 8. Why Businesses Outsource With Nexaviq (4 Principles) */}
      <WhyChooseUs />

      {/* 9. Quality & SLA Governance Metrics */}
      <QualityAssurance />

      {/* 10. How We Work (4-Stage Operating Pipeline) */}
      <Process />

      {/* 11. Operational Scaling Roadmap */}
      <OperationalScale />

      {/* 12. Global Delivery from India */}
      <GlobalDelivery />

      {/* 13. About Nexaviq Mission */}
      <About />

      {/* 14. Dramatic Full-Screen CTA */}
      <CTA />

      {/* 15. Premium Contact Form */}
      <Contact />
    </div>
  );
}
