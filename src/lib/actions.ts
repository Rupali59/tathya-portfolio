'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Types for form data
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
  interests?: string[];
}

// Contact form server action
export async function submitContactForm(formData: FormData) {
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string || '',
    phone: formData.get('phone') as string || '',
    service: formData.get('service') as string,
    message: formData.get('message') as string,
    budget: formData.get('budget') as string || '',
    timeline: formData.get('timeline') as string || '',
  };

  // Validate required fields
  if (!data.name || !data.email || !data.service || !data.message) {
    return {
      success: false,
      error: 'Please fill in all required fields.',
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  try {
    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    // 4. Send confirmation email to user

    // For now, we'll simulate the process
    console.log('Contact form submission:', data);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Track conversion event
    if (typeof window !== 'undefined') {
      // This will be handled client-side
      console.log('Tracking contact form submission');
    }

    // Revalidate any relevant pages
    revalidatePath('/contact');
    revalidatePath('/services');

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}

// Newsletter subscription server action
export async function subscribeNewsletter(formData: FormData) {
  const data: NewsletterFormData = {
    email: formData.get('email') as string,
    name: formData.get('name') as string || '',
    interests: formData.getAll('interests') as string[],
  };

  // Validate email
  if (!data.email) {
    return {
      success: false,
      error: 'Email is required.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  try {
    // In production, integrate with email service (Mailchimp, ConvertKit, etc.)
    console.log('Newsletter subscription:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: 'Subscription failed. Please try again.',
    };
  }
}

// Demo request server action
export async function requestDemo(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string || '',
    service: formData.get('service') as string,
    message: formData.get('message') as string || '',
  };

  if (!data.name || !data.email || !data.service) {
    return {
      success: false,
      error: 'Please fill in all required fields.',
    };
  }

  try {
    console.log('Demo request:', data);
    
    // In production: schedule demo, send calendar invite, notify sales team
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Demo request received! We\'ll contact you to schedule a meeting.',
    };
  } catch (error) {
    console.error('Demo request error:', error);
    return {
      success: false,
      error: 'Demo request failed. Please try again.',
    };
  }
}

// Lead scoring server action
export async function scoreLead(formData: FormData) {
  const data = {
    company: formData.get('company') as string || '',
    budget: formData.get('budget') as string || '',
    timeline: formData.get('timeline') as string || '',
    service: formData.get('service') as string || '',
  };

  let score = 0;
  const factors: string[] = [];

  // Budget scoring
  if (data.budget === 'high') {
    score += 30;
    factors.push('High budget');
  } else if (data.budget === 'medium') {
    score += 20;
    factors.push('Medium budget');
  }

  // Timeline scoring
  if (data.timeline === 'urgent') {
    score += 25;
    factors.push('Urgent timeline');
  } else if (data.timeline === 'soon') {
    score += 15;
    factors.push('Near-term timeline');
  }

  // Service complexity scoring
  const complexServices = ['crm-integration', 'web-development', 'mobile-development'];
  if (complexServices.includes(data.service)) {
    score += 20;
    factors.push('Complex service');
  }

  // Company size estimation
  if (data.company && data.company.length > 10) {
    score += 10;
    factors.push('Established company');
  }

  return {
    score: Math.min(score, 100),
    factors,
    priority: score > 60 ? 'high' : score > 30 ? 'medium' : 'low',
  };
}

