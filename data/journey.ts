// Marcos da trajetória, sem datas. Quando quiser, adicione `period` (ex.: "2024 — atual").

export type JourneyStep = {
  title: string;
  label: string;
  description: string;
  period?: string;
  current?: boolean;
};

export const journey: JourneyStep[] = [
  {
    label: "Formação",
    title: "Sistemas de Informação — PUC Minas, campus Betim",
    description:
      "Graduação em andamento, que me dá base em desenvolvimento de software, dados e na forma como sistemas sustentam o trabalho das pessoas.",
    current: true,
  },
  {
    label: "Atuação",
    title: "Experiência prática em Tecnologia da Informação",
    description:
      "Trabalho na área de TI, lidando com demandas reais e aprendendo com o que funciona — e com o que precisa ser ajustado.",
  },
  {
    label: "Desenvolvimento",
    title: "Interfaces e aplicações web",
    description:
      "Construção de interfaces em React, formulários, filtros, paginação e integração com APIs, com atenção à usabilidade.",
  },
  {
    label: "Contextos",
    title: "Educação, dashboards e saúde",
    description:
      "Contato com projetos educacionais, dashboards em Power BI e soluções voltadas à área da saúde, como o HoloMed3D.",
  },
  {
    label: "Contínuo",
    title: "Aprendizado e evolução técnica",
    description:
      "Aprofundando TypeScript, boas práticas de organização de código e a integração entre interface, API e dados.",
    current: true,
  },
];
