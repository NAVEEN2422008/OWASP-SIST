// MatrixCursor.tsx
// Custom cursor for OWASP-SIST: hollow white circle, GSAP-driven, blend mode on hover
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MatrixCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const scaleTween = useRef<gsap.core.Tween | null>(null);
  const blendTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none';
      return;
    }
    // Hide native cursor
    document.body.style.cursor = 'none';
    // GSAP quickTo for x/y
    const setX = gsap.quickTo(cursor, 'left', { duration: 0.18, ease: 'power3' });
    const setY = gsap.quickTo(cursor, 'top', { duration: 0.18, ease: 'power3' });
    const move = (e: MouseEvent) => {
      setX(e.clientX - 16);
      setY(e.clientY - 16);
    };
    window.addEventListener('mousemove', move);
    // Interactive hover logic
    const onEnter = () => {
      scaleTween.current?.kill();
      scaleTween.current = gsap.to(cursor, { scale: 3, borderWidth: 2, background: '#fff', duration: 0.25, ease: 'power2.out' });
      blendTween.current?.kill();
      blendTween.current = gsap.to(cursor, { mixBlendMode: 'difference', duration: 0.2 });
    };
    const onLeave = () => {
      scaleTween.current?.kill();
      scaleTween.current = gsap.to(cursor, { scale: 1, borderWidth: 1, background: 'transparent', duration: 0.25, ease: 'power2.in' });
      blendTween.current?.kill();
      blendTween.current = gsap.to(cursor, { mixBlendMode: 'normal', duration: 0.2 });
    };
    // Attach to all interactive elements
    const selectors = 'a,button,[role="button"],.cursor-interactive';
    const nodes = Array.from(document.querySelectorAll(selectors));
    nodes.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      nodes.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      document.body.style.cursor = '';
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        border: '1px solid #fff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'transparent',
        mixBlendMode: 'normal',
        transition: 'background 0.2s',
      }}
      aria-hidden="true"
    />
  );
}
