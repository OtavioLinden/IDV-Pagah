"use client";
import { motion } from "motion/react";
import { pillars } from "@/content/landing";

export default function V2Pillars() {
  return (
    <section id="solucoes" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 02 · Pilares
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] v2-tabular hidden md:block">
            03 sistemas
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="v2-display font-extrabold mb-24 max-w-5xl"
          style={{
            fontSize: "clamp(44px, 6.5vw, 100px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.96,
          }}
        >
          <span style={{ fontWeight: 300 }} className="italic">
            Não é só
          </span>{" "}
          checkout. É uma{" "}
          <span className="italic" style={{ fontWeight: 400 }}>
            máquina de lucro
          </span>{" "}
          pós-clique.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="space-y-24 md:space-y-32"
        >
          {pillars.columns.map((col, i) => (
            <motion.article
              key={col.title}
              id={
                i === 0
                  ? "checkout"
                  : i === 1
                    ? "call-center"
                    : "juros"
              }
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              <div
                className={`col-span-12 lg:col-span-5 ${
                  i % 2 === 1 ? "lg:col-start-8 lg:row-start-1" : ""
                }`}
              >
                <PillarVisual index={i} />
              </div>
              <div
                className={`col-span-12 lg:col-span-7 ${
                  i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <span
                  className="v2-num v2-tabular block mb-3 font-bold"
                  style={{
                    fontSize: "clamp(48px, 6vw, 80px)",
                    color: "var(--accent)",
                    lineHeight: 0.9,
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="v2-display font-bold mb-5"
                  style={{
                    fontSize: "clamp(34px, 4.5vw, 64px)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {col.title}.
                </h3>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                  {col.text}
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-2 max-w-xl">
                  {col.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)] py-2 border-t border-[var(--border-subtle)]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3.5 mt-1 shrink-0"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PillarVisual({ index }: { index: number }) {
  if (index === 0) {
    // Checkout: stylized payment card
    return (
      <div className="v2-card-lift relative aspect-[4/5] border-2 border-[var(--text-primary)] bg-[var(--bg-elevated)] p-8 flex flex-col">
        <span className="v2-kicker text-[var(--text-tertiary)] mb-2">
          Checkout · Pagah
        </span>
        <div className="flex-1 flex flex-col justify-center items-start gap-3">
          <div className="w-full h-2 bg-[var(--text-primary)]" />
          <div className="w-3/4 h-2 bg-[var(--border-medium)]" />
          <div className="w-2/3 h-2 bg-[var(--border-medium)]" />
          <div
            className="mt-6 w-full py-4 text-center font-semibold text-sm"
            style={{
              background: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            Pagar R$ 297,00
          </div>
        </div>
        <div className="flex items-baseline justify-between border-t border-[var(--border-medium)] pt-3 mt-4 v2-kicker text-[var(--text-tertiary)]">
          <span>Pix · Boleto · Cartão</span>
          <span className="v2-tabular">01</span>
        </div>
      </div>
    );
  }
  if (index === 1) {
    // Call Center: phone wave illustration
    return (
      <div
        className="v2-card-lift v2-card-lift-on-contrast relative aspect-[4/5] p-8 flex flex-col"
        style={{
          background: "var(--bg-contrast)",
          color: "var(--text-on-contrast)",
        }}
      >
        <span className="v2-kicker text-[var(--text-on-contrast-secondary)] mb-2">
          Call Center · 24/7
        </span>
        <div className="flex-1 flex flex-col justify-center items-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full max-w-[220px]"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="100"
              cy="100"
              r="92"
              stroke="var(--accent)"
              strokeWidth="2"
              opacity="0.25"
            />
            <circle
              cx="100"
              cy="100"
              r="68"
              stroke="var(--accent)"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="44"
              stroke="var(--accent)"
              strokeWidth="2"
              opacity="0.75"
            />
            <circle cx="100" cy="100" r="20" fill="var(--accent)" />
            <path
              d="M88 92h6c1 6 5 11 11 12v5c-9-1-16-8-17-17z"
              fill="var(--text-primary)"
            />
          </svg>
        </div>
        <div className="flex items-baseline justify-between border-t border-[var(--border-on-contrast)] pt-3 mt-4 v2-kicker text-[var(--text-on-contrast-secondary)]">
          <span>+38% recuperação</span>
          <span className="v2-tabular">02</span>
        </div>
      </div>
    );
  }
  // Juros: stacked coins / chart
  return (
    <div className="v2-card-lift relative aspect-[4/5] border-2 border-[var(--text-primary)] bg-[var(--bg-elevated)] p-8 flex flex-col">
      <span className="v2-kicker text-[var(--text-tertiary)] mb-2">
        Juros · Repasse
      </span>
      <div className="flex-1 flex items-end gap-3 mt-6">
        {[28, 42, 60, 80, 96].map((h, i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              height: `${h}%`,
              background:
                i === 4
                  ? "var(--accent)"
                  : "var(--text-primary)",
            }}
          />
        ))}
      </div>
      <div className="flex items-baseline justify-between border-t border-[var(--border-medium)] pt-3 mt-4 v2-kicker text-[var(--text-tertiary)]">
        <span>+ margem por pedido</span>
        <span className="v2-tabular">03</span>
      </div>
    </div>
  );
}
