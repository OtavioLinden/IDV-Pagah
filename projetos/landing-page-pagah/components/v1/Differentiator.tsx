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
            className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] mb-5"
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
                className="flex items-center gap-3 text-sm rounded-lg px-3.5 py-3 v1-glass"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                {c}
              </motion.li>
            ))}
          </ul>

          <p
            className="mt-10 text-xl md:text-2xl tracking-[-0.02em] font-medium leading-tight max-w-md"
            style={{ color: "var(--accent)" }}
          >
            “{differentiator.quote}”
          </p>
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

function Waveform() {
  return (
    <div className="flex items-center gap-1 h-5">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="flex-1 rounded-full"
          style={{
            background: "var(--accent)",
            height: `${20 + Math.sin(i * 0.6) * 30 + Math.random() * 30}%`,
            opacity: 0.4 + Math.random() * 0.6,
            animation: `v1-wave 1.${i % 6}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style>{`@keyframes v1-wave { to { transform: scaleY(0.3); } }`}</style>
    </div>
  );
}
