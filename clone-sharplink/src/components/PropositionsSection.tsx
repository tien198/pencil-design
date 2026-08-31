import stackOutline from "../assets/sharplink/stack-outline.avif";
import { SectionLabel } from "./SectionLabel";

const propositions = [
  {
    label: "Leadership",
    title: "Built by Proven Pioneers",
    copy: "Sharplink is led by former BlackRock digital asset chief Joseph Chalom, Ethereum Cofounder Joseph Lubin, and an expert team, combining protocol-level expertise with institution-caliber execution.",
    symbol: "⌁",
  },
  {
    label: "Operations",
    title: "Treasury as an Operating System",
    copy: "Sharplink runs custody, execution, risk controls, and capital deployment in-house, allowing the platform to be built with speed, precision, and operational control.",
    symbol: "◎",
  },
  {
    label: "Equity",
    title: "Public Markets as an Advantage",
    copy: "Sharplink, a Nasdaq-listed company, uses issuance, structure, and liquidity to increase ETH concentration per share when favorable market conditions arise.",
    symbol: "⤢",
  },
  {
    label: "Transparency",
    title: "Committed to Real-time Clarity",
    copy: "We provide full visibility into ETH deployment, reward generation, and risk management.",
    symbol: "◉",
  },
  {
    label: "Collaboration",
    title: "Partnered with the Best",
    copy: "We’re partners with Consensys, the builders behind MetaMask, Linea, and the most trusted infrastructure providers and custodians across the Ethereum ecosystem.",
    symbol: "∞",
  },
] as const;

function StackMachine() {
  return (
    <div className="stack-machine" aria-hidden="true">
      <div className="stack-machine__cap stack-machine__cap--top"><i /></div>
      <div className="stack-machine__glass">
        <span className="stack-machine__glyph">S</span>
        <span className="stack-machine__orbit" />
      </div>
      <div className="stack-machine__cap stack-machine__cap--bottom"><i /></div>
      <img src={stackOutline} alt="" />
    </div>
  );
}

export function PropositionsSection() {
  return (
    <section className="propositions-section technical-grid" id="investors" data-header-theme="adaptive">
      <div className="page-shell propositions-section__inner">
        <SectionLabel>Propositions</SectionLabel>
        <h2>The Stack for<br />Stacking Ethereum</h2>
        <div className="propositions-section__content">
          <div className="proposition-list">
            {propositions.map((item) => (
              <article key={item.label}>
                <div className="proposition-list__title">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.copy}</p>
                <i aria-hidden="true">{item.symbol}</i>
              </article>
            ))}
          </div>
          <StackMachine />
        </div>
      </div>
    </section>
  );
}
