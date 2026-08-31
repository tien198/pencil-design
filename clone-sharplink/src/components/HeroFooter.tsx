import { ExchangeListing } from "./ExchangeListing";
import { HeroNewsCard } from "./HeroNewsCard";

export function HeroFooter() {
  return (
    <footer className="hero-section__bottom">
      <ExchangeListing />
      <p className="hero-section__intro">
        Sharplink is the institutional-grade Ethereum treasury platform giving investors a
        smarter, more productive access vehicle to ETH.
      </p>
      <HeroNewsCard />
    </footer>
  );
}
