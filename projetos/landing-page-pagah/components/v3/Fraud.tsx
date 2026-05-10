"use client";

import { motion } from "motion/react";
import { fraud } from "@/content/landing";

export default function V3Fraud() {
  return (
    <section
      id="antifraude"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Antifraude
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {fraud.title.split("Mais aprovação").map((part, i) =>
              i === 1 ? (
                <span key={i}>
                  <span style={{ color: "var(--accent)" }}>Mais aprovação</span>
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </motion.h2>
          <p className="mt-4 text-[15px] md:text-lg text-[var(--text-secondary)] max-w-2xl">
            {fraud.text}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(140px,auto)]">
          <ApprovalRateTile />
          {fraud.cards.map((c, i) => (
            <FeatureTile key={c} index={i} text={c} />
          ))}
          <QuoteTile quote={fraud.quote} />
        </div>
      </div>
    </section>
  );
}

function ApprovalRateTile() {
  // Approval circle with shimmering rate
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      whileHover={{ y: -3 }}
      className="md:col-span-3 md:row-span-2 v3-tile p-7 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, rgba(241,229,47,0.05) 0%, var(--bg-tile) 60%)",
      }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 size-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(241,229,47,0.18) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
            Aprovacao em cartao
          </span>
          <span className="v3-status-dot" aria-hidden="true" />
        </div>

        <div className="mt-8 flex items-center gap-7">
          <ApprovalGauge />
          <div>
            <div className="text-[58px] font-bold tracking-[-0.05em] leading-none v3-num">
              87
              <span className="text-[28px] font-semibold align-top ml-1">
                ,3%
              </span>
            </div>
            <div className="mt-2 text-[12px] v3-mono" style={{ color: "var(--accent)" }}>
              ↑ +12,4 pp vs comum
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {[
            ["Bandeira A", "92%"],
            ["Bandeira B", "85%"],
            ["Bandeira C", "78%"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="px-3 py-2 rounded-lg"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              <div className="v3-mono text-[9px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
                {k}
              </div>
              <div className="text-[14px] font-semibold v3-num">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ApprovalGauge() {
  const r = 38;
  const c = 2 * Math.PI * r;
  const pct = 0.873;
  return (
    <div className="relative" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="size-[110px]">
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          stroke="url(#v3-gauge-grad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - pct) }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
          transform="rotate(-90 50 50)"
        />
        <defs>
          <linearGradient id="v3-gauge-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#F1E52F" />
            <stop offset="100%" stopColor="#C9BF28" />
          </linearGradient>
        </defs>
      </svg>
      <motion.span
        className="absolute inset-0 grid place-items-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="size-2 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </motion.span>
    </div>
  );
}

function FeatureTile({ index, text }: { index: number; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.04,
      }}
      whileHover={{ y: -2 }}
      className="col-span-1 md:col-span-3 lg:col-span-1 v3-tile p-4 flex flex-col justify-between min-h-[120px]"
    >
      <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-[14px] font-medium tracking-[-0.01em]">{text}</span>
    </motion.div>
  );
}

function QuoteTile({ quote }: { quote: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="md:col-span-6 v3-tile-amber p-6"
    >
      <p className="text-[16px] md:text-xl font-semibold tracking-[-0.015em] leading-snug">
        “{quote}”
      </p>
    </motion.div>
  );
}
