import {
  Atom,
  Braces,
  ChartColumn,
  ChartLine,
  CodeXml,
  FileCode,
  FileJson,
  GitBranch,
  LayoutDashboard,
  ListChecks,
  Palette,
  Plug,
  RefreshCw,
  Triangle,
  Wind,
  ArrowLeftRight,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
  // Use apenas quando quiser sinalizar algo honestamente, ex.: "em desenvolvimento".
  note?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "front-end",
    title: "Front-end",
    description: "Interfaces, componentes e layout responsivo.",
    skills: [
      { name: "React", icon: Atom },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileCode, note: "em desenvolvimento" },
      { name: "Next.js", icon: Triangle },
      { name: "Tailwind CSS", icon: Wind },
      { name: "HTML", icon: CodeXml },
      { name: "CSS", icon: Palette },
    ],
  },
  {
    id: "integracao",
    title: "Ferramentas e integração",
    description: "Versionamento, consumo de APIs, formulários e documentação.",
    skills: [
      { name: "Git e GitHub", icon: GitBranch },
      { name: "Axios", icon: ArrowLeftRight },
      { name: "TanStack Query", icon: RefreshCw },
      { name: "Formik e Yup", icon: ListChecks },
      { name: "APIs REST", icon: Plug },
      { name: "Swagger", icon: FileJson },
    ],
  },
  {
    id: "dados",
    title: "Dados e análise",
    description: "Organização da informação e visualização para tomada de decisão.",
    skills: [
      { name: "Power BI", icon: ChartColumn },
      { name: "Dashboards", icon: LayoutDashboard },
      { name: "Análise e visualização de dados", icon: ChartLine },
    ],
  },
];
