"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { social } from "@/content/landing";

const avatarMap: Record<string, string> = {
  "Rafael M.": "/images/people/rafael.png",
  "Camila B.": "/images/people/camila.png",
  "Diego A.": "/images/people/diego.png",
};

export default function V1Social() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
            Prova social · Resultados
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.02] mb-5"
          >
            {social.title}
          </motion.h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {social.subtitle}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-16">
          {social.testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.08,
              }}
              className="rounded-2xl p-7 v1-glass relative"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span
                className="absolute top-6 right-6 text-5xl leading-none opacity-20"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              >
                “
              </span>
              <div
                className="text-2xl font-semibold tabular tracking-[-0.02em] mb-1"
                style={{ color: "var(--accent)" }}
              >
                {t.result}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] mb-5 v1-mono tracking-wide">
                {t.segment}
              </div>
              <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-6">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                {avatarMap[t.name] ? (
                  <Image
                    src={avatarMap[t.name]}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                    style={{
                      border: "1px solid rgba(241,229,47,0.25)",
                    }}
                  />
                ) : (
                  <div
                    className="size-10 rounded-full grid place-items-center text-xs font-semibold"
                    style={{
                      background: "var(--accent)",
                      color: "#0A0A0A",
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12 border-t border-white/5">
          {social.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.06,
              }}
            >
              <div
                className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] tabular mb-2"
                style={{ color: "var(--accent)" }}
              >
                {m.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
