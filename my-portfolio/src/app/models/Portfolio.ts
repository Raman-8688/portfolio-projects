export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  institution: string;
  timeline: string;
  techStack: string;
  description: string;
  highlights: string[];
  tags: string[];
  skills: { name: string; level: number }[];
  accent: string;
  badge?: string;
  category?: string;
  subtitle?: string;
  image?: string;
  problemSolved?: string;
  features?: string[];
  architecture?: string;
  githubUrl?: string;
  liveUrl?: string;
  backendFrontendSeparation?: string;
  dockerK8sUsage?: string;
  securityAuth?: string;
  cicdWorkflow?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  logo: string;
  color: string;
  badge?: string;
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface Achievement {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export type ThemeColor = string;
export type Section = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'architecture' | 'devops' | 'github' | 'contact';

export interface ArchitectureNode {
  type: string;
  title: string;
  icon: string;
  color: string;
  purpose: string;
  techStack: string[];
  responsibilities: string[];
}

export interface AboutPoint {
  icon: string;
  title: string;
  text: string;
}

export interface SkillItem {
  name: string;
  tag: string;
  badge: string;
}

export interface SkillCategoryGroup {
  category: string;
  icon: string;
  color: string;
  items: SkillItem[];
}

export interface ArchitectureNodeDetail {
  id: string;
  title: string;
  sub: string;
  category: string;
  color: string;
  details: string;
}

export interface MncQnA {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface AtsResume {
  summary: string;
  skillsCategorized: { category: string; items: string }[];
  experience: {
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
  }[];
  education: string;
  certifications: string;
}
