"use client";

import { motion } from "framer-motion";
import { resources } from "@/data/resources";

const owaspLinks = resources.filter((r) => r.category === "OWASP");

export default function OwaspReferencesSection() {
  return (
    <section id="owasp-references" className="relative py-24 page-section bg-black">
      <div className="page-wrap">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono"
          >
            Standards & toolkits
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white mb-6"
          >
            OWASP references
          </motion.h2>
          <p className="mx-auto max-w-3xl text-white/60 font-light leading-relaxed">
            The most used OWASP projects and documentation—kept one click away.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4">
            {owaspLinks.map((link, idx) => (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#050505] px-6 py-5 hover:border-white/30 transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                    <div className="truncate text-base font-medium tracking-tight text-white">
                      {link.name}
                    </div>
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-white/50 font-light">
                    {link.description}
                  </div>
                </div>

                <div className="ml-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  Open
                  <span
                    className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
