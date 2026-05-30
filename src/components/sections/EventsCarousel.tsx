"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ParsedEvent } from "@/lib/github-events";
import { Calendar, MapPin, User } from "lucide-react";

interface EventsCarouselProps {
  events: ParsedEvent[];
}

export default function EventsCarousel({ events }: EventsCarouselProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Translate the full row of cards from right-edge-flush to far left
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <div className="bg-black">
      {/* ── Section header: scrolls normally so it disappears before cards pin ── */}
      <div className="px-6 md:px-24 pt-24 md:pt-32 pb-16 md:pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-heading font-light tracking-tight text-white mb-4"
        >
          Operation Timeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 text-sm md:text-base font-light tracking-wide max-w-md"
        >
          Scroll to explore our upcoming and completed missions.
          Live data from GitHub.
        </motion.p>
      </div>

      {/* ── Sticky horizontal scroll zone ── */}
      {/* Height = how long user needs to scroll to traverse all cards */}
      <section ref={targetRef} className="relative h-[400vh] bg-black">
        {/* The sticky viewport window — full screen, clips only horizontally */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* The horizontally translating row */}
          <motion.div
            style={{ x }}
            className="flex h-full items-center gap-6 pl-6 md:pl-24"
          >
            {events.length === 0 ? (
              <EmptyState />
            ) : (
              events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            )}

            {/* End cap */}
            {events.length > 0 && (
              <div className="flex-shrink-0 w-24 md:w-48 flex flex-col items-center gap-3 opacity-30 pr-6">
                <div className="h-px w-12 bg-white" />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white text-center">
                  End
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex-shrink-0 w-80 text-white/40 italic text-center border border-white/10 p-10 rounded-2xl">
      No events found.
    </div>
  );
}

function EventCard({ event }: { event: ParsedEvent }) {
  const isUpcoming = event.status === "upcoming";

  return (
    <div
      className="
        group relative flex-shrink-0 flex flex-col
        rounded-2xl border border-white/10 bg-[#0a0a0a]
        overflow-hidden
        hover:border-white/25 transition-colors duration-500
        w-[min(400px,80vw)]
        h-[min(480px,calc(100vh-6rem))]
      "
    >
      {/* ── Image ── */}
      <div className="relative w-full flex-shrink-0 overflow-hidden bg-[#111]"
           style={{ height: "45%" }}>
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="400px"
            className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          /* Elegant fallback: subtle grid + monogram */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
            <span className="font-mono text-5xl font-bold text-white/5 select-none">
              OWASP
            </span>
          </div>
        )}

        {/* Gradient overlay at bottom of image so text below reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`
              inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
              text-[9px] font-mono uppercase tracking-[0.18em] border backdrop-blur-md
              ${isUpcoming
                ? "bg-white/10 border-white/20 text-white"
                : "bg-black/50 border-white/10 text-white/50"
              }
            `}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isUpcoming ? "bg-white" : "bg-white/40"}`} />
            {isUpcoming ? "Upcoming" : "Completed"}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-grow px-6 py-5 overflow-hidden">
        <h3 className="text-lg font-medium text-white leading-snug line-clamp-2 mb-3">
          {event.title}
        </h3>

        {event.topic && (
          <p className="text-xs text-white/40 line-clamp-2 leading-relaxed font-light mb-4">
            {event.topic}
          </p>
        )}

        {/* Meta row pinned to bottom */}
        <div className="mt-auto space-y-2 border-t border-white/5 pt-4">
          {event.dateStr && (
            <div className="flex items-center gap-2.5 text-[11px] text-white/50">
              <Calendar className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
              <span className="font-mono uppercase tracking-wider truncate">{event.dateStr}</span>
            </div>
          )}
          {event.speaker && (
            <div className="flex items-center gap-2.5 text-[11px] text-white/50">
              <User className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
              <span className="truncate">{event.speaker}</span>
            </div>
          )}
          {event.venue && (
            <div className="flex items-center gap-2.5 text-[11px] text-white/50">
              <MapPin className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
