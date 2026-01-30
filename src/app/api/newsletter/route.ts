import { type NextRequest, NextResponse } from "next/server";
import { subscribeNewsletter } from "@/lib/actions";

// Newsletter subscription API route
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const result = await subscribeNewsletter(formData);

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
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
