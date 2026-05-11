"use client";
import { motion } from "motion/react";
import { interestComparison } from "@/content/landing";
import CounterRoll from "@/components/v4/CounterRoll";

export default function V4Interest() {
  return (
    <section
      id="juros"
      className="py-16 md:py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-10">
          <span
            className="v4-mono uppercase mb-4 inline-block"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            § 05 · Juros do parcelamento
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.08] mb-4"
          >
            {interestComparison.title}
          </motion.h2>
          <p
            className="text-[17px] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {interestComparison.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {/* Common platforms - white card */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="v4-card relative"
            style={{ padding: "32px" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span
                className="size-2 rounded-full"
                style={{ background: "var(--text-tertiary)" }}
                aria-hidden="true"
              />
              <span
                className="v4-mono uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "var(--text-secondary)",
                }}
              >
                {interestComparison.left.label}
              </span>
            </div>

            <div className="mb-7">
              <div
                className="text-[12px] mb-2"
                style={{ color: "var(--text-tertiary)" }}
              >
                Juros do cartão capturados
              </div>
              <div className="flex items-baseline gap-2">
                <span
                  className="v4-tabular font-bold"
                  style={{
                    fontSize: "44px",
                    color: "var(--text-tertiary)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  R$ 0
                </span>
                <span
                  className="text-[13px]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  / mês para você
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {interestComparison.left.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[14px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    className="grid place-items-center size-5 rounded-full shrink-0 mt-px"
                    style={{
                      background: "var(--bg-base)",
                      border: "1px solid var(--border-subtle)",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3"
                      fill="none"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pagah - dark card with big yellow KPI */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.05,
            }}
            whileHover={{ y: -2 }}
            className="v4-card-dark relative overflow-hidden"
            style={{ padding: "32px" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span
                className="size-2 rounded-full v4-pulse-dot"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
              <span
                className="v4-mono uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "var(--accent)",
                }}
              >
                {interestComparison.right.label}
              </span>
            </div>

            <div className="mb-7">
              <div
                className="text-[12px] mb-2"
                style={{ color: "var(--text-on-dark-secondary)" }}
              >
                Juros recuperados (estimado)
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="v4-tabular font-bold"
                  style={{
                    fontSize: "56px",
                    color: "var(--accent)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  <CounterRoll value="+R$ 38k" duration={1100} delay={200} />
                </span>
                <span
                  className="text-[13px]"
                  style={{ color: "var(--text-on-dark-secondary)" }}
                >
                  / mês para a operação
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {interestComparison.right.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[14px]"
                  style={{ color: "var(--text-on-dark)" }}
                >
                  <span
                    className="grid place-items-center size-5 rounded-full shrink-0 mt-px"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3"
                      fill="none"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl">
          <p
            className="text-[12.5px] leading-relaxed max-w-md"
            style={{ color: "var(--text-tertiary)" }}
          >
            {interestComparison.note}
          </p>
          <a
            href="#cta-final"
            className="inline-flex self-start sm:self-auto items-center px-5 py-3 text-[14px] font-bold rounded-lg whitespace-nowrap"
            style={{
              background: "var(--accent)",
              color: "var(--text-primary)",
              boxShadow: "var(--shadow-accent)",
              transition:
                "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "var(--shadow-accent-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-accent)";
            }}
          >
            {interestComparison.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
