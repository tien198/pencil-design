import heroOverlay from "../assets/sharplink/hero-overlay.avif";

export function HeroBackground() {
  return (
    <div className="hero-section__media" aria-hidden="true">
      <video
        className="hero-section__video"
        autoPlay
        muted
        loop
        playsInline
        poster={heroOverlay}
      >
        <source
          src="https://a.storyblok.com/f/290008427472090/x/87414464bd/shrp_homepagehero_30fps.webm"
          type="video/webm"
        />
      </video>
      <div className="hero-section__shade" />
    </div>
  );
}
