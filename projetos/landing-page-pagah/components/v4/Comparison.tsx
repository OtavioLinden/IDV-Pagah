"use client";
import { motion } from "motion/react";
import { comparison } from "@/content/landing";

export default function V4Comparison() {
  return (
    <section
      className="py-10 md:py-14"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-5">
          <span
            className="v4-serif mb-5 inline-block"
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              letterSpacing: "-0.005em",
            }}
          >
            Lado a lado, sem maquiagem
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="tracking-[-0.02em] leading-[1.04]"
            style={{
              fontSize: "clamp(34px, 4.4vw, 54px)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            {comparison.title}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="v4-card overflow-hidden"
          style={{ padding: "0" }}
        >
          {/* Header row - Pagah real dark style */}
          <div
            className="grid grid-cols-[1.4fr_1fr_1fr]"
            style={{
              background: "var(--bg-card-dark)",
              color: "var(--text-on-dark)",
            }}
          >
            <div
              className="px-6 py-4 v4-mono uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "var(--text-on-dark-secondary)",
              }}
            >
              Recurso
            </div>
            <div
              className="px-6 py-4 v4-mono uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "var(--text-on-dark-secondary)",
              }}
            >
              Plataforma comum
            </div>
            <div
              className="px-6 py-4 v4-mono uppercase font-bold flex items-center gap-2"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "var(--accent)",
              }}
            >
              <span
                className="size-1.5 rounded-full v4-pulse-dot"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
              Pagah
            </div>
          </div>

          {/* Rows */}
          {comparison.rows.map((r, i) => (
            <motion.div
              key={r.feature}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1 + i * 0.04,
              }}
              className="grid grid-cols-[1.4fr_1fr_1fr]"
              style={{
                borderTop: "1px solid var(--border-card)",
                background:
                  i % 2 === 1 ? "rgba(218,218,218,0.18)" : "transparent",
              }}
            >
              <div
                className="px-6 py-4 text-[14px] font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {r.feature}
              </div>
              <div className="px-6 py-4 flex items-center">
                <CellBadge value={r.common} positive={false} />
              </div>
              <div
                className="px-6 py-4 flex items-center"
                style={{
                  background: "rgba(241,229,47,0.06)",
                }}
              >
                <CellBadge value={r.pagah} positive={true} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CellBadge({ value, positive }: { value: string; positive: boolean }) {
  const isYes = value.toLowerCase() === "sim";
  const isNo = value.toLowerCase() === "não";

  if (isYes) {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold"
        style={{
          background: positive ? "var(--success-soft)" : "var(--success-soft)",
          color: "var(--success)",
          fontSize: "12px",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-3.5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Sim
      </span>
    );
  }

  if (isNo) {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold"
        style={{
          background: "var(--error-soft)",
          color: "var(--error)",
          fontSize: "12px",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-3.5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        Não
      </span>
    );
  }

  return (
    <span
      className="text-[13.5px] leading-snug"
      style={{
        color: positive ? "var(--text-primary)" : "var(--text-secondary)",
        fontWeight: positive ? 600 : 400,
      }}
    >
      {value}
    </span>
  );
}
