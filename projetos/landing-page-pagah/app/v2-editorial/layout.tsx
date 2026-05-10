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
          /* Motion tokens — editorial cadence (Krehel-leaning).
           * Expressive but never showy: out-expo for entrances,
           * smooth in-out for polish, snappy for hovers.
           */
          --motion-dur-fast: 220ms;
          --motion-dur-medium: 320ms;
          --motion-dur-slow: 460ms;
          --motion-ease-out-expressive: cubic-bezier(0.22, 1, 0.36, 1);
          --motion-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
          --motion-ease-emphasized: cubic-bezier(0.2, 0.8, 0.2, 1);
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

        /* Editorial card lift — subtle Krehel-style hover.
         * Translate is GPU-cheap. Shadow goes from flat to a soft
         * 2-layer lift; pairs with light borders the components own.
         * Duration is editorial (320ms) but eased so the rest happens fast.
         */
        .v2-card-lift {
          transition:
            transform var(--motion-dur-medium) var(--motion-ease-out-expressive),
            box-shadow var(--motion-dur-medium) var(--motion-ease-out-expressive),
            border-color var(--motion-dur-fast) var(--motion-ease-in-out);
          will-change: transform;
        }
        @media (hover: hover) {
          .v2-card-lift:hover {
            transform: translateY(-3px);
            box-shadow:
              0 1px 0 0 rgba(17, 17, 17, 0.04),
              0 8px 16px -8px rgba(17, 17, 17, 0.10),
              0 18px 40px -16px rgba(17, 17, 17, 0.10);
          }
          .v2-card-lift-on-contrast:hover {
            transform: translateY(-3px);
            box-shadow:
              0 1px 0 0 rgba(255, 255, 255, 0.05),
              0 8px 16px -8px rgba(0, 0, 0, 0.45),
              0 18px 40px -16px rgba(0, 0, 0, 0.45);
          }
        }

        /* Editorial text reveal — masked rise.
         * Used on hero/finalCta gigantic display headlines.
         * The animation is keyframe-based but plays once, off the
         * critical interaction path, so interruption isn't a concern.
         */
        @keyframes v2-text-rise {
          0% {
            transform: translateY(105%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        .v2-text-mask {
          display: inline-block;
          overflow: hidden;
          padding-block: 0.05em; /* descenders + headroom for clamp */
          line-height: inherit;
          vertical-align: bottom;
        }
        .v2-text-mask > span {
          display: inline-block;
          transform: translateY(105%);
          animation: v2-text-rise var(--motion-dur-slow) var(--motion-ease-out-expressive) forwards;
          animation-delay: var(--v2-mask-delay, 0ms);
        }

        .v2-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.95rem 1.4rem; font-size: 14px; font-weight: 600;
          background: var(--text-primary); color: var(--text-on-contrast);
          border: 2px solid var(--text-primary);
          touch-action: manipulation;
          transition:
            background-color var(--motion-dur-fast) var(--motion-ease-in-out),
            color var(--motion-dur-fast) var(--motion-ease-in-out),
            transform 120ms var(--motion-ease-in-out);
        }
        .v2-btn-primary:hover { background: var(--accent); color: var(--text-primary); }
        .v2-btn-primary:active { transform: scale(0.98); }
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
          transition:
            background-color var(--motion-dur-fast) var(--motion-ease-in-out),
            color var(--motion-dur-fast) var(--motion-ease-in-out),
            transform 120ms var(--motion-ease-in-out);
        }
        .v2-btn-secondary:hover { background: var(--text-primary); color: var(--text-on-contrast); }
        .v2-btn-secondary:active { transform: scale(0.98); }
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
          transition:
            background-color var(--motion-dur-fast) var(--motion-ease-in-out),
            color var(--motion-dur-fast) var(--motion-ease-in-out),
            transform 120ms var(--motion-ease-in-out);
        }
        .v2-btn-on-contrast:hover { background: transparent; color: var(--accent); }
        .v2-btn-on-contrast:active { transform: scale(0.98); }
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
          transition:
            background-color var(--motion-dur-fast) var(--motion-ease-in-out),
            color var(--motion-dur-fast) var(--motion-ease-in-out),
            transform 120ms var(--motion-ease-in-out);
        }
        .v2-btn-ghost-on-contrast:hover { background: var(--text-on-contrast); color: var(--text-primary); }
        .v2-btn-ghost-on-contrast:active { transform: scale(0.98); }
        .v2-btn-ghost-on-contrast:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }
        @media (prefers-reduced-motion: reduce) {
          .v2-btn-primary,
          .v2-btn-secondary,
          .v2-btn-on-contrast,
          .v2-btn-ghost-on-contrast,
          .v2-card-lift {
            transition: none;
          }
          .v2-card-lift:hover {
            transform: none;
            box-shadow: none;
          }
          .v2-text-mask > span {
            animation: none;
            transform: none;
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
