"use client";

import { motion } from "motion/react";
import { comparison } from "@/content/landing";

export default function V3Comparison() {
  return (
    <section
      id="comparativo"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Comparativo
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {comparison.title.split("Pagah").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  <span style={{ color: "var(--accent)" }}>Pagah</span>
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* LEFT: plataforma comum */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -2 }}
            className="v3-tile p-7"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)] v3-mono">
                Plataforma comum
              </span>
              <span
                className="size-2 rounded-full"
                style={{ background: "var(--text-tertiary)" }}
                aria-hidden="true"
              />
            </div>
            <ul className="grid gap-2.5">
              {comparison.rows.map((r, i) => (
                <motion.li
                  key={r.feature}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: i * 0.04,
                  }}
                  className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 rounded-lg items-center"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <span className="text-[13px] text-[var(--text-secondary)]">
                    {r.feature}
                  </span>
                  <span className="text-[12px] v3-mono text-[var(--text-tertiary)]">
                    {r.common}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: pagah */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -3 }}
            className="v3-tile p-7 relative overflow-hidden v3-glow-ring"
            style={{
              background:
                "linear-gradient(140deg, rgba(241,229,47,0.06) 0%, var(--bg-tile) 60%)",
            }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute -bottom-32 -right-32 size-[420px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,229,47,0.15) 0%, transparent 60%)",
                filter: "blur(50px)",
              }}
              animate={{ opacity: [0.5, 0.95, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="text-[13px] font-semibold uppercase tracking-[0.16em] v3-mono"
                  style={{ color: "var(--accent)" }}
                >
                  Pagah
                </span>
                <span className="v3-status-dot" aria-hidden="true" />
              </div>
              <ul className="grid gap-2.5">
                {comparison.rows.map((r, i) => (
                  <motion.li
                    key={r.feature}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: i * 0.04,
                    }}
                    className="grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-3 rounded-lg items-center"
                    style={{ background: "rgba(241,229,47,0.06)" }}
                  >
                    <span
                      className="size-5 grid place-items-center rounded shrink-0"
                      style={{ background: "rgba(241,229,47,0.2)" }}
                    >
                      <svg viewBox="0 0 24 24" className="size-3" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="var(--accent)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[13px] text-[var(--text-primary)]">
                      {r.feature}
                    </span>
                    <span
                      className="text-[12px] v3-mono font-medium text-right"
                      style={{ color: "var(--accent)" }}
                    >
                      {r.pagah}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
