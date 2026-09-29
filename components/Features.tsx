import { services } from '@/data/site-content';
import { Button, SectionHeading, Reveal } from './ui';
import ProductMockup from './ProductMockup';

type Service = typeof services[number];
export function FeatureCard({ title, description, type, href }: Service) {
  return <article className="feature-card"><div className="green-art feature-art"><ProductMockup type={type} /></div><h3><a href={href}>{title}</a></h3><p>{description}</p></article>;
}
export default function ServicesSection() {
  return <section className="container section features" id="services"><Reveal><SectionHeading center eyebrow="Everything You Need" title="One Team for Your Entire Journey." description="From your first inquiry to your final destination, Kaah makes travel and cargo straightforward." /><div className="feature-grid">{services.map(service => <FeatureCard key={service.title} {...service} />)}</div><div className="button-row centered"><Button arrow>Start Your Journey</Button></div></Reveal></section>;
}
