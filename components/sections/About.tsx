import Image from "next/image";
import photo from "@/public/andre.jpg";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Serif } from "@/components/ui/SectionHeading";

const facts = [
  { key: "formação", value: "Sistemas de Informação" },
  { key: "instituição", value: "PUC Minas, campus Betim" },
  { key: "atuação", value: "Tecnologia da Informação" },
  { key: "constrói", value: "Interfaces, aplicações web, automações e dashboards" },
  { key: "contextos", value: "Educação e saúde" },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-28 sm:py-36">
      <Container className="grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            Sobre
          </p>

          <figure className="mt-8 max-w-[18rem] md:sticky md:top-24">
            <div className="relative overflow-hidden rounded-lg border border-line-strong bg-surface shadow-[0_0_60px_-20px_rgb(200_241_53/0.35)]">
              <Image
                src={photo}
                alt="Foto de André Gomes Cordeiro"
                placeholder="blur"
                sizes="(min-width: 768px) 18rem, 80vw"
                className="h-auto w-full"
              />
              <span className="absolute bottom-0 right-0 size-2.5 bg-accent" aria-hidden="true" />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
              <span className="text-accent">●</span> André Gomes Cordeiro
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-9">
          <Reveal>
            <h2
              id="sobre-title"
              className="text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.9rem]"
            >
              Sou André, estudante de Sistemas de Informação na PUC Minas e profissional de TI. Gosto de
              pegar uma <Serif>necessidade real</Serif> e transformar em algo que funcione.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-9">
            <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-[17px] lg:col-span-5">
              <p>
                Trabalho na área de Tecnologia da Informação e tenho experiência prática com desenvolvimento
                de interfaces, aplicações web, automações e dashboards. No dia a dia, tenho contato com React,
                JavaScript, Next.js e Tailwind CSS, além de Git, APIs e ferramentas de documentação e integração.
              </p>
              <p>
                Participo de projetos que aplicam tecnologia à educação e à saúde — contextos em que uma tela
                bem resolvida faz diferença para quem está do outro lado.
              </p>
              <p className="text-fg">
                Aprendo melhor fazendo: entendo o problema, testo, ajusto e sigo para o próximo.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4">
              <dl className="overflow-hidden rounded-lg border border-line bg-surface font-mono text-[13px]">
                {facts.map((fact) => (
                  <div
                    key={fact.key}
                    className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-line px-4 py-3.5 last:border-b-0"
                  >
                    <dt className="text-subtle">{fact.key}</dt>
                    <dd className="text-fg">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
