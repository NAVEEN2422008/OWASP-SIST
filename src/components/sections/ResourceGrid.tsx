"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Cpu,
  ExternalLink,
  Gamepad2,
  PlaySquare,
  ShieldCheck,
  Search,
  SearchX,
} from "lucide-react";
import { ResourceItem } from "@/data/resources";

const iconMap: Record<string, React.ComponentType<{ className?: string, strokeWidth?: number }>> = {
  YouTube: PlaySquare,
  Platform: Gamepad2,
  OWASP: ShieldCheck,
  Books: BookOpen,
  Labs: Cpu,
};

export default function ResourceGrid({ resources }: { resources: ResourceItem[] }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(resources.map((item) => item.category)))],
    [resources],
  );

  const filteredResources = useMemo(
    () =>
      resources.filter((item) => {
        const matchesFilter = filter === "All" || item.category === filter;
        const query = search.toLowerCase();
        const matchesSearch =
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query);
        return matchesFilter && matchesSearch;
      }),
    [filter, search, resources],
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="flex flex-1 flex-wrap justify-center gap-3 lg:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                filter === category
                  ? "border-white text-white bg-white/10"
                  : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-96">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
            <Search className="h-4 w-4 text-white/40" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search resources..."
            className="w-full rounded-full border border-white/20 bg-transparent py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 min-h-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredResources.map((item) => {
            const Icon = iconMap[item.category] || PlaySquare;
            return (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-[#050505] p-6 transition-colors hover:border-white/30 hover:bg-[#0a0a0a] flex flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{item.name}</h3>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/30 transition-colors group-hover:text-white/80" />
                  </div>
                  <p className="leading-relaxed text-sm text-white/60 font-light grow">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            );
          })}

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-24 flex flex-col items-center justify-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/40">
                <SearchX className="h-8 w-8" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No resources found</h3>
              <p className="text-white/40 font-light max-w-sm mb-6">
                We couldn&apos;t find anything matching &quot;{search}&quot;. Try adjusting your search or category filter.
              </p>
              <button 
                onClick={() => { setSearch(""); setFilter("All"); }}
                className="text-sm border border-white/20 px-6 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
