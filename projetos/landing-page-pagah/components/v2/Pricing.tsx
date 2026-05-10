"use client";
import { motion } from "motion/react";
import { pricing } from "@/content/landing";

export default function V2Pricing() {
  return (
    <section
      className="relative py-32 md:py-48"
      style={{
        background: "var(--bg-contrast)",
        color: "var(--text-on-contrast)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 border-t-2 border-[var(--text-on-contrast)] pt-6">
          <span className="v2-kicker text-[var(--text-on-contrast-secondary)]">
            Capítulo 09 · Modelo
          </span>
          <span className="v2-kicker text-[var(--text-on-contrast-secondary)] hidden md:block">
            Taxa única · sem setup
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="v2-display font-extrabold mb-20 max-w-5xl"
          style={{
            fontSize: "clamp(48px, 7vw, 110px)",
            letterSpacing: "-0.05em",
            lineHeight: 0.94,
          }}
        >
          Uma taxa que se{" "}
          <span style={{ color: "var(--accent)" }}>paga com lucro</span>.
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="border-t border-[var(--border-on-contrast)] pt-6">
              <span className="v2-kicker text-[var(--text-on-contrast-secondary)] block mb-4">
                Taxa por transação
              </span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="v2-num font-extrabold v2-tabular"
                  style={{
                    fontSize: "clamp(120px, 18vw, 280px)",
                    lineHeight: 0.85,
                    color: "var(--accent)",
                  }}
                >
                  {pricing.price.percent}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-4 v2-tabular">
                <span className="v2-display font-medium text-3xl">+</span>
                <span className="v2-display font-bold v2-tabular text-4xl md:text-5xl">
                  {pricing.price.fixed}
                </span>
                <span className="text-sm text-[var(--text-on-contrast-secondary)] ml-2">
                  {pricing.price.suffix}
                </span>
              </div>
              <p className="text-base md:text-lg text-[var(--text-on-contrast-secondary)] leading-relaxed max-w-xl mt-8">
                {pricing.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="border-2 border-[var(--accent)] p-8">
              <span className="v2-kicker mb-6 block" style={{ color: "var(--accent)" }}>
                Prazos de saque
              </span>
              <ul>
                {pricing.table.map((row, i) => (
                  <li
                    key={row.method}
                    className="flex items-baseline justify-between gap-4 py-5 border-t border-[var(--border-on-contrast)]"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="v2-num v2-tabular text-xs text-[var(--text-on-contrast-secondary)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="v2-display font-bold"
                        style={{
                          fontSize: "clamp(22px, 2.4vw, 30px)",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {row.method}
                      </span>
                    </div>
                    <span className="text-sm text-[var(--text-on-contrast-secondary)] text-right">
                      {row.deadline}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--text-on-contrast-secondary)] mt-6 pt-6 border-t border-[var(--border-on-contrast)]">
                {pricing.note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
