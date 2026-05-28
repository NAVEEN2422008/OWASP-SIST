"use client";

import { motion } from "framer-motion";
import { Flag } from "lucide-react";
import CyberCard from "@/components/ui/CyberCard";

export default function CtfArena() {
  return (
    <section id="ctf" className="py-24 relative bg-black border-y border-white/10 page-section">
      <div className="page-wrap">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4 text-white">
                <Flag className="w-8 h-8" strokeWidth={1} />
                <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white">
                  CTF Arena
                </h2>
              </div>
              <p className="text-white/60 mb-10 max-w-lg font-light leading-relaxed">
                Test your skills in our custom-built Capture-The-Flag platform.
                Compete against top students, hack simulated vulnerable
                environments, and climb the leaderboard.
              </p>

              <div className="flex flex-col gap-4">
                <CyberCard className="flex items-center gap-4 p-5 hover:bg-white/5 transition-colors cursor-pointer">
                  <Flag className="text-white/40 w-5 h-5" strokeWidth={1.5} />
                  <span className="text-white font-medium">SIST CTF Leaderboard &rarr;</span>
                </CyberCard>
                <CyberCard className="flex items-center gap-4 p-5 hover:bg-white/5 transition-colors cursor-pointer">
                  <Flag className="text-white/40 w-5 h-5" strokeWidth={1.5} />
                  <span className="text-white font-medium">Cyber Matrix Pre-Registration &rarr;</span>
                </CyberCard>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 w-full hidden md:flex justify-center">
             <Flag className="w-64 h-64 text-white/5" strokeWidth={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
