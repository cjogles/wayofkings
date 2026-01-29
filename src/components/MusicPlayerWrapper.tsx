"use client";

import { MusicPlayerProvider } from "./MusicPlayerContext";
import { MusicModal } from "./MusicModal";
import { MiniPlayer } from "./MiniPlayer";
import { NavHint } from "./NavHint";

export function MusicPlayerWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MusicPlayerProvider>
      {children}
      <MusicModal />
      <MiniPlayer />
      <NavHint />
    </MusicPlayerProvider>
  );
}
