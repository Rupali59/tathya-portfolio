import { NextRequest, NextResponse } from 'next/server';

// Analytics tracking middleware
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Get the pathname
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return response;
  }

  // Track page views server-side
  const analyticsData = {
    path: pathname,
    timestamp: new Date().toISOString(),
    userAgent: request.headers.get('user-agent'),
    referer: request.headers.get('referer'),
    ip: request.ip || request.headers.get('x-forwarded-for'),
  };

  // Log analytics data (in production, send to analytics service)
  console.log('Page view:', analyticsData);

  // Add custom headers for client-side analytics
  response.headers.set('x-page-path', pathname);
  response.headers.set('x-timestamp', analyticsData.timestamp);

  // A/B Testing headers
  const variant = getABTestVariant(pathname, request);
  if (variant) {
    response.headers.set('x-ab-variant', variant);
  }

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Cache control for different route types
  if (pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, max-age=0');
  } else if (pathname.startsWith('/services/') || pathname.startsWith('/about')) {
    // Static pages - cache for 1 hour
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  } else if (pathname === '/') {
    // Homepage - shorter cache
    response.headers.set('Cache-Control', 'public, max-age=1800, stale-while-revalidate=3600');
  }

  // Handle redirects
  const redirects = getRedirects();
  const redirect = redirects[pathname];
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, request.url));
  }

  // Authentication check for protected routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth-token');
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Rate limiting for contact forms
  if (pathname === '/api/contact' && request.method === 'POST') {
    const ip = request.ip || request.headers.get('x-forwarded-for');
    const rateLimitKey = `rate_limit_${ip}`;
    
    // In production, use Redis or similar for rate limiting
    // For now, we'll implement basic rate limiting
    const rateLimitData = getRateLimitData(rateLimitKey);
    if (rateLimitData && rateLimitData.count > 5 && Date.now() - rateLimitData.timestamp < 3600000) {
      return new NextResponse('Too Many Requests', { status: 429 });
    }
  }

  return response;
}

// A/B Testing logic
function getABTestVariant(pathname: string, request: NextRequest): string | null {
  // Simple A/B test for homepage hero section
  if (pathname === '/') {
    const userAgent = request.headers.get('user-agent') || '';
    const hash = userAgent.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return Math.abs(hash) % 2 === 0 ? 'hero-variant-a' : 'hero-variant-b';
  }
  
  return null;
}

// Redirect configuration
function getRedirects(): Record<string, string> {
  return {
    '/portfolio': '/services',
    '/team': '/about',
    '/contact-us': '/contact',
    '/services/web': '/services/web-development',
    '/services/crm': '/services/crm-integration',
  };
}

// Rate limiting data (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

function getRateLimitData(key: string) {
  return rateLimitStore.get(key);
}

function setRateLimitData(key: string, data: { count: number; timestamp: number }) {
  rateLimitStore.set(key, data);
}

// Export config for middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};

