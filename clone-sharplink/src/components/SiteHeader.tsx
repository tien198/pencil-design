import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const links = [
  ["About", "#about"],
  ["Investors", "#investors"],
  ["Opportunity", "#opportunity"],
  ["News", "#news"],
  ["ETH Dashboard", "#dashboard"],
] as const;

export function SiteHeader({ hasCookieBanner }: { hasCookieBanner: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [surfaceTone, setSurfaceTone] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    let animationFrame = 0;

    const updateTone = () => {
      animationFrame = 0;
      const sampleY = 36;
      const surfaces = Array.from(document.querySelectorAll<HTMLElement>("[data-header-theme]"));
      const surface = surfaces.find((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom > sampleY;
      });

      if (!surface) return;
      const declaredTone = surface.dataset.headerTheme;
      if (declaredTone === "adaptive") {
        const rect = surface.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
        setSurfaceTone(progress > 0.52 ? "dark" : "light");
        return;
      }
      setSurfaceTone(declaredTone === "light" ? "light" : "dark");
    };

    const scheduleUpdate = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateTone);
    };

    updateTone();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header className={`site-header site-header--on-${surfaceTone}${hasCookieBanner ? " site-header--offset" : ""}`}>
      <a className="site-header__logo" href="#top" aria-label="Sharplink home">
        <BrandLogo />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
        <a aria-label="Go to dashboard" className="desktop-nav__arrow" href="#dashboard">→</a>
      </nav>

      <button
        className="mobile-menu-button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>Menu</span>
        <i aria-hidden="true">{menuOpen ? "×" : "="}</i>
      </button>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              <small>0{index + 1}</small>
              <span>{label}</span>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
