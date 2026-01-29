"use client";

import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { MusicCarousel } from "@/components/MusicCarousel";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavMenu } from "@/components/NavMenu";

export default function Home() {
  const musicRef = useRef<HTMLDivElement>(null);

  const scrollToMusic = () => {
    musicRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[var(--background)] pb-36">
      <NavMenu />
      <ThemeToggle />
      <Hero onScrollToMusic={scrollToMusic} />
      <div ref={musicRef}>
        <MusicCarousel />
      </div>
    </main>
  );
}
