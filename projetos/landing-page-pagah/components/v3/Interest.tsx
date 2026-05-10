"use client";

import { motion } from "motion/react";
import { interestComparison } from "@/content/landing";

export default function V3Interest() {
  return (
    <section
      id="juros"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Juros do parcelamento
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {interestComparison.title}
          </motion.h2>
          <p className="mt-4 text-[15px] md:text-lg text-[var(--text-secondary)] max-w-2xl">
            {interestComparison.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* LEFT: common */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -2 }}
            className="v3-tile p-7 md:p-8 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-tertiary)]">
                {interestComparison.left.label}
              </span>
              <span className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
                — comum
              </span>
            </div>
            <ul className="grid gap-3">
              {interestComparison.left.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: i * 0.05,
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] text-[var(--text-secondary)]"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <span
                    className="v3-mono text-[10px] w-6 text-[var(--text-tertiary)]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: pagah (highlighted) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -3, scale: 1.005 }}
            className="v3-tile p-7 md:p-8 relative overflow-hidden v3-glow-ring"
            style={{
              background:
                "linear-gradient(140deg, rgba(241,229,47,0.06) 0%, var(--bg-tile) 60%)",
            }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute -top-20 -right-20 size-56 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,229,47,0.18) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 5.7,
                repeat: Infinity,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.4,
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span
                  className="v3-mono text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {interestComparison.right.label}
                </span>
                <span
                  className="v3-mono text-[10px] tracking-[0.16em] uppercase px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(241,229,47,0.18)",
                    color: "var(--accent)",
                  }}
                >
                  recomendado
                </span>
              </div>
              <ul className="grid gap-3">
                {interestComparison.right.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: i * 0.05,
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-[14px]"
                    style={{
                      background: "rgba(241,229,47,0.06)",
                      color: "var(--text-primary)",
                    }}
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
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <motion.a
            href="#cta-final"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="px-5 py-3 text-[14px] font-semibold rounded-xl"
            style={{
              background: "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
              color: "#0F0F10",
              boxShadow: "0 12px 32px -10px rgba(241,229,47,0.55)",
            }}
          >
            {interestComparison.cta} →
          </motion.a>
          <p className="text-[12px] text-[var(--text-tertiary)] max-w-md">
            {interestComparison.note}
          </p>
        </div>
      </div>
    </section>
  );
}
