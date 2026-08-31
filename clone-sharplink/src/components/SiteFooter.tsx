import nasdaqLogo from "../assets/sharplink/nasdaq.svg";
import { BrandLogo } from "./BrandLogo";

export function SiteFooter() {
  return (
    <footer className="site-footer technical-grid" id="footer" data-header-theme="dark">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__newsletter">
          <span className="site-footer__pin" />
          <h2>Sign up to stay sharp:</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Enter your email" />
            <button type="submit"><span>Sign up</span><i aria-hidden="true">→</i></button>
          </form>
          <img src={nasdaqLogo} alt="Nasdaq" />
          <p>Sharplink is proudly listed on <strong>Nasdaq</strong><br />under the trading symbol <strong>SBET</strong></p>
        </div>

        <div className="site-footer__navigation">
          <span>Navigation</span>
          <nav>
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="mailto:ir@sharplink.com">Contact</a>
            <a href="#investors">Investors</a>
            <a href="#opportunity">Opportunity</a>
            <a href="#dashboard">ETH Dashboard</a>
          </nav>
          <div id="privacy">
            <a href="#privacy">Privacy Policy</a>
            <a href="#privacy">Terms of Use</a>
          </div>
        </div>

        <div className="site-footer__social">
          <span>Social</span>
          <nav>
            <a href="https://www.facebook.com/sharplinkgaming" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com/SharpLinkGaming" rel="noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/company/sharplinkgaming" rel="noreferrer">LinkedIn</a>
          </nav>
          <p>© 2026 Sharplink Inc. All Rights Reserved</p>
        </div>

        <a className="site-footer__top" href="#top">Back to top <i aria-hidden="true">↑</i></a>
      </div>

      <div className="site-footer__giant-word" aria-hidden="true">
        <BrandLogo compact />
      </div>
    </footer>
  );
}
