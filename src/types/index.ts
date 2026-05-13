export type Theme = 'dark' | 'light'

export interface SocialLink {
  label: string
  href: string
}

export interface StatItem {
  label: string
  value: string
}

export interface SkillCategory {
  title: string
  skills: {
    name: string
    level: number
  }[]
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'web-app' | 'fintech' | 'platform'
  stack: string[]
  githubUrl: string
  liveUrl: string
}

export interface Experience {
  company: string
  role: string
  duration: string
  achievements: string[]
  tech: string[]
}

export interface ServiceItem {
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
}
