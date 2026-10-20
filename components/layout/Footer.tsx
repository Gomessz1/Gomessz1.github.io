import { ArrowUp } from "lucide-react";
import { navItems, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="text-lg font-medium tracking-tight">{site.name}</p>
            <p className="mt-2 text-sm text-muted">{site.role}</p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
            <SocialLinks />
            <a
              href="#inicio"
              aria-label="Voltar ao topo"
              className="grid size-10 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <ArrowUp className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-subtle sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}
          </p>
          <p>Feito com Next.js, Tailwind CSS e Motion.</p>
        </div>
      </Container>
    </footer>
  );
}
