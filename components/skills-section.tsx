"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Cpu,
    Layers,
    ShieldCheck,
    ArrowUpRight,
    Award,
    ExternalLink,
    Maximize2,
    X,
    FileDown,
    CheckCircle2,
    Sparkles,
    Eye,
    Check,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Brand SVG Icons styled for gold/cream luxury aesthetic */
function ReactIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="2.2" fill="currentColor" />
            <g strokeWidth="1.5">
                <ellipse cx="12" cy="12" rx="9" ry="3.6" />
                <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
            </g>
        </svg>
    );
}

function NextjsIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fillOpacity="0.15" />
            <path d="M16.5 17.5L8.5 7.5H7V16.5H8.5V10.2L15.3 18.7C15.7 18.3 16.1 17.9 16.5 17.5ZM15.5 7.5V13.8L17 15.7V7.5H15.5Z" />
        </svg>
    );
}

function TypescriptIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
            <path d="M6.5 9H12.5M9.5 9V17" />
            <path d="M13.5 15.5C14 16.2 14.8 16.6 15.7 16.5C16.8 16.4 17.5 15.6 17.5 14.7C17.5 13.5 16.4 13.1 15.2 12.6L14.7 12.4C13.7 12 13 11.4 13 10.3C13 9.3 13.9 8.5 15 8.5C15.9 8.5 16.6 8.9 17.1 9.5" />
        </svg>
    );
}

function TailwindIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
    );
}

function HtmlCssIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.5 3L5.8 19.5L12 21.2L18.2 19.5L19.5 3H4.5ZM16.2 8.2H8.8L9.1 11.2H15.9L15.3 16.7L12 17.6L8.7 16.7L8.5 14.2H10.5L10.6 15.2L12 15.6L13.4 15.2L13.6 13.1H8.6L7.9 6.2H16.4L16.2 8.2Z" />
        </svg>
    );
}

function FramerIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
    );
}

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
    );
}

function CourseraIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.667 8.333l-5.667 5.667-2.667-2.667-1.333 1.334 4 4 7-7-1.333-1.334z" fill="#0056D2" />
        </svg>
    );
}

const certificates = [
    {
        id: "google-ai-app-building",
        title: "AI for App Building",
        issuer: "Google & Coursera",
        icon: GoogleIcon,
        date: "13 августа 2026",
        badge: "Google Career Certificate",
        category: "AI & Web Development",
        description:
            "Официальный сертификат курса от Google на платформе Coursera. Практическое применение искусственного интеллекта, работа с промптами и создание современных AI-ориентированных веб-приложений.",
        image: "/images/certificates/google-ai-app-building.webp",
        pdfUrl: "/certificates/google-ai-app-building.pdf",
        verifyUrl: "https://coursera.org/verify/5826H8DRJCYP",
        skills: ["AI-Assisted Development", "Prompt Engineering", "App Architecture", "Google AI Tools"],
    },
    {
        id: "coursera-canva-design",
        title: "Use Canva to Design Digital Course Collateral",
        issuer: "Coursera · Freedom Learning Group",
        icon: CourseraIcon,
        date: "28 июля 2026",
        badge: "Coursera Project Network",
        category: "UI & Visual Design",
        description:
            "Практический проект Freedom Learning Group на Coursera. Разработка цифровых учебных и маркетинговых материалов, принципы визуальной иерархии, композиции, цвета и брендинга.",
        image: "/images/certificates/coursera-canva-design.webp",
        pdfUrl: "/certificates/coursera-canva-design.pdf",
        verifyUrl: "https://coursera.org/verify/LSCXH16TOEM4",
        skills: ["Visual Hierarchy", "Digital Collateral", "Typography & Color", "Brand Consistency"],
    },
];

type Certificate = (typeof certificates)[number];

function SkillsSection() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const techStack = [
        { name: "React", tag: "UI Framework", level: 10, icon: ReactIcon },
        { name: "Next.js (App Router)", tag: "SSR & Architecture", level: 9, icon: NextjsIcon },
        { name: "TypeScript / JavaScript", tag: "Type Safety", level: 9, icon: TypescriptIcon },
        { name: "Tailwind CSS", tag: "Design Systems", level: 10, icon: TailwindIcon },
        { name: "HTML5 / Modern CSS", tag: "Semantic Web", level: 10, icon: HtmlCssIcon },
        { name: "Framer Motion", tag: "Animations", level: 9, icon: FramerIcon },
    ];

    const approaches = [
        {
            title: "Адаптивность под каждый экран",
            desc: "Сайт одинаково хорошо выглядит и на маленьком телефоне, и на большом мониторе: ничего не съезжает, ничего не приходится листать вбок.",
        },
        {
            title: "Проектирование UX",
            desc: "Путь пользователя продумываю заранее - от первого экрана до заявки. Всё, что может сбить с шага, убираю ещё на этапе макета.",
        },
        {
            title: "AI в работе",
            desc: "Нейросети берут на себя рутину: черновой код, прототипы, повторяющиеся задачи. Мне остаётся то, что требует головы.",
        },
        {
            title: "Производительность",
            desc: "Слежу за скоростью загрузки и за тем, чтобы анимации не тормозили даже на слабых устройствах.",
        },
    ];

    // Close lightbox on Escape
    useEffect(() => {
        if (!selectedCert) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedCert(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selectedCert]);

    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = selectedCert ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedCert]);

    const openLightbox = useCallback((cert: Certificate) => setSelectedCert(cert), []);

    return (
        <section id="skills" className="relative overflow-hidden bg-ink-900/30 py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: EASE }}
                    >
                        <div className="eyebrow">
                            <Cpu className="h-3.5 w-3.5" />
                            Стек &amp; подходы
                        </div>
                        <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-tight text-cream">
                            Технологии и{" "}
                            <em className="text-gold-gradient italic">подход к работе</em>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                        className="max-w-md text-sm leading-relaxed text-cream-muted md:text-right sm:text-base"
                    >
                        Современный стек, проверенные приёмы UX и нейросети там,
                        где они реально ускоряют работу.
                    </motion.p>
                </div>

                {/* --- Grid: Tech Stack + Approach --- */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* --- Tech stack --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="card-premium rounded-[1.75rem] p-6 sm:p-9 lg:col-span-7"
                    >
                        <div className="mb-7 flex items-center gap-4 border-b border-cream/5 pb-6">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold shadow-gold-sm">
                                <Layers className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-semibold text-cream">
                                    Frontend-стек
                                </h3>
                                <p className="text-xs text-cream-muted">С чем работаю каждый день</p>
                            </div>
                        </div>

                        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {techStack.map((tech, idx) => (
                                <motion.li
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.5, ease: EASE, delay: idx * 0.06 }}
                                    className="group rounded-2xl border border-cream/5 bg-ink-950/40 p-4 transition-all duration-500 hover:border-gold/30 hover:bg-gold/5"
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold shadow-gold-sm transition-transform duration-300 group-hover:scale-105">
                                            <tech.icon className="h-5 w-5" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-1.5">
                                                <span className="truncate text-xs font-bold text-cream sm:text-sm">
                                                    {tech.name}
                                                </span>
                                                <span className="shrink-0 rounded-md border border-gold/15 bg-gold/5 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold-light/90">
                                                    {tech.tag}
                                                </span>
                                            </div>
                                            {/* Сегментная шкала уровня */}
                                            <div className="mt-2.5 flex items-center gap-1">
                                                {Array.from({ length: 10 }).map((_, seg) => (
                                                    <motion.span
                                                        key={seg}
                                                        initial={{ opacity: 0.18 }}
                                                        whileInView={{ opacity: seg < tech.level ? 1 : 0.18 }}
                                                        viewport={{ once: true, margin: "-40px" }}
                                                        transition={{ duration: 0.4, delay: 0.25 + idx * 0.06 + seg * 0.045 }}
                                                        className={`h-1 flex-1 rounded-full ${seg < tech.level
                                                            ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                                                            : "bg-cream/10"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* --- Approach --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
                        className="card-premium rounded-[1.75rem] p-6 sm:p-9 lg:col-span-5"
                    >
                        <div className="mb-7 flex items-center gap-4 border-b border-cream/5 pb-6">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold shadow-gold-sm">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-semibold text-cream">
                                    Мой подход
                                </h3>
                                <p className="text-xs text-cream-muted">Как я работаю над проектом</p>
                            </div>
                        </div>

                        <ul className="space-y-2.5">
                            {approaches.map((app, idx) => (
                                <motion.li
                                    key={app.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.55, ease: EASE, delay: 0.1 + idx * 0.08 }}
                                    className="group flex gap-4 rounded-2xl border border-cream/5 bg-ink-950/40 p-4 transition-all duration-500 hover:border-gold/25 hover:bg-gold/5"
                                >
                                    <span className="font-display text-lg italic leading-none text-gold/50 transition-colors duration-300 group-hover:text-gold">
                                        0{idx + 1}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-cream">
                                            {app.title}
                                            <ArrowUpRight className="h-3.5 w-3.5 text-transparent transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-gold" />
                                        </div>
                                        <p className="mt-1 text-xs leading-relaxed text-cream-muted">
                                            {app.desc}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* --- Certificates Block --- */}
                <div className="mt-12 sm:mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold shadow-gold-sm">
                                <Award className="h-4 w-4" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">
                                    Подтверждённая квалификация
                                </h3>
                                <p className="text-xs text-cream-muted">
                                    Официальные сертификаты Google и Coursera
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gold/80">
                            <Sparkles className="h-3.5 w-3.5" />
                            Проверено на Coursera
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {certificates.map((cert, idx) => (
                            <motion.article
                                key={cert.id}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.65, ease: EASE, delay: idx * 0.12 }}
                                className="card-premium group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-cream/10 bg-ink-900/60 p-6 sm:p-7 transition-all duration-500 hover:border-gold/35 hover:shadow-card-hover"
                            >
                                {/* Top metadata */}
                                <div className="mb-5 flex flex-wrap items-center justify-between gap-2.5">
                                    <div className="flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold-light">
                                        <cert.icon className="h-3.5 w-3.5" />
                                        <span>{cert.badge}</span>
                                    </div>
                                    <span className="text-xs font-medium text-cream/45">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Preview image container */}
                                <div
                                    onClick={() => openLightbox(cert)}
                                    className="group/img relative mb-5 block aspect-[16/11] w-full cursor-pointer overflow-hidden rounded-2xl border border-cream/10 bg-ink-950 shadow-inner"
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover object-top transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover/img:opacity-85" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
                                        <span className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink-950 shadow-gold-sm backdrop-blur-md">
                                            <Maximize2 className="h-3.5 w-3.5" />
                                            Рассмотреть сертификат
                                        </span>
                                    </div>

                                    <span className="absolute bottom-3 left-3 rounded-md bg-ink-950/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold/90 backdrop-blur-md">
                                        {cert.category}
                                    </span>
                                </div>

                                {/* Details */}
                                <div className="flex flex-1 flex-col">
                                    <h4 className="font-display text-xl font-semibold leading-snug text-cream transition-colors duration-300 group-hover:text-gold-light">
                                        {cert.title}
                                    </h4>
                                    <p className="mt-1 text-xs font-medium text-gold/80">
                                        {cert.issuer}
                                    </p>
                                    <p className="mt-3 text-xs leading-relaxed text-cream-muted sm:text-sm">
                                        {cert.description}
                                    </p>

                                    {/* Skills tags */}
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {cert.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="rounded-md border border-cream/5 bg-ink-950/60 px-2 py-0.5 text-[10px] font-medium text-cream/70"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-cream/5 pt-5">
                                        <button
                                            type="button"
                                            onClick={() => openLightbox(cert)}
                                            className="btn-ghost inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2.5 text-xs font-bold text-cream"
                                        >
                                            <Eye className="h-3.5 w-3.5" />
                                            Просмотр
                                        </button>
                                        <a
                                            href={cert.verifyUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-gold inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2.5 text-xs font-bold"
                                        >
                                            Проверить
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                        <a
                                            href={cert.pdfUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            download
                                            title="Скачать официальный PDF"
                                            aria-label="Скачать PDF"
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/10 bg-cream/5 text-cream/70 transition-all duration-300 hover:border-gold/40 hover:bg-gold/10 hover:text-gold-light"
                                        >
                                            <FileDown className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Certificate Lightbox Modal --- */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/90 p-3 backdrop-blur-xl sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.92, y: 24, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.92, y: 24, opacity: 0 }}
                            transition={{ duration: 0.45, ease: EASE }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-900 shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between gap-4 border-b border-cream/5 px-5 py-4 sm:px-7">
                                <div className="min-w-0">
                                    <h4 className="truncate font-display text-lg font-semibold text-cream">
                                        {selectedCert.title}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/80">
                                            {selectedCert.issuer}
                                        </span>
                                        <span className="text-xs text-cream/30">·</span>
                                        <span className="text-xs text-cream/50">{selectedCert.date}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={selectedCert.pdfUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        download
                                        className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/5 px-3 py-1.5 text-xs font-semibold text-cream transition-colors hover:border-gold/40 hover:text-gold-light"
                                    >
                                        <FileDown className="h-3.5 w-3.5 text-gold" />
                                        Скачать PDF
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCert(null)}
                                        aria-label="Закрыть"
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/10 text-cream/70 transition-colors hover:border-gold/40 hover:text-gold-light"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Certificate Image View */}
                            <div className="flex-1 overflow-y-auto max-h-[75vh] bg-ink-950/90 p-3 sm:p-6 custom-scrollbar">
                                <div className="mx-auto max-w-3xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="w-full h-auto rounded-xl shadow-2xl border border-cream/10"
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col gap-3 border-t border-cream/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                                <p className="text-xs leading-relaxed text-cream-muted sm:max-w-md">
                                    {selectedCert.description}
                                </p>
                                <div className="flex items-center gap-2.5">
                                    <a
                                        href={selectedCert.verifyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-gold inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold"
                                    >
                                        Проверить на Coursera
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default SkillsSection;
