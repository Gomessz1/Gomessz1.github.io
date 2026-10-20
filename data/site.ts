// Informações gerais do site. Edite aqui para atualizar nome, links e contato.

export const site = {
  name: "André Gomes Cordeiro",
  shortName: "André Gomes",
  role: "Sistemas de Informação · Tecnologia da Informação",
  description:
    "Portfólio de André Gomes Cordeiro, estudante de Sistemas de Informação na PUC Minas e profissional de TI. Interfaces, aplicações web, automações e dashboards.",
  location: "Betim, MG",
  github: {
    label: "GitHub",
    handle: "Gomessz1",
    href: "https://github.com/Gomessz1",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "andregomes",
    href: "https://www.linkedin.com/in/andregomes-11b54a366/",
  },
  // TODO: preencha com seu e-mail profissional (ex.: "nome@dominio.com").
  // Enquanto estiver vazio, o e-mail não aparece na página e o botão de
  // contato leva ao LinkedIn.
  email: "",
} as const;

export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
] as const;

export const contactHref = site.email ? `mailto:${site.email}` : site.linkedin.href;
