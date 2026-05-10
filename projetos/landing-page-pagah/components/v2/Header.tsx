import Image from "next/image";
import { header } from "@/content/landing";

export default function V2Header() {
  return (
    <header className="relative z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        <a
          href="#"
          className="flex items-center gap-2.5"
          aria-label="Pagah"
        >
          <Image
            src="/brand/icon-grey-rounded.svg"
            alt="Pagah"
            width={36}
            height={36}
            className="size-9"
            priority
          />
          <span className="v2-display font-bold text-2xl tracking-[-0.05em] lowercase">
            pagah<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7"
        >
          {header.menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta-final"
            className="hidden md:inline-flex text-sm font-semibold px-4 py-2 border-2 border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--text-on-contrast)] transition-colors"
          >
            {header.primaryCta}
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            className="lg:hidden p-2"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
