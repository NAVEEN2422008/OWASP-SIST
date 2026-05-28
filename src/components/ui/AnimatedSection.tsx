"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fadeIn" | "slideUp" | "scaleIn" | "stagger";
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animationType = "fadeIn",
  delay = 0,
  duration = 0.8,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;

    // Set initial state
    gsap.set(element, {
      opacity: animationType === "fadeIn" ? 0 : 1,
      y: animationType === "slideUp" ? 40 : 0,
      scale: animationType === "scaleIn" ? 0.95 : 1,
    });

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 50%",
        scrub: false,
      },
    });

    tl.to(
      element,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        ease: "power3.out",
        delay,
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationType, delay, duration]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
