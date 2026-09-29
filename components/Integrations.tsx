import { MapPin, ArrowUpRight } from 'lucide-react';
import { destinations } from '@/data/site-content';
import { Badge } from './ui';
import WhatsAppButton from './WhatsAppButton';

export default function Destinations() {
  return <section className="container section integrations" id="destinations"><Badge>Our Network</Badge><div className="split-heading"><h2>From Here<br />to the World.</h2><p>Whether you’re travelling, sending something home, or moving goods for your business, Kaah helps connect you to the places that matter.</p></div><div className="green-art integration-band destination-band"><div className="integration-track">{[...destinations, ...destinations].map((name, i) => <div className="integration-tile destination-tile" key={`${name}-${i}`} aria-hidden={i >= destinations.length ? true : undefined}><span>{name === 'More Destinations' ? <ArrowUpRight size={30} strokeWidth={1.3} /> : <MapPin size={30} strokeWidth={1.3} />}</span><b>{name}</b></div>)}</div></div><div className="destination-footer"><p>Ask our team about available travel and cargo arrangements for your destination.</p><WhatsAppButton message="Hi Kaah, I'd like to ask about a destination.">Ask About a Destination</WhatsAppButton></div></section>;
}
