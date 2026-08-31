import { ArrowLink } from "./ArrowLink";
import { SectionLabel } from "./SectionLabel";

const questions = [
  ["Where is Sharplink listed?", "Our stock trades on the Nasdaq under the symbol SBET. Shares may be purchased through a registered stockbroker or online brokerage platform."],
  ["What is a Digital Asset Treasury (DAT)?", "A Digital Asset Treasury is a public-markets vehicle that safeguards digital assets like ETH on behalf of investors, providing regulated access through institutional-grade custody and administration."],
  ["How is Sharplink different from directly holding ETH?", "Sharplink combines staking, active management, DeFi participation, and capital-markets execution so ETH per share can compound over time."],
  ["How is Sharplink different from buying an ETF?", "Many ETFs provide spot exposure only. Sharplink can deploy its treasury more actively and has staked its ETH since day one."],
  ["What does it mean to maximize ETH per share?", "It means growing the underlying ETH represented by each public company share through rewards, ETH-denominated returns, and accretive capital allocation."],
  ["Does Sharplink have gaming services?", "Sharplink's core strategy is its Ethereum Digital Asset Treasury. It also operates a legacy affiliate-marketing business connecting regulated gaming operators with potential customers."],
  ["Where can I learn more or follow updates?", "Find the latest updates through Sharplink press releases, regulatory filings, the ETH dashboard, and official social channels."],
] as const;

export function FaqSection() {
  return (
    <section className="faq-section technical-grid" data-header-theme="light">
      <div className="page-shell">
        <div className="faq-section__heading">
          <div>
            <SectionLabel>Investor questions</SectionLabel>
            <h2>FAQ</h2>
          </div>
          <div className="faq-section__contact">
            <span>Got more questions?</span>
            <ArrowLink href="mailto:ir@sharplink.com" compact>Reach us</ArrowLink>
          </div>
        </div>

        <div className="faq-list">
          {questions.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <small>▪ {String(index + 1).padStart(2, "0")}</small>
                <span>{question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
