"use client";

/**
 * V4 Heritage Ambient Background
 *
 * Three-layer aditive ambient that respects the Pagah brand surface (#F2F2F2):
 *  1. Paper grain (static SVG noise, very low opacity, multiply blend)
 *  2. Two yellow ambient blobs drifting on long loops (60-90s, GPU-only transform)
 *  3. Soft paper vignette for depth at the edges (static)
 *
 * - pointer-events: none, position: fixed, z-index: -1 (below the 6px yellow strip)
 * - aria-hidden
 * - Honors prefers-reduced-motion: reduce
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

        /* Layer 1 — paper grain (static) */
        .v4-ambient__grain {
          position: absolute;
          inset: 0;
          opacity: 0.045;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 220px 220px;
          will-change: auto;
        }

        /* Layer 2 — drifting ambient blobs (yellow) */
        .v4-ambient__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(160px);
          mix-blend-mode: multiply;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .v4-ambient__blob--a {
          width: 52vw;
          height: 52vw;
          top: -8vw;
          left: -10vw;
          background: radial-gradient(
            circle,
            rgba(241, 229, 47, 0.10) 0%,
            rgba(241, 229, 47, 0.05) 45%,
            rgba(241, 229, 47, 0) 70%
          );
          animation: v4-ambient-drift-a 78s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .v4-ambient__blob--b {
          width: 46vw;
          height: 46vw;
          bottom: -12vw;
          right: -8vw;
          background: radial-gradient(
            circle,
            rgba(241, 229, 47, 0.08) 0%,
            rgba(241, 229, 47, 0.04) 45%,
            rgba(241, 229, 47, 0) 70%
          );
          animation: v4-ambient-drift-b 92s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          animation-delay: -22s;
        }

        @keyframes v4-ambient-drift-a {
          0%   { transform: translate3d(0%, 0%, 0) scale(1); }
          25%  { transform: translate3d(6%, 4%, 0) scale(1.06); }
          50%  { transform: translate3d(3%, 9%, 0) scale(0.98); }
          75%  { transform: translate3d(-4%, 5%, 0) scale(1.04); }
          100% { transform: translate3d(0%, 0%, 0) scale(1); }
        }
        @keyframes v4-ambient-drift-b {
          0%   { transform: translate3d(0%, 0%, 0) scale(1); }
          25%  { transform: translate3d(-5%, -3%, 0) scale(1.05); }
          50%  { transform: translate3d(-8%, 4%, 0) scale(0.97); }
          75%  { transform: translate3d(2%, -6%, 0) scale(1.03); }
          100% { transform: translate3d(0%, 0%, 0) scale(1); }
        }

        /* Layer 3 — paper vignette (static) */
        .v4-ambient__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            120% 80% at 50% 50%,
            transparent 55%,
            rgba(28, 28, 28, 0.025) 80%,
            rgba(28, 28, 28, 0.05) 100%
          );
          mix-blend-mode: multiply;
        }

        @media (prefers-reduced-motion: reduce) {
          .v4-ambient__blob--a,
          .v4-ambient__blob--b {
            animation: none;
          }
        }
      `}</style>
      <div className="v4-ambient__grain" />
      <div className="v4-ambient__blob v4-ambient__blob--a" />
      <div className="v4-ambient__blob v4-ambient__blob--b" />
      <div className="v4-ambient__vignette" />
    </div>
  );
}
