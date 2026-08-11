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
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ════════════════════════════════════════════════════════════════════
   ВАШИ РАБОТЫ
   Чтобы поставить свои скриншоты: положите изображения в папку
   public/images/ и укажите их пути в поле `image` ниже.
   Пока файл не найден — карточка покажет стильную заглушку.
   ════════════════════════════════════════════════════════════════════ */
const projects = [
  {
    id: "project-psychology",
    title: "Психологический кабинет и онлайн-платформа",
    category: "psychology",
    categoryName: "UX & Психология",
    description:
      "Персональный веб-сервис с душевным, минималистичным дизайном, спроектированный для создания атмосферы доверия и удобной онлайн-записи на консультации.",
    coverImage: "/webportfolio/images/psychology-portfolio-cover.jpg",
    image: "/webportfolio/images/psychology-portfolio.png",
    tags: ["React", "Human UX", "Empathy Design", "Appointment System"],
    highlights: [
      "Тёплая природная гамма, снижающая тревожность посетителя",
      "Продуманная структура услуг и FAQ",
      "Удобная онлайн-форма первого шага с высокой конверсией",
    ],
    demoUrl: "https://eprokopenkov.online",
  },
  {
    id: "project-english",
    title: "Платформа для изучения английского языка",
    category: "edtech",
    categoryName: "EdTech & Web App",
    description:
      "Интерактивное веб-приложение, спроектированное с учётом когнитивной нагрузки для комфортного обучения детей и взрослых.",
    coverImage: "/webportfolio/images/english-nest-cover.jpg",
    image: "/webportfolio/images/english-school-full.png",
    tags: ["React", "Next.js", "Cognitive Load UX", "Interactive Learning"],
    highlights: [
      "Минимизирована когнитивная нагрузка при заданиях",
      "Интуитивная навигация по каталогу материалов",
      "Полный адаптив для планшетов и мобильных",
    ],
    demoUrl: "https://englishnest.ru",
  },
  {
    id: "project-pizza",
    title: "Сайт пиццерии «PizzaVita»",
    category: "ecommerce",
    categoryName: "E-Commerce & Лендинги",
    description:
      "Современный адаптивный лендинг с фокусом на быструю конверсию и удобство заказа с любого устройства.",
    coverImage: "/webportfolio/images/pizzavita-cover.jpg",
    image: "/webportfolio/images/pizza-delivery-full.png",
    tags: ["Next.js", "Tailwind CSS", "High Conversion", "Responsive"],
    highlights: [
      "Сценарий быстрой сборки заказа",
      "Высокая скорость загрузки изображений",
      "Оптимизирован под тач-интерфейсы",
    ],
    demoUrl: "https://pizzavita.demo",
  },
];

const FILTERS = [
  { id: "all", label: "Все проекты" },
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
          /* Placeholder: shown until the user drops their own screenshot */
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

        {/* category badge */}
        <span className="absolute left-4 top-4 rounded-full border border-cream/10 bg-ink-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-light backdrop-blur-md">
          {project.categoryName}
        </span>

        {/* view hint */}
        <div className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-500 group-hover/img:translate-y-0 group-hover/img:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink-950 shadow-gold-sm">
            <Maximize2 className="h-3.5 w-3.5" />
            Смотреть скриншот
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Close lightbox with Escape
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
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

  const openLightbox = useCallback((p: Project) => setSelected(p), []);

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
            Реальные примеры веб-приложений, созданные с глубоким пониманием
            пользовательской психологии и высокой производительности.
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
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition-colors duration-300 ${isActive
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
                className="card-premium group flex flex-col overflow-hidden rounded-[1.5rem]"
              >
                <ProjectImage project={project} onOpen={() => openLightbox(project)} />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-[1.35rem] font-semibold leading-snug text-cream transition-colors duration-300 group-hover:text-gold-light">
                    {project.title}
                  </h3>
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

                  <div className="mt-auto flex flex-col gap-2.5 pt-6 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => openLightbox(project)}
                      className="btn-ghost inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold text-cream"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Скриншот
                    </button>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gold group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold"
                      >
                        Открыть сайт
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

      {/* ——— Lightbox ——— */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/90 p-3 backdrop-blur-xl sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-900 shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 border-b border-cream/5 px-5 py-4 sm:px-7">
                <div className="min-w-0">
                  <h4 className="truncate font-display text-lg font-semibold text-cream">
                    {selected.title}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/80">
                    {selected.categoryName}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold-light">
                    <MousePointerClick className="h-3.5 w-3.5" />
                    Скролльте скриншот
                  </span>
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

              {/* Image */}
              <div className="flex-1 overflow-y-auto max-h-[75vh] bg-ink-950/80 p-3 sm:p-6 custom-scrollbar">
                <div className="mx-auto max-w-4xl">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-auto rounded-2xl shadow-2xl border border-cream/10"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-3 border-t border-cream/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <p className="text-xs leading-relaxed text-cream-muted sm:max-w-md">
                  {selected.description}
                </p>
                {selected.demoUrl && (
                  <a
                    href={selected.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold"
                  >
                    Открыть сайт
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
