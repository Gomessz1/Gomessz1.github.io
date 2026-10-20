import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Serif } from "@/components/ui/SectionHeading";
import { journey } from "@/data/journey";

export function Journey() {
  return (
    <section id="trajetoria" aria-labelledby="trajetoria-title" className="border-t border-line py-28 sm:py-36">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span className="text-accent">04</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              Trajetória
            </p>
            <h2
              id="trajetoria-title"
              className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-balance sm:text-5xl"
            >
              Um caminho <Serif>em construção</Serif>.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted">
              Formação acadêmica e prática profissional andando juntas — cada etapa somando à anterior.
            </p>
          </Reveal>
        </div>

        <ol className="relative before:absolute before:bottom-3 before:left-[7px] before:top-3 before:w-px before:bg-gradient-to-b before:from-accent/70 before:via-line-strong before:to-line lg:col-span-8">
          {journey.map((step, i) => (
            <li key={step.title} className="relative pb-12 pl-12 last:pb-0">
              <span
                className={`absolute left-0 top-1.5 grid size-[15px] place-items-center rounded-full border bg-bg ${
                  step.current ? "border-accent" : "border-line-strong"
                }`}
                aria-hidden="true"
              >
                <span className={`size-[5px] rounded-full ${step.current ? "bg-accent" : "bg-line-strong"}`} />
              </span>
              <Reveal delay={i * 0.04}>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-muted">{step.label}</span>
                  {step.period && <span className="text-subtle">{step.period}</span>}
                  {step.current && (
                    <span className="rounded-sm bg-accent/10 px-1.5 py-0.5 text-accent">em andamento</span>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">{step.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
