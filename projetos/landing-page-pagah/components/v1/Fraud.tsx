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
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12"
        >
          {fraud.cards.map((c, i) => (
            <motion.article
              key={c}
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(3px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.34, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="rounded-xl p-5 v1-glass v1-glass-hover flex items-center gap-3"
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

        <figure className="max-w-3xl">
          <span
            aria-hidden="true"
            className="block text-7xl leading-none mb-2 font-semibold"
            style={{ color: "var(--accent)", opacity: 0.85 }}
          >
            “
          </span>
          <blockquote className="text-2xl md:text-3xl tracking-[-0.025em] font-medium leading-tight">
            {fraud.quote}
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
