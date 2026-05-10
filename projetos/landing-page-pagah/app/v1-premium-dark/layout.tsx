import { Geist, Geist_Mono } from "next/font/google";
import VersionSwitcher from "@/components/shared/VersionSwitcher";

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
          "--bg-base": "#0A0A0A",
          "--bg-elevated": "#131314",
          "--bg-card": "#161618",
          "--border-subtle": "rgba(255,255,255,0.06)",
          "--border-glass": "rgba(255,255,255,0.1)",
          "--text-primary": "#F5F5F5",
          "--text-secondary": "rgba(245,245,245,0.6)",
          "--text-tertiary": "rgba(245,245,245,0.4)",
          "--accent": "#F1E52F",
          "--accent-glow": "rgba(241,229,47,0.5)",
        } as React.CSSProperties
      }
    >
      <style>{`
        .v1-root { font-family: var(--font-v1-display), sans-serif; background: var(--bg-base); color: var(--text-primary); }
        .v1-mono { font-family: var(--font-v1-mono), monospace; }
        .v1-glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid var(--border-glass); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08); }
        .v1-halo::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 75% 25%, var(--accent-glow) 0%, transparent 35%); pointer-events: none; opacity: 0.3; }
        @keyframes v1-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .v1-shimmer-text { background: linear-gradient(90deg, var(--text-primary) 0%, var(--accent) 50%, var(--text-primary) 100%); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: v1-shimmer 6s linear infinite; }
      `}</style>
      <main className="v1-root min-h-screen">{children}</main>
      <VersionSwitcher />
    </div>
  );
}
