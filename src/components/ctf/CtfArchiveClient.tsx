"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { ctfChallenges } from "@/data/ctf";

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export default function CtfArchiveClient() {
  const [difficulty, setDifficulty] = useState<typeof difficulties[number]>("All");
  const [search, setSearch] = useState("");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(ctfChallenges.map((challenge) => challenge.category)))],
    [],
  );
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      ctfChallenges
        .filter((challenge) => difficulty === "All" || challenge.difficulty === difficulty)
        .filter((challenge) => category === "All" || challenge.category === category)
        .filter(
          (challenge) =>
            challenge.name.toLowerCase().includes(search.toLowerCase()) ||
            challenge.description.toLowerCase().includes(search.toLowerCase()) ||
            challenge.category.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((a, b) => a.points - b.points),
    [difficulty, category, search],
  );

  return (
    <>
      <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-wrap gap-3">
          {difficulties.map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`page-filter ${difficulty === level ? "is-active" : ""}`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--soft)]" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="page-input"
            placeholder="Search CTF challenge"
            aria-label="Search CTF challenges"
          />
        </div>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
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

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.length === 0 ? (
          <div className="page-empty">No challenges match that selection.</div>
        ) : (
          filtered.map((challenge) => (
            <Link key={challenge.slug} href={`/ctf/${challenge.slug}`}>
              <article className="page-link-card glass-panel rounded-[1.7rem] p-6 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-sm uppercase tracking-[0.3em] text-cyber-blue">
                      {challenge.category}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-white">{challenge.name}</h3>
                    <p className="mt-3 leading-relaxed text-[color:var(--muted)]">
                      {challenge.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xs uppercase text-[color:var(--soft)]">
                      Difficulty
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {challenge.difficulty}
                    </div>
                    <div className="mt-4 font-mono text-xs uppercase text-[color:var(--soft)]">
                      Points
                    </div>
                    <div className="text-white/90">{challenge.points}</div>
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
