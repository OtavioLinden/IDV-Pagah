"use client";

import { useEffect, useRef } from "react";

/**
 * V4 Heritage Ambient Background — "Bloomberg meets Linear" edition.
 *
 * Static editorial bones + alive ambient — gives the "wow" on first sight
 * without becoming a screensaver:
 *
 *  1. Paper hue base (warm off-white)
 *  2. Mouse-tracking yellow spotlight (giant, lerp 0.08, primary WOW)
 *  3. Three drifting aurora blobs (yellow, 45s/60s/90s loops, GPU-only)
 *  4. Subtle conic mesh (rotating 240s — perceptible only on long stares)
 *  5. Broadsheet column rules (8 hairlines, structural)
 *  6. Watermark "pagah" with scroll parallax
 *  7. Paper grain (SVG noise)
 *  8. Page vignette
 *
 * Touch devices: spotlight disabled (no cursor); aurora continues.
 * prefers-reduced-motion: all animations freeze, spotlight disabled.
 */
export default function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0.5, y: 0.35 });
  const currentRef = useRef({ x: 0.5, y: 0.35 });
  const rafRef = useRef<number>(0);
  const scrollRafRef = useRef<number>(0);
  const lastScrollRef = useRef<number>(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Respect prefers-reduced-motion and disable on coarse pointers (touch)
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) {
      // Park spotlight off-screen and freeze animation states via CSS class
      root.classList.add("v4-ambient--static");
      root.style.setProperty("--mx", "50%");
      root.style.setProperty("--my", "35%");
      return;
    }

    const onPointerMove = (e: PointerEvent) => {
      targetRef.current.x = e.clientX / window.innerWidth;
      targetRef.current.y = e.clientY / window.innerHeight;
    };

    const tick = () => {
      // Lerp toward target — smooth lag
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;
      root.style.setProperty("--mx", `${(currentRef.current.x * 100).toFixed(2)}%`);
      root.style.setProperty("--my", `${(currentRef.current.y * 100).toFixed(2)}%`);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Watermark parallax — moves 60px range with scroll
    const onScroll = () => {
      if (scrollRafRef.current) return;
      scrollRafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - lastScrollRef.current) > 0.5) {
          lastScrollRef.current = y;
          // Move mark up/down based on scroll (clamped to ±60px)
          const offset = Math.min(60, Math.max(-60, y * -0.08));
          root.style.setProperty("--mark-y", `${offset.toFixed(1)}px`);
        }
        scrollRafRef.current = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="v4-ambient"
      aria-hidden="true"
      style={
        {
          "--mx": "50%",
          "--my": "35%",
          "--mark-y": "0px",
        } as React.CSSProperties
      }
    >
      <style>{`
        .v4-ambient {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
          contain: strict;
        }

        /* Layer 1 — warm paper hue base */
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

        /* Layer 2 — MOUSE-TRACKING SPOTLIGHT (the wow).
           Giant soft yellow glow following the cursor with lerp lag. */
        .v4-ambient__spotlight {
          position: absolute;
          inset: -20%;
          background: radial-gradient(
            600px circle at var(--mx) var(--my),
            rgba(241, 229, 47, 0.32) 0%,
            rgba(241, 229, 47, 0.16) 25%,
            rgba(241, 229, 47, 0.04) 55%,
            transparent 75%
          );
          filter: blur(8px);
          mix-blend-mode: multiply;
          will-change: background-position;
        }

        /* Layer 3 — AURORA BLOBS (3 drifting yellow blobs).
           Long desynced loops, mix-blend multiply for "in-paper" feel. */
        .v4-ambient__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          mix-blend-mode: multiply;
          will-change: transform;
        }
        .v4-ambient__blob--a {
          width: 56vw;
          height: 56vw;
          top: -16vw;
          left: -12vw;
          background: radial-gradient(
            circle,
            rgba(241, 229, 47, 0.22) 0%,
            rgba(241, 229, 47, 0.10) 45%,
            transparent 72%
          );
          animation: v4-blob-a 45s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .v4-ambient__blob--b {
          width: 48vw;
          height: 48vw;
          bottom: -14vw;
          right: -10vw;
          background: radial-gradient(
            circle,
            rgba(241, 229, 47, 0.18) 0%,
            rgba(241, 229, 47, 0.08) 45%,
            transparent 72%
          );
          animation: v4-blob-b 60s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          animation-delay: -18s;
        }
        .v4-ambient__blob--c {
          width: 40vw;
          height: 40vw;
          top: 30vh;
          left: 35vw;
          background: radial-gradient(
            circle,
            rgba(241, 229, 47, 0.14) 0%,
            rgba(241, 229, 47, 0.06) 45%,
            transparent 72%
          );
          animation: v4-blob-c 90s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          animation-delay: -32s;
        }
        @keyframes v4-blob-a {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          25%  { transform: translate3d(8%, 6%, 0) scale(1.08); }
          50%  { transform: translate3d(4%, 12%, 0) scale(0.96); }
          75%  { transform: translate3d(-6%, 8%, 0) scale(1.05); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes v4-blob-b {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          25%  { transform: translate3d(-7%, -5%, 0) scale(1.07); }
          50%  { transform: translate3d(-10%, 6%, 0) scale(0.95); }
          75%  { transform: translate3d(3%, -8%, 0) scale(1.04); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes v4-blob-c {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          33%  { transform: translate3d(-12%, 8%, 0) scale(1.10); }
          66%  { transform: translate3d(10%, -6%, 0) scale(0.92); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        /* Layer 4 — SUBTLE CONIC MESH (ultra-slow rotation, 240s).
           Adds atmospheric depth; only perceptible on long observation. */
        .v4-ambient__mesh {
          position: absolute;
          inset: -25%;
          background: conic-gradient(
            from 90deg at 50% 50%,
            transparent 0deg,
            rgba(241, 229, 47, 0.05) 60deg,
            transparent 120deg,
            rgba(28, 28, 28, 0.03) 180deg,
            transparent 240deg,
            rgba(241, 229, 47, 0.04) 300deg,
            transparent 360deg
          );
          filter: blur(80px);
          mix-blend-mode: multiply;
          will-change: transform;
          animation: v4-mesh-spin 240s linear infinite;
        }
        @keyframes v4-mesh-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Layer 5 — broadsheet column rules (8 hairlines) */
        .v4-ambient__rules {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            to right,
            transparent calc(12.5% - 0.5px),
            oklch(0.235 0.006 99 / 0.07) calc(12.5% - 0.5px),
            oklch(0.235 0.006 99 / 0.07) calc(12.5% + 0.5px),
            transparent calc(12.5% + 0.5px)
          );
          background-size: 12.5% 100%;
        }

        /* Layer 6 — watermark "pagah" with scroll parallax */
        .v4-ambient__mark {
          position: absolute;
          right: -2vw;
          bottom: 6vh;
          font-family: var(--font-v4-serif), "Fraunces", Georgia, serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(180px, 22vw, 360px);
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: oklch(0.235 0.006 99);
          opacity: 0.05;
          user-select: none;
          white-space: nowrap;
          pointer-events: none;
          transform: translate3d(0, var(--mark-y, 0px), 0);
          will-change: transform;
        }

        /* Layer 7 — paper grain (SVG noise) */
        .v4-ambient__grain {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 220px 220px;
        }

        /* Layer 8 — page vignette */
        .v4-ambient__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            130% 90% at 50% 35%,
            transparent 50%,
            rgba(28, 28, 28, 0.04) 80%,
            rgba(28, 28, 28, 0.08) 100%
          );
          mix-blend-mode: multiply;
        }

        /* Coarse pointer / reduced motion: freeze and disable spotlight */
        .v4-ambient--static .v4-ambient__spotlight {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .v4-ambient__blob--a,
          .v4-ambient__blob--b,
          .v4-ambient__blob--c,
          .v4-ambient__mesh {
            animation: none;
          }
          .v4-ambient__spotlight { display: none; }
        }
        @media (pointer: coarse) {
          .v4-ambient__spotlight { display: none; }
        }
      `}</style>
      <div className="v4-ambient__paper" />
      <div className="v4-ambient__blob v4-ambient__blob--a" />
      <div className="v4-ambient__blob v4-ambient__blob--b" />
      <div className="v4-ambient__blob v4-ambient__blob--c" />
      <div className="v4-ambient__mesh" />
      <div className="v4-ambient__spotlight" />
      <div className="v4-ambient__rules" />
      <div className="v4-ambient__mark">pagah</div>
      <div className="v4-ambient__grain" />
      <div className="v4-ambient__vignette" />
    </div>
  );
}
