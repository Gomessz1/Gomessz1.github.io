"use client";

import { useEffect, useState } from "react";

// Calculado no navegador para não ficar preso ao ano do build estático.
export function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year}</span>;
}
