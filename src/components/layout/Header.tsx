"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils";

const navigation = [
  { name: "About", href: "#about" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "Why OWASP", href: "#why-owasp" },
  { name: "Events", href: "#events" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
            src="/logo-white.png"
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

      {/* Mobile Menu Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black flex flex-col px-6 py-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/logo-white.png"
                alt="OWASP SIST"
                width={140}
                height={48}
                className="h-7 w-auto"
                draggable={false}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-16 flex flex-col space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-3xl font-light text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
