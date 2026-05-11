"use client";
import { motion } from "motion/react";
import { pricing } from "@/content/landing";

export default function V4Pricing() {
  return (
    <section
      className="py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-5">
          <hr className="v4-section-rule--accent" aria-hidden="true" />
          <span
            className="v4-mono uppercase mb-5 inline-block"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            § 08 · Taxa & modelo
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="v4-serif tracking-[-0.02em] leading-[1.04]"
            style={{ fontSize: "clamp(34px, 4.6vw, 56px)", fontWeight: 500 }}
          >
            {pricing.title}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5">
          {/* Pricing card - white, Pagah real "Saque" style */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="v4-card relative overflow-hidden"
            style={{ padding: "40px" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span
                className="size-2 rounded-full v4-pulse-dot"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
              <span
                className="v4-mono uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "var(--text-secondary)",
                }}
              >
                Por transação
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6 flex-wrap">
              <span
                className="v4-tabular font-bold v4-underline-accent"
                style={{
                  fontSize: "72px",
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  color: "var(--text-primary)",
                }}
              >
                {pricing.price.percent}
              </span>
              <span
                className="text-[28px] font-bold v4-tabular"
                style={{
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                + {pricing.price.fixed}
              </span>
            </div>
            <p
              className="text-[14px] mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {pricing.price.suffix}
            </p>

            <p
              className="text-[15px] leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              {pricing.description}
            </p>

            <div
              className="grid grid-cols-3 gap-3 pt-6"
              style={{ borderTop: "1px solid var(--border-card)" }}
            >
              <KpiCallout label="Setup" value="Grátis" />
              <KpiCallout label="Migração" value="Apoiada" />
              <KpiCallout label="Suporte" value="Dedicado" />
            </div>
          </motion.div>

          {/* Settlement table - Pagah real style with dark header */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.07,
            }}
            className="v4-card overflow-hidden"
            style={{ padding: "0" }}
          >
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{
                background: "var(--bg-card-dark)",
                color: "var(--text-on-dark)",
              }}
            >
              <span
                className="v4-mono uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                }}
              >
                Prazos de saque
              </span>
              <span
                className="v4-mono"
                style={{
                  fontSize: "11px",
                  color: "var(--text-on-dark-secondary)",
                }}
              >
                d+0 a d+2
              </span>
            </div>

            <ul>
              {pricing.table.map((row, i) => (
                <motion.li
                  key={row.method}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.15 + i * 0.07,
                  }}
                  className="px-6 py-5 flex items-center justify-between"
                  style={{
                    borderTop:
                      i > 0 ? "1px solid var(--border-card)" : "none",
                    background:
                      i % 2 === 1 ? "rgba(218,218,218,0.15)" : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="size-9 rounded-lg grid place-items-center"
                      style={{
                        background: "var(--bg-base)",
                        border: "1px solid var(--border-subtle)",
                      }}
                      aria-hidden="true"
                    >
                      <PaymentIcon method={row.method} />
                    </span>
                    <span className="text-[15px] font-bold">{row.method}</span>
                  </div>
                  <span
                    className="v4-mono v4-tabular text-[13px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {row.deadline}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div
              className="px-6 py-4"
              style={{ borderTop: "1px solid var(--border-card)" }}
            >
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: "var(--text-tertiary)" }}
              >
                {pricing.note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KpiCallout({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="v4-mono uppercase mb-1"
        style={{
          fontSize: "10px",
          letterSpacing: "0.14em",
          color: "var(--text-tertiary)",
        }}
      >
        {label}
      </div>
      <div className="text-[15px] font-bold tracking-tight">{value}</div>
    </div>
  );
}

function PaymentIcon({ method }: { method: string }) {
  if (method === "Boleto")
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 6h2v12H3zm4 0h1v12H7zm3 0h2v12h-2zm4 0h1v12h-1zm3 0h2v12h-2zm4 0h1v12h-1z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  if (method === "Pix")
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 12l4.5-4.5a2 2 0 012.83 0L12 9.17l1.67-1.67a2 2 0 012.83 0L21 12l-4.5 4.5a2 2 0 01-2.83 0L12 14.83l-1.67 1.67a2 2 0 01-2.83 0L3 12z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <path
        d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 4h18M7 15h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
