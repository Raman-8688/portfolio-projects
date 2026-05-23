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
export type Section = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';