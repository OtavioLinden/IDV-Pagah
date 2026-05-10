"use client";

import { memo } from "react";
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
      {/* Live call hero tile */}
      <div className="col-span-6 v3-tile p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="v3-status-dot" aria-hidden="true" />
            <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              chamada ativa · 02:14
            </span>
          </div>
          <span
            className="v3-mono text-[10px] px-2 py-0.5 rounded"
            style={{
              background: "rgba(241,229,47,0.12)",
              color: "var(--accent)",
            }}
          >
            upsell
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="size-12 rounded-full grid place-items-center text-[14px] font-semibold"
            style={{
              background: "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
              color: "#0F0F10",
            }}
          >
            MR
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-medium">Maria · Pagah CC</div>
            <div className="text-[11px] v3-mono text-[var(--text-tertiary)] tracking-wider">
              cliente: 41 9 ••• 27
            </div>
          </div>
          <Waveform />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            ["Ticket", "+ R$ 89"],
            ["Conversao", "62%"],
            ["NPS", "9.4"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="v3-tile-elevated px-3 py-2.5"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              <div className="v3-mono text-[9px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
                {k}
              </div>
              <div className="mt-1 text-[15px] font-semibold v3-num">{v}</div>
            </div>
          ))}
        </div>
      </div>

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
