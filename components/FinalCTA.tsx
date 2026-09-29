import Image from 'next/image';
import { Badge, Button } from './ui';
import WhatsAppButton from './WhatsAppButton';

export default function FinalCTA() {
  return <section className="container section" id="contact"><div className="final-cta"><div className="cta-copy"><Badge>Ready When You Are</Badge><h2>Where Are You<br />Going Next?</h2><p>Whether you’re booking your next flight or sending something important, tell us what you need and let Kaah take care of the next step.</p><div className="cta-actions"><div className="button-row"><Button lime arrow>Get a Free Quote</Button><WhatsAppButton /></div><p className="trust-microcopy">Quick response • Simple process • Personal support</p></div></div><div className="cta-image"><Image src="/journey.svg" alt="Travel illustration with luggage, a carefully packed parcel, and an abstract route connecting destinations" width={600} height={650} /></div></div></section>;
}
