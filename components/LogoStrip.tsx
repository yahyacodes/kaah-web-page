import { Plane, Package, Compass, Boxes, Headphones, MapPin } from 'lucide-react';
const labels = [{ label: 'Flight Booking', Icon: Plane }, { label: 'Cargo Services', Icon: Package }, { label: 'Travel Assistance', Icon: Compass }, { label: 'Business Shipping', Icon: Boxes }, { label: 'Customer Support', Icon: Headphones }, { label: 'International Connections', Icon: MapPin }];

export default function TrustStrip() {
  return <section className="logo-strip container" aria-label="Kaah services"><p>Travel and cargo services you can rely on</p><div className="trust-grid">{labels.map(({ label, Icon }) => <div key={label}><Icon size={23} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span></div>)}</div></section>;
}
