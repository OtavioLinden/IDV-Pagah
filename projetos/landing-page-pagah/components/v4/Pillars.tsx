"use client";
import { motion } from "motion/react";
import { pillars } from "@/content/landing";

export default function V4Pillars() {
  return (
    <section
      id="call-center"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-14">
          <span
            className="v4-mono uppercase mb-4 inline-block"
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            Três engrenagens, um único motor
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.08]"
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.08,
                }}
                whileHover={{ y: -3 }}
                className={isHighlight ? "v4-card-dark" : "v4-card"}
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="v4-mono v4-tabular"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      color: isHighlight
                        ? "var(--accent)"
                        : "var(--text-tertiary)",
                    }}
                  >
                    PILAR 0{i + 1}
                  </span>
                  {isHighlight && (
                    <span
                      className="px-2 py-0.5 rounded-full v4-mono uppercase"
                      style={{
                        background: "var(--accent)",
                        color: "var(--text-primary)",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Diferencial
                    </span>
                  )}
                </div>

                <h3
                  className="text-[22px] font-bold mb-3 tracking-tight"
                  style={{
                    color: isHighlight
                      ? "var(--text-on-dark)"
                      : "var(--text-primary)",
                  }}
                >
                  {col.title}
                </h3>
                <p
                  className="text-[14.5px] leading-relaxed mb-7"
                  style={{
                    color: isHighlight
                      ? "var(--text-on-dark-secondary)"
                      : "var(--text-secondary)",
                  }}
                >
                  {col.text}
                </p>

                <ul className="space-y-3 mt-auto">
                  {col.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[14px]"
                      style={{
                        color: isHighlight
                          ? "var(--text-on-dark)"
                          : "var(--text-primary)",
                      }}
                    >
                      <span
                        className="grid place-items-center size-[18px] rounded-full shrink-0 mt-px"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="size-3"
                          fill="none"
                          style={{ color: "var(--text-primary)" }}
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
