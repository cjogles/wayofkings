"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { tracks } from "@/data/music";
import { useMusicPlayer } from "./MusicPlayerContext";

export function MiniPlayer() {
  const { currentTrack, isModalOpen, openModal, stopPlaying, setCurrentTrack } = useMusicPlayer();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Reset loading state when track changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentTrack?.id]);

  // Scroll current track into view
  useEffect(() => {
    if (currentTrack && carouselRef.current && !isMinimized) {
      const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
      const trackElement = carouselRef.current.children[currentIndex] as HTMLElement;
      if (trackElement) {
        trackElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [currentTrack?.id, isMinimized]);

  if (!currentTrack) return null;

  // Shared iframe component
  const spotifyEmbed = (
    <div className="flex-1 relative min-w-0 h-[60px] overflow-hidden rounded-lg">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#282828] rounded-lg z-10">
          <div className="flex items-center gap-2 text-[var(--muted)] text-sm">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Loading...</span>
          </div>
        </div>
      )}
      <iframe
        key={currentTrack.id}
        src={currentTrack.spotifyEmbedUrl}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="eager"
        className={`rounded-lg -mt-[28px] ${isLoading ? "invisible" : ""}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[var(--card-bg)] border-t border-[var(--border)] shadow-2xl">
      {/* Main player area */}
      <div className="flex items-center gap-4 p-3 max-w-7xl mx-auto">
        {/* Track artwork - always visible */}
        <button
          onClick={() => openModal(currentTrack)}
          className="relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden hover:ring-2 hover:ring-[var(--accent)] transition-all"
        >
          <Image
            src={currentTrack.image}
            alt={currentTrack.name}
            fill
            className="object-cover"
            sizes="56px"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
        </button>

        {/* Track info - only in full view */}
        {!isMinimized && (
          <div className="flex-shrink-0 min-w-0 w-32 sm:w-40">
            <p className="text-sm font-medium text-[var(--foreground)] truncate">
              {currentTrack.name}
            </p>
            <p className="text-xs text-[var(--muted)] truncate">The Black Piper</p>
          </div>
        )}

        {/* Spotify embed - always rendered */}
        {spotifyEmbed}

        {/* Minimize button - only in full view */}
        {!isMinimized && (
          <button
            onClick={() => setIsMinimized(true)}
            className="flex-shrink-0 p-2 rounded-full hover:bg-[var(--border)] transition-colors"
            aria-label="Minimize player"
          >
            <svg className="w-5 h-5 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}

        {/* Expand button - only in minimized */}
        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="flex-shrink-0 p-2 rounded-full hover:bg-[var(--border)] transition-colors"
            aria-label="Expand player"
          >
            <svg className="w-5 h-5 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}

        {/* Close button */}
        <button
          onClick={stopPlaying}
          className="flex-shrink-0 p-2 rounded-full hover:bg-[var(--border)] transition-colors"
          aria-label="Stop playing"
        >
          <svg className="w-5 h-5 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Track carousel - only in full view */}
      {!isMinimized && (
        <div className="border-t border-[var(--border)] bg-[var(--background)]">
          <div
            ref={carouselRef}
            className="flex gap-2 p-2 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setCurrentTrack(track)}
                className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all ${
                  track.id === currentTrack.id
                    ? "ring-2 ring-[var(--accent)] scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={track.image}
                  alt={track.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
                {track.id === currentTrack.id && (
                  <div className="absolute inset-0 bg-[var(--accent)]/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
