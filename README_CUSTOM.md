# Portfolio Website - Daniel Hasiando Sinaga

Personal portfolio website built with Next.js and Tailwind CSS to showcase my web development, mobile, and backend projects.

## ✨ Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- 🚀 Built with Next.js 15 and TypeScript
- 💅 Styled with Tailwind CSS
- 🔍 Search functionality
- 🏷️ Filter projects by category (Fullstack, Backend, Frontend, Mobile, Other)
- 🖼️ Project screenshots gallery
- 🔗 Links to GitHub repositories and live demos
- 🌙 Dark mode support
- 📊 Statistics dashboard

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project folder:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Header & Footer
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer component
│   │   ├── ProjectCard.tsx      # Individual project card
│   │   └── ProjectFilter.tsx    # Category filter
│   ├── data/
│   │   └── projects.ts          # Projects data
│   └── types/
│       └── project.ts           # TypeScript interfaces
├── public/
│   └── screenshots/             # Project screenshots
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: React 18
- **Font**: Inter (Google Fonts)

## 📝 Adding New Projects

To add a new project, edit the `src/data/projects.ts` file:

```typescript
{
  id: 'your-project-id',
  title: 'Project Name',
  description: 'Project description...',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  category: 'fullstack', // or 'backend', 'frontend', 'mobile', 'other'
  githubUrl: 'https://github.com/username/repo',
  liveUrl: 'https://your-live-url.com', // optional
  screenshots: ['/screenshots/project-1.png'],
  features: ['Feature 1', 'Feature 2'], // optional
  year: 2024
}
```

## 📸 Screenshots

Place your project screenshots in the `public/screenshots/` folder and reference them in the projects data file.

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **src/data/projects.ts** - Update project data
2. **src/components/Header.tsx** - Update GitHub and contact links
3. **src/components/Footer.tsx** - Update footer links
4. **src/app/page.tsx** - Update hero section
5. **src/app/layout.tsx** - Update metadata

### Color Scheme

Modify the Tailwind configuration in `tailwind.config.ts` to change the color scheme.

## 🔧 Configuration

### Update GitHub Links

Replace `yourusername` with your actual GitHub username in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/app/page.tsx`
- `src/data/projects.ts`

### Add Project Screenshots

1. Create a `screenshots` folder in the `public` directory
2. Add your project screenshots
3. Reference them in `src/data/projects.ts` like: `'/screenshots/project-name.png'`

## 📦 Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Daniel Hasiando Sinaga**
- Email: daniel.sinaga.ds@gmail.com
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

Built with Next.js, React, and Tailwind CSS
