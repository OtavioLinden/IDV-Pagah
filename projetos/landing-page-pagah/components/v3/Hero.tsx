"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { hero } from "@/content/landing";

export default function V3Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 v3-grid-bg opacity-60 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />
      {/* Amber halo */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] size-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(241,229,47,0.16) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{ opacity: [0.6, 0.95, 0.6] }}
        transition={{
          duration: 9.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: [0.42, 0, 0.58, 1],
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* LEFT: copy bento */}
          <div className="grid grid-rows-[auto_1fr_auto] gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="v3-tile px-4 py-3 inline-flex items-center gap-2.5 self-start"
            >
              <span className="v3-status-dot" aria-hidden="true" />
              <span className="v3-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-secondary)]">
                Checkout · Call Center · Juros
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
              className="v3-tile p-7 md:p-9 relative overflow-hidden"
            >
              <h1 className="text-[40px] md:text-[58px] lg:text-[64px] leading-[0.98] tracking-[-0.035em] font-bold">
                Pare de perder vendas, carrinhos e{" "}
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  juros do parcelamento
                </span>
                .
              </h1>
              <p className="mt-5 text-[15px] md:text-[17px] text-[var(--text-secondary)] leading-relaxed max-w-xl">
                {hero.subheadline}
              </p>
              <p className="mt-3 text-[13px] text-[var(--text-tertiary)] leading-relaxed max-w-xl">
                {hero.support}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
              }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {hero.bullets.map((b) => (
                <motion.div
                  key={b}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 100, damping: 20 },
                    },
                  }}
                  className="v3-tile px-4 py-3 flex items-center gap-3 text-[13px]"
                >
                  <CheckMark />
                  <span className="text-[var(--text-secondary)]">{b}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.55 }}
              className="flex flex-wrap gap-3 mt-1"
            >
              <motion.a
                href="#cta-final"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="px-5 py-3 text-[14px] font-semibold rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
                  color: "#0F0F10",
                  boxShadow:
                    "0 0 0 1px rgba(241,229,47,0.4), 0 12px 32px -10px rgba(241,229,47,0.55)",
                }}
              >
                {hero.primaryCta}
              </motion.a>
              <motion.a
                href="#solucoes"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="px-5 py-3 text-[14px] font-medium rounded-xl v3-tile"
              >
                {hero.secondaryCta} →
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: bento dashboard */}
          <DashboardBento />
        </div>
      </div>
    </section>
  );
}

function CheckMark() {
  return (
    <span
      className="size-5 grid place-items-center rounded-md shrink-0"
      style={{
        background: "rgba(241,229,47,0.12)",
        color: "var(--accent)",
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-3" fill="none">
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const DashboardBento = memo(function DashboardBento() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
      className="grid grid-cols-6 grid-rows-[auto_auto_auto] gap-3 self-stretch"
    >
      {/* KPI primary tile (amber) — 4 cols */}
      <KpiAmberTile />

      {/* Pulse tile — 2 cols */}
      <PulseTile />

      {/* Sparkline tile — 3 cols */}
      <SparklineTile />

      {/* Shimmer tile — 3 cols */}
      <ShimmerTile />

      {/* Floating mini KPI — 2 cols */}
      <MiniKpiTile
        label="Pix recuperado"
        value="R$ 92k"
        duration={3.8}
        ease={[0.16, 1, 0.3, 1]}
      />
      {/* Mini KPI 2 cols */}
      <MiniKpiTile
        label="Aprovação cartão"
        value="87,3%"
        delay={0.55}
        duration={4.7}
        ease={[0.65, 0, 0.35, 1]}
      />
      {/* Approval typewriter tile — 2 cols */}
      <ApprovalTile />
    </motion.div>
  );
});

function KpiAmberTile() {
  return (
    <motion.div
      className="col-span-4 row-span-1 v3-tile-amber p-5 relative overflow-hidden"
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 5.4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="v3-mono text-[10px] tracking-[0.18em] uppercase opacity-70">
          Potencial de faturamento
        </span>
        <span
          className="v3-mono text-[10px] px-1.5 py-0.5 rounded-md"
          style={{ background: "rgba(15,15,16,0.18)" }}
        >
          7d
        </span>
      </div>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-[58px] md:text-[64px] font-bold tracking-[-0.05em] leading-none v3-num">
          +40%
        </span>
        <motion.span
          className="mb-2 text-[12px] font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2.9,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            delay: 0.6,
          }}
        >
          ↑ vs. base
        </motion.span>
      </div>
      {/* Mini trend bars */}
      <div className="mt-4 flex items-end gap-1 h-10">
        {[20, 32, 26, 44, 38, 52, 48, 64, 70, 58, 76, 82].map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: "rgba(15,15,16,0.42)" }}
            animate={{ height: [`${h - 6}%`, `${h}%`, `${h - 6}%`] }}
            transition={{
              duration: 2.4 + i * 0.07,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function PulseTile() {
  return (
    <div className="col-span-2 row-span-1 v3-tile p-5 relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="v3-status-dot" aria-hidden="true" />
        <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
          live
        </span>
      </div>
      <div>
        <p className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-2">
          Atendentes ativos
        </p>
        <motion.span
          className="text-[40px] font-bold tracking-[-0.04em] leading-none v3-num block"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{
            duration: 1.9,
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
            delay: 0.45,
          }}
        >
          24
        </motion.span>
      </div>
    </div>
  );
}

function SparklineTile() {
  const path =
    "M0,40 L12,38 L24,30 L36,32 L48,22 L60,26 L72,18 L84,14 L96,8 L108,12 L120,4";
  return (
    <div className="col-span-3 row-span-1 v3-tile p-5 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-secondary)]">
          Upsell · 30d
        </span>
        <span className="text-[10px] v3-mono text-[var(--accent)]">↑ 18%</span>
      </div>
      <div className="mt-2 flex items-end gap-2">
        <span className="text-[28px] font-bold tracking-[-0.03em] v3-num">
          R$ 646k
        </span>
      </div>
      <svg
        viewBox="0 0 120 48"
        className="mt-2 w-full h-12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="v3-spark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F1E52F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F1E52F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={`${path} L120,48 L0,48 Z`}
          fill="url(#v3-spark)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="#F1E52F"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        />
        <circle r="2.6" fill="#F1E52F" cx="120" cy="4" />
      </svg>
    </div>
  );
}

function ShimmerTile() {
  return (
    <div className="col-span-3 row-span-1 v3-tile p-5 relative overflow-hidden">
      <div className="absolute inset-0 v3-shimmer-bg pointer-events-none" />
      <div className="relative">
        <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-secondary)]">
          Pedidos recuperados · hoje
        </span>
        <motion.div
          className="mt-3 text-[40px] font-bold tracking-[-0.04em] v3-num"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          188
        </motion.div>
        <div className="mt-2 flex items-center gap-2 text-[11px] v3-mono text-[var(--text-tertiary)]">
          <span className="v3-status-dot scale-75" aria-hidden="true" />
          <span>recuperação ativa</span>
        </div>
      </div>
    </div>
  );
}

const MiniKpiTile = memo(function MiniKpiTile({
  label,
  value,
  delay = 0,
  duration = 3.3,
  ease = [0.45, 0, 0.55, 1] as [number, number, number, number],
}: {
  label: string;
  value: string;
  delay?: number;
  duration?: number;
  ease?: [number, number, number, number];
}) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.01, y: -2 }}
      className="col-span-2 v3-tile p-4"
      animate={{ y: [0, -2, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease,
        delay,
      }}
    >
      <span className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
        {label}
      </span>
      <div className="mt-2 text-[22px] font-bold tracking-[-0.02em] v3-num">
        {value}
      </div>
    </motion.div>
  );
});

function ApprovalTile() {
  const phrases = ["aprovado", "recuperado", "vendido", "convertido"];
  return (
    <div className="col-span-2 v3-tile p-4 relative overflow-hidden">
      <span className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
        Status
      </span>
      <div className="mt-2 h-7 relative overflow-hidden">
        {phrases.map((p, i) => (
          <motion.span
            key={p}
            className="absolute inset-0 text-[18px] font-semibold tracking-[-0.02em]"
            style={{ color: "var(--accent)" }}
            animate={{
              y: ["100%", "0%", "0%", "-100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: phrases.length * 1.6,
              times: [
                i / phrases.length,
                (i + 0.1) / phrases.length,
                (i + 0.9) / phrases.length,
                (i + 1) / phrases.length,
              ],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
