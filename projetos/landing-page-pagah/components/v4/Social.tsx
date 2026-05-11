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
      className="py-16 md:py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl mb-14">
          <hr className="v4-section-rule--accent" aria-hidden="true" />
          <span
            className="v4-serif mb-5 inline-block"
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              letterSpacing: "-0.005em",
            }}
          >
            Quem opera grande, opera com a Pagah
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="v4-serif tracking-[-0.02em] leading-[1.02] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
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
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
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

        {/* Featured testimonial - WSJ profile style */}
        {social.testimonials[0] && (
          <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="v4-card grid md:grid-cols-[260px_1fr] gap-8 mb-5 overflow-hidden"
            style={{ padding: "0" }}
          >
            <div
              className="relative aspect-square md:aspect-auto md:min-h-[320px]"
              style={{ background: "var(--bg-base)" }}
            >
              {getAvatarSrc(social.testimonials[0].name) ? (
                <Image
                  src={getAvatarSrc(social.testimonials[0].name) as string}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 260px, 100vw"
                  className="object-cover grayscale"
                />
              ) : (
                <div
                  className="absolute inset-0 grid place-items-center v4-serif"
                  style={{
                    background: "var(--bg-card-dark)",
                    color: "var(--accent)",
                    fontStyle: "italic",
                    fontSize: "72px",
                    fontWeight: 500,
                  }}
                  aria-hidden="true"
                >
                  {social.testimonials[0].name[0]}
                </div>
              )}
              <span
                className="absolute bottom-3 left-3 v4-mono v4-tabular"
                style={{
                  fontSize: "10px",
                  background: "var(--bg-card)",
                  color: "var(--text-primary)",
                  letterSpacing: "0.14em",
                  padding: "3px 7px",
                  borderRadius: "2px",
                }}
              >
                {social.testimonials[0].result}
              </span>
            </div>
            <div
              className="flex flex-col justify-center"
              style={{ padding: "36px 36px 36px 0" }}
            >
              <div
                className="v4-mono uppercase mb-4"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  color: "var(--text-tertiary)",
                }}
              >
                Perfil · Cliente Pagah
              </div>
              <p
                className="v4-dropcap leading-[1.55] mb-6 v4-serif"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "clamp(20px, 2.1vw, 24px)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                {social.testimonials[0].quote}
              </p>
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid var(--border-card)" }}
              >
                <div>
                  <div
                    className="text-[15px] font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {social.testimonials[0].name}
                  </div>
                  <div
                    className="text-[12.5px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {social.testimonials[0].segment}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Smaller testimonials */}
        <div className="grid md:grid-cols-2 gap-5">
          {social.testimonials.slice(1).map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.07,
              }}
              whileHover={{ y: -3 }}
              className="v4-card flex flex-col"
              style={{ padding: "28px" }}
            >
              <div
                className="v4-mono v4-tabular font-bold mb-4 inline-flex self-start"
                style={{
                  fontSize: "11px",
                  color: "var(--text-primary)",
                  letterSpacing: "0.04em",
                  borderBottom: "2px solid var(--accent)",
                  paddingBottom: "2px",
                }}
              >
                {t.result}
              </div>

              <p
                className="text-[14.5px] leading-relaxed mb-5 flex-1"
                style={{ color: "var(--text-primary)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid var(--border-card)" }}
              >
                {getAvatarSrc(t.name) ? (
                  <span
                    className="relative size-9 rounded-full overflow-hidden shrink-0"
                    style={{ background: "var(--bg-base)" }}
                    aria-hidden="true"
                  >
                    <Image
                      src={getAvatarSrc(t.name) as string}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span
                    className="size-9 rounded-full grid place-items-center font-bold shrink-0"
                    style={{
                      background: "var(--bg-card-dark)",
                      color: "var(--accent)",
                      fontSize: "12px",
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
                    className="text-[13.5px] font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[11.5px]"
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
