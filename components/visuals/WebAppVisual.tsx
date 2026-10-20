import { Search, Check } from "lucide-react";

// Interface abstrata: busca, filtros, tabela, paginação e validação de formulário.

const rows = [
  { w: "w-24", status: true },
  { w: "w-32", status: false },
  { w: "w-20", status: true },
  { w: "w-28", status: true },
];

export function WebAppVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full bg-surface p-5 sm:p-6" aria-hidden="true">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-bg/50 px-2.5">
          <Search className="size-3.5 text-subtle" />
          <span className="font-mono text-[10px] text-subtle">buscar…</span>
        </div>
        <span className="rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1.5 font-mono text-[10px] text-accent">
          filtro ✓
        </span>
        <span className="rounded-md border border-line px-2.5 py-1.5 font-mono text-[10px] text-muted">
          ordenar
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-md border border-line">
        <div className="flex items-center gap-3 border-b border-line bg-bg/60 px-3 py-2">
          <span className="h-1.5 w-10 rounded-full bg-line-strong" />
          <span className="ml-auto h-1.5 w-8 rounded-full bg-line-strong" />
        </div>
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-3 border-b border-line px-3 py-2.5 last:border-b-0">
            <span className="size-3 rounded-[3px] border border-line-strong" />
            <span className={`h-1.5 rounded-full bg-fg/25 ${row.w}`} />
            <span className={`ml-auto size-1.5 rounded-full ${row.status ? "bg-accent" : "bg-line-strong"}`} />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-md border border-line bg-bg/50 px-2.5 py-1.5">
          <Check className="size-3 text-accent" />
          <span className="font-mono text-[10px] text-muted">campo válido</span>
        </div>
        <div className="flex items-center gap-1 font-mono text-[10px]">
          <span className="px-1.5 text-subtle">‹</span>
          <span className="grid size-6 place-items-center rounded bg-accent text-bg">1</span>
          <span className="grid size-6 place-items-center rounded text-muted">2</span>
          <span className="grid size-6 place-items-center rounded text-muted">3</span>
          <span className="px-1.5 text-subtle">›</span>
        </div>
      </div>
    </div>
  );
}
