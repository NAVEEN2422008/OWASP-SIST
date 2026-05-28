import { Event, Resource, TeamMember, CTFChallenge } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    title: "OWASP Student Chapter Inauguration",
    description: "Launch event celebrating Computer Literacy Day.",
    date: "2023-03-01",
    year: "2023",
    category: "seminar",
    theme: "Community & launch",
  },
  {
    id: "2",
    title: "Two-Day Workshop – Mr. Sriram Kesavan",
    description: "Intensive multi-domain security training.",
    date: "2023-04-15",
    year: "2023",
    category: "training",
    theme: "Comprehensive training",
  },
  {
    id: "3",
    title: "SIST CTF – Cyber Security Gamified",
    description: "Chapter's inaugural CTF competition.",
    date: "2023-10-20",
    year: "2023",
    category: "ctf",
    theme: "CTF competition",
  },
  {
    id: "4",
    title: "Hack The Planet (HTP Series #1) 2024",
    description: "Multi-track cybersecurity event with CTF, Bug Hunt, and Masterclass.",
    date: "2024-09-15",
    year: "2024",
    category: "competition",
    theme: "Multi-track CTF & Security",
  },
  {
    id: "5",
    title: "SIST CTF 3.0 (Recruitment CTF)",
    description: "Third-edition chapter CTF competition.",
    date: "2025-03-10",
    year: "2025",
    category: "ctf",
    theme: "CTF competition",
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "MyDFIR",
    description: "SOC analysis, PCAP, logs training",
    category: "youtube",
    url: "https://youtube.com/@MyDFIR",
    tags: ["DFIR", "Blue Team", "SOC"],
  },
  {
    id: "2",
    title: "NahamSec",
    description: "Live hacking and bug bounty methodology",
    category: "youtube",
    url: "https://youtube.com/@NahamSec",
    tags: ["Bug Bounty", "Web Security"],
  },
  {
    id: "3",
    title: "PicoCTF",
    description: "Beginner CTF practice platform",
    category: "practice",
    url: "https://picoctf.org",
    tags: ["CTF", "Beginner", "Practice"],
  },
  {
    id: "4",
    title: "HackTheBox",
    description: "Advanced penetration testing practice",
    category: "practice",
    url: "https://hackthebox.com",
    tags: ["Pentesting", "Advanced", "OSCP"],
  },
  {
    id: "5",
    title: "OWASP Top 10",
    description: "Most critical web app security risks",
    category: "documentation",
    url: "https://owasp.org/Top10/",
    tags: ["OWASP", "Web Security", "Documentation"],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Leadership",
    role: "Chapter Leads",
    bio: "Driving the vision and strategy of OWASP SIST",
    image: undefined,
  },
  {
    id: "2",
    name: "Technical Team",
    role: "Workshop & CTF Organizers",
    bio: "Building and running hands-on security training",
    image: undefined,
  },
  {
    id: "3",
    name: "Community Team",
    role: "Engagement & Recruitment",
    bio: "Growing our cybersecurity community",
    image: undefined,
  },
];

export const ctfChallenges: CTFChallenge[] = [
  {
    id: "1",
    title: "Reverse Engineering 101",
    description: "Basic binary reversing challenge",
    category: "Reverse Engineering",
    difficulty: "easy",
    points: 100,
    tags: ["binary", "beginner"],
  },
  {
    id: "2",
    title: "Web Exploitation Master",
    description: "Advanced web vulnerability exploitation",
    category: "Web Security",
    difficulty: "hard",
    points: 500,
    tags: ["web", "advanced"],
  },
  {
    id: "3",
    title: "Cryptography Puzzle",
    description: "Solve the encrypted message",
    category: "Cryptography",
    difficulty: "medium",
    points: 300,
    tags: ["crypto", "puzzle"],
  },
];
