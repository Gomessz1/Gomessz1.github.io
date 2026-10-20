"use client";

import { MotionConfig } from "motion/react";

// "user" desativa animações de transformação quando o sistema pede movimento reduzido.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
