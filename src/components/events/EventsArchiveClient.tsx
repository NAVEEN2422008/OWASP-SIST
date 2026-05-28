"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Filter, Search } from "lucide-react";
import { events } from "@/data/events";

export default function EventsArchiveClient() {
  const [category, setCategory] = useState<"All" | string>("All");
  const [search, setSearch] = useState("");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(events.map((event) => event.category)))],
    [],
  );

  const filtered = useMemo(
    () =>
      events
        .filter((event) => category === "All" || event.category === category)
        .filter(
          (event) =>
            event.title.toLowerCase().includes(search.toLowerCase()) ||
            event.description.toLowerCase().includes(search.toLowerCase()) ||
            event.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
        )
        .sort((a, b) => b.dateISO.localeCompare(a.dateISO)),
    [category, search],
  );

  return (
    <>
      <div className="mb-10 flex flex-col items-start justify-between gap-4 lg:flex-row">
        <div className="flex flex-wrap gap-3">
          {categories.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`page-filter ${category === option ? "is-active" : ""}`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--soft)]" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="page-input"
            placeholder="Search events, tags, or topics"
            aria-label="Search events"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filtered.length === 0 ? (
          <div className="page-empty">No events match your search criteria.</div>
        ) : (
          filtered.map((ev) => (
            <Link key={ev.slug} href={`/events/${ev.slug}`} aria-label={`Open event ${ev.title}`}>
              <article className="page-link-card glass-panel rounded-[1.9rem] p-8 transition-all hover:-translate-y-1">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/4 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyber-blue">
                      <Filter className="h-3.5 w-3.5" />
                      {ev.category}
                    </span>
                    <h2 className="mt-4 text-3xl font-heading font-bold text-white">{ev.title}</h2>
                    <p className="mt-4 leading-relaxed text-[color:var(--muted)]">{ev.description}</p>
                  </div>
                  <div className="flex flex-col gap-3 text-right text-sm text-[color:var(--muted)]">
                    <span className="font-mono uppercase tracking-[0.25em]">{ev.dateISO}</span>
                    <div className="flex flex-wrap justify-end gap-2">
                      {ev.tags.map((tag) => (
                        <span key={tag} className="page-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
