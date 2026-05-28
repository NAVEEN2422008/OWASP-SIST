"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered once for client components.
// Components can safely use `scrollTrigger: {...}` in GSAP tweens/timelines.
export function registerGsapPlugins() {
    gsap.registerPlugin(ScrollTrigger);
}

