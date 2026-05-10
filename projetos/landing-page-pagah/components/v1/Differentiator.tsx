"use client";
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
      className="relative aspect-[4/3.2] rounded-2xl v1-glass overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(241,229,47,0.06) 0%, rgba(0,0,0,0.4) 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(241,229,47,0.18) 0%, transparent 50%)",
        }}
      />

      {/* Header bar */}
      <div className="relative px-5 pt-5 flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="v1-mono text-[10px] opacity-50 ml-2">
          atendimento.pagah.com
        </span>
        <span
          className="ml-auto px-2 py-0.5 v1-mono text-[10px] tracking-wider rounded-md flex items-center gap-1.5"
          style={{
            background: "rgba(34,197,94,0.15)",
            color: "#4ade80",
          }}
        >
          <span className="size-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          7 atendentes online
        </span>
      </div>

      {/* Active call */}
      <div className="relative mx-5 mt-5 rounded-xl p-4 v1-glass" style={{ background: "rgba(0,0,0,0.4)" }}>
        <div className="flex items-center gap-3">
          <div
            className="size-10 rounded-full grid place-items-center text-sm font-semibold"
            style={{ background: "var(--accent)", color: "#0A0A0A" }}
          >
            CL
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium">Carrinho abandonado</div>
            <div className="text-xs text-[var(--text-tertiary)]">
              Cliente Lucas · R$ 287,00 · cartão 12x
            </div>
          </div>
          <span
            className="px-2.5 py-1 v1-mono text-[10px] tracking-wider rounded-md"
            style={{
              background: "rgba(241,229,47,0.15)",
              color: "var(--accent)",
            }}
          >
            ao vivo · 2:47
          </span>
        </div>
        <Waveform />
      </div>

      {/* Mini metrics */}
      <div className="relative grid grid-cols-3 gap-2 mx-5 mt-3">
        <MiniStat label="Recuperados hoje" value="32" />
        <MiniStat label="Upsell aceito" value="48%" />
        <MiniStat label="Ticket médio" value="R$ 412" />
      </div>

      {/* Quote bubble */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute bottom-4 right-5 left-5 rounded-xl px-4 py-3 v1-glass text-sm leading-relaxed"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <span className="v1-mono text-[10px] tracking-wider opacity-50 block mb-1">
          atendente · Bruna
        </span>
        <span>
          “Lucas, vi que você ia levar o kit completo. Posso te oferecer um
          combo com 30% de desconto se fechar agora?”
        </span>
      </motion.div>
    </motion.div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg p-3 bg-white/[0.03] border border-white/5">
      <div className="text-[10px] uppercase tracking-[0.12em] opacity-50">
        {label}
      </div>
      <div className="text-base font-semibold tracking-tight tabular mt-0.5">
        {value}
      </div>
    </div>
  );
}

function Waveform() {
  return (
    <div className="flex items-center gap-1 mt-3 h-6">
      {Array.from({ length: 32 }).map((_, i) => (
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
