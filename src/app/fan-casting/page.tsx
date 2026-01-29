"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavMenu } from "@/components/NavMenu";

const castings = [
  {
    character: {
      name: "Kaladin Stormblessed",
      image: "/assets/kaladin.webp",
      quote: "The question is not whether you will love, hurt, dream, and die. It is what you will love, why you will hurt, when you will dream, and how you will die. This is your choice. You cannot pick the destination, only the path.",
      description: "A former soldier turned slave who becomes a legendary bridgeman and eventually a Knight Radiant. He is defined by his protective nature and struggle with depression.",
      race: "Alethi",
    },
    actor: {
      name: "Simu Liu",
      image: null,
      note: "Brandon Sanderson has stated Kaladin should be played by an Asian actor. Simu Liu's martial arts prowess in Shang-Chi and his age make him an ideal choice for the role.",
    },
  },
  {
    character: {
      name: "Dalinar Kholin",
      image: "/assets/dave-bautista.avif",
      quote: "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step.",
      description: "The Blackthorn. A feared warlord turned honorable highprince, Dalinar seeks to unite the warring kingdoms of Roshar. He is haunted by his violent past and strives for redemption.",
      race: "Alethi",
    },
    actor: {
      name: "Dave Bautista",
      image: null,
      note: "Brandon Sanderson himself suggested Bautista for Dalinar in 2018. At 55, Bautista has the physical presence of a grizzled warlord and the acting range to portray Dalinar's complex redemption arc.",
    },
  },
];

export default function FanCastingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-48">
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
            Fan{" "}
            <span className="text-[var(--accent)]">Casting</span>
          </h1>

          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Dream casting for a Stormlight Archive adaptation, respecting Brandon Sanderson&apos;s vision for authentic representation
          </p>
        </div>
      </section>

      {/* Casting Cards */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {castings.map((casting, index) => (
            <div
              key={casting.character.name}
              className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Character Side */}
                <div className="relative">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={casting.character.image}
                      alt={casting.character.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                      {casting.character.race}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                      {casting.character.name}
                    </h2>
                    <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                      {casting.character.description}
                    </p>
                  </div>
                </div>

                {/* Actor Side */}
                <div className="relative flex flex-col justify-center bg-[var(--background)]/50">
                  {casting.actor.image ? (
                    <>
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={casting.actor.image}
                          alt={casting.actor.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                          Fan Cast
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1 mb-2">
                          {casting.actor.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {casting.actor.note}
                        </p>
                        <blockquote className="border-l-2 border-[var(--accent)] pl-4 italic text-white/80 text-sm leading-relaxed">
                          &ldquo;{casting.character.quote}&rdquo;
                        </blockquote>
                      </div>
                    </>
                  ) : (
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
                        Fan Cast
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--accent)] mt-1 mb-4">
                        {casting.actor.name}
                      </h3>
                      <p className="text-[var(--muted)] text-sm mb-6">
                        {casting.actor.note}
                      </p>
                      <blockquote className="border-l-2 border-[var(--accent)] pl-4 italic text-[var(--foreground)]/80 text-sm leading-relaxed">
                        &ldquo;{casting.character.quote}&rdquo;
                        <footer className="text-[var(--muted)] mt-2 not-italic text-xs">
                          — {casting.character.name}
                        </footer>
                      </blockquote>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center py-12 border border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--muted)]">More castings coming soon...</p>
          <p className="text-sm text-[var(--muted)]/60 mt-2">
            Dalinar, Shallan, Adolin, Jasnah, and more
          </p>
        </div>
      </section>

      {/* Attribution */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="border-t border-[var(--border)] pt-8 text-center">
          <p className="text-sm text-[var(--muted)]">
            Casting choices informed by{" "}
            <a
              href="https://fandomwire.com/one-cosmere-character-brandon-sanderson-wont-let-henry-cavill-play-is-destined-for-simu-liu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Brandon Sanderson&apos;s statements on representation
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
