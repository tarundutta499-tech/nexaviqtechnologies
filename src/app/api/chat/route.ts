import { NextResponse } from "next/server";
import { companyConfig } from "@/config/company";
import {
  checkRateLimit,
  sanitizeString,
  extractClientIp,
} from "@/lib/security";

const SYSTEM_KNOWLEDGE = `
You are the official AI Assistant for Nexaviq Technologies (formerly Nexaviq BPO).
Your role is to assist website visitors, qualify prospective enterprise clients, explain our customer support services and AI Quality Platform, and help them schedule discovery calls or request custom proposals.

Key Company Facts:
- Company Name: Nexaviq Technologies
- Leadership: Founded and managed by operations veterans with 12+ years of Customer Service Operations, Service Desk Management, QA, and Lean Six Sigma methodology.
- Operations Delivery Center: Jaitsar, Distt Sri Ganganagar, Rajasthan, 335702, India.
- Phone: +91 96641 43424
- Email: supporthelp@nexaviq.com
- WhatsApp: https://wa.me/919664143424
- Discovery Call Scheduling: 15-Minute strategy consultation (https://calendly.com/nexaviq/discovery-call).

Our 5 Core Support Services:
1. Customer Support (Voice Inbound/Outbound): Inbound triage, first-contact resolution, empathetic communication, weekly speech coaching.
2. Email Support & Ticketing: High-volume ticket categorization, returns, warranty handling across Zendesk, Freshdesk, and Gorgias with strict SLAs.
3. Live Chat Support & Sales Assistance: Real-time digital support with <60-second response times, cart abandonment reduction, and CRM contact capturing.
4. IT & Technical Helpdesk (L1): User access provisioning, password resets, ticket triage, and basic SaaS/software troubleshooting.
5. Back-Office & Data Operations: Accurate data entry, KYC checks, invoice processing, catalog cleansing, and vendor coordination.

Our Nexaviq AI Powered Quality Platform (/ai-platform):
- 100% Call & Chat Coverage: Automatically audits every customer interaction in <2 seconds, eliminating the 2% manual sampling blind spot.
- SOP Scorecard & Rubric Builder: Ingests client SOPs (PDF/Word) to create custom automated grading rubrics.
- Real-Time Agent Co-Pilot: In-call browser extension providing spoken guidance and ticking off compliance checklists live.
- Zero After-Call Work (ACW): Auto-generates call summaries and disposition codes, pushing directly to Salesforce, Zendesk, and Freshdesk.
- Telephony Integrations: Secure SIPREC and media streaming connectors for Amazon Connect, Twilio, Genesys Cloud, Talkdesk, and Five9.
- Fatal Error Detection: Real-time alerts for mandatory compliance or disclaimer breaches.
- Acoustic & Lexical Empathy Scoring: Evaluates emotional intelligence, customer sentiment, and de-escalation effectiveness.

Security & Compliance:
- Role-based access control, workstation isolation (zero USB storage), 24/7 CCTV in our facility, binding NDAs, and GDPR/CCPA compliant DPAs.

Tone of Voice:
- Professional, knowledgeable, empathetic, concise, and focused on operational excellence.
- When relevant, encourage visitors to book a 15-minute discovery call, connect on WhatsApp, or request a custom proposal.
`;

// Helper fallback rule-based knowledge matching when no API key is provided
function getIntelligentFallbackResponse(userMessage: string): {
  reply: string;
  actionType?: "booking" | "whatsapp" | "proposal" | "ai_demo" | "services";
  actionText?: string;
  actionUrl?: string;
} {
  const query = userMessage.toLowerCase();

  if (
    query.includes("book") ||
    query.includes("call") ||
    query.includes("schedule") ||
    query.includes("meeting") ||
    query.includes("calendly") ||
    query.includes("demo") ||
    query.includes("talk to someone")
  ) {
    return {
      reply:
        "I'd be glad to arrange that! You can schedule a 15-minute Discovery Call directly with our CX operations leadership to discuss your support channels, volume requirements, and dedicated team rollout.",
      actionType: "booking",
      actionText: "Schedule 15-Min Discovery Call",
      actionUrl: companyConfig.calendlyUrl,
    };
  }

  if (
    query.includes("ai") ||
    query.includes("quality") ||
    query.includes("platform") ||
    query.includes("qa") ||
    query.includes("audit") ||
    query.includes("sop") ||
    query.includes("siprec") ||
    query.includes("co-pilot") ||
    query.includes("acw")
  ) {
    return {
      reply:
        "The Nexaviq AI Powered Quality Platform audits 100% of your customer voice calls and chats in under 2 seconds. It uses your exact SOP documents to evaluate compliance, scores empathy, detects fatal errors in real-time, and eliminates After-Call Work (ACW) by auto-logging summaries to Salesforce or Zendesk.",
      actionType: "ai_demo",
      actionText: "Explore AI Quality Platform",
      actionUrl: "/ai-platform",
    };
  }

  if (
    query.includes("price") ||
    query.includes("pricing") ||
    query.includes("cost") ||
    query.includes("rate") ||
    query.includes("quote") ||
    query.includes("how much")
  ) {
    return {
      reply:
        "Our dedicated team pricing is tailored to your required channel mix (Voice, Email, Live Chat), coverage hours (24/7 or business hours), and team size. We offer transparent pod models with illustrative savings of up to 50% compared to onshore desks.",
      actionType: "proposal",
      actionText: "Request Custom Proposal",
      actionUrl: "/contact",
    };
  }

  if (
    query.includes("service") ||
    query.includes("channel") ||
    query.includes("email") ||
    query.includes("chat") ||
    query.includes("voice") ||
    query.includes("helpdesk") ||
    query.includes("it support")
  ) {
    return {
      reply:
        "Nexaviq Technologies provides 5 core operational services:\n1. Inbound/Outbound Voice Support\n2. Email Support & Ticketing (Zendesk, Gorgias, Freshdesk)\n3. 24/7 Live Chat & Checkout Conversion\n4. L1 IT & Technical Helpdesk\n5. Back-Office Data Operations\n\nAll delivered by dedicated, trained teams backed by weekly QA scorecards.",
      actionType: "services",
      actionText: "View All Channels & Services",
      actionUrl: "/services",
    };
  }

  if (
    query.includes("whatsapp") ||
    query.includes("chat with human") ||
    query.includes("phone") ||
    query.includes("contact") ||
    query.includes("address") ||
    query.includes("rajasthan") ||
    query.includes("jaitsar")
  ) {
    return {
      reply:
        "You can connect directly with our operations desk:\n• Address: Jaitsar, Distt Sri Ganganagar, Rajasthan, 335702\n• Phone: +91 96641 43424\n• Email: supporthelp@nexaviq.com\n• WhatsApp: Instant Live Chat available 24/7.",
      actionType: "whatsapp",
      actionText: "Chat on WhatsApp Now",
      actionUrl: companyConfig.contact.whatsapp,
    };
  }

  if (
    query.includes("security") ||
    query.includes("nda") ||
    query.includes("dpa") ||
    query.includes("gdpr") ||
    query.includes("compliance")
  ) {
    return {
      reply:
        "We maintain enterprise zero-trust standards: role-based access control, workstation isolation (zero USB storage), biometric access in our delivery center, and legally enforceable NDAs and DPAs before knowledge transfer.",
      actionType: "proposal",
      actionText: "View Security Framework",
      actionUrl: "/quality",
    };
  }

  // Default helpful overview
  return {
    reply:
      "Hello! I am the Nexaviq Technologies AI Assistant. I can help you with:\n• Outsourced Customer Support (Voice, Email, 24/7 Live Chat, IT Helpdesk)\n• Nexaviq AI Quality Platform (100% Automated Call Auditing & Zero ACW)\n• Custom Pricing & Dedicated Pod Models\n• Scheduling a 15-Minute Strategy Discovery Call with our leadership.\n\nWhat would you like to explore?",
    actionType: "booking",
    actionText: "Book 15-Min Discovery Call",
    actionUrl: companyConfig.calendlyUrl,
  };
}

export async function POST(req: Request) {
  try {
    const clientIp = extractClientIp(req);

    // Rate Limiting Check (Max 20 AI queries per minute)
    const rateLimit = checkRateLimit(`chat-${clientIp}`, 20, 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          reply: `You are sending messages too quickly. Please wait ${rateLimit.resetInSeconds} seconds before your next question.`,
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const userPrompt = sanitizeString(lastMessage?.content || "", 1500);

    const geminiApiKey = process.env.GEMINI_API_KEY;
    const openaiApiKey = process.env.OPENAI_API_KEY;

    // 1. If Gemini API Key is available, call Gemini API
    if (geminiApiKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `${SYSTEM_KNOWLEDGE}\n\nVisitor Conversation History:\n${messages
                        .map((m: { role: string; content: string }) => `${m.role}: ${m.content}`)
                        .join("\n")}\n\nAssistant Response:`,
                    },
                  ],
                },
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 600,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const replyText =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I'm here to help you learn more about Nexaviq Technologies support operations and AI Quality Platform.";

          return NextResponse.json({
            reply: replyText,
            actionType: replyText.toLowerCase().includes("book") || replyText.toLowerCase().includes("call") ? "booking" : undefined,
            actionText: "Schedule 15-Min Discovery Call",
            actionUrl: companyConfig.calendlyUrl,
          });
        }
      } catch (err) {
        console.error("Gemini API error, falling back to local engine:", err);
      }
    }

    // 2. If OpenAI API Key is available, call OpenAI API
    if (openaiApiKey) {
      try {
        const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: SYSTEM_KNOWLEDGE },
              ...messages.map((m: { role: string; content: string }) => ({
                role: m.role === "user" ? "user" : "assistant",
                content: m.content,
              })),
            ],
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (openAiRes.ok) {
          const data = await openAiRes.json();
          const replyText =
            data.choices?.[0]?.message?.content ||
            "I'm here to assist with Nexaviq Technologies solutions.";

          return NextResponse.json({
            reply: replyText,
            actionType: replyText.toLowerCase().includes("call") || replyText.toLowerCase().includes("book") ? "booking" : undefined,
            actionText: "Schedule 15-Min Discovery Call",
            actionUrl: companyConfig.calendlyUrl,
          });
        }
      } catch (err) {
        console.error("OpenAI API error, falling back to local engine:", err);
      }
    }

    // 3. Fallback: Ultra-fast local domain response engine
    const fallbackResponse = getIntelligentFallbackResponse(userPrompt);
    return NextResponse.json(fallbackResponse);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        reply:
          "Thank you for contacting Nexaviq Technologies. How can we assist you with our customer support teams or AI Quality Platform today?",
        actionType: "booking",
        actionText: "Book Discovery Call",
        actionUrl: companyConfig.calendlyUrl,
      },
      { status: 200 }
    );
  }
}
