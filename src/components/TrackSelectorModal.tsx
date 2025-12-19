"use client";

import { useEffect } from "react";
import { tracks } from "@/data/music";
import { MusicCard } from "./MusicCard";
import { useMusicPlayer } from "./MusicPlayerContext";

export function TrackSelectorModal() {
  const { isTrackSelectorOpen, closeTrackSelector, playTrack, currentTrack } =
    useMusicPlayer();

  useEffect(() => {
    if (isTrackSelectorOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isTrackSelectorOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeTrackSelector();
    };
    if (isTrackSelectorOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isTrackSelectorOpen, closeTrackSelector]);

  if (!isTrackSelectorOpen) return null;

  const handleTrackSelect = (track: typeof tracks[0]) => {
    playTrack(track);
    closeTrackSelector();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      onClick={closeTrackSelector}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[var(--background)]/95 backdrop-blur-md" />

      {/* Content */}
      <div
        className="relative z-10 flex-1 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Choose a Track
              </h2>
              {currentTrack && (
                <p className="text-sm text-[var(--muted)] mt-1">
                  Currently playing: {currentTrack.name}
                </p>
              )}
            </div>
            <button
              onClick={closeTrackSelector}
              className="p-3 rounded-full bg-[var(--card-bg)] hover:bg-[var(--border)] transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-[var(--foreground)]"
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
          </div>
        </div>

        {/* Track grid */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`relative ${
                  currentTrack?.id === track.id
                    ? "ring-2 ring-[var(--accent)] rounded-xl"
                    : ""
                }`}
              >
                <MusicCard track={track} onClick={() => handleTrackSelect(track)} />
                {currentTrack?.id === track.id && (
                  <div className="absolute top-2 right-2 bg-[var(--accent)] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="flex gap-0.5">
                      <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                      <span
                        className="w-1 h-3 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <span
                        className="w-1 h-3 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
