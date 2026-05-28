"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import CyberCard from "@/components/ui/CyberCard";
import Button from "@/components/ui/Button";
import { chapterLocation } from "@/data/chapter";
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

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <CyberCard className="text-center p-8">
            <Mail className="mx-auto mb-6 h-8 w-8 text-white/60" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-white mb-3">Email</h3>
            <p className="text-sm text-white/50 font-light">{siteConfig.email}</p>
          </CyberCard>

          <CyberCard className="text-center p-8">
            <MapPin className="mx-auto mb-6 h-8 w-8 text-white/60" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-white mb-3">Location</h3>
            <p className="text-sm text-white/50 font-light">{chapterLocation}</p>
          </CyberCard>

          <CyberCard className="text-center p-8">
            <Phone className="mx-auto mb-6 h-8 w-8 text-white/60" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-white mb-3">Community</h3>
            <p className="text-sm text-white/50 font-light">Join our Discord and campus security network.</p>
          </CyberCard>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-[#050505] p-8 max-w-3xl mx-auto"
        >
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-transparent px-5 py-3.5 text-white placeholder:text-white/20 focus:border-white/40 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
              <input
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-transparent px-5 py-3.5 text-white placeholder:text-white/20 focus:border-white/40 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-white/20 focus:border-white/40 focus:outline-none resize-none transition-colors"
              placeholder="Your message..."
            />
          </div>

          <button type="button" className="w-full rounded-full bg-white text-black py-4 text-sm font-medium transition hover:bg-white/90">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
