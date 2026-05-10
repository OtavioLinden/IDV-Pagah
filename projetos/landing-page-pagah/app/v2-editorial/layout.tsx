import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import VersionSwitcher from "@/components/shared/VersionSwitcher";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
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
          // OKLCH neutrals tinted toward brand hue (h=100, yellow #F1E52F).
          // Chroma stays in 0.005-0.008 so neutrals read truly neutral
          // but breathe with the brand instead of being clinical.
          "--bg-base": "oklch(98.2% 0.005 100)",
          "--bg-elevated": "oklch(99.4% 0.003 100)",
          "--bg-contrast": "oklch(15.5% 0.006 100)",
          "--text-primary": "oklch(17% 0.008 100)",
          "--text-secondary": "oklch(17% 0.008 100 / 0.62)",
          "--text-tertiary": "oklch(17% 0.008 100 / 0.42)",
          "--text-on-contrast": "oklch(98.2% 0.005 100)",
          "--text-on-contrast-secondary": "oklch(98.2% 0.005 100 / 0.58)",
          "--accent": "#F1E52F",
          "--border-subtle": "oklch(17% 0.008 100 / 0.08)",
          "--border-medium": "oklch(17% 0.008 100 / 0.16)",
          "--border-on-contrast": "oklch(98.2% 0.005 100 / 0.14)",
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
          touch-action: manipulation;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .v2-btn-primary:hover { background: var(--accent); color: var(--text-primary); }
        .v2-btn-primary:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }
        .v2-btn-secondary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: transparent; color: var(--text-primary);
          border: 2px solid var(--text-primary);
          touch-action: manipulation;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .v2-btn-secondary:hover { background: var(--text-primary); color: var(--text-on-contrast); }
        .v2-btn-secondary:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }
        .v2-btn-on-contrast {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: var(--accent); color: var(--text-primary);
          border: 2px solid var(--accent);
          touch-action: manipulation;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .v2-btn-on-contrast:hover { background: transparent; color: var(--accent); }
        .v2-btn-on-contrast:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }
        .v2-btn-ghost-on-contrast {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: transparent; color: var(--text-on-contrast);
          border: 2px solid var(--text-on-contrast);
          touch-action: manipulation;
          transition: background-color 220ms ease, color 220ms ease;
        }
        .v2-btn-ghost-on-contrast:hover { background: var(--text-on-contrast); color: var(--text-primary); }
        .v2-btn-ghost-on-contrast:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }
        @media (prefers-reduced-motion: reduce) {
          .v2-btn-primary,
          .v2-btn-secondary,
          .v2-btn-on-contrast,
          .v2-btn-ghost-on-contrast {
            transition: none;
          }
          .v2-root *,
          .v2-root *::before,
          .v2-root *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      <main className="v2-root min-h-screen antialiased">{children}</main>
      <VersionSwitcher />
    </div>
  );
}
