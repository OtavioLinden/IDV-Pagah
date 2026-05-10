"use client";
import Link from "next/link";
import { footer, meta } from "@/content/landing";

export default function V4Footer() {
  return (
    <footer
      id="contato"
      className="relative"
      style={{ background: "var(--bg-card)" }}
    >
      {/* Yellow strip - mirror of top */}
      <div
        className="h-[6px]"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-14">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-5"
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
              <span className="text-[19px] font-bold tracking-tight">
                {meta.brand}
              </span>
            </Link>
            <p
              className="text-[15px] leading-relaxed max-w-md mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {footer.tagline}
            </p>
            <p
              className="v4-mono uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.16em",
                color: "var(--text-primary)",
                background: "var(--accent)",
                padding: "4px 8px",
                display: "inline-block",
                fontWeight: 700,
              }}
            >
              {meta.position}
            </p>
          </div>

          <div>
            <h3
              className="v4-mono uppercase mb-5"
              style={{
                fontSize: "11px",
                letterSpacing: "0.16em",
                color: "var(--text-secondary)",
              }}
            >
              Navegação
            </h3>
            <ul className="space-y-3">
              {footer.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[14px] transition-colors"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="v4-mono uppercase mb-5"
              style={{
                fontSize: "11px",
                letterSpacing: "0.16em",
                color: "var(--text-secondary)",
              }}
            >
              Contato
            </h3>
            <ul
              className="space-y-4 text-[14px]"
              style={{ color: "var(--text-primary)" }}
            >
              <li>
                <span
                  className="block v4-mono uppercase mb-1"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "var(--text-tertiary)",
                  }}
                >
                  E-mail
                </span>
                <a
                  href={`mailto:${footer.contact.email}`}
                  style={{ color: "var(--text-primary)" }}
                >
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <span
                  className="block v4-mono uppercase mb-1"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "var(--text-tertiary)",
                  }}
                >
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/${footer.contact.whatsapp.replace(/\D/g, "")}`}
                  className="v4-tabular"
                  style={{ color: "var(--text-primary)" }}
                >
                  {footer.contact.whatsapp}
                </a>
              </li>
              <li>
                <span
                  className="block v4-mono uppercase mb-1"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "var(--text-tertiary)",
                  }}
                >
                  Endereço
                </span>
                <span style={{ color: "var(--text-secondary)" }}>
                  {footer.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border-card)" }}
        >
          <p className="text-[12px]" style={{ color: "var(--text-tertiary)" }}>
            © 2026 Pagah · Todos os direitos reservados
          </p>
          <p
            className="v4-mono uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
            }}
          >
            Venda depois da venda.
          </p>
        </div>
      </div>
    </footer>
  );
}
