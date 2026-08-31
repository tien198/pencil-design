import { ArrowLink } from "./ArrowLink";

export function CompoundBanner() {
  return (
    <section className="compound-banner technical-grid" data-header-theme="dark">
      <div className="page-shell compound-banner__inner">
        <h2><strong>Ethereum for Everyone,</strong><br />Engineered to Compound.</h2>
        <div className="compound-banner__actions">
          <ArrowLink href="#dashboard">Explore the Dashboard</ArrowLink>
          <ArrowLink href="#investors" dark>See Investor Information</ArrowLink>
        </div>
        <div className="compound-banner__wire" aria-hidden="true">
          <span>Ξ</span>
        </div>
      </div>
    </section>
  );
}
