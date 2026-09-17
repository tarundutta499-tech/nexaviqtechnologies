import { NextResponse } from "next/server";
import {
  checkRateLimit,
  sanitizeString,
  isHoneypotTriggered,
  extractClientIp,
} from "@/lib/security";

export async function POST(request: Request) {
  try {
    const clientIp = extractClientIp(request);

    // 1. Rate Limiting Check (Max 5 requests per minute)
    const rateLimit = checkRateLimit(`contact-${clientIp}`, 5, 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: `Too many submissions from your connection. Please wait ${rateLimit.resetInSeconds} seconds before trying again.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, channel, message, website_hp } = body;

    // 2. Honeypot Anti-Bot Trap
    if (isHoneypotTriggered(website_hp)) {
      console.warn(`[Security Alert] Bot trapped via honeypot from IP: ${clientIp}`);
      // Return 200 to fool the bot without processing
      return NextResponse.json(
        { success: true, message: "Contact form submission received successfully." },
        { status: 200 }
      );
    }

    // 3. Sanitization
    const sanitizedName = sanitizeString(name, 100);
    const sanitizedEmail = sanitizeString(email, 150);
    const sanitizedCompany = sanitizeString(company, 150);
    const sanitizedChannel = sanitizeString(channel, 100);
    const sanitizedMessage = sanitizeString(message, 3000);

    // 4. Backend validation
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 5. Log the sanitized submission (ready for database or email service integration)
    console.log("=== Contact Form Submission (Sanitized & Verified) ===");
    console.log(`IP: ${clientIp}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Name: ${sanitizedName}`);
    console.log(`Email: ${sanitizedEmail}`);
    console.log(`Company: ${sanitizedCompany || "N/A"}`);
    console.log(`Preferred Channel: ${sanitizedChannel}`);
    console.log(`Message: ${sanitizedMessage}`);
    console.log("=======================================================");

    return NextResponse.json(
      { success: true, message: "Contact form submission received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

