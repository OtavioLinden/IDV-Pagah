"use client";
import { motion } from "motion/react";
import { pillars } from "@/content/landing";

export default function V4Pillars() {
  return (
    <section
      id="call-center"
      className="py-16 md:py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl mb-10">
          <span
            className="v4-serif mb-4 inline-block"
            style={{
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: 500,
              color: "var(--text-secondary)",
              letterSpacing: "-0.005em",
            }}
          >
            § 02 — Três engrenagens, um único motor
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="v4-serif tracking-[-0.02em] leading-[1.04]"
            style={{ fontSize: "clamp(34px, 4.6vw, 56px)", fontWeight: 500 }}
          >
            {pillars.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.columns.map((col, i) => {
            const isHighlight = i === 1;
            return (
              <motion.article
                key={col.title}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.05,
                }}
                whileHover={{ y: -2 }}
                className="v4-card"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: isHighlight
                    ? "2px solid var(--accent)"
                    : "1px solid var(--border-card)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="v4-mono v4-tabular"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    PILAR 0{i + 1}
                  </span>
                  {isHighlight && (
                    <span
                      className="v4-serif"
                      style={{
                        fontStyle: "italic",
                        fontSize: "13px",
                        color: "var(--text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      diferencial Pagah
                    </span>
                  )}
                </div>

                <h3
                  className="text-[22px] font-bold mb-3 tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {col.title}
                </h3>
                <p
                  className="text-[14.5px] leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {col.text}
                </p>

                <ul className="space-y-2.5 mt-auto">
                  {col.bullets.map((b, bi) => (
                    <li
                      key={b}
                      className="flex items-baseline gap-3 text-[14px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span
                        className="v4-mono v4-tabular shrink-0"
                        style={{
                          fontSize: "10px",
                          color: isHighlight
                            ? "var(--text-primary)"
                            : "var(--text-tertiary)",
                          letterSpacing: "0.06em",
                          fontWeight: isHighlight ? 700 : 400,
                          background: isHighlight ? "var(--accent)" : "transparent",
                          padding: isHighlight ? "1px 5px" : "0",
                          borderRadius: "2px",
                        }}
                        aria-hidden="true"
                      >
                        {String(bi + 1).padStart(2, "0")}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {isHighlight && (
                  <div
                    className="mt-6 pt-5 grid grid-cols-2 gap-3"
                    style={{ borderTop: "1px solid var(--border-card)" }}
                  >
                    <div>
                      <div
                        className="v4-mono uppercase mb-1"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.18em",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        Recuperação
                      </div>
                      <div
                        className="v4-tabular font-bold"
                        style={{ fontSize: "18px", color: "var(--text-primary)" }}
                      >
                        +27%
                      </div>
                    </div>
                    <div>
                      <div
                        className="v4-mono uppercase mb-1"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.18em",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        Ticket médio
                      </div>
                      <div
                        className="v4-tabular font-bold"
                        style={{ fontSize: "18px", color: "var(--text-primary)" }}
                      >
                        +38%
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
