"use client";
import { motion } from "motion/react";
import { differentiator } from "@/content/landing";

export default function V4Differentiator() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
        <div>
          <span
            className="v4-mono uppercase mb-5 inline-block"
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            Atendimento como motor de receita
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] mb-5"
          >
            {differentiator.title}
          </motion.h2>
          <p
            className="text-[18px] leading-relaxed mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            {differentiator.subtitle}
          </p>
          <p
            className="text-[15px] leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {differentiator.text}
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {differentiator.cards.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 text-[14px]"
                style={{ color: "var(--text-primary)" }}
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
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <blockquote
            className="border-l-2 pl-5 py-1 text-[18px] font-medium leading-relaxed"
            style={{
              borderColor: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            “{differentiator.quote}”
          </blockquote>
        </div>

        {/* Right: dark Pagah-style call center dashboard */}
        <CallCenterPanel />
      </div>
    </section>
  );
}

function CallCenterPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="v4-card-dark"
      style={{ padding: "28px" }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span
            className="size-2 rounded-full v4-pulse-dot"
            style={{ background: "#16A34A" }}
            aria-hidden="true"
          />
          <span
            className="v4-mono uppercase tracking-[0.14em]"
            style={{
              fontSize: "11px",
              color: "var(--text-on-dark-secondary)",
            }}
          >
            Painel de atendimento
          </span>
        </div>
        <span
          className="v4-mono v4-tabular"
          style={{
            fontSize: "11px",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          14:38
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <DarkKpi label="Em fila" value="12" trend="" />
        <DarkKpi label="Em atendimento" value="38" trend="" />
        <DarkKpi
          label="Recuperados hoje"
          value="188"
          trend="+27%"
          highlight
        />
        <DarkKpi label="Upsell hoje" value="R$ 84,2k" trend="+38%" />
      </div>

      <div
        className="rounded-xl p-4"
        style={{
          background: "var(--bg-card-dark-elevated)",
          border: "1px solid var(--border-on-dark)",
        }}
      >
        <div
          className="v4-mono uppercase mb-3"
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          Atendimentos recentes
        </div>
        <ul className="space-y-2.5">
          {[
            { name: "Mariana S.", action: "Carrinho recuperado", val: "R$ 247" },
            { name: "Eduardo P.", action: "Upsell concluído", val: "R$ 189" },
            { name: "Talita R.", action: "Cartão aprovado", val: "R$ 312" },
          ].map((r, i) => (
            <motion.li
              key={r.name}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2 + i * 0.08,
              }}
              className="flex items-center justify-between text-[13px]"
              style={{ color: "var(--text-on-dark)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="size-7 rounded-full grid place-items-center v4-mono font-bold"
                  style={{
                    background: "rgba(241,229,47,0.18)",
                    color: "var(--accent)",
                    fontSize: "11px",
                  }}
                  aria-hidden="true"
                >
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text-on-dark-secondary)",
                    }}
                  >
                    {r.action}
                  </div>
                </div>
              </div>
              <span
                className="v4-mono v4-tabular font-bold"
                style={{ fontSize: "13px", color: "var(--accent)" }}
              >
                {r.val}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function DarkKpi({
  label,
  value,
  trend,
  highlight = false,
}: {
  label: string;
  value: string;
  trend?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: highlight
          ? "rgba(241,229,47,0.1)"
          : "var(--bg-card-dark-elevated)",
        border: highlight
          ? "1px solid rgba(241,229,47,0.25)"
          : "1px solid var(--border-on-dark)",
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
        {label}
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span
          className="v4-tabular font-bold"
          style={{
            fontSize: "22px",
            color: highlight ? "var(--accent)" : "var(--text-on-dark)",
            letterSpacing: "-0.01em",
          }}
        >
          {value}
        </span>
        {trend && (
          <span
            className="v4-mono v4-tabular"
            style={{ fontSize: "11px", color: "#22C55E" }}
          >
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
