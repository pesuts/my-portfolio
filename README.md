# 🚀 Daniel Sinaga's Portfolio Website

A modern, responsive portfolio website showcasing my projects and skills as a Full Stack Developer. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Modern UI/UX Design** - Clean, professional interface with glassmorphism effects and smooth animations
- 🌗 **Dark/Light Mode** - Automatic theme switching based on system preferences
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🔍 **Advanced Filtering** - Search and filter projects by category and technology
- 🖼️ **Project Showcase** - Detailed project pages with screenshots, tech stack, and live demos
- ⚡ **Performance Optimized** - Fast loading with Next.js App Router and optimized images
- 🎯 **SEO Friendly** - Meta tags and semantic HTML for better search engine visibility
- 🔗 **Social Integration** - Links to GitHub, LinkedIn, and email contact
- 📊 **Portfolio Statistics** - Dynamic stats showing projects, technologies, and achievements

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React with improved performance
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Tailwind PostCSS** - CSS processing
- **CSS Animations** - Custom animations and transitions

### UI Components & Icons
- **React Icons 5.5.0** - Comprehensive icon library

### Development Tools
- **ESLint 9** - Code linting and quality
- **eslint-config-next** - Next.js-specific linting rules

## 📂 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with header/footer
│   │   ├── page.tsx           # Home page (hero + projects)
│   │   ├── globals.css        # Global styles
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx   # Dynamic project detail pages
│   │
│   ├── components/            # React components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Footer with social links
│   │   ├── ProjectCard.tsx   # Project card component
│   │   ├── ProjectFilter.tsx # Category filter
│   │   └── TechStack.tsx     # Technology showcase
│   │
│   ├── data/
│   │   └── projects.ts       # Project data and utilities
│   │
│   └── types/
│       └── project.ts        # TypeScript type definitions
│
├── public/                    # Static assets
│   ├── profile.jpg           # Profile photo
│   └── screenshots/          # Project screenshots
│
└── Configuration Files
    ├── next.config.ts        # Next.js configuration
    ├── tailwind.config.ts    # Tailwind configuration
    ├── tsconfig.json         # TypeScript configuration
    └── eslint.config.mjs     # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pesuts/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (with memory optimization) |
| `npm run dev:turbo` | Start development server with Turbopack |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 📝 Adding New Projects

To add a new project to the portfolio, edit `src/data/projects.ts`:

```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  description: 'Brief description of the project',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  category: 'fullstack', // Options: fullstack, frontend, backend, mobile, data-engineering, other
  githubUrl: 'https://github.com/username/repo',
  liveUrl: 'https://example.com',
  screenshots: [
    '/screenshots/project/image1.jpg',
    '/screenshots/project/image2.jpg'
  ],
  features: [
    'Feature 1',
    'Feature 2'
  ],
  year: 2024
}
```

### Project Categories

- `fullstack` - Full-stack web applications
- `frontend` - Frontend-only projects
- `backend` - Backend APIs and services
- `mobile` - Mobile applications (Android/iOS)
- `data-engineering` - Data engineering and ETL projects
- `other` - Other types of projects

## 🎨 Customization

### Colors & Theme

Modify the color scheme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Fonts

The project uses system fonts for optimal performance. To add custom fonts, update `src/app/layout.tsx`.

### Profile Information

Update personal information in `src/app/page.tsx`:
- Profile photo: Replace `/public/profile.jpg`
- Name and title in the hero section
- Social media links (GitHub, LinkedIn, Email)

## 📊 Portfolio Highlights

- **13+ Projects** - Ranging from full-stack web apps to mobile applications
- **22+ Technologies** - Modern tech stack including React, Next.js, Node.js, Python, Flutter, and more
- **Multiple Categories** - Full-stack, Frontend, Backend, Mobile, Data Engineering
- **Live Deployments** - Many projects with live demos and GitHub repositories

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure build settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pesuts/my-portfolio)

### Deploy on Netlify

```bash
npm run build
```

Then drag and drop the `.next` folder to Netlify.

### Environment Variables

No environment variables are required for basic functionality.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Daniel Hasiando Sinaga**

- GitHub: [@pesuts](https://github.com/pesuts)
- LinkedIn: [daniel-sinaga](https://linkedin.com/in/daniel-sinaga)
- Email: daniel.sinaga.ds@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vercel](https://vercel.com/) - Hosting and deployment

## 📈 Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Implement contact form with backend
- [ ] Add project tags for better filtering
- [ ] Integrate analytics (Google Analytics/Vercel Analytics)
- [ ] Add testimonials section
- [ ] Implement project sorting (by date, popularity)
- [ ] Add loading skeletons for better UX
- [ ] Integrate CMS for easier content management

## 🐛 Issues & Contributions

Found a bug or want to contribute? Feel free to:

1. Open an issue at [GitHub Issues](https://github.com/pesuts/my-portfolio/issues)
2. Fork the repository
3. Create a feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

---

⭐ **If you find this portfolio inspiring, please consider giving it a star!** ⭐

Made with ❤️ by [Daniel Sinaga](https://github.com/pesuts)
