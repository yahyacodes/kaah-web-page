import { Package, Compass, Headphones } from 'lucide-react';
import { footerLinks } from '@/data/site-content';
import { Logo } from './ui';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { ContactLink } from './ContactControls';

export default function Footer() {
  return <footer className="container footer"><div className="footer-top"><Logo /><div><strong>From Here to the World.</strong><p>Making travel and cargo simpler, more reliable, and easier to access.</p></div><a className="footer-inquiry" href="#quote">Your next step starts here ↗</a></div><div className="footer-links">{footerLinks.map(({ title, links }) => <div key={title}><h3>{title}</h3>{links.map(({ label, href }) => href === 'phone' || href === 'office' ? <ContactLink kind={href} key={label}>{label}</ContactLink> : href === 'whatsapp' ? <a key={label} href={getWhatsAppUrl() || '#contact'} target="_blank" rel="noopener noreferrer">{label}</a> : <a href={href} key={label}>{label}</a>)}</div>)}</div><div className="footer-bottom"><div><div className="footer-service-icons" role="group" aria-label="Travel, cargo, and personal support"><Compass size={24} strokeWidth={1.3} /><Package size={24} strokeWidth={1.3} /><Headphones size={24} strokeWidth={1.3} /></div><p>© 2026 Kaah Travel & Cargo Agency LTD. All rights reserved.</p></div><p>From Here to the World.<br />Travel & Cargo, Made Simple.</p></div><div className="footer-wordmark" aria-hidden="true"><svg viewBox="590 510 870 270" focusable="false"><image href="/brand/kaah-logo.jpeg" x="0" y="0" width="1600" height="1236" /></svg></div></footer>;
}
