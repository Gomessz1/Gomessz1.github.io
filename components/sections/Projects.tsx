import { ArrowUpRight, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Serif } from "@/components/ui/SectionHeading";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { categoryLabels, projects, type Project } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="border-t border-line py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="projetos-title"
          index="03"
          label="Projetos"
          title={
            <>
              Trabalho em <Serif>contexto real</Serif>.
            </>
          }
          intro="Projetos e frentes de atuação, identificados por tipo — iniciativa colaborativa, acadêmica, pessoal ou profissional."
        />

        <div className="space-y-6">
          {featured.map((project) => (
            <Reveal key={project.id}>
              <FeaturedProject project={project} />
            </Reveal>
          ))}

          <div className="grid gap-6 lg:grid-cols-2">
            {others.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group grid overflow-hidden rounded-xl border border-line transition-colors duration-500 hover:border-line-strong lg:grid-cols-12"
    >
      <div className="relative border-b border-line lg:col-span-7 lg:border-b-0 lg:border-r">
        <ProjectVisual kind={project.visual} />
      </div>

      <div className="flex flex-col p-6 sm:p-10 lg:col-span-5">
        <ProjectMeta project={project} />
        <h3 id={`${project.id}-title`} className="mt-6 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-5 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-8 space-y-3 border-t border-line pt-6 text-[15px]">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[9px] size-1.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-fg/90">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          {project.architecture && <Architecture steps={project.architecture} />}
          <ProjectFooter project={project} />
        </div>
      </div>
    </article>
  );
}

function Architecture({ steps }: { steps: string[] }) {
  return (
    <figure className="mb-6">
      <figcaption className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
        Arquitetura
      </figcaption>
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-line-strong bg-surface px-2.5 py-1.5 text-fg">{step}</span>
            {i < steps.length - 1 && (
              <span className="text-accent" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-line-strong"
    >
      <div className="border-b border-line">
        <ProjectVisual kind={project.visual} />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <ProjectMeta project={project} />
        <h3 id={`${project.id}-title`} className="mt-5 text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-6 space-y-2.5 text-[15px]">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[9px] size-1.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-fg/90">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <ProjectFooter project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
      <span className="rounded-sm bg-accent/10 px-2 py-1 text-accent">{categoryLabels[project.category]}</span>
      <span className="text-muted">{project.context}</span>
    </div>
  );
}

function ProjectFooter({ project }: { project: Project }) {
  return (
    <div className="border-t border-line pt-5">
      <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-sm border border-line px-2 py-1 font-mono text-[11px] text-muted">
            {tech}
          </li>
        ))}
      </ul>

      {project.note && (
        <p className="mt-4 flex items-center gap-2 text-xs text-subtle">
          <Lock className="size-3.5" aria-hidden="true" />
          {project.note}
        </p>
      )}

      {project.links && project.links.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
              >
                {link.label}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
