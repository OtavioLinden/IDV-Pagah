"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { versions } from "@/content/landing";

const previews: Record<
  string,
  {
    gradient: string;
    foreground: string;
    accent: string;
    label: string;
    fontHint: string;
    texture: React.ReactNode;
  }
> = {
  "v1-premium-dark": {
    gradient: "radial-gradient(ellipse at 75% 25%, #2a2a1a 0%, #0a0a0a 65%)",
    foreground: "#f5f5f5",
    accent: "#F1E52F",
    label: "Premium fintech · dark",
    fontHint: "Geist",
    texture: (
      <>
        <div
          className="absolute"
          style={{
            top: "18%",
            right: "18%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, #F1E52F 0%, transparent 70%)",
            filter: "blur(50px)",
            opacity: 0.55,
          }}
        />
        <div
          className="absolute"
          style={{
            top: "28%",
            right: "22%",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "1px solid rgba(241,229,47,0.35)",
            background:
              "linear-gradient(135deg, rgba(241,229,47,0.18), transparent)",
            backdropFilter: "blur(24px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 24px 48px -16px rgba(241,229,47,0.18)",
          }}
        />
        <div
          className="absolute font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{
            bottom: "14%",
            left: "8%",
            color: "rgba(245,245,245,0.45)",
          }}
        >
          /v1-premium-dark
        </div>
      </>
    ),
  },
  "v2-editorial": {
    gradient: "linear-gradient(180deg, #FAFAFA 0%, #F2F2F2 100%)",
    foreground: "#0a0a0a",
    accent: "#F1E52F",
    label: "Editorial bold · light",
    fontHint: "Bricolage Grotesque",
    texture: (
      <>
        <div
          className="absolute font-black tracking-[-0.07em] leading-[0.82]"
          style={{
            top: "-12%",
            left: "-4%",
            fontSize: "200px",
            color: "#0a0a0a",
            fontFamily: "var(--font-base)",
          }}
        >
          PAG<span style={{ color: "#F1E52F" }}>A</span>H
        </div>
        <div
          className="absolute"
          style={{
            bottom: "12%",
            left: "8%",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "rgba(10,10,10,0.45)",
            fontFamily: "monospace",
          }}
        >
          /v2-editorial
        </div>
      </>
    ),
  },
  "v3-living-tech": {
    gradient: "#0F0F10",
    foreground: "#f5f5f5",
    accent: "#F1E52F",
    label: "Living tech · bento",
    fontHint: "Onest + JetBrains",
    texture: (
      <>
        <div className="absolute inset-6 grid grid-cols-[1.4fr_1fr] grid-rows-2 gap-2">
          <div
            className="row-span-2 rounded-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #F1E52F 0%, #c9bf28 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="absolute top-3 left-3 w-2 h-2 rounded-full"
              style={{
                background: "#1C1C1C",
                boxShadow: "0 0 12px #1C1C1C",
                animation: "tilePulse 1.8s ease-in-out infinite",
              }}
            />
            <div
              className="absolute bottom-3 left-3 right-3 font-mono text-[9px] uppercase tracking-[0.18em]"
              style={{ color: "rgba(28,28,28,0.7)" }}
            >
              vivo
            </div>
          </div>
          <div
            className="rounded-xl relative"
            style={{
              background: "linear-gradient(135deg, #1f1f22 0%, #0f0f10 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="absolute bottom-2 left-3 font-mono text-[9px] uppercase tracking-[0.2em]"
              style={{ color: "rgba(245,245,245,0.4)" }}
            >
              kpi
            </div>
          </div>
          <div
            className="rounded-xl relative"
            style={{
              background: "linear-gradient(135deg, #1f1f22 0%, #0f0f10 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="absolute bottom-2 left-3 font-mono text-[9px] uppercase tracking-[0.2em]"
              style={{ color: "rgba(245,245,245,0.4)" }}
            >
              chart
            </div>
          </div>
        </div>
        <div
          className="absolute font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{
            bottom: "14%",
            right: "8%",
            color: "rgba(245,245,245,0.4)",
          }}
        >
          /v3-living-tech
        </div>
      </>
    ),
  },
  "v4-heritage": {
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #F2F2F2 100%)",
    foreground: "#1C1C1C",
    accent: "#F1E52F",
    label: "Heritage refined · brand",
    fontHint: "Ubuntu",
    texture: (
      <>
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "8px", background: "#F1E52F" }}
        />
        <div
          className="absolute rounded-2xl p-6 text-white"
          style={{
            top: "44px",
            left: "32px",
            right: "32px",
            background: "#1C1C1C",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 50px -16px rgba(0,0,0,0.28)",
          }}
        >
          <div
            className="font-mono text-[9px] uppercase tracking-[0.22em] opacity-50 mb-2"
          >
            Painel ao vivo
          </div>
          <div
            className="text-4xl font-extrabold tracking-tight tabular-nums"
            style={{ color: "#F1E52F" }}
          >
            R$ 646k
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] opacity-60 mt-1.5">
            Upsell recuperado
          </div>
          <div
            className="mt-4 h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="flex items-baseline justify-between mt-3">
            <span className="text-[11px] uppercase tracking-[0.18em] opacity-50">
              vs último mês
            </span>
            <span
              className="text-sm font-bold tabular-nums"
              style={{ color: "#F1E52F" }}
            >
              +38%
            </span>
          </div>
        </div>
        <div
          className="absolute font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{
            bottom: "12%",
            left: "8%",
            color: "rgba(28,28,28,0.45)",
          }}
        >
          /v4-heritage
        </div>
      </>
    ),
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <style>{`
        @keyframes tilePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
        @keyframes ambientGlow {
          0%, 100% { opacity: 0.5; transform: translate(0, 0) scale(1); }
          50% { opacity: 0.7; transform: translate(40px, -20px) scale(1.08); }
        }
      `}</style>

      {/* Ambient glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(800px 600px at 80% 0%, rgba(241,229,47,0.10) 0%, transparent 50%), radial-gradient(700px 500px at 0% 100%, rgba(241,229,47,0.04) 0%, transparent 60%)",
          animation: "ambientGlow 16s ease-in-out infinite",
        }}
      />

      <div className="relative">
        {/* Header */}
        <header className="px-6 sm:px-8 lg:px-16 pt-8 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/brand/icon-yellow-rounded.svg"
                alt="Pagah"
                width={40}
                height={40}
                className="size-9 sm:size-10"
                priority
              />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-mono">
                pagah landings
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[#F1E52F] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/65">
                4 propostas · escolha uma
              </span>
            </div>
          </motion.div>
        </header>

        {/* Hero */}
        <section className="px-6 sm:px-8 lg:px-16 pt-8 pb-20 max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[#F1E52F] mb-5 font-mono"
          >
            Decisão visual · v1 → v4
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[44px] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.045em] mb-6 text-balance"
          >
            Mesma copy.
            <br />
            <span className="text-[#F1E52F]">Quatro caras</span>
            <br />
            diferentes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed text-pretty"
          >
            Cada uma das quatro versões abaixo apresenta o mesmo conteúdo da
            landing da Pagah em uma direção visual diferente. Abra cada uma e
            escolha qual representa melhor a marca — ou combine elementos.
          </motion.p>
        </section>

        {/* Cards */}
        <section className="px-6 sm:px-8 lg:px-16 pb-20">
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 max-w-7xl">
            {versions.map((v, i) => {
              const preview = previews[v.slug];
              const isLight = preview.foreground !== "#f5f5f5";
              return (
                <motion.div
                  key={v.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.55 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={`/${v.slug}`}
                    className="group relative block overflow-hidden rounded-3xl border border-white/[0.08] hover:border-[#F1E52F]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(241,229,47,0.18)]"
                    style={{
                      background: preview.gradient,
                      color: preview.foreground,
                    }}
                    aria-label={`Abrir versão ${v.letter}: ${v.name}`}
                  >
                    {/* Top label bar */}
                    <div
                      className="absolute top-0 left-0 right-0 z-10 px-5 sm:px-6 py-3.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em]"
                      style={{
                        color: isLight
                          ? "rgba(10,10,10,0.55)"
                          : "rgba(245,245,245,0.55)",
                      }}
                    >
                      <span>v{i + 1}</span>
                      <span>{preview.fontHint}</span>
                    </div>

                    {/* Preview area */}
                    <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                      {preview.texture}
                    </div>

                    {/* Footer info */}
                    <div
                      className="px-6 sm:px-7 py-6 flex items-center justify-between gap-6 relative border-t"
                      style={{
                        background: isLight
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(0,0,0,0.45)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        borderColor: isLight
                          ? "rgba(0,0,0,0.06)"
                          : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="size-9 grid place-items-center rounded-full font-bold text-sm shrink-0"
                            style={{
                              background: preview.accent,
                              color: "#1C1C1C",
                              boxShadow: "0 4px 14px -4px rgba(241,229,47,0.6)",
                            }}
                          >
                            {v.letter}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold tracking-tight truncate">
                            {v.name}
                          </h3>
                        </div>
                        <p className="text-[13px] sm:text-sm opacity-70 leading-relaxed">
                          {v.mood}
                        </p>
                      </div>
                      <span
                        className="hidden sm:flex items-center gap-1.5 text-sm font-medium whitespace-nowrap opacity-60 group-hover:opacity-100 transition-all duration-500"
                        aria-hidden="true"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-500">
                          abrir
                        </span>
                        <span className="text-base group-hover:translate-x-2 transition-transform duration-500">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 sm:px-8 lg:px-16 pb-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-7xl">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/icon-yellow-rounded.svg"
                alt=""
                width={20}
                height={20}
                className="size-5 opacity-60"
              />
              <p className="text-[11px] sm:text-xs text-white/40 tracking-wide">
                Protótipos comparativos · Next.js 15 · Tailwind v4 · Framer Motion
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/35 font-mono">
              Em todas as 4 · use o switcher no canto inferior esquerdo
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
