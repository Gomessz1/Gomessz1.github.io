import type { ProjectVisualKind } from "@/data/projects";
import { HoloVisual } from "./HoloVisual";
import { DashboardVisual } from "./DashboardVisual";
import { WebAppVisual } from "./WebAppVisual";

// Para um novo tipo de ilustração, crie o componente e registre aqui.
const visuals: Record<ProjectVisualKind, () => React.JSX.Element> = {
  holo: HoloVisual,
  dashboard: DashboardVisual,
  webapp: WebAppVisual,
};

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  const Visual = visuals[kind];
  return <Visual />;
}
