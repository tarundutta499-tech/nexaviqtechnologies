/**
 * Nexaviq Technologies - Enterprise Security Utilities
 * Implements Rate Limiting, Input Sanitization, Honeypot Bot Trapping, and IP Extraction
 */

// In-Memory Rate Limiter Store
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale IP records every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      if (now > record.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * Checks if a client IP has exceeded the allowed request limit in a sliding time window.
 * @param ip Client IP address or identifier
 * @param maxRequests Maximum requests allowed in the time window
 * @param windowMs Time window in milliseconds (default: 60,000ms = 1 minute)
 * @returns { success: boolean, remaining: number, resetInSeconds: number }
 */
export function checkRateLimit(
  ip: string,
  maxRequests = 5,
  windowMs = 60 * 1000
): { success: boolean; remaining: number; resetInSeconds: number } {
  const now = Date.now();
  const key = `${ip}`;
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      remaining: maxRequests - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (record.count >= maxRequests) {
    const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);
    return {
      success: false,
      remaining: 0,
      resetInSeconds: Math.max(1, resetInSeconds),
    };
  }

  record.count += 1;
  const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);
  return {
    success: true,
    remaining: maxRequests - record.count,
    resetInSeconds: Math.max(1, resetInSeconds),
  };
}

/**
 * Sanitizes input strings to strip dangerous HTML, script tags, and prevent XSS.
 */
export function sanitizeString(input: unknown, maxLength = 2000): string {
  if (typeof input !== "string") return "";

  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, "") // Strip raw < and > tags
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "");
}

/**
 * Validates honeypot field. If filled, the request is from a spam bot.
 */
export function isHoneypotTriggered(honeypotValue?: unknown): boolean {
  if (typeof honeypotValue === "string" && honeypotValue.trim().length > 0) {
    return true; // Bot filled the hidden field
  }
  return false;
}

/**
 * Extracts the real client IP from incoming Next.js request headers.
 */
export function extractClientIp(req: Request): string {
  const headers = req.headers;
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }

  return "127.0.0.1";
}
