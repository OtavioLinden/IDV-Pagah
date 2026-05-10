"use client";
import { motion } from "motion/react";
import { interestComparison } from "@/content/landing";

export default function V2Interest() {
  return (
    <section
      id="juros"
      className="relative py-32 md:py-48"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 04 · Juros do parcelamento
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] hidden md:block">
            Comparativo modelo a modelo
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="v2-display font-extrabold mb-6 max-w-5xl"
          style={{
            fontSize: "clamp(40px, 6vw, 90px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.96,
          }}
        >
          Os juros não precisam ficar todos com a plataforma.
        </motion.h2>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-16 max-w-3xl leading-snug">
          {interestComparison.subtitle}
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-2"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="v2-card-lift border-2 border-[var(--text-primary)] p-8 md:p-10"
          >
            <div className="flex items-baseline justify-between mb-8">
              <span className="v2-kicker text-[var(--text-tertiary)]">
                Modelo A
              </span>
              <span className="v2-num v2-tabular text-xs text-[var(--text-tertiary)]">
                01
              </span>
            </div>
            <h3
              className="v2-display font-bold mb-8 text-[var(--text-tertiary)]"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.035em",
                lineHeight: 1,
              }}
            >
              {interestComparison.left.label}
            </h3>
            <ul className="space-y-0">
              {interestComparison.left.bullets.map((b, i) => (
                <li
                  key={b}
                  className="flex items-start gap-4 py-4 border-t border-[var(--border-medium)] text-[var(--text-tertiary)]"
                >
                  <span className="v2-num v2-tabular text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium line-through opacity-80">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 20 },
              },
            }}
            className="border-2 border-[var(--text-primary)] -mt-px md:-mt-0 md:-ml-0.5 p-8 md:p-10"
            style={{
              background: "var(--text-primary)",
              color: "var(--text-on-contrast)",
            }}
          >
            <div className="flex items-baseline justify-between mb-8">
              <span
                className="v2-kicker"
                style={{ color: "var(--accent)" }}
              >
                Modelo Pagah
              </span>
              <span className="v2-num v2-tabular text-xs text-[var(--text-on-contrast-secondary)]">
                02
              </span>
            </div>
            <h3
              className="v2-display font-bold mb-8"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.035em",
                lineHeight: 1,
                color: "var(--accent)",
              }}
            >
              {interestComparison.right.label}
            </h3>
            <ul className="space-y-0">
              {interestComparison.right.bullets.map((b, i) => (
                <li
                  key={b}
                  className="flex items-start gap-4 py-4 border-t border-[var(--border-on-contrast)]"
                >
                  <span
                    className="v2-num v2-tabular text-xs"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-[var(--border-medium)]">
          <a href="#cta-final" className="v2-btn-primary">
            {interestComparison.cta}
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
          <p className="text-xs text-[var(--text-tertiary)] max-w-md">
            {interestComparison.note}
          </p>
        </div>
      </div>
    </section>
  );
}
