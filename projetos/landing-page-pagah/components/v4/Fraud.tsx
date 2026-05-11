"use client";
import { motion } from "motion/react";
import { fraud } from "@/content/landing";

export default function V4Fraud() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start mb-12">
          <div>
            <span
              className="v4-mono uppercase mb-5 inline-block"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "var(--text-secondary)",
              }}
            >
              § 06 · Antifraude & Aprovação
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold tracking-[-0.025em] leading-[1.02] mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              {fraud.title}
            </motion.h2>
            <p
              className="text-[16px] leading-relaxed mb-7"
              style={{ color: "var(--text-secondary)" }}
            >
              {fraud.text}
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-3">
              {fraud.cards.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 text-[14px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span
                    className="grid place-items-center size-5 rounded-full shrink-0 mt-px"
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
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <ApprovalDashboard />
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative v4-serif leading-relaxed max-w-3xl"
          style={{
            color: "var(--text-primary)",
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.4vw, 28px)",
            fontWeight: 400,
            padding: "24px 28px",
            borderTop: "2px solid var(--accent)",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute v4-mono"
            style={{
              top: "-8px",
              left: "20px",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: 1,
              color: "var(--accent)",
              letterSpacing: "-0.04em",
            }}
          >
            “
          </span>
          <span style={{ display: "block", paddingLeft: "24px" }}>
            {fraud.quote}
          </span>
        </motion.blockquote>
      </div>
    </section>
  );
}

function ApprovalDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="v4-card-dark"
      style={{ padding: "32px" }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
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
              color: "var(--text-on-dark-secondary)",
            }}
          >
            Aprovação cartão · 30 dias
          </span>
        </div>
        <span
          className="v4-mono"
          style={{
            fontSize: "11px",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          tempo real
        </span>
      </div>

      {/* Big KPI */}
      <div className="mb-6">
        <div
          className="text-[12px] mb-2"
          style={{ color: "var(--text-on-dark-secondary)" }}
        >
          Taxa de aprovação
        </div>
        <div className="flex items-baseline gap-3">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.2,
            }}
            className="v4-tabular font-bold"
            style={{
              fontSize: "64px",
              color: "var(--accent)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            87,3%
          </motion.span>
          <span
            className="v4-mono v4-tabular text-[13px]"
            style={{ color: "#22C55E" }}
          >
            +12 pp vs. mercado
          </span>
        </div>
      </div>

      {/* Bars */}
      <div className="space-y-4 mb-6">
        <BarLine
          label="Pagah"
          pct={87.3}
          color="var(--accent)"
          textColor="var(--text-on-dark)"
          highlight
        />
        <BarLine
          label="Plataforma comum"
          pct={75.1}
          color="rgba(255,255,255,0.25)"
          textColor="var(--text-on-dark-secondary)"
        />
        <BarLine
          label="Antifraude rígido"
          pct={62.8}
          color="rgba(255,255,255,0.15)"
          textColor="var(--text-on-dark-secondary)"
        />
      </div>

      <div
        className="grid grid-cols-2 gap-3 pt-5"
        style={{ borderTop: "1px solid var(--border-on-dark)" }}
      >
        <div>
          <div
            className="v4-mono uppercase mb-1"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            Análise manual
          </div>
          <div
            className="v4-tabular font-bold"
            style={{ fontSize: "20px", color: "var(--text-on-dark)" }}
          >
            1.247
          </div>
        </div>
        <div>
          <div
            className="v4-mono uppercase mb-1"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            Vendas resgatadas
          </div>
          <div
            className="v4-tabular font-bold"
            style={{ fontSize: "20px", color: "var(--text-on-dark)" }}
          >
            R$ 412k
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BarLine({
  label,
  pct,
  color,
  textColor,
  highlight = false,
}: {
  label: string;
  pct: number;
  color: string;
  textColor: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span
          className="text-[13px]"
          style={{ color: textColor, fontWeight: highlight ? 600 : 400 }}
        >
          {label}
        </span>
        <span
          className="v4-mono v4-tabular text-[12px]"
          style={{ color: textColor }}
        >
          {pct.toFixed(1).replace(".", ",")}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.3,
          }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}
