import type { ComponentType, CSSProperties } from 'react';

export type Icon = ComponentType<{ size?: number | string; style?: CSSProperties }>;

export interface Experience {
  logo: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: Icon;
}

export interface ResearchPaper {
  title: string;
  venue: string;
  description: string;
  authors: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: Icon;
  color?: string;
}

export interface SkillCategory {
  [category: string]: Skill[];
}

export interface Extra {
  title: string;
  icon: Icon;
  items: string[];
}

export interface SocialLink {
  href: string;
  icon: Icon;
  bgColor: string;
  hoverColor: string;
  label: string;
}