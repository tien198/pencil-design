import { HeroBackground } from "./HeroBackground";
import { HeroFooter } from "./HeroFooter";
import { HeroIntro } from "./HeroIntro";

export function HeroSection() {
  return (
    <section
      className="hero-section technical-grid"
      id="top"
      data-header-theme="dark"
      aria-labelledby="hero-title"
    >
      <HeroBackground />
      <div className="hero-section__content page-shell">
        <HeroIntro />
        <HeroFooter />
      </div>
    </section>
  );
}
