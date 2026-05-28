export type EventCategory =
  | "Workshop"
  | "Community"
  | "CTF"
  | "Talk"
  | "Training";

export interface EventItem {
  slug: string;
  title: string;
  description: string;
  dateISO: string;
  dateLabel?: string;
  theme: string;
  category: EventCategory;
  tags: string[];
  location?: string;
  featured?: boolean;
}

export const events: EventItem[] = [
  {
    slug: "sist-inauguration",
    title: "OWASP Student Chapter Inauguration",
    description: "Launch event celebrating Computer Literacy Day.",
    dateISO: "2023-03-10",
    dateLabel: "2023",
    theme: "Community and launch",
    category: "Community",
    tags: ["OWASP", "Launch", "Community"],
    featured: true,
  },
  {
    slug: "two-day-workshop-sriram-kesavan",
    title: "Two-Day Workshop - Mr. Sriram Kesavan",
    description: "Intensive multi-domain security training.",
    dateISO: "2023-04-12",
    dateLabel: "2023",
    theme: "Comprehensive training",
    category: "Workshop",
    tags: ["Workshop", "Training", "Security"],
    featured: true,
  },
  {
    slug: "session-abisheik-m",
    title: "Session by Mr. Abisheik M",
    description: "Hands-on cybersecurity workshop.",
    dateISO: "2023-06-18",
    dateLabel: "2023",
    theme: "Technical workshop",
    category: "Workshop",
    tags: ["Workshop", "Hands-on", "Cybersecurity"],
  },
  {
    slug: "session-jones-martin",
    title: "Session by Mr. Jones Martin",
    description: "Cybersecurity fundamentals workshop.",
    dateISO: "2023-08-22",
    dateLabel: "2023",
    theme: "Cyber security fundamentals",
    category: "Training",
    tags: ["Fundamentals", "Cybersecurity", "Training"],
  },
  {
    slug: "diving-deep-cyber-security-series-1",
    title: "Diving Deep into Cyber Security (Series #1)",
    description: "Deep-dive cybersecurity workshop.",
    dateISO: "2023-11-05",
    dateLabel: "2023",
    theme: "Advanced security",
    category: "Workshop",
    tags: ["Advanced Security", "Workshop", "Series"],
  },
  {
    slug: "sist-ctf",
    title: "SIST CTF - Cyber Security Gamified",
    description: "Chapter's inaugural CTF competition.",
    dateISO: "2024-02-15",
    dateLabel: "2024",
    theme: "CTF competition",
    category: "CTF",
    tags: ["CTF", "Competition", "Gamified"],
    featured: true,
  },
  {
    slug: "diving-deep-cyber-security-series-2",
    title: "Diving Deep into Cyber Security (Series #2)",
    description: "Advanced workshop during first-anniversary celebration.",
    dateISO: "2024-03-12",
    dateLabel: "2024",
    theme: "Advanced security",
    category: "Workshop",
    tags: ["Advanced Security", "Workshop", "Anniversary"],
  },
  {
    slug: "sist-ctf-2",
    title: "SIST CTF 2.0",
    description: "Second-edition chapter CTF competition.",
    dateISO: "2024-04-16",
    dateLabel: "2024",
    theme: "CTF competition",
    category: "CTF",
    tags: ["CTF", "Competition", "Chapter Event"],
  },
  {
    slug: "cyber-matrix",
    title: "Cyber Matrix (CTF & Treasure Hunt)",
    description: "Gamified CTF + treasure-hunt style event.",
    dateISO: "2024-05-21",
    dateLabel: "2024",
    theme: "CTF and gamification",
    category: "CTF",
    tags: ["CTF", "Treasure Hunt", "Gamification"],
    featured: true,
  },
  {
    slug: "cyber-security-101-first-line-of-defense",
    title: "Cyber Security 101 - First Line of Defense",
    description: "Intro-level security fundamentals.",
    dateISO: "2024-07-10",
    dateLabel: "2024",
    theme: "Cybersecurity basics",
    category: "Training",
    tags: ["Basics", "Security", "Training"],
  },
  {
    slug: "art-of-hacking-series-1",
    title: "Art of Hacking (Series #1)",
    description: "Two-day introductory-plus workshop on ethical hacking.",
    dateISO: "2024-08-14",
    dateLabel: "2024",
    theme: "Ethical hacking",
    category: "Workshop",
    tags: ["Ethical Hacking", "Workshop", "Series"],
  },
  {
    slug: "art-of-hacking-series-2",
    title: "Art of Hacking (Series #2)",
    description: "Advanced ethical-hacking techniques workshop.",
    dateISO: "2024-09-12",
    dateLabel: "2024",
    theme: "Offensive security",
    category: "Workshop",
    tags: ["Offensive Security", "Workshop", "Advanced"],
  },
  {
    slug: "exploring-the-skies-drones",
    title: "Exploring the Skies - Drones",
    description: "Technical talk on drone applications across industries.",
    dateISO: "2024-10-09",
    dateLabel: "2024",
    theme: "Drone technology",
    category: "Talk",
    tags: ["Drones", "Talk", "Technology"],
  },
  {
    slug: "careers-in-space-research",
    title: "Careers in Space Research",
    description:
      "Exploring career paths in space research and propellant science.",
    dateISO: "2024-11-04",
    dateLabel: "2024",
    theme: "Space tech and research",
    category: "Talk",
    tags: ["Careers", "Space Research", "Talk"],
  },
  {
    slug: "career-catalyst",
    title: "Career Catalyst",
    description:
      "Career guidance for engineers with focus on question-finding and ambition.",
    dateISO: "2024-11-23",
    dateLabel: "2024",
    theme: "Career and professional skills",
    category: "Talk",
    tags: ["Careers", "Guidance", "Professional Skills"],
  },
  {
    slug: "hack-the-planet-htp-series-1-2024",
    title: "Hack The Planet (HTP Series #1) 2024",
    description:
      "Multi-track cybersecurity event with CTF, Bug Hunt, Capture The Flag Workshop, and Cyber Security Masterclass.",
    dateISO: "2024-12-12",
    dateLabel: "2024",
    theme: "Multi-track CTF and security",
    category: "CTF",
    tags: ["CTF", "Bug Hunt", "Masterclass"],
    featured: true,
  },
  {
    slug: "hack-the-planet-htp-series-2-2025",
    title: "Hack The Planet (HTP Series #2) 2025",
    description:
      "Multi-track cybersecurity event with CTF, Bug Hunt, Capture The Flag Workshop, and Cyber Security Masterclass.",
    dateISO: "2025-02-14",
    dateLabel: "2025",
    theme: "Multi-track CTF and security",
    category: "CTF",
    tags: ["CTF", "Bug Hunt", "Masterclass"],
    featured: true,
  },
  {
    slug: "sist-ctf-3-recruitment",
    title: "SIST CTF 3.0 (Recruitment CTF)",
    description: "Third-edition chapter CTF competition.",
    dateISO: "2025-03-22",
    dateLabel: "2025",
    theme: "CTF competition",
    category: "CTF",
    tags: ["CTF", "Recruitment", "Competition"],
  },
];
