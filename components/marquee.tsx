"use client";

import React from "react";

const ITEMS = [
  "React & Next.js 14",
  "Telegram Mini Apps",
  "TypeScript",
  "SaaS-архитектура",
  "PostgreSQL & Supabase",
  "Tailwind CSS",
  "Human UX & Empathy",
  "Framer Motion",
  "Cron-автоматизация",
  "AI в разработке",
];

function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-dashed border-cream/15 bg-ink-900/20 py-3.5 sm:py-4">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-5 sm:mx-8 flex items-center gap-5 sm:gap-8 font-display text-base sm:text-lg md:text-xl font-normal text-cream/75 transition-colors hover:text-cream"
          >
            <span>{item}</span>
            <span className="text-gold/40 text-xs select-none" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
