"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Maximize2,
  X,
  FolderGit2,
  CheckCircle2,
  Eye,
  ImageOff,
  ArrowUpRight,
  MousePointerClick,
  FileDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Globe,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

function TelegramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════
   ПРОЕКТЫ И КЕЙСЫ
   ════════════════════════════════════════════════════════════════════ */
const projects = [
  {
    id: "project-quickbook",
    title: "QuickBook — SaaS-платформа и Telegram Mini App",
    category: "telegram",
    categoryName: "Telegram Apps & SaaS",
    badge: "Флагманский SaaS проект",
    description:
      "Мультиарендная (Multi-tenant) система онлайн-записи и управления клиентами для мастеров и салонов прямо в Telegram и в браузере. Интерактивный календарь слотов, PostgreSQL + Supabase (RLS), Cron-напоминания и прием оплат.",
    coverImage: "/images/quickbook/slide-1.webp",
    image: "/images/quickbook/slide-1.webp",
    slides: [
      { title: "Титульный слайд — Презентация", image: "/images/quickbook/slide-1.webp" },
      { title: "Проблема vs Решение QuickBook", image: "/images/quickbook/slide-2.webp" },
      { title: "Ключевые модули системы", image: "/images/quickbook/slide-3.webp" },
      { title: "Путь клиента в Telegram Mini App", image: "/images/quickbook/slide-4.webp" },
      { title: "Онлайн-запись в 3 клика", image: "/images/quickbook/slide-5.webp" },
      { title: "Личный кабинет мастера & Аналитика", image: "/images/quickbook/slide-6.webp" },
      { title: "Тарифы и возможности", image: "/images/quickbook/slide-7.webp" },
    ],
    tags: [
      "Next.js 14",
      "Telegram Mini Apps",
      "TypeScript",
      "Supabase / PostgreSQL",
      "Cron Automation",
      "Crypto Pay & Stars",
    ],
    highlights: [
      "Запись клиентов в 3 клика в Telegram и веб-версии без внешних сайтов",
      "Атомарные SQL-транзакции (book_slot_atomic) и 100% защита от овербукинга",
      "Автоматические напоминания о визитах за 24 ч и 1 ч через Telegram Cron",
      "Личный кабинет мастера: график работы, управление услугами и СБП-оплата",
    ],
    webUrl: "https://quickbook24.vercel.app/",
    telegramUrl: "https://t.me/quickbook_app_bot",
    demoUrl: "https://quickbook24.vercel.app/",
    demoLabel: "Веб-версия",
    isTelegram: false,
    pdfUrl: "/docs/quickbook-presentation.pdf",
    pdfLabel: "Презентация (PDF)",
  },
  {
    id: "project-psychology",
    title: "Психологический кабинет и онлайн-платформа",
    category: "psychology",
    categoryName: "UX & Психология",
    description:
      "Личный сайт психолога с онлайн-записью на консультации. Спокойный минималистичный дизайн - чтобы человеку было комфортно ещё до первого звонка.",
    coverImage: "/images/psychology-portfolio-cover.jpg",
    image: "/images/psychology-portfolio.webp",
    tags: ["React", "Human UX", "Empathy Design", "Appointment System"],
    highlights: [
      "Тёплая природная палитра - сайт не давит, а располагает к себе",
      "Услуги и частые вопросы разложены по полочкам",
      "Форма записи из трёх полей, без лишних шагов",
    ],
    demoUrl: "https://eprokopenkov.online",
    demoLabel: "Открыть сайт",
    isTelegram: false,
  },
  {
    id: "project-english",
    title: "Интернет-магазин материалов «EnglishNest»",
    category: "edtech",
    categoryName: "EdTech & E-Commerce",
    description:
      "Интернет-магазин интерактивных учебных материалов для учителей английского языка (дети 5–12 лет). Всё цифровое: купил - скачал - занимайся.",
    coverImage: "/images/english-nest-cover.jpg",
    image: "/images/english-school-full.webp",
    tags: ["React", "Next.js", "Digital E-Commerce", "i18n (RU/EN)", "Admin Panel"],
    highlights: [
      "Каталог с поиском и фильтрами - нужный материал находится за пару кликов",
      "Версии на русском и английском, корзина цифровых товаров и админка",
      "Игровое оформление, которое хорошо смотрится и на телефоне, и на компьютере",
    ],
    demoUrl: "https://englishnest.vercel.app/",
    demoLabel: "Открыть сайт",
    isTelegram: false,
  },
  {
    id: "project-pizza",
    title: "Сайт пиццерии «PizzaVita»",
    category: "ecommerce",
    categoryName: "E-Commerce & Лендинги",
    description:
      "Лендинг, на котором удобно собирать заказ с телефона: всё крупное, понятное, без лишних шагов.",
    coverImage: "/images/pizzavita-cover.jpg",
    image: "/images/pizza-delivery-full.webp",
    tags: ["Next.js", "Tailwind CSS", "High Conversion", "Responsive"],
    highlights: [
      "Заказ собирается за два-три экрана",
      "Фотографии не тормозят загрузку даже на слабом интернете",
      "Кнопки и меню рассчитаны на пальцы, а не на курсор",
    ],
    demoUrl: "https://pizza-vita.vercel.app/",
    demoLabel: "Открыть сайт",
    isTelegram: false,
  },
];

const FILTERS = [
  { id: "all", label: "Все проекты" },
  { id: "telegram", label: "Telegram Apps & SaaS" },
  { id: "psychology", label: "UX & Психология" },
  { id: "edtech", label: "EdTech & Обучение" },
  { id: "ecommerce", label: "E-Commerce" },
];

type Project = (typeof projects)[number];

/* Image with graceful placeholder fallback */
function ProjectImage({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Открыть скриншот: ${project.title}`}
      className="group/img relative block w-full overflow-hidden bg-ink-800"
    >
      <div className="relative aspect-[16/10] w-full">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950 p-6 text-center">
            <ImageOff className="h-8 w-8 text-gold/50" />
            <div>
              <div className="text-sm font-bold text-cream/80">Скриншот скоро появится</div>
              <div className="mt-1 text-[11px] text-cream-muted">
                Добавьте файл в public/images
              </div>
            </div>
          </div>
        ) : (
          <Image
            src={project.coverImage || project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.06]"
            onError={() => setFailed(true)}
          />
        )}

        {/* hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-60 transition-opacity duration-500 group-hover/img:opacity-90" />

        {/* category & badge */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-cream/10 bg-ink-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-light backdrop-blur-md">
            {project.categoryName}
          </span>
          {"badge" in project && project.badge && (
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/15 px-2.5 py-1 text-[10px] font-bold text-gold-light backdrop-blur-md shadow-gold-sm">
              <Sparkles className="h-3 w-3" />
              {project.badge}
            </span>
          )}
        </div>

        {/* view hint */}
        <div className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-500 group-hover/img:translate-y-0 group-hover/img:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink-950 shadow-gold-sm">
            <Maximize2 className="h-3.5 w-3.5" />
            {"slides" in project && project.slides ? "Смотреть презентацию" : "Смотреть скриншот"}
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Close lightbox with Escape
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight" && "slides" in selected && selected.slides) {
        setSlideIndex((prev) => (prev + 1) % selected.slides!.length);
      }
      if (e.key === "ArrowLeft" && "slides" in selected && selected.slides) {
        setSlideIndex((prev) => (prev - 1 + selected.slides!.length) % selected.slides!.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  // Lock scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const openLightbox = useCallback((p: Project) => {
    setSelected(p);
    setSlideIndex(0);
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="eyebrow">
              <FolderGit2 className="h-3.5 w-3.5" />
              Портфолио
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-tight text-cream">
              Избранные{" "}
              <em className="text-gold-gradient italic">работы</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="max-w-md text-sm leading-relaxed text-cream-muted sm:text-base"
          >
            Сайты, SaaS-платформы и Telegram Mini Apps, сделанные от идеи до запуска.
            Каждый — под конкретную задачу бизнеса.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="no-scrollbar -mx-4 mb-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {FILTERS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-ink-950"
                    : "border border-cream/10 bg-cream/5 text-cream/70 hover:border-gold/30 hover:text-cream"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-soft to-gold shadow-gold-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.06 }}
                className={`card-premium group flex flex-col overflow-hidden rounded-[1.5rem] ${
                  project.id === "project-quickbook"
                    ? "border-gold/30 shadow-[0_20px_50px_-20px_rgba(201,161,94,0.2)] md:col-span-2 xl:col-span-1"
                    : ""
                }`}
              >
                <ProjectImage project={project} onOpen={() => openLightbox(project)} />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[1.35rem] font-semibold leading-snug text-cream transition-colors duration-300 group-hover:text-gold-light">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-cream/75">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-cream/5 pt-5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full border border-gold/15 bg-gold/5 px-2.5 py-1 text-[10px] font-semibold text-gold-light/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                    <button
                      type="button"
                      onClick={() => openLightbox(project)}
                      className="btn-ghost inline-flex flex-1 min-w-[100px] items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-xs font-bold text-cream"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {"slides" in project && project.slides ? "Слайды" : "Скриншот"}
                    </button>

                    {"telegramUrl" in project && project.telegramUrl && (
                      <a
                        href={project.telegramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-1.5 rounded-full bg-[#2AABEE] px-3 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#229ED9] shadow-[0_0_20px_-6px_rgba(42,171,238,0.5)]"
                      >
                        <TelegramIcon className="h-3.5 w-3.5" />
                        Бот в Telegram
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gold group/btn inline-flex flex-1 min-w-[110px] items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-xs font-bold"
                      >
                        {"webUrl" in project ? <Globe className="h-3.5 w-3.5" /> : null}
                        {project.demoLabel || "Открыть сайт"}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- Lightbox --- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/90 p-3 backdrop-blur-xl sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-900 shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 border-b border-cream/5 px-5 py-4 sm:px-7">
                <div className="min-w-0">
                  <h4 className="truncate font-display text-lg font-semibold text-cream">
                    {selected.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/80">
                      {selected.categoryName}
                    </span>
                    {"slides" in selected && selected.slides && (
                      <span className="text-xs text-cream/50">
                        · Слайд {slideIndex + 1} из {selected.slides.length}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  {"pdfUrl" in selected && selected.pdfUrl && (
                    <a
                      href={selected.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/5 px-3 py-1.5 text-xs font-semibold text-cream transition-colors hover:border-gold/40 hover:text-gold-light"
                    >
                      <FileDown className="h-3.5 w-3.5 text-gold" />
                      {("pdfLabel" in selected && selected.pdfLabel) || "Скачать PDF"}
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Закрыть"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/10 text-cream/70 transition-colors hover:border-gold/40 hover:text-gold-light"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main Content / Slides */}
              {"slides" in selected && selected.slides ? (
                <div className="flex flex-1 flex-col overflow-hidden bg-ink-950/80">
                  {/* Active slide view */}
                  <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-y-auto max-h-[60vh]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selected.slides[slideIndex].image}
                      alt={selected.slides[slideIndex].title}
                      className="max-h-[56vh] w-auto max-w-full rounded-2xl shadow-2xl border border-cream/10 object-contain"
                    />

                    {/* Prev / Next buttons */}
                    <button
                      type="button"
                      onClick={() =>
                        setSlideIndex(
                          (prev) => (prev - 1 + selected.slides!.length) % selected.slides!.length
                        )
                      }
                      aria-label="Предыдущий слайд"
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-ink-950/70 text-cream backdrop-blur-md transition-all hover:border-gold/50 hover:bg-ink-900"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSlideIndex((prev) => (prev + 1) % selected.slides!.length)
                      }
                      aria-label="Следующий слайд"
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-ink-950/70 text-cream backdrop-blur-md transition-all hover:border-gold/50 hover:bg-ink-900"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Thumbnail bar */}
                  <div className="no-scrollbar flex gap-2 overflow-x-auto border-t border-cream/5 bg-ink-900/60 p-3 sm:px-6">
                    {selected.slides.map((slide, sIdx) => {
                      const isActive = sIdx === slideIndex;
                      return (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => setSlideIndex(sIdx)}
                          className={`group relative shrink-0 overflow-hidden rounded-lg border transition-all ${
                            isActive
                              ? "border-gold ring-2 ring-gold/40"
                              : "border-cream/10 opacity-60 hover:opacity-100"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-12 w-20 object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto max-h-[75vh] bg-ink-950/80 p-3 sm:p-6 custom-scrollbar">
                  <div className="mx-auto max-w-4xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-auto rounded-2xl shadow-2xl border border-cream/10"
                    />
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex flex-col gap-3 border-t border-cream/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <p className="text-xs leading-relaxed text-cream-muted sm:max-w-md">
                  {selected.description}
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {"pdfUrl" in selected && selected.pdfUrl && (
                    <a
                      href={selected.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="btn-ghost inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold text-cream"
                    >
                      <FileDown className="h-3.5 w-3.5 text-gold" />
                      PDF Презентация
                    </a>
                  )}

                  {"telegramUrl" in selected && selected.telegramUrl && (
                    <a
                      href={selected.telegramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2AABEE] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#229ED9] shadow-[0_0_20px_-6px_rgba(42,171,238,0.5)]"
                    >
                      <TelegramIcon className="h-4 w-4" />
                      Запустить бота
                    </a>
                  )}

                  {selected.demoUrl && (
                    <a
                      href={selected.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold"
                    >
                      {"webUrl" in selected ? <Globe className="h-3.5 w-3.5" /> : null}
                      {selected.demoLabel || "Открыть сайт"}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
