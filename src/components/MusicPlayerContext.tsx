"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Track } from "@/data/music";

interface MusicPlayerContextType {
  currentTrack: Track | null;
  isModalOpen: boolean;
  setCurrentTrack: (track: Track | null) => void;
  openModal: (track: Track) => void;
  closeModal: () => void;
  stopPlaying: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (track: Track) => {
    setCurrentTrack(track);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Track stays set so mini player continues
  };

  const stopPlaying = () => {
    setCurrentTrack(null);
    setIsModalOpen(false);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        isModalOpen,
        setCurrentTrack,
        openModal,
        closeModal,
        stopPlaying,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
}
