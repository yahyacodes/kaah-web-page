import { steps } from '@/data/site-content';
import { Button, SectionHeading, Reveal } from './ui';
import SectionPhoto from './SectionPhoto';
import { stepImages } from '@/data/site-images';
/** Explains the three steps from sending an inquiry to confirming arrangements. */
export default function HowItWorks() {
  return (
    <section className="container section lifecycle" id="how-it-works">
      <Reveal>
        <SectionHeading
          center
          eyebrow="Simple From Start to Finish"
          title="From Request to Destination."
          description="We’ve made getting started with Kaah simple."
        />
        <div className="lifecycle-grid">
          {steps.map(({ type, title, description }, i) => (
            <article key={type}>
              <SectionPhoto
                photo={stepImages[type]}
                className="step-photo"
                sizes="(max-width: 560px) calc(100vw - 40px), 390px"
              />
              <div className="lifecycle-copy">
                <h3>
                  0{i + 1}. {title}
                </h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="button-row centered">
          <Button arrow>Get Started</Button>
        </div>
      </Reveal>
    </section>
  );
}
