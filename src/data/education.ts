import type { Education, Certification } from '@/types';

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Applications',
    institution: 'University Name',
    startYear: '2016',
    endYear: '2019',
    description:
      'Focused on software development, data structures and algorithms.',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Education',
    institution: 'School Name',
    startYear: '2002',
    endYear: '2016',
    description: 'Science Stream (PCM).',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'JavaScript Algorithms and Data Structures',
    platform: 'freeCodeCamp',
    year: '2023',
    icon: 'award',
  },
  {
    id: 'cert-2',
    title: 'Responsive Web Design',
    platform: 'freeCodeCamp',
    year: '2023',
    icon: 'award',
  },
  {
    id: 'cert-3',
    title: 'React - The Complete Guide',
    platform: 'Udemy',
    year: '2022',
    icon: 'award',
  },
];
