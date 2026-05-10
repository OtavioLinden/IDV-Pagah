"use client";
import { motion } from "motion/react";
import { fraud } from "@/content/landing";

export default function V1Fraud() {
  return (
    <section className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
          <div>
            <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
              Antifraude · Aprovação
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] text-balance"
            >
              Mais aprovação. Menos venda legítima desperdiçada.
            </motion.h2>
          </div>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {fraud.text}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12"
        >
          {fraud.cards.map((c, i) => (
            <motion.article
              key={c}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              className="rounded-xl p-5 v1-glass flex items-center gap-3"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span
                className="size-9 shrink-0 rounded-lg grid place-items-center text-xs v1-mono"
                style={{
                  background: "rgba(241,229,47,0.1)",
                  color: "var(--accent)",
                }}
              >
                0{i + 1}
              </span>
              <span className="text-sm">{c}</span>
            </motion.article>
          ))}
        </motion.div>

        <p
          className="text-2xl md:text-3xl tracking-[-0.025em] font-medium leading-tight max-w-3xl border-l-2 pl-6"
          style={{ borderColor: "var(--accent)" }}
        >
          “{fraud.quote}”
        </p>
      </div>
    </section>
  );
}
