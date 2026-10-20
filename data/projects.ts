// Para adicionar um projeto, inclua um novo objeto neste array.
// - `category` diferencia projetos pessoais, acadêmicos, profissionais e colaborativos.
// - `visual` escolhe a ilustração (veja components/visuals/ProjectVisual.tsx).
// - `links` só deve conter destinos reais; sem links, nada é exibido.
// - `architecture` (opcional) mostra o fluxo entre as camadas.
// - `featured: true` exibe o projeto em destaque, em largura total.

export type ProjectCategory = "pessoal" | "academico" | "profissional" | "colaborativo";

export const categoryLabels: Record<ProjectCategory, string> = {
  pessoal: "Projeto pessoal",
  academico: "Projeto acadêmico",
  profissional: "Atuação profissional",
  colaborativo: "Iniciativa colaborativa",
};

export type ProjectVisualKind = "holo" | "dashboard" | "webapp";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  context: string;
  summary: string;
  highlights: string[];
  stack: string[];
  visual: ProjectVisualKind;
  featured?: boolean;
  // Fluxo opcional exibido como "Arquitetura" (ex.: front-end → API → banco).
  architecture?: string[];
  note?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "holomed3d",
    title: "HoloMed3D",
    // TODO: confirme se a classificação ideal é "academico" ou "colaborativo".
    category: "colaborativo",
    context: "Educação em saúde · Visualização 3D",
    summary:
      "Projeto voltado à visualização de estruturas anatômicas em 3D e à exploração de experiências educacionais em saúde, unindo software, modelos tridimensionais e uma estrutura física de visualização.",
    highlights: [
      "Desenvolvimento da interface com React e Vite.",
      "Arquitetura que integra o front-end a ASP.NET Core e PostgreSQL.",
      "Uso de modelos 3D, incluindo conteúdo incorporado do Sketchfab.",
      "Parte de uma iniciativa que envolve uma mesa holográfica e uma estrutura física de visualização.",
    ],
    stack: ["React", "Vite", "ASP.NET Core", "PostgreSQL", "Sketchfab"],
    architecture: ["React + Vite", "ASP.NET Core", "PostgreSQL"],
    visual: "holo",
    featured: true,
  },
  {
    id: "dashboards",
    title: "Dashboards e análise de dados",
    category: "profissional",
    context: "Ambientes educacionais · Área da saúde",
    summary:
      "Construção e manutenção de dashboards em Power BI, organizando informações para que fiquem mais fáceis de consultar, acompanhar e interpretar.",
    highlights: [
      "Construção e manutenção de painéis em Power BI.",
      "Organização das informações antes da visualização.",
      "Leitura clara dos dados para quem acompanha o dia a dia.",
    ],
    stack: ["Power BI", "Dashboards", "Visualização de dados"],
    visual: "dashboard",
    note: "Dados e detalhes internos não são exibidos por confidencialidade.",
  },
  {
    id: "web-apps",
    title: "Aplicações e automações web",
    category: "profissional",
    context: "Interfaces · Integração com APIs",
    summary:
      "Interfaces em React pensadas para organizar dados e simplificar tarefas: formulários, filtros, paginação, integração com APIs e automação de processos.",
    highlights: [
      "Formulários com validação usando Formik e Yup.",
      "Listagens com filtros e paginação.",
      "Consumo de APIs REST com Axios e TanStack Query.",
      "Automação de processos para reduzir etapas manuais.",
    ],
    stack: ["React", "JavaScript", "Axios", "TanStack Query", "Formik", "Yup"],
    visual: "webapp",
    note: "Projetos internos — código e telas não são públicos.",
  },
];
