import type {
  Experience,
  Project,
  ServiceItem,
  SkillCategory,
  SocialLink,
  StatItem,
  Testimonial,
} from '@/types'

export const profile = {
  name: 'Jasanpreet Singh',
  location: 'Mohali, Punjab, India',
  title: 'Frontend Developer',
  subtitle: 'React, Next.js, TypeScript, and performance-focused product engineering.',
  summary:
    'Frontend developer with 2+ years of experience building scalable, responsive web applications with reusable architecture, clean UI systems, and optimized performance.',
  email: 'jashangandhi12@gmail.com',
  phone: '+91-70321262000',
  resumeHref: '/myCV.pdf',
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jashanpreet-singh-9a399b290/' },
  { label: 'GitHub', href: 'https://github.com/Jasanpreetsingh72' },
]

export const stats: StatItem[] = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Production Projects', value: '10+' },
  { label: 'UI Systems Built', value: '20+' },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'HTML', level: 100 },
      { name: 'CSS', level: 100 },
      { name: 'SCSS', level: 100 },
      { name: 'Bootstrap', level: 95 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'API Integration', level: 91 },
      { name: 'Redux Toolkit', level: 90 },
      { name: 'Responsive UI', level: 100 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Postman', level: 82 },
      { name: 'Figma Handoff', level: 88 },
      { name: 'VS Code', level: 90 },
      { name: 'AI Assistant (ChatGPT, Gemini, Claude, etc.)', level: 80 },
      { name: 'Figma', level: 80 },
      { name: 'Photoshop', level: 80 },
      { name: 'GSAP (GreenSock Animation Platform)', level: 80 },
            
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'swap-gala',
    title: 'Swap Gala',
    description: 'Token swap interface with smooth theming, state management, and responsive interactions.',
    category: 'fintech',
    stack: ['Next.js', 'TypeScript', 'Redux', 'REST APIs'],
    githubUrl: 'https://github.com/Jasanpreetsingh72',
    liveUrl: 'https://swap.gala.com/',
  },
  {
    id: 'land-bitt',
    title: 'Land Bitt',
    description: 'Real estate platform with scalable architecture and robust property workflows.',
    category: 'platform',
    stack: ['React', 'TypeScript', 'Redux', 'REST APIs'],
    githubUrl: 'https://github.com/Jasanpreetsingh72',
    liveUrl: '#',
  },
  {
    id: 'stbl',
    title: 'STBL Trading Platform',
    description: 'Stablecoin trading dashboard built with reusable UI modules and optimized rendering.',
    category: 'fintech',
    stack: ['React', 'TypeScript', 'Redux', 'Web APIs'],
    githubUrl: 'https://github.com/Jasanpreetsingh72',
    liveUrl: '#',
  },

  {
    id: 'crypta',
    title: 'Crypta',
    description: 'Market-focused frontend with API-driven data and high-fidelity Figma-to-production UI.',
    category: 'web-app',
    stack: ['React', 'TypeScript', 'REST APIs'],
    githubUrl: 'https://github.com/Jasanpreetsingh72',
    liveUrl: '#',
  },
]

export const experiences: Experience[] = [
  {
    company: 'Antier Solutions',
    role: 'Frontend Developer',
    duration: '2025 - Present',
    achievements: [
      'Developed scalable apps with React.js, Next.js, and TypeScript.',
      'Integrated REST APIs and optimized app performance with code splitting.',
      'Collaborated with backend teams to ship reusable frontend architecture.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Redux'],
  },
  {
    company: 'Antier Solutions',
    role: 'Web Designer & Developer',
    duration: '2024',
    achievements: [
      'Built responsive interfaces using SCSS and JavaScript.',
      'Converted Figma files into pixel-accurate production layouts.',
      'Improved consistency and responsiveness across major breakpoints.',
    ],
    tech: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap'],
  },
  {
    company: 'Antier Solutions',
    role: 'Frontend Developer Intern',
    duration: '2023',
    achievements: [
      'Delivered responsive interface components from design handoff.',
      'Supported reusable component architecture and API integration tasks.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Frontend Architecture',
    description:
      'Scalable React codebases with reusable component systems and strong TypeScript foundations.',
  },
  {
    title: 'Design to Production',
    description:
      'Accurate Figma-to-code implementation with responsive behavior and polished interactions.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Code splitting, lazy loading, and rendering optimizations for fast and reliable UX.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Product Manager',
    role: 'Fintech Team',
    quote:
      'Jasanpreet consistently delivered fast, clean, and maintainable frontend modules under strict deadlines.',
  },
  {
    name: 'Engineering Lead',
    role: 'Web Platform',
    quote:
      'His attention to reusable architecture and responsive UI quality raised our overall frontend standards.',
  },
]

export const projectFilters = ['all', 'web-app', 'fintech', 'platform'] as const
export type ProjectFilter = (typeof projectFilters)[number]
