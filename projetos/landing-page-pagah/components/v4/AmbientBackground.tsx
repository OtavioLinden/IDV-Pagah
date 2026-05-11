"use client";

/**
 * V4 Heritage Ambient Background — Editorial Paper edition
 *
 * Heritage publications (FT.com, Bloomberg, NYT, Apple Newsroom) keep their
 * backgrounds static. Movement in the ambient layer reads as "AI tool" rather
 * than serious editorial product. This iteration strips motion from the
 * background entirely and replaces it with three static paper layers:
 *
 *  1. Paper grain (static SVG noise, multiply blend) — gives surface texture
 *  2. Vertical rule columns (8-col grid, hairline) — broadsheet bones
 *  3. Soft paper vignette (radial) — corner depth, very subtle
 *
 * - pointer-events: none, position: fixed, z-index: -1
 * - aria-hidden, contain: strict
 * - Zero animation. Zero will-change. Pure paint.
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

        /* Layer 1 — paper grain (static SVG noise) */
        .v4-ambient__grain {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 220px 220px;
        }

        /* Layer 2 — broadsheet column rules (8 hairlines across the viewport) */
        .v4-ambient__rules {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            to right,
            transparent calc(12.5% - 0.5px),
            oklch(0.235 0.006 99 / 0.05) calc(12.5% - 0.5px),
            oklch(0.235 0.006 99 / 0.05) calc(12.5% + 0.5px),
            transparent calc(12.5% + 0.5px)
          );
          background-size: 12.5% 100%;
        }

        /* Layer 3 — soft paper vignette */
        .v4-ambient__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            130% 90% at 50% 40%,
            transparent 50%,
            rgba(28, 28, 28, 0.03) 80%,
            rgba(28, 28, 28, 0.06) 100%
          );
          mix-blend-mode: multiply;
        }
      `}</style>
      <div className="v4-ambient__grain" />
      <div className="v4-ambient__rules" />
      <div className="v4-ambient__vignette" />
    </div>
  );
}
