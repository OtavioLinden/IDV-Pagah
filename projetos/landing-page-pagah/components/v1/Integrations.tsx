"use client";
import { motion } from "motion/react";
import { integrations } from "@/content/landing";

export default function V1Integrations() {
  return (
    <section
      id="integracoes"
      className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
            Integrações · 12+
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.02] mb-5 text-balance"
          >
            {integrations.title}
          </motion.h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {integrations.subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {integrations.list.map((name) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              className="group rounded-xl p-5 v1-glass v1-glass-hover flex items-center gap-3"
            >
              <span
                className="size-10 rounded-lg grid place-items-center text-[13px] v1-mono font-semibold uppercase tracking-tight"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.913 0.166 100 / 0.18) 0%, oklch(0.913 0.166 100 / 0.04) 100%)",
                  color: "var(--accent)",
                  border: "1px solid oklch(0.913 0.166 100 / 0.22)",
                  boxShadow:
                    "inset 0 1px 0 oklch(1 0.012 95 / 0.08)",
                }}
              >
                {name.slice(0, 2)}
              </span>
              <span className="text-sm font-medium">{name}</span>
              <svg
                viewBox="0 0 24 24"
                className="size-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--accent)" }}
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-sm text-[var(--text-tertiary)] flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            style={{ color: "var(--accent)" }}
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2v20M2 12h20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {integrations.text}
        </p>
      </div>
    </section>
  );
}
