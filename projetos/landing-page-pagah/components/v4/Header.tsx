"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { header } from "@/content/landing";

export default function V4Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 z-50"
      style={{
        top: "6px",
        background: "var(--bg-card)",
        borderBottom: scrolled
          ? "1px solid var(--border-card)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 2px 16px -8px rgba(28,28,28,0.08)"
          : "none",
        transition: "border-color 220ms ease, box-shadow 220ms ease",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Pagah"
        >
          <span
            className="size-9 rounded-lg grid place-items-center"
            style={{
              background: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-[18px]"
              aria-hidden="true"
            >
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
          <span className="text-[19px] font-bold tracking-tight">pagah</span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Principal"
        >
          {header.menu.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="px-3 py-2 text-[14px] rounded-md transition-colors"
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
            className="hidden md:inline-flex items-center px-4 py-2.5 text-[14px] font-medium rounded-lg transition-colors"
            style={{
              color: "var(--text-primary)",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
            }}
          >
            {header.secondaryCta}
          </a>
          <a
            href="#cta-final"
            className="inline-flex items-center px-4 py-2.5 text-[14px] font-bold rounded-lg"
            style={{
              background: "var(--accent)",
              color: "var(--text-primary)",
              transition: "transform 220ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-1px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {header.primaryCta}
          </a>
        </div>
      </div>
    </header>
  );
}
