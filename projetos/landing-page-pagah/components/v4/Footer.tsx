"use client";
import Link from "next/link";
import { footer } from "@/content/landing";

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
              <img
                src="/brand/icon-yellow-rounded.svg"
                alt=""
                aria-hidden="true"
                className="h-9 w-9"
              />
              <span
                className="v4-serif"
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "28px",
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  lineHeight: 1,
                }}
              >
                pagah
              </span>
            </Link>
            <p
              className="text-[15px] leading-relaxed max-w-md mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {footer.tagline}
            </p>
            <div
              className="v4-mono"
              style={{
                fontSize: "11px",
                lineHeight: 1.7,
                color: "var(--text-tertiary)",
                letterSpacing: "0.02em",
              }}
            >
              <div style={{ color: "var(--text-secondary)" }}>
                Pagah Tecnologia em Pagamentos Ltda.
              </div>
              <div>Av. Carlos Gomes, 700 · 5º andar · Boa Vista</div>
              <div>Porto Alegre · RS · 90480-000</div>
              <div className="v4-tabular">CNPJ 00.000.000/0001-00</div>
            </div>
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
            className="v4-serif"
            style={{
              fontStyle: "italic",
              fontSize: "13px",
              color: "var(--text-secondary)",
              letterSpacing: "-0.005em",
            }}
          >
            Venda depois da venda.
          </p>
        </div>
      </div>
    </footer>
  );
}
