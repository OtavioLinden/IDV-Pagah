"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { versions } from "@/content/landing";

const ICONS = {
  "v1-premium-dark": { bg: "#0A0A0A", fg: "#F1E52F", grad: true },
  "v2-editorial": { bg: "#FAFAFA", fg: "#0A0A0A", grad: false },
  "v3-living-tech": { bg: "#0F0F10", fg: "#F1E52F", grad: true },
  "v4-heritage": { bg: "#F2F2F2", fg: "#1C1C1C", grad: false },
} as const;

type VersionSlug = keyof typeof ICONS;

export default function VersionSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentSlug = (versions.find((v) => pathname?.includes(v.slug))?.slug ??
    null) as VersionSlug | null;

  if (!currentSlug) return null;

  const currentIdx = versions.findIndex((v) => v.slug === currentSlug);
  const current = versions[currentIdx];

  return (
    <div className="fixed bottom-5 left-5 z-[100] pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute bottom-14 left-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "rgba(20,20,22,0.96)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.08)",
                minWidth: 280,
              }}
            >
              <div className="px-4 py-3 border-b border-white/5">
                <div
                  className="text-[10px] uppercase tracking-[0.2em] font-mono"
                  style={{ color: "#F1E52F" }}
                >
                  Trocar versão
                </div>
                <div className="text-xs text-white/50 mt-0.5">
                  Mesma copy, 4 caras diferentes
                </div>
              </div>
              <ul className="py-1.5">
                {versions.map((v, i) => {
                  const icon = ICONS[v.slug as VersionSlug];
                  const active = v.slug === currentSlug;
                  return (
                    <li key={v.slug}>
                      <Link
                        href={`/${v.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-white/[0.05]"
                        style={{
                          background: active
                            ? "rgba(241,229,47,0.08)"
                            : "transparent",
                        }}
                      >
                        <span
                          className="size-8 rounded-lg shrink-0 grid place-items-center font-bold text-sm"
                          style={{
                            background: icon.grad
                              ? `radial-gradient(circle at 70% 30%, ${icon.fg}33, ${icon.bg})`
                              : icon.bg,
                            color: icon.fg,
                            border: `1px solid ${icon.fg}33`,
                          }}
                        >
                          {v.letter}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white">
                            {v.name}
                          </div>
                          <div className="text-[11px] text-white/50 truncate">
                            {v.mood.split(" · ")[0]}
                          </div>
                        </div>
                        {active && (
                          <span
                            className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-md"
                            style={{
                              background: "#F1E52F",
                              color: "#0A0A0A",
                            }}
                          >
                            atual
                          </span>
                        )}
                        {!active && (
                          <span
                            className="text-[10px] font-mono opacity-30"
                            aria-hidden="true"
                          >
                            0{i + 1}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="px-4 py-2.5 border-t border-white/5 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-[11px] text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 12L12 3l9 9M5 10v11h14V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  voltar à home
                </Link>
                <span className="text-[10px] font-mono opacity-30 tracking-wider">
                  {currentIdx + 1} / {versions.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={`Versão atual: ${current.name}. Clique para trocar.`}
          aria-expanded={open}
          className="flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "rgba(20,20,22,0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(241,229,47,0.25)",
            boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)",
            color: "#fff",
          }}
        >
          <span
            className="size-7 rounded-full grid place-items-center font-bold text-xs"
            style={{
              background: "#F1E52F",
              color: "#0A0A0A",
            }}
          >
            {current.letter}
          </span>
          <span className="text-xs font-medium tracking-tight whitespace-nowrap">
            {current.name}
          </span>
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            aria-hidden="true"
            className="opacity-60"
            style={{
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 0.2s",
            }}
          >
            <path
              d="M6 15l6-6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
