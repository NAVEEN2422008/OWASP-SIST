"use client";

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils";

const navigation = [
  { name: "About", href: "#about" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "Why OWASP", href: "#why-owasp" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();

    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    const header = document.querySelector("header");
    const offset = header?.clientHeight ?? 88;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control body overflow when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
          <Image
            src="/owasp_full_logo.png"
            alt="OWASP SIST"
            width={160}
            height={56}
            priority
            className="h-8 w-auto opacity-100"
            draggable={false}
          />
        </Link>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="flex lg:hidden items-center justify-center p-2 text-white/80 transition hover:text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      </header>

      {/* Mobile Menu Fullscreen Overlay - OUTSIDE of header to fix stacking context clipping */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex flex-col px-6 py-6">
          <div className="flex items-center justify-between shrink-0">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/owasp_full_logo.png"
                alt="OWASP SIST"
                width={140}
                height={48}
                className="h-7 w-auto"
                draggable={false}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-8 flex-1 overflow-y-auto hide-scrollbar">
            <div className="flex flex-col space-y-1 pb-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="block px-4 py-4 text-lg sm:text-xl font-light text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
