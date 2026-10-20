// Ilustração abstrata do HoloMed3D: estrutura em wireframe sobre uma plataforma
// de projeção. Não representa um modelo anatômico real do projeto.

const SIZE = 200;
const meridians = [0, 30, 60, 90, 120, 150];
const parallels = [-60, 0, 60]; // distância (px) do equador

export function HoloVisual() {
  const r = SIZE / 2;
  return (
    <div
      className="relative flex h-full min-h-[360px] w-full items-center justify-center overflow-hidden bg-surface"
      aria-hidden="true"
    >
      <div className="bg-grid mask-fade-y absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-[54%] h-[70%] w-[60%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgb(200_241_53/0.14),transparent)] blur-xl" />

      {/* Feixe de luz */}
      <div
        className="absolute bottom-[18%] left-1/2 h-[58%] w-[46%] -translate-x-1/2 bg-gradient-to-t from-accent/15 to-transparent"
        style={{ clipPath: "polygon(10% 100%, 90% 100%, 70% 0, 30% 0)" }}
      />

      {/* Esfera em wireframe */}
      <div className="relative -mt-10 [perspective:900px]">
        <div style={{ transform: "rotateX(-14deg) rotateZ(8deg)", transformStyle: "preserve-3d" }}>
          <div className="globe" style={{ width: SIZE, height: SIZE }}>
            {meridians.map((deg) => (
              <span key={`m${deg}`} style={{ transform: `rotateY(${deg}deg)` }} />
            ))}
            {parallels.map((y) => {
              const d = 2 * Math.sqrt(r * r - y * y);
              return (
                <span
                  key={`p${y}`}
                  style={{ width: d, height: d, transform: `rotateX(90deg) translateZ(${-y}px)` }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Plataforma */}
      <svg
        className="absolute bottom-[10%] left-1/2 w-[72%] max-w-[420px] -translate-x-1/2"
        viewBox="0 0 400 90"
        fill="none"
      >
        <ellipse cx="200" cy="45" rx="196" ry="40" stroke="rgb(200 241 53 / 0.35)" />
        <ellipse cx="200" cy="45" rx="150" ry="30" stroke="rgb(200 241 53 / 0.22)" strokeDasharray="3 6" />
        <ellipse cx="200" cy="45" rx="96" ry="19" stroke="rgb(200 241 53 / 0.5)" />
        <ellipse cx="200" cy="45" rx="96" ry="19" fill="rgb(200 241 53 / 0.06)" />
      </svg>

      {/* Linha de varredura */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
        <div className="animate-scan h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      {/* Marcações de interface */}
      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        viewer · 3d
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        <span className="size-1.5 rounded-full bg-accent" />
        mesa holográfica
      </div>
      <Corner className="left-3 top-10" />
      <Corner className="right-3 top-10 rotate-90" />
      <Corner className="bottom-3 left-3 -rotate-90" />
      <Corner className="bottom-3 right-3 rotate-180" />
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return <span className={`absolute size-3 border-l border-t border-line-strong ${className}`} />;
}
