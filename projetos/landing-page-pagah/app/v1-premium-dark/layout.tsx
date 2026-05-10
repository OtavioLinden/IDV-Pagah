import { Geist, Geist_Mono } from "next/font/google";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import AmbientBackground from "@/components/v1/AmbientBackground";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-v1-display",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-v1-mono",
  display: "swap",
});

export const metadata = {
  title: "Pagah · Premium Fintech — Checkout, Call Center e Juros",
  description:
    "Checkout, call center e participação nos juros do parcelamento — feito para quem vende produto físico em escala.",
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={
        {
          // OKLCH palette tinted toward brand yellow (hue ~95).
          // Neutrals carry chroma 0.005-0.015 so #000/#fff never appear.
          "--bg-base": "oklch(0.10 0.005 95)",
          "--bg-elevated": "oklch(0.135 0.006 95)",
          "--bg-card": "oklch(0.155 0.007 95)",
          "--border-subtle": "oklch(1 0.01 95 / 0.06)",
          "--border-glass": "oklch(1 0.012 95 / 0.10)",
          "--border-hairline": "oklch(1 0.014 95 / 0.14)",
          "--text-primary": "oklch(0.965 0.005 95)",
          "--text-secondary": "oklch(0.965 0.005 95 / 0.62)",
          "--text-tertiary": "oklch(0.965 0.005 95 / 0.42)",
          "--accent": "oklch(0.913 0.166 100)", // #F1E52F in OKLCH
          "--accent-soft": "oklch(0.913 0.166 100 / 0.45)",
          "--accent-glow": "oklch(0.913 0.166 100 / 0.50)",
          "--surface-tint": "oklch(1 0.012 95 / 0.025)",
          "--surface-tint-hover": "oklch(1 0.014 95 / 0.045)",
        } as React.CSSProperties
      }
    >
      <style>{`
        .v1-root { font-family: var(--font-v1-display), sans-serif; background: transparent; color: var(--text-primary); position: relative; z-index: 0; }
        .v1-mono { font-family: var(--font-v1-mono), monospace; font-feature-settings: "ss01", "cv11"; }
        /* Liquid-glass refraction: outer hairline + inner highlight + bottom inset shadow */
        .v1-glass {
          background: var(--surface-tint);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid var(--border-glass);
          box-shadow:
            inset 0 1px 0 oklch(1 0.012 95 / 0.09),
            inset 0 -1px 0 oklch(1 0.014 95 / 0.025),
            0 1px 0 oklch(0 0 0 / 0.4),
            0 24px 48px -24px oklch(0 0 0 / 0.5);
        }
        .v1-glass-hover { transition: background 320ms cubic-bezier(0.22, 1, 0.36, 1), border-color 320ms cubic-bezier(0.22, 1, 0.36, 1), transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1); }
        .v1-glass-hover:hover {
          background: var(--surface-tint-hover);
          border-color: var(--border-hairline);
          transform: translateY(-2px);
          box-shadow:
            inset 0 1px 0 oklch(1 0.014 95 / 0.12),
            inset 0 -1px 0 oklch(1 0.014 95 / 0.03),
            0 1px 0 oklch(0 0 0 / 0.4),
            0 32px 56px -24px oklch(0 0 0 / 0.55),
            0 0 0 1px oklch(0.913 0.166 100 / 0.06),
            0 24px 48px -16px oklch(0.913 0.166 100 / 0.10);
        }
        .v1-halo::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 75% 25%, var(--accent-glow) 0%, transparent 35%); pointer-events: none; opacity: 0.28; }
        /* Replaced gradient-text shimmer with a static, weight-led emphasis. Underline cap for accent run. */
        .v1-accent { color: var(--accent); }
        .v1-accent-underscore { position: relative; color: var(--accent); white-space: nowrap; }
        .v1-accent-underscore::after { content: ""; position: absolute; left: 0; right: 0; bottom: -0.04em; height: 0.06em; background: var(--accent); opacity: 0.35; border-radius: 2px; }
        @media (prefers-reduced-motion: reduce) {
          .v1-glass-hover { transition: none; }
          .v1-glass-hover:hover { transform: none; }
        }
      `}</style>
      <AmbientBackground />
      <main className="v1-root min-h-screen">{children}</main>
      <VersionSwitcher />
    </div>
  );
}
