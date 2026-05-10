"use client";

import { motion } from "motion/react";
import { pricing } from "@/content/landing";

export default function V3Pricing() {
  return (
    <section
      id="preco"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Preço
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {pricing.title.split("lucro").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  <span style={{ color: "var(--accent)" }}>lucro</span>
                  {part}
                </span>
              ),
            )}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
          {/* Big price tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -3 }}
            className="v3-tile p-8 md:p-10 relative overflow-hidden v3-glow-ring"
            style={{
              background:
                "linear-gradient(140deg, rgba(241,229,47,0.05) 0%, var(--bg-tile) 70%)",
            }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute -top-32 -right-32 size-[480px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,229,47,0.16) 0%, transparent 60%)",
                filter: "blur(60px)",
              }}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 8.1,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.85,
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="v3-status-dot" aria-hidden="true" />
                <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                  Taxa única
                </span>
              </div>

              <div className="flex items-end gap-3 flex-wrap">
                <span className="text-[68px] md:text-[96px] leading-[0.9] font-bold tracking-[-0.05em] v3-num">
                  {pricing.price.percent}
                </span>
                <span className="text-[20px] md:text-[28px] font-semibold tracking-[-0.02em] mb-2 text-[var(--text-secondary)]">
                  + {pricing.price.fixed}
                </span>
              </div>
              <span className="block mt-2 v3-mono text-[12px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
                {pricing.price.suffix}
              </span>

              <p className="mt-6 text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-xl">
                {pricing.description}
              </p>

              <motion.a
                href="#cta-final"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="inline-flex items-center mt-6 px-5 py-3 text-[14px] font-semibold rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
                  color: "#0F0F10",
                  boxShadow:
                    "0 12px 32px -10px rgba(241,229,47,0.55)",
                }}
              >
                Começar agora →
              </motion.a>
            </div>
          </motion.div>

          {/* Schedule tiles */}
          <div className="grid grid-rows-3 gap-3">
            {pricing.table.map((row, i) => (
              <motion.div
                key={row.method}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.06,
                }}
                whileHover={{ y: -2 }}
                className="v3-tile p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="size-9 grid place-items-center rounded-lg"
                    style={{
                      background: "rgba(241,229,47,0.12)",
                      color: "var(--accent)",
                    }}
                    aria-hidden="true"
                  >
                    {row.method === "Pix" ? (
                      <PixIcon />
                    ) : row.method === "Boleto" ? (
                      <BoletoIcon />
                    ) : (
                      <CardIcon />
                    )}
                  </span>
                  <div>
                    <div className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
                      Método
                    </div>
                    <div className="text-[16px] font-semibold tracking-[-0.015em]">
                      {row.method}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
                    Prazo
                  </div>
                  <div className="text-[13px] font-medium" style={{ color: "var(--accent)" }}>
                    {row.deadline}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[12px] text-[var(--text-tertiary)] max-w-3xl">
          {pricing.note}
        </p>
      </div>
    </section>
  );
}

function PixIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M5 12l7-7 7 7-7 7-7-7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 12h6M12 9v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function BoletoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 10h18M7 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
