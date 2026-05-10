"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps the V3 tree with MotionConfig so that all framer-motion animations
 * honor `prefers-reduced-motion`. With `reducedMotion="user"`, transforms
 * and opacity transitions are skipped when the user prefers reduced motion.
 */
export default function V3MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
