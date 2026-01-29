"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/races", label: "Races of Roshar" },
  { href: "/world-map", label: "World Map" },
  { href: "/fan-casting", label: "Fan Casting" },
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-4 left-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-5 h-5 text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 min-w-[180px] bg-[var(--card-bg)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden animate-fade-in">
          <nav className="py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[var(--accent)]/20 text-[var(--accent)] font-medium"
                      : "text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
