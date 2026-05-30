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
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Cards width = 340px + 24px gap each, n cards
  // We always translate to show the last card — "-85%" covers up to ~20 cards cleanly
  const xPct = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <div className="bg-black">
      {/* ── Header: sits above the scroll zone, disappears naturally ── */}
      <div className="px-5 sm:px-8 md:px-20 lg:px-28 pt-20 md:pt-28 pb-12 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35"
        >
          Chapter History
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-light tracking-tight text-white mb-4 text-4xl sm:text-5xl md:text-6xl"
        >
          Operation Timeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white/45 text-sm font-light max-w-xs leading-relaxed"
        >
          {events.length} event{events.length !== 1 ? "s" : ""} · newest first ·
          sourced from local JSON
        </motion.p>
      </div>

      {/* ── Sticky horizontal scroll zone ── */}
      {/*
          Height controls how long the user scrolls before the section ends.
          We add extra height proportional to number of events so the
          user has enough scroll distance to reach the last card.
      */}
      <section
        ref={trackRef}
        style={{ height: `${Math.max(300, events.length * 45)}vh` }}
        className="relative bg-black"
      >
        {/* The pinned viewport */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          {/* Translating track */}
          <motion.div
            style={{ x: xPct }}
            className="flex gap-5 sm:gap-6 items-stretch pl-5 sm:pl-8 md:pl-20 lg:pl-28 pr-16"
          >
            {events.length === 0 ? (
              <div className="flex-shrink-0 w-72 border border-white/10 rounded-2xl p-10 text-white/30 text-sm italic text-center">
                No events found. Check back soon.
              </div>
            ) : (
              events.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))
            )}

            {/* End-cap */}
            {events.length > 0 && (
              <div className="flex-shrink-0 w-20 flex flex-col items-center justify-center gap-3 opacity-25 pr-4">
                <div className="h-px w-8 bg-white" />
                <p className="font-mono text-[9px] uppercase tracking-widest text-white rotate-90 whitespace-nowrap">
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

/* ─── Individual event card ─── */
function EventCard({ event, index }: { event: ParsedEvent; index: number }) {
  const isUpcoming = event.status === "upcoming";
  // Clean up date: strip "[OFFLINE EVENT]" label
  const cleanDate = event.dateStr
    ? event.dateStr.replace(/\s*\[.*?\]/g, "").trim()
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px -200px 0px 0px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className={`
        group relative flex-shrink-0 flex flex-col
        rounded-2xl border bg-[#090909]
        transition-colors duration-500
        overflow-hidden
        w-[min(340px,82vw)]
        h-[min(460px,calc(100vh-9rem))]
        ${isUpcoming ? "border-white/20 hover:border-white/40" : "border-white/8 hover:border-white/18"}
      `}
    >
      {/* ── Image (top ~42% of card) ── */}
      <div
        className="relative w-full flex-shrink-0 overflow-hidden bg-[#111] border-b border-white/5"
        style={{ height: "42%" }}
      >
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 82vw, 340px"
            className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />
        ) : (
          /* Elegant no-image fallback */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <span className="relative font-mono text-[42px] font-bold text-white/[0.04] select-none tracking-widest">
              OWASP
            </span>
          </div>
        )}

        {/* Bottom fade so card body reads cleanly under the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`
              inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
              text-[9px] font-mono uppercase tracking-[0.16em]
              border backdrop-blur-sm
              ${
                isUpcoming
                  ? "bg-white/10 border-white/25 text-white"
                  : "bg-black/60 border-white/10 text-white/45"
              }
            `}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                isUpcoming ? "bg-white animate-pulse" : "bg-white/30"
              }`}
            />
            {isUpcoming ? "Upcoming" : "Completed"}
          </span>
        </div>

        {/* Index counter top-right */}
        <div className="absolute top-3 right-3 font-mono text-[10px] text-white/20 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Content body ── */}
      <div className="flex flex-col flex-grow px-5 py-4 overflow-hidden min-h-0">
        <h3 className="text-base font-medium text-white leading-snug line-clamp-2 mb-2 flex-shrink-0">
          {event.title}
        </h3>

        {event.topic && (
          <p className="text-[11px] text-white/38 line-clamp-2 leading-relaxed font-light mb-3 flex-shrink-0">
            {event.topic}
          </p>
        )}

        {/* Meta pinned to bottom */}
        <div className="mt-auto space-y-1.5 border-t border-white/[0.06] pt-3 flex-shrink-0">
          {cleanDate && (
            <div className="flex items-center gap-2 text-[10px] text-white/45">
              <Calendar className="w-3 h-3 text-white/25 flex-shrink-0" />
              <span className="font-mono uppercase tracking-wider truncate">
                {cleanDate}
              </span>
            </div>
          )}
          {event.speaker && (
            <div className="flex items-start gap-2 text-[10px] text-white/45">
              <User className="w-3 h-3 text-white/25 flex-shrink-0 mt-px" />
              <span className="line-clamp-2 leading-tight">{event.speaker}</span>
            </div>
          )}
          {event.venue && (
            <div className="flex items-start gap-2 text-[10px] text-white/45">
              <MapPin className="w-3 h-3 text-white/25 flex-shrink-0 mt-px" />
              <span className="line-clamp-2 leading-tight">{event.venue}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
