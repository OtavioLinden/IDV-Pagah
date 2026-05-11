"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { differentiator } from "@/content/landing";

export default function V4Differentiator() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
        <div>
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
            Atendimento como motor de receita
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="v4-serif tracking-[-0.02em] leading-[1.04] mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 500 }}
          >
            {differentiator.title}
          </motion.h2>
          <p
            className="text-[18px] leading-relaxed mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            {differentiator.subtitle}
          </p>
          <p
            className="text-[15px] leading-relaxed mb-6 v4-dropcap"
            style={{ color: "var(--text-secondary)" }}
          >
            {differentiator.text}
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
            {differentiator.cards.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 text-[14px]"
                style={{ color: "var(--text-primary)" }}
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
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <blockquote
            className="relative text-[18px] font-medium leading-relaxed"
            style={{
              color: "var(--text-primary)",
              padding: "20px 22px",
              background: "var(--accent-soft)",
              borderRadius: "12px",
            }}
          >
            <span
              aria-hidden="true"
              className="absolute v4-mono"
              style={{
                top: "-6px",
                left: "16px",
                fontSize: "44px",
                fontWeight: 700,
                lineHeight: 1,
                color: "var(--accent)",
                letterSpacing: "-0.04em",
              }}
            >
              “
            </span>
            <span style={{ display: "block", paddingLeft: "20px" }}>
              {differentiator.quote}
            </span>
          </blockquote>
        </div>

        {/* Right: real call center photo card */}
        <CallCenterPhotoCard />
      </div>
    </section>
  );
}

function CallCenterPhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="v4-card relative overflow-hidden"
      style={{ padding: 0 }}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/images/v4/callcenter.png"
          alt="Equipe de atendimento Pagah ao vivo"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
        <div
          className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full px-3.5 py-2"
          style={{
            background: "var(--bg-card)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          }}
        >
          <span
            className="size-2 rounded-full v4-pulse-dot shrink-0"
            style={{ background: "#16A34A" }}
            aria-hidden="true"
          />
          <span
            className="v4-mono v4-tabular font-medium"
            style={{
              fontSize: "12px",
              color: "var(--text-primary)",
              letterSpacing: "-0.005em",
            }}
          >
            32 atendentes · ao vivo agora
          </span>
        </div>
      </div>
    </motion.div>
  );
}
