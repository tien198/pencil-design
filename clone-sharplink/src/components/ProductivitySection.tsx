import { ProductivityDashboard } from "./ProductivityDashboard";
import { ProductivityFeatureList } from "./ProductivityFeatureList";
import { ProductivityIntro } from "./ProductivityIntro";

export function ProductivitySection() {
  return (
    <section
      className="productivity-section technical-grid"
      id="about"
      data-header-theme="light"
      aria-labelledby="productivity-title"
    >
      <div className="page-shell productivity-section__layout">
        <ProductivityIntro />
        <ProductivityDashboard />
        <ProductivityFeatureList />
      </div>
    </section>
  );
}
