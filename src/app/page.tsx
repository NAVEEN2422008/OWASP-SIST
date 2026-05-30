import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import EventsTimeline from "@/components/sections/EventsTimeline";
import ContactSection from "@/components/sections/ContactSection";
import WhyOwaspSection from "@/components/sections/WhyOwaspSection";

export default function Home() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <HeroSection logoSrc="/owasp_full_logo.png" />
      <AboutSection />
      <WhatWeDoSection />
      <WhyOwaspSection />
      <EventsTimeline />
      <ContactSection />
    </div>
  );
}
