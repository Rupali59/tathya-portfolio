# Configuration Reader Documentation

## Overview

The project uses a centralized configuration reader (`src/lib/config.ts`) that reads all values from environment variables with proper type conversion and validation.

## Configuration Reader Features

### Type-Safe Environment Variable Reading

The config reader provides three utility functions:

1. **`getInt(key, defaultValue)`** - Reads integer values from environment variables
2. **`getString(key, defaultValue)`** - Reads string values from environment variables  
3. **`getBoolean(key, defaultValue)`** - Reads boolean values from environment variables

### Server Configuration

The server port is read from the `PORT` environment variable:

```typescript
import { serverConfig } from '@/lib/config';

// Access server configuration
const port = serverConfig.port; // Reads from PORT env var, defaults to 3000
const hostname = serverConfig.hostname; // Reads from HOSTNAME env var, defaults to '0.0.0.0'
```

### Using Configuration in Code

```typescript
import { config } from '@/lib/config';

// Access any configuration
const port = config.server.port;
const siteUrl = config.site.url;
const analyticsEnabled = config.analytics.enabled;
```

Or import specific configs:

```typescript
import { serverConfig, appConfig, siteConfig } from '@/lib/config';
```

## Environment Variables

### Server Configuration

- `PORT` - Server port (default: 3000)
- `HOSTNAME` - Server hostname (default: 0.0.0.0)
- `NODE_ENV` - Node environment (development/production)

### Application Configuration

- `NEXT_PUBLIC_APP_URL` - Application URL
- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_APP_DESCRIPTION` - Application description

### Site Metadata

- `NEXT_PUBLIC_SITE_URL` - Site URL
- `NEXT_PUBLIC_SITE_NAME` - Site name
- `NEXT_PUBLIC_SITE_DESCRIPTION` - Site description
- `NEXT_PUBLIC_TWITTER_HANDLE` - Twitter handle
- `NEXT_PUBLIC_TWITTER_SITE` - Twitter site

### Analytics

- `NEXT_PUBLIC_ANALYTICS_ENABLED` - Enable analytics (true/false)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID
- `NEXT_PUBLIC_HOTJAR_SITE_ID` - Hotjar Site ID
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` - Microsoft Clarity Project ID

## Running with Custom Port

### Development

```bash
# Set PORT in .env.local
PORT=4000 npm run dev

# Or export before running
export PORT=4000
npm run dev
```

### Production

```bash
# Set PORT in .env.production or export
PORT=4000 npm run start
```

Next.js automatically reads the `PORT` environment variable. If not set, it defaults to 3000.

## Configuration Files

- **`src/lib/config.ts`** - Main configuration reader with type conversion utilities
- **`src/lib/env.ts`** - Re-exports config for backward compatibility
- **`.env.example`** - Template with all available environment variables
- **`.env.local`** - Local development overrides (gitignored)
- **`.env.development`** - Development environment variables (gitignored)
- **`.env.production`** - Production environment variables (gitignored)

## Best Practices

1. **Always use the config reader** - Don't access `process.env` directly in application code
2. **Set defaults** - All config values have sensible defaults
3. **Type safety** - Use the typed config exports instead of raw env access
4. **Environment-specific** - Use different `.env.*` files for different environments
