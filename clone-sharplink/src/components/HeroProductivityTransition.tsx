import { useEffect, useRef, useState } from "react";
import { HeroSection } from "./HeroSection";
import { ProductivitySection } from "./ProductivitySection";

type HeaderTheme = "dark" | "light";

const clamp = (value: number, minimum = 0, maximum = 1) =>
  Math.min(maximum, Math.max(minimum, value));

export function HeroProductivityTransition() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>("dark");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const motionQuery = window.matchMedia(
      "(min-width: 960px) and (prefers-reduced-motion: no-preference)",
    );
    const hero = root.querySelector<HTMLElement>(".hero-section");
    let frame = 0;
    let activeTheme: HeaderTheme = "dark";

    const clearTransitionStyles = () => {
      [
        "--hero-clip-top",
        "--hero-clip-right",
        "--hero-clip-bottom",
        "--hero-clip-left",
        "--hero-opacity",
        "--hero-scale",
        "--productivity-reveal",
        "--productivity-shift",
        "--dashboard-reveal",
        "--window-top",
        "--window-bottom",
      ].forEach((property) => root.style.removeProperty(property));
      if (hero) hero.inert = false;
    };

    const update = () => {
      frame = 0;
      if (!motionQuery.matches) {
        clearTransitionStyles();
        return;
      }

      const rect = root.getBoundingClientRect();
      const scrollRange = Math.max(1, root.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollRange);
      const windowProgress = clamp(progress / 0.56);
      const heroOpacity = 1 - clamp(progress / 0.75);
      const productivityReveal = clamp((progress - 0.2) / 0.8);
      const dashboardReveal = clamp((progress - 0.3) / 0.42);

      const pageMargin = 28;
      const columnGap = 28;
      const windowWidth = clamp(
        (window.innerWidth - pageMargin * 2 - columnGap * 2) / 3,
        292,
        560,
      );
      const windowTop = clamp(window.innerHeight * 0.1715, 112, 176);
      const wideLayout = window.innerWidth >= 1200;
      const windowHeight = wideLayout
        ? Math.max(460, window.innerHeight - windowTop - 148)
        : clamp(window.innerHeight - 468, 420, 570);
      const windowBottom = Math.max(96, window.innerHeight - windowTop - windowHeight);
      const inlineInset = Math.max(0, (window.innerWidth - windowWidth) / 2);

      root.style.setProperty("--hero-clip-top", `${windowTop * windowProgress}px`);
      root.style.setProperty("--hero-clip-right", `${inlineInset * windowProgress}px`);
      root.style.setProperty("--hero-clip-bottom", `${windowBottom * windowProgress}px`);
      root.style.setProperty("--hero-clip-left", `${inlineInset * windowProgress}px`);
      root.style.setProperty("--hero-opacity", heroOpacity.toFixed(4));
      root.style.setProperty("--hero-scale", (1 - windowProgress * 0.15).toFixed(4));
      root.style.setProperty("--productivity-reveal", productivityReveal.toFixed(4));
      root.style.setProperty(
        "--productivity-shift",
        `${(1 - productivityReveal) * 72}px`,
      );
      root.style.setProperty("--dashboard-reveal", dashboardReveal.toFixed(4));
      root.style.setProperty("--window-top", `${windowTop}px`);
      root.style.setProperty("--window-bottom", `${windowBottom}px`);

      if (hero) hero.inert = heroOpacity < 0.08;

      const nextTheme: HeaderTheme = progress > 0.08 ? "light" : "dark";
      if (nextTheme !== activeTheme) {
        activeTheme = nextTheme;
        setHeaderTheme(nextTheme);
      }
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const handleModeChange = () => {
      setTransitionEnabled(motionQuery.matches);
      if (!motionQuery.matches) {
        activeTheme = "dark";
        setHeaderTheme("dark");
      }
      scheduleUpdate();
    };

    handleModeChange();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motionQuery.addEventListener("change", handleModeChange);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motionQuery.removeEventListener("change", handleModeChange);
      if (frame) window.cancelAnimationFrame(frame);
      clearTransitionStyles();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-productivity-transition"
      data-header-theme={transitionEnabled ? headerTheme : undefined}
    >
      <div className="hero-productivity-transition__stage">
        <HeroSection />
        <ProductivitySection />
      </div>
    </div>
  );
}
