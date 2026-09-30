import SectionPhoto from './SectionPhoto';
import { sectionImages, serviceImages } from '@/data/site-images';
import { Route, PackageSearch, MessagesSquare } from 'lucide-react';
import { Badge, Button, Reveal } from './ui';
import WhatsAppButton from './WhatsAppButton';
const problems = [
  {
    Icon: Route,
    photo: sectionImages.terminal,
    title: 'Too Many Options',
    text: 'Searching through countless flights, routes, schedules, and prices takes time. We help simplify your choices.',
  },
  {
    Icon: PackageSearch,
    photo: sectionImages.packing,
    title: 'Unclear Cargo Pricing',
    text: "You shouldn't have to guess how much your shipment will cost or what happens next.",
  },
  {
    Icon: MessagesSquare,
    photo: serviceImages.support,
    title: 'Poor Communication',
    text: "Getting an answer shouldn't require calling five different people. With Kaah, you have a team you can reach.",
  },
];
/** Explains common travel challenges and the support Kaah provides. */
export default function ProblemSection() {
  return (
    <section className="reality">
      <Reveal className="container">
        <Badge>Travel Shouldn’t Be Complicated</Badge>
        <div className="split-heading">
          <h2>Booking Flights & Sending Cargo Should Be Easier.</h2>
          <p>
            Finding the right flight, comparing options, arranging cargo, and getting reliable
            updates shouldn’t be stressful.
            <br />
            <br />
            Kaah gives you one place to get the help you need.
          </p>
        </div>
        <div className="reality-grid">
          {problems.map(({ Icon, photo, title, text }) => (
            <article className="problem-card problem-with-photo" key={title}>
              <SectionPhoto
                photo={photo}
                className="problem-photo"
                sizes="(max-width: 560px) calc(100vw - 40px), 390px"
              />
              <div className="problem-card-body">
                <div className="icon-tile">
                  <Icon size={25} strokeWidth={1.3} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="button-row centered">
          <Button arrow>Let Kaah Handle It</Button>
          <WhatsAppButton />
        </div>
      </Reveal>
    </section>
  );
}
