"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Sparkles, Code2, HeartHandshake, ShieldCheck, RotateCw } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Animated counter that counts up once visible */
function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, to, value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unsub = value.on("change", (v) => {
      el.textContent = `${prefix}${Math.round(v)}${suffix}`;
    });
    return unsub;
  }, [value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on the portrait as the page scrolls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const portraitRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const stats = [
    { value: 10, suffix: "+", label: "лет в психологии и UX" },
    { value: 30, suffix: "+", label: "реализованных интерфейсов" },
    { value: 100, suffix: "%", label: "адаптивность под все экраны" },
  ];

  return (
    <section
      id="top"
      ref={sectionRef}
      className="glow-ambient relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20"
    >
      {/* Ambient animated orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px] animate-pulse-glow"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-40 h-[26rem] w-[26rem] rounded-full bg-gold-dark/15 blur-[110px] animate-pulse-glow [animation-delay:2.5s]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* ——— Left: text ——— */}
          <motion.div
            style={{ y: textY, opacity: fade }}
            className="relative z-10 flex flex-col items-start lg:col-span-7"
          >
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="glass inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cream/80">
                <Brain className="h-3.5 w-3.5 text-gold" />
                Frontend-разработчик · психолог
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mt-7 font-display text-[clamp(2.5rem,7.5vw,4.9rem)] font-medium leading-[1.15] tracking-tight text-cream">
              <span className="block overflow-hidden pt-[0.14em] -mt-[0.14em] pb-[0.16em] -mb-[0.16em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                >
                  Интерфейсы, которые
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-[0.14em] -mt-[0.14em] pb-[0.16em] -mb-[0.16em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
                >
                  <em className="text-gold-gradient font-medium">
                    чувствуют
                  </em>{" "}
                  людей.
                </motion.span>
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream-muted sm:text-lg"
            >
              Я&nbsp;— Егор. Создаю отзывчивые, быстрые и&nbsp;продуманные
              веб-интерфейсы на&nbsp;React и&nbsp;Next.js. 10&nbsp;лет опыта
              в&nbsp;психологии помогают мне делать UX, который людям
              действительно комфортен.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
              className="mt-9 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
            >
              <Link
                href="#projects"
                className="btn-gold group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold sm:w-auto"
              >
                Смотреть проекты
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="btn-ghost inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-cream sm:w-auto"
              >
                Обсудить проект
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
              className="mt-12 w-full border-t border-cream/5 pt-8"
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <span className="font-display text-2xl font-semibold text-gold-light sm:text-4xl">
                      <Counter to={s.value} suffix={s.suffix} />
                    </span>
                    <span className="text-[11px] font-medium leading-snug text-cream-muted sm:text-xs">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ——— Right: portrait ——— */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none"
          >
            <motion.div style={{ y: portraitY, rotate: portraitRotate }} className="relative">
              {/* Gold frame */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-gold/20 sm:-inset-4" />
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gold/5 blur-2xl sm:-inset-4" />

              <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-ink-800 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/egor-portrait.jpg"
                    alt="Егор Прокопенков — frontend-разработчик"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                </div>

                {/* Bottom caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
                    <Sparkles className="h-3 w-3" />
                    Егор Прокопенков
                  </div>
                  <p className="mt-2 font-display text-sm italic leading-snug text-cream/90 sm:text-base">
                    «Интерфейсы, в&nbsp;центре которых&nbsp;— человеческое восприятие»
                  </p>
                </div>
              </div>

              {/* Rotating badge */}
              <motion.div
                className="absolute -right-5 -top-5 hidden sm:flex sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              >
                <div className="relative h-full w-full">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <defs>
                      <path id="circlePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                    </defs>
                    <text className="fill-gold/80 text-[9.5px] font-semibold uppercase tracking-[0.18em]">
                      <textPath href="#circlePath">Открыт к проектам · Frontend · </textPath>
                    </text>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <RotateCw className="h-5 w-5 text-gold" />
                  </span>
                </div>
              </motion.div>

              {/* Floating badge: clean code */}
              <motion.div
                className="glass absolute -left-4 top-8 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Code2 className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-cream">Clean Code</div>
                  <div className="text-[10px] text-cream-muted">React · Next.js · TS</div>
                </div>
              </motion.div>

              {/* Floating badge: UX empathy */}
              <motion.div
                className="glass absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-right-8"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-cream">UX-эмпатия</div>
                  <div className="text-[10px] text-cream-muted">10 лет в психологии</div>
                </div>
              </motion.div>

              {/* Floating badge: 100% responsive */}
              <motion.div
                className="glass absolute -bottom-5 left-8 flex items-center gap-2.5 rounded-2xl px-4 py-2.5 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 1.6 }}
              >
                <ShieldCheck className="h-4 w-4 text-gold" />
                <span className="text-xs font-bold text-cream">Адаптивность 100%</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
