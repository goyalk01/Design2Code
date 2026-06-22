export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
  yearsOfExperience: number;
  color: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: 'Websites' | 'Web Apps' | 'UI-UX';
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  platform: string;
  year: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  thumbnail: string;
  readTime: string;
  slug: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
