# Analytics Setup Guide

This project includes integrated support for Google Analytics, Hotjar, and Microsoft Clarity tracking. All analytics services are configured through environment variables and can be easily enabled or disabled.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Analytics Configuration
# Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Hotjar Site ID (found in your Hotjar dashboard)
NEXT_PUBLIC_HOTJAR_SITE_ID=1234567

# Microsoft Clarity Project ID (found in your Clarity dashboard)
NEXT_PUBLIC_CLARITY_PROJECT_ID=abcd1234

# Optional: Enable analytics only in production (set to 'true' for production)
NEXT_PUBLIC_ANALYTICS_ENABLED=false
```

## Getting Your Tracking IDs

### Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Go to Admin → Data Streams → Web
4. Copy your Measurement ID (format: G-XXXXXXXXXX)

### Hotjar
1. Sign up at [Hotjar](https://www.hotjar.com/)
2. Create a new site in your dashboard
3. Copy the Site ID from the tracking code

### Microsoft Clarity
1. Sign up at [Microsoft Clarity](https://clarity.microsoft.com/)
2. Create a new project
3. Copy the Project ID from the tracking code

## Usage

### Automatic Tracking
Once configured, the analytics services will automatically:
- Track page views
- Initialize on page load
- Work only in production (unless `NEXT_PUBLIC_ANALYTICS_ENABLED=true`)

### Custom Event Tracking

You can track custom events in your components using the provided hooks and utilities:

```tsx
import { useAnalytics, trackContactFormSubmit, trackDemoRequest } from '@/lib/analytics';

function ContactForm() {
  const { trackEvent } = useAnalytics();

  const handleSubmit = (formData) => {
    // Track form submission
    trackContactFormSubmit();
    
    // Or track custom events
    trackEvent('custom_event', {
      event_category: 'engagement',
      event_label: 'contact_form_success',
      value: 1
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form content */}
    </form>
  );
}
```

### Available Tracking Functions

```tsx
import { 
  trackEvent, 
  trackPageView, 
  trackContactFormSubmit, 
  trackServicePageView,
  trackPricingPageView,
  trackDemoRequest 
} from '@/lib/analytics';

// Custom event tracking
trackEvent('button_click', {
  event_category: 'engagement',
  event_label: 'cta_button',
  value: 1
});

// Page view tracking
trackPageView('/custom-page', 'Custom Page Title');

// Pre-defined business events
trackContactFormSubmit();
trackServicePageView('web-development');
trackPricingPageView();
trackDemoRequest();
```

## Development vs Production

- **Development**: Analytics are disabled by default (unless `NEXT_PUBLIC_ANALYTICS_ENABLED=true`)
- **Production**: Analytics are automatically enabled when `NODE_ENV=production`

## Privacy Considerations

- All tracking respects user privacy settings
- No personally identifiable information is tracked
- Analytics can be disabled by setting `NEXT_PUBLIC_ANALYTICS_ENABLED=false`
- Consider implementing a cookie consent banner for GDPR compliance

## Troubleshooting

1. **Analytics not working in development**: Set `NEXT_PUBLIC_ANALYTICS_ENABLED=true` in your `.env.local`
2. **Missing tracking data**: Verify your tracking IDs are correct and active
3. **Console errors**: Check that all environment variables are properly set

## File Structure

```
src/
├── components/
│   └── analytics/
│       └── Analytics.tsx          # Main analytics component
├── lib/
│   └── analytics.ts               # Analytics utilities and configuration
└── app/
    └── layout.tsx                 # Analytics integration point
```
