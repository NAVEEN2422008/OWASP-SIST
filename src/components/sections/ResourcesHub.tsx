"use client";

import { motion } from "framer-motion";
import { resources } from "@/data/resources";
import ResourceGrid from "@/components/sections/ResourceGrid";

export default function ResourcesHub() {
  return (
    <section id="resources" className="relative py-24 page-section bg-black">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Learning Hub</p>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white mb-6">
            Curated Security Resources
          </h2>
          <p className="max-w-2xl mx-auto text-white/60 font-light leading-relaxed">
            Discover curated YouTube channels, hands-on practice platforms,
            and OWASP references in one unified learning shelf.
          </p>
        </motion.div>

        <ResourceGrid resources={resources} />
      </div>
    </section>
  );
}
