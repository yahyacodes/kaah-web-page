'use client';

import { useRef } from 'react';
import SectionPhoto from './SectionPhoto';
import { sectionImages } from '@/data/site-images';
import { ArrowLeft, ArrowRight, Quote, MessagesSquare } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { testimonials } from '@/data/site-content';
import { Badge } from './ui';

/** Displays company values and a manually scrollable sample story carousel. */
export default function CustomerTrust() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Move one card at a time; disable smooth scrolling for reduced motion.
  const move = (direction: number) =>
    ref.current?.scrollBy({ left: direction * 320, behavior: reduce ? 'instant' : 'smooth' });
  return (
    <section className="container section customers" id="about">
      <Badge>Why Kaah</Badge>
      <div className="customer-top">
        <div>
          <h2>
            Service Built Around
            <br />
            Real People.
          </h2>
          <p>
            Good service comes down to communication, reliability, transparency, and making things
            simple for the customer.
          </p>
          <p className="about-tagline">From Here to the World.</p>
        </div>
        <div className="trust-statement">
          RELIABLE.
          <br />
          SIMPLE.
          <br />
          PERSONAL.<span>Travel & Cargo Support</span>
        </div>
      </div>
      <div className="about-photo-story">
        <SectionPhoto
          photo={sectionImages.packing}
          className="about-photo"
          sizes="(max-width: 560px) calc(100vw - 40px), 780px"
        />
        <div className="about-photo-note">
          <Badge>Every Detail Matters</Badge>
          <h3>
            Care for the journey.
            <br />
            Care for what you send.
          </h3>
          <p>
            From planning a trip to preparing a parcel, a little guidance makes all the difference.
          </p>
        </div>
      </div>
      <div className="carousel-heading">
        <p>Sample stories — placeholders, not verified customer reviews.</p>
        <div className="carousel-controls">
          <button aria-label="Previous story" onClick={() => move(-1)}>
            <ArrowLeft size={17} />
          </button>
          <button aria-label="Next story" onClick={() => move(1)}>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div
        className="customer-carousel"
        role="region"
        ref={ref}
        tabIndex={0}
        aria-label="Illustrative customer stories"
      >
        {testimonials.map(({ role, quote, isPlaceholder }) => (
          <article className="testimonial-card" key={role}>
            <Quote size={31} strokeWidth={1.1} aria-hidden="true" />
            {isPlaceholder && <span className="placeholder-label">Illustrative testimonial</span>}
            <blockquote>“{quote}”</blockquote>
            <div>
              <h3>{role}</h3>
              <p>Placeholder · Real stories coming soon</p>
            </div>
          </article>
        ))}
        <article className="story-card values-card">
          <MessagesSquare size={34} strokeWidth={1.3} aria-hidden="true" />
          <h3>Good service starts with a conversation.</h3>
          <p>Tell us what you need. We’ll help make the next step clear.</p>
          <strong>Kaah</strong>
        </article>
      </div>
    </section>
  );
}
