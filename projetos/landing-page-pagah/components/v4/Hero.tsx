"use client";
import { motion } from "motion/react";
import { hero } from "@/content/landing";
import CounterRoll from "@/components/v4/CounterRoll";

export default function V4Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              fontSize: "12px",
            }}
          >
            <span
              className="size-1.5 rounded-full v4-pulse-dot"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <span
              className="v4-mono uppercase tracking-[0.14em]"
              style={{ color: "var(--text-secondary)" }}
            >
              Checkout · Call Center · Juros do Parcelamento
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[40px] md:text-[52px] lg:text-[56px] leading-[1.04] tracking-[-0.028em] font-bold mb-6"
            style={{ fontFeatureSettings: '"ss01", "ss02"' }}
          >
            Pare de perder vendas, carrinhos e{" "}
            <span className="v4-underline-accent">
              juros do parcelamento
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] md:text-[18px] leading-relaxed max-w-xl mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {hero.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14px] leading-relaxed max-w-xl mb-8"
            style={{ color: "var(--text-tertiary)" }}
          >
            {hero.support}
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.22 },
              },
            }}
            className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-xl"
          >
            {hero.bullets.map((b, i) => (
              <motion.li
                key={b}
                variants={{
                  hidden: { opacity: 0, y: 4 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="flex items-start gap-3 text-[14px]"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="v4-mono v4-tabular shrink-0 pt-[2px]"
                  style={{
                    fontSize: "11px",
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.05em",
                  }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <span>{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#cta-final"
              aria-label={`${hero.primaryCta}: ir para o formulário de contato`}
              className="px-6 py-3.5 text-[15px] font-bold rounded-lg"
              style={{
                background: "var(--accent)",
                color: "var(--text-primary)",
                transition:
                  "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "var(--shadow-accent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "var(--shadow-accent-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-accent)";
              }}
            >
              {hero.primaryCta}
            </a>
            <a
              href="#solucoes"
              className="px-6 py-3.5 text-[15px] font-medium rounded-lg"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-subtle)",
                transition: "border-color 220ms ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border-subtle)")
              }
            >
              {hero.secondaryCta} →
            </a>
          </motion.div>
        </div>

        {/* Right: heritage dashboard */}
        <HeroDashboard />
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Main dark KPI card (Pagah real-style hero metric) */}
      <div className="v4-card-dark relative overflow-hidden">
        {/* Editorial slug line — newsroom-style header */}
        <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: "1px solid var(--border-on-dark)" }}>
          <div className="flex items-center gap-2">
            <span
              className="size-1.5 rounded-full v4-pulse-dot"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <span
              className="v4-mono uppercase tracking-[0.18em]"
              style={{
                color: "var(--text-on-dark-secondary)",
                fontSize: "10px",
              }}
            >
              Painel · ao vivo
            </span>
          </div>
          <span
            className="v4-mono v4-tabular"
            style={{
              fontSize: "10px",
              color: "var(--text-on-dark-secondary)",
              letterSpacing: "0.05em",
            }}
          >
            10 MAI 2026 · 14:42
          </span>
        </div>

        <div
          className="v4-mono uppercase mb-3"
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          Potencial de faturamento adicional
        </div>
        <div className="flex items-baseline gap-3 mb-1">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="v4-tabular"
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--accent)",
            }}
          >
            <CounterRoll value="+40%" duration={1200} delay={500} />
          </motion.span>
          <span
            className="v4-mono"
            style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: "var(--text-on-dark-secondary)",
              textTransform: "uppercase",
            }}
          >
            ↗ vs. mês anterior
          </span>
        </div>
        <div
          className="mb-6 v4-tabular"
          style={{
            fontSize: "11px",
            color: "var(--text-on-dark-secondary)",
            letterSpacing: "0.02em",
          }}
        >
          Faixa de operações que adotam os três módulos · n = 47
        </div>

        <MockChart />
      </div>

      {/* 4 small light cards beneath */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        <MiniKpi label="Upsell" value="R$ 646 mil" trend="+38%" delay={0.5} />
        <MiniKpi
          label="Pedidos recuperados"
          value="188"
          trend="+27%"
          delay={0.54}
        />
        <MiniKpi
          label="Aprovação cartão"
          value="87,3%"
          trend="+12 pp"
          delay={0.58}
          accent
        />
        <MiniKpi
          label="Pix recuperado"
          value="R$ 92k"
          trend="+44%"
          delay={0.62}
        />
      </div>

      {/* Floating tag — editorial bylline */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-3 -left-3 px-3 py-2 flex items-center gap-2"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          borderRadius: "6px",
          boxShadow: "var(--shadow-card-hover)",
          fontSize: "11px",
        }}
      >
        <span
          className="size-1.5 rounded-full v4-pulse-dot"
          style={{ background: "var(--success)" }}
          aria-hidden="true"
        />
        <span
          className="v4-mono uppercase v4-tabular"
          style={{
            color: "var(--text-tertiary)",
            letterSpacing: "0.16em",
            fontSize: "9px",
            paddingRight: "4px",
            marginRight: "2px",
            borderRight: "1px solid var(--border-card)",
            paddingTop: "1px",
            paddingBottom: "1px",
          }}
        >
          10·MAI
        </span>
        <span
          style={{
            color: "var(--text-primary)",
            fontWeight: 500,
          }}
        >
          188 pedidos recuperados
        </span>
      </motion.div>
    </motion.div>
  );
}

function MiniKpi({
  label,
  value,
  trend,
  delay,
  accent = false,
}: {
  label: string;
  value: string;
  trend: string;
  delay: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="p-4"
      style={{
        background: "var(--bg-card)",
        borderTop: accent
          ? "2px solid var(--accent)"
          : "1px solid var(--border-card)",
        borderRight: "1px solid var(--border-card)",
        borderBottom: "1px solid var(--border-card)",
        borderLeft: "1px solid var(--border-card)",
        borderRadius: "10px",
      }}
    >
      <div
        className="v4-mono uppercase mb-2"
        style={{
          fontSize: "9px",
          letterSpacing: "0.18em",
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span
          className="v4-tabular"
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          <CounterRoll value={value} duration={900} delay={delay * 1000} />
        </span>
        <span
          className="v4-mono v4-tabular"
          style={{
            fontSize: "10px",
            color: "var(--success)",
            letterSpacing: "0.04em",
          }}
        >
          {trend}
        </span>
      </div>
    </motion.div>
  );
}

function MockChart() {
  const points = [22, 28, 25, 35, 32, 42, 48, 45, 52, 58, 62, 70];
  const months = ["MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ", "JAN", "FEV", "MAR", "ABR"];
  const max = 80;
  const W = 220;
  const H = 70;
  const top = 4;
  const bottom = H - 14;
  const range = bottom - top;
  const yFor = (p: number) => bottom - (p / max) * range;
  const xFor = (i: number) => (i / (points.length - 1)) * W;
  const linePath = `M${xFor(0)} ${yFor(points[0])} ${points
    .map((p, i) => `L ${xFor(i)} ${yFor(p)}`)
    .join(" ")}`;
  const fillPath = `${linePath} L ${W} ${bottom} L 0 ${bottom} Z`;
  // Y-axis ticks at 0, 40, 80 (matching max=80 scale)
  const yTicks = [0, 40, 80];
  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-20"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="v4-hero-chart" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F1E52F" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#F1E52F" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* horizontal gridlines */}
        {yTicks.map((t) => (
          <line
            key={t}
            x1="0"
            x2={W}
            y1={yFor(t)}
            y2={yFor(t)}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />
        ))}
        <motion.path
          d={fillPath}
          fill="url(#v4-hero-chart)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d={linePath}
          stroke="#F1E52F"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* last point marker */}
        <motion.circle
          cx={xFor(points.length - 1)}
          cy={yFor(points[points.length - 1])}
          r="2.5"
          fill="#F1E52F"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      {/* x-axis months */}
      <div
        className="v4-mono v4-tabular flex justify-between mt-1 px-[2px]"
        style={{
          fontSize: "9px",
          letterSpacing: "0.06em",
          color: "var(--text-on-dark-secondary)",
        }}
      >
        <span>{months[0]}</span>
        <span>{months[3]}</span>
        <span>{months[6]}</span>
        <span>{months[9]}</span>
        <span>{months[11]}</span>
      </div>
    </div>
  );
}
