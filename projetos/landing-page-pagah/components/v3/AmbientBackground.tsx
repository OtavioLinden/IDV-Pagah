"use client";

/**
 * AmbientBackground — Living Tech ambient layer for V3.
 *
 * Three additive layers, all GPU-accelerated (transform/opacity only):
 *   1. Pulsing dot grid (56px lattice, opacity oscillation 6s)
 *   2. Two yellow ambient blobs drifting on long loops (50–70s)
 *   3. Slow vertical scan line (110s) — radar/scanner vibe
 *
 * Sits at z-index: -1 behind the main content, pointer-events: none.
 * Honors prefers-reduced-motion (animations disabled, static state preserved).
 */
export default function AmbientBackground() {
  return (
    <div className="v3-ambient" aria-hidden="true">
      <style>{`
        .v3-ambient {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          contain: strict;
        }

        /* ---------- Layer 1 — Pulsing dot grid ---------- */
        .v3-ambient__dots {
          position: absolute;
          inset: -2px;
          background-image:
            radial-gradient(
              circle at 1px 1px,
              rgba(255, 255, 255, 0.07) 1px,
              transparent 1.4px
            );
          background-size: 56px 56px;
          background-position: 0 0;
          opacity: 0.85;
          animation: v3-amb-pulse 7s ease-in-out infinite;
          will-change: opacity;
        }
        @keyframes v3-amb-pulse {
          0%, 100% { opacity: 0.65; }
          50%      { opacity: 1; }
        }

        /* ---------- Layer 2 — Yellow ambient drift blobs ---------- */
        .v3-ambient__blob {
          position: absolute;
          width: 52vw;
          height: 52vw;
          max-width: 880px;
          max-height: 880px;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.92 0.18 96 / 0.12) 0%,
            oklch(0.92 0.18 96 / 0.06) 38%,
            transparent 70%
          );
          filter: blur(120px);
          mix-blend-mode: screen;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .v3-ambient__blob--a {
          top: -18vh;
          left: -14vw;
          animation: v3-amb-drift-a 62s ease-in-out infinite;
        }
        .v3-ambient__blob--b {
          bottom: -22vh;
          right: -16vw;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.92 0.18 96 / 0.10) 0%,
            oklch(0.92 0.18 96 / 0.05) 40%,
            transparent 72%
          );
          filter: blur(140px);
          animation: v3-amb-drift-b 74s ease-in-out infinite;
        }
        @keyframes v3-amb-drift-a {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          25%  { transform: translate3d(8vw, 6vh, 0) scale(1.06); }
          50%  { transform: translate3d(14vw, -4vh, 0) scale(0.98); }
          75%  { transform: translate3d(4vw, 10vh, 0) scale(1.03); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes v3-amb-drift-b {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          25%  { transform: translate3d(-10vw, -8vh, 0) scale(1.05); }
          50%  { transform: translate3d(-4vw, 6vh, 0) scale(0.96); }
          75%  { transform: translate3d(-14vw, -2vh, 0) scale(1.02); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        /* ---------- Layer 3 — Slow scan line ---------- */
        .v3-ambient__scan {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 220px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            oklch(0.92 0.18 96 / 0.05) 45%,
            oklch(0.92 0.18 96 / 0.07) 50%,
            oklch(0.92 0.18 96 / 0.05) 55%,
            transparent 100%
          );
          mix-blend-mode: plus-lighter;
          opacity: 0.55;
          will-change: transform;
          transform: translate3d(0, -220px, 0);
          animation: v3-amb-scan 110s linear infinite;
        }
        @keyframes v3-amb-scan {
          0%   { transform: translate3d(0, -220px, 0); }
          100% { transform: translate3d(0, calc(100vh + 220px), 0); }
        }

        /* ---------- Reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .v3-ambient__dots,
          .v3-ambient__blob,
          .v3-ambient__scan {
            animation: none;
          }
          .v3-ambient__scan {
            display: none;
          }
        }
      `}</style>

      <div className="v3-ambient__dots" />
      <div className="v3-ambient__blob v3-ambient__blob--a" />
      <div className="v3-ambient__blob v3-ambient__blob--b" />
      <div className="v3-ambient__scan" />
    </div>
  );
}
