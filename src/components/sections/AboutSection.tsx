"use client";

import { motion } from "framer-motion";
import { Calendar, Library, ShieldCheck, Trophy } from "lucide-react";
import CyberCard from "@/components/ui/CyberCard";
import { chapterIntroduction } from "@/data/chapter";
import { events } from "@/data/events";
import { resources } from "@/data/resources";

const stats = [
  { label: "Events Logged", value: events.length, icon: Calendar },
  { label: "Learning Resources", value: resources.length, icon: Library },
  {
    label: "CTF-Led Drills",
    value: events.filter((event) => event.category === "CTF").length,
    icon: Trophy,
  },
  {
    label: "Security References",
    value: resources.filter((resource) => resource.category === "OWASP").length,
    icon: ShieldCheck,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 page-section bg-black">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">
            Chapter mission
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white mb-6">
            Building security expertise, one student at a time.
          </h2>
          <div className="mx-auto max-w-2xl text-center text-white/60 font-light leading-relaxed">
            We are an official OWASP student chapter focused on hands-on application security, community collaboration,
            and real-world training for the next generation of cyber defenders.
          </div>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CyberCard className="h-full px-8 py-12 flex flex-col justify-center">
              <h3 className="mb-6 text-2xl font-heading font-medium tracking-tight text-white">
                Who we are
              </h3>
              <p className="mb-6 text-base leading-relaxed text-white/60 font-light">
                OWASP Sathyabama Institute of Science and Technology Student Chapter is an official branch of the OWASP Foundation. We promote secure development practices,
                host workshops, and build a campus community around application security.
              </p>
              <p className="text-base leading-relaxed text-white/60 font-light">
                {chapterIntroduction[1]}
              </p>
            </CyberCard>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <CyberCard className="flex flex-col items-start justify-between gap-6 rounded-2xl p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
                    <stat.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-4xl font-heading font-light text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">{stat.label}</p>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
