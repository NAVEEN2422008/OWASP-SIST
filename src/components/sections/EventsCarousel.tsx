"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ParsedEvent } from "@/lib/github-events";
import { Calendar, MapPin, User, ChevronRight } from "lucide-react";

interface EventsCarouselProps {
  events: ParsedEvent[];
}

export default function EventsCarousel({ events }: EventsCarouselProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal translation based on number of events.
  // We want the total scrollable horizontal width to scale with the number of items.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen flex-col justify-start pt-24 md:pt-32 pb-10 overflow-hidden">
        
        {/* Timeline Header Area - Normal flow to prevent overlap */}
        <div className="px-6 md:px-24 z-10 flex flex-col pointer-events-none mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-light tracking-tight text-white mb-2"
          >
            Operation Timeline
          </motion.h2>
          <p className="text-white/50 text-sm md:text-base font-light tracking-wide max-w-sm">
            Scroll to explore our upcoming and completed missions. Data is fetched live from GitHub.
          </p>
        </div>

        {/* The horizontal moving track */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 items-center w-max">
          
          {events.length === 0 ? (
            <div className="text-white/40 italic flex-shrink-0 w-80 text-center border border-white/10 p-10 rounded-2xl">
              No events found.
            </div>
          ) : (
            events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))
          )}

          {/* End cap */}
          {events.length > 0 && (
            <div className="flex-shrink-0 w-32 md:w-64 flex flex-col items-center justify-center opacity-40">
              <div className="w-16 h-px bg-white mb-4" />
              <p className="font-mono text-xs uppercase tracking-widest text-white text-center">End of Timeline</p>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: ParsedEvent; index: number }) {
  const isUpcoming = event.status === "upcoming";

  return (
    <div className="group relative flex-shrink-0 w-[85vw] sm:w-[450px] flex flex-col rounded-3xl border border-white/10 bg-[#080808] overflow-hidden hover:border-white/20 transition-colors duration-500 h-[60vh] min-h-[420px] max-h-[500px]">
      
      {/* Top Image Area */}
      <div className="relative h-48 w-full bg-[#111] overflow-hidden border-b border-white/5 flex-shrink-0">
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[url('/grid.svg')] bg-center opacity-20">
            {/* Fallback pattern */}
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <div className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono border backdrop-blur-md
            ${isUpcoming 
              ? 'bg-white/10 border-white/20 text-white' 
              : 'bg-black/40 border-white/10 text-white/60'}`
          }>
            {isUpcoming ? '● Upcoming' : 'Completed'}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 line-clamp-2">
            {event.title}
          </h3>
          {event.topic && (
            <p className="text-sm text-white/50 line-clamp-3 leading-relaxed font-light">
              {event.topic}
            </p>
          )}
        </div>

        {/* Details Footer */}
        <div className="mt-auto space-y-3">
          {event.dateStr && (
            <div className="flex items-center gap-3 text-xs text-white/60">
              <Calendar className="w-4 h-4 text-white/40" />
              <span className="font-mono uppercase tracking-wider">{event.dateStr}</span>
            </div>
          )}
          {event.speaker && (
            <div className="flex items-center gap-3 text-xs text-white/60">
              <User className="w-4 h-4 text-white/40" />
              <span className="truncate">{event.speaker}</span>
            </div>
          )}
          {event.venue && (
            <div className="flex items-center gap-3 text-xs text-white/60">
              <MapPin className="w-4 h-4 text-white/40" />
              <span className="truncate">{event.venue}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
