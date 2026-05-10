"use client";
import { motion } from "motion/react";
import { pillars } from "@/content/landing";

export default function V1Pillars() {
  return (
    <section
      id="solucoes"
      className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
            Pilares · 3 sistemas
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] text-balance"
          >
            {pillars.title.split("máquina de lucro").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  <span style={{ color: "var(--accent)" }}>
                    máquina de lucro
                  </span>
                  {part}
                </span>
              )
            )}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {pillars.columns.map((col, i) => (
            <motion.article
              key={col.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.1,
              }}
              className={`rounded-2xl v1-glass p-7 md:p-8 relative overflow-hidden ${
                i === 1 ? "" : "v1-glass-hover"
              }`}
              style={
                i === 1
                  ? {
                      background:
                        "linear-gradient(180deg, oklch(0.913 0.166 100 / 0.06) 0%, oklch(1 0.012 95 / 0.022) 60%)",
                      borderColor: "oklch(0.913 0.166 100 / 0.22)",
                      boxShadow:
                        "inset 0 1px 0 oklch(1 0.012 95 / 0.10), inset 0 -1px 0 oklch(0 0 0 / 0.25), 0 24px 56px -20px oklch(0.913 0.166 100 / 0.18)",
                    }
                  : undefined
              }
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="size-9 rounded-lg grid place-items-center"
                  style={{
                    background:
                      i === 1
                        ? "var(--accent)"
                        : "rgba(255,255,255,0.05)",
                    color: i === 1 ? "#0A0A0A" : "var(--accent)",
                  }}
                >
                  {i === 0 && <IconCart />}
                  {i === 1 && <IconHeadset />}
                  {i === 2 && <IconCard />}
                </span>
                <span className="v1-mono text-[11px] tracking-[0.18em] uppercase opacity-50">
                  Pilar 0{i + 1}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] mb-3 leading-tight">
                {col.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-6">
                {col.text}
              </p>
              <ul className="space-y-2.5 pt-4 border-t border-white/5">
                {col.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <span
                      className="mt-2 size-1 rounded-full shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M3 3h2l2 13h11l2-9H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M4 14v-2a8 8 0 0 1 16 0v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="2"
        y="13"
        width="4"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="18"
        y="13"
        width="4"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
function IconCard() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 15h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
