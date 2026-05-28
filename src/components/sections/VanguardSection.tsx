// VanguardSection.tsx
// Leadership roster with GSAP text hover image reveal (monochrome)
'use client';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import Image from "next/image";

// NOTE: keep this component isolated—no global GSAP side-effects to avoid scroll jitter.



const LEADERS = [
  {
    name: 'Albert Mayan John',
    role: 'Faculty Advisor',
    img: '/team/albert-mayan-john-bw.jpg', // Placeholder path
  },
  {
    name: 'Chella Dhanush',
    role: 'Chapter Leader (Feb 2023 - May 2025)\nDevSecOps, Drone Forensics',
    img: '/team/chella-dhanush-bw.jpg', // Placeholder path
  },
  {
    name: 'Jones Martin',
    role: 'Chapter Leader',
    img: '/team/jones-martin-bw.jpg', // Placeholder path
  },
];

export default function VanguardSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRefs = useRef<(HTMLDivElement | null)[]>([]);

  // SplitType for heading
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!headingRef.current) return;
    const split = new SplitType(headingRef.current, { types: 'chars' });

    gsap.from(split.chars, {
      y: '100%',
      opacity: 0,
      stagger: 0.05,
      duration: 1.1,
      ease: gsap.parseEase('M0,0 C0.19,1 0.22,1 1,1'),
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    });
    return () => split.revert();
  }, []);

  // Image follows mouse with drag
  useEffect(() => {
    if (hovered === null || !imageRef.current) return;
    const move = (e: MouseEvent) => {
      gsap.to(imageRef.current, {
        x: e.clientX + 32,
        y: e.clientY - 32,
        duration: 0.3,
        ease: 'power3.out',
      });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [hovered]);

  return (
    <section className="w-full min-h-[50vh] flex flex-col items-center justify-center py-section bg-bg-primary text-text-pure select-none relative">
      <h2 ref={headingRef} className="font-sans font-extrabold text-section tracking-tighter text-center leading-[1.05] mb-16" style={{ letterSpacing: '-0.04em' }}>
        The Vanguard
      </h2>
      <div className="flex flex-col gap-12 items-center relative z-10">
        {LEADERS.map((leader, i) => (
          <div
            key={leader.name}
            ref={(el) => {
              nameRefs.current[i] = el;
            }}
            className="text-3xl md:text-5xl font-bold tracking-tighter cursor-interactive transition-opacity duration-200"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}

            style={{ letterSpacing: '-0.04em', position: 'relative', zIndex: 20 }}
          >
            {leader.name}
            <span className="block text-base font-mono font-normal mt-2 opacity-60 tracking-normal leading-tight">
              {leader.role}
            </span>
          </div>
        ))}
      </div>
      {/* Hover image reveal, follows cursor, only visible on hover */}
      {hovered !== null && (
        <div
          ref={imageRef}
          className="fixed pointer-events-none z-30 w-40 h-40 rounded-2xl overflow-hidden border-2 border-white shadow-xl"
          style={{ left: 0, top: 0 }}
        >
          <Image
            src={LEADERS[hovered].img}
            alt={LEADERS[hovered].name}
            fill
            sizes="160px"
            className="object-cover grayscale contrast-125"
            draggable={false}
          />
        </div>
      )}
    </section>
  );
}
