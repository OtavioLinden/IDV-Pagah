"use client";
import { motion } from "motion/react";
import { integrations } from "@/content/landing";

export default function V4Integrations() {
  return (
    <section
      id="integracoes"
      className="py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-5">
          <span
            className="v4-mono uppercase mb-5 inline-block"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            § 09 · Ecossistema
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
          >
            {integrations.title}
          </motion.h2>
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {integrations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          {integrations.list.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 4) * 0.04 + Math.floor(i / 4) * 0.06,
              }}
              whileHover={{ y: -2 }}
              className="v4-card flex items-center gap-3"
              style={{ padding: "20px 24px" }}
            >
              <LogoMark name={name} />
              <span className="text-[14px] font-bold tracking-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3 max-w-3xl">
          <span
            className="size-2 rounded-full v4-pulse-dot"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
          <p
            className="text-[14px]"
            style={{ color: "var(--text-secondary)" }}
          >
            {integrations.text}
          </p>
        </div>
      </div>
    </section>
  );
}

function LogoMark({ name }: { name: string }) {
  // Use first letter as a letter-mark inside a tinted square
  const initials = name
    .split(/[\s.]+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      className="size-9 rounded-lg grid place-items-center font-bold v4-mono"
      style={{
        background: "var(--bg-base)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-subtle)",
        fontSize: "11px",
        letterSpacing: "-0.02em",
      }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
