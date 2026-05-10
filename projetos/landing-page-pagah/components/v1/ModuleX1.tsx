"use client";
import { motion } from "motion/react";
import { moduleX1 } from "@/content/landing";

export default function V1ModuleX1() {
  return (
    <section
      id="x1"
      className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-5 block">
            Módulo X1 · WhatsApp
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] mb-5 text-balance"
          >
            Vende pelo WhatsApp?{" "}
            <span style={{ color: "var(--accent)" }}>
              A Pagah foi feita pro X1.
            </span>
          </motion.h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-lg">
            {moduleX1.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {moduleX1.cards.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.06,
                }}
                className="rounded-xl p-5 v1-glass"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="v1-mono text-[10px] tracking-[0.2em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  0{i + 1}
                </div>
                <h3 className="text-base font-semibold tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                  {c.text}
                </p>
              </motion.article>
            ))}
          </div>

          <a
            href="#cta-final"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-xl v1-glass hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            style={{ touchAction: "manipulation" }}
          >
            {moduleX1.cta} →
          </a>
        </div>

        <X1Mockup />
      </div>
    </section>
  );
}

function X1Mockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="relative"
    >
      <div
        className="rounded-3xl p-3 v1-glass mx-auto max-w-[360px]"
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <div className="rounded-2xl bg-[#0F0F10] overflow-hidden border border-white/5">
          {/* Phone notch */}
          <div className="h-6 flex items-center justify-center">
            <span className="w-20 h-1.5 rounded-full bg-white/10" />
          </div>

          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3 border-b border-white/5">
            <div
              className="size-8 rounded-full grid place-items-center text-xs font-semibold"
              style={{ background: "var(--accent)", color: "#0A0A0A" }}
            >
              JM
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">Joana M.</div>
              <div className="text-[10px] text-[var(--text-tertiary)]">
                cliente desde 2024 · 4 pedidos
              </div>
            </div>
            <span
              className="px-2 py-0.5 v1-mono text-[9px] tracking-wider rounded-md"
              style={{
                background: "rgba(241,229,47,0.15)",
                color: "var(--accent)",
              }}
            >
              X1
            </span>
          </div>

          {/* Cart preview */}
          <div className="p-4 space-y-2.5">
            <div className="text-[10px] uppercase tracking-[0.15em] opacity-50">
              Carrinho personalizado
            </div>

            <CartItem name="Vitamina D · 60 cps" qty="2x" price="R$ 89,80" />
            <CartItem name="Ômega 3 · 120 cps" qty="1x" price="R$ 67,90" />
            <CartItem
              name="Kit imunidade (combo)"
              qty="1x"
              price="R$ 124,00"
              highlighted
            />

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-[var(--text-tertiary)]">
                Total · cartão 12x
              </span>
              <span
                className="text-base font-semibold tabular-nums"
                style={{ color: "var(--accent)" }}
              >
                R$ 281,70
              </span>
            </div>

            <button
              type="button"
              aria-label="Enviar link de pagamento (mockup)"
              className="w-full py-3 rounded-xl text-sm font-semibold mt-3 transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F10]"
              style={{ background: "var(--accent)", color: "#0A0A0A", touchAction: "manipulation" }}
            >
              Enviar link de pagamento
            </button>

            <div className="text-[10px] text-center opacity-40 v1-mono pt-1">
              pagah.checkout/joana-m-x1
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CartItem({
  name,
  qty,
  price,
  highlighted,
}: {
  name: string;
  qty: string;
  price: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5"
      style={{
        background: highlighted
          ? "rgba(241,229,47,0.08)"
          : "rgba(255,255,255,0.02)",
        border: highlighted
          ? "1px solid rgba(241,229,47,0.2)"
          : "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="size-7 rounded-md bg-white/5 grid place-items-center text-[10px] opacity-60">
          {qty}
        </span>
        <span className="text-xs truncate">{name}</span>
      </div>
      <span className="text-xs tabular-nums shrink-0">{price}</span>
    </div>
  );
}
