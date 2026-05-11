"use client";

/**
 * V4 Heritage Ambient Background — Broadsheet edition
 *
 * Heritage publications (FT, Bloomberg, NYT) keep backgrounds static, but they
 * are NOT flat: a tinted paper hue, marked column rules, ornament rotated
 * decorative elements, and large display type used as watermark/calling card.
 *
 * Layers (all static, GPU-light):
 *  1. Paper hue base — slight warm tint (off-white toward yellow, not pure)
 *  2. Paper grain — SVG noise, reinforced opacity
 *  3. Column rules — 8-column hairlines, more visible
 *  4. Mid-page horizontal rules — broadsheet "fold lines" for vertical rhythm
 *  5. Watermark wordmark — "pagah" in serif italic, huge, lower-right, fixed
 *  6. Page vignette — soft corner depth
 *
 * - pointer-events: none, position: fixed, z-index: -1
 * - aria-hidden, contain: strict
 * - Zero animation. Pure paint.
 */
export default function AmbientBackground() {
  return (
    <div className="v4-ambient" aria-hidden="true">
      <style>{`
        .v4-ambient {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
          contain: strict;
        }

        /* Layer 1 — warm paper hue base. Replaces #F2F2F2 visual coldness. */
        .v4-ambient__paper {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            oklch(0.965 0.008 95) 0%,
            oklch(0.955 0.010 92) 50%,
            oklch(0.962 0.008 95) 100%
          );
        }

        /* Layer 2 — paper grain (reinforced opacity 0.05 → 0.09) */
        .v4-ambient__grain {
          position: absolute;
          inset: 0;
          opacity: 0.09;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 220px 220px;
        }

        /* Layer 3 — broadsheet column rules (8 columns, reinforced 0.05 → 0.09) */
        .v4-ambient__rules {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            to right,
            transparent calc(12.5% - 0.5px),
            oklch(0.235 0.006 99 / 0.09) calc(12.5% - 0.5px),
            oklch(0.235 0.006 99 / 0.09) calc(12.5% + 0.5px),
            transparent calc(12.5% + 0.5px)
          );
          background-size: 12.5% 100%;
        }

        /* Layer 4 — horizontal "fold lines" (3 across the viewport — broadsheet rhythm) */
        .v4-ambient__folds {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              180deg,
              transparent calc(33.33% - 0.5px),
              oklch(0.235 0.006 99 / 0.05) calc(33.33% - 0.5px),
              oklch(0.235 0.006 99 / 0.05) calc(33.33% + 0.5px),
              transparent calc(33.33% + 0.5px),
              transparent calc(66.66% - 0.5px),
              oklch(0.235 0.006 99 / 0.05) calc(66.66% - 0.5px),
              oklch(0.235 0.006 99 / 0.05) calc(66.66% + 0.5px),
              transparent calc(66.66% + 0.5px)
            );
        }

        /* Layer 5 — watermark wordmark "pagah" in serif italic
           lower-right, fixed (does not scroll with content) */
        .v4-ambient__mark {
          position: absolute;
          right: -2vw;
          bottom: 4vh;
          font-family: var(--font-v4-serif), "Fraunces", Georgia, serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(180px, 22vw, 360px);
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: oklch(0.235 0.006 99);
          opacity: 0.045;
          user-select: none;
          white-space: nowrap;
          pointer-events: none;
        }

        /* Layer 5.5 — single ultra-slow diagonal beam (Apple Newsroom vibe).
           150s loop, opacity peak 0.18, blur 56px. One pass per 2.5 minutes. */
        .v4-ambient__beam {
          position: absolute;
          top: -30vh;
          left: -50vw;
          width: 44vw;
          height: 170vh;
          mix-blend-mode: multiply;
          will-change: transform, opacity;
          transform: translate3d(-100vw, 0, 0) rotate(20deg);
          background: linear-gradient(
            90deg,
            rgba(241, 229, 47, 0) 0%,
            rgba(241, 229, 47, 0.10) 30%,
            rgba(241, 229, 47, 0.18) 50%,
            rgba(241, 229, 47, 0.10) 70%,
            rgba(241, 229, 47, 0) 100%
          );
          filter: blur(56px);
          animation: v4-ambient-beam-slow 150s linear infinite;
          pointer-events: none;
        }
        @keyframes v4-ambient-beam-slow {
          0%   { transform: translate3d(-100vw, 0, 0) rotate(20deg); opacity: 0; }
          8%   { opacity: 1; }
          42%  { transform: translate3d(160vw, 0, 0) rotate(20deg); opacity: 1; }
          48%  { transform: translate3d(160vw, 0, 0) rotate(20deg); opacity: 0; }
          100% { transform: translate3d(-100vw, 0, 0) rotate(20deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .v4-ambient__beam { animation: none; opacity: 0.18; transform: translate3d(20vw, 0, 0) rotate(20deg); }
        }

        /* Layer 6 — page vignette (corner depth) */
        .v4-ambient__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            130% 90% at 50% 35%,
            transparent 45%,
            rgba(28, 28, 28, 0.04) 80%,
            rgba(28, 28, 28, 0.08) 100%
          );
          mix-blend-mode: multiply;
        }
      `}</style>
      <div className="v4-ambient__paper" />
      <div className="v4-ambient__grain" />
      <div className="v4-ambient__rules" />
      <div className="v4-ambient__folds" />
      <div className="v4-ambient__beam" />
      <div className="v4-ambient__mark">pagah</div>
      <div className="v4-ambient__vignette" />
    </div>
  );
}
