"use client";

import React from "react";

const ITEMS = [
  "Frontend",
  "React",
  "Next.js",
  "TypeScript",
  "UX Design",
  "Tailwind CSS",
  "Адаптивность",
  "Производительность",
  "Framer Motion",
  "Внимание к деталям",
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
            <span className="text-cream/80">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold/40 shrink-0" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
