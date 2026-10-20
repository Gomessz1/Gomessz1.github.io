import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
};

export function SectionHeading({ index, label, title, intro, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted md:col-span-3">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        {label}
      </p>
      <div className="md:col-span-9">
        <h2
          id={id}
          className="max-w-[18ch] text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
        {intro && <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
      </div>
    </Reveal>
  );
}

export function Serif({ children }: { children: React.ReactNode }) {
  return <em className="font-serif font-normal italic tracking-[-0.01em] text-accent">{children}</em>;
}
