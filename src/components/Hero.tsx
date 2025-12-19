"use client";

interface HeroProps {
  onScrollToMusic?: () => void;
}

export function Hero({ onScrollToMusic }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 text-glow">
          Welcome to the{" "}
          <span className="block mt-2 text-[var(--accent)]">
            Stormlight Archive
          </span>
        </h1>

        {/* The First Ideal */}
        <blockquote className="text-lg sm:text-xl md:text-2xl italic text-[var(--muted)] mb-12 max-w-2xl mx-auto leading-relaxed">
          &ldquo;Life before death.
          <br />
          Strength before weakness.
          <br />
          Journey before destination.&rdquo;
        </blockquote>

        {/* Helper section */}
        <div className="space-y-4">
          {/* Music icon + helper text */}
          <div className="flex items-center justify-center gap-3 text-[var(--foreground)]">
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
            <span className="text-lg">
              Choose a soundtrack for your journey
            </span>
          </div>

          {/* Sound on reminder */}
          <p className="text-sm text-[var(--muted)] flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
            Sound on for the full experience
          </p>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={onScrollToMusic}
          className="mt-16 animate-bounce cursor-pointer hover:text-[var(--accent)] transition-colors"
          aria-label="Scroll to music"
        >
          <svg
            className="w-8 h-8 mx-auto text-[var(--muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
