export function CookieBanner({ onClose }: { onClose: () => void }) {
  return (
    <aside className="cookie-banner" aria-label="Cookie notice">
      <p>
        This website uses cookies to improve your experience. By continuing to browse the site you
        agree to our <a href="#privacy">privacy policy</a>
      </p>
      <button aria-label="Close cookie notice" onClick={onClose}>×</button>
    </aside>
  );
}
