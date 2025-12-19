"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useMusicPlayer } from "./MusicPlayerContext";

export function MusicModal() {
  const { currentTrack, setCurrentTrack } = useMusicPlayer();

  useEffect(() => {
    if (currentTrack) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentTrack]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCurrentTrack(null);
    };
    if (currentTrack) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [currentTrack, setCurrentTrack]);

  if (!currentTrack) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={() => setCurrentTrack(null)}
    >
      {/* Modal content */}
      <div
        className="relative w-full max-w-lg bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setCurrentTrack(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Album artwork */}
        <div className="relative w-full aspect-square bg-[var(--card-bg)]">
          <Image
            src={currentTrack.image}
            alt={currentTrack.name}
            fill
            className={`${
              currentTrack.imageFit === "contain" ? "object-contain" : "object-cover"
            } ${
              currentTrack.imagePosition === "top"
                ? "object-top"
                : currentTrack.imagePosition === "bottom"
                  ? "object-bottom"
                  : "object-center"
            }`}
            sizes="(max-width: 512px) 100vw, 512px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />
        </div>

        {/* Track info and Spotify player */}
        <div className="p-6 -mt-20 relative z-10">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
            {currentTrack.name}
          </h2>
          <p className="text-sm text-[var(--muted)] mb-4">The Black Piper</p>

          {/* Full Spotify embed */}
          <iframe
            src={currentTrack.spotifyEmbedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
            className="rounded-xl"
          />

          <p className="mt-4 text-center text-xs text-[var(--muted)]">
            Press Escape or click outside to close
          </p>
        </div>
      </div>
    </div>
  );
}
