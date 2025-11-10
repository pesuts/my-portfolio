# 🚀 Deployment Guide

## Prerequisites

Before deploying, make sure you have:
- [ ] Updated all GitHub usernames
- [ ] Added project screenshots
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)

## Option 1: Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Free for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Built-in CI/CD
- ✅ Custom domains
- ✅ Optimized for Next.js
- ✅ No configuration needed

### Steps:

#### 1. Prepare Your Code

```bash
# Make sure everything is committed
git status

# If there are changes, commit them
git add .
git commit -m "Ready for deployment"
```

#### 2. Push to GitHub

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

#### 3. Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. Click "Deploy"
7. Wait 1-2 minutes
8. Your site is live! 🎉

#### 4. Get Your URL

Vercel will give you a URL like:
`https://your-portfolio.vercel.app`

You can also add a custom domain in Settings.

---

## Option 2: Deploy to Netlify

### Why Netlify?
- ✅ Free tier available
- ✅ Drag & drop deployment
- ✅ Custom domains
- ✅ Form handling
- ✅ Serverless functions

### Steps:

#### 1. Build Your Project

```bash
npm run build
```

#### 2. Deploy

**Method A: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Method B: GitHub Integration**
1. Push code to GitHub
2. Go to https://netlify.com
3. "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

**Method C: Drag & Drop**
1. Build locally: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag & drop the `.next` folder
4. Done!

---

## Option 3: Deploy to GitHub Pages (Static Export)

### Note: Requires Static Export
Next.js App Router with server components needs modifications.

1. Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

2. Build:
```bash
npm run build
```

3. Deploy `out` folder to GitHub Pages

---

## Option 4: Deploy to Railway

### Why Railway?
- ✅ Free tier with generous limits
- ✅ Easy deployment
- ✅ Database hosting
- ✅ Auto-scaling

### Steps:

1. Go to https://railway.app
2. Sign up with GitHub
3. "New Project" → "Deploy from GitHub"
4. Select your repository
5. Railway auto-detects Next.js
6. Deploy!

---

## Post-Deployment Checklist

After deployment:

### 1. Test Your Site
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] GitHub links work
- [ ] Live demo links work (if any)
- [ ] Search functionality works
- [ ] Filter functionality works
- [ ] Mobile responsive

### 2. Update URLs

If you have live demo projects, update their URLs in `src/data/projects.ts`:

```typescript
{
  id: 'bcr-react',
  liveUrl: 'https://bcr-rental.netlify.app', // Your actual URL
  // ...
}
```

### 3. Add Custom Domain (Optional)

**Vercel:**
1. Project Settings → Domains
2. Add your domain
3. Update DNS records

**Netlify:**
1. Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

### 4. Enable Analytics (Optional)

**Google Analytics:**

Add to `src/app/layout.tsx`:
```tsx
import Script from 'next/script';

// In the <head> section:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 5. SEO Optimization

Update `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full Stack Developer specializing in...",
  keywords: ["your", "keywords", "here"],
  authors: [{ name: "Your Name" }],
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Full Stack Developer...',
    url: 'https://your-domain.com',
    siteName: 'Your Portfolio',
    images: ['/og-image.png'],
    locale: 'en_US',
    type: 'website',
  },
};
```

### 6. Add robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

---

## Environment Variables

If your portfolio needs environment variables:

### Vercel:
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

### Netlify:
1. Site Settings → Build & Deploy → Environment
2. Add variables
3. Redeploy

---

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Error: TypeScript errors**
```bash
# Check for errors
npm run build

# Fix errors, then rebuild
```

### Images Not Loading

Check `next.config.js`:
```javascript
module.exports = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    // Or for external images:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
```

### 404 on Refresh (SPA issue)

Add `vercel.json` or `netlify.toml`:

**vercel.json:**
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

**netlify.toml:**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Push to GitHub
2. Automatic build starts
3. Site updates automatically
4. No manual intervention needed!

---

## Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Loading**: Images load as needed (built-in Next.js)
3. **Code Splitting**: Automatic with Next.js
4. **Caching**: Configure in hosting platform
5. **CDN**: Both Vercel and Netlify use global CDN

---

## Cost Estimates

**Vercel Free Tier:**
- Bandwidth: 100GB/month
- Builds: 6000 minutes/month
- Good for: Personal projects ✅

**Netlify Free Tier:**
- Bandwidth: 100GB/month
- Builds: 300 minutes/month
- Good for: Personal projects ✅

**Railway Free Tier:**
- $5 credit/month
- Good for: Testing ✅

---

## Quick Deploy Commands

```bash
# Vercel
npm i -g vercel
vercel --prod

# Netlify
npm i -g netlify-cli
netlify deploy --prod

# Railway
npm i -g railway
railway up
```

---

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to hosting platform
- [ ] Site is accessible
- [ ] All features working
- [ ] Mobile responsive tested
- [ ] Performance optimized
- [ ] SEO configured
- [ ] Analytics set up (optional)
- [ ] Custom domain added (optional)

---

## Share Your Portfolio! 🎉

After deployment, share your portfolio:
- LinkedIn
- Twitter
- GitHub README
- Resume/CV
- Email signature
- Business cards

---

**Your portfolio is now live and ready to impress! 🚀**

Need help? Check the documentation or reach out!
