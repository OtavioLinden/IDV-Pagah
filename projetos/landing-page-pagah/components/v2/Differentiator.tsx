"use client";
import { motion } from "motion/react";
import { differentiator } from "@/content/landing";

export default function V2Differentiator() {
  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 03 · Diferencial
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] hidden md:block">
            Atendimento como motor de lucro
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="v2-display font-extrabold col-span-12 lg:col-span-9"
            style={{
              fontSize: "clamp(54px, 8vw, 130px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
            }}
          >
            O atendimento{" "}
            <span className="italic font-medium text-[var(--text-tertiary)]">
              não é
            </span>{" "}
            suporte. É{" "}
            <span
              style={{
                background: `linear-gradient(180deg, transparent 60%, var(--accent) 60%, var(--accent) 92%, transparent 92%)`,
              }}
            >
              lucro
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
            className="col-span-12 lg:col-span-3 text-lg text-[var(--text-secondary)] leading-snug lg:pb-4"
          >
            {differentiator.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="col-span-12 lg:col-span-5"
          >
            <CallCenterArtwork />
          </motion.div>
          <div className="col-span-12 lg:col-span-7">
            <p
              className="v2-display font-medium mb-10 max-w-2xl"
              style={{
                fontSize: "clamp(22px, 2.6vw, 32px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
              }}
            >
              {differentiator.text}
            </p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6"
            >
              {differentiator.cards.map((c, i) => (
                <motion.li
                  key={c}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                  className="flex items-start gap-3 py-3 border-t border-[var(--border-subtle)]"
                >
                  <span className="v2-num v2-tabular text-xs text-[var(--text-tertiary)] pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium">{c}</span>
                </motion.li>
              ))}
            </motion.ul>

            <p
              className="v2-display italic font-medium mt-12 pt-12 border-t-2 border-[var(--text-primary)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              <span
                className="v2-display block text-[120px] -mb-12 -ml-2 leading-none"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              {differentiator.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallCenterArtwork() {
  return (
    <div
      className="relative aspect-[4/5] flex flex-col p-8"
      style={{
        background: "var(--bg-contrast)",
        color: "var(--text-on-contrast)",
      }}
    >
      <div className="flex items-baseline justify-between mb-6">
        <span className="v2-kicker text-[var(--text-on-contrast-secondary)]">
          Operação · ao vivo
        </span>
        <span className="v2-kicker text-[var(--text-on-contrast-secondary)] v2-tabular">
          188 hoje
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-3">
        {[
          { label: "Carrinho recuperado", value: "R$ 1.297" },
          { label: "Upsell aceito", value: "+R$ 198" },
          { label: "Reversão de cancelamento", value: "R$ 467" },
          { label: "Pix esquecido", value: "R$ 89" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="flex items-baseline justify-between gap-3 py-3 border-t border-[var(--border-on-contrast)]"
          >
            <div className="flex items-baseline gap-3">
              <span className="v2-num v2-tabular text-xs text-[var(--text-on-contrast-secondary)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm">{item.label}</span>
            </div>
            <span
              className="v2-num font-bold v2-tabular"
              style={{ color: "var(--accent)" }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-[var(--accent)] pt-3 mt-4 flex items-baseline justify-between">
        <span className="v2-kicker text-[var(--accent)]">total recuperado</span>
        <span
          className="v2-num font-extrabold v2-tabular text-3xl"
          style={{ color: "var(--accent)" }}
        >
          R$ 2.051
        </span>
      </div>
    </div>
  );
}
