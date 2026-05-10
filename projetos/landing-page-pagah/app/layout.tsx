import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-base",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pagah — Checkout + Call Center + Juros do Parcelamento",
  description:
    "Plataforma de checkout, call center integrado e repasse de juros do parcelamento para produtores de produtos físicos.",
  metadataBase: new URL("https://pagah.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={interTight.variable}>
      <body className="font-[family-name:var(--font-base)] antialiased">
        {children}
      </body>
    </html>
  );
}
