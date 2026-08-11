"use client";

import Link from "next/link";
import React from "react";
import { ArrowUp, Heart, Mail, MessageSquare } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#contact", label: "Контакты" },
];

function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cream/5 bg-ink-900/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#top" className="group flex items-center gap-3" aria-label="Наверх">
              <div className="relative flex h-11 w-11 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-gold/40 transition-colors duration-300 group-hover:border-gold/70" />
                <span className="font-display text-lg font-semibold italic text-gold-light">
                  ЕП
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold text-cream">
                  Егор Прокопенков
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/70">
                  Frontend &amp; UX
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-muted">
              Интерфейсы, в центре которых — человеческое восприятие.
              React, Next.js, Tailwind CSS и искренняя забота о пользователе.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/50">
              Навигация
            </div>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/50">
              Связаться
            </div>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="mailto:dbkuper89@gmail.com"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-cream transition-colors hover:text-gold-light"
              >
                <Mail className="h-4 w-4 text-gold" />
                dbkuper89@gmail.com
              </a>
              <a
                href="https://t.me/Yegor_Pro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-cream transition-colors hover:text-gold-light"
              >
                <MessageSquare className="h-4 w-4 text-gold" />
                @Yegor_Pro (Telegram / WhatsApp)
              </a>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-cream-dim">
              Открыт для фриланса, сотрудничества и интересных проектов.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-cream/5 pt-8 sm:flex-row">
          <p className="text-xs text-cream-dim">
            © {new Date().getFullYear()} Егор Прокопенков ·{" "}
            <a
              href="https://eprokopenkov.online"
              target="_blank"
              rel="noreferrer"
              className="text-cream/70 transition-colors hover:text-gold-light"
            >
              eprokopenkov.online
            </a>
          </p>

          <div className="flex items-center gap-5">
            <p className="flex items-center gap-1.5 text-xs text-cream-dim">
              Сделано с
              <Heart className="h-3.5 w-3.5 fill-gold text-gold" />
              к UX
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Вернуться наверх"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/60 transition-all duration-300 hover:border-gold/40 hover:text-gold-light hover:shadow-gold-sm"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
