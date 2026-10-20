import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Serif } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="stack-title"
          index="02"
          label="Stack"
          title={
            <>
              Ferramentas que uso para <Serif>construir</Serif>.
            </>
          }
          intro="Organizadas pelo papel que cumprem no trabalho — sem notas ou porcentagens inventadas."
        />

        <div className="border-t border-line">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.05}>
              <div className="group grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-subtle">0{gi + 1}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight">{group.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{group.description}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-2.5 md:col-span-8">
                  {group.skills.map(({ name, icon: Icon, note }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2.5 rounded-md border border-line bg-surface px-4 py-3 text-[15px] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface-2"
                    >
                      <Icon className="size-[18px] text-accent" aria-hidden="true" strokeWidth={1.6} />
                      {name}
                      {note && (
                        <span className="rounded-sm border border-line-strong px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                          {note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
