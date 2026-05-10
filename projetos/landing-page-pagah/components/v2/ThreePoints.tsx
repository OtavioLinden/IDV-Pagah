"use client";
import { motion } from "motion/react";
import { threePoints } from "@/content/landing";

export default function V2ThreePoints() {
  return (
    <section
      className="relative py-32 md:py-48"
      style={{
        background: "var(--bg-contrast)",
        color: "var(--text-on-contrast)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 md:mb-24 border-t-2 border-[var(--text-on-contrast)] pt-6">
          <span className="v2-kicker text-[var(--text-on-contrast-secondary)]">
            Capítulo 01 · Diagnóstico
          </span>
          <span className="v2-kicker text-[var(--text-on-contrast-secondary)] v2-tabular hidden md:block">
            03 perdas
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
            letterSpacing: "-0.045em",
            lineHeight: 0.96,
          }}
        >
          Você pode estar perdendo dinheiro em{" "}
          <span style={{ color: "var(--accent)" }}>3 lugares</span>.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-0"
        >
          {threePoints.cards.map((card, i) => (
            <motion.article
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
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
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-12 md:py-16 border-t border-[var(--border-on-contrast)] items-start"
            >
              <div className="col-span-12 lg:col-span-2">
                <span
                  className="v2-num font-extrabold v2-tabular block"
                  style={{
                    fontSize: "clamp(72px, 10vw, 140px)",
                    color: "var(--accent)",
                    lineHeight: 0.85,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="v2-display col-span-12 lg:col-span-6 font-bold"
                style={{
                  fontSize: "clamp(28px, 3.6vw, 52px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.02,
                }}
              >
                {card.title}.
              </h3>
              <p className="col-span-12 lg:col-span-4 text-base md:text-lg text-[var(--text-on-contrast-secondary)] leading-relaxed lg:pt-3">
                {card.text}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="border-t border-[var(--border-on-contrast)] pt-12 mt-4">
          <p
            className="v2-display max-w-4xl font-medium italic"
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            &ldquo;{threePoints.cta}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
