'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/site-content';
import { Logo, Button } from './ui';

/** Renders responsive navigation and adds elevation after the page scrolls. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync on mount as browsers can restore an already-scrolled page.
  useEffect(() => {
    /** Updates the header elevation when the page leaves the top edge. */
    function updateScrollState() {
      setScrolled(window.scrollY > 12);
    }

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);
  return (
    <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav
          id="main-navigation"
          className={open ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false);
              document.getElementById('menu-toggle')?.focus();
            }
          }}
        >
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </nav>
        <div className="nav-actions">
          <Button href="#contact" outline>
            Contact Us
          </Button>
          <Button lime>Get a Quote</Button>
        </div>
        <button
          id="menu-toggle"
          type="button"
          className="mobile-menu"
          aria-label="Toggle navigation"
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
