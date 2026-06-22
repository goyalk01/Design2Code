import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Web Developer',
    company: 'Company Name',
    startDate: 'Jan 2022',
    endDate: 'Present',
    isCurrent: true,
    description:
      'Working on web applications, improved performance and collaborated with cross-functional teams.',
    highlights: [
      'Built responsive web applications',
      'Optimized website performance',
      'Mentored junior developers',
    ],
  },
  {
    id: 'exp-2',
    role: 'Web Developer',
    company: 'Company Name',
    startDate: 'Jan 2020',
    endDate: 'Dec 2021',
    isCurrent: false,
    description:
      'Developed and maintained websites, implemented new features and fixed bugs.',
    highlights: [
      'Developed new features',
      'Integrated RESTful APIs',
      'Worked with modern frameworks',
    ],
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer Intern',
    company: 'Company Name',
    startDate: 'Jun 2019',
    endDate: 'Dec 2019',
    isCurrent: false,
    description:
      'Assisted in building UI components and learned modern development practices.',
    highlights: [
      'Built reusable components',
      'Assisted in bug fixing',
      'Learned best coding practices',
    ],
  },
];
