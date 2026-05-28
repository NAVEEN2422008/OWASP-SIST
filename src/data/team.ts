export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    avatarInitials: string;
    socials: { label: string; href: string }[];
    featured?: boolean;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Student Chapter Lead",
        role: "Chapter Lead",
        bio: "Coordinates learning tracks, event operations, and mentorship initiatives.",
        avatarInitials: "SL",
        socials: [
            { label: "GitHub", href: "https://github.com/owasp-sist" },
            { label: "LinkedIn", href: "https://linkedin.com/company/owasp-sist" },
        ],
        featured: true,
    },
    {
        name: "CTF Coordinator",
        role: "Events & CTF",
        bio: "Builds challenge pipelines and ensures consistent, high-signal learning for participants.",
        avatarInitials: "CT",
        socials: [{ label: "LinkedIn", href: "https://linkedin.com/company/owasp-sist" }],
    },
    {
        name: "Security Education",
        role: "Learning Resources",
        bio: "Maintains curated study material and structured onboarding for secure software practices.",
        avatarInitials: "SE",
        socials: [{ label: "GitHub", href: "https://github.com/owasp-sist" }],
    },
];

