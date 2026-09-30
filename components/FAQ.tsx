'use client';

import { useState } from 'react';
import SectionPhoto from './SectionPhoto';
import { serviceImages } from '@/data/site-images';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/site-content';
import { Badge } from './ui';
import WhatsAppButton from './WhatsAppButton';

/** Displays frequently asked questions with one expandable answer at a time. */
export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="container section faq" id="faq">
      <div>
        <Badge>FAQ</Badge>
        <h2>
          Have Questions?
          <br />
          We Have Answers.
        </h2>
        <p>Find answers to common questions about flights, cargo, and travelling with Kaah.</p>
        <WhatsAppButton outline={false}>Talk to Us</WhatsAppButton>
        <SectionPhoto
          photo={serviceImages.support}
          className="faq-photo"
          sizes="(max-width: 800px) calc(100vw - 40px), 500px"
        />
      </div>
      <div className="accordion">
        {faqs.map(([question, answer], i) => (
          <div className="faq-item" key={question}>
            <h3>
              <button
                id={`question-${i}`}
                aria-expanded={active === i}
                aria-controls={`answer-${i}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                {question}
                <ChevronDown
                  size={16}
                  className={active === i ? 'rotated' : ''}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              role="region"
              aria-labelledby={`question-${i}`}
              id={`answer-${i}`}
              hidden={active !== i}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
