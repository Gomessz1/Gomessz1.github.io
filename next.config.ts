import path from "node:path";
import type { NextConfig } from "next";

// No GitHub Pages o site pode morar em um subcaminho (ex.: /nome-do-repo).
// O workflow de deploy preenche essa variável; localmente ela fica vazia.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
