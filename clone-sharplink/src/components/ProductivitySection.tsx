import productivityOne from "../assets/sharplink/productivity-1.avif";
import productivityTwo from "../assets/sharplink/productivity-2.avif";
import productivityThree from "../assets/sharplink/productivity-3.avif";
import { SectionLabel } from "./SectionLabel";

const items = [
  ["01", "Staked since day one", productivityOne],
  ["02", "Enhanced yield incentives", productivityTwo],
  ["03", "Trackable day-by-day", productivityThree],
] as const;

export function ProductivitySection() {
  return (
    <section className="productivity-section technical-grid" id="about" data-header-theme="light">
      <div className="page-shell productivity-section__layout">
        <div className="productivity-section__copy">
          <SectionLabel>Our standard</SectionLabel>
          <h2>Pioneering<br />Productivity</h2>
          <p>
            By combining native protocol rewards, ecosystem incentives, and institutional-grade
            custody, we set a new standard for how ETH works as an asset — and compounds over time.
          </p>
        </div>
        <div className="productivity-visual" aria-hidden="true">
          <div className="productivity-visual__diamond">Ξ</div>
        </div>
        <div className="productivity-list">
          {items.map(([number, title, image]) => (
            <article key={number}>
              <span>▪ {number}</span>
              <h3>{title}</h3>
              <img src={image} alt="" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
