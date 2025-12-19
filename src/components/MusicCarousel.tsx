"use client";

import { useRef, useState, useEffect } from "react";
import { tracks, MUSIC_ATTRIBUTION } from "@/data/music";
import { MusicCard } from "./MusicCard";

export function MusicCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Split tracks into two rows
  const row1Tracks = tracks.filter((_, i) => i % 2 === 0);
  const row2Tracks = tracks.filter((_, i) => i % 2 === 1);

  // Triple the tracks for seamless infinite scroll
  const row1Extended = [...row1Tracks, ...row1Tracks, ...row1Tracks];
  const row2Extended = [...row2Tracks, ...row2Tracks, ...row2Tracks];

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Manual scroll handlers
  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 480; // 2 cards worth
    const rows = [row1Ref.current, row2Ref.current];

    rows.forEach((row) => {
      if (row) {
        const newScrollLeft =
          direction === "left"
            ? row.scrollLeft - scrollAmount
            : row.scrollLeft + scrollAmount;
        row.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      [row1Ref.current, row2Ref.current].forEach((row) => {
        if (row) {
          // Calculate the width of one set of cards
          const cardWidth = 224; // 220px + 4px gap
          const oneSetWidth = cardWidth * row1Tracks.length;

          // Increment scroll
          row.scrollLeft += 1;

          // Reset to middle when we've scrolled past the first set
          if (row.scrollLeft >= oneSetWidth) {
            row.scrollLeft = 0;
          }
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused, row1Tracks.length]);

  return (
    <section
      id="music-carousel"
      className="py-16 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-[var(--accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                The Stormlight Soundtrack
              </h2>
            </div>
            <p className="text-[var(--muted)] mt-2">
              Click play on any track to begin your journey
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel rows */}
      <div>
        {/* Row 1 */}
        <div className="overflow-hidden mb-4">
          <div
            ref={row1Ref}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {row1Extended.map((track, index) => (
              <MusicCard
                key={`row1-${track.id}-${index}`}
                track={track}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Staggered offset */}
        <div className="overflow-hidden">
          <div
            ref={row2Ref}
            className="flex gap-4 overflow-x-auto scrollbar-hide carousel-row-offset"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {row2Extended.map((track, index) => (
              <MusicCard
                key={`row2-${track.id}-${index}`}
                track={track}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <p className="sm:hidden text-center text-sm text-[var(--muted)] mt-4 px-6">
        Swipe to browse more tracks
      </p>

      {/* Attribution */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <p className="text-center text-sm text-[var(--muted)]">
          {MUSIC_ATTRIBUTION}
        </p>
      </div>
    </section>
  );
}
