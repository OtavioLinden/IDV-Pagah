import { Onest, JetBrains_Mono } from "next/font/google";
import VersionSwitcher from "@/components/shared/VersionSwitcher";
import V3MotionProvider from "@/components/v3/MotionProvider";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-v3-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-v3-mono",
  display: "swap",
});

export const metadata = {
  title: "Pagah · Living Tech — Dashboard que respira",
  description:
    "Checkout, call center e juros do parcelamento em um sistema vivo. A operação inteira em um painel que pulsa em tempo real.",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${onest.variable} ${jetbrains.variable}`}
      style={
        {
          // OKLCH neutrals tinted toward brand hue (~96deg, very low chroma)
          "--bg-base": "oklch(0.16 0.006 96)",
          "--bg-tile": "oklch(0.205 0.008 96)",
          "--bg-tile-elevated": "oklch(0.235 0.01 96)",
          "--bg-tile-warm": "oklch(0.225 0.014 96)",
          "--border-subtle": "oklch(1 0 0 / 0.055)",
          "--border-inner-hi": "oklch(1 0 0 / 0.065)",
          "--border-glow": "oklch(0.92 0.18 96 / 0.22)",
          "--text-primary": "oklch(0.965 0.005 96)",
          "--text-secondary": "oklch(0.965 0.005 96 / 0.62)",
          "--text-tertiary": "oklch(0.965 0.005 96 / 0.42)",
          "--accent": "#F1E52F",
          "--accent-soft": "#C9BF28",
        } as React.CSSProperties
      }
    >
      <style>{`
        .v3-root {
          font-family: var(--font-v3-display), system-ui, sans-serif;
          background: var(--bg-base);
          color: var(--text-primary);
          font-feature-settings: "cv11";
        }
        .v3-mono { font-family: var(--font-v3-mono), ui-monospace, monospace; }
        .v3-num { font-variant-numeric: tabular-nums; font-feature-settings: "tnum"; }

        .v3-tile {
          position: relative;
          background: var(--bg-tile);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          /* Liquid glass refraction: inner 1px top highlight + faint bottom shade */
          box-shadow:
            inset 0 1px 0 0 var(--border-inner-hi),
            inset 0 -1px 0 0 oklch(0 0 0 / 0.25);
          transition: border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .v3-tile:hover {
          border-color: var(--border-glow);
          background: var(--bg-tile-elevated);
          box-shadow:
            inset 0 1px 0 0 oklch(1 0 0 / 0.1),
            inset 0 -1px 0 0 oklch(0 0 0 / 0.3),
            0 14px 40px -22px oklch(0.92 0.18 96 / 0.45);
        }
        /* Warm tint variant — for personality differentiation */
        .v3-tile-warm {
          background: var(--bg-tile-warm);
        }
        .v3-tile-elevated {
          background: var(--bg-tile-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          box-shadow:
            inset 0 1px 0 0 var(--border-inner-hi),
            inset 0 -1px 0 0 oklch(0 0 0 / 0.25);
        }
        .v3-tile-amber {
          background: linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%);
          color: #0F0F10;
          border-radius: 18px;
          box-shadow:
            inset 0 1px 0 0 oklch(1 0 0 / 0.32),
            inset 0 -1px 0 0 oklch(0 0 0 / 0.18);
        }

        /* Magnetic micro-physics — applied via :hover on the inner content */
        .v3-magnet > * {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .v3-magnet:hover > * {
          transform: translateY(-1px);
        }

        .v3-status-dot {
          position: relative;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: var(--accent);
        }
        .v3-status-dot::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          background: var(--accent);
          opacity: 0.4;
          animation: v3-ping 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes v3-ping {
          0% { transform: scale(1); opacity: 0.4; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }

        @keyframes v3-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .v3-shimmer-bg {
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(241,229,47,0.08) 45%,
            rgba(241,229,47,0.18) 50%,
            rgba(241,229,47,0.08) 55%,
            transparent 70%
          );
          background-size: 200% 100%;
          animation: v3-shimmer 5s linear infinite;
        }

        .v3-grid-bg {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        .v3-glow-ring {
          box-shadow:
            0 0 0 1px rgba(241,229,47,0.18),
            0 18px 50px -12px rgba(241,229,47,0.35),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .v3-root :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: 6px;
        }

        @media (prefers-reduced-motion: reduce) {
          .v3-status-dot::after {
            animation: none;
          }
          .v3-shimmer-bg {
            animation: none;
            background: linear-gradient(
              105deg,
              transparent 30%,
              rgba(241,229,47,0.12) 50%,
              transparent 70%
            );
          }
          .v3-tile,
          .v3-magnet > * {
            transition: none;
          }
          .v3-magnet:hover > * {
            transform: none;
          }
        }
      `}</style>
      <V3MotionProvider>
        <main className="v3-root min-h-screen">{children}</main>
      </V3MotionProvider>
      <VersionSwitcher />
    </div>
  );
}
