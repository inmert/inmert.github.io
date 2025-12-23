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
  image: string;
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
  icon: any;
}

export interface SkillCategory {
  [category: string]: Skill[];
}

export interface Extra {
  title: string;
  items: string[];
}

export interface SocialLink {
  href: string;
  icon: any;
  bgColor: string;
  hoverColor: string;
  label: string;
}