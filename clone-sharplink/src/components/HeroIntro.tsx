import { ArrowLink } from "./ArrowLink";

export function HeroIntro() {
  return (
    <header className="hero-intro">
      <h1 id="hero-title">
        Ethereum
        <br />
        with an Edge
      </h1>
      <div className="hero-section__actions">
        <ArrowLink href="#dashboard">Explore the Dashboard</ArrowLink>
        <ArrowLink href="#investors" dark>
          See Investor Information
        </ArrowLink>
      </div>
    </header>
  );
}
