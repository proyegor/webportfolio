"use client";

import React, { useState } from "react";
import {
  Mail,
  Globe,
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const EASE = [0.16, 1, 0.3, 1] as const;

// Ключ доступа к Web3Forms (https://web3forms.com) — привязан к почте владельца сайта
const WEB3FORMS_ACCESS_KEY = "678561c0-8740-4b1c-9dea-cc85b8ce5fda";

function CTASection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const email = "dbkuper89@gmail.com";
  const website = "eprokopenkov.online";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).catch(() => undefined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // Если контакт похож на email — используем его для ответа, иначе встраиваем в текст
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Новая заявка с сайта: ${name}`,
          name,
          email: isEmail ? contact.trim() : email,
          message: isEmail
            ? message
            : `Контакт: ${contact}\n\n${message}`,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Web3Forms error");
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      setSubmitError(true);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setFormSubmitted(true);
    setName("");
    setContact("");
    setMessage("");
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#C9A15E", "#E3C88F", "#EFE9DE", "#8A6A35"],
    });
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold/5 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card-premium relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
          {/* decorative corner */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold/10"
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* ——— Left: text + contacts ——— */}
            <div className="flex flex-col items-start lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="eyebrow"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Контакты
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
                className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-medium leading-tight text-cream"
              >
                Готовы создать что-то{" "}
                <em className="text-gold-gradient italic">удобное</em> и{" "}
                <em className="text-gold-gradient italic">технологичное</em>?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
                className="mt-6 max-w-lg text-sm leading-relaxed text-cream-muted sm:text-base"
              >
                Открыт к сотрудничеству, фриланс-проектам и новым вызовам.
                Давайте обсудим вашу идею и создадим интерфейс, который
                растопит сердца пользователей.
              </motion.p>

              {/* Contact cards */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
                className="mt-9 w-full space-y-3.5"
              >
                {/* Email */}
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-cream/5 bg-ink-950/40 p-4 transition-colors duration-300 hover:border-gold/25">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream-muted">
                        Email
                      </div>
                      <a
                        href={`mailto:${email}`}
                        className="block truncate text-sm font-bold text-cream transition-colors hover:text-gold-light"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex shrink-0 items-center gap-1.5 rounded-full border border-cream/10 px-3.5 py-2 text-[11px] font-bold text-cream/70 transition-colors hover:border-gold/40 hover:text-gold-light"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-gold" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    <span>{copied ? "Скопировано" : "Копировать"}</span>
                  </button>
                </div>

                {/* Website */}
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-cream/5 bg-ink-950/40 p-4 transition-colors duration-300 hover:border-gold/25"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream-muted">
                        Сайт психолога
                      </div>
                      <div className="truncate text-sm font-bold text-cream">
                        {website}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gold/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </a>

                {/* Telegram / WhatsApp */}
                <a
                  href="https://t.me/Yegor_Pro"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-cream/5 bg-ink-950/40 p-4 transition-colors duration-300 hover:border-gold/25"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream-muted">
                        Telegram / WhatsApp
                      </div>
                      <div className="truncate text-sm font-bold text-cream">
                        @Yegor_Pro
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gold/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </a>
              </motion.div>
            </div>

            {/* ——— Right: form ——— */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl border border-cream/10 bg-ink-950/60 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-cream">
                  Отправить сообщение
                </h3>
                <p className="mt-1.5 text-xs text-cream-muted">
                  Заполните форму — я отвечу в течение нескольких часов.
                </p>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="mt-7 flex flex-col items-center gap-3 rounded-2xl border border-gold/25 bg-gold/10 px-6 py-12 text-center"
                    >
                      <Sparkles className="h-9 w-9 text-gold" />
                      <div className="font-display text-xl font-semibold text-cream">
                        Спасибо за обращение!
                      </div>
                      <p className="max-w-xs text-xs leading-relaxed text-cream-muted">
                        Ваше сообщение отправлено. Совсем скоро я свяжусь с вами.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="mt-7 space-y-4"
                    >
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-cream/70"
                          >
                            Ваше имя
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Иван"
                            className="w-full rounded-xl border border-cream/10 bg-ink-900/80 px-4 py-3 text-sm text-cream placeholder:text-cream-dim focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/40"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-contact"
                            className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-cream/70"
                          >
                            Email, Telegram или WhatsApp
                          </label>
                          <input
                            id="contact-contact"
                            type="text"
                            required
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="example@mail.ru / @user / +79..."
                            className="w-full rounded-xl border border-cream/10 bg-ink-900/80 px-4 py-3 text-sm text-cream placeholder:text-cream-dim focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/40"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-cream/70"
                        >
                          Детали проекта
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Здравствуйте, Егор! Хотим обсудить разработку…"
                          className="w-full resize-none rounded-xl border border-cream/10 bg-ink-900/80 px-4 py-3 text-sm text-cream placeholder:text-cream-dim focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/40"
                        />
                      </div>

                      {/* Honeypot для антиспама (Web3Forms): люди его не заполняют, боты — да */}
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      {submitError && (
                        <div className="flex items-start gap-2.5 rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-xs leading-relaxed text-red-200">
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
                          <span>
                            Не удалось отправить сообщение. Напишите мне
                            напрямую:{" "}
                            <a
                              href={`mailto:${email}`}
                              className="font-bold underline decoration-gold/50 underline-offset-2 hover:text-gold-light"
                            >
                              {email}
                            </a>{" "}
                            или в Telegram{" "}
                            <a
                              href="https://t.me/Yegor_Pro"
                              target="_blank"
                              rel="noreferrer"
                              className="font-bold underline decoration-gold/50 underline-offset-2 hover:text-gold-light"
                            >
                              @Yegor_Pro
                            </a>
                            .
                          </span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-gold group flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 text-sm font-bold disabled:opacity-50"
                      >
                        {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </button>

                      <p className="text-center text-[10px] leading-relaxed text-cream-dim">
                        Отправляя форму, вы соглашаетесь на обработку персональных данных
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
