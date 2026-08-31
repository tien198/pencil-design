import type { ReactNode } from "react";

type ArrowLinkProps = {
  children: ReactNode;
  href: string;
  dark?: boolean;
  compact?: boolean;
};

export function ArrowLink({ children, href, dark = false, compact = false }: ArrowLinkProps) {
  return (
    <a
      className={`arrow-link${dark ? " arrow-link--dark" : ""}${compact ? " arrow-link--compact" : ""}`}
      href={href}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="arrow-link__icon">→</span>
    </a>
  );
}
