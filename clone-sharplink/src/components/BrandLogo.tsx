type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`brand-logo${compact ? " brand-logo--compact" : ""}`}>
      <svg aria-hidden="true" viewBox="0 0 32 28" className="brand-logo__mark">
        <path d="M3 9.5 16 2l13 7.5-13 7.4L3 9.5Z" />
        <path d="M3 14.8 16 7.4l13 7.4-13 7.5-13-7.5Z" />
        <path d="M3 20.1 16 12.7l13 7.4-13 7.4-13-7.4Z" />
      </svg>
      <span className="brand-logo__wordmark">Sharplink</span>
    </span>
  );
}
