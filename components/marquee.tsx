"use client";

import React from "react";

const ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UX Design",
  "Framer Motion",
  "Адаптивность",
  "Производительность",
];

function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-cream/5 bg-ink-900/40 py-5 sm:py-6">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-6 sm:mx-10 flex items-center gap-6 sm:gap-10 font-display text-xl sm:text-3xl md:text-4xl font-medium"
          >
            <span className={i % 2 === 0 ? "text-cream/80" : "text-outline"}>
              {item}
            </span>
            <span className="text-gold/50 font-display text-lg sm:text-2xl font-light" aria-hidden>
              ~
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
