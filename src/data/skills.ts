import type { Skill } from '@/types';

export const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: 'html5',
    level: 95,
    category: 'Markup Language',
    yearsOfExperience: 5,
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    icon: 'css3',
    level: 90,
    category: 'Styling',
    yearsOfExperience: 5,
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    level: 92,
    category: 'Programming Language',
    yearsOfExperience: 4,
    color: '#F7DF1E',
  },
  {
    name: 'React',
    icon: 'react',
    level: 88,
    category: 'Frontend Framework',
    yearsOfExperience: 3,
    color: '#61DAFB',
  },
  {
    name: 'Node.js',
    icon: 'nodejs',
    level: 85,
    category: 'Runtime Environment',
    yearsOfExperience: 3,
    color: '#339933',
  },
  {
    name: 'Git',
    icon: 'git',
    level: 90,
    category: 'Version Control',
    yearsOfExperience: 4,
    color: '#F05032',
  },
];

export const extendedSkills: Skill[] = [
  ...skills,
  {
    name: 'TypeScript',
    icon: 'typescript',
    level: 85,
    category: 'Programming Language',
    yearsOfExperience: 2,
    color: '#3178C6',
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    level: 82,
    category: 'Full-Stack Framework',
    yearsOfExperience: 2,
    color: '#000000',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
    level: 88,
    category: 'CSS Framework',
    yearsOfExperience: 2,
    color: '#06B6D4',
  },
];
