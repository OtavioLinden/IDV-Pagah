"use client";
import { motion } from "motion/react";
import { specialization } from "@/content/landing";

export default function V1Specialization() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 80% 50%, rgba(241,229,47,0.04) 0%, transparent 50%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <span className="v1-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4 block">
            Especialização
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.02] mb-5"
          >
            Especialistas em quem vende{" "}
            <span style={{ color: "var(--accent)" }}>produto físico</span>.
          </motion.h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {specialization.subtitle}
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {specialization.niches.map((n, i) => (
            <motion.li
              key={n}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 120, damping: 18 },
                },
              }}
              className="group relative rounded-2xl p-5 md:p-6 v1-glass overflow-hidden cursor-default transition-all hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="absolute -top-12 -right-12 size-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle, rgba(241,229,47,0.3) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <div className="relative">
                <div className="v1-mono text-[10px] tracking-[0.2em] opacity-40 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base md:text-lg font-medium tracking-tight">
                  {n}
                </h3>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-12 text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {specialization.text}
        </p>
      </div>
    </section>
  );
}
