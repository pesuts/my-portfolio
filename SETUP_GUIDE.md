# Portfolio Website Setup Guide

## Step-by-Step Setup

### 1. Update Personal Information

#### A. Update GitHub Links
Find and replace `yourusername` with your actual GitHub username in:
- `src/components/Header.tsx` (line 27)
- `src/components/Footer.tsx` (line 29)
- `src/app/page.tsx` (line 36)

#### B. Update Contact Email
Already set to: `daniel.sinaga.ds@gmail.com`

#### C. Update LinkedIn (Optional)
In `src/components/Footer.tsx`, update the LinkedIn URL

### 2. Add Your Projects

Edit `src/data/projects.ts` and update the GitHub URLs for each project:

```typescript
// Example:
{
  id: 'bcr-api-docs',
  githubUrl: 'https://github.com/YOUR_USERNAME/bcr-api-docs',
  // ... other fields
}
```

#### Current Projects in Portfolio:
1. BCR - Car Rental API Documentation
2. BASKARYA - Express Backend API
3. SIBAS News - Mobile News App
4. Indonesia News Scraper
5. OpenMusic API v3
6. BCR - Car Rental Web App
7. Bank Management System
8. Todo App with Location
9. Cryptography Final Project
10. Web Portal UMKM

### 3. Add Project Screenshots

#### Option A: Copy from Existing Projects
If your projects already have screenshots in their README files:

```bash
# Navigate to your projects folder
cd d:\DEVELOPER\WEB DEV\PORTFOLIO\projects

# For each project, copy screenshots to portfolio
# Example for news-app:
copy "news-app-mobile-main\news-app-mobile-main\screenshots\*.*" "..\portfolio-website\public\screenshots\"
```

#### Option B: Take New Screenshots
1. Open each project
2. Take screenshots of key features
3. Save them in `public/screenshots/`
4. Name them: `project-name-1.png`, `project-name-2.png`, etc.

### 4. Update Live URLs (if available)

In `src/data/projects.ts`, add live URLs for deployed projects:

```typescript
{
  id: 'bcr-react',
  liveUrl: 'https://your-actual-deployment.netlify.app',
  // ... other fields
}
```

### 5. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
},
```

### 6. Test Your Portfolio

```bash
npm run dev
```

Visit http://localhost:3000 and check:
- [ ] Personal information is correct
- [ ] All project cards display properly
- [ ] GitHub links work
- [ ] Live demo links work (if added)
- [ ] Search functionality works
- [ ] Category filters work
- [ ] Mobile responsive design

### 7. Build and Deploy

#### Build for Production:
```bash
npm run build
npm run start
```

#### Deploy to Vercel:
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy!

#### Deploy to Netlify:
1. Build: `npm run build`
2. Upload `.next` folder to Netlify

## Quick Tasks Checklist

- [ ] Update GitHub username in all components
- [ ] Add actual GitHub URLs to projects
- [ ] Copy or create project screenshots
- [ ] Add live demo URLs (if available)
- [ ] Test all features locally
- [ ] Build and deploy

## Need Help?

Check the main README_CUSTOM.md for more details.
