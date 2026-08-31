import nasdaqLogo from "../assets/sharplink/nasdaq-white.avif";

export function ExchangeListing() {
  return (
    <div className="listing-lockup" aria-label="Proudly listed on Nasdaq">
      <span>Proudly listed on</span>
      <img src={nasdaqLogo} alt="Nasdaq" />
    </div>
  );
}
