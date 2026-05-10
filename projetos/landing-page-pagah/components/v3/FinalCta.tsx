"use client";

import { motion } from "motion/react";
import { finalCta } from "@/content/landing";

export default function V3FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4">
          {/* Big amber tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative v3-tile-amber p-10 md:p-14 overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(241,229,47,0.45), 0 32px 80px -20px rgba(241,229,47,0.5)",
            }}
          >
            {/* Pulsing radial overlay */}
            <motion.div
              aria-hidden="true"
              className="absolute -top-40 -right-40 size-[600px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 7.4,
                repeat: Infinity,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.25,
              }}
            />
            <div className="relative">
              <div
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full mb-6 v3-mono text-[10px] tracking-[0.2em] uppercase"
                style={{
                  background: "rgba(15,15,16,0.18)",
                  color: "rgba(15,15,16,0.7)",
                }}
              >
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: "#0F0F10" }}
                  aria-hidden="true"
                />
                Pagah · checkout vivo
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.045em] leading-[0.98] max-w-3xl">
                {finalCta.title}
              </h2>

              <p className="mt-6 text-[16px] md:text-lg leading-relaxed max-w-xl text-[rgba(15,15,16,0.78)]">
                {finalCta.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="px-6 py-3.5 text-[14px] font-semibold rounded-xl"
                  style={{
                    background: "#0F0F10",
                    color: "#F5F5F5",
                    boxShadow:
                      "0 0 0 1px rgba(15,15,16,0.4), 0 12px 28px -8px rgba(15,15,16,0.6)",
                  }}
                >
                  {finalCta.primary}
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="px-6 py-3.5 text-[14px] font-medium rounded-xl"
                  style={{
                    background: "rgba(15,15,16,0.08)",
                    color: "#0F0F10",
                    border: "1px solid rgba(15,15,16,0.2)",
                  }}
                >
                  {finalCta.secondary}
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: dark microcopy tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="v3-tile p-7 md:p-8 grid grid-rows-[auto_1fr_auto] gap-5"
          >
            <div className="flex items-center justify-between">
              <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                Migração
              </span>
              <span className="v3-status-dot" aria-hidden="true" />
            </div>

            <ul className="grid gap-3">
              {finalCta.footnote.split("·").map((bit) => (
                <li
                  key={bit}
                  className="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]"
                >
                  <span
                    className="size-5 grid place-items-center rounded"
                    style={{
                      background: "rgba(241,229,47,0.14)",
                      color: "var(--accent)",
                    }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="size-3" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {bit.trim()}
                </li>
              ))}
            </ul>

            <div
              className="pt-4 border-t v3-mono text-[11px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              Suporte humano · 7 dias por semana
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
