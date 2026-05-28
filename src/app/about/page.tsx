import { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: `About — ${siteConfig.name}`,
    description: "Learn about the OWASP SIST Student Chapter mission and approach.",
};

export default function AboutPage() {
    return (
        <AboutSection />
    );
}

