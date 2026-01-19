# Deployment Guide - Tathya Portfolio

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Select repository: `Rupali59/tathya-portfolio`
   - Click "Import"

3. **Configure Environment Variables**
   - Add all variables from `.env.example`:
     ```
     NEXT_PUBLIC_SITE_URL=https://tathya.dev
     NEXT_PUBLIC_SITE_NAME=Tathya
     NEXT_PUBLIC_SITE_DESCRIPTION=End-to-End Business Websites & CRM Solutions
     NEXT_PUBLIC_TWITTER_HANDLE=@tathya_dev
     NEXT_PUBLIC_TWITTER_SITE=@tathya_dev
     NEXT_PUBLIC_CONTACT_EMAIL=hello@tathya.dev
     NEXT_PUBLIC_GITHUB_URL=https://github.com/Rupali59
     NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/rupali-bhatnagar-b4864957
     NEXT_PUBLIC_TWITTER_URL=https://twitter.com/rupali_dev
     NEXT_PUBLIC_ANALYTICS_ENABLED=true
     NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
     NEXT_PUBLIC_HOTJAR_SITE_ID=your-hotjar-id
     NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `https://tathya-portfolio.vercel.app`

5. **Configure Custom Domain**
   - Go to Project Settings → Domains
   - Add `tathya.dev`
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts to configure project
```

### Option 3: Automatic Deployments

Vercel automatically deploys when you push to GitHub:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

## Environment Variables Setup

### Required Variables (Production)

Set these in Vercel Dashboard → Project Settings → Environment Variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://tathya.dev
NEXT_PUBLIC_SITE_NAME=Tathya
NEXT_PUBLIC_SITE_DESCRIPTION=End-to-End Business Websites & CRM Solutions

# Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@tathya_dev
NEXT_PUBLIC_TWITTER_SITE=@tathya_dev
NEXT_PUBLIC_GITHUB_URL=https://github.com/Rupali59
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/rupali-bhatnagar-b4864957
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/rupali_dev

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=hello@tathya.dev
NEXT_PUBLIC_SUPPORT_EMAIL=support@tathya.dev

# Analytics (Optional)
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
NEXT_PUBLIC_HOTJAR_SITE_ID=your-hotjar-id
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
```

## Pre-Deployment Checklist

- [x] Build successful (`npm run build`)
- [x] All environment variables configured
- [x] Custom domain DNS configured (if applicable)
- [x] Analytics IDs added (if using)
- [x] GitHub repository connected
- [x] Vercel project created

## Post-Deployment

1. **Verify Deployment**
   - Check site loads correctly
   - Test theme toggle (Dark/Light mode)
   - Verify all components render properly
   - Check mobile responsiveness

2. **Performance Check**
   - Run Lighthouse audit
   - Verify Core Web Vitals
   - Check loading times

3. **Monitor**
   - Set up Vercel Analytics
   - Configure error tracking
   - Monitor build logs

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure Node.js version is compatible (18+)

### Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check SSL certificate status

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check variable names match exactly

## Alternative Deployment Options

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### AWS Amplify
- Connect GitHub repository
- Configure build settings
- Deploy automatically

### Docker
```bash
docker build -t tathya-portfolio .
docker run -p 3000:3000 tathya-portfolio
```

## Support

For deployment issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Project logs in Vercel dashboard
