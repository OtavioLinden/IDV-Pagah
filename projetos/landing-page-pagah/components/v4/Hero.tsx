"use client";
import { motion } from "motion/react";
import { hero } from "@/content/landing";

export default function V4Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.05,
            }}
            className="text-[40px] md:text-[52px] lg:text-[56px] leading-[1.05] tracking-[-0.025em] font-bold mb-6"
          >
            Pare de perder vendas, carrinhos e{" "}
            <span style={{ background: "var(--accent)", padding: "0 6px" }}>
              juros do parcelamento
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
            className="text-[17px] md:text-[18px] leading-relaxed max-w-xl mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {hero.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.15,
            }}
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
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
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
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    },
                  },
                }}
                className="flex items-start gap-2.5 text-[14px]"
                style={{ color: "var(--text-secondary)" }}
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
                <span>{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#cta-final"
              aria-label={`${hero.primaryCta} — ir para o formulário de contato`}
              className="px-6 py-3.5 text-[15px] font-bold rounded-lg"
              style={{
                background: "var(--accent)",
                color: "var(--text-primary)",
                transition:
                  "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "0 4px 14px -4px rgba(241,229,47,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 22px -4px rgba(241,229,47,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 14px -4px rgba(241,229,47,0.5)";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
      className="relative"
    >
      {/* Main dark KPI card (Pagah real-style hero metric) */}
      <div className="v4-card-dark relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span
              className="size-1.5 rounded-full v4-pulse-dot"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <span
              className="v4-mono uppercase tracking-[0.14em]"
              style={{
                color: "var(--text-on-dark-secondary)",
                fontSize: "11px",
              }}
            >
              Painel ao vivo
            </span>
          </div>
          <span
            className="v4-mono"
            style={{
              fontSize: "11px",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            app.pagah.com
          </span>
        </div>

        <div
          className="v4-mono uppercase mb-3"
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          Potencial de faturamento
        </div>
        <div className="flex items-baseline gap-3 mb-6">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.6,
            }}
            className="v4-tabular"
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--accent)",
            }}
          >
            +40%
          </motion.span>
          <span
            className="text-[12px]"
            style={{ color: "var(--text-on-dark-secondary)" }}
          >
            vs. último mês
          </span>
        </div>

        <MockChart />
      </div>

      {/* 4 small light cards beneath */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        <MiniKpi label="Upsell" value="R$ 646 mil" trend="+38%" delay={0.7} />
        <MiniKpi
          label="Pedidos recuperados"
          value="188"
          trend="+27%"
          delay={0.78}
        />
        <MiniKpi
          label="Aprovação cartão"
          value="87,3%"
          trend="+12 pp"
          delay={0.86}
          accent
        />
        <MiniKpi
          label="Pix recuperado"
          value="R$ 92k"
          trend="+44%"
          delay={0.94}
        />
      </div>

      {/* Floating tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        className="absolute -bottom-3 -left-3 px-3 py-2 rounded-lg flex items-center gap-2"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          boxShadow: "var(--shadow-card-hover)",
          fontSize: "12px",
        }}
      >
        <span
          className="size-2 rounded-full v4-pulse-dot"
          style={{ background: "#16A34A" }}
          aria-hidden="true"
        />
        <span style={{ color: "var(--text-primary)" }}>
          188 pedidos recuperados hoje
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      className="rounded-xl p-4"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        className="v4-mono uppercase mb-2"
        style={{
          fontSize: "10px",
          letterSpacing: "0.14em",
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span
          className="v4-tabular font-bold"
          style={{
            fontSize: "20px",
            color: accent ? "var(--text-primary)" : "var(--text-primary)",
            background: accent ? "var(--accent)" : "transparent",
            padding: accent ? "0 6px" : "0",
            borderRadius: accent ? "4px" : "0",
            letterSpacing: "-0.01em",
          }}
        >
          {value}
        </span>
        <span
          className="v4-mono v4-tabular"
          style={{ fontSize: "11px", color: "var(--success)" }}
        >
          {trend}
        </span>
      </div>
    </motion.div>
  );
}

function MockChart() {
  const points = [22, 28, 25, 35, 32, 42, 48, 45, 52, 58, 62, 70];
  const max = 80;
  return (
    <svg
      viewBox="0 0 220 60"
      className="w-full h-14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="v4-hero-chart" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F1E52F" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#F1E52F" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`M0 ${60 - (points[0] / max) * 60} ${points
          .map(
            (p, i) =>
              `L ${(i / (points.length - 1)) * 220} ${60 - (p / max) * 60}`,
          )
          .join(" ")} L 220 60 L 0 60 Z`}
        fill="url(#v4-hero-chart)"
      />
      <path
        d={`M0 ${60 - (points[0] / max) * 60} ${points
          .map(
            (p, i) =>
              `L ${(i / (points.length - 1)) * 220} ${60 - (p / max) * 60}`,
          )
          .join(" ")}`}
        stroke="#F1E52F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
