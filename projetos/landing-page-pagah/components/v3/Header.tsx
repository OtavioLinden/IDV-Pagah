"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { header } from "@/content/landing";

export default function V3Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  const blur = useTransform(scrollY, [0, 120], [8, 22]);
  const backdropFilter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        backdropFilter,
        background: scrolled
          ? "rgba(15,15,16,0.72)"
          : "rgba(15,15,16,0.35)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
      animate={{ paddingTop: scrolled ? 12 : 18, paddingBottom: scrolled ? 12 : 18 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.span
            layoutId="v3-logo-mark"
            className="size-9 grid place-items-center rounded-[10px] overflow-hidden"
            whileHover={{ scale: 1.06, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            aria-hidden="true"
          >
            <Image
              src="/brand/icon-yellow-rounded.svg"
              alt="Pagah"
              width={36}
              height={36}
              className="size-9"
              priority
            />
          </motion.span>
          <span
            className="text-[17px] font-semibold tracking-[-0.02em] lowercase"
            style={{ color: "var(--accent)" }}
          >
            pagah
          </span>
          <span
            className="v3-mono text-[10px] tracking-[0.2em] uppercase ml-1 px-1.5 py-0.5 rounded-md"
            style={{
              color: "var(--text-tertiary)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            live
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full"
          aria-label="Menu principal"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {header.menu.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="px-3 py-1.5 text-[13px] rounded-full transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {m.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta-final"
            className="hidden md:inline-block px-3 py-2 text-[13px] transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            {header.secondaryCta}
          </a>
          <motion.a
            href="#cta-final"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="px-4 py-2.5 text-[13px] font-semibold rounded-xl"
            style={{
              background: "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
              color: "#0F0F10",
              boxShadow:
                "0 0 0 1px rgba(241,229,47,0.4), 0 8px 24px -8px rgba(241,229,47,0.45)",
            }}
          >
            {header.primaryCta}
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
