export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  benefits: string[]
  process?: {
    step: number
    title: string
    description: string
  }[]
  targetAudience?: string[]
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  sector: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
  }[]
  services: string[]
  featured: boolean
  publishDate: Date
  image?: string
}

export interface Insight {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author?: string
  category: string
  tags: string[]
  publishDate: Date
  featured: boolean
  image?: string
  readTime?: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  email?: string
}
