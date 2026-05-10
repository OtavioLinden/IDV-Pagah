"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { pillars } from "@/content/landing";

export default function V3Pillars() {
  return (
    <section
      id="solucoes"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Solucoes
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {pillars.title.split("máquina de lucro").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  <span style={{ color: "var(--accent)" }}>
                    máquina de lucro
                  </span>
                  {part}
                </span>
              ),
            )}
          </motion.h2>
        </div>

        {/* Bento with asymmetric tile sizes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(220px,auto)]"
        >
          <PillarCard
            col="md:col-span-3 md:row-span-2"
            data={pillars.columns[0]}
            icon={<IconCart />}
            sub="Conversion engine"
            big
          />
          <PillarCard
            col="md:col-span-3 md:row-span-1"
            data={pillars.columns[1]}
            icon={<IconHeadset />}
            sub="Atendimento ao vivo"
          />
          <PillarCard
            col="md:col-span-3 md:row-span-1"
            data={pillars.columns[2]}
            icon={<IconCard />}
            sub="Margem extra"
            accent
          />
        </motion.div>
      </div>
    </section>
  );
}

const PillarCard = memo(function PillarCard({
  col,
  data,
  icon,
  sub,
  big,
  accent,
}: {
  col: string;
  data: { title: string; text: string; bullets: string[] };
  icon: React.ReactNode;
  sub: string;
  big?: boolean;
  accent?: boolean;
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
      layout
      whileHover={{ scale: 1.01, y: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`v3-tile p-6 ${col} relative overflow-hidden flex flex-col`}
      style={
        accent
          ? {
              background:
                "linear-gradient(140deg, rgba(241,229,47,0.06) 0%, var(--bg-tile) 60%)",
            }
          : undefined
      }
    >
      <div className="flex items-start justify-between mb-5">
        <motion.span
          className="size-11 grid place-items-center rounded-xl"
          style={{
            background: "rgba(241,229,47,0.1)",
            color: "var(--accent)",
          }}
          animate={{ rotate: [0, 4, -4, 0] }}
          transition={{
            duration: big ? 7.3 : accent ? 5.6 : 8.8,
            repeat: Infinity,
            ease: big
              ? [0.45, 0, 0.55, 1]
              : accent
                ? [0.16, 1, 0.3, 1]
                : [0.65, 0, 0.35, 1],
            delay: big ? 0 : accent ? 0.6 : 1.1,
          }}
        >
          {icon}
        </motion.span>
        <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
          {sub}
        </span>
      </div>

      <h3
        className={`font-semibold tracking-[-0.025em] mb-3 ${big ? "text-2xl md:text-[28px] leading-[1.1]" : "text-xl md:text-2xl"}`}
      >
        {data.title}
      </h3>
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] mb-5">
        {data.text}
      </p>

      <ul className="mt-auto grid gap-2">
        {data.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2.5 text-[13px] text-[var(--text-secondary)]"
          >
            <span
              className="size-1.5 rounded-full shrink-0"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            {b}
          </li>
        ))}
      </ul>

      {big && (
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-12 -right-12 size-40 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(241,229,47,0.1) 0%, transparent 60%)",
            filter: "blur(20px)",
          }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: 6.4,
            repeat: Infinity,
            ease: [0.37, 0, 0.63, 1],
            delay: 0.95,
          }}
        />
      )}
    </motion.article>
  );
});

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <path
        d="M3 3h2l2 13h11l2-9H6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="20" r="1.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <path
        d="M4 14v-2a8 8 0 0 1 16 0v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect
        x="2"
        y="13"
        width="4"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="18"
        y="13"
        width="4"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
function IconCard() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M6 15h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
