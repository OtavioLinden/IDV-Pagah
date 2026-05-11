"use client";
import { motion } from "motion/react";
import { finalCta } from "@/content/landing";

export default function V4FinalCta() {
  return (
    <section
      id="cta-final"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="relative overflow-hidden"
          style={{
            background: "var(--bg-card-dark)",
            color: "var(--text-on-dark)",
            borderRadius: "24px",
            padding: "56px 40px",
            boxShadow:
              "0 28px 56px -18px oklch(0.18 0.02 99 / 0.34), 0 6px 18px oklch(0.18 0.02 99 / 0.12)",
          }}
        >
          {/* Yellow accent corner */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 size-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(241,229,47,0.12) 0%, transparent 65%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="size-1.5 rounded-full v4-pulse-dot"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
              <span
                className="v4-serif"
                style={{
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "var(--accent)",
                  letterSpacing: "-0.005em",
                }}
              >
                Migração gratuita · Suporte prioritário
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[1.02] tracking-[-0.03em] mb-5"
              style={{
                color: "var(--text-on-dark)",
                fontSize: "clamp(40px, 5.6vw, 72px)",
              }}
            >
              {finalCta.title}
            </motion.h2>
            <p
              className="text-[17px] md:text-[19px] leading-relaxed mb-9 max-w-2xl"
              style={{ color: "var(--text-on-dark-secondary)" }}
            >
              {finalCta.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mb-7">
              <a
                href="#contato"
                className="px-7 py-4 text-[15px] font-bold rounded-lg"
                style={{
                  background: "var(--accent)",
                  color: "var(--text-primary)",
                  boxShadow: "var(--shadow-accent)",
                  transition:
                    "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "var(--shadow-accent-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-accent)";
                }}
              >
                {finalCta.primary}
              </a>
              <a
                href="#contato"
                className="px-7 py-4 text-[15px] font-medium rounded-lg"
                style={{
                  background: "transparent",
                  color: "var(--text-on-dark)",
                  border: "1px solid var(--border-on-dark)",
                  transition: "border-color 220ms ease, background 220ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--border-on-dark)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {finalCta.secondary} →
              </a>
            </div>

            <p
              className="v4-mono"
              style={{
                fontSize: "12px",
                letterSpacing: "0.05em",
                color: "var(--text-on-dark-secondary)",
              }}
            >
              {finalCta.footnote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
