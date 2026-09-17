export const companyConfig = {
  name: "Nexaviq Technologies",
  tagline: "Exceptional Customer Support. Delivered by Experts.",
  description: "We provide next-generation Business Process Outsourcing (BPO) and omnichannel Customer Experience (CX) solutions—scaling dedicated teams across 24/7 Live Chat, Inbound/Outbound Support, Email Helpdesk, and Back-Office Operations. Powered by Lean Six Sigma QA standards and AI-driven quality monitoring, we partner with high-growth brands and global enterprises across the US, UK, Canada, Europe, and APAC.",
  calendlyUrl: "https://calendly.com/nexaviq/discovery-call",
  founder: {
    name: "Founder & Director",
    experience: "12+ years of hands-on expertise across Customer Service Operations, Service Desk Management, Quality Assurance, Team Leadership, Process Improvement, Lean Six Sigma, Root Cause Analysis, Performance Management, SLA Management, and Customer Experience.",
    statement: "I founded Nexaviq on a single principle: customer support shouldn't feel outsourced; it should feel like an extension of your own culture, driven by strict standards and continuous operational excellence."
  },
  contact: {
    email: "supporthelp@nexaviq.com",
    phone: "+91 96641 43424",
    whatsapp: "https://wa.me/919664143424",
    address: "Level 8, Maker Maxity, Bandra Kurla Complex, Mumbai, MH 400051, India",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2133276634863!2d72.84883497585097!3d19.0543666526543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91e70ffebbd%3A0xe5a3639a04f2f458!2sMaker%20Maxity!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  techStack: [
    { name: "Zendesk", category: "Helpdesk & Ticketing", tag: "Certified Suite" },
    { name: "Gorgias", category: "E-commerce CX", tag: "Shopify Specialist" },
    { name: "Salesforce", category: "Service Cloud & CRM", tag: "Enterprise CRM" },
    { name: "Freshdesk", category: "Omnichannel Support", tag: "Multi-channel" },
    { name: "Intercom", category: "Conversational Chat", tag: "Real-time AI/Chat" },
    { name: "HubSpot", category: "Service Hub & CRM", tag: "Inbound Support" },
    { name: "Shopify Plus", category: "Order Management", tag: "E-Commerce" },
    { name: "Kustomer", category: "Modern CRM", tag: "Timeline Support" },
    { name: "Jira Service", category: "Technical Helpdesk", tag: "Issue Tracking" },
    { name: "Slack", category: "Internal Comms", tag: "Client Handoff" },
  ],
  infrastructure: [
    {
      id: "ops-floor",
      title: "Delivery Operations Floor",
      badge: "Mumbai Delivery Hub",
      description: "Our modern operations hub in Bandra Kurla Complex (BKC), Mumbai is equipped with ergonomic workstations, multi-monitor desktop setups, noise-canceling headsets, and supervised floor management.",
      features: [
        "High-performance desktop PCs & dual-monitor setups",
        "Enterprise IP telephony with active noise cancellation",
        "Clean-desk policy with zero portable storage media allowed",
        "Air-conditioned, acoustically treated operations bays"
      ]
    },
    {
      id: "server-network",
      title: "Server & Redundant Network Room",
      badge: "High-Availability Hub",
      description: "The backbone of our uninterrupted operations. Redundant high-speed dedicated ISP lines ensure zero-latency communication and continuous uptime.",
      features: [
        "Dual enterprise ISP lines with automated failover routing",
        "Enterprise-grade hardware firewalls & intrusion detection",
        "Restricted keycard access to server and patch racks",
        "Static IP whitelisting for authorized client CRM access"
      ]
    },
    {
      id: "physical-security",
      title: "Biometrics & Active Surveillance",
      badge: "Physical Security",
      description: "Round-the-clock physical security controls to guarantee that only vetted, authorized support professionals can access operational zones.",
      features: [
        "24/7 CCTV surveillance covering all operations bays",
        "Biometric fingerprint & RFID keycard door access",
        "Documented visitor logging and security reception",
        "Secure digital video recording (DVR) archive retention"
      ]
    },
    {
      id: "power-continuity",
      title: "Power Backup & Business Continuity",
      badge: "Resilience & Uptime",
      description: "Continuous power and operational redundancy designed to withstand municipal outages and unexpected disruptions without dropping client tickets.",
      features: [
        "Heavy-duty online industrial UPS with instant battery failover",
        "Dedicated backup power generator infrastructure",
        "Documented Disaster Recovery (DR) and business continuity plans",
        "Regularly tested failover drills to guarantee 99.9% uptime"
      ]
    }
  ],
  securityFramework: [
    {
      badge: "Access Governance",
      title: "Role-Based Access & Audit Logs",
      description: "Least-privilege access controls, multi-factor authentication, and continuous session auditing inside your native helpdesk environment.",
      iconName: "ShieldCheck"
    },
    {
      badge: "Data Privacy",
      title: "GDPR & CCPA Best Practices",
      description: "Strict data minimization protocols, right-to-erasure workflows, and signed Data Protection Agreements (DPAs) with every enterprise client.",
      iconName: "Lock"
    },
    {
      badge: "Payment Security",
      title: "Zero Plaintext Payment Storage",
      description: "Secure handling of billing inquiries exclusively through your tokenized CRM gateways with zero local cardholder data storage.",
      iconName: "CreditCard"
    },
    {
      badge: "Endpoint Security",
      title: "Workstation Isolation & 2FA",
      description: "Hardware 2-factor authentication, secure VPN connections, zero-USB file transfer blocking, and strict device management policies.",
      iconName: "Server"
    },
    {
      badge: "Legal Protection",
      title: "Enforceable Binding NDAs",
      description: "Every agent and supervisor signs comprehensive, legally binding non-disclosure agreements and undergoes background verification.",
      iconName: "FileCheck"
    }
  ],
  services: [
    {
      id: "voice-support",
      category: "support",
      categoryLabel: "Customer Care & CX",
      title: "Customer Support (Voice & Inbound/Outbound)",
      description: "Empathetic, clear, and professional voice support. We manage inbound inquiries, order issues, and proactive customer follow-ups.",
      features: [
        "Inbound triage & first-contact resolution",
        "Outbound customer follow-ups, retention, and verification check-ins",
        "Call recording audits & weekly speech analytics coaching",
        "Tailored SLA response and queue holding time targets"
      ],
      tag: "Inbound / Outbound Voice"
    },
    {
      id: "email-support",
      category: "support",
      categoryLabel: "Customer Care & CX",
      title: "Email Support & Ticketing",
      description: "Structured, on-brand written communication managed against strict response-time and resolution SLAs across Zendesk, Freshdesk, and Gorgias.",
      features: [
        "High-volume inbound ticket categorization and resolution",
        "Order management, returns, exchanges, and warranty handling",
        "Escalated case ownership and multi-tier investigation",
        "Knowledge base contribution and template standardization"
      ],
      tag: "Async Helpdesk"
    },
    {
      id: "live-chat",
      category: "support",
      categoryLabel: "Customer Care & CX",
      title: "Live Chat Support & Sales Assistance",
      description: "Instant real-time digital support that boosts checkout conversions and resolves customer inquiries with under 60-second response times.",
      features: [
        "Simultaneous live chat handling with high accuracy",
        "Real-time product guidance & checkout abandonment assistance",
        "CRM contact capturing and lead qualification",
        "24/7 or custom peak-hours chat queue coverage"
      ],
      tag: "Real-Time Chat"
    },
    {
      id: "it-helpdesk",
      category: "tech",
      categoryLabel: "Tech & IT Helpdesk",
      title: "IT & Technical Helpdesk Support (L1)",
      description: "Patient, technically competent support engineers acting as the first point of contact for user issues, account permissions, and system access.",
      features: [
        "Level 1 user support for internal applications and SaaS tools",
        "Account provisioning, password resets, and role permissions",
        "Structured ticket routing and escalation management",
        "Hardware & software basic diagnostic troubleshooting"
      ],
      tag: "Technical Helpdesk"
    },
    {
      id: "backoffice-data",
      category: "backoffice",
      categoryLabel: "Back-Office & Operations",
      title: "Back-Office & Data Operations",
      description: "Accurate, dependable operational and data processing that frees your core staff to focus on strategic product development and revenue.",
      features: [
        "Accurate data entry, product catalog cleansing, and migration",
        "Document processing, compliance verification, and KYC checks",
        "High-volume invoice, billing, and transaction processing",
        "Inventory tracking, vendor coordination, and routine admin tasks"
      ],
      tag: "Back-Office Processing"
    }
  ],
  qaFramework: {
    title: "Our Quality Assurance Pillars",
    subtitle: "We don't just answer queries — we measure, audit, and improve every single interaction using structured performance scorecards.",
    pillars: [
      {
        title: "Performance Scorecards",
        description: "Weekly audits of random support tickets focusing on tone of voice, greeting standards, accuracy of resolution, and documentation standards."
      },
      {
        title: "Regular Coaching & Feedback",
        description: "1-on-1 feedback sessions based on actual interactions. We identify gaps, roleplay common issues, and reinforce best practice techniques."
      },
      {
        title: "Root Cause Analysis (RCA)",
        description: "When SLA failures or negative CSAT events occur, we conduct formal root cause analyses to implement permanent corrective actions."
      },
      {
        title: "CSAT & SLA Real-time Monitoring",
        description: "We use live analytics dashboards to monitor wait times, queue lengths, average handling time, and customer feedback trends."
      }
    ]
  },
  process: [
    { step: 1, name: "Schedule a Consultation", desc: "Submit your details or connect on WhatsApp to outline your channels, tools, and support hours." },
    { step: 2, name: "Discovery & Scope", desc: "We connect to analyze your typical ticket volumes, tools (Zendesk, etc.), and response time windows." },
    { step: 3, name: "Custom Solution & SLA", desc: "We design a custom proposal defining your dedicated agent headcount, coverage times, and SLA KPIs." },
    { step: 4, name: "Agent Training & Setup", desc: "We onboard and train dedicated agents using your exact product guides, compliance rules, and mock scenarios." },
    { step: 5, name: "Go-Live & Hypercare", desc: "Launch support with on-site supervisor coverage to handle early escalations and stabilize chat/email queues." },
    { step: 6, name: "Get Continuous Help", desc: "Access weekly QA dashboards, root cause analyses, updates to knowledge bases, and scale your desk as you grow." }
  ],
  industries: [
    "SaaS & Software",
    "E-commerce & Retail",
    "Technology & Hardware",
    "Healthcare & Biotech",
    "Travel & Hospitality",
    "Education & EdTech",
    "Financial Services",
    "Telecommunications",
    "Professional Services"
  ],
  benefits: [
    { title: "Reduced Operational Costs", desc: "Save up to 50% compared to onshore staffing while maintaining superior resolution standards." },
    { title: "Dedicated Support Teams", desc: "Agents work exclusively on your brand, developing deep domain knowledge and seamless customer rapport." },
    { title: "Improved CSAT & NPS", desc: "Professional, empathetic agents deliver faster resolutions, leading to happier customers." },
    { title: "SLA Targets Tailored To You", desc: "We design response-time and resolution-rate SLAs that align with your exact business objectives." },
    { title: "Flexible Scaling", desc: "Scale your team up during seasonal spikes (e.g. holidays) and down during quieter periods." },
    { title: "Lean Six Sigma Leadership", desc: "Managed by operations veterans utilizing process improvement methodologies to resolve system pain points." },
    { title: "Transparent Reporting", desc: "Get detailed weekly dashboards reporting response times, resolution rates, QA audit grades, and team productivity." }
  ],
  faqs: [
    {
      q: "What channels and services do you offer?",
      a: "We provide multichannel Customer Service, Email Support & Ticketing, Live Chat Support, IT Helpdesk (L1/L2), Back-Office Data Operations, and Sales Outreach."
    },
    {
      q: "What industries do you support?",
      a: "We support a wide variety of industries including SaaS, E-commerce, Technology, Healthcare, Travel, Education, and Financial Services. We customize our training and agent matching depending on your industry needs."
    },
    {
      q: "Do you offer dedicated support teams?",
      a: "Yes. For clients requiring consistent quality and domain expertise, we build dedicated teams of agents who work exclusively on your brand and build deep knowledge of your products."
    },
    {
      q: "Can your team work across different time zones?",
      a: "Absolutely. We can cover India, US, UK, Canada, Australia, and Middle East time zones, offering 24/7 coverage or custom coverage schedules to match your peak customer activity windows."
    },
    {
      q: "How quickly can you start?",
      a: "Typically, we can recruit, train, and launch a team within 10 to 14 business days, depending on the complexity of your workflow, tools, and the number of agents required."
    },
    {
      q: "How do you ensure quality?",
      a: "We deploy a formal QA framework: dedicated QA auditors grade interactions weekly on custom scorecards. We hold weekly 1-on-1 coaching, conduct Root Cause Analysis on escalations, and provide transparent weekly reporting."
    },
    {
      q: "Do you support weekends and holidays?",
      a: "Yes. Customer support needs are 24/7. We offer customized plans to handle weekend and holiday spikes so your customers are never left waiting."
    }
  ]
};
