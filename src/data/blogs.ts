import type { ComponentType } from "react";
import SecureLearningTracks from "@/content/blogs/secure-learning-tracks.tsx";
import DesigningCtfChallenges from "@/content/blogs/designing-ctf-challenges.tsx";
import PracticalOwaspTop10 from "@/content/blogs/practical-owasp-top-10.tsx";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  dateISO: string;
  author: string;
  category: string;
  tags: string[];
  component: ComponentType;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "secure-learning-tracks",
    title: "Secure Learning Tracks for the Next Generation",
    description: "How OWASP SIST builds hands-on security education with real challenges and mentorship.",
    dateISO: "2025-01-12",
    author: "SIST Chapter",
    category: "Education",
    tags: ["OWASP", "Curriculum", "Security"],
    component: SecureLearningTracks,
  },
  {
    slug: "designing-ctf-challenges",
    title: "Designing CTF Challenges for Learning and Growth",
    description: "A behind-the-scenes look at creating CTF tasks that reward persistence and promote secure thinking.",
    dateISO: "2024-11-07",
    author: "CTF Coordinator",
    category: "CTF",
    tags: ["CTF", "Challenge Design", "Education"],
    component: DesigningCtfChallenges,
  },
  {
    slug: "practical-owasp-top-10",
    title: "Practical OWASP Top 10 Lessons for Student Chapters",
    description: "How to integrate OWASP Top 10 concepts into workshops, labs, and chapter projects.",
    dateISO: "2024-09-20",
    author: "Security Education",
    category: "OWASP",
    tags: ["OWASP", "Top 10", "Workshop"],
    component: PracticalOwaspTop10,
  },
];
