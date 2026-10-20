import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";
import { HeroComposition } from "@/components/visuals/HeroComposition";
import { site } from "@/data/site";

const focusAreas = ["Interfaces", "Aplicações web", "Automações", "Dashboards"];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[620px] bg-[radial-gradient(closest-side,rgb(200_241_53/0.07),transparent)]"
        aria-hidden="true"
      />
      <div className="planet pointer-events-none absolute left-1/2 top-[78%] -translate-x-1/2" aria-hidden="true" />

      <Container className="relative grid min-h-[100svh] items-center gap-20 pb-28 pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/60 py-1.5 pl-3 pr-4 text-xs text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="animate-ping-soft absolute inset-0 rounded-full bg-accent" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              Aberto a conversas e colaborações
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <p className="font-mono text-sm tracking-tight text-muted" aria-hidden="true">
              <span className="text-accent">~/</span>andre-gomes-cordeiro
            </p>
            <h1 id="hero-title">
              <span className="mt-1 block text-2xl font-medium tracking-[-0.02em] text-fg sm:text-3xl">
                {site.name}
              </span>
              <span className="mt-6 block text-[2.6rem] font-medium leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
                Transformando ideias em{" "}
                <em className="font-serif font-normal italic tracking-[-0.02em] text-accent">soluções</em>{" "}
                através da tecnologia.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Estudante de Sistemas de Informação e profissional de TI, desenvolvendo interfaces,
              aplicações e soluções que conectam tecnologia e pessoas.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-6 flex items-start gap-3 border-l border-accent/60 pl-4 font-mono text-[13px] leading-relaxed text-fg/90">
              Primeiro entender o problema. Depois escrever o código.
            </p>
          </Reveal>

          <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projetos">Ver projetos</ButtonLink>
            <ButtonLink href="#contato" variant="secondary">
              Entre em contato
            </ButtonLink>
            <span className="mx-1 hidden h-6 w-px bg-line-strong sm:block" aria-hidden="true" />
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={0.25} y={40} className="lg:col-span-5">
          <HeroComposition />
        </Reveal>
      </Container>

      {/* Barra de status, no estilo de um editor */}
      <div className="relative border-y border-line bg-surface/50">
        <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>PUC Minas · Betim — Sistemas de Informação</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Áreas de atuação">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <span className="size-1 bg-accent" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
