export type Principle = {
  keyword: string;
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    keyword: "problema()",
    title: "Problema antes da solução",
    description: "Começo entendendo a necessidade real. A tecnologia vem depois, como ferramenta.",
  },
  {
    keyword: "usuario.ux",
    title: "Experiência de quem usa",
    description: "Interfaces claras, estados previsíveis e menos atrito para quem usa no dia a dia.",
  },
  {
    keyword: "refactor",
    title: "Código que se mantém",
    description: "Componentes reutilizáveis, nomes claros e uma estrutura que facilita a próxima mudança.",
  },
  {
    keyword: "ui → api → dados",
    title: "O caminho completo",
    description: "Penso do formulário à requisição, e da requisição ao dado que aparece na tela.",
  },
  {
    keyword: "while (true)",
    title: "Aprender fazendo",
    description: "Aprendo na prática, em projetos reais, e levo o que aprendi para o próximo.",
  },
  {
    keyword: "deploy(real)",
    title: "Utilidade real",
    description: "Prefiro soluções que resolvem situações concretas a soluções que só impressionam.",
  },
];
