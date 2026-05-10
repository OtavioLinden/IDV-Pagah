import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import VersionSwitcher from "@/components/shared/VersionSwitcher";

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

export const metadata = {
  title: "Pagah · Heritage Refined — Checkout, Call Center e Juros",
  description:
    "Identidade Pagah elevada — checkout, call center e participação nos juros do parcelamento para quem vende produto físico em escala.",
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${ubuntu.variable} ${ubuntuMono.variable}`}
      style={
        {
          "--bg-base": "#F2F2F2",
          "--bg-card": "#FFFFFF",
          "--bg-card-dark": "#1C1C1C",
          "--bg-card-dark-elevated": "#252525",
          "--text-primary": "#1C1C1C",
          "--text-secondary": "#575756",
          "--text-tertiary": "rgba(28,28,28,0.5)",
          "--text-on-dark": "#FFFFFF",
          "--text-on-dark-secondary": "rgba(255,255,255,0.65)",
          "--accent": "#F1E52F",
          "--accent-soft": "rgba(241,229,47,0.12)",
          "--border-subtle": "#DADADA",
          "--border-card": "rgba(218,218,218,0.6)",
          "--border-on-dark": "rgba(255,255,255,0.08)",
          "--success": "#16A34A",
          "--success-soft": "rgba(22,163,74,0.12)",
          "--error": "#DC2626",
          "--error-soft": "rgba(220,38,38,0.1)",
          "--warning": "#F59E0B",
          "--processing": "#2563EB",
          "--shadow-card":
            "0 1px 2px rgba(28,28,28,0.04), 0 4px 16px -4px rgba(28,28,28,0.06)",
          "--shadow-card-hover":
            "0 2px 4px rgba(28,28,28,0.05), 0 12px 32px -8px rgba(28,28,28,0.1)",
          "--shadow-dark":
            "0 4px 24px -6px rgba(28,28,28,0.18), 0 1px 2px rgba(28,28,28,0.06)",
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
        .v4-mono {
          font-family: var(--font-v4-mono), monospace;
        }
        .v4-card {
          background: var(--bg-card);
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          padding: 28px;
          border: 1px solid var(--border-card);
        }
        .v4-card-dark {
          background: var(--bg-card-dark);
          color: var(--text-on-dark);
          border-radius: 16px;
          box-shadow: var(--shadow-dark);
          padding: 28px;
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
        @keyframes v4-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .v4-pulse-dot {
          animation: v4-pulse-dot 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .v4-pulse-dot { animation: none; }
        }
      `}</style>
      <div className="v4-yellow-strip" aria-hidden="true" />
      <main className="v4-root min-h-screen">{children}</main>
      <VersionSwitcher />
    </div>
  );
}
