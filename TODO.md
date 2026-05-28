# TODO - OWASP SIST Futuristic Minimal UI

- [x] Inspect existing app structure (Hero/Archive/Repository/etc.)
- [x] Read prompt-based animation requirements (animation.prompt.md, hero.prompt.md)
- [x] Read OWASP - SIST.md content to ensure UI sections map to required text
- [x] Verify existing data sources (chapter.ts, events.ts, resources.ts)
- [ ] Apply animation + UI spec consistently across missing sections
- [ ] Replace placeholder team images with correct assets or safe fallbacks
- [ ] Integrate About/What We Do/Difference/Resources/Events into homepage with correct IDs
- [ ] Add reduced-motion support for GSAP/Framer animations
- [ ] Add accessibility improvements (focus states, semantic landmarks, reduced motion)
- [ ] Run lint/build (requires enabling npm script execution on this Windows host)

## Scroll performance fixes
- [x] Fix Lenis TS option mismatch (`smoothTouch` -> use supported options)
- [x] Tweak Lenis timing to reduce jitter
- [ ] Add `prefers-reduced-motion` gating + optional hard-disable Lenis to eliminate lagging/scroll jitter

