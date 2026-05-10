"use client";
import { motion } from "motion/react";
import { comparison } from "@/content/landing";

export default function V2Comparison() {
  return (
    <section
      className="relative py-32 md:py-48"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 11 · Comparativo
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] v2-tabular hidden md:block">
            08 dimensões
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="v2-display font-extrabold mb-20 max-w-5xl"
          style={{
            fontSize: "clamp(56px, 8vw, 130px)",
            letterSpacing: "-0.05em",
            lineHeight: 0.92,
          }}
        >
          <span style={{ color: "var(--text-tertiary)" }}>Plataforma comum</span>
          <br />
          vs.{" "}
          <span
            style={{
              background: `linear-gradient(180deg, transparent 60%, var(--accent) 60%, var(--accent) 92%, transparent 92%)`,
            }}
          >
            Pagah
          </span>
          .
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="border-2 border-[var(--text-primary)] overflow-hidden"
        >
          <div className="grid grid-cols-[2fr_1fr_1fr] bg-[var(--text-primary)] text-[var(--text-on-contrast)]">
            <div className="px-5 md:px-7 py-6 v2-kicker text-[var(--text-on-contrast-secondary)]">
              Recurso
            </div>
            <div className="px-4 md:px-5 py-6 v2-kicker text-[var(--text-on-contrast-secondary)] text-center border-l border-[var(--border-on-contrast)]">
              Comum
            </div>
            <div
              className="px-4 md:px-5 py-6 v2-kicker text-center border-l border-[var(--border-on-contrast)] relative"
              style={{ color: "var(--text-primary)", background: "var(--accent)" }}
            >
              Pagah
            </div>
          </div>

          {comparison.rows.map((row, i) => (
            <Row key={row.feature} row={row} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const NEGATIVE_KEYWORDS = [
  "não",
  "limitada",
  "básico",
  "automático",
  "genérica",
  "ficam com",
];

function Row({
  row,
  index,
}: {
  row: { feature: string; common: string; pagah: string };
  index: number;
}) {
  const isLast = index === 7;
  const isNegative = NEGATIVE_KEYWORDS.some((k) =>
    row.common.toLowerCase().includes(k.toLowerCase()),
  );
  return (
    <div
      className={`grid grid-cols-[2fr_1fr_1fr] ${isLast ? "" : "border-b border-[var(--border-medium)]"}`}
    >
      <div className="px-5 md:px-7 py-5 md:py-6 flex items-baseline gap-3">
        <span className="v2-num v2-tabular text-xs text-[var(--text-tertiary)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm md:text-base font-semibold">{row.feature}</span>
      </div>
      <div className="px-4 md:px-5 py-5 md:py-6 border-l border-[var(--border-medium)] text-[var(--text-tertiary)] text-center text-xs md:text-sm flex items-center justify-center gap-2">
        {isNegative && (
          <svg
            viewBox="0 0 24 24"
            className="size-4 shrink-0"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
        <span>{row.common}</span>
      </div>
      <div
        className="px-4 md:px-5 py-5 md:py-6 border-l border-[var(--border-medium)] text-center text-xs md:text-sm flex items-center justify-center gap-2 font-semibold relative"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4 shrink-0"
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
        <span>{row.pagah}</span>
      </div>
    </div>
  );
}
