"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

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

function SkillsSection() {
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
            desc: "Идеальное отображение на телефонах, планшетах, ноутбуках и мониторах — без съехавших блоков, на любом разрешении.",
        },
        {
            title: "Проектирование UX",
            desc: "Опора на знания психологии для построения интуитивно понятных пользовательских путей.",
        },
        {
            title: "AI-assisted разработка",
            desc: "Генеративные нейросети для ускорения кодинга и прототипирования без потери качества.",
        },
        {
            title: "Производительность",
            desc: "Оптимизация загрузки, Core Web Vitals и плавность анимаций на слабых устройствах.",
        },
    ];

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
                            <em className="text-gold-gradient italic">методология</em>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                        className="max-w-md text-sm leading-relaxed text-cream-muted md:text-right sm:text-base"
                    >
                        Современный веб-стек в комбинации с доказанными принципами
                        продуктового UX и скоростью нейросетей.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* ——— Tech stack ——— */}
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
                                <p className="text-xs text-cream-muted">Основной инструментарий</p>
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
                                            {/* Сегментная шкала уровня вместо псевдоточных процентов */}
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

                    {/* ——— Approach ——— */}
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
                                <p className="text-xs text-cream-muted">Принципы создания продуктов</p>
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
            </div>
        </section>
    );
}

export default SkillsSection;
