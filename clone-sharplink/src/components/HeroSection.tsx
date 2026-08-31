import heroOverlay from "../assets/sharplink/hero-overlay.avif";
import nasdaqLogo from "../assets/sharplink/nasdaq-white.avif";
import { ArrowLink } from "./ArrowLink";

export function HeroSection() {
  return (
    <section className="hero-section technical-grid" id="top" data-header-theme="dark">
      <video
        className="hero-section__video"
        autoPlay
        muted
        loop
        playsInline
        poster={heroOverlay}
        aria-hidden="true"
      >
        <source
          src="https://a.storyblok.com/f/290008427472090/x/87414464bd/shrp_homepagehero_30fps.webm"
          type="video/webm"
        />
      </video>
      <div className="hero-section__shade" />

      <div className="hero-section__content page-shell">
        <h1>Ethereum<br />with an Edge</h1>
        <div className="hero-section__actions">
          <ArrowLink href="#dashboard">Explore the Dashboard</ArrowLink>
          <ArrowLink href="#investors" dark>See Investor Information</ArrowLink>
        </div>

        <div className="hero-section__bottom">
          <div className="listing-lockup">
            <span>Proudly listed on</span>
            <img src={nasdaqLogo} alt="Nasdaq" />
          </div>
          <p className="hero-section__intro">
            Sharplink is the institutional-grade Ethereum treasury platform giving investors a
            smarter, more productive access vehicle to ETH.
          </p>
          <a className="hero-news-card" href="#news">
            <div><span>Company news</span><time dateTime="2026-08-10">Aug 10, 2026</time></div>
            <strong>Sharplink Reports Second Quarter 2026 Financial and Operating Results</strong>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </div>
    </section>
  );
}
