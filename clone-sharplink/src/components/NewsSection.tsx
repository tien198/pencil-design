import newsImage from "../assets/sharplink/news-fund.avif";
import { ArrowLink } from "./ArrowLink";
import { SectionLabel } from "./SectionLabel";

export function NewsSection() {
  return (
    <section className="news-section technical-grid" id="news" data-header-theme="light">
      <div className="page-shell">
        <div className="news-section__heading">
          <div>
            <SectionLabel>Insights from the blog</SectionLabel>
            <h2>Latest News</h2>
          </div>
          <ArrowLink href="#news" compact>Visit our Blog</ArrowLink>
        </div>

        <article className="news-card">
          <a href="#news" aria-label="Read The Galaxy Sharplink Onchain Yield Fund">
            <img src={newsImage} alt="Galaxy and Sharplink Onchain Yield Fund" />
            <div className="news-card__meta">
              <span>News</span>
              <time dateTime="2026-05-11">May 11, 2026</time>
            </div>
            <h3>The Galaxy Sharplink Onchain Yield Fund</h3>
            <i aria-hidden="true">→</i>
          </a>
        </article>
      </div>
    </section>
  );
}
