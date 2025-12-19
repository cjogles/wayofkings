"use client";

import { useState } from "react";
import Image from "next/image";
import { useMusicPlayer } from "./MusicPlayerContext";
import { MusicCarousel } from "./MusicCarousel";

export function MiniPlayer() {
  const { currentTrack } = useMusicPlayer();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-[var(--card-bg)] border-t border-[var(--border)] shadow-lg">
        {/* Collapsed bar */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Album art */}
          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={currentTrack.image}
              alt={currentTrack.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

          {/* Track info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[var(--foreground)] truncate">
              {currentTrack.name}
            </p>
            <p className="text-xs text-[var(--muted)]">The Black Piper</p>
          </div>

          {/* Now playing indicator */}
          <div className="flex gap-0.5 items-end h-4">
            <span className="w-1 h-full bg-[var(--accent)] rounded-full animate-pulse" />
            <span
              className="w-1 h-3 bg-[var(--accent)] rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className="w-1 h-full bg-[var(--accent)] rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>

          {/* Expand button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-full hover:bg-[var(--border)] transition-colors flex-shrink-0"
            aria-label={isExpanded ? "Collapse" : "Browse more tracks"}
          >
            <svg
              className={`w-5 h-5 text-[var(--muted)] transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>

        {/* Expanded carousel */}
        {isExpanded && (
          <div className="border-t border-[var(--border)] bg-[var(--background)] max-h-[60vh] overflow-y-auto">
            <MusicCarousel />
          </div>
        )}
      </div>
    </div>
  );
}
