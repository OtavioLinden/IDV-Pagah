"use client";
import Link from "next/link";
import Image from "next/image";
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
              <Image
                src="/brand/logo-principal.png"
                alt={meta.brand}
                width={140}
                height={40}
                className="h-9 w-auto"
              />
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
                  aria-label={`Enviar e-mail para ${footer.contact.email}`}
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
                  aria-label={`Abrir WhatsApp ${footer.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
          <p
            className="text-[12px] v4-tabular"
            style={{ color: "var(--text-tertiary)" }}
          >
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
