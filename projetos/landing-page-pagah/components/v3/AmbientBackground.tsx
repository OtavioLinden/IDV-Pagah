"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AmbientBackground — Living Tech ambient layer for V3.
 *
 * Layers (all GPU-friendly: transform/opacity, plus a single SVG dashoffset):
 *   1. Pulsing dot grid (56px lattice, opacity oscillation)
 *   2. Mouse-reactive yellow spotlight — illuminates dots in a ~320px radius
 *      via a radial-gradient overlay with `mix-blend-mode: screen` over the dots.
 *      Position is lerped (~0.10) toward the cursor for smooth lag.
 *      Disabled on touch / reduced-motion.
 *   3. Two yellow ambient blobs drifting on long loops (62-74s)
 *   4. SVG connection lines (4 polylines) with stroke-dasharray draw/erase loops,
 *      placed away from the hero band, faint yellow strokes.
 *   5. Slow vertical scan line (radar/scanner vibe).
 *
 * Sits behind main content, pointer-events: none, aria-hidden.
 * Respects prefers-reduced-motion.
 */
export default function AmbientBackground() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const activeRef = useRef(false);
  const [enableSpotlight, setEnableSpotlight] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouch =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (reduceMotion || isTouch) {
      setEnableSpotlight(false);
      return;
    }

    setEnableSpotlight(true);

    // Init at center so the first reveal isn't a jump from 0,0
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    targetRef.current = { x: initX, y: initY };
    currentRef.current = { x: initX, y: initY };

    const onPointerMove = (e: PointerEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      activeRef.current = true;
    };

    const tick = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      // lerp ~0.10 for smooth lag
      cur.x += (tgt.x - cur.x) * 0.1;
      cur.y += (tgt.y - cur.y) * 0.1;

      const el = spotlightRef.current;
      if (el) {
        el.style.transform = `translate3d(${cur.x - 320}px, ${cur.y - 320}px, 0)`;
        if (activeRef.current && el.style.opacity !== "1") {
          el.style.opacity = "1";
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
              rgba(255, 255, 255, 0.08) 1px,
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

        /* ---------- Layer 1b — Mouse-reactive spotlight ----------
           A 640x640 yellow radial gradient that sits on top of the dot grid.
           mix-blend-mode: screen makes only the lit dots glow yellow.
           Position is updated via transform from the rAF lerp loop. */
        .v3-ambient__spotlight {
          position: absolute;
          left: 0;
          top: 0;
          width: 640px;
          height: 640px;
          pointer-events: none;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.92 0.20 96 / 0.55) 0%,
            oklch(0.92 0.20 96 / 0.32) 22%,
            oklch(0.92 0.20 96 / 0.14) 42%,
            oklch(0.92 0.20 96 / 0.04) 65%,
            transparent 78%
          );
          mix-blend-mode: screen;
          opacity: 0;
          transition: opacity 600ms ease;
          will-change: transform, opacity;
          transform: translate3d(-9999px, -9999px, 0);
          /* Mask through the dot grid lattice so only dots light up */
          -webkit-mask-image: radial-gradient(
            circle at 1px 1px,
            #000 1px,
            transparent 1.6px
          );
          mask-image: radial-gradient(
            circle at 1px 1px,
            #000 1px,
            transparent 1.6px
          );
          -webkit-mask-size: 56px 56px;
          mask-size: 56px 56px;
          -webkit-mask-position: 0 0;
          mask-position: 0 0;
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

        /* ---------- Layer 3 — Connection lines (neural net) ---------- */
        .v3-ambient__lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.85;
        }
        .v3-ambient__lines polyline {
          fill: none;
          stroke: oklch(0.92 0.20 96 / 0.55);
          stroke-width: 1.1;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 3px oklch(0.92 0.20 96 / 0.35));
        }
        .v3-ambient__line--1 {
          stroke-dasharray: 360 1200;
          animation: v3-amb-line 14s ease-in-out infinite;
        }
        .v3-ambient__line--2 {
          stroke-dasharray: 280 1100;
          animation: v3-amb-line 17s ease-in-out infinite;
          animation-delay: -4s;
        }
        .v3-ambient__line--3 {
          stroke-dasharray: 320 1300;
          animation: v3-amb-line 19s ease-in-out infinite;
          animation-delay: -9s;
        }
        .v3-ambient__line--4 {
          stroke-dasharray: 240 1000;
          animation: v3-amb-line 16s ease-in-out infinite;
          animation-delay: -2s;
        }
        @keyframes v3-amb-line {
          0%   { stroke-dashoffset: 1560; opacity: 0; }
          15%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { stroke-dashoffset: -1560; opacity: 0; }
        }

        /* Connection node dots — small yellow blips at line endpoints */
        .v3-ambient__lines circle {
          fill: oklch(0.92 0.20 96 / 0.7);
          filter: drop-shadow(0 0 4px oklch(0.92 0.20 96 / 0.6));
          animation: v3-amb-node 4s ease-in-out infinite;
        }
        @keyframes v3-amb-node {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.9; }
        }

        /* ---------- Layer 4 — Slow scan line ---------- */
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
          .v3-ambient__scan,
          .v3-ambient__lines polyline,
          .v3-ambient__lines circle {
            animation: none;
          }
          .v3-ambient__scan { display: none; }
          .v3-ambient__lines polyline { stroke-dasharray: none; opacity: 0.4; }
          .v3-ambient__spotlight { display: none; }
        }
      `}</style>

      <div className="v3-ambient__dots" />

      {enableSpotlight && (
        <div ref={spotlightRef} className="v3-ambient__spotlight" />
      )}

      <div className="v3-ambient__blob v3-ambient__blob--a" />
      <div className="v3-ambient__blob v3-ambient__blob--b" />

      {/* Connection lines — placed in upper-right, mid-left, and bottom band,
          avoiding the hero center column. */}
      <svg
        className="v3-ambient__lines"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-right diagonal cluster */}
        <polyline
          className="v3-ambient__line--1"
          points="1180,80 1320,180 1420,140 1520,260"
        />
        <circle cx="1180" cy="80" r="2.5" />
        <circle cx="1520" cy="260" r="2.5" />

        {/* Left side vertical-ish path */}
        <polyline
          className="v3-ambient__line--2"
          points="80,420 180,520 120,640 220,760"
        />
        <circle cx="80" cy="420" r="2.5" />
        <circle cx="220" cy="760" r="2.5" />

        {/* Bottom band horizontal weave */}
        <polyline
          className="v3-ambient__line--3"
          points="220,880 480,820 720,900 980,840 1240,920"
        />
        <circle cx="220" cy="880" r="2.5" />
        <circle cx="1240" cy="920" r="2.5" />

        {/* Right-mid short hop */}
        <polyline
          className="v3-ambient__line--4"
          points="1380,520 1480,580 1420,680 1540,740"
        />
        <circle cx="1380" cy="520" r="2.5" />
        <circle cx="1540" cy="740" r="2.5" />
      </svg>

      <div className="v3-ambient__scan" />
    </div>
  );
}
