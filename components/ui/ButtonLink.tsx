import { ArrowUpRight, ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center gap-2.5 rounded-md px-5 py-3 text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-bg hover:bg-fg",
  secondary: "border border-line-strong text-fg hover:border-accent/70 hover:bg-surface-2",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <Icon
        aria-hidden="true"
        className={`size-4 transition-transform duration-300 ease-out ${
          external
            ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            : "group-hover:translate-x-1"
        }`}
      />
      {external && <span className="sr-only">(abre em nova aba)</span>}
    </a>
  );
}
