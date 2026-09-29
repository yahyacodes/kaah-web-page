import Link from 'next/link';
import { Logo, Badge } from './ui';
import WhatsAppButton from './WhatsAppButton';

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <><header className="container nav-inner"><Logo /><Link href="/" className="button outline" style={{ marginLeft: 'auto' }}>Back to Kaah</Link></header><main className="container legal-page"><Badge>Kaah Travel & Cargo Agency LTD</Badge><h1>{title}</h1>{children}<div className="button-row"><WhatsAppButton>Contact our team</WhatsAppButton></div></main></>;
}
