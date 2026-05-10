"use client";
import { motion } from "motion/react";
import { specialization } from "@/content/landing";

export default function V2Specialization() {
  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 07 · Nichos
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] hidden md:block">
            Desde 2018
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="v2-display font-extrabold col-span-12 lg:col-span-8"
            style={{
              fontSize: "clamp(48px, 7vw, 110px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.94,
            }}
          >
            Especialistas em quem vende{" "}
            <span className="italic font-medium">produto físico</span>.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
            className="col-span-12 lg:col-span-4 lg:pt-6"
          >
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-snug mb-4">
              {specialization.subtitle}
            </p>
            <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
              {specialization.text}
            </p>
          </motion.div>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-medium)] border border-[var(--border-medium)]"
        >
          {specialization.niches.map((n, i) => (
            <motion.li
              key={n}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  },
                },
              }}
              className="bg-[var(--bg-base)] p-8 flex flex-col justify-between min-h-[180px] group cursor-default"
            >
              <span
                className="v2-num font-extrabold v2-tabular text-[var(--text-tertiary)] block"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  lineHeight: 0.85,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="v2-display font-bold mt-6"
                style={{
                  fontSize: "clamp(22px, 2.4vw, 32px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                }}
              >
                {n}.
              </h3>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
