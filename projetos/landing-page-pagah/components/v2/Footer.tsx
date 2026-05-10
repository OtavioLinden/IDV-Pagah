import Image from "next/image";
import { footer } from "@/content/landing";

export default function V2Footer() {
  return (
    <footer
      id="contato"
      className="relative pt-24 md:pt-32 pb-12"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Massive logo */}
        <div className="border-t-2 border-[var(--text-primary)] pt-10 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/brand/icon-grey-rounded.svg"
              alt=""
              width={80}
              height={80}
              className="size-16 md:size-20"
            />
          </div>
          <p
            className="v2-display font-extrabold lowercase"
            style={{
              fontSize: "clamp(120px, 22vw, 360px)",
              letterSpacing: "-0.06em",
              lineHeight: 0.85,
            }}
          >
            pagah
            <span style={{ color: "var(--accent)" }}>.</span>
          </p>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mt-6 leading-snug">
            {footer.tagline}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <span className="v2-kicker text-[var(--text-tertiary)] block mb-4">
              Contato
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li className="v2-tabular">{footer.contact.whatsapp}</li>
              <li className="text-[var(--text-secondary)] leading-relaxed">
                {footer.contact.address}
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="v2-kicker text-[var(--text-tertiary)] block mb-4">
              Navegação
            </span>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {footer.links.slice(0, 7).map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="v2-kicker text-[var(--text-tertiary)] block mb-4">
              Legal
            </span>
            <ul className="space-y-2 text-sm">
              {footer.links.slice(7).map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-medium)] pt-6 flex flex-wrap items-baseline justify-between gap-4">
          <span className="v2-kicker text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} Pagah · Todos os direitos reservados
          </span>
          <span className="v2-kicker text-[var(--text-tertiary)] v2-tabular">
            Edição B · Editorial
          </span>
        </div>
      </div>
    </footer>
  );
}
