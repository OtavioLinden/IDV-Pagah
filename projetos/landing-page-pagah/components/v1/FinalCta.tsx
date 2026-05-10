"use client";
import { motion } from "motion/react";
import { finalCta } from "@/content/landing";

export default function V1FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative py-24 md:py-40 overflow-hidden border-t border-[var(--border-subtle)]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(241,229,47,0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(241,229,47,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.98] mb-6 text-balance"
        >
          Pronto pra parar de deixar{" "}
          <span className="v1-shimmer-text">dinheiro na mesa</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {finalCta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <a
            href="#"
            className="px-7 py-4 text-sm md:text-base font-medium rounded-xl transition-[transform,box-shadow] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            style={{
              background: "var(--accent)",
              color: "#0A0A0A",
              boxShadow:
                "0 0 0 1px rgba(241,229,47,0.4), 0 16px 40px -10px rgba(241,229,47,0.5)",
              touchAction: "manipulation",
            }}
          >
            {finalCta.primary}
          </a>
          <a
            href="#"
            className="px-7 py-4 text-sm md:text-base font-medium rounded-xl v1-glass hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            style={{ touchAction: "manipulation" }}
          >
            {finalCta.secondary}
          </a>
        </motion.div>

        <p className="v1-mono text-xs tracking-wider opacity-50">
          {finalCta.footnote}
        </p>
      </div>
    </section>
  );
}
