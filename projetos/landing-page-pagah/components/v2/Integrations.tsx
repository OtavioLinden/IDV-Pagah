"use client";
import { motion } from "motion/react";
import { integrations } from "@/content/landing";

export default function V2Integrations() {
  return (
    <section
      id="integracoes"
      className="relative py-32 md:py-48"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 08 · Ficha técnica
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] v2-tabular hidden md:block">
            {integrations.list.length} integrações
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="v2-display font-extrabold col-span-12 lg:col-span-8"
            style={{
              fontSize: "clamp(44px, 6.5vw, 100px)",
              letterSpacing: "-0.045em",
              lineHeight: 0.94,
            }}
          >
            Integre suas ferramentas. Migre sem dor de cabeça.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
            className="col-span-12 lg:col-span-4 lg:pt-6 text-base text-[var(--text-secondary)] leading-snug"
          >
            {integrations.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-medium)] border border-[var(--border-medium)]"
        >
          {integrations.list.map((name, i) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  },
                },
              }}
              className="bg-[var(--bg-elevated)] p-6 md:p-8 flex flex-col justify-between min-h-[140px]"
            >
              <span className="v2-num v2-tabular text-xs text-[var(--text-tertiary)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="v2-display font-bold mt-4"
                style={{
                  fontSize: "clamp(20px, 2vw, 28px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                }}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-base text-[var(--text-secondary)] max-w-2xl">
          {integrations.text}
        </p>
      </div>
    </section>
  );
}
