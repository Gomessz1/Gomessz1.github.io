import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { site } from "@/data/site";

const socials = [
  { ...site.github, Icon: GithubIcon },
  { ...site.linkedin, Icon: LinkedinIcon },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (abre em nova aba)`}
            className="grid size-10 place-items-center rounded-md border border-line text-muted transition-colors duration-300 hover:border-accent/60 hover:text-accent"
          >
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
