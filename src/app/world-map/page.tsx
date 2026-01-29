"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavMenu } from "@/components/NavMenu";

export default function WorldMapPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-48">
      <NavMenu />
      <ThemeToggle />

      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/assets/world-map.jpg"
          alt="Map of Roshar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/60 via-transparent to-[var(--background)]" />

        <div className="absolute top-4 left-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="pb-12 px-6 text-center relative overflow-hidden -mt-16">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-glow">
            World Map of{" "}
            <span className="text-[var(--accent)]">Roshar</span>
          </h1>

          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Explore the continent of Roshar, from the Shattered Plains to Shinovar
          </p>
        </div>
      </section>

      {/* Full Map Section */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-4 overflow-hidden">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/assets/world-map.jpg"
              alt="Full map of Roshar"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>

        <p className="text-center text-sm text-[var(--muted)] mt-4">
          Click and drag to explore. The map shows the main continent of Roshar.
        </p>
      </section>
    </main>
  );
}
