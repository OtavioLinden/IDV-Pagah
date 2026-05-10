"use client";
import { motion } from "motion/react";
import { comparison } from "@/content/landing";

export default function V1Comparison() {
  return (
    <section className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
            Comparativo
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.02]"
          >
            <span style={{ color: "var(--accent)" }}>Pagah</span> vs.
            plataforma comum.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="rounded-2xl v1-glass overflow-hidden"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-0 text-sm">
            {/* Header */}
            <div className="px-5 md:px-7 py-5 border-b border-white/5 v1-mono text-xs tracking-[0.18em] uppercase opacity-50">
              Recurso
            </div>
            <div className="px-4 md:px-5 py-5 border-b border-white/5 v1-mono text-xs tracking-[0.18em] uppercase opacity-50 text-center">
              Comum
            </div>
            <div
              className="px-4 md:px-5 py-5 border-b border-white/5 v1-mono text-xs tracking-[0.18em] uppercase text-center"
              style={{ color: "var(--accent)" }}
            >
              Pagah
            </div>

            {/* Rows */}
            {comparison.rows.map((row, i) => (
              <RowCells row={row} key={row.feature} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RowCells({
  row,
  index,
}: {
  row: { feature: string; common: string; pagah: string };
  index: number;
}) {
  const isLast = index === 7;
  const negativeKeywords = ["não", "limitada", "básico", "automático", "genérica", "ficam com"];
  const isNegative = negativeKeywords.some((k) =>
    row.common.toLowerCase().includes(k.toLowerCase())
  );

  return (
    <>
      <div
        className={`px-5 md:px-7 py-5 ${
          isLast ? "" : "border-b border-white/5"
        } font-medium`}
      >
        {row.feature}
      </div>
      <div
        className={`px-4 md:px-5 py-5 ${
          isLast ? "" : "border-b border-white/5"
        } text-[var(--text-tertiary)] text-center text-[13px] flex items-center justify-center gap-2`}
      >
        {isNegative && (
          <svg
            viewBox="0 0 24 24"
            className="size-3.5 shrink-0"
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
        className={`px-4 md:px-5 py-5 ${
          isLast ? "" : "border-b border-white/5"
        } text-center text-[13px] flex items-center justify-center gap-2`}
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(241,229,47,0.04))",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-3.5 shrink-0"
          style={{ color: "var(--accent)" }}
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
        <span className="font-medium">{row.pagah}</span>
      </div>
    </>
  );
}
