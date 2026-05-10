"use client";
import { motion } from "motion/react";
import { finalCta } from "@/content/landing";

export default function V2FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "var(--bg-contrast)",
        color: "var(--text-on-contrast)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12 border-t-2 border-[var(--accent)] pt-6">
          <span
            className="v2-kicker"
            style={{ color: "var(--accent)" }}
          >
            Edição final
          </span>
          <span
            className="v2-kicker v2-tabular"
            style={{ color: "var(--accent)" }}
          >
            13 / 13
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="v2-display font-extrabold mb-12"
          style={{
            fontSize: "clamp(72px, 13vw, 220px)",
            letterSpacing: "-0.055em",
            lineHeight: 0.86,
            textWrap: "balance",
          }}
        >
          Pronto para parar de deixar dinheiro na{" "}
          <span style={{ color: "var(--accent)" }}>mesa</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.1,
          }}
          className="text-lg md:text-2xl text-[var(--text-on-contrast-secondary)] leading-snug max-w-3xl mb-12"
        >
          {finalCta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.15,
          }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <a href="#contato" className="v2-btn-on-contrast">
            {finalCta.primary}
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
          <a href="#contato" className="v2-btn-ghost-on-contrast">
            {finalCta.secondary}
          </a>
        </motion.div>

        <p className="v2-kicker text-[var(--text-on-contrast-secondary)] border-t border-[var(--border-on-contrast)] pt-6">
          {finalCta.footnote}
        </p>
      </div>
    </section>
  );
}
