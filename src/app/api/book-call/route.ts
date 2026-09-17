import { NextResponse } from "next/server";
import { companyConfig } from "@/config/company";
import {
  checkRateLimit,
  sanitizeString,
  isHoneypotTriggered,
  extractClientIp,
} from "@/lib/security";

export async function POST(request: Request) {
  try {
    const clientIp = extractClientIp(request);

    // 1. Rate Limiting Check (Max 5 booking requests per minute)
    const rateLimit = checkRateLimit(`booking-${clientIp}`, 5, 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: `Too many booking requests from your connection. Please wait ${rateLimit.resetInSeconds} seconds before submitting again.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      companyName,
      channels,
      volumeOrTeamSize,
      preferredTime,
      notes,
      website_hp,
    } = body;

    // 2. Honeypot Anti-Bot Trap
    if (isHoneypotTriggered(website_hp)) {
      console.warn(`[Security Alert] Bot trapped in booking honeypot from IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: true,
          message: "Discovery call request received successfully.",
          recipient: companyConfig.contact.email,
        },
        { status: 200 }
      );
    }

    // 3. Input Sanitization
    const sanitizedFullName = sanitizeString(fullName, 100);
    const sanitizedEmail = sanitizeString(email, 150);
    const sanitizedPhone = sanitizeString(phone, 50);
    const sanitizedCompany = sanitizeString(companyName, 150);
    const sanitizedVolume = sanitizeString(volumeOrTeamSize, 100);
    const sanitizedPreferredTime = sanitizeString(preferredTime, 150);
    const sanitizedNotes = sanitizeString(notes, 3000);
    const sanitizedChannels = Array.isArray(channels)
      ? channels.map((c: unknown) => sanitizeString(c, 100)).filter(Boolean)
      : [];

    // 4. Validation
    if (!sanitizedFullName || !sanitizedEmail || !sanitizedCompany) {
      return NextResponse.json(
        { error: "Please fill in all required fields: Full Name, Business Email, and Company Name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    const targetRecipient = companyConfig.contact.email; // supporthelp@nexaviq.com

    // 5. Structured Email Payload
    const emailSubject = `🚀 New Discovery Call Request: ${sanitizedCompany} (${sanitizedFullName})`;
    const emailSummaryText = `
=====================================================
NEW DISCOVERY CALL & PROPOSAL REQUEST - NEXAVIQ
=====================================================
Received: ${timestamp}
Origin IP: ${clientIp}
Target Inbox: ${targetRecipient}

CONTACT DETAILS:
- Name: ${sanitizedFullName}
- Business Email: ${sanitizedEmail}
- Phone / WhatsApp: ${sanitizedPhone || "Not provided"}
- Company: ${sanitizedCompany}

PROJECT SCOPE & REQUIREMENTS:
- Channels Needed: ${sanitizedChannels.length > 0 ? sanitizedChannels.join(", ") : "Not specified"}
- Volume / Team Size: ${sanitizedVolume || "Not specified"}
- Preferred Call Timing: ${sanitizedPreferredTime || "Flexible / Earliest Available"}

ADDITIONAL NOTES:
${sanitizedNotes || "No additional notes provided."}
=====================================================
    `.trim();

    console.log(emailSummaryText);

    // 6. Optional SMTP / Resend Integration if environment keys exist
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Nexaviq Leads <leads@nexaviq.com>",
            to: [targetRecipient],
            reply_to: sanitizedEmail,
            subject: emailSubject,
            text: emailSummaryText,
          }),
        });

        if (!resendRes.ok) {
          console.warn("Resend email dispatch error:", await resendRes.text());
        }
      } catch (mailErr) {
        console.error("Failed sending email via Resend API:", mailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${sanitizedFullName}! Your discovery call request for ${sanitizedCompany} has been received. Our operations leadership will reach out to ${sanitizedEmail} shortly.`,
        recipient: targetRecipient,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "An error occurred while submitting your request. Please try again or message us on WhatsApp." },
      { status: 500 }
    );
  }
}

