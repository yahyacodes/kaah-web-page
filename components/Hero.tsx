import Image from 'next/image';
import { serviceImages } from '@/data/site-images';
import { Badge, Button } from './ui';
import BookingPanel from './BookingPanel';
import WhatsAppButton from './WhatsAppButton';

/** Introduces the company and presents the quick inquiry panel. */
export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <Badge>Travel & Cargo, Made Simple</Badge>
        <h1>
          Travel Further.
          <br />
          Send Smarter.
        </h1>
        <p className="hero-intro">Book flights and send cargo with confidence.</p>
        <p>
          Kaah Travel & Cargo helps individuals, families, and businesses arrange flights and cargo
          shipments with clear communication, reliable support, and a simple process from start to
          finish.
        </p>
        <div className="button-row">
          <Button arrow>Get a Quote</Button>
          <WhatsAppButton />
        </div>
        <p className="trust-microcopy">
          Quick response <span>•</span> Clear pricing <span>•</span> Personal support
        </p>
      </div>
      <div className="hero-art green-art">
          <Image
            src={serviceImages.flight.src}
            alt={serviceImages.flight.alt}
            fill
            priority
            placeholder="blur"
            sizes="(max-width: 960px) 100vw, 55vw"
          />
        <BookingPanel />
      </div>
    </section>
  );
}
