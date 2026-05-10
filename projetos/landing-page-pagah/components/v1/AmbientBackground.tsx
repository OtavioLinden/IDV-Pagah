"use client";

/**
 * AmbientBackground (V1 — Premium Fintech Dark)
 *
 * Three-layer ambient atmosphere rendered behind the entire V1 surface:
 *   1. Aurora — 3 OKLCH radial blobs drifting on long, GPU-accelerated loops
 *   2. Mesh   — static dot grid for technical texture
 *   3. Vignette — radial darkening at the edges for depth
 *
 * - pointer-events: none (never intercepts clicks)
 * - position: fixed, inset: 0, z-index: -1 (sits behind .v1-root content)
 * - aria-hidden (purely decorative)
 * - Honors prefers-reduced-motion (animations disabled)
 * - Animates only transform/opacity for 60fps on desktop
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="v1-ambient"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        // Solid base color so the page never reveals raw <html> background
        background: "var(--bg-base)",
      }}
    >
      {/* Layer 3 (drawn first, sits behind): static mesh grid */}
      <div className="v1-ambient__mesh" />

      {/* Layer 1: aurora blobs (mix-blend screen for additive light) */}
      <div className="v1-ambient__aurora">
        <span className="v1-ambient__blob v1-ambient__blob--a" />
        <span className="v1-ambient__blob v1-ambient__blob--b" />
        <span className="v1-ambient__blob v1-ambient__blob--c" />
      </div>

      {/* Layer 2: vignette (sits on top, darkens edges) */}
      <div className="v1-ambient__vignette" />

      <style>{`
        .v1-ambient__mesh {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(oklch(1 0.012 95 / 0.035) 1px, transparent 1px);
          background-size: 32px 32px;
          background-position: 0 0;
          mask-image: radial-gradient(ellipse at center, #000 40%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse at center, #000 40%, transparent 85%);
        }

        .v1-ambient__aurora {
          position: absolute;
          inset: -10%;
          mix-blend-mode: screen;
          filter: blur(90px) saturate(115%);
          will-change: transform;
        }

        .v1-ambient__blob {
          position: absolute;
          display: block;
          border-radius: 50%;
          opacity: 0.55;
          will-change: transform, opacity;
          transform: translate3d(0, 0, 0) scale(1);
        }

        /* Accent yellow blob — top-right anchor */
        .v1-ambient__blob--a {
          top: -10%;
          right: -8%;
          width: 52vw;
          height: 52vw;
          max-width: 820px;
          max-height: 820px;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.913 0.166 100 / 0.32) 0%,
            oklch(0.913 0.166 100 / 0.10) 40%,
            transparent 70%
          );
          animation: v1-aurora-a 52s ease-in-out infinite;
        }

        /* Cool warm-neutral blob — bottom-left anchor */
        .v1-ambient__blob--b {
          bottom: -15%;
          left: -10%;
          width: 60vw;
          height: 60vw;
          max-width: 900px;
          max-height: 900px;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.45 0.04 95 / 0.40) 0%,
            oklch(0.30 0.025 95 / 0.18) 45%,
            transparent 75%
          );
          animation: v1-aurora-b 58s ease-in-out infinite;
        }

        /* Subtle accent echo — center-right, smaller */
        .v1-ambient__blob--c {
          top: 35%;
          left: 38%;
          width: 38vw;
          height: 38vw;
          max-width: 620px;
          max-height: 620px;
          opacity: 0.35;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.913 0.166 100 / 0.18) 0%,
            oklch(0.913 0.166 100 / 0.05) 40%,
            transparent 70%
          );
          animation: v1-aurora-c 46s ease-in-out infinite;
        }

        .v1-ambient__vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at 50% 35%,
              transparent 0%,
              transparent 50%,
              oklch(0.06 0.005 95 / 0.55) 100%
            );
        }

        @keyframes v1-aurora-a {
          0%, 100% { transform: translate3d(0%, 0%, 0) scale(1); }
          50%      { transform: translate3d(-6%, 4%, 0) scale(1.12); }
        }

        @keyframes v1-aurora-b {
          0%, 100% { transform: translate3d(0%, 0%, 0) scale(1); }
          50%      { transform: translate3d(5%, -3%, 0) scale(1.08); }
        }

        @keyframes v1-aurora-c {
          0%, 100% { transform: translate3d(0%, 0%, 0) scale(1); opacity: 0.35; }
          50%      { transform: translate3d(-4%, -5%, 0) scale(1.18); opacity: 0.45; }
        }

        @media (prefers-reduced-motion: reduce) {
          .v1-ambient__blob--a,
          .v1-ambient__blob--b,
          .v1-ambient__blob--c {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
