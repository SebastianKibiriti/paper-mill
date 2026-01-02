# Deployment Guide

This guide covers how to deploy the Toilet Paper Manufacturing Educational Website to various hosting platforms.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [AWS Deployment](#aws-deployment)
- [Docker Deployment](#docker-deployment)
- [Custom Server Deployment](#custom-server-deployment)
- [Environment Variables](#environment-variables)
- [Performance Optimization](#performance-optimization)
- [Monitoring and Analytics](#monitoring-and-analytics)

## 🔧 Prerequisites

Before deploying, ensure you have:

- Node.js 18 or higher
- pnpm (recommended) or npm
- Git repository with your code
- Account on your chosen hosting platform

## 🌍 Environment Setup

### 1. Environment Variables

Copy the example environment file:
```bash
cp .env.example .env.local
```

Update the variables for your deployment environment:
```bash
# Production URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Feature flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
```

### 2. Build Verification

Test the production build locally:
```bash
# Install dependencies
pnpm install

# Build the application
pnpm run build --no-lint

# Test production build
pnpm start
```

Verify that:
- All pages load correctly
- Interactive components work
- Images display properly
- Mobile responsiveness works
- No console errors

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform for Next.js applications.

### Automatic Deployment

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings**
   ```
   Framework Preset: Next.js
   Build Command: pnpm run build --no-lint
   Output Directory: .next
   Install Command: pnpm install
   ```

3. **Environment Variables**
   Add your environment variables in the Vercel dashboard:
   ```
   NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## 🌐 Netlify Deployment

### Automatic Deployment

1. **Connect Repository**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your repository

2. **Build Settings**
   ```
   Build command: pnpm run build --no-lint
   Publish directory: out
   ```

3. **Configure Next.js for Static Export**
   
   Update `next.config.ts`:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. **Environment Variables**
   Add variables in Netlify dashboard under "Site settings" > "Environment variables"

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build for static export
pnpm run build --no-lint

# Deploy
netlify deploy --prod --dir=out
```

## ☁️ AWS Deployment

### AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" > "Host web app"
   - Connect your Git repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install -g pnpm
           - pnpm install
       build:
         commands:
           - pnpm run build --no-lint
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   Add variables in Amplify console under "Environment variables"

### AWS S3 + CloudFront

For static deployment:

1. **Build Static Site**
   ```bash
   # Configure for static export
   pnpm run build --no-lint
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom error pages for SPA routing

## 🐳 Docker Deployment

### Dockerfile

Create a `Dockerfile`:
```dockerfile
# Use Node.js 18 Alpine image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm install -g pnpm && pnpm run build --no-lint

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  toilet-paper-edu:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_APP_URL=http://localhost:3000
    restart: unless-stopped
```

### Build and Run

```bash
# Build Docker image
docker build -t toilet-paper-edu .

# Run container
docker run -p 3000:3000 toilet-paper-edu

# Or use Docker Compose
docker-compose up -d
```

## 🖥️ Custom Server Deployment

### PM2 (Process Manager)

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Create PM2 Configuration**
   
   Create `ecosystem.config.js`:
   ```javascript
   module.exports = {
     apps: [
       {
         name: 'toilet-paper-edu',
         script: 'npm',
         args: 'start',
         cwd: '/path/to/your/app',
         env: {
           NODE_ENV: 'production',
           PORT: 3000
         }
       }
     ]
   }
   ```

3. **Deploy**
   ```bash
   # Build the application
   pnpm run build --no-lint
   
   # Start with PM2
   pm2 start ecosystem.config.js
   
   # Save PM2 configuration
   pm2 save
   pm2 startup
   ```

### Nginx Configuration

Create `/etc/nginx/sites-available/toilet-paper-edu`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/toilet-paper-edu /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔐 Environment Variables

### Production Variables

```bash
# Application URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Feature flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
NEXT_PUBLIC_ENABLE_QUALITY_SIMULATOR=true
NEXT_PUBLIC_ENABLE_PROCESS_TIMELINE=true
NEXT_PUBLIC_ENABLE_MANUFACTURING_STATS=true

# Security
NODE_ENV=production

# Optional: Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Security Considerations

- Never expose sensitive keys in client-side code
- Use environment variables for all configuration
- Enable HTTPS in production
- Configure proper CORS headers
- Set up security headers

## ⚡ Performance Optimization

### Build Optimization

1. **Analyze Bundle Size**
   ```bash
   # Install bundle analyzer
   npm install --save-dev @next/bundle-analyzer
   
   # Analyze bundle
   ANALYZE=true pnpm run build --no-lint
   ```

2. **Image Optimization**
   - Use Next.js Image component
   - Configure image domains in `next.config.ts`
   - Implement lazy loading

3. **Code Splitting**
   - Use dynamic imports for large components
   - Implement route-based code splitting
   - Optimize third-party libraries

### CDN Configuration

Configure CDN for static assets:
```typescript
// next.config.ts
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://cdn.your-domain.com' 
    : '',
}
```

### Caching Strategy

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## 📊 Monitoring and Analytics

### Error Monitoring

1. **Sentry Integration**
   ```bash
   npm install @sentry/nextjs
   ```

2. **Configure Sentry**
   ```javascript
   // sentry.client.config.js
   import * as Sentry from '@sentry/nextjs'
   
   Sentry.init({
     dsn: process.env.SENTRY_DSN,
     environment: process.env.NODE_ENV,
   })
   ```

### Performance Monitoring

1. **Web Vitals**
   ```typescript
   // pages/_app.tsx
   export function reportWebVitals(metric) {
     console.log(metric)
     // Send to analytics service
   }
   ```

2. **Google Analytics**
   ```typescript
   // lib/gtag.js
   export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID
   
   export const pageview = (url) => {
     window.gtag('config', GA_TRACKING_ID, {
       page_path: url,
     })
   }
   ```

### Health Checks

Create health check endpoint:
```typescript
// pages/api/health.ts
export default function handler(req, res) {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString() 
  })
}
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review TypeScript errors
   - Check environment variables

2. **Runtime Errors**
   - Check browser console for errors
   - Verify API endpoints are accessible
   - Check network requests
   - Review server logs

3. **Performance Issues**
   - Analyze bundle size
   - Check image optimization
   - Review network requests
   - Monitor Core Web Vitals

### Debug Mode

Enable debug mode for troubleshooting:
```bash
DEBUG=true NEXT_PUBLIC_DEBUG_MODE=true pnpm run build --no-lint
```

## 📞 Support

For deployment issues:

1. Check the troubleshooting section above
2. Review platform-specific documentation
3. Check GitHub issues for similar problems
4. Contact support through appropriate channels

---

**Deployment Checklist:**

- [ ] Environment variables configured
- [ ] Build completes successfully
- [ ] All features work in production
- [ ] Performance is optimized
- [ ] Monitoring is set up
- [ ] Security headers configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate installed
- [ ] Analytics tracking enabled

**Happy deploying! 🚀**