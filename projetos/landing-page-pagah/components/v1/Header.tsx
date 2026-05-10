"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { header } from "@/content/landing";

export default function V1Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
        background: scrolled ? "rgba(10,10,10,0.7)" : "rgba(10,10,10,0.3)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="size-8 rounded-lg grid place-items-center transition-transform group-hover:scale-105"
            style={{
              background: "var(--accent)",
              color: "#0A0A0A",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-4">
              <path
                d="M12 2L20 8V16L12 22L4 16V8L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16M8 12H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-lg font-medium tracking-tight">pagah</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {header.menu.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-md hover:bg-white/[0.04] transition-colors"
            >
              {m.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta-final"
            className="hidden md:inline-block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {header.secondaryCta}
          </a>
          <a
            href="#cta-final"
            className="px-4 py-2.5 text-sm font-medium rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "var(--accent)",
              color: "#0A0A0A",
              boxShadow:
                "0 0 0 1px rgba(241,229,47,0.4), 0 8px 24px -8px rgba(241,229,47,0.4)",
            }}
          >
            {header.primaryCta}
          </a>
        </div>
      </div>
    </header>
  );
}
