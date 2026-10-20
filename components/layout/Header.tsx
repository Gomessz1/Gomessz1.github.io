"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contactHref, navItems, site } from "@/data/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção visível no centro da tela.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label={`${site.name} — início`}>
          <span className="relative grid size-8 place-items-center rounded-md border border-line-strong font-mono text-[13px] font-medium transition-colors group-hover:border-accent/70">
            AG
            <span className="absolute -bottom-px -right-px size-1.5 bg-accent" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">{site.shortName}</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item, i) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`group flex items-baseline gap-1.5 rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] transition-colors ${
                        isActive ? "text-accent" : "text-subtle group-hover:text-accent"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contactHref}
            {...(site.email ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="hidden rounded-md border border-line-strong px-4 py-2 text-sm transition-colors hover:border-accent/70 hover:text-accent md:inline-flex"
          >
            Fale comigo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 place-items-center rounded-md border border-line-strong md:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Navegação principal (celular)" className="px-5 pb-8 pt-4">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-2xl font-medium tracking-tight"
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-6" />
        </nav>
      </div>
    </header>
  );
}
