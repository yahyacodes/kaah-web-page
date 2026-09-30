import Image from 'next/image';
import SectionPhoto from './SectionPhoto';
import { ArrowUpRight } from 'lucide-react';
import { destinations } from '@/data/site-content';
import { Badge } from './ui';
import WhatsAppButton from './WhatsAppButton';

/** Pairs each country flag with local city photography in a scrolling destination gallery. */
export default function Destinations() {
  return (
    <section className="container section integrations" id="destinations">
      <Badge>Our Network</Badge>
      <div className="split-heading">
        <h2>
          From Here
          <br />
          to the World.
        </h2>
        <p>
          Whether you’re travelling, sending something home, or moving goods for your business, Kaah
          helps connect you to the places that matter.
        </p>
      </div>
      <div
        className="green-art integration-band destination-band destination-gallery"
        role="region"
        aria-label="Country photos and flags; scroll horizontally to explore"
        tabIndex={0}
      >
        <div className="integration-track">
          {/* Repeat cards for a seamless loop; hide the second copy from screen readers. */}
          {[...destinations, ...destinations].map(({ name, flag, photo }, i) => (
            <div
              className="integration-tile destination-tile destination-photo-card"
              key={`${name}-${i}`}
              aria-hidden={i >= destinations.length ? true : undefined}
            >
              <SectionPhoto
                photo={photo}
                className="destination-city-photo"
                sizes="250px"
                loading="eager"
              />
              <div className="destination-card-caption">
                <span>
                  {flag ? (
                    <Image
                      className="destination-flag"
                      src={flag}
                      alt=""
                      width={60}
                      height={40}
                      loading="eager"
                    />
                  ) : (
                    <ArrowUpRight size={30} strokeWidth={1.3} aria-hidden="true" />
                  )}
                </span>
                <b>{name}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="destination-footer">
        <p>Ask our team about available travel and cargo arrangements for your destination.</p>
        <WhatsAppButton message="Hi Kaah, I'd like to ask about a destination.">
          Ask About a Destination
        </WhatsAppButton>
      </div>
    </section>
  );
}
