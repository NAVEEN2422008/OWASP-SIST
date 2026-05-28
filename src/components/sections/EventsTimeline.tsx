"use client";

import { motion } from "framer-motion";
import { events } from "@/data/events";

export default function EventsTimeline() {
  return (
    <section id="events" className="relative py-24 page-section bg-black">
      <div className="page-wrap">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block pb-4 text-3xl font-heading font-light tracking-tight text-white md:text-5xl"
          >
            Operation Timeline
          </motion.h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto relative">
          {/* Vertical subtle line */}
          <div className="absolute left-4 md:left-[90px] top-4 bottom-4 w-px bg-white/10 hidden sm:block"></div>
          
          {events.map((event, index) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-[#050505] hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 pt-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                    {event.dateLabel ?? event.dateISO.slice(0, 4)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 mb-4">
                    {event.description}
                  </p>
                  <span className="inline-block border border-white/10 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    {event.theme}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
