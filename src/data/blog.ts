import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Build a Responsive Website',
    excerpt:
      'Learn the best practices for building responsive and mobile-friendly websites.',
    date: 'May 25, 2025',
    category: 'Web Development',
    thumbnail: '/blog/blog-1.webp',
    readTime: '5 min read',
    slug: 'how-to-build-responsive-website',
  },
  {
    id: 'blog-2',
    title: 'Understanding JavaScript Closures',
    excerpt:
      'A beginner-friendly explanation of JavaScript closures and their practical use cases.',
    date: 'Apr 15, 2025',
    category: 'JavaScript',
    thumbnail: '/blog/blog-2.webp',
    readTime: '7 min read',
    slug: 'understanding-javascript-closures',
  },
  {
    id: 'blog-3',
    title: '10 Tips to Improve Your Coding Skills',
    excerpt:
      'Practical tips and habits that help improve your coding skills over time.',
    date: 'Mar 25, 2025',
    category: 'Career',
    thumbnail: '/blog/blog-3.webp',
    readTime: '4 min read',
    slug: 'tips-to-improve-coding-skills',
  },
];
