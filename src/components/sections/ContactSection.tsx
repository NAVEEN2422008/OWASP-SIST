"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import CyberCard from "@/components/ui/CyberCard";
import { siteConfig } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 page-section bg-black">
      <div className="page-wrap">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Reach out</p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white mb-6"
          >
            Let&rsquo;s build secure systems together.
          </motion.h2>
          <p className="mx-auto max-w-2xl text-white/60 font-light leading-relaxed">
            Questions, partnerships, or event requests? Send us a message and we&apos;ll connect you with the OWASP SIST team.
          </p>
        </div>

        <div className="grid gap-6 mb-12 max-w-md mx-auto">
          <CyberCard className="text-center p-8">
            <Mail className="mx-auto mb-6 h-8 w-8 text-white/60" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-white mb-3">Email</h3>
            <p className="text-sm text-white/50 font-light">{siteConfig.email}</p>
          </CyberCard>
        </div>
      </div>
    </section>
  );
}
