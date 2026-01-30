"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

// Zod Schemas for robust validation
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

const NewsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Types inferred from schemas
export type ContactFormData = z.infer<typeof ContactSchema>;

/**
 * Contact form server action
 * Hardened with Zod validation and server-only logic
 */
export async function submitContactForm(formData: FormData) {
  // 1. Extract and Validate
  const rawData = Object.fromEntries(formData.entries());
  const validated = ContactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.issues[0].message,
    };
  }

  const { data } = validated;

  try {
    // In production, sync with CRM/Database here
    console.log("Verified Contact Submission:", data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Revalidate relevant cache tags or paths
    revalidatePath("/");

    return {
      success: true,
      message: "Manifest received. Our architects will contact you shortly.",
    };
  } catch (_err) {
    console.error("Action Failure [submitContactForm]:", _err);
    return {
      success: false,
      error: "System error during transmission. Please try again.",
    };
  }
}

const DemoSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
  company: z.string().optional(),
});

/**
 * Newsletter subscription server action
 */
export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;
  const validated = NewsletterSchema.safeParse({ email });

  if (!validated.success) {
    return { success: false, error: validated.error.issues[0].message };
  }

  try {
    console.log("Newsletter Opt-in:", validated.data.email);
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { success: true, message: "Frequency established." };
  } catch (_err) {
    return { success: false, error: "Link failed." };
  }
}

/**
 * Demo request server action
 */
export async function requestDemo(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validated = DemoSchema.safeParse(rawData);

  if (!validated.success) {
    return { success: false, error: validated.error.issues[0].message };
  }

  try {
    console.log("Demo Request:", validated.data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, message: "Demo scheduled. Stand by for link." };
  } catch (_err) {
    return { success: false, error: "Transmission failed." };
  }
}

/**
 * Lead scoring helper
 */
export async function scoreLead(formData: FormData) {
  const budget = formData.get("budget") as string;
  const timeline = formData.get("timeline") as string;

  let score = 0;
  if (budget === "high") score += 30;
  if (timeline === "urgent") score += 30;

  return {
    score,
    priority: score > 50 ? "high" : "low",
  };
}
