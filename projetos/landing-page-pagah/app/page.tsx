import Link from "next/link";
import { versions } from "@/content/landing";

const previews: Record<
  string,
  { gradient: string; foreground: string; accent: string; texture: React.ReactNode }
> = {
  "v1-premium-dark": {
    gradient: "radial-gradient(ellipse at top right, #2a2a1a 0%, #0a0a0a 60%)",
    foreground: "#f5f5f5",
    accent: "#F1E52F",
    texture: (
      <>
        <div
          className="absolute"
          style={{
            top: "20%",
            right: "20%",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, #F1E52F 0%, transparent 70%)",
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        />
        <div
          className="absolute"
          style={{
            top: "30%",
            right: "25%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "1px solid rgba(241,229,47,0.4)",
            background:
              "linear-gradient(135deg, rgba(241,229,47,0.15), transparent)",
            backdropFilter: "blur(20px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        />
      </>
    ),
  },
  "v2-editorial": {
    gradient: "#FAFAFA",
    foreground: "#0a0a0a",
    accent: "#F1E52F",
    texture: (
      <>
        <div
          className="absolute font-black tracking-[-0.07em] leading-[0.8]"
          style={{
            top: "-10%",
            left: "-3%",
            fontSize: "180px",
            color: "#0a0a0a",
          }}
        >
          PAG<span style={{ color: "#F1E52F" }}>A</span>H
        </div>
      </>
    ),
  },
  "v3-living-tech": {
    gradient: "#0F0F10",
    foreground: "#f5f5f5",
    accent: "#F1E52F",
    texture: (
      <>
        <div className="absolute inset-6 grid grid-cols-[1.4fr_1fr] grid-rows-2 gap-1.5">
          <div
            className="row-span-2 rounded-lg relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #F1E52F 0%, #c9bf28 100%)",
            }}
          >
            <div
              className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full"
              style={{
                background: "#1C1C1C",
                boxShadow: "0 0 8px #1C1C1C",
                animation: "tilePulse 1.8s ease-in-out infinite",
              }}
            />
          </div>
          <div
            className="rounded-lg"
            style={{
              background: "linear-gradient(135deg, #1f1f22 0%, #0f0f10 100%)",
            }}
          />
          <div
            className="rounded-lg"
            style={{
              background: "linear-gradient(135deg, #1f1f22 0%, #0f0f10 100%)",
            }}
          />
        </div>
      </>
    ),
  },
  "v4-heritage": {
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #F2F2F2 100%)",
    foreground: "#1C1C1C",
    accent: "#F1E52F",
    texture: (
      <>
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "6px", background: "#F1E52F" }}
        />
        <div
          className="absolute rounded-2xl p-5 text-white"
          style={{
            top: "30px",
            left: "24px",
            right: "24px",
            background: "#1C1C1C",
            boxShadow: "0 20px 50px -15px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="text-3xl font-extrabold tracking-tight"
            style={{ color: "#F1E52F" }}
          >
            R$ 646k
          </div>
          <div className="text-[10px] uppercase tracking-[0.15em] opacity-60 mt-1">
            Upsell recuperado
          </div>
        </div>
      </>
    ),
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <style>
        {`@keyframes tilePulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.4); } }`}
      </style>

      {/* Header */}
      <header className="px-8 md:px-16 pt-8 pb-12">
        <div className="flex items-center gap-3">
          <div
            className="size-10 rounded-xl grid place-items-center font-black"
            style={{ background: "#F1E52F", color: "#1C1C1C" }}
          >
            <span className="text-lg">p</span>
          </div>
          <span className="text-sm uppercase tracking-[0.25em] opacity-50">
            pagah landings · 4 propostas
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-8 md:px-16 mb-16 max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#F1E52F] mb-4">
          Decisão visual
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] mb-6">
          Mesma copy.
          <br />
          <span className="text-[#F1E52F]">4 caras diferentes.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
          As 4 versões abaixo apresentam o mesmo conteúdo da landing da Pagah em
          direções visuais distintas. Abra cada uma e escolha qual representa
          melhor a marca — ou combine elementos de várias.
        </p>
      </section>

      {/* Cards */}
      <section className="px-8 md:px-16 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {versions.map((v) => {
            const preview = previews[v.slug];
            return (
              <Link
                key={v.slug}
                href={`/${v.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#F1E52F]/40 transition-colors"
                style={{ background: preview.gradient, color: preview.foreground }}
              >
                <div className="relative h-72 md:h-80 overflow-hidden">
                  {preview.texture}
                </div>
                <div
                  className="px-7 py-6 flex items-end justify-between gap-6 relative"
                  style={{
                    background:
                      preview.foreground === "#f5f5f5"
                        ? "rgba(0,0,0,0.4)"
                        : "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="size-8 grid place-items-center rounded-full font-bold text-sm"
                        style={{
                          background: preview.accent,
                          color: "#1C1C1C",
                        }}
                      >
                        {v.letter}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight">
                        {v.name}
                      </h3>
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed">{v.mood}</p>
                  </div>
                  <span
                    className="text-sm font-medium whitespace-nowrap opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  >
                    abrir →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="px-8 md:px-16 pb-12 text-xs text-white/30 tracking-wide">
        Protótipos comparativos · construídos com Next.js + Tailwind v4 + Framer Motion
      </footer>
    </main>
  );
}
