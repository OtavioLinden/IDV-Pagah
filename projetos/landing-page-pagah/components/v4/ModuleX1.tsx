"use client";
import { motion } from "motion/react";
import { moduleX1 } from "@/content/landing";

const cardIcons = [
  // user-search
  <path
    key="user"
    d="M14 14a4 4 0 100-8 4 4 0 000 8zm6 7a8 8 0 00-13 0M19 19l3 3"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  // package
  <path
    key="pkg"
    d="M21 8l-9-5-9 5 9 5 9-5zm0 0v8l-9 5m0 0v-8m0 8l-9-5V8"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  // link
  <path
    key="link"
    d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1m-4 8a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  // zap
  <path
    key="zap"
    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
];

export default function V4ModuleX1() {
  return (
    <section
      id="x1"
      className="py-16 md:py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
        <div>
          <span
            className="v4-serif mb-5 inline-block"
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              letterSpacing: "-0.005em",
            }}
          >
            § 04 — Módulo X1 · WhatsApp
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="font-bold tracking-[-0.025em] leading-[1.02] mb-5"
            style={{ fontSize: "clamp(34px, 4.8vw, 60px)" }}
          >
            {moduleX1.title}
          </motion.h2>
          <p
            className="text-[17px] leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {moduleX1.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {moduleX1.cards.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.06,
                }}
                whileHover={{ y: -2 }}
                className="v4-card"
                style={{ padding: "24px" }}
              >
                <span
                  className="grid place-items-center size-10 rounded-lg mb-4"
                  style={{
                    background: "var(--bg-base)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="size-5">
                    {cardIcons[i]}
                  </svg>
                </span>
                <h3 className="text-[15px] font-bold mb-2 tracking-tight">
                  {c.title}
                </h3>
                <p
                  className="text-[13.5px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {c.text}
                </p>
              </motion.article>
            ))}
          </div>

          <a
            href="#cta-final"
            className="inline-flex items-center px-5 py-3 text-[14px] font-bold rounded-lg"
            style={{
              background: "var(--accent)",
              color: "var(--text-primary)",
              boxShadow: "var(--shadow-accent)",
              transition:
                "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "var(--shadow-accent-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-accent)";
            }}
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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="v4-card-dark relative"
      style={{ padding: "24px" }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span
            className="size-2 rounded-full v4-pulse-dot"
            style={{ background: "#22C55E" }}
            aria-hidden="true"
          />
          <span
            className="v4-mono uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            X1 · Checkout WhatsApp
          </span>
        </div>
        <span
          className="v4-mono v4-tabular"
          style={{
            fontSize: "11px",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          #X1-2847
        </span>
      </div>

      {/* Customer */}
      <div
        className="rounded-xl p-4 mb-3"
        style={{
          background: "var(--bg-card-dark-elevated)",
          border: "1px solid var(--border-on-dark)",
        }}
      >
        <div
          className="v4-mono uppercase mb-2"
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          Cliente
        </div>
        <div className="flex items-center gap-3">
          <span
            className="size-9 rounded-full grid place-items-center font-bold"
            style={{
              background: "rgba(241,229,47,0.18)",
              color: "var(--accent)",
              fontSize: "13px",
            }}
            aria-hidden="true"
          >
            CR
          </span>
          <div className="flex-1 min-w-0">
            <div
              className="text-[14px] font-medium"
              style={{ color: "var(--text-on-dark)" }}
            >
              Carlos R.
            </div>
            <div
              className="v4-mono v4-tabular"
              style={{
                fontSize: "11px",
                color: "var(--text-on-dark-secondary)",
              }}
            >
              +55 11 9•••• 4892 · cliente recorrente
            </div>
          </div>
          <span
            className="px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(34,197,94,0.15)",
              color: "#22C55E",
              fontSize: "10px",
              fontWeight: 600,
            }}
          >
            Na base
          </span>
        </div>
      </div>

      {/* Cart items */}
      <div
        className="rounded-xl p-4 mb-3"
        style={{
          background: "var(--bg-card-dark-elevated)",
          border: "1px solid var(--border-on-dark)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            className="v4-mono uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            Kit personalizado
          </div>
          <span
            className="v4-mono"
            style={{
              fontSize: "11px",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            3 itens
          </span>
        </div>
        <ul className="space-y-2.5">
          {[
            { name: "Encapsulado XR · 60 cps", qty: "x2", val: "R$ 178" },
            { name: "Multivit Premium", qty: "x1", val: "R$ 89" },
            { name: "Frete expresso", qty: "", val: "Grátis" },
          ].map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -4 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.15 + i * 0.06,
              }}
              className="flex items-center justify-between text-[13px]"
              style={{ color: "var(--text-on-dark)" }}
            >
              <span className="flex items-center gap-2">
                <span
                  className="v4-mono"
                  style={{
                    color: "var(--text-on-dark-secondary)",
                    fontSize: "11px",
                  }}
                >
                  {item.qty}
                </span>
                {item.name}
              </span>
              <span className="v4-tabular font-medium">{item.val}</span>
            </motion.li>
          ))}
        </ul>
        <div
          className="mt-4 pt-3 flex items-baseline justify-between"
          style={{ borderTop: "1px solid var(--border-on-dark)" }}
        >
          <span
            className="v4-mono uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            Total
          </span>
          <span
            className="v4-tabular font-bold"
            style={{
              fontSize: "20px",
              color: "var(--accent)",
              letterSpacing: "-0.01em",
            }}
          >
            R$ 267,00
          </span>
        </div>
      </div>

      {/* Send link button */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.5,
        }}
        className="rounded-xl p-3 flex items-center justify-between"
        style={{
          background: "var(--accent)",
          color: "var(--text-primary)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1m-4 8a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[14px] font-bold">
            Enviar link de pagamento
          </span>
        </div>
        <span
          className="v4-mono v4-tabular"
          style={{ fontSize: "11px", opacity: 0.7 }}
        >
          ↵
        </span>
      </motion.div>
    </motion.div>
  );
}
