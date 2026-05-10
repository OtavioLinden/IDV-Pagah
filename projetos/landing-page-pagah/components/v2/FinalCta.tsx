"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { finalCta } from "@/content/landing";

/**
 * FinalCta uses a one-shot intersection observer to gate the mask-reveal
 * animation, so the gigantic h2 only "rises" when it actually enters view —
 * matching the editorial cadence the rest of the page uses with whileInView.
 */
function useInViewOnce(margin = "-50px") {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, margin]);
  return { ref, inView };
}

export default function V2FinalCta() {
  const { ref, inView } = useInViewOnce();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="cta-final"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "var(--bg-contrast)",
        color: "var(--text-on-contrast)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12 border-t-2 border-[var(--accent)] pt-6">
          <span
            className="v2-kicker"
            style={{ color: "var(--accent)" }}
          >
            Edição final
          </span>
          <span
            className="v2-kicker v2-tabular"
            style={{ color: "var(--accent)" }}
          >
            13 / 13
          </span>
        </div>

        {/* Editorial mask reveal at gigantic display size.
         * The mask animation only mounts after `inView` so we don't
         * burn it during initial paint of long pages.
         */}
        <h2
          className="v2-display font-extrabold mb-12"
          style={{
            fontSize: "clamp(72px, 13vw, 220px)",
            letterSpacing: "-0.055em",
            lineHeight: 0.86,
            textWrap: "balance",
          }}
        >
          {inView ? (
            <>
              <span
                className="v2-text-mask"
                style={{ "--v2-mask-delay": "40ms" } as React.CSSProperties}
              >
                <span>Pronto para parar de</span>
              </span>{" "}
              <span
                className="v2-text-mask"
                style={{ "--v2-mask-delay": "180ms" } as React.CSSProperties}
              >
                <span>
                  deixar dinheiro na{" "}
                  <span style={{ color: "var(--accent)" }}>mesa</span>?
                </span>
              </span>
            </>
          ) : (
            <span style={{ visibility: "hidden" }}>
              Pronto para parar de deixar dinheiro na{" "}
              <span style={{ color: "var(--accent)" }}>mesa</span>?
            </span>
          )}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.4,
          }}
          className="text-lg md:text-2xl text-[var(--text-on-contrast-secondary)] leading-snug max-w-3xl mb-12"
        >
          {finalCta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.55,
          }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <a href="#contato" className="v2-btn-on-contrast">
            {finalCta.primary}
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a href="#contato" className="v2-btn-ghost-on-contrast">
            {finalCta.secondary}
          </a>
        </motion.div>

        <p className="v2-kicker text-[var(--text-on-contrast-secondary)] border-t border-[var(--border-on-contrast)] pt-6">
          {finalCta.footnote}
        </p>
      </div>
    </section>
  );
}
