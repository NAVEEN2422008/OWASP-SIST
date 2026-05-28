// Core domain types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  year: string;
  category: "ctf" | "workshop" | "seminar" | "training" | "competition";
  theme?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "youtube" | "practice" | "documentation" | "tool";
  url: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface CTFChallenge {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "easy" | "medium" | "hard" | "insane";
  points: number;
  writeup?: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
  readTime: number;
}

export interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
}
