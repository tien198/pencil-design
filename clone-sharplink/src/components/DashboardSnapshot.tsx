import productivityOne from "../assets/sharplink/productivity-1.avif";
import productivityTwo from "../assets/sharplink/productivity-2.avif";
import productivityThree from "../assets/sharplink/productivity-3.avif";

const advantages = [
  ["01", "Staked since day one", productivityOne],
  ["02", "Enhanced yield incentives", productivityTwo],
  ["03", "Trackable day-by-day", productivityThree],
] as const;

export function DashboardSnapshot() {
  return (
    <section className="dashboard-snapshot page-shell" id="dashboard" data-header-theme="dark">
      <div className="dashboard-panel technical-grid">
        <div className="dashboard-panel__stat">
          <span>Total ETH Holdings</span>
          <strong>859K</strong>
        </div>
        <div className="dashboard-panel__stat">
          <span>Staking rewards</span>
          <strong>14.2K ETH</strong>
        </div>
        <svg className="dashboard-chart" viewBox="0 0 560 210" role="img" aria-label="Growing staking rewards chart">
          <defs>
            <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#188cff" stopOpacity=".36" />
              <stop offset="1" stopColor="#188cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 13 }).map((_, index) => (
            <line key={index} x1={15 + index * 44} x2={15 + index * 44} y1="8" y2="194" />
          ))}
          <path className="dashboard-chart__fill" d="M15 185C70 182 80 150 125 145S205 108 250 96 330 75 375 47 455 26 545 14V198H15Z" />
          <path className="dashboard-chart__line" d="M15 185C70 182 80 150 125 145S205 108 250 96 330 75 375 47 455 26 545 14" />
          <rect x="538" y="7" width="12" height="12" />
        </svg>
        <a className="dashboard-panel__link" href="#dashboard">More in ETH Dashboard <span>→</span></a>
      </div>

      <div className="dashboard-advantages">
        {advantages.map(([number, title, image]) => (
          <article key={number}>
            <span>▪ {number}</span>
            <h3>{title}</h3>
            <img src={image} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
}
