"use client";
import { motion } from "motion/react";
import { hero } from "@/content/landing";

export default function V2Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Editorial topline */}
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14 v2-rule pt-6">
          <div>
            <span className="v2-kicker text-[var(--text-tertiary)] block mb-2">
              Edição 01 / Pagah · 2026
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              Checkout · Call Center · Juros do Parcelamento
            </span>
          </div>
          <span className="v2-kicker text-[var(--text-tertiary)] hidden md:block">
            Para produtores de produto físico
          </span>
        </div>

        {/* Asymmetric headline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Editorial mask reveal — three lines rise on staggered delays.
           * Each .v2-text-mask hides overflow; the inner span starts at 105%
           * and rises via keyframe (slow ease-out, 460ms). Choreographed,
           * not synced — feels like a magazine pagination unfurl.
           */}
          <h1
            className="v2-display col-span-12 lg:col-span-9 font-extrabold"
            style={{
              fontSize: "clamp(56px, 9vw, 140px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
            }}
          >
            <span className="v2-text-mask" style={{ "--v2-mask-delay": "60ms" } as React.CSSProperties}>
              <span>
                <span style={{ fontWeight: 300 }} className="italic">
                  Pare
                </span>{" "}
                de perder vendas,{" "}
              </span>
            </span>
            <span className="v2-text-mask" style={{ "--v2-mask-delay": "180ms" } as React.CSSProperties}>
              <span>
                carrinhos e{" "}
                <span
                  className="italic"
                  style={{
                    fontWeight: 400,
                    background: `linear-gradient(180deg, transparent 60%, var(--accent) 60%, var(--accent) 92%, transparent 92%)`,
                  }}
                >
                  juros
                </span>
                .
              </span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.32,
            }}
            className="col-span-12 lg:col-span-3 lg:pb-6"
          >
            <span className="v2-kicker text-[var(--text-tertiary)] block mb-3">
              Manifesto
            </span>
            <p className="text-base text-[var(--text-secondary)] leading-snug">
              Uma plataforma que continua{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                vendendo depois da venda
              </span>
              .
            </p>
          </motion.div>
        </div>

        {/* Lede + bullets + dashboard */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.42,
            }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="text-xl md:text-2xl text-[var(--text-primary)] leading-snug mb-4 max-w-2xl">
              {hero.subheadline}
            </p>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10">
              {hero.support}
            </p>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  // Choreographed: a beat between blocks (delayChildren),
                  // then quick stagger so bullets feel like pagination.
                  transition: { staggerChildren: 0.06, delayChildren: 0.55 },
                },
              }}
              className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-10 max-w-xl"
            >
              {hero.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  variants={{
                    hidden: { opacity: 0, y: 8, filter: "blur(3px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="flex items-start gap-3 text-sm text-[var(--text-primary)] border-t border-[var(--border-subtle)] pt-3"
                >
                  <span className="v2-num text-[var(--text-tertiary)] text-xs font-medium pt-0.5 v2-tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-wrap gap-3">
              <a href="#cta-final" className="v2-btn-primary">
                {hero.primaryCta}
                <Arrow />
              </a>
              <a href="#solucoes" className="v2-btn-secondary">
                {hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6,
            }}
            className="col-span-12 lg:col-span-5"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      <div className="v2-card-lift bg-[var(--bg-elevated)] border-2 border-[var(--text-primary)] p-6">
        <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-[var(--border-subtle)]">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Painel · ao vivo
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] v2-tabular">
            01 · 06
          </span>
        </div>

        <div className="mb-6">
          <span className="v2-kicker text-[var(--text-tertiary)] block mb-2">
            Potencial de faturamento
          </span>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span
              className="v2-num font-extrabold v2-tabular"
              style={{ fontSize: "clamp(60px, 9vw, 92px)", lineHeight: 0.9 }}
            >
              +40%
            </span>
            <span
              className="text-xs uppercase tracking-[0.2em] px-2 py-1"
              style={{
                background: "var(--accent)",
                color: "var(--text-primary)",
              }}
            >
              vs. mês anterior
            </span>
          </div>
          <MockChart />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-2 border-t border-[var(--border-subtle)] mt-2">
          {hero.dashboardCards.slice(1).map((card, i) => (
            <div key={card.label} className="flex flex-col">
              <span className="v2-kicker text-[var(--text-tertiary)] mb-1.5 v2-tabular">
                {String(i + 2).padStart(2, "0")} · {card.label}
              </span>
              <span className="v2-num font-bold text-2xl md:text-3xl v2-tabular">
                {card.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -bottom-5 -left-5 px-3 py-2 v2-kicker"
        style={{
          background: "var(--bg-contrast)",
          color: "var(--text-on-contrast)",
        }}
      >
        <span style={{ color: "var(--accent)" }}>●</span> 188 pedidos hoje
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
      className="mt-3 w-full h-14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={`M0 ${56 - (points[0] / max) * 56} ${points
          .map(
            (p, i) =>
              `L ${(i / (points.length - 1)) * 220} ${56 - (p / max) * 56}`,
          )
          .join(" ")}`}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={(i / (points.length - 1)) * 220}
          cy={56 - (p / max) * 56}
          r="2"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
