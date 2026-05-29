import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white/60">
      <div className="page-wrap">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/owasp_full_logo.png"
              alt="OWASP SIST"
              width={140}
              height={50}
              className="h-8 w-auto opacity-100"
              draggable={false}
            />
            <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
            <p className="text-sm text-white/50 hidden sm:block font-light">
              Cultivating the next generation of cybersecurity leaders.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <Link href="https://github.com/owasp-sist" target="_blank" className="transition hover:text-white">
              GitHub
            </Link>
            <Link href="https://linkedin.com/company/owasp-sist" target="_blank" className="transition hover:text-white">
              LinkedIn
            </Link>
            <Link href="https://twitter.com/owasp-sist" target="_blank" className="transition hover:text-white">
              Twitter
            </Link>
            <Link href="mailto:contact@sist.owasp.org" className="flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} OWASP SIST Student Chapter. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
