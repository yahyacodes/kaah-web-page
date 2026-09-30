import { services } from '@/data/site-content';
import { Button, SectionHeading, Reveal } from './ui';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { serviceImages } from '@/data/site-images';

type Service = (typeof services)[number];
/** Pairs each service with a relevant photo and a link to its inquiry section. */
export function FeatureCard({ title, description, type, href }: Service) {
  const photo = serviceImages[type];

  return (
    <article className="feature-card">
      <a className="service-photo" href={href} aria-label={`Explore ${title}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          placeholder="blur"
          sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 800px) calc((100vw - 80px) / 2), 295px"
          style={{ objectPosition: photo.position }}
        />
        <span className="service-photo-arrow" aria-hidden="true">
          <ArrowUpRight size={20} />
        </span>
      </a>
      <h3>
        <a href={href}>{title}</a>
      </h3>
      <p>{description}</p>
    </article>
  );
}
/** Groups the available services with a shared heading and call to action. */
export default function ServicesSection() {
  return (
    <section className="container section features" id="services">
      <Reveal>
        <SectionHeading
          center
          eyebrow="Everything You Need"
          title="One Team for Your Entire Journey."
          description="From your first inquiry to your final destination, Kaah makes travel and cargo straightforward."
        />
        <div className="feature-grid">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
        <div className="button-row centered">
          <Button arrow>Start Your Journey</Button>
        </div>
      </Reveal>
    </section>
  );
}
