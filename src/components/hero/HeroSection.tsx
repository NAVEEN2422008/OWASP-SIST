"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { registerGsapPlugins } from "@/lib/gsapClient";

export default function HeroSection({ logoSrc = "/logo-white.png" }: { logoSrc?: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!titleRef.current) return;
    const split = new SplitType(titleRef.current, { types: "words, chars" });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      stagger: 0.02,
      duration: 1,
      ease: "power3.out",
    });

    if (bgLogoRef.current) {
      gsap.to(bgLogoRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: bgLogoRef.current,
          start: "top top",
          scrub: 1,
        },
      });
    }

    return () => split.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden page-section bg-black">
      {/* Monochrome Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Background Subtle Logo */}
      <div
        ref={bgLogoRef}
        className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none"
      >
        <div className="relative w-[80vw] max-w-[800px] aspect-square">
          <Image
            src={logoSrc}
            alt="OWASP Background"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Soft gradient to fade out bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="page-wrap relative z-10 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex justify-center">
            <Image
              src={logoSrc}
              alt="OWASP SIST logo"
              width={160}
              height={56}
              className="h-14 w-auto object-contain opacity-90"
              priority
              draggable={false}
            />
          </div>
          <p className="mb-8 text-sm uppercase tracking-[0.4em] text-white/50 font-mono">
            Sathyabama Institute of Science and Technology
          </p>

          <h1
            ref={titleRef}
            className="mb-8 text-5xl font-heading font-light tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Empowering the Next Generation of Security.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 font-light"
          >
            A premium student chapter dedicated to practical application security training, hands-on CTFs, and a community built around OWASP best practices.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <button
            className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-medium transition hover:bg-white/90"
            onClick={() => document.getElementById("ctf")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Upcoming CTFs
          </button>
          <button
            className="rounded-full bg-transparent border border-white/20 text-white px-8 py-3.5 text-sm font-medium transition hover:bg-white/5"
            onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Resources
          </button>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 transition hover:text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <div className="h-10 w-px bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/80"
          />
        </div>
      </motion.button>
    </section>
  );
}
