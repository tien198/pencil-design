import type { ReactNode } from "react";

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`section-label${light ? " section-label--light" : ""}`}>
      <i aria-hidden="true" />
      {children}
    </p>
  );
}
