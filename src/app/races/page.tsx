"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavMenu } from "@/components/NavMenu";

const races = [
  {
    name: "Alethi",
    region: "Alethkar",
    characters: ["Kaladin", "Dalinar", "Adolin", "Jasnah", "Navani"],
    traits: "Tall stature, tan skin, black hair, epicanthic folds",
    eyes: "Both lighteyes and darkeyes present",
    inspiration: "Asian-Hawaiian / East Indian",
  },
  {
    name: "Vedens",
    region: "Jah Keved",
    characters: ["Shallan (has Horneater ancestry)"],
    traits: "Fair skin, red hair possible (from Horneater ancestry)",
    eyes: "Lighteyes and darkeyes",
    inspiration: "Asian-Caucasian blend, leaning more Asian",
  },
  {
    name: "Unkalaki / Horneaters",
    region: "Horneater Peaks",
    characters: ["Rock", "his family"],
    traits: "Light tan/fair skin, red hair, large build, strong back molars",
    note: "Parshendi hybrid ancestry",
    inspiration: "Polynesian-Russian blend",
  },
  {
    name: "Herdazians",
    region: "Herdaz",
    characters: ["Lopen"],
    traits: "Deep tan skin (darker than Alethi), dark crystalline fingernails",
    note: "Parshendi hybrid ancestry",
    inspiration: "Hispanic",
  },
  {
    name: "Thaylens",
    region: "Thaylenah",
    characters: ["Rysn", "Vstim"],
    traits: "Long white eyebrows",
    inspiration: "Unknown/Unique",
  },
  {
    name: "Natan",
    region: "Former Natanatan",
    characters: [],
    traits: "Pale bluish skin, wide nose, wool-like white hair",
    note: "Aimian hybrid ancestry",
  },
  {
    name: "Makabaki",
    region: "Former Makabakam",
    characters: ["Lift", "Gawx", "the Azish"],
    traits: "Dark brown/black skin, black hair",
    note: "Notable subgroups: Azish, Emuli, Tukari",
    inspiration: "Sub-Saharan African",
  },
  {
    name: "Selay",
    region: "Former Sela Tales",
    characters: [],
    traits: "Skin ripples",
    note: "Subgroups: Purelakers (leathery skin, dark hair, long limbs), Babath (women display vein patterns - Aimian heritage)",
  },
  {
    name: "Iriali",
    region: "Iri/Rira",
    characters: [],
    traits: "Yellow eyes, golden skin (often painted), golden metallic-sheen hair",
    note: "Completely unique - the golden hair is literally metallic",
  },
  {
    name: "Shin",
    region: "Shinovar",
    characters: ["Szeth"],
    traits: "Short stature, pale skin, large round eyes, male baldness pattern",
    note: "Lack epicanthic folds - the ONLY Rosharan ethnicity without them. Often seen as 'childlike' by other Rosharans due to round eyes.",
  },
  {
    name: "Reshi",
    region: "Reshi Isles",
    characters: [],
    traits: "Tan skin, straight black hair, rounded features",
    inspiration: "Hispanic culture representation",
  },
];

export default function RacesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-20">
      <NavMenu />
      <ThemeToggle />

      {/* Header */}
      <section className="pt-20 pb-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-glow">
            Human Races of{" "}
            <span className="text-[var(--accent)]">Roshar</span>
          </h1>

          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            A guide to the ethnicities of Roshar for accurate fan casting
          </p>
        </div>
      </section>

      {/* Important Context */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Important Context</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                &ldquo;Normal&rdquo; eyes on Roshar have epicanthic folds. The Shin are the exception with round eyes —
                the opposite of Earth&apos;s demographics. This means most characters (Kaladin, Dalinar, Adolin, etc.)
                should be cast with actors of Asian, Pacific Islander, or similar heritage for accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Races Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {races.map((race) => (
            <div
              key={race.name}
              className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-serif font-bold text-xl text-[var(--accent)]">
                    {race.name}
                  </h2>
                  <p className="text-sm text-[var(--muted)]">{race.region}</p>
                </div>
                {race.inspiration && (
                  <span className="text-xs bg-[var(--accent)]/20 text-[var(--accent)] px-2 py-1 rounded-full">
                    {race.inspiration}
                  </span>
                )}
              </div>

              {race.characters.length > 0 && (
                <div className="mb-3">
                  <span className="text-sm font-medium text-[var(--foreground)]">Characters: </span>
                  <span className="text-sm text-[var(--muted)]">
                    {race.characters.join(", ")}
                  </span>
                </div>
              )}

              <div className="mb-3">
                <span className="text-sm font-medium text-[var(--foreground)]">Physical Traits: </span>
                <span className="text-sm text-[var(--muted)]">{race.traits}</span>
              </div>

              {race.eyes && (
                <div className="mb-3">
                  <span className="text-sm font-medium text-[var(--foreground)]">Eyes: </span>
                  <span className="text-sm text-[var(--muted)]">{race.eyes}</span>
                </div>
              )}

              {race.note && (
                <div className="mt-3 pt-3 border-t border-[var(--border)]">
                  <p className="text-sm italic text-[var(--muted)]">{race.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="border-t border-[var(--border)] pt-8">
          <h3 className="font-serif font-semibold text-lg mb-4 text-center">Sources</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="https://www.17thshard.com/forums/topic/55723-human-races-on-roshar-a-brief-guide-ver10/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              17th Shard Forum Guide
            </a>
            <a
              href="https://www.tumblr.com/arkadion-of-sages/136888977286/human-races-on-roshar-a-brief-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Tumblr Mirror
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
