'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/site-content';
import { Logo, Button } from './ui';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar"><div className="container nav-inner"><Logo />
    <nav id="main-navigation" className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>
      {navigation.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
    </nav>
    <div className="nav-actions"><Button href="#contact" outline>Contact Us</Button><Button lime>Get a Quote</Button></div>
    <button id="menu-toggle" type="button" className="mobile-menu" aria-label="Toggle navigation" aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}
