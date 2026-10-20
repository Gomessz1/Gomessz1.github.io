import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const title = `${site.name} — Sistemas de Informação e TI`;

export const metadata: Metadata = {
  title,
  description: site.description,
  authors: [{ name: site.name, url: site.github.href }],
  creator: site.name,
  keywords: [
    "André Gomes Cordeiro",
    "portfólio",
    "Sistemas de Informação",
    "PUC Minas",
    "React",
    "Next.js",
    "Front-end",
    "Power BI",
    "dashboards",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description: site.description,
    siteName: site.name,
  },
  twitter: { card: "summary", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0a",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alumniOf: { "@type": "CollegeOrUniversity", name: "PUC Minas" },
  knowsAbout: ["React", "JavaScript", "Next.js", "Tailwind CSS", "Power BI", "APIs REST"],
  sameAs: [site.github.href, site.linkedin.href],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <div className="space-bg pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div className="stars-far" />
          <div className="stars" />
        </div>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
