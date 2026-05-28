"use client";

import { motion } from "framer-motion";
import CyberCard from "@/components/ui/CyberCard";
import { owaspDifferenceItems } from "@/data/chapter";

export default function WhyOwaspSection() {
  return (
    <section id="why-owasp" className="relative py-24 page-section bg-black">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Why OWASP</p>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white mb-6">
            Real-world security learning powered by community trust.
          </h2>
          <p className="mx-auto max-w-3xl text-white/60 font-light leading-relaxed">
            We follow OWASP’s open-source, vendor-neutral standards to deliver practical application security training that students can use immediately.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {owaspDifferenceItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <CyberCard className="p-8 h-full">
                <div className="flex items-start gap-6">
                  <div
                    className="mt-1 h-2 w-2 rounded-full bg-white/40 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-xl font-heading font-medium tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/60 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
