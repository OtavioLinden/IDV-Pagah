"use client";

import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { moduleX1 } from "@/content/landing";

const TYPING_PHRASES = [
  "Oi! Posso enviar o link agora?",
  "Inclui o kit promocional?",
  "Pode ser parcelado em 3x?",
  "Recebi! Tô finalizando.",
];

export default function V3ModuleX1() {
  return (
    <section
      id="x1"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8 items-stretch">
          {/* LEFT: copy + cards */}
          <div className="grid grid-rows-[auto_auto_1fr] gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="v3-tile px-4 py-3 inline-flex items-center gap-2.5 self-start"
            >
              <span className="v3-status-dot" aria-hidden="true" />
              <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                Modulo X1 · WhatsApp
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
              className="v3-tile p-7 md:p-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.02] mb-3">
                {moduleX1.title.split("X1").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <span key={i}>
                      <span style={{ color: "var(--accent)" }}>X1</span>
                      {part}
                    </span>
                  ),
                )}
              </h2>
              <p className="text-[14px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed">
                {moduleX1.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {moduleX1.cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 100, damping: 20 },
                    },
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="v3-tile p-5 flex flex-col gap-2"
                >
                  <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15px] font-semibold tracking-[-0.015em]">
                    {c.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-[var(--text-secondary)]">
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#cta-final"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="self-start px-5 py-3 text-[14px] font-semibold rounded-xl mt-2"
              style={{
                background: "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
                color: "#0F0F10",
                boxShadow: "0 12px 32px -10px rgba(241,229,47,0.55)",
              }}
            >
              {moduleX1.cta} →
            </motion.a>
          </div>

          {/* RIGHT: chat bento */}
          <ChatBento />
        </div>
      </div>
    </section>
  );
}

const ChatBento = memo(function ChatBento() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="grid grid-cols-6 gap-3 auto-rows-[minmax(70px,auto)]"
    >
      {/* Chat tile */}
      <div className="col-span-6 v3-tile p-5 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className="size-9 rounded-full grid place-items-center text-[12px] font-semibold"
              style={{
                background: "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
                color: "#0F0F10",
              }}
            >
              CL
            </div>
            <div>
              <div className="text-[13px] font-medium">Cliente · X1</div>
              <div className="v3-mono text-[10px] text-[var(--text-tertiary)] tracking-wider">
                online · digitando
              </div>
            </div>
          </div>
          <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
            ao vivo
          </span>
        </div>

        <div className="grid gap-2 min-h-[140px]">
          <ChatBubble side="them" text="Quero o kit completo." delay={0.2} />
          <ChatBubble
            side="me"
            text="Aqui está o link com 3 produtos no mesmo checkout"
            delay={0.7}
          />
          <Typewriter />
        </div>
      </div>

      {/* link card */}
      <motion.div
        className="col-span-3 v3-tile p-4"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
          Link enviado
        </div>
        <div className="mt-2 text-[15px] font-medium tracking-[-0.01em]">
          pagah.link/k7m9
        </div>
        <div className="mt-2 flex items-center gap-2 text-[11px] v3-mono">
          <span className="v3-status-dot scale-75" aria-hidden="true" />
          <span style={{ color: "var(--accent)" }}>aberto</span>
        </div>
      </motion.div>

      {/* products */}
      <div className="col-span-3 v3-tile p-4">
        <div className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
          Carrinho
        </div>
        <div className="mt-2 grid gap-1.5">
          {[
            ["Kit detox 60d", "R$ 189"],
            ["Whey 900g", "R$ 142"],
            ["Termogênico", "R$ 97"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-center justify-between text-[12px]"
            >
              <span className="text-[var(--text-secondary)]">{k}</span>
              <span className="v3-num font-medium">{v}</span>
            </div>
          ))}
        </div>
        <div
          className="mt-2 pt-2 flex items-center justify-between text-[13px] font-semibold border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <span>Total</span>
          <span className="v3-num" style={{ color: "var(--accent)" }}>
            R$ 428
          </span>
        </div>
      </div>
    </motion.div>
  );
});

function ChatBubble({
  side,
  text,
  delay,
}: {
  side: "me" | "them";
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-[13px] leading-snug ${
        side === "me"
          ? "self-end rounded-br-sm"
          : "self-start rounded-bl-sm"
      }`}
      style={{
        background:
          side === "me"
            ? "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)"
            : "rgba(255,255,255,0.04)",
        color: side === "me" ? "#0F0F10" : "var(--text-primary)",
      }}
    >
      {text}
    </motion.div>
  );
}

function Typewriter() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState(reduce ? TYPING_PHRASES[0] : "");

  useEffect(() => {
    if (reduce) return;
    const phrase = TYPING_PHRASES[idx % TYPING_PHRASES.length];
    if (shown.length < phrase.length) {
      const t = setTimeout(() => setShown(phrase.slice(0, shown.length + 1)), 45);
      return () => clearTimeout(t);
    }
    const wait = setTimeout(() => {
      setShown("");
      setIdx((i) => (i + 1) % TYPING_PHRASES.length);
    }, 2000);
    return () => clearTimeout(wait);
  }, [shown, idx, reduce]);

  return (
    <div
      className="self-start max-w-[80%] px-3.5 py-2 rounded-2xl rounded-bl-sm text-[13px] leading-snug"
      style={{
        background: "rgba(255,255,255,0.04)",
        color: "var(--text-secondary)",
      }}
    >
      {shown}
      <motion.span
        className="inline-block w-[1px] h-3.5 ml-0.5 align-middle"
        style={{ background: "var(--accent)" }}
        animate={reduce ? undefined : { opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
