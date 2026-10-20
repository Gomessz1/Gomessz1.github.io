// Painel abstrato: blocos sem números reais, apenas a estrutura de um dashboard.

const bars = [42, 64, 50, 78, 58, 90, 66, 74, 54, 82];
const line = "M0 52 L28 44 L56 48 L84 30 L112 36 L140 20 L168 26 L196 12 L224 18 L252 8";

export function DashboardVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full bg-surface p-5 sm:p-6" aria-hidden="true">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        <span>painel</span>
        <span className="flex gap-1">
          <span className="h-1.5 w-6 rounded-full bg-accent" />
          <span className="h-1.5 w-3 rounded-full bg-line-strong" />
          <span className="h-1.5 w-3 rounded-full bg-line-strong" />
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md border border-line bg-bg/50 p-3">
            <span className="block h-1.5 w-10 rounded-full bg-line-strong" />
            <span className={`mt-3 block h-3 rounded-sm ${i === 0 ? "w-12 bg-accent/80" : "w-9 bg-fg/20"}`} />
          </div>
        ))}
      </div>

      <div className="mt-2.5 grid grid-cols-5 gap-2.5">
        <div className="col-span-3 rounded-md border border-line bg-bg/50 p-3">
          <div className="flex h-24 items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`animate-bar flex-1 rounded-[2px] ${i === 5 ? "bg-accent" : "bg-line-strong"}`}
                style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
              />
            ))}
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between rounded-md border border-line bg-bg/50 p-3">
          <span className="block h-1.5 w-12 rounded-full bg-line-strong" />
          <svg viewBox="0 0 252 60" className="h-16 w-full" fill="none" preserveAspectRatio="none">
            <path
              d={line}
              stroke="var(--color-accent)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="animate-draw"
              style={{ ["--len" as string]: 300 }}
            />
            <path d={`${line} L252 60 L0 60 Z`} fill="rgb(200 241 53 / 0.06)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
