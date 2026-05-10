"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { specialization } from "@/content/landing";

const NICHE_IMAGES: Record<string, string> = {
  Encapsulados: "/images/products/encapsulados.png",
  Suplementos: "/images/products/suplementos.png",
  Cosméticos: "/images/products/cosmeticos.png",
  Gotas: "/images/products/gotas.png",
};

// Asymmetric grid layout: each tile gets a deliberate size
const TILE_SIZES = [
  "md:col-span-3 md:row-span-2", // big primary
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export default function V3Specialization() {
  return (
    <section
      id="produtos-fisicos"
      className="relative py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <span className="v3-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">
            Especialização
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.035em] leading-[1.05]"
          >
            {specialization.title.split("produto físico").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  <span style={{ color: "var(--accent)" }}>produto físico</span>
                  {part}
                </span>
              ),
            )}
          </motion.h2>
          <p className="mt-4 text-[15px] md:text-lg text-[var(--text-secondary)] max-w-2xl">
            {specialization.subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 md:grid-cols-6 gap-3 auto-rows-[minmax(120px,auto)]"
        >
          {specialization.niches.map((niche, i) => {
            const photoSrc = NICHE_IMAGES[niche];
            const isPhoto = Boolean(photoSrc);
            const isAmber = i === 0;
            return (
              <motion.div
                key={niche}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 20 },
                  },
                }}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className={`v3-tile relative overflow-hidden flex flex-col justify-between ${TILE_SIZES[i] ?? "md:col-span-2"} ${
                  isAmber ? "v3-glow-ring" : ""
                } ${isPhoto ? "p-0" : "p-5"}`}
                style={
                  isAmber && !isPhoto
                    ? {
                        background:
                          "linear-gradient(140deg, rgba(241,229,47,0.06) 0%, var(--bg-tile) 60%)",
                      }
                    : undefined
                }
              >
                {isPhoto ? (
                  <>
                    <div className="absolute inset-0">
                      <Image
                        src={photoSrc}
                        alt={`Nicho ${niche}: produto físico premium`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                          background: isAmber
                            ? "linear-gradient(180deg, rgba(241,229,47,0.08) 0%, rgba(15,15,16,0.25) 50%, rgba(15,15,16,0.85) 100%)"
                            : "linear-gradient(180deg, rgba(15,15,16,0.0) 30%, rgba(15,15,16,0.55) 70%, rgba(15,15,16,0.88) 100%)",
                        }}
                      />
                    </div>

                    {isAmber && (
                      <motion.div
                        aria-hidden="true"
                        className="absolute -top-12 -right-12 size-40 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(241,229,47,0.28) 0%, transparent 60%)",
                          filter: "blur(20px)",
                        }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}

                    <div className="relative flex items-center justify-between p-5">
                      <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <NicheGlyph index={i} />
                    </div>

                    <div className="relative p-5 pt-0">
                      <span
                        className="v3-mono text-[10px] tracking-[0.2em] uppercase text-white/60 block mb-1"
                      >
                        nicho
                      </span>
                      <span
                        className={`relative font-semibold tracking-[-0.02em] text-white ${
                          isAmber ? "text-[24px] md:text-[28px]" : "text-[16px] md:text-[18px]"
                        }`}
                      >
                        {niche}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between relative">
                      <span className="v3-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-tertiary)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <NicheGlyph index={i} />
                    </div>
                    <span className="relative font-semibold tracking-[-0.02em] text-[16px] md:text-[18px]">
                      {niche}
                    </span>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="mt-10 max-w-3xl text-[15px] text-[var(--text-secondary)] leading-relaxed"
        >
          {specialization.text}
        </motion.p>
      </div>
    </section>
  );
}

function NicheGlyph({ index }: { index: number }) {
  return (
    <motion.span
      className="size-2 rounded-full"
      style={{ background: "var(--accent)" }}
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{
        duration: 1.8 + (index % 4) * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.18,
      }}
      aria-hidden="true"
    />
  );
}
