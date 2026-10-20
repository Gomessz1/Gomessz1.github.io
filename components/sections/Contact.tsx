import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Serif } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { contactHref, site } from "@/data/site";

type Channel = {
  label: string;
  value: string;
  href: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  external: boolean;
};

const channels: Channel[] = [
  { label: "GitHub", value: `@${site.github.handle}`, href: site.github.href, Icon: GithubIcon, external: true },
  { label: "LinkedIn", value: "André Gomes", href: site.linkedin.href, Icon: LinkedinIcon, external: true },
  // O e-mail só aparece quando `site.email` estiver preenchido em data/site.ts.
  ...(site.email
    ? [{ label: "E-mail", value: site.email, href: `mailto:${site.email}`, Icon: Mail, external: false }]
    : []),
];

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden border-t border-line py-28 sm:py-40">
      <div
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(200_241_53/0.08),transparent)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-accent">06</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            Contato
          </p>
          <h2
            id="contato-title"
            className="mt-8 max-w-[14ch] text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-balance sm:text-7xl lg:text-[6.5rem]"
          >
            Vamos construir algo <Serif>interessante?</Serif>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Estou sempre aberto a trocar ideias sobre tecnologia, desenvolvimento e projetos que possam gerar
              impacto.
            </p>
            <ButtonLink href={contactHref} external={!site.email} className="mt-8">
              {site.email ? "Enviar e-mail" : "Entre em contato pelo LinkedIn"}
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-line">
              {channels.map(({ label, value, href, Icon, external }) => (
                <li key={label} className="border-b border-line">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 py-6 transition-colors"
                  >
                    <Icon className="size-5 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                    <span className="w-24 font-mono text-xs uppercase tracking-[0.14em] text-subtle">{label}</span>
                    <span className="flex-1 truncate text-lg tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                      {value}
                    </span>
                    <ArrowUpRight
                      className="size-5 text-muted transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                    {external && <span className="sr-only">(abre em nova aba)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
