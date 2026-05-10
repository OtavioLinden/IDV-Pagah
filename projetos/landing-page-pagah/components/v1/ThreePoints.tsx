"use client";
import { motion } from "motion/react";
import { threePoints } from "@/content/landing";

export default function V1ThreePoints() {
  return (
    <section className="relative py-24 md:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] mb-12 max-w-3xl text-balance"
        >
          {threePoints.title.split("3 lugares").map((part, i) =>
            i === 0 ? (
              <span key={i}>{part}</span>
            ) : (
              <span key={i}>
                <span style={{ color: "var(--accent)" }}>3 lugares</span>
                {part}
              </span>
            )
          )}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid md:grid-cols-3 gap-4 md:gap-5"
        >
          {threePoints.cards.map((c, i) => (
            <motion.article
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="group relative rounded-2xl p-7 md:p-8 v1-glass v1-glass-hover overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 size-48 rounded-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(241,229,47,0.18) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div className="relative">
                <div className="v1-mono text-xs tracking-[0.2em] opacity-40 mb-4">
                  0{i + 1} / 03
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-3">
                  {c.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {c.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="mt-14 max-w-2xl"
        >
          <span
            className="v1-mono text-[10px] tracking-[0.2em] uppercase block mb-3"
            style={{ color: "var(--accent)" }}
          >
            ◇ A consequência
          </span>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            {threePoints.cta}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
