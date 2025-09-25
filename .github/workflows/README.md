# GitHub Actions Workflows

This repository includes automated CI/CD workflows to ensure code quality and smooth deployments.

## Workflows

### 1. Build Checks (`build-checks.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**What it does:**
- ✅ TypeScript type checking
- ✅ ESLint code quality checks
- ✅ Next.js build verification
- ✅ Security audit for vulnerabilities
- ✅ Bundle size analysis

### 2. Deploy (`deploy.yml`)

**Triggers:**
- Push to `main` branch
- After successful completion of Build Checks workflow

**What it does:**
- 🚀 Builds the application
- 🚀 Deploys to production (configure your deployment platform)
- 🚀 Sends deployment notifications

## Setup Instructions

### 1. Configure Deployment

Edit `.github/workflows/deploy.yml` and uncomment the deployment method for your platform:

**For Vercel:**
```yaml
npm install -g vercel
vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

**For Netlify:**
```yaml
npm install -g netlify-cli
netlify deploy --prod --dir=.next --site=${{ secrets.NETLIFY_SITE_ID }} --auth=${{ secrets.NETLIFY_AUTH_TOKEN }}
```

**For AWS S3 + CloudFront:**
```yaml
aws s3 sync .next/static s3://${{ secrets.S3_BUCKET }}/static --delete
aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

### 2. Add Secrets

Add the following secrets to your GitHub repository settings:

- `VERCEL_TOKEN` (if using Vercel)
- `NETLIFY_SITE_ID` and `NETLIFY_AUTH_TOKEN` (if using Netlify)
- `S3_BUCKET` and `CLOUDFRONT_DISTRIBUTION_ID` (if using AWS)

### 3. Customize Build Checks

You can modify the build checks in `build-checks.yml`:

- Add more linting rules
- Include testing steps
- Add performance audits
- Customize security checks

## Local Development

Run the same checks locally:

```bash
# Run all CI checks
npm run ci

# Individual checks
npm run type-check
npm run lint
npm run build
```

## Workflow Status

- 🟢 **Green**: All checks passed, ready for deployment
- 🟡 **Yellow**: Checks in progress
- 🔴 **Red**: Checks failed, deployment blocked

## Troubleshooting

### Common Issues

1. **Build fails**: Check TypeScript errors and ESLint warnings
2. **Security audit fails**: Update dependencies with `npm audit fix`
3. **Deployment fails**: Verify secrets are correctly configured

### Getting Help

- Check the Actions tab in your GitHub repository
- Review workflow logs for detailed error messages
- Ensure all required secrets are configured
