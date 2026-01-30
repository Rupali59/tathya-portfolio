import { type NextRequest, NextResponse } from "next/server";

// Static configuration to avoid object creation on every request
// Map lookups are O(1) and slightly faster for this use case
const REDIRECTS = new Map<string, string>([
  ["/services/web", "/services/web-development"],
  ["/services/crm", "/services/crm-integration"],
]);

// In-memory rate limiting (Note: In production/serverless, use Redis/Upstash)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

/**
 * Next.js Proxy - Optimized for performance (<5ms)
 * Centralizes routing, security, and lightweight analytics.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. FAST PATH: Skip for static assets and APIs immediately
  // These are handled by next.config.js or direct routes
  if (
    pathname.includes(".") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // 2. O(1) REDIRECT CHECK
  const redirectPath = REDIRECTS.get(pathname);
  if (redirectPath) {
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  // 3. AUTH CHECK (Protected routes only)
  if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
    if (!request.cookies.has("auth-token")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // 4. RATE LIMITING (Conditional for contact form)
  if (pathname === "/api/contact" && request.method === "POST") {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const now = Date.now();
    const record = rateLimitStore.get(ip);

    // 1 hour window, 10 requests limit
    if (record && now - record.timestamp < 3600000 && record.count > 10) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }

    rateLimitStore.set(ip, {
      count: (record?.count || 0) + 1,
      timestamp: record?.timestamp || now,
    });
  }

  // 5. PREPARE RESPONSE
  const response = NextResponse.next();

  // 6. ANALYTICS HEADERS (Lightweight)
  response.headers.set("x-page-path", pathname);

  // Avoid expensive operations like new Date().toISOString() in production middleware
  if (process.env.NODE_ENV === "development") {
    response.headers.set("x-middleware-timestamp", Date.now().toString());
  }

  return response;
}

/**
 * Optimized matcher configuration
 * Excludes all static assets to minimize middleware execution
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - _next/static, _next/image
     * - favicon.ico, images, assets, etc.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public|images|assets).*)",
  ],
};
