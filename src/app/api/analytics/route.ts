import { type NextRequest, NextResponse } from "next/server";

// Analytics API route for tracking events
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, properties, userId, sessionId } = body;

    // Validate required fields
    if (!event) {
      return NextResponse.json(
        { success: false, error: "Event name is required" },
        { status: 400 },
      );
    }

    // Get client information
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent");
    const referer = request.headers.get("referer");

    // Create analytics event
    const analyticsEvent = {
      event,
      properties: properties || {},
      userId,
      sessionId,
      timestamp: new Date().toISOString(),
      ip,
      userAgent,
      referer,
      url: request.headers.get("x-page-path") || "",
    };

    // In production, send to analytics service (Google Analytics, Mixpanel, etc.)
    console.log("Analytics event:", analyticsEvent);

    // Track specific business events
    if (event === "page_view") {
      await trackPageView(analyticsEvent);
    } else if (event === "service_interaction") {
      await trackServiceInteraction(analyticsEvent);
    } else if (event === "form_submission") {
      await trackFormSubmission(analyticsEvent);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}

interface AnalyticsEvent {
  event: string;
  properties: Record<string, unknown>;
  userId?: string;
  sessionId?: string;
  timestamp: string;
  ip: string;
  userAgent: string | null;
  referer: string | null;
  url: string;
}

// Track page views
async function trackPageView(event: AnalyticsEvent) {
  // In production, send to analytics service
  console.log("Page view tracked:", {
    page: event.properties.page || event.url,
    title: event.properties.title,
    timestamp: event.timestamp,
  });
}

// Track service interactions
async function trackServiceInteraction(event: AnalyticsEvent) {
  console.log("Service interaction tracked:", {
    service: event.properties.service,
    action: event.properties.action,
    timestamp: event.timestamp,
  });
}

// Track form submissions
async function trackFormSubmission(event: AnalyticsEvent) {
  console.log("Form submission tracked:", {
    formType: event.properties.formType,
    success: event.properties.success,
    timestamp: event.timestamp,
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
