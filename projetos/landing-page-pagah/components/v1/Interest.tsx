"use client";
import { motion } from "motion/react";
import { interestComparison } from "@/content/landing";

export default function V1Interest() {
  return (
    <section
      id="juros"
      className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
            Juros do parcelamento
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.02] mb-4 text-balance"
          >
            {interestComparison.title}
          </motion.h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {interestComparison.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-10">
          <motion.article
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="rounded-2xl p-7 md:p-8 v1-glass relative overflow-hidden"
            style={{
              background: "oklch(1 0.012 95 / 0.012)",
              borderColor: "oklch(1 0.012 95 / 0.06)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[var(--text-tertiary)] text-sm uppercase tracking-[0.18em] v1-mono">
                A maioria
              </span>
              <span className="v1-mono text-[11px] opacity-30">×</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-6 text-[var(--text-secondary)]">
              {interestComparison.left.label}
            </h3>
            <ul className="space-y-3.5">
              {interestComparison.left.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[var(--text-secondary)] line-through decoration-white/10 decoration-1"
                >
                  <span className="mt-2 size-1 rounded-full shrink-0 bg-white/20" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="rounded-2xl p-7 md:p-8 v1-glass relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.913 0.166 100 / 0.13) 0%, oklch(0.913 0.166 100 / 0.025) 100%)",
              borderColor: "oklch(0.913 0.166 100 / 0.32)",
              boxShadow:
                "inset 0 1px 0 oklch(1 0.012 95 / 0.10), 0 24px 56px -20px oklch(0.913 0.166 100 / 0.22)",
            }}
          >
            <div
              className="absolute -top-20 -right-20 size-60 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,229,47,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-sm uppercase tracking-[0.18em] v1-mono"
                  style={{ color: "var(--accent)" }}
                >
                  com a Pagah
                </span>
                <span
                  className="v1-mono text-[11px]"
                  style={{ color: "var(--accent)" }}
                >
                  ✓
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-6">
                {interestComparison.right.label}
              </h3>
              <ul className="space-y-3.5">
                {interestComparison.right.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="mt-2 size-1 rounded-full shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <a
            href="#cta-final"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-xl transition-[transform,box-shadow] hover:scale-[1.02] active:scale-[0.98] self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            style={{
              background: "var(--accent)",
              color: "#0A0A0A",
              boxShadow:
                "0 0 0 1px rgba(241,229,47,0.4), 0 12px 32px -8px rgba(241,229,47,0.45)",
              touchAction: "manipulation",
            }}
          >
            {interestComparison.cta} →
          </a>
          <p className="text-xs text-[var(--text-tertiary)] max-w-md">
            {interestComparison.note}
          </p>
        </div>
      </div>
    </section>
  );
}
