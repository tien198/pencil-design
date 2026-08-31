import { DashboardChart } from "./DashboardChart";

export function ProductivityDashboard() {
  return (
    <article className="productivity-dashboard technical-grid" id="dashboard" aria-label="ETH dashboard preview">
      <dl className="productivity-dashboard__stats">
        <div>
          <dt>Total ETH holdings</dt>
          <dd>890,376</dd>
        </div>
        <div>
          <dt>Staking rewards</dt>
          <dd>26,193 ETH</dd>
        </div>
      </dl>
      <DashboardChart />
      <a className="productivity-dashboard__link" href="#dashboard">
        <span>More in ETH Dashboard</span>
        <i aria-hidden="true">→</i>
      </a>
    </article>
  );
}
