export type Section = 'about' | 'experience' | 'projects' | 'architecture' | 'contact';

export interface NavItem {
  id: Section;
  label: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', icon: 'fas fa-user' },
  { id: 'experience', label: 'Resume', icon: 'fas fa-file-alt' },
  { id: 'projects', label: 'Portfolio', icon: 'fas fa-briefcase' },
  { id: 'architecture', label: 'Architecture & DevOps', icon: 'fas fa-sitemap' },
  { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
];

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
  // STAR Method Case Study Fields
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  logo: string;
  color: string;
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

export interface ArchitectureNode {
  type: string;
  title: string;
  icon: string;
  color: string;
  purpose: string;
  techStack: string[];
  responsibilities: string[];
}

export interface InfoCard {
  icon: string;
  label: string;
  value: string;
  subText?: string;
  bg: string;
  color: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface AtsResume {
  summary: string;
  skillsCategorized: { category: string; items: string }[];
  experience: { company: string; role: string; period: string; location: string; bullets: string[] }[];
  education: string;
  certifications: string;
}