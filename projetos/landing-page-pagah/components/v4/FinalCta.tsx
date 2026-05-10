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
              "0 24px 48px -16px rgba(28,28,28,0.3), 0 4px 12px rgba(28,28,28,0.1)",
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
                className="v4-mono uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  color: "var(--accent)",
                }}
              >
                Migração gratuita · Suporte prioritário
              </span>
            </div>

            <h2
              className="text-[36px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] mb-5"
              style={{ color: "var(--text-on-dark)" }}
            >
              {finalCta.title}
            </h2>
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
                  boxShadow: "0 6px 22px -4px rgba(241,229,47,0.5)",
                  transition:
                    "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 28px -4px rgba(241,229,47,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 22px -4px rgba(241,229,47,0.5)";
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
