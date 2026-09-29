import { steps } from '@/data/site-content';
import { Button, SectionHeading, Reveal } from './ui';
import ProductMockup from './ProductMockup';
export default function HowItWorks() {
  return <section className="container section lifecycle" id="how-it-works"><Reveal><SectionHeading center eyebrow="Simple From Start to Finish" title="From Request to Destination." description="We’ve made getting started with Kaah simple." /><div className="lifecycle-grid">{steps.map(({ type, title, description }, i) => <article key={type}><div className="green-art"><ProductMockup type={type} /></div><div className="lifecycle-copy"><h3>0{i + 1}. {title}</h3><p>{description}</p></div></article>)}</div><div className="button-row centered"><Button arrow>Get Started</Button></div></Reveal></section>;
}
