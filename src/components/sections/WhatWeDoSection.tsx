"use client";

import { motion } from "framer-motion";
import { BookOpen, Megaphone, Target, Users } from "lucide-react";
import { chapterWhatWeDo } from "@/data/chapter";
import CyberCard from "@/components/ui/CyberCard";

const featureIcons = [BookOpen, Target, Users, Megaphone] as const;

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="relative overflow-hidden py-24 page-section bg-black">
      <div className="relative z-10 page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Our focus areas</p>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white">
            Practical security learning for every student.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {chapterWhatWeDo.map((feature, idx) => {
            const Icon = featureIcons[idx];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <CyberCard className="flex h-full flex-col p-8">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-4 text-xl font-heading font-medium tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="grow text-sm leading-relaxed text-white/60 font-light">
                    {feature.description}
                  </p>
                </CyberCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
