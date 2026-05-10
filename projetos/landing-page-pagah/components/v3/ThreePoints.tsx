"use client";

import { motion } from "motion/react";
import { threePoints } from "@/content/landing";

export default function V3ThreePoints() {
  return (
    <section
      id="problemas"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.02] max-w-3xl"
          >
            {threePoints.title.split("3 lugares").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  <span style={{ color: "var(--accent)" }}>3 lugares</span>
                  {part}
                </span>
              ),
            )}
          </motion.h2>
          <span className="v3-mono text-[11px] tracking-[0.16em] uppercase text-[var(--text-tertiary)]">
            03 vazamentos
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid lg:grid-cols-3 gap-4"
        >
          <PointCard index="01" {...threePoints.cards[0]} variant="cart" />
          <PointCard index="02" {...threePoints.cards[1]} variant="upsell" />
          <PointCard index="03" {...threePoints.cards[2]} variant="interest" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="mt-10 max-w-3xl text-lg md:text-xl tracking-[-0.02em] leading-snug font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          {threePoints.cta}
        </motion.p>
      </div>
    </section>
  );
}

function PointCard({
  index,
  title,
  text,
  variant,
}: {
  index: string;
  title: string;
  text: string;
  variant: "cart" | "upsell" | "interest";
}) {
  return (
    <motion.article
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
      className="v3-tile p-6 grid grid-rows-[auto_1fr_auto] gap-5 min-h-[340px] relative overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <span className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-tertiary)]">
          {index}
        </span>
        <Visual variant={variant} />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] mb-2">
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
          {text}
        </p>
      </div>
      <div
        className="text-[11px] v3-mono tracking-[0.18em] uppercase pt-3 border-t"
        style={{
          color: "var(--text-tertiary)",
          borderColor: "var(--border-subtle)",
        }}
      >
        Pagah recupera
      </div>
    </motion.article>
  );
}

function Visual({ variant }: { variant: "cart" | "upsell" | "interest" }) {
  if (variant === "cart") {
    return (
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-2 rounded-full"
            style={{ background: "var(--accent)" }}
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }
  if (variant === "upsell") {
    return (
      <motion.div
        className="size-7 rounded-md grid place-items-center"
        style={{ background: "rgba(241,229,47,0.15)" }}
        animate={{ rotate: [0, 12, -8, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 24 24" className="size-3.5" fill="none">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    );
  }
  return (
    <motion.div
      className="v3-mono text-[10px] tracking-[0.16em] uppercase px-2 py-1 rounded"
      style={{
        background: "rgba(241,229,47,0.12)",
        color: "var(--accent)",
      }}
      animate={{ opacity: [0.65, 1, 0.65] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      $$$
    </motion.div>
  );
}
