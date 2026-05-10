"use client";
import { motion } from "motion/react";
import { pricing } from "@/content/landing";

export default function V1Pricing() {
  return (
    <section className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
            Taxa · Modelo
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.02] text-balance"
          >
            Uma taxa que se paga{" "}
            <span style={{ color: "var(--accent)" }}>com lucro</span>.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5">
          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden v1-glass"
            style={{
              background:
                "linear-gradient(135deg, rgba(241,229,47,0.08) 0%, rgba(0,0,0,0.4) 100%)",
              borderColor: "rgba(241,229,47,0.2)",
            }}
          >
            <div
              className="absolute -top-32 -right-32 size-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,229,47,0.25) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            <div className="relative">
              <span
                className="v1-mono text-xs tracking-[0.2em] uppercase mb-6 block"
                style={{ color: "var(--accent)" }}
              >
                Por transação
              </span>
              <div className="flex items-baseline gap-3 mb-6 flex-wrap">
                <span
                  className="text-6xl md:text-8xl font-semibold tracking-[-0.05em] tabular-nums leading-none"
                  style={{ color: "var(--accent)" }}
                >
                  {pricing.price.percent}
                </span>
                <span className="text-2xl md:text-3xl font-light text-[var(--text-secondary)]">
                  + {pricing.price.fixed}
                </span>
              </div>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                {pricing.description}
              </p>
            </div>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="rounded-3xl p-8 md:p-10 v1-glass"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-6 block">
              Prazo de saque
            </span>
            <ul className="divide-y divide-white/5">
              {pricing.table.map((row) => (
                <li
                  key={row.method}
                  className="py-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="size-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <span className="text-base font-medium">{row.method}</span>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] tabular-nums text-right">
                    {row.deadline}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-[var(--text-tertiary)] leading-relaxed">
              {pricing.note}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
