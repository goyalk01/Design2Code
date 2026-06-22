# Premium Personal Portfolio

A visually exceptional, premium personal portfolio website designed for developers, designers, and creatives. Built with modern web technologies, this template focuses on an award-winning UI/UX experience, smooth interactions, and accessibility.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 App Router, React, TypeScript.
- **Premium Styling**: Tailwind CSS v4, custom CSS variables, and seamless Dark/Light mode theming via `next-themes`.
- **Immersive 3D Graphics**: Interactive Hero scene powered by `Three.js` and `@react-three/fiber` with a dynamic particle constellation.
- **Fluid Animations**: Smooth scrolling, layout animations, spring counters, and staggered reveal effects powered by `framer-motion` and `lenis`.
- **Accessible & SEO Optimized**: Semantic HTML, ARIA attributes, full keyboard navigation, `reducedMotion` respect, and native Next.js 15 SEO tags (`sitemap.xml`, `robots.txt`, and PWA manifest).
- **Interactive UI Components**:
  - `CommandPalette` for quick navigation (`Ctrl+K` / `Cmd+K`).
  - Immersive `ProjectModal` for showcasing case studies.
  - Interactive skill rings, automated testimonial carousel, and scroll-progress indicator.
- **Lighthouse Performance**: Optimized bundle sizes, dynamically loaded 3D components, and Next.js 15 Turbopack compilation.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Rendering**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVGs

## 📦 Project Structure

```text
src/
├── app/                  # Next.js App Router (layout, page, SEO files)
├── components/
│   ├── animations/       # Reusable Framer Motion wrappers (FadeIn, StaggerReveal)
│   ├── layout/           # Navbar, Footer, CommandPalette
│   ├── providers/        # ThemeProvider and MotionConfig wrappers
│   ├── sections/         # Main portfolio sections (Hero, About, Projects, etc.)
│   ├── shared/           # Reusable UI parts (SectionHeader, CTAButton)
│   └── ui/               # Base UI components (Button, Card, Badge, ThemeToggle)
├── config/               # Global configuration (site details, SEO, theme tokens)
├── data/                 # Content data (projects, skills, experience, etc.)
├── lib/                  # Utilities (Tailwind merge)
├── styles/               # Global CSS and custom animation keyframes
└── types/                # TypeScript interface definitions
```

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/premium-portfolio.git
cd premium-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application supports Hot Module Replacement (HMR) out-of-the-box.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

All personal information, social links, project data, and metadata are deeply decoupled from the UI components. 

To make this portfolio your own, simply edit the files inside the `src/data/` and `src/config/` directories.
- `src/config/site.ts`: Update your name, role, email, and social links.
- `src/data/projects.ts`: Add your own projects and case studies.
- `src/data/skills.ts`: Modify the skills and their proficiency levels.
- `src/data/experience.ts` & `education.ts`: Update your work timeline.

To adjust the theme colors, modify the CSS variables in `src/app/globals.css`.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
