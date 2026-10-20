import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Serif } from "@/components/ui/SectionHeading";
import { principles } from "@/data/principles";

export function Approach() {
  return (
    <section id="forma-de-trabalhar" aria-labelledby="abordagem-title" className="border-t border-line bg-surface/40 py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="abordagem-title"
          index="05"
          label="Como trabalho"
          title={
            <>
              Menos ruído, mais <Serif>solução</Serif>.
            </>
          }
        />

        <Reveal>
          <ul className="grid overflow-hidden rounded-xl border border-line sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => (
              <li
                key={item.title}
                className="group relative -mb-px -mr-px border-b border-r border-line bg-bg p-7 transition-colors duration-500 hover:bg-surface-2 sm:p-8"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-subtle transition-colors group-hover:text-accent">0{i + 1}</span>
                  <code className="rounded-sm border border-line px-2 py-1 text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    {item.keyword}
                  </code>
                </div>
                <h3 className="mt-12 text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
