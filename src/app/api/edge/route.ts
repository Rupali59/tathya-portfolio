import { type NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  getEdgeHeaders,
  getEdgeLocation,
  getPersonalizedContent,
  trackEdgeEvent,
} from "@/lib/edge";

// Edge runtime configuration
export const runtime = "edge";
export const preferredRegion = "auto";

// Edge-compatible API route for personalized content
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (!checkRateLimit(`personalization_${ip}`, 100, 60000)) {
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: getEdgeHeaders(),
      });
    }

    // Get location from edge headers
    const location = getEdgeLocation(request);

    // Get personalized content
    const content = getPersonalizedContent(location);

    // Track event
    trackEdgeEvent("personalized_content_requested", {
      location,
      pathname: request.nextUrl.pathname,
      userAgent: request.headers.get("user-agent"),
    });

    // Return personalized content with edge headers
    return NextResponse.json(
      {
        content,
        location,
        timestamp: new Date().toISOString(),
      },
      {
        headers: getEdgeHeaders(),
      },
    );
  } catch (error) {
    console.error("Edge API error:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: getEdgeHeaders(),
    });
  }
}

// Edge-compatible POST for form submissions
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (!checkRateLimit(`form_submission_${ip}`, 5, 300000)) {
      // 5 submissions per 5 minutes
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: getEdgeHeaders(),
      });
    }

    const body = await request.json();
    const location = getEdgeLocation(request);

    // Track form submission
    trackEdgeEvent("form_submission", {
      formType: body.formType || "contact",
      location,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Validate the form data
    // 2. Send to your backend service
    // 3. Send confirmation email
    // 4. Add to CRM

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        location,
      },
      {
        headers: getEdgeHeaders(),
      },
    );
  } catch (error) {
    console.error("Edge form submission error:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: getEdgeHeaders(),
    });
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      ...getEdgeHeaders(),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
