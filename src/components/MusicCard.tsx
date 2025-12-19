"use client";

import Image from "next/image";
import { Track } from "@/data/music";
import { useMusicPlayer } from "./MusicPlayerContext";

interface MusicCardProps {
  track: Track;
}

export function MusicCard({ track }: MusicCardProps) {
  const { openModal } = useMusicPlayer();

  return (
    <button
      onClick={() => openModal(track)}
      className="group relative flex-shrink-0 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] rounded-xl overflow-hidden bg-[var(--card-bg)] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent)]/20 cursor-pointer"
    >
      {/* Album artwork */}
      <Image
        src={track.image}
        alt={track.name}
        fill
        className={`transition-transform duration-500 group-hover:scale-110 ${
          track.imageFit === "contain" ? "object-contain" : "object-cover"
        } ${
          track.imagePosition === "top"
            ? "object-top"
            : track.imagePosition === "bottom"
              ? "object-bottom"
              : "object-center"
        }`}
        sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 220px"
      />
      {track.imageFit === "contain" && (
        <div className="absolute inset-0 -z-10 bg-[var(--card-bg)]" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Play icon on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-14 h-14 rounded-full bg-[#1DB954] flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Track name overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-medium truncate drop-shadow-lg">
          {track.name}
        </p>
      </div>
    </button>
  );
}
