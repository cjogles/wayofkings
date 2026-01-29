"use client";

import { useState, useEffect } from "react";
import { useMusicPlayer } from "./MusicPlayerContext";

export function NavHint() {
  const { currentTrack } = useMusicPlayer();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show hint after music starts playing, with a delay
    if (currentTrack && !isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentTrack, isDismissed]);

  // Auto-hide after 10 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsDismissed(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-4 z-[100] animate-fade-in">
      {/* Arrow pointing up to nav */}
      <div className="flex flex-col items-start">
        <div className="ml-4 animate-bounce">
          <svg
            className="w-6 h-6 text-[var(--accent)] -rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>

        {/* Tooltip bubble */}
        <div className="relative bg-[var(--accent)] text-white px-4 py-3 rounded-lg shadow-lg max-w-[200px] animate-pulse-subtle">
          <p className="text-sm font-medium leading-snug">
            Now explore Roshar! Click the menu to discover more.
          </p>

          {/* Close button */}
          <button
            onClick={() => {
              setIsVisible(false);
              setIsDismissed(true);
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-full flex items-center justify-center hover:bg-[var(--border)] transition-colors"
            aria-label="Dismiss hint"
          >
            <svg className="w-3 h-3 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
