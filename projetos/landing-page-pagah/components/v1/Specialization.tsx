"use client";
import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { specialization } from "@/content/landing";

const productMap: Record<string, string> = {
  Encapsulados: "/images/products/encapsulados.png",
  Suplementos: "/images/products/suplementos.png",
  Cosméticos: "/images/products/cosmeticos.png",
  Gotas: "/images/products/gotas.png",
};

const iconStroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const iconMap: Record<string, ReactNode> = {
  "Produtos de recorrência": (
    <svg viewBox="0 0 24 24" width={24} height={24} {...iconStroke}>
      <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" />
      <path d="M21 4v4h-4" />
      <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" />
      <path d="M3 20v-4h4" />
    </svg>
  ),
  "Operações com tráfego pago": (
    <svg viewBox="0 0 24 24" width={24} height={24} {...iconStroke}>
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M14 6h7v7" />
    </svg>
  ),
  "Vendas por WhatsApp": (
    <svg viewBox="0 0 24 24" width={24} height={24} {...iconStroke}>
      <path d="M21 12a9 9 0 1 1-3.6-7.2L21 3l-1.2 4.2A9 9 0 0 1 21 12z" />
      <path d="M8.5 9.5c.5 2 2 3.5 4 4l1.2-1.2 2.3 1.1c.4.2.5.6.4 1-.4 1-1.5 1.6-2.6 1.4-3-.4-5.4-2.8-5.8-5.8-.2-1.1.4-2.2 1.4-2.6.4-.1.8 0 1 .4l1.1 2.3-1 1.4z" />
    </svg>
  ),
  Afiliados: (
    <svg viewBox="0 0 24 24" width={24} height={24} {...iconStroke}>
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M15 19c0-2 1.5-3.5 4-3.5s2 0 2 0" />
    </svg>
  ),
};

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
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.02] mb-5 text-balance"
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
          {specialization.niches.map((n, i) => {
            const productSrc = productMap[n];
            return (
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
                className="group relative rounded-2xl v1-glass v1-glass-hover overflow-hidden cursor-default flex flex-col"
              >
                <div
                  className="absolute -top-12 -right-12 size-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(241,229,47,0.3) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />

                {productSrc ? (
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={productSrc}
                      alt={n}
                      width={400}
                      height={400}
                      className="object-cover w-full h-32 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(10,10,10,0) 40%, rgba(10,10,10,0.55) 100%)",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="relative h-32 w-full flex items-center justify-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(241,229,47,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                    }}
                  >
                    <div
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--accent)" }}
                    >
                      {iconMap[n] ?? null}
                    </div>
                  </div>
                )}

                <div className="relative p-5 md:p-6">
                  <div className="v1-mono text-[10px] tracking-[0.2em] opacity-40 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base md:text-lg font-medium tracking-tight">
                    {n}
                  </h3>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        <p className="mt-12 text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {specialization.text}
        </p>
      </div>
    </section>
  );
}
