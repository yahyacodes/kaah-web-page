'use client';

import { ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { motion, useReducedMotion } from 'framer-motion';

export function Button({ children, href = '#quote', outline = false, lime = false, arrow = false }: { children: React.ReactNode; href?: string; outline?: boolean; lime?: boolean; arrow?: boolean }) {
  return <a className={`button ${outline ? 'outline' : ''} ${lime ? 'lime' : ''}`} href={href}>{children}{arrow && <ArrowRight size={15} aria-hidden="true" />}</a>;
}

export function Badge({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>;
}

export function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}>{eyebrow && <Badge>{eyebrow}</Badge>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 1, y: reduce ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: reduce ? 0 : .5 }}>{children}</motion.div>;
}

export function Logo() {
  return <a className="logo" href="/" aria-label="Kaah home"><BrandLogo /></a>;
}
