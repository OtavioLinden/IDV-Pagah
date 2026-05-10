"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { social } from "@/content/landing";

const avatarMap: Record<string, string> = {
  Rafael: "/images/people/rafael.png",
  Camila: "/images/people/camila.png",
  Diego: "/images/people/diego.png",
};

function getAvatarSrc(name: string): string | undefined {
  const firstName = name.split(" ")[0];
  return avatarMap[firstName];
}

export default function V4Social() {
  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-14">
          <span
            className="v4-mono uppercase mb-5 inline-block"
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            Prova social · Resultados reais
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] mb-4"
          >
            {social.title}
          </motion.h2>
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {social.subtitle}
          </p>
        </div>

        {/* Metrics row - 1 dark + 3 white */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {social.metrics.map((m, i) => {
            const isHighlight = i === 0;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.06,
                }}
                whileHover={{ y: -2 }}
                className={isHighlight ? "v4-card-dark" : "v4-card"}
                style={{ padding: "28px 24px" }}
              >
                <div
                  className="v4-mono uppercase mb-3"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: isHighlight
                      ? "var(--text-on-dark-secondary)"
                      : "var(--text-secondary)",
                  }}
                >
                  {m.label}
                </div>
                <div
                  className="v4-tabular font-bold tracking-[-0.02em]"
                  style={{
                    fontSize:
                      m.value.length > 8 ? "22px" : "30px",
                    color: isHighlight
                      ? "var(--accent)"
                      : "var(--text-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  {m.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials - 3 white cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {social.testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.07,
              }}
              whileHover={{ y: -3 }}
              className="v4-card flex flex-col"
              style={{ padding: "32px" }}
            >
              <div
                className="v4-mono v4-tabular font-bold mb-5 inline-flex self-start px-2 py-1 rounded"
                style={{
                  fontSize: "12px",
                  background: "var(--accent)",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {t.result}
              </div>

              <p
                className="text-[15px] leading-relaxed mb-6 flex-1"
                style={{ color: "var(--text-primary)" }}
              >
                “{t.quote}”
              </p>

              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid var(--border-card)" }}
              >
                {getAvatarSrc(t.name) ? (
                  <span
                    className="relative size-10 rounded-full overflow-hidden shrink-0"
                    style={{ background: "var(--bg-base)" }}
                    aria-hidden="true"
                  >
                    <Image
                      src={getAvatarSrc(t.name) as string}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span
                    className="size-10 rounded-full grid place-items-center font-bold shrink-0"
                    style={{
                      background: "var(--bg-card-dark)",
                      color: "var(--accent)",
                      fontSize: "13px",
                    }}
                    aria-hidden="true"
                  >
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                )}
                <div>
                  <div
                    className="text-[14px] font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[12px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t.segment}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
