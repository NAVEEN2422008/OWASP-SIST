"use client";

import { motion } from "framer-motion";
import CyberCard from "@/components/ui/CyberCard";

const teamRoles = [
  {
    role: "Leadership",
    description: "Driving vision and strategy",
    members: 3,
  },
  {
    role: "Technical Team",
    description: "Workshop & CTF organization",
    members: 8,
  },
  {
    role: "Community Team",
    description: "Engagement & recruitment",
    members: 5,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative page-section">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-widest inline-block border-b border-white/20 pb-2">
            Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate cybersecurity professionals dedicated to building the
            next generation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamRoles.map((team, idx) => (
            <CyberCard key={idx} delay={idx * 0.1}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{team.role}</h3>
                  <p className="text-gray-400 text-sm mt-1">{team.description}</p>
                </div>
                <div className="text-3xl font-black text-gray-300">
                  {team.members}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-gray-500 text-sm">Active members in this team</p>
              </div>
            </CyberCard>
          ))}
        </div>
      </div>
    </section>
  );
}
