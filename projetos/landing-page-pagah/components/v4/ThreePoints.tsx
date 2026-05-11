"use client";
import { motion } from "motion/react";
import { threePoints } from "@/content/landing";

const icons = [
  // shopping cart
  <path
    key="cart"
    d="M4 5h2.5l2.4 11.2a2 2 0 002 1.6h7.7a2 2 0 002-1.5L22 8H7m1 13a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  // trending up
  <path
    key="trend"
    d="M3 17l6-6 4 4 8-8m0 0v6m0-6h-6"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  // wallet
  <path
    key="wallet"
    d="M3 7a2 2 0 012-2h13a2 2 0 012 2v2H5a2 2 0 110-4h13M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9H5a2 2 0 01-2-2zm14 6h.01"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
];

export default function V4ThreePoints() {
  return (
    <section
      id="solucoes"
      className="py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <hr className="v4-section-rule--accent" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="v4-serif mb-3"
          style={{
            fontStyle: "italic",
            fontSize: "18px",
            fontWeight: 500,
            color: "var(--text-secondary)",
            letterSpacing: "-0.005em",
          }}
        >
          § 01 — Onde o lucro escapa
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="font-bold tracking-[-0.025em] leading-[1.02] mb-4 max-w-4xl"
          style={{ fontSize: "clamp(36px, 5.2vw, 64px)" }}
        >
          {threePoints.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.5,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[15px] mb-6 max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          Cada operação tem três frentes onde o lucro escapa silenciosamente.
          Mostramos onde estão e como recuperar.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {threePoints.cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.05,
              }}
              whileHover={{ y: -2 }}
              className="v4-card flex flex-col"
              style={{ padding: "32px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="grid place-items-center size-12 rounded-xl"
                  style={{
                    background: "var(--accent)",
                    color: "var(--text-primary)",
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="size-6">
                    {icons[i]}
                  </svg>
                </span>
                <span
                  className="v4-mono v4-tabular"
                  style={{
                    fontSize: "12px",
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.1em",
                  }}
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-[20px] font-bold mb-3 tracking-tight">
                {c.title}
              </h3>
              <p
                className="text-[14.5px] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {c.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: 0.16,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-5 max-w-3xl"
        >
          <p
            className="text-[18px] md:text-[20px] leading-relaxed font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            <span style={{ color: "var(--text-tertiary)" }}>›</span>{" "}
            {threePoints.cta}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
