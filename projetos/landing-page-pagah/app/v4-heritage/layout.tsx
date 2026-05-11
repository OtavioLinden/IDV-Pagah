import { Ubuntu, Ubuntu_Mono, Fraunces } from "next/font/google";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import AmbientBackground from "@/components/v4/AmbientBackground";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-v4-body",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-v4-mono",
  display: "swap",
});

// Editorial serif — variable font with optical-size axis (proxy for Pagah Scale VF).
// Used sparingly: section eyebrows, pull quotes, capitulares. Anti-AI-template signal.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-v4-serif",
  display: "swap",
});

export const metadata = {
  title: "Pagah · Heritage Refined · Checkout, Call Center e Juros",
  description:
    "Identidade Pagah elevada: checkout, call center e participação nos juros do parcelamento para quem vende produto físico em escala.",
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${ubuntu.variable} ${ubuntuMono.variable} ${fraunces.variable}`}
      style={
        {
          // Pagah official brand surfaces (preserved exact)
          "--bg-base": "#F2F2F2",
          "--bg-card": "#FFFFFF",
          "--bg-card-dark": "#1C1C1C",
          "--bg-card-dark-elevated": "#252525",
          "--accent": "#F1E52F",
          // Tinted neutrals in OKLCH (chroma 0.005-0.012 toward yellow hue 99)
          "--text-primary": "oklch(0.235 0.006 99)",
          "--text-secondary": "oklch(0.45 0.005 99)",
          "--text-tertiary": "oklch(0.235 0.006 99 / 0.5)",
          "--text-on-dark": "oklch(0.985 0.004 99)",
          "--text-on-dark-secondary": "oklch(0.985 0.004 99 / 0.65)",
          "--accent-soft": "oklch(0.92 0.18 102 / 0.12)",
          "--border-subtle": "oklch(0.86 0.004 99)",
          "--border-card": "oklch(0.86 0.004 99 / 0.6)",
          "--border-on-dark": "oklch(0.985 0.004 99 / 0.08)",
          "--success": "oklch(0.62 0.16 145)",
          "--success-soft": "oklch(0.62 0.16 145 / 0.12)",
          "--error": "oklch(0.58 0.21 27)",
          "--error-soft": "oklch(0.58 0.21 27 / 0.1)",
          "--warning": "oklch(0.74 0.16 70)",
          "--processing": "oklch(0.55 0.21 260)",
          // Shadows tinted toward Pagah yellow (subtle warmth, not generic neutral)
          "--shadow-card":
            "0 1px 2px oklch(0.3 0.04 99 / 0.05), 0 4px 16px -4px oklch(0.3 0.04 99 / 0.07)",
          "--shadow-card-hover":
            "0 2px 4px oklch(0.3 0.04 99 / 0.06), 0 14px 36px -10px oklch(0.3 0.04 99 / 0.12)",
          "--shadow-dark":
            "0 6px 28px -8px oklch(0.18 0.02 99 / 0.22), 0 1px 2px oklch(0.18 0.02 99 / 0.08)",
          "--shadow-accent":
            "0 4px 14px -4px oklch(0.92 0.18 102 / 0.5)",
          "--shadow-accent-hover":
            "0 10px 28px -6px oklch(0.92 0.18 102 / 0.6)",
        } as React.CSSProperties
      }
    >
      <style>{`
        .v4-root {
          font-family: var(--font-v4-body), system-ui, sans-serif;
          background: var(--bg-base);
          color: var(--text-primary);
          font-feature-settings: "ss01";
          letter-spacing: -0.005em;
        }
        .v4-root h1, .v4-root h2 {
          text-wrap: balance;
        }
        .v4-root p {
          text-wrap: pretty;
        }
        .v4-mono {
          font-family: var(--font-v4-mono), monospace;
        }
        .v4-serif {
          font-family: var(--font-v4-serif), "Fraunces", Georgia, serif;
          font-feature-settings: "ss01", "ss02";
        }
        /* Editorial underline — replaces the SaaS-cliché "marca-texto amarelo".
           A thick yellow underline that sits beneath the descender, like a
           hand-drawn editor's mark. */
        .v4-underline-accent {
          position: relative;
          white-space: nowrap;
          padding: 0 2px;
        }
        .v4-underline-accent::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0.08em;
          height: 0.32em;
          background: var(--accent);
          z-index: -1;
          border-radius: 1px;
        }
        /* Editorial dropcap (capitulares estilo NYT/FT) */
        .v4-dropcap::first-letter {
          font-family: var(--font-v4-serif), Georgia, serif;
          font-weight: 600;
          font-size: 3.4em;
          line-height: 0.88;
          float: left;
          padding: 0.06em 0.12em 0 0;
          color: var(--text-primary);
        }
        /* Hairline section divider — broadsheet style */
        .v4-section-rule {
          border: 0;
          border-top: 1px solid var(--border-subtle);
          margin: 0;
        }
        .v4-section-rule--accent {
          border: 0;
          border-top: 2px solid var(--accent);
          width: 48px;
          margin: 0 0 24px 0;
        }
        .v4-card {
          background: var(--bg-card);
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          padding: 28px;
          border: 1px solid var(--border-card);
          transition: box-shadow 240ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .v4-card:hover {
          box-shadow: var(--shadow-card-hover);
        }
        .v4-card-dark {
          background: var(--bg-card-dark);
          color: var(--text-on-dark);
          border-radius: 16px;
          box-shadow: var(--shadow-dark);
          padding: 28px;
          position: relative;
          isolation: isolate;
        }
        /* Premium 1px inner highlight + accent gradient wash on dark cards */
        .v4-card-dark::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            180deg,
            oklch(0.985 0.004 99 / 0.08) 0%,
            oklch(0.985 0.004 99 / 0) 38%
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
        }
        .v4-card-dark::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            120% 80% at 100% 0%,
            oklch(0.92 0.18 102 / 0.06) 0%,
            transparent 55%
          );
          pointer-events: none;
          z-index: 0;
        }
        .v4-card-dark > * {
          position: relative;
          z-index: 2;
        }
        .v4-tabular {
          font-variant-numeric: tabular-nums;
        }
        .v4-yellow-strip {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: var(--accent);
          z-index: 60;
        }
        .v4-root a:focus-visible,
        .v4-root button:focus-visible {
          outline: 2px solid var(--text-primary);
          outline-offset: 2px;
          border-radius: 6px;
        }
        .v4-root a,
        .v4-root button {
          touch-action: manipulation;
        }
        @keyframes v4-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.78); }
        }
        @keyframes v4-pulse-ring {
          0% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(1);
          }
          70% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2.6);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2.6);
          }
        }
        .v4-pulse-dot {
          animation: v4-pulse-dot 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          position: relative;
        }
        .v4-pulse-dot::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          background: inherit;
          opacity: 0.4;
          transform: translate(-50%, -50%) scale(1);
          animation: v4-pulse-ring 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .v4-pulse-dot,
          .v4-pulse-dot::after { animation: none; }
          .v4-pulse-dot::after { display: none; }
          .v4-root *,
          .v4-root *::before,
          .v4-root *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      <AmbientBackground />
      <div className="v4-yellow-strip" aria-hidden="true" />
      <main className="v4-root min-h-screen">{children}</main>
      <VersionSwitcher />
    </div>
  );
}
