// Edge runtime configuration for global performance
export const runtime = 'edge';
export const preferredRegion = 'auto';

// Edge-specific utilities
export function getEdgeHeaders() {
  return {
    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    'CDN-Cache-Control': 'public, max-age=86400',
    'Vercel-CDN-Cache-Control': 'public, max-age=86400',
  };
}

// Edge-compatible analytics
export function trackEdgeEvent(event: string, properties: Record<string, any>) {
  // Edge-compatible event tracking
  const eventData = {
    event,
    properties,
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || 'unknown',
  };

  // In production, send to edge-compatible analytics service
  console.log('Edge event:', eventData);
}

// Edge-compatible rate limiting
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

export function checkRateLimit(key: string, limit: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now - record.timestamp > windowMs) {
    rateLimitStore.set(key, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

// Edge-compatible A/B testing
export function getEdgeABTest(userAgent: string, pathname: string): string | null {
  // Simple hash-based A/B testing for edge runtime
  const hash = userAgent.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);

  // A/B test for homepage hero
  if (pathname === '/') {
    return Math.abs(hash) % 2 === 0 ? 'hero-variant-a' : 'hero-variant-b';
  }

  // A/B test for pricing page
  if (pathname === '/pricing') {
    return Math.abs(hash) % 3 === 0 ? 'pricing-variant-a' : 
           Math.abs(hash) % 3 === 1 ? 'pricing-variant-b' : 'pricing-variant-c';
  }

  return null;
}

// Edge-compatible geolocation
export function getEdgeLocation(request: Request) {
  const country = request.headers.get('cf-ipcountry') || 
                  request.headers.get('x-vercel-ip-country') || 
                  'US';
  
  const region = request.headers.get('cf-region') || 
                 request.headers.get('x-vercel-ip-region') || 
                 'CA';

  const city = request.headers.get('cf-city') || 
               request.headers.get('x-vercel-ip-city') || 
               'San Francisco';

  return { country, region, city };
}

// Edge-compatible personalization
export function getPersonalizedContent(location: { country: string; region: string; city: string }) {
  // Personalize content based on location
  const content = {
    hero: {
      title: 'Digital Solutions for Your Business',
      subtitle: 'We help businesses grow with custom web development and CRM solutions',
    },
    cta: {
      text: 'Get Started Today',
      button: 'Start Your Project',
    },
    pricing: {
      currency: 'USD',
      symbol: '$',
    }
  };

  // Customize for different regions
  if (location.country === 'CA') {
    content.pricing.currency = 'CAD';
    content.pricing.symbol = 'C$';
  } else if (location.country === 'GB') {
    content.pricing.currency = 'GBP';
    content.pricing.symbol = '£';
  } else if (location.country === 'EU') {
    content.pricing.currency = 'EUR';
    content.pricing.symbol = '€';
  }

  return content;
}

