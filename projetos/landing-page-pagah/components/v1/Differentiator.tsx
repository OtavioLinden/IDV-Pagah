"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { differentiator } from "@/content/landing";

export default function V1Differentiator() {
  return (
    <section
      id="call-center"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(241,229,47,0.025) 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div>
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-5 block">
            Diferencial nº 01
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] mb-5 text-balance"
          >
            O atendimento não é suporte.{" "}
            <span style={{ color: "var(--accent)" }}>É lucro.</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
            {differentiator.subtitle}
          </p>
          <p className="text-sm text-[var(--text-tertiary)] leading-relaxed mb-8 max-w-xl">
            {differentiator.text}
          </p>

          <ul className="grid sm:grid-cols-2 gap-3">
            {differentiator.cards.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.04,
                }}
                className="flex items-center gap-3 text-sm rounded-lg px-3.5 py-3 v1-glass v1-glass-hover"
              >
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                {c}
              </motion.li>
            ))}
          </ul>

          <figure className="mt-12 max-w-md">
            <span
              aria-hidden="true"
              className="v1-mono text-[10px] tracking-[0.22em] uppercase block mb-2 opacity-60"
              style={{ color: "var(--accent)" }}
            >
              ◇ Em uma frase
            </span>
            <blockquote
              className="text-xl md:text-2xl tracking-[-0.02em] font-medium leading-tight"
              style={{ color: "var(--accent)" }}
            >
              {differentiator.quote}
            </blockquote>
          </figure>
        </div>

        {/* Right: call center mock visual */}
        <CallCenterVisual />
      </div>
    </section>
  );
}

function CallCenterVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="relative aspect-[4/3] rounded-2xl v1-glass overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(241,229,47,0.06) 0%, rgba(0,0,0,0.4) 100%)",
      }}
    >
      {/* Real photo */}
      <Image
        src="/images/v1/callcenter.png"
        alt="Equipe de call center Pagah em atendimento"
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />

      {/* Subtle accent glow on top */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(241,229,47,0.18) 0%, transparent 55%)",
        }}
      />

      {/* Bottom dark gradient for legibility of overlays */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 35%, transparent 100%)",
        }}
      />

      {/* Top-right "ao vivo" badge */}
      <div className="absolute top-5 right-5 flex items-center gap-2">
        <span
          className="px-2.5 py-1 v1-mono text-[10px] tracking-wider rounded-md flex items-center gap-1.5 backdrop-blur-md"
          style={{
            background: "rgba(34,197,94,0.18)",
            color: "#4ade80",
            border: "1px solid rgba(74,222,128,0.25)",
          }}
        >
          <span className="size-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          ao vivo
        </span>
      </div>

      {/* Bottom status row: live label + waveform */}
      <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
        <span
          className="v1-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-md backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.55)",
            color: "var(--accent)",
            border: "1px solid rgba(241,229,47,0.2)",
          }}
        >
          Atendimento ao vivo · 7 atendentes
        </span>
        <div className="flex-1">
          <Waveform />
        </div>
      </div>

      {/* Floating quote bubble */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute top-16 left-5 max-w-[78%] rounded-xl px-4 py-3 v1-glass text-sm leading-relaxed backdrop-blur-md"
        style={{
          background: "rgba(10,10,10,0.7)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span className="v1-mono text-[10px] tracking-wider opacity-60 block mb-1">
          atendente · Bruna
        </span>
        <span className="text-white/90">
          “Lucas, vi que você ia levar o kit completo. Posso te oferecer um
          combo com 30% de desconto se fechar agora?”
        </span>
      </motion.div>
    </motion.div>
  );
}

// Deterministic seeds avoid SSR hydration mismatch (no Math.random in render)
const WAVEFORM_HEIGHTS = [
  62, 38, 74, 45, 86, 52, 30, 68, 41, 79, 55, 33, 71, 48, 82, 36, 65, 44, 76, 51,
  29, 69, 42, 84,
];
const WAVEFORM_OPACITIES = [
  0.85, 0.55, 0.92, 0.61, 0.78, 0.47, 0.88, 0.52, 0.95, 0.58, 0.72, 0.5, 0.83,
  0.65, 0.9, 0.45, 0.74, 0.6, 0.81, 0.49, 0.87, 0.56, 0.93, 0.63,
];

function Waveform() {
  return (
    <div className="flex items-center gap-1 h-5" aria-hidden="true">
      {WAVEFORM_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-full"
          style={{
            background: "var(--accent)",
            height: `${h}%`,
            opacity: WAVEFORM_OPACITIES[i],
            animation: `v1-wave 1.${i % 6}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes v1-wave { to { transform: scaleY(0.3); } }
        @media (prefers-reduced-motion: reduce) {
          [class*="v1-wave"], .flex.items-center.gap-1.h-5 > span { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
