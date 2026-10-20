// Composição abstrata da hero: editor de código + cubo 3D + mini gráfico.
// Representa os três eixos do trabalho: interfaces, visualização 3D e dados.

type Token = [text: string, kind?: "kw" | "str" | "prop" | "fn" | "cm" | "pn"];

const colors: Record<NonNullable<Token[1]>, string> = {
  kw: "text-accent",
  str: "text-[#cfd4c4]",
  prop: "text-fg",
  fn: "text-[#e6e0b0]",
  cm: "text-subtle",
  pn: "text-muted",
};

const code: Token[][] = [
  [["// quem sou, em poucas linhas", "cm"]],
  [["const ", "kw"], ["andre", "prop"], [" = {", "pn"]],
  [["  formacao", "prop"], [": ", "pn"], ['"Sistemas de Informação"', "str"], [",", "pn"]],
  [["  campus", "prop"], [": ", "pn"], ['"PUC Minas — Betim"', "str"], [",", "pn"]],
  [["  atuacao", "prop"], [": ", "pn"], ['"Tecnologia da Informação"', "str"], [",", "pn"]],
  [["  constroi", "prop"], [": [", "pn"], ['"interfaces"', "str"], [", ", "pn"], ['"apps web"', "str"], [",", "pn"]],
  [["             ", "pn"], ['"automações"', "str"], [", ", "pn"], ['"dashboards"', "str"], ["],", "pn"]],
  [["  contextos", "prop"], [": [", "pn"], ['"educação"', "str"], [", ", "pn"], ['"saúde"', "str"], ["],", "pn"]],
  [["};", "pn"]],
  [],
  [["export const ", "kw"], ["resolver", "fn"], [" = (", "pn"], ["problema", "prop"], [") =>", "pn"]],
  [["  ", "pn"], ["entender", "fn"], ["(", "pn"], ["problema", "prop"], [").", "pn"], ["then", "fn"], ["(", "pn"], ["construir", "fn"], [");", "pn"]],
];

const bars = [38, 56, 44, 72, 60, 88, 70];

export function HeroComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] [perspective:1200px]" aria-hidden="true">
      <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(closest-side,rgb(200_241_53/0.10),transparent)] blur-2xl" />

      {/* Editor */}
      <div className="relative overflow-hidden rounded-xl border border-line-strong bg-surface/90 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </div>
          <span className="font-mono text-[11px] text-muted">andre.config.ts</span>
          <span className="font-mono text-[10px] text-subtle">TS</span>
        </div>

        <pre className="overflow-hidden px-4 py-5 font-mono text-[10.5px] leading-[1.85] sm:px-5 sm:text-[12.5px]">
          <code>
            {code.map((line, i) => (
              <span key={i} className="flex">
                <span className="mr-4 w-5 shrink-0 select-none text-right text-line-strong">{i + 1}</span>
                <span className="whitespace-pre">
                  {line.map(([text, kind = "pn"], j) => (
                    <span key={j} className={colors[kind]}>
                      {text}
                    </span>
                  ))}
                  {i === code.length - 1 && (
                    <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[3px] bg-accent" />
                  )}
                </span>
              </span>
            ))}
          </code>
        </pre>

        <div className="flex items-center justify-between border-t border-line bg-bg/40 px-4 py-2 font-mono text-[10px] text-subtle">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent" /> main
          </span>
          <span>React · Next.js · Tailwind</span>
        </div>
      </div>

      {/* Cubo 3D */}
      <div className="absolute -right-2 -top-10 rounded-lg border border-line-strong bg-bg/85 p-4 backdrop-blur-md sm:-right-8 sm:-top-12">
        <div className="grid size-[84px] place-items-center [perspective:500px]">
          <div className="cube">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <p className="mt-2 font-mono text-[10px] text-muted">3d.view</p>
      </div>

      {/* Mini gráfico */}
      <div className="absolute -bottom-20 -left-2 w-[180px] rounded-lg border border-line-strong bg-bg/85 p-4 backdrop-blur-md sm:-left-10 sm:w-[200px]">
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-muted">
          <span>dashboard</span>
          <span className="size-1.5 rounded-full bg-accent" />
        </div>
        <div className="flex h-14 items-end gap-1.5">
          {bars.map((h, i) => (
            <span
              key={i}
              className={`animate-bar flex-1 rounded-[2px] ${i === 5 ? "bg-accent" : "bg-line-strong"}`}
              style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.08}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
