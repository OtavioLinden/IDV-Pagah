"use client";

import { motion } from "motion/react";
import { integrations } from "@/content/landing";

const HIGHLIGHT = new Set(["Notazz", "Utmify", "Bling", "ActiveCampaign"]);
// Truly asymmetric: highlights claim 4 cols (sometimes 2 rows), filler tiles take 2-3.
// Pattern hand-tuned for visual rhythm — not a uniform grid.
const TILE_SIZES = [
  "md:col-span-4 md:row-span-2", // Notazz — wide+tall hero
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-3",                // Utmify
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",                // Bling
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-4",                // ActiveCampaign — wide
  "md:col-span-2",
];

export default function V3Integrations() {
  return (
    <section
      id="integracoes"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Integrações
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {integrations.title}
          </motion.h2>
          <p className="mt-4 text-[15px] md:text-lg text-[var(--text-secondary)] max-w-2xl">
            {integrations.subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="grid grid-cols-2 md:grid-cols-12 gap-3 auto-rows-[88px]"
        >
          {integrations.list.map((tool, i) => {
            const isHighlight = HIGHLIGHT.has(tool);
            return (
              <motion.div
                key={tool}
                layout
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 20 },
                  },
                }}
                whileHover={{ y: -2, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className={`v3-tile v3-magnet px-4 py-3 flex items-center justify-center gap-3 col-span-1 ${TILE_SIZES[i] ?? "md:col-span-3"} relative overflow-hidden ${
                  isHighlight ? "v3-glow-ring" : ""
                }`}
                style={
                  isHighlight
                    ? {
                        background:
                          "linear-gradient(140deg, rgba(241,229,47,0.05) 0%, var(--bg-tile) 60%)",
                      }
                    : undefined
                }
              >
                {isHighlight && (
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 v3-shimmer-bg pointer-events-none"
                  />
                )}
                <span
                  className="size-7 rounded-md grid place-items-center text-[11px] font-bold v3-mono tracking-tight relative"
                  style={{
                    background: isHighlight
                      ? "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)"
                      : "rgba(255,255,255,0.04)",
                    color: isHighlight ? "#0F0F10" : "var(--text-secondary)",
                  }}
                  aria-hidden="true"
                >
                  {tool.slice(0, 1).toUpperCase()}
                </span>
                <span className="relative text-[14px] font-medium tracking-[-0.01em]">
                  {tool}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="mt-8 text-[14px] text-[var(--text-secondary)]"
        >
          {integrations.text}
        </motion.p>
      </div>
    </section>
  );
}
