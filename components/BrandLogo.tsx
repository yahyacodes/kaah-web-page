// The original company artwork is displayed through a tight SVG viewport.
// The JPEG is preserved byte-for-byte; only its surrounding white margin is hidden.
export default function BrandLogo({ className = '' }: { className?: string }) {
  return <svg className={`brand-logo ${className}`} viewBox="125 365 1340 475" role="img" aria-label="Kaah Travel & Cargo Agency LTD" focusable="false"><image href="/brand/kaah-logo.jpeg" x="0" y="0" width="1600" height="1236" /></svg>;
}
