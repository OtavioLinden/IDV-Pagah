import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-v2-display",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-v2-body",
  display: "swap",
});

export const metadata = {
  title: "Pagah · Editorial — Checkout, Call Center e Juros do Parcelamento",
  description:
    "Uma plataforma de pagamento que continua vendendo depois da venda. Para quem produz produto físico em escala.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${bricolage.variable} ${interTight.variable}`}
      style={
        {
          "--bg-base": "#FAFAFA",
          "--bg-elevated": "#FFFFFF",
          "--bg-contrast": "#0A0A0A",
          "--text-primary": "#0A0A0A",
          "--text-secondary": "rgba(10,10,10,0.6)",
          "--text-tertiary": "rgba(10,10,10,0.4)",
          "--text-on-contrast": "#FAFAFA",
          "--text-on-contrast-secondary": "rgba(250,250,250,0.55)",
          "--accent": "#F1E52F",
          "--border-subtle": "rgba(10,10,10,0.08)",
          "--border-medium": "rgba(10,10,10,0.15)",
          "--border-on-contrast": "rgba(250,250,250,0.12)",
        } as React.CSSProperties
      }
    >
      <style>{`
        .v2-root {
          font-family: var(--font-v2-body), system-ui, sans-serif;
          background: var(--bg-base);
          color: var(--text-primary);
          font-feature-settings: "ss01", "cv01";
        }
        .v2-display {
          font-family: var(--font-v2-display), Georgia, serif;
          letter-spacing: -0.04em;
          line-height: 0.92;
          text-wrap: balance;
        }
        .v2-kicker {
          font-family: var(--font-v2-body), system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
        }
        .v2-num {
          font-family: var(--font-v2-display), Georgia, serif;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.04em;
        }
        .v2-tabular { font-variant-numeric: tabular-nums; }
        .v2-rule { border-top: 1px solid var(--border-medium); }
        .v2-rule-thick { border-top: 2px solid var(--text-primary); }
        .v2-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: var(--text-primary); color: var(--text-on-contrast);
          border: 2px solid var(--text-primary);
          transition: background-color 220ms ease, color 220ms ease, transform 220ms ease;
        }
        .v2-btn-primary:hover { background: var(--accent); color: var(--text-primary); }
        .v2-btn-secondary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: transparent; color: var(--text-primary);
          border: 2px solid var(--text-primary);
          transition: background-color 220ms ease, color 220ms ease, transform 220ms ease;
        }
        .v2-btn-secondary:hover { background: var(--text-primary); color: var(--text-on-contrast); }
        .v2-btn-on-contrast {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: var(--accent); color: var(--text-primary);
          border: 2px solid var(--accent);
          transition: background-color 220ms ease, color 220ms ease, transform 220ms ease;
        }
        .v2-btn-on-contrast:hover { background: transparent; color: var(--accent); }
        .v2-btn-ghost-on-contrast {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: transparent; color: var(--text-on-contrast);
          border: 2px solid var(--text-on-contrast);
          transition: background-color 220ms ease, color 220ms ease;
        }
        .v2-btn-ghost-on-contrast:hover { background: var(--text-on-contrast); color: var(--text-primary); }
      `}</style>
      <main className="v2-root min-h-screen antialiased">{children}</main>
    </div>
  );
}
