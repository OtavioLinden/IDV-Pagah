"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { social } from "@/content/landing";

const avatarMap: Record<string, string> = {
  "Rafael M.": "/images/people/rafael.png",
  "Camila B.": "/images/people/camila.png",
  "Diego A.": "/images/people/diego.png",
};

export default function V2Social() {
  return (
    <section id="depoimentos" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-16 v2-rule-thick pt-6">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            Capítulo 10 · Prova
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] hidden md:block">
            Operações reais
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="v2-display font-extrabold mb-8 max-w-5xl"
          style={{
            fontSize: "clamp(40px, 6vw, 90px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.96,
          }}
        >
          Lucro não vem só do checkout.
        </motion.h2>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-snug max-w-3xl mb-20">
          {social.subtitle}
        </p>

        {/* Metrics display */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-medium)] border border-[var(--border-medium)] mb-32"
        >
          {social.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
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
              className="bg-[var(--bg-base)] p-8 flex flex-col justify-between min-h-[200px]"
            >
              <span className="v2-num v2-tabular text-xs text-[var(--text-tertiary)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span
                  className="v2-num font-extrabold v2-tabular block leading-none"
                  style={{
                    fontSize: "clamp(36px, 5vw, 64px)",
                  }}
                >
                  {m.value}
                </span>
                <span className="text-sm text-[var(--text-secondary)] mt-3 block leading-snug">
                  {m.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials as editorial articles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-0"
        >
          {social.testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
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
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-t-2 border-[var(--text-primary)]"
            >
              <div className="col-span-12 lg:col-span-3">
                <div className="flex items-start gap-5 mb-4">
                  {avatarMap[t.name] ? (
                    <div
                      className="relative shrink-0 overflow-hidden rounded-full"
                      style={{
                        width: 72,
                        height: 72,
                        boxShadow: "0 0 0 2px var(--accent)",
                      }}
                    >
                      <Image
                        src={avatarMap[t.name]}
                        alt={`Retrato de ${t.name}, ${t.segment}`}
                        width={144}
                        height={144}
                        sizes="72px"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <span
                    className="v2-num font-extrabold v2-tabular block"
                    style={{
                      fontSize: "clamp(48px, 6vw, 80px)",
                      color: "var(--accent)",
                      lineHeight: 0.85,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="v2-display font-bold text-2xl">{t.name}</p>
                <p className="text-sm text-[var(--text-tertiary)] mt-1">
                  {t.segment}
                </p>
                <p
                  className="v2-num font-bold v2-tabular mt-4 inline-block px-3 py-1.5 text-sm"
                  style={{
                    background: "var(--text-primary)",
                    color: "var(--accent)",
                  }}
                >
                  {t.result}
                </p>
              </div>
              <blockquote className="col-span-12 lg:col-span-9 relative">
                <span
                  className="v2-display absolute -top-6 -left-2 leading-none pointer-events-none"
                  style={{
                    fontSize: "clamp(120px, 14vw, 220px)",
                    color: "var(--accent)",
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p
                  className="v2-display italic font-medium relative pt-12 lg:pt-8 lg:pl-16"
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                  }}
                >
                  {t.quote}
                </p>
              </blockquote>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
