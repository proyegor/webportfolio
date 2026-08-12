"use client";

import { motion } from "framer-motion";
import { Brain, HeartHandshake, Zap, Target, Lightbulb, Quote } from "lucide-react";
import React from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

function FeaturesSection() {
  const pillars = [
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      number: "01",
      title: "Эмпатия к пользователю",
      description:
        "Десять лет психологии - это умение смотреть на продукт чужими глазами: замечать, где человек спотыкается, и убирать эти места заранее.",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      number: "02",
      title: "Лёгкость восприятия",
      description:
        "Память и внимание человека ограничены. Подаю информацию дозированно - так, чтобы не приходилось ничего запоминать и додумывать.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      number: "03",
      title: "Нейросети в работе",
      description:
        "Нейросети берут на себя скучное: черновой код, шаблоны, повторяющиеся задачи. Времени уходит меньше, а качество остаётся прежним.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      number: "04",
      title: "Польза для бизнеса",
      description:
        "Красивый дизайн - не самоцель. Важно, чтобы сайт быстро грузился, был удобным и приводил к заявкам и продажам.",
    },
  ];

  return (
    <section
      id="about"
      className="glow-amber relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow eyebrow--center justify-center"
          >
            <Lightbulb className="h-3.5 w-3.5" />
            Обо мне
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-5 font-display text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-tight text-cream"
          >
            Код - это половина дела.{" "}
            Вторая - <em className="text-gold-gradient italic">понимание людей</em>
          </motion.h2>
        </div>

        {/* Story card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="card-premium relative mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] p-8 sm:p-12 lg:p-14"
        >
          <Quote
            aria-hidden
            className="absolute -top-4 left-6 h-24 w-24 rotate-180 text-gold/10 sm:-top-6 sm:left-10 sm:h-32 sm:w-32"
          />

          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <span className="eyebrow">Моя история</span>
            </div>
            <p className="text-base leading-relaxed text-cream/85 sm:text-lg sm:leading-relaxed">
              Десять лет я работал педагогом-психологом: слушал людей,
              наблюдал, помогал. Когда перешёл в&nbsp;разработку, оказалось,
              что эти навыки отлично работают и&nbsp;здесь. Я&nbsp;смотрю
              на&nbsp;интерфейс как на&nbsp;диалог с&nbsp;человеком -
              и&nbsp;думаю о&nbsp;том, как ему будет комфортно: с&nbsp;телефона,
              планшета или ноутбука.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream-muted sm:text-lg">
              В&nbsp;работе использую современный стек и&nbsp;нейросети -
              на&nbsp;рутине они экономят часы. Но&nbsp;решения о&nbsp;том,
              как устроен продукт, всегда остаются за&nbsp;мной.
            </p>
          </div>
        </motion.div>

        {/* 4 pillars */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mt-16 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
              className="card-premium group relative flex flex-col rounded-3xl p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-all duration-500 group-hover:border-gold/50 group-hover:bg-gold/20 group-hover:shadow-gold-sm">
                  {pillar.icon}
                </div>
                <span className="font-display text-sm italic text-cream/25 transition-colors duration-500 group-hover:text-gold/60">
                  {pillar.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-cream transition-colors duration-300 group-hover:text-gold-light">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                {pillar.description}
              </p>

              {/* hover glow line */}
              <span className="mt-6 block h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
