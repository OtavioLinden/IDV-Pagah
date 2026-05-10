import Link from "next/link";
import Image from "next/image";
import { footer, meta } from "@/content/landing";

export default function V1Footer() {
  return (
    <footer
      id="contato"
      className="relative pt-20 pb-10 border-t border-[var(--border-subtle)]"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(255,255,255,0.01))",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/brand/icon-yellow-rounded.svg"
                alt="Pagah"
                width={32}
                height={32}
                className="size-8"
              />
              <span
                className="text-lg font-medium tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                {meta.brand}
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] max-w-md">
              {footer.tagline}
            </p>
            <p
              className="mt-6 v1-mono text-xs tracking-[0.18em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              {meta.position}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] opacity-50 mb-5 v1-mono">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footer.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] opacity-50 mb-5 v1-mono">
              Contato
            </h3>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li>
                <span className="block text-[10px] uppercase tracking-[0.15em] opacity-60 mb-1">
                  E-mail
                </span>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-[0.15em] opacity-60 mb-1">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/${footer.contact.whatsapp.replace(/\D/g, "")}`}
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  {footer.contact.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-[0.15em] opacity-60 mb-1">
                  Endereço
                </span>
                <span>{footer.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-tertiary)]">
            © 2026 Pagah · Todos os direitos reservados
          </p>
          <p
            className="v1-mono text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Venda depois da venda.
          </p>
        </div>
      </div>
    </footer>
  );
}
