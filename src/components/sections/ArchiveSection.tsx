// ArchiveSection.tsx
// Brutalist event archive with GSAP hover timeline (there-and-back physics)
'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const EVENTS = [
  {
    title: 'Career Catalyst',
    speaker: 'Mr. Pons Mudivai Arun (Product Leader, JumpCloud)',
    topic: 'Generation Alpha/Beta engineers & AI Prompt Queries',
    venue: 'Tmt. Soundrabai Auditorium',
    status: 'Offline',
  },
  {
    title: 'Careers in Space Research',
    speaker: 'Mr. A. Kishore (Senior Propellant Scientist, Canadian Space Agency)',
    topic: '',
    venue: 'AI Super Computing Lab',
    status: 'Offline',
  },
];

export default function ArchiveSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rowRefs = useRef<(HTMLDivElement|null)[]>([]);
  const metaRefs = useRef<(HTMLDivElement|null)[]>([]);
  const borderRefs = useRef<(HTMLDivElement|null)[]>([]);
  const timelines = useRef<gsap.core.Timeline[]>([]);

  // SplitType for heading
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

  // Setup GSAP timelines for each row
  useEffect(() => {
    timelines.current = EVENTS.map((_, i) => {
      const tl = gsap.timeline({ paused: true, reversed: true });
      if (borderRefs.current[i] && rowRefs.current[i] && metaRefs.current[i]) {
        tl.to(borderRefs.current[i], { scaleY: 2, borderColor: '#fff', duration: 0.25, ease: 'power2.out' }, 0)
          .to(rowRefs.current[i], { x: 20, duration: 0.25, ease: 'power2.out' }, 0)
          .to(metaRefs.current[i], { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0);
      }
      return tl;
    });
    // Cleanup
    return () => { timelines.current.forEach(tl => tl.kill()); };
  }, []);

  const handleEnter = (i: number) => {
    timelines.current[i]?.play();
  };
  const handleLeave = (i: number) => {
    timelines.current[i]?.reverse();
  };

  return (
    <section className="w-full min-h-[50vh] flex flex-col items-center justify-center py-section bg-bg-primary text-text-pure select-none">
      <h2 ref={headingRef} className="font-sans font-extrabold text-section tracking-tighter text-center leading-[1.05] mb-16" style={{ letterSpacing: '-0.04em' }}>
        The Archive
      </h2>
      <div className="w-full max-w-4xl flex flex-col gap-0">
        {EVENTS.map((event, i) => (
          <div
            key={event.title}
            ref={el => { rowRefs.current[i] = el!; return undefined; }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-8 border-b border-subtle cursor-interactive group overflow-hidden"
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            style={{ transition: 'background 0.2s' }}
          >
            {/* Animated border */}
            <div ref={el => { borderRefs.current[i] = el!; return undefined; }} className="absolute left-0 bottom-0 w-full h-px bg-white/10 scale-y-100 origin-left transition-transform duration-200" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} />
            <div className="flex-1">
              <div className="text-2xl md:text-3xl font-bold tracking-tighter mb-2">
                {event.title}
              </div>
              <div ref={el => { metaRefs.current[i] = el!; return undefined; }} className="opacity-0 translate-y-2 transition-all duration-200">
                <div className="text-base font-mono text-text-primary/80 mb-1">{event.speaker}</div>
                {event.topic && <div className="text-base text-text-primary/60 mb-1">{event.topic}</div>}
                <div className="text-sm text-text-primary/50">Venue: {event.venue} &middot; <span className="uppercase tracking-widest">{event.status}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
