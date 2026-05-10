"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { social } from "@/content/landing";

const avatarMap: Record<string, string> = {
  "Rafael M.": "/images/people/rafael.png",
  "Camila B.": "/images/people/camila.png",
  "Diego F.": "/images/people/diego.png",
};

export default function V3Social() {
  return (
    <section
      id="depoimentos"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Prova social
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {social.title}
          </motion.h2>
          <p className="mt-4 text-[15px] md:text-lg text-[var(--text-secondary)] max-w-2xl">
            {social.subtitle}
          </p>
        </div>

        {/* Testimonials bento */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid lg:grid-cols-3 gap-4 mb-4"
        >
          {social.testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className={`v3-tile p-6 flex flex-col gap-5 relative overflow-hidden ${
                i === 1 ? "v3-glow-ring" : ""
              }`}
              style={
                i === 1
                  ? {
                      background:
                        "linear-gradient(140deg, rgba(241,229,47,0.05) 0%, var(--bg-tile) 60%)",
                    }
                  : undefined
              }
            >
              <div className="flex items-center gap-3">
                <div
                  className="relative size-12 rounded-full overflow-hidden shrink-0"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(241,229,47,0.25), 0 4px 16px rgba(0,0,0,0.35)",
                  }}
                >
                  {avatarMap[t.name] ? (
                    <Image
                      src={avatarMap[t.name]}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="size-full grid place-items-center text-[14px] font-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
                        color: "#0F0F10",
                      }}
                      aria-hidden="true"
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-[14px] font-semibold tracking-[-0.01em]">
                    {t.name}
                  </div>
                  <div className="v3-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-tertiary)]">
                    {t.segment}
                  </div>
                </div>
              </div>

              <blockquote className="text-[14px] leading-relaxed text-[var(--text-secondary)] flex-1">
                “{t.quote}”
              </blockquote>

              <div
                className="px-3 py-2.5 rounded-lg flex items-center justify-between"
                style={{ background: "rgba(241,229,47,0.08)" }}
              >
                <span className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
                  resultado
                </span>
                <span
                  className="text-[14px] font-semibold v3-num"
                  style={{ color: "var(--accent)" }}
                >
                  {t.result}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Metrics bento */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {social.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              whileHover={{ y: -2 }}
              animate={{ y: [0, -2, 0] }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="v3-tile p-5"
            >
              <div className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[26px] md:text-[30px] font-bold tracking-[-0.035em] v3-num leading-tight">
                {m.value}
              </div>
              <div className="mt-1 text-[12px] text-[var(--text-secondary)] leading-snug">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
