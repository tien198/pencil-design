import opportunityOne from "../assets/sharplink/opportunity-1.webp";
import opportunityTwo from "../assets/sharplink/opportunity-2.webp";
import opportunityThree from "../assets/sharplink/opportunity-3.webp";
import opportunityFour from "../assets/sharplink/opportunity-4.webp";
import heroObject from "../assets/hero.png";
import { ArrowLink } from "./ArrowLink";
import { SectionLabel } from "./SectionLabel";

const features = [
  {
    title: "Ethereum is active, productive capital",
    copy: "ETH generates native yield through staking while remaining liquid and programmable, allowing it to function as both a security mechanism and a yield-bearing asset.",
    image: opportunityOne,
  },
  {
    title: "Ethereum secures the onchain economy",
    copy: "Ethereum is the leading platform hosting trillions of value across stablecoins, tokenized assets, and decentralized finance. ETH secures this value by protecting the network.",
    image: opportunityTwo,
  },
  {
    title: "Ethereum scales with real economic usage",
    copy: "As more assets and transactions settle on Ethereum, demand for ETH rises alongside the value secured by the network, linking ETH’s value to adoption rather than speculation.",
    image: opportunityThree,
  },
  {
    title: "Ethereum benefits from structural tailwinds",
    copy: "Institutional adoption, regulatory clarity, and asset tokenization continue to push financial activity onto Ethereum, reinforcing ETH’s role in capturing long-term network value.",
    image: opportunityFour,
  },
] as const;

export function OpportunitySection() {
  return (
    <section className="opportunity-section" id="opportunity">
      <div className="opportunity-intro technical-grid" data-header-theme="dark">
        <div className="page-shell opportunity-intro__inner">
          <SectionLabel light>The Opportunity of a Generation</SectionLabel>
          <ArrowLink href="#opportunity-features" dark compact>Learn more</ArrowLink>
          <p className="opportunity-intro__statement">
            <strong>ETH emergence as global financial infrastructure makes it the most compelling
            investment opportunity of our lifetime.</strong> The protocol is the world’s future
            financial ledger, and this is just the beginning.
          </p>
        </div>
      </div>

      <div className="opportunity-features technical-grid" id="opportunity-features" data-header-theme="light">
        <div className="page-shell opportunity-features__inner">
          <div className="opportunity-features__list">
            {features.map((feature) => (
              <article key={feature.title}>
                <img src={feature.image} alt="" />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="opportunity-art" aria-hidden="true">
            <video autoPlay muted loop playsInline poster={heroObject}>
              <source
                src="https://a.storyblok.com/f/290008427472090/x/324ca8b2c3/shrp_homeopportunity_chrome.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
