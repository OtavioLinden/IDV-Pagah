"use client";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { specialization } from "@/content/landing";

const nicheIcons: Record<string, ReactNode> = {
  Encapsulados: (
    <path
      d="M10.5 3.5l-7 7a4.95 4.95 0 107 7l7-7a4.95 4.95 0 10-7-7zm0 14l7-7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Suplementos: (
    <path
      d="M9 3v6m6-6v6M5 9h14v8a4 4 0 01-4 4H9a4 4 0 01-4-4V9z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Cosméticos: (
    <path
      d="M9 2v4M15 2v4M7 6h10v4a4 4 0 01-4 4h-2a4 4 0 01-4-4V6zm2 12h6v4H9z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Gotas: (
    <path
      d="M12 3l-5 8a5 5 0 1010 0l-5-8z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  "Produtos de recorrência": (
    <path
      d="M21 12a9 9 0 11-3-6.7M21 4v5h-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  "Operações com tráfego pago": (
    <path
      d="M3 17l6-6 4 4 8-8m0 0v6m0-6h-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  "Vendas por WhatsApp": (
    <path
      d="M3 21l1.5-4.5A8 8 0 1112 19a8 8 0 01-4-1L3 21z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Afiliados: (
    <path
      d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m20 0v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 11a4 4 0 100-8 4 4 0 000 8z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

export default function V4Specialization() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <span
            className="v4-mono uppercase mb-5 inline-block"
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            Especialização · Produtos físicos
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] mb-5"
          >
            {specialization.title}
          </motion.h2>
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {specialization.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {specialization.niches.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: (i % 4) * 0.05 + Math.floor(i / 4) * 0.08,
              }}
              whileHover={{ y: -2 }}
              className="v4-card text-center"
              style={{ padding: "24px 20px" }}
            >
              <span
                className="grid place-items-center size-12 rounded-xl mx-auto mb-4"
                style={{
                  background: "var(--bg-base)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-subtle)",
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="size-6">
                  {nicheIcons[n]}
                </svg>
              </span>
              <h3 className="text-[14px] font-bold tracking-tight">{n}</h3>
            </motion.div>
          ))}
        </div>

        <p
          className="text-[15px] leading-relaxed max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {specialization.text}
        </p>
      </div>
    </section>
  );
}
