import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform with real-time inventory management, payment processing, and an intuitive shopping experience.',
    thumbnail: '/projects/project-1.webp',
    category: 'Web Apps',
    techStack: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge:
        'The client needed a scalable e-commerce solution that could handle thousands of concurrent users while maintaining fast load times.',
      solution:
        'Built a React-based SPA with server-side rendering, implemented Redis caching, and used MongoDB for flexible product schemas.',
      outcome:
        'Achieved 99.9% uptime, 40% faster page loads, and a 25% increase in conversion rates within the first quarter.',
    },
  },
  {
    id: 'project-2',
    title: 'Portfolio Dashboard',
    description:
      'A comprehensive analytics dashboard for tracking portfolio performance with real-time data visualization and insights.',
    thumbnail: '/projects/project-2.webp',
    category: 'Web Apps',
    techStack: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge:
        'Financial advisors needed a real-time dashboard to monitor multiple client portfolios simultaneously with complex data visualizations.',
      solution:
        'Developed a Next.js app with WebSocket connections for live data, D3.js charts, and role-based access control.',
      outcome:
        'Reduced portfolio review time by 60% and increased advisor productivity by enabling simultaneous multi-client monitoring.',
    },
  },
  {
    id: 'project-3',
    title: 'Restaurant Website',
    description:
      'A beautifully designed restaurant website featuring online reservations, menu browsing, and location information.',
    thumbnail: '/projects/project-3.webp',
    category: 'Websites',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge:
        'A high-end restaurant needed a website that reflected its premium brand while making it easy for customers to make reservations.',
      solution:
        'Designed a visually stunning, mobile-first website with an integrated reservation system and dynamic menu management.',
      outcome:
        'Online reservations increased by 150%, and the website became the primary channel for new customer acquisition.',
    },
  },
  {
    id: 'project-4',
    title: 'Task Management App',
    description:
      'A collaborative task management application with drag-and-drop boards, team assignments, and progress tracking.',
    thumbnail: '/projects/project-4.webp',
    category: 'Web Apps',
    techStack: ['React', 'Tailwind', 'API'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge:
        'A growing startup needed a project management tool tailored to their agile workflow that existing tools couldn\'t fully support.',
      solution:
        'Built a custom Kanban-style app with real-time collaboration, custom workflow stages, and automated sprint reporting.',
      outcome:
        'Team velocity improved by 30%, and the tool was adopted company-wide within two weeks of launch.',
    },
  },
  {
    id: 'project-5',
    title: 'Travel Blog Platform',
    description:
      'A content-rich travel blog with interactive maps, photo galleries, and a custom CMS for easy content management.',
    thumbnail: '/projects/project-5.webp',
    category: 'Websites',
    techStack: ['Next.js', 'MDX', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge:
        'A travel blogger needed a fast, SEO-optimized platform that could handle rich media content without sacrificing performance.',
      solution:
        'Created a statically generated blog with MDX support, optimized image loading, and interactive Mapbox integrations.',
      outcome:
        'Organic traffic grew by 200% in six months, and the site achieved a perfect Lighthouse SEO score.',
    },
  },
  {
    id: 'project-6',
    title: 'Fitness Tracker UI',
    description:
      'A sleek fitness tracking interface design with workout logging, progress charts, and personalized recommendations.',
    thumbnail: '/projects/project-6.webp',
    category: 'UI-UX',
    techStack: ['Figma', 'Prototype', 'Design System'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      challenge:
        'Existing fitness apps had cluttered interfaces that discouraged daily use. The goal was to design something users would actually enjoy.',
      solution:
        'Designed a minimalist, gesture-driven interface with smart defaults, celebration animations, and adaptive workout suggestions.',
      outcome:
        'User testing showed 85% task completion rate on first use and a Net Promoter Score of 72.',
    },
  },
];

export const projectCategories = ['All', 'Websites', 'Web Apps', 'UI-UX'] as const;
