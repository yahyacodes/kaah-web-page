import Image from 'next/image';
import { journeyImage } from '@/data/site-images';
import { Badge, Button } from './ui';
import WhatsAppButton from './WhatsAppButton';

/** Invites visitors to request a quote or contact the team through WhatsApp. */
export default function FinalCTA() {
  return (
    <section className="container section" id="contact">
      <div className="final-cta">
        <div className="cta-copy">
          <Badge>Ready When You Are</Badge>
          <h2>
            Where Are You
            <br />
            Going Next?
          </h2>
          <p>
            Whether you’re booking your next flight or sending something important, tell us what you
            need and let Kaah take care of the next step.
          </p>
          <div className="cta-actions">
            <div className="button-row">
              <Button lime arrow>
                Get a Free Quote
              </Button>
              <WhatsAppButton />
            </div>
            <p className="trust-microcopy">Quick response • Simple process • Personal support</p>
          </div>
        </div>
        <div className="cta-image">
          <Image
            src={journeyImage.src}
            alt={journeyImage.alt}
            fill
            placeholder="blur"
            sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 1280px) 50vw, 590px"
            style={{ objectPosition: journeyImage.position }}
          />
        </div>
      </div>
    </section>
  );
}
