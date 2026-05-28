/**
 * Tailwind CSS Configuration for OWASP-SIST cinematic minimal UI.
 * Dark-first palette, fluid typography, and restrained premium accent.
 */
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#000000",
        "bg-secondary": "#050505",
        "surface": "#0a0a0a",
        "surface-soft": "rgba(255,255,255,0.03)",
        "surface-strong": "rgba(255,255,255,0.08)",
        "text-primary": "#ffffff",
        "text-muted": "#999999",
        "text-soft": "rgba(255,255,255,0.75)",
        "border-subtle": "rgba(255,255,255,0.10)",
        "border-strong": "rgba(255,255,255,0.20)",
        "accent-primary": "#ffffff",
        "accent-soft": "rgba(255,255,255,0.15)",
      },
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Bricolage Grotesque", "DM Sans", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tighter: "-0.04em",
      },
      lineHeight: {
        relaxed: "1.6",
      },
      spacing: {
        section: "18vh",
      },
      fontSize: {
        display: "clamp(3.25rem,7.5vw,7.75rem)",
        section: "clamp(2rem,5vw,4rem)",
        body: "clamp(1rem,1.2vw,1.25rem)",
      },
      boxShadow: {
        premium: "0 24px 70px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

