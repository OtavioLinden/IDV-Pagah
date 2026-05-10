"use client";
import { motion } from "motion/react";
import { moduleX1 } from "@/content/landing";

export default function V2ModuleX1() {
  return (
    <section id="x1" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 05 · Módulo X1
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] hidden md:block">
            Para vendas no WhatsApp
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="col-span-12 lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="v2-display font-extrabold mb-8"
              style={{
                fontSize: "clamp(44px, 6.5vw, 100px)",
                letterSpacing: "-0.045em",
                lineHeight: 0.94,
              }}
            >
              Vende pelo{" "}
              <span
                style={{
                  background: `linear-gradient(180deg, transparent 62%, var(--accent) 62%, var(--accent) 92%, transparent 92%)`,
                }}
              >
                WhatsApp
              </span>
              ? A Pagah também é para o X1.
            </motion.h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-snug max-w-2xl mb-10">
              {moduleX1.subtitle}
            </p>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="space-y-0"
            >
              {moduleX1.cards.map((card, i) => (
                <motion.li
                  key={card.title}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                  className="grid grid-cols-[auto_1fr] gap-6 py-6 md:py-8 border-t border-[var(--border-medium)]"
                >
                  <span
                    className="v2-num font-extrabold v2-tabular"
                    style={{
                      fontSize: "clamp(40px, 5vw, 72px)",
                      lineHeight: 0.85,
                      color: "var(--accent)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="v2-display font-bold mb-2"
                      style={{
                        fontSize: "clamp(22px, 2.6vw, 32px)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                      {card.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>

            <div className="mt-10">
              <a href="#cta-final" className="v2-btn-primary">
                {moduleX1.cta}
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="col-span-12 lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <PhoneMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto max-w-[320px]">
      <div className="border-2 border-[var(--text-primary)] bg-[var(--bg-elevated)] aspect-[9/19] p-3 flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
          <div className="flex items-center gap-2">
            <span
              className="size-7 flex items-center justify-center text-xs font-semibold text-white"
              style={{ background: "var(--text-primary)" }}
            >
              C
            </span>
            <div>
              <p className="text-xs font-semibold leading-tight">
                Cliente · Maria
              </p>
              <p className="text-[10px] text-[var(--text-tertiary)]">
                online agora
              </p>
            </div>
          </div>
          <span className="v2-kicker text-[var(--text-tertiary)] v2-tabular">
            14:32
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="self-start max-w-[80%] bg-[var(--border-subtle)] px-3 py-2 text-xs leading-snug">
            Quero o kit de 3 potes do whey
          </div>
          <div
            className="self-end max-w-[80%] px-3 py-2 text-xs leading-snug"
            style={{ background: "var(--accent)" }}
          >
            Importei seus dados. Vou montar o link.
          </div>
          <div className="self-start max-w-[85%] mt-2 border-2 border-[var(--text-primary)] p-3">
            <p className="v2-kicker text-[var(--text-tertiary)] mb-1">
              link de pagamento
            </p>
            <p className="text-xs font-semibold mb-2">
              Kit Whey 3 potes + creatina
            </p>
            <p className="v2-num font-extrabold text-2xl v2-tabular leading-none mb-1">
              R$ 397
            </p>
            <p className="text-[10px] text-[var(--text-tertiary)]">
              em 12x · Pix · Cartão
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border-subtle)] pt-2 v2-kicker text-[var(--text-tertiary)] flex items-center justify-between">
          <span>X1 · Pagah</span>
          <span className="v2-tabular">01 / 01</span>
        </div>
      </div>
      <div
        className="absolute -bottom-4 -right-4 px-3 py-2 v2-kicker"
        style={{
          background: "var(--bg-contrast)",
          color: "var(--text-on-contrast)",
        }}
      >
        <span style={{ color: "var(--accent)" }}>●</span> link único
      </div>
    </div>
  );
}
