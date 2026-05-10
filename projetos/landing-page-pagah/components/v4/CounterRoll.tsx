"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Refined counter animation — rolls a number from 0 to its final value
 * once the element enters the viewport. Designed for V4 (Krehel-style):
 * subtle, fast (~900ms), ease-out curve, respects prefers-reduced-motion.
 *
 * The component preserves any leading/trailing non-digit characters
 * (e.g. "+40%", "+R$ 38k", "R$ 267,00", "87,3%") so layouts stay stable.
 */

type Props = {
  /** Final string with formatting preserved (e.g. "+R$ 38k", "87,3%"). */
  value: string;
  /** Animation duration in ms. Default 900ms (Krehel premium-but-fast). */
  duration?: number;
  /** Stagger delay before animation starts (ms). */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

// Extract the first numeric token (allowing comma decimals) and split prefix/suffix.
function parseValue(value: string): {
  prefix: string;
  number: number;
  decimals: number;
  suffix: string;
} | null {
  const match = value.match(/^([^\d-]*)(-?\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, raw, suffix] = match;
  const normalized = raw.replace(",", ".");
  const number = Number(normalized);
  if (Number.isNaN(number)) return null;
  const decimals = normalized.includes(".")
    ? normalized.split(".")[1].length
    : 0;
  return { prefix, number, decimals, suffix };
}

function formatNumber(n: number, decimals: number): string {
  // Locale pt-BR uses comma as decimal separator
  return n.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// ease-out cubic — clean deceleration, no bounce (Krehel)
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CounterRoll({
  value,
  duration = 900,
  delay = 0,
  className,
  style,
}: Props) {
  const parsed = useMemo(() => parseValue(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const inViewObserved = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const [fallbackTriggered, setFallbackTriggered] = useState(false);
  const [display, setDisplay] = useState<string>(
    parsed ? `${parsed.prefix}${formatNumber(0, parsed.decimals)}${parsed.suffix}` : value,
  );

  // Fallback: IntersectionObserver via motion/react can miss the element when it
  // mounts already in (or near) the viewport — particularly for hero KPIs above
  // the fold. Use a native IntersectionObserver + a hard mount fallback so the
  // animation reliably plays.
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    // Native IntersectionObserver fallback
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setFallbackTriggered(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px", threshold: 0 },
    );
    io.observe(el);

    // Hard mount fallback: after 1.2s, force-trigger so values never stay at 0
    // even if observer + scroll never fire (e.g. headless screenshot capture).
    const t = window.setTimeout(() => setFallbackTriggered(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const inView = inViewObserved || fallbackTriggered;

  useEffect(() => {
    if (!parsed) return;
    if (!inView) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start = 0;
    const target = parsed.number;

    const tick = (t: number) => {
      if (!start) start = t;
      const elapsed = t - start - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOut(progress);
      const current = target * eased;
      setDisplay(
        `${parsed.prefix}${formatNumber(current, parsed.decimals)}${parsed.suffix}`,
      );
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // Snap to exact final string to avoid float drift
        setDisplay(value);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reducedMotion, value, parsed, duration, delay]);

  return (
    <span ref={ref} className={className} style={style}>
      {parsed ? display : value}
    </span>
  );
}
