"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

function SkillsSection() {
    const techStack = [
        { name: "React", level: "Senior", pct: 95, icon: "⚛️" },
        { name: "Next.js (App Router)", level: "Senior", pct: 92, icon: "▲" },
        { name: "TypeScript / JavaScript", level: "Production", pct: 90, icon: "📘" },
        { name: "Tailwind CSS", level: "Expert", pct: 96, icon: "🎨" },
        { name: "HTML5 / Modern CSS", level: "Expert", pct: 98, icon: "🌐" },
        { name: "Framer Motion", level: "Expert", pct: 88, icon: "✨" },
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
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                                <Sparkles className="h-5 w-5" />
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
                                    className="group rounded-2xl border border-cream/5 bg-ink-950/40 p-4 transition-all duration-500 hover:border-gold/25 hover:bg-gold/5"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl" aria-hidden>
                                            {tech.icon}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-baseline justify-between gap-2">
                                                <span className="truncate text-sm font-bold text-cream">
                                                    {tech.name}
                                                </span>
                                                <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-gold/80">
                                                    {tech.level}
                                                </span>
                                            </div>
                                            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-cream/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${tech.pct}%` }}
                                                    viewport={{ once: true, margin: "-40px" }}
                                                    transition={{ duration: 1.1, ease: EASE, delay: 0.2 + idx * 0.06 }}
                                                    className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                                                />
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
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
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
