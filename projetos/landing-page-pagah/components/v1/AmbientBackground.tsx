"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientBackground (V1 — Premium Fintech Dark)
 *
 * Layered ambient atmosphere rendered behind the entire V1 surface:
 *   1. Aurora — 5 OKLCH radial blobs drifting + breathing on long, GPU loops
 *   2. Mouse spot — yellow radial glow following the cursor with smooth lerp
 *   3. Mesh — static dot grid for technical texture
 *   4. Vignette — radial darkening at edges for depth
 *
 * - pointer-events: none, position: fixed, z-index: -1, aria-hidden
 * - Mouse-tracking: RAF + lerp easing (0.08), throttled via ref (NO setState/move)
 * - Mouse-tracking disabled on touch devices and prefers-reduced-motion
 * - GPU only: transform + opacity (never top/left/width/height)
 */
export default function AmbientBackground() {
  const spotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  // Live values mutated outside React (no re-render)
  const stateRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    lastMove: 0,
    initialized: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip on touch devices and reduced motion
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    const spot = spotRef.current;
    if (!spot) return;

    // Center initial position
    stateRef.current.targetX = window.innerWidth / 2;
    stateRef.current.targetY = window.innerHeight / 2;
    stateRef.current.currentX = stateRef.current.targetX;
    stateRef.current.currentY = stateRef.current.targetY;
    stateRef.current.lastMove = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      stateRef.current.targetX = e.clientX;
      stateRef.current.targetY = e.clientY;
      stateRef.current.lastMove = performance.now();
    };

    const tick = () => {
      const s = stateRef.current;
      const now = performance.now();
      const idleMs = now - s.lastMove;

      // After 3s idle, gently breathe around the last point in a small circle
      let tx = s.targetX;
      let ty = s.targetY;
      if (idleMs > 3000) {
        const t = (now - s.lastMove - 3000) / 1000;
        const r = 22; // breathing radius in px
        tx = s.targetX + Math.cos(t * 0.6) * r;
        ty = s.targetY + Math.sin(t * 0.6) * r;
      }

      // Lerp toward target (smooth lag)
      s.currentX += (tx - s.currentX) * 0.08;
      s.currentY += (ty - s.currentY) * 0.08;

      // translate3d centers the 1400px spot on cursor
      spot.style.transform = `translate3d(${s.currentX - 700}px, ${s.currentY - 700}px, 0)`;
      if (!s.initialized) {
        spot.style.opacity = "1";
        s.initialized = true;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
        background: "var(--bg-base)",
      }}
    >
      {/* Static mesh grid (drawn first, sits behind) */}
      <div className="v1-ambient__mesh" />

      {/* Aurora blobs (mix-blend screen) */}
      <div className="v1-ambient__aurora">
        <span className="v1-ambient__blob v1-ambient__blob--a" />
        <span className="v1-ambient__blob v1-ambient__blob--b" />
        <span className="v1-ambient__blob v1-ambient__blob--c" />
        <span className="v1-ambient__blob v1-ambient__blob--d" />
        <span className="v1-ambient__blob v1-ambient__blob--e" />
      </div>

      {/* Mouse-tracking yellow spot (between aurora and vignette) */}
      <div
        ref={spotRef}
        className="v1-ambient__spot"
        style={{ opacity: 0 }}
      />

      {/* Vignette (sits on top, darkens edges) */}
      <div className="v1-ambient__vignette" />

      <style>{`
        .v1-ambient__mesh {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(oklch(1 0.012 95 / 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          background-position: 0 0;
          mask-image: radial-gradient(ellipse at center, #000 40%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse at center, #000 40%, transparent 85%);
        }

        .v1-ambient__aurora {
          position: absolute;
          inset: -15%;
          mix-blend-mode: screen;
          filter: blur(100px) saturate(125%);
          will-change: transform;
        }

        .v1-ambient__blob {
          position: absolute;
          display: block;
          border-radius: 50%;
          opacity: 0.7;
          will-change: transform, opacity;
          transform: translate3d(0, 0, 0) scale(1);
        }

        /* A — strong accent yellow, top-right anchor */
        .v1-ambient__blob--a {
          top: -12%;
          right: -10%;
          width: 70vw;
          height: 70vw;
          max-width: 1100px;
          max-height: 1100px;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.913 0.18 100 / 0.45) 0%,
            oklch(0.913 0.18 100 / 0.16) 40%,
            transparent 70%
          );
          animation: v1-aurora-a 52s ease-in-out infinite,
                     v1-breath-a 28s ease-in-out infinite;
        }

        /* B — warm-neutral, bottom-left anchor */
        .v1-ambient__blob--b {
          bottom: -18%;
          left: -12%;
          width: 78vw;
          height: 78vw;
          max-width: 1200px;
          max-height: 1200px;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.50 0.05 95 / 0.50) 0%,
            oklch(0.32 0.03 95 / 0.22) 45%,
            transparent 75%
          );
          animation: v1-aurora-b 58s ease-in-out infinite,
                     v1-breath-b 32s ease-in-out infinite;
        }

        /* C — accent echo, mid-right */
        .v1-ambient__blob--c {
          top: 30%;
          left: 38%;
          width: 50vw;
          height: 50vw;
          max-width: 820px;
          max-height: 820px;
          opacity: 0.55;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.913 0.18 100 / 0.28) 0%,
            oklch(0.913 0.166 100 / 0.08) 40%,
            transparent 70%
          );
          animation: v1-aurora-c 46s ease-in-out infinite,
                     v1-breath-c 26s ease-in-out infinite;
        }

        /* D — cool deep accent, bottom-right */
        .v1-ambient__blob--d {
          bottom: -8%;
          right: -8%;
          width: 48vw;
          height: 48vw;
          max-width: 780px;
          max-height: 780px;
          opacity: 0.45;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.913 0.16 100 / 0.22) 0%,
            oklch(0.40 0.04 95 / 0.16) 45%,
            transparent 75%
          );
          animation: v1-aurora-d 60s ease-in-out infinite,
                     v1-breath-d 34s ease-in-out infinite;
        }

        /* E — small bright highlight, top-left */
        .v1-ambient__blob--e {
          top: 8%;
          left: -6%;
          width: 36vw;
          height: 36vw;
          max-width: 600px;
          max-height: 600px;
          opacity: 0.4;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.913 0.18 100 / 0.20) 0%,
            oklch(0.913 0.16 100 / 0.06) 45%,
            transparent 75%
          );
          animation: v1-aurora-e 50s ease-in-out infinite,
                     v1-breath-e 30s ease-in-out infinite;
        }

        /* Mouse-tracking spot — 1400px box, centered on cursor via JS transform */
        .v1-ambient__spot {
          position: absolute;
          top: 0;
          left: 0;
          width: 1400px;
          height: 1400px;
          pointer-events: none;
          mix-blend-mode: screen;
          will-change: transform, opacity;
          transition: opacity 600ms ease-out;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.913 0.18 100 / 0.16) 0%,
            oklch(0.913 0.166 100 / 0.08) 25%,
            oklch(0.913 0.166 100 / 0.02) 45%,
            transparent 65%
          );
          filter: blur(40px);
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

        /* DRIFT — translate range 180-250px scale (using % of -15% inset) */
        @keyframes v1-aurora-a {
          0%, 100% { transform: translate3d(0%, 0%, 0); }
          50%      { transform: translate3d(-12%, 7%, 0); }
        }
        @keyframes v1-aurora-b {
          0%, 100% { transform: translate3d(0%, 0%, 0); }
          50%      { transform: translate3d(10%, -6%, 0); }
        }
        @keyframes v1-aurora-c {
          0%, 100% { transform: translate3d(0%, 0%, 0); }
          50%      { transform: translate3d(-9%, -10%, 0); }
        }
        @keyframes v1-aurora-d {
          0%, 100% { transform: translate3d(0%, 0%, 0); }
          50%      { transform: translate3d(-8%, -7%, 0); }
        }
        @keyframes v1-aurora-e {
          0%, 100% { transform: translate3d(0%, 0%, 0); }
          50%      { transform: translate3d(8%, 10%, 0); }
        }

        /* BREATH — independent scale cycles (desynced from drift) */
        @keyframes v1-breath-a {
          0%, 100% { opacity: 0.7;  filter: brightness(1); }
          50%      { opacity: 0.85; filter: brightness(1.08); }
        }
        @keyframes v1-breath-b {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 0.82; }
        }
        @keyframes v1-breath-c {
          0%, 100% { opacity: 0.45; }
          50%      { opacity: 0.65; }
        }
        @keyframes v1-breath-d {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 0.55; }
        }
        @keyframes v1-breath-e {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.5; }
        }

        @media (prefers-reduced-motion: reduce) {
          .v1-ambient__blob--a,
          .v1-ambient__blob--b,
          .v1-ambient__blob--c,
          .v1-ambient__blob--d,
          .v1-ambient__blob--e {
            animation: none;
          }
          .v1-ambient__spot {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
