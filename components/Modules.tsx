import SectionPhoto from './SectionPhoto';
import { moduleImages } from '@/data/site-images';
import { modules, assistance } from '@/data/site-content';
import { Check, Route, FileText, Headphones } from 'lucide-react';
import { Reveal } from './ui';
import { FlightInquiryForm, CargoQuoteForm } from './LeadForm';
import WhatsAppButton from './WhatsAppButton';

/** Lists the travel assistance options and links to a WhatsApp inquiry. */
function TravelSupport() {
  const icons = [Route, FileText, Headphones];
  return (
    <div className="travel-assistance">
      <div className="preview-top">
        <span>KAAH / TRAVEL SUPPORT</span>
        <span className="quote-pill">Here for your journey</span>
      </div>
      {assistance.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="assistance-row" key={title}>
            <span>
              <Icon size={22} strokeWidth={1.5} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
      <WhatsAppButton message="Hi Kaah, I'd like help planning my trip." outline={false}>
        Plan My Trip
      </WhatsAppButton>
    </div>
  );
}

/** Displays detailed service sections with the appropriate flight or cargo form. */
export default function Modules() {
  return (
    <div className="container modules">
      {modules.map((module, i) => (
        <Reveal className="module" key={module.id}>
          <nav className="module-nav" aria-label={`${module.label} section navigation`}>
            {modules.map((item, j) => (
              <a
                className={i === j ? 'active' : ''}
                aria-current={i === j ? 'location' : undefined}
                href={`#${item.id}`}
                key={item.id}
              >
                0{j + 1} / {item.label}
              </a>
            ))}
          </nav>
          <section
            id={module.id}
            className="module-content"
            aria-labelledby={`${module.id}-heading`}
          >
            <h2 id={`${module.id}-heading`}>{module.title}</h2>
            <p>{module.description}</p>
            <div className={`green-art module-art module-art-${i} module-with-photo`}>
              <SectionPhoto
                photo={moduleImages[module.id]}
                className="module-photo"
                sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1280px) 70vw, 910px"
              />
              <div className="inquiry-card">
                {i < 2 && (
                  <div className="inquiry-heading">
                    <span>
                      0{i + 1} / KAAH {module.label.toUpperCase()}
                    </span>
                    <h3>
                      {i === 0 ? 'Your journey starts here.' : 'Tell us about your shipment.'}
                    </h3>
                  </div>
                )}
                {i === 0 ? <FlightInquiryForm /> : i === 1 ? <CargoQuoteForm /> : <TravelSupport />}
              </div>
            </div>
            <div className="callouts">
              {module.callouts.map(([title, description]) => (
                <div key={title}>
                  <span>
                    <Check size={15} aria-hidden="true" />
                  </span>
                  <p>
                    <b>{title}</b>
                    <small>{description}</small>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  );
}
