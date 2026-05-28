import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import EventsTimeline from "@/components/sections/EventsTimeline";
import ResourcesHub from "@/components/sections/ResourcesHub";
import ContactSection from "@/components/sections/ContactSection";
import WhyOwaspSection from "@/components/sections/WhyOwaspSection";
import OwaspReferencesSection from "@/components/sections/OwaspReferencesSection";

export default function Home() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <HeroSection logoSrc="/logo-white.png" />
      <AboutSection />
      <WhatWeDoSection />
      <WhyOwaspSection />
      <EventsTimeline />
      <ResourcesHub />
      <OwaspReferencesSection />
      <ContactSection />
    </div>
  );
}
