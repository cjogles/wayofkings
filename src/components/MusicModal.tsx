"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { tracks } from "@/data/music";
import { useMusicPlayer } from "./MusicPlayerContext";

export function MusicModal() {
  const { currentTrack, isModalOpen, closeModal, setCurrentTrack } = useMusicPlayer();

  const currentIndex = currentTrack ? tracks.findIndex(t => t.id === currentTrack.id) : -1;

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentTrack(tracks[currentIndex - 1]);
    } else if (currentIndex === 0) {
      setCurrentTrack(tracks[tracks.length - 1]); // Wrap to end
    }
  }, [currentIndex, setCurrentTrack]);

  const goToNext = useCallback(() => {
    if (currentIndex < tracks.length - 1) {
      setCurrentTrack(tracks[currentIndex + 1]);
    } else if (currentIndex === tracks.length - 1) {
      setCurrentTrack(tracks[0]); // Wrap to beginning
    }
  }, [currentIndex, setCurrentTrack]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeydown);
      return () => window.removeEventListener("keydown", handleKeydown);
    }
  }, [isModalOpen, closeModal, goToPrevious, goToNext]);

  if (!isModalOpen || !currentTrack) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-40 bg-black/90 backdrop-blur-sm"
      onClick={closeModal}
    >
      {/* Previous arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
        className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors cursor-pointer"
        aria-label="Previous track"
      >
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors cursor-pointer"
        aria-label="Next track"
      >
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Modal content */}
      <div
        className="relative w-full max-w-md bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
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
            sizes="(max-width: 448px) 100vw, 448px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />
        </div>

        {/* Track info */}
        <div className="p-6 -mt-16 relative z-10">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-1">
            {currentTrack.name}
          </h2>
          <p className="text-sm text-[var(--muted)] mb-4">The Black Piper</p>

          {/* Instructions */}
          <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-4">
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span>Use the player below to control playback</span>
          </div>

          {/* Close button */}
          <button
            onClick={closeModal}
            className="w-full py-3 px-4 bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-white rounded-xl font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
