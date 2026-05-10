import { Onest, JetBrains_Mono } from "next/font/google";

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
          "--bg-base": "#0F0F10",
          "--bg-tile": "#1A1A1C",
          "--bg-tile-elevated": "#1F1F22",
          "--border-subtle": "rgba(255,255,255,0.05)",
          "--border-glow": "rgba(241,229,47,0.2)",
          "--text-primary": "#F5F5F5",
          "--text-secondary": "rgba(245,245,245,0.6)",
          "--text-tertiary": "rgba(245,245,245,0.4)",
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
          font-feature-settings: "ss01", "cv11";
        }
        .v3-mono { font-family: var(--font-v3-mono), ui-monospace, monospace; }
        .v3-num { font-variant-numeric: tabular-nums; font-feature-settings: "tnum"; }

        .v3-tile {
          background: var(--bg-tile);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .v3-tile:hover {
          border-color: var(--border-glow);
          background: var(--bg-tile-elevated);
        }
        .v3-tile-elevated {
          background: var(--bg-tile-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
        }
        .v3-tile-amber {
          background: linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%);
          color: #0F0F10;
          border-radius: 18px;
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
      `}</style>
      <main className="v3-root min-h-screen">{children}</main>
    </div>
  );
}
