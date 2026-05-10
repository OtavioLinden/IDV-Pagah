"use client";
import { motion } from "motion/react";
import { fraud } from "@/content/landing";

export default function V2Fraud() {
  return (
    <section
      className="relative py-32 md:py-48"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 06 · Antifraude
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] hidden md:block">
            Análise manual + tecnologia
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="v2-display font-extrabold col-span-12 lg:col-span-8"
            style={{
              fontSize: "clamp(48px, 7vw, 110px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.94,
            }}
          >
            Mais{" "}
            <span
              style={{
                background: `linear-gradient(180deg, transparent 62%, var(--accent) 62%, var(--accent) 92%, transparent 92%)`,
              }}
            >
              aprovação
            </span>
            . Menos venda boa desperdiçada.
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
            className="col-span-12 lg:col-span-4 text-lg text-[var(--text-secondary)] leading-snug lg:pt-8"
          >
            {fraud.text}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-medium)] border border-[var(--border-medium)]"
        >
          {fraud.cards.map((card, i) => (
            <motion.article
              key={card}
              variants={{
                hidden: { opacity: 0, y: 16 },
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
              className="bg-[var(--bg-elevated)] p-8 flex items-start gap-6 min-h-[180px]"
            >
              <span
                className="v2-num font-extrabold v2-tabular shrink-0"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: 0.85,
                  color: "var(--text-tertiary)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="v2-display font-bold leading-tight"
                style={{
                  fontSize: "clamp(20px, 2vw, 28px)",
                  letterSpacing: "-0.03em",
                }}
              >
                {card}.
              </h3>
            </motion.article>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mt-16 max-w-4xl border-t-2 border-[var(--text-primary)] pt-8"
        >
          <span
            className="v2-display block leading-none"
            style={{
              fontSize: "clamp(80px, 9vw, 140px)",
              color: "var(--accent)",
              marginBottom: "-0.4em",
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className="v2-display italic font-medium"
            style={{
              fontSize: "clamp(28px, 3.4vw, 48px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
            }}
          >
            {fraud.quote}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
