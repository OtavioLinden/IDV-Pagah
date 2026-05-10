"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { differentiator } from "@/content/landing";

export default function V3Differentiator() {
  return (
    <section
      id="call-center"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-6 lg:gap-8 items-stretch">
          {/* LEFT: copy bento */}
          <div className="grid grid-rows-[auto_1fr_auto] gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="v3-tile px-4 py-3 flex items-center gap-2.5 self-start"
            >
              <span className="v3-status-dot" aria-hidden="true" />
              <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                Diferencial
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
              className="v3-tile p-7 md:p-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.02] mb-4">
                O atendimento não é suporte.{" "}
                <span style={{ color: "var(--accent)" }}>É lucro.</span>
              </h2>
              <p className="text-[15px] md:text-lg text-[var(--text-secondary)] leading-relaxed mb-3">
                {differentiator.subtitle}
              </p>
              <p className="text-[13px] text-[var(--text-tertiary)] leading-relaxed">
                {differentiator.text}
              </p>
            </motion.div>

            <ul className="grid sm:grid-cols-2 gap-2.5">
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
                    delay: i * 0.05,
                  }}
                  className="v3-tile px-4 py-3 flex items-center gap-3 text-[13px] text-[var(--text-secondary)]"
                >
                  <span
                    className="size-1.5 rounded-full shrink-0"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  {c}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
              className="v3-tile-amber px-5 py-4"
            >
              <p className="text-[15px] md:text-lg tracking-[-0.015em] font-semibold leading-snug">
                “{differentiator.quote}”
              </p>
            </motion.div>
          </div>

          {/* RIGHT: live call center bento */}
          <CallCenterBento />
        </div>
      </div>
    </section>
  );
}

const CallCenterBento = memo(function CallCenterBento() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="grid grid-cols-6 gap-3 auto-rows-[minmax(80px,auto)]"
    >
      {/* Photo hero tile — real call center with live overlays */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="col-span-6 v3-tile relative overflow-hidden group p-0 aspect-[4/3] sm:aspect-[16/9]"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/v3/callcenter.png"
            alt="Call center Pagah ao vivo: atendentes em operação com painéis de dados em tempo real"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
            priority={false}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,15,16,0.15) 0%, rgba(15,15,16,0.55) 60%, rgba(15,15,16,0.85) 100%)",
            }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[inherit]"
            initial={{ boxShadow: "inset 0 0 0 1px rgba(241,229,47,0)" }}
            whileHover={{
              boxShadow: "inset 0 0 0 1px rgba(241,229,47,0.55)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Top-left status pill */}
        <div className="absolute top-4 left-4 flex items-center gap-2.5 px-3 py-1.5 rounded-full backdrop-blur-md"
          style={{ background: "rgba(15,15,16,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="v3-status-dot" aria-hidden="true" />
          <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-white">
            ao vivo · agora
          </span>
        </div>

        {/* Top-right upsell badge */}
        <span
          className="absolute top-4 right-4 v3-mono text-[10px] px-2 py-0.5 rounded backdrop-blur-md"
          style={{
            background: "rgba(241,229,47,0.18)",
            color: "var(--accent)",
            border: "1px solid rgba(241,229,47,0.35)",
          }}
        >
          upsell
        </span>

        {/* Floating KPI — bottom-left */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 left-4 px-3.5 py-2.5 rounded-xl backdrop-blur-md"
          style={{
            background: "rgba(15,15,16,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="v3-mono text-[9px] tracking-[0.18em] uppercase text-white/60">
            operação ao vivo
          </div>
          <div className="mt-0.5 text-[13px] font-semibold text-white">
            32 atendentes · 47 calls/min
          </div>
        </motion.div>

        {/* Floating waveform — bottom-right */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md"
          style={{
            background: "rgba(15,15,16,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Waveform />
          <span className="v3-mono text-[10px] tracking-[0.16em] uppercase text-white/70">
            02:14
          </span>
        </motion.div>
      </motion.div>

      {/* Recovered tile */}
      <motion.div
        className="col-span-3 v3-tile p-5"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
          Pedidos recuperados · hoje
        </div>
        <div className="mt-2 text-[34px] font-bold tracking-[-0.04em] v3-num">
          188
        </div>
        <div className="mt-1 text-[11px] v3-mono" style={{ color: "var(--accent)" }}>
          ↑ 12 nos últimos 60min
        </div>
      </motion.div>

      {/* Tickets pulsing */}
      <div className="col-span-3 v3-tile p-5 relative overflow-hidden">
        <div className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
          Fila · upsell
        </div>
        <div className="mt-3 grid gap-2">
          {[
            ["Carrinho · R$ 247", "fast"],
            ["Estorno · R$ 612", "med"],
            ["Pix esquecido · R$ 189", "slow"],
          ].map(([label, speed], i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg"
              style={{ background: "rgba(255,255,255,0.025)" }}
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: speed === "fast" ? 1.6 : speed === "med" ? 2.4 : 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <span className="text-[12px] text-[var(--text-secondary)]">
                {label}
              </span>
              <span
                className="size-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

function Waveform() {
  const bars = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex items-center gap-1 h-8" aria-hidden="true">
      {bars.map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full"
          style={{ background: "var(--accent)" }}
          animate={{
            height: ["20%", "85%", "35%", "60%", "25%"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
