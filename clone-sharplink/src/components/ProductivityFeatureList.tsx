import productivityOne from "../assets/sharplink/productivity-1.avif";
import productivityTwo from "../assets/sharplink/productivity-2.avif";
import productivityThree from "../assets/sharplink/productivity-3.avif";

const features = [
  ["01", "Staked since day one", productivityOne],
  ["02", "Enhanced yield incentives", productivityTwo],
  ["03", "Trackable day-by-day", productivityThree],
] as const;

export function ProductivityFeatureList() {
  return (
    <div className="productivity-list" aria-label="Productivity advantages">
      {features.map(([number, title, image]) => (
        <article key={number}>
          <span>▪ {number}</span>
          <h3>{title}</h3>
          <img src={image} alt="" />
        </article>
      ))}
    </div>
  );
}
