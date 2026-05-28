// RepositorySection.tsx
// Minimal outbound links with GSAP kinetic hover states
'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const RESOURCES = [
    {
        label: 'Inauguration Event Recordings (Dec 2nd)',
        href: 'https://www.youtube.com/watch?v=example', // Replace with actual link
    },
    {
        label: 'OWASP-SIST GitHub Repositories',
        href: 'https://github.com/OWASP-SIST',
    },
];

export default function RepositorySection() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const arrowRefs = useRef<(HTMLSpanElement | null)[]>([]);
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

    // GSAP hover timeline for each link
    useEffect(() => {
        timelines.current = RESOURCES.map((_, i) => {
            const tl = gsap.timeline({ paused: true, reversed: true });
            if (arrowRefs.current[i] && linkRefs.current[i]) {
                tl.to(arrowRefs.current[i], { x: 12, opacity: 1, duration: 0.25, ease: 'power2.out' }, 0)
                    .to(linkRefs.current[i], { color: '#fff', duration: 0.25, ease: 'power2.out' }, 0);
            }
            return tl;
        });
        return () => { timelines.current.forEach(tl => tl.kill()); };
    }, []);

    const handleEnter = (i: number) => {
        timelines.current[i]?.play();
    };
    const handleLeave = (i: number) => {
        timelines.current[i]?.reverse();
    };

    return (
        <section className="w-full min-h-[40vh] flex flex-col items-center justify-center py-section bg-bg-primary text-text-pure select-none">
            <h2 ref={headingRef} className="font-sans font-extrabold text-section tracking-tighter text-center leading-[1.05] mb-12" style={{ letterSpacing: '-0.04em' }}>
                Knowledge Repository
            </h2>
            <div className="flex flex-col gap-8 items-center">
                {RESOURCES.map((res, i) => (
                    <a
                        key={res.href}
                        ref={(el) => {
                            if (!el) return;
                            linkRefs.current[i] = el;
                        }}
                        href={res.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 text-2xl font-semibold tracking-tighter cursor-interactive transition-colors duration-200 text-text-primary hover:text-text-pure"
                        onMouseEnter={() => handleEnter(i)}
                        onMouseLeave={() => handleLeave(i)}
                        style={{ letterSpacing: '-0.04em' }}
                    >
                        {res.label}
                        <span
                            ref={(el) => {
                                if (!el) return;
                                arrowRefs.current[i] = el;
                            }}
                            className="inline-block opacity-60 translate-x-0 transition-transform duration-200"
                        >
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14H21M21 14L15 8M21 14L15 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
