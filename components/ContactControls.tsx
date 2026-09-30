'use client';

import { useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Badge, Button } from './ui';
import WhatsAppButton, { showContactDetails } from './WhatsAppButton';

/** Uses the configured telephone number or opens the contact details dialog. */
export function ContactLink({
  kind,
  children,
}: {
  kind: 'phone' | 'office';
  children: React.ReactNode;
}) {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  if (kind === 'phone' && phone)
    return <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{children}</a>;
  return (
    <button type="button" className="footer-contact-link" onClick={showContactDetails}>
      {children}
    </button>
  );
}

/** Provides the floating contact button, mobile actions, and contact dialog. */
export default function ContactControls() {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <WhatsAppButton floating outline={false} />
      <div className="mobile-conversion-bar">
        <WhatsAppButton outline={false}>WhatsApp</WhatsAppButton>
        <Button lime>
          Get Quote <ArrowUpRight size={16} />
        </Button>
      </div>
      <dialog
        ref={dialog}
        id="contact-details"
        className="demo-dialog contact-dialog"
        aria-labelledby="contact-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="close"
          type="button"
          aria-label="Close contact details"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <Badge>Kaah Travel & Cargo</Badge>
        <h2 id="contact-title">
          Let’s talk about
          <br />
          your next step.
        </h2>
        <p>
          {process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
            'Please ask our team for our office location before visiting.'}
        </p>
        <p>
          {process.env.NEXT_PUBLIC_PHONE_NUMBER
            ? `Call us: ${process.env.NEXT_PUBLIC_PHONE_NUMBER}`
            : 'For a phone conversation, ask our team on WhatsApp to arrange a call.'}
        </p>
        <div className="button-row">
          <WhatsAppButton outline={false} />
        </div>
      </dialog>
    </>
  );
}
