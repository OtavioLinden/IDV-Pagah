"use client";
import { motion } from "motion/react";
import { hero } from "@/content/landing";

export default function V1Hero() {
  return (
    <section className="relative pt-40 md:pt-44 pb-24 md:pb-32 overflow-hidden v1-halo">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 size-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(241,229,47,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-40 size-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(241,229,47,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start relative">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full v1-glass v1-mono text-[11px] tracking-[0.15em] uppercase mb-6"
          >
            <span
              className="size-1.5 rounded-full animate-pulse motion-reduce:animate-none"
              style={{ background: "var(--accent)" }}
            />
            Checkout · Call Center · Juros do Parcelamento
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.04,
            }}
            className="text-[44px] md:text-[64px] lg:text-[72px] leading-[0.98] tracking-[-0.035em] font-semibold mb-6 text-balance"
          >
            Pare de perder vendas, carrinhos e{" "}
            <span className="v1-accent-underscore">juros do parcelamento</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.36,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.08,
            }}
            className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mb-4"
          >
            {hero.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.32,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.12,
            }}
            className="text-sm text-[var(--text-tertiary)] leading-relaxed max-w-xl mb-8"
          >
            {hero.support}
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.16 } },
            }}
            className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-xl"
          >
            {hero.bullets.map((b) => (
              <motion.li
                key={b}
                variants={{
                  hidden: { opacity: 0, x: -6 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 mt-0.5 shrink-0"
                  style={{ color: "var(--accent)" }}
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.36,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.32,
            }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#cta-final"
              className="px-6 py-3.5 text-sm font-medium rounded-xl transition-[transform,box-shadow] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              style={{
                background: "var(--accent)",
                color: "#0A0A0A",
                boxShadow:
                  "0 0 0 1px rgba(241,229,47,0.4), 0 12px 32px -8px rgba(241,229,47,0.45)",
                touchAction: "manipulation",
              }}
            >
              {hero.primaryCta}
            </a>
            <a
              href="#solucoes"
              className="px-6 py-3.5 text-sm font-medium rounded-xl v1-glass hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              style={{ touchAction: "manipulation" }}
            >
              {hero.secondaryCta} →
            </a>
          </motion.div>
        </div>

        {/* Right: dashboard mock */}
        <DashboardMock />
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
      className="relative perspective-[1500px] mt-4 lg:mt-0"
    >
      <div
        className="rounded-2xl p-5 v1-glass relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <span className="v1-mono text-[10px] tracking-wide opacity-40 ml-2">
              app.pagah.com/dashboard
            </span>
          </div>
          <span
            className="px-2 py-0.5 v1-mono text-[10px] tracking-wider rounded-md"
            style={{ background: "var(--accent)", color: "#0A0A0A" }}
          >
            ao vivo
          </span>
        </div>

        {/* Hero KPI */}
        <div
          className="rounded-xl p-5 mb-3 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(241,229,47,0.18) 0%, rgba(241,229,47,0.04) 100%)",
            border: "1px solid rgba(241,229,47,0.2)",
          }}
        >
          <div className="text-[11px] uppercase tracking-[0.15em] opacity-60 mb-2">
            Potencial de faturamento
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-5xl font-bold tracking-[-0.03em] tabular"
              style={{ color: "var(--accent)" }}
            >
              +40%
            </span>
            <span className="text-xs opacity-50">vs. último mês</span>
          </div>
          <MockChart />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          <KpiCard label="Upsell" value="R$ 646k" trend="+38%" />
          <KpiCard label="Pedidos recuperados" value="188" trend="+27%" />
          <KpiCard label="Aprovação cartão" value="87,3%" trend="+12 pp" />
          <KpiCard label="Pix recuperado" value="R$ 92k" trend="+44%" />
        </div>
      </div>

      {/* Floating tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-4 -left-4 lg:-left-6 px-3 py-2 rounded-lg v1-glass v1-mono text-[11px] tracking-wider"
        style={{ background: "rgba(10,10,10,0.8)" }}
      >
        <span style={{ color: "var(--accent)" }}>●</span> 188 pedidos recuperados hoje
      </motion.div>
    </motion.div>
  );
}

function KpiCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div
      className="group/kpi rounded-lg p-3.5 transition-[background,border-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[oklch(1_0.014_95/0.045)] hover:border-[oklch(1_0.014_95/0.10)] hover:-translate-y-px motion-reduce:hover:translate-y-0"
      style={{
        background: "oklch(1 0.012 95 / 0.022)",
        border: "1px solid oklch(1 0.012 95 / 0.05)",
        boxShadow:
          "inset 0 1px 0 oklch(1 0.012 95 / 0.04), inset 0 -1px 0 oklch(0 0 0 / 0.2)",
      }}
    >
      <div className="text-[10px] uppercase tracking-[0.12em] opacity-50 mb-1">
        {label}
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xl font-semibold tracking-tight tabular-nums">
          {value}
        </span>
        <span
          className="v1-mono text-[10px] tabular-nums"
          style={{ color: "var(--accent)" }}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

function MockChart() {
  const points = [22, 28, 25, 35, 32, 42, 48, 45, 52, 58, 62, 70];
  const max = 80;
  return (
    <svg
      viewBox="0 0 220 56"
      className="mt-3 w-full h-12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="v1-chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F1E52F" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F1E52F" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`M0 ${56 - (points[0] / max) * 56} ${points
          .map((p, i) => `L ${(i / (points.length - 1)) * 220} ${56 - (p / max) * 56}`)
          .join(" ")} L 220 56 L 0 56 Z`}
        fill="url(#v1-chart-fill)"
      />
      <path
        d={`M0 ${56 - (points[0] / max) * 56} ${points
          .map((p, i) => `L ${(i / (points.length - 1)) * 220} ${56 - (p / max) * 56}`)
          .join(" ")}`}
        stroke="#F1E52F"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
