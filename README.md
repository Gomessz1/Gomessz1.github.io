# Portfólio — André Gomes Cordeiro

Next.js 15 · TypeScript · Tailwind CSS v4 · Motion · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000 (ou PORT=3100 npm run dev)
npm run build    # gera o site estático em out/ (publicado no GitHub Pages)
```

## Onde editar o conteúdo

| Arquivo | Conteúdo |
| --- | --- |
| `data/site.ts` | nome, links, **e-mail (vazio — preencha)** |
| `data/projects.ts` | projetos (adicione objetos ao array) |
| `data/skills.ts` | tecnologias por categoria |
| `data/journey.ts` | trajetória (datas opcionais via `period`) |
| `data/principles.ts` | "Como trabalho" |

Ilustrações dos projetos ficam em `components/visuals/` e são registradas em `ProjectVisual.tsx`.

## Publicação

O site é publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml`
a cada push na branch `main`.
