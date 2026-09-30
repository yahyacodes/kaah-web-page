'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, inquiryMessages, type InquiryType } from '@/lib/whatsapp';

/** Opens the contact dialog when a direct contact channel is unavailable. */
export function showContactDetails() {
  const dialog = document.getElementById('contact-details');
  if (dialog instanceof HTMLDialogElement) dialog.showModal();
}

/** Links to a prepared WhatsApp message or falls back to contact details. */
export default function WhatsAppButton({
  children = 'Chat on WhatsApp',
  type = 'general',
  message,
  outline = true,
  floating = false,
  className = '',
}: {
  children?: React.ReactNode;
  type?: InquiryType;
  message?: string;
  outline?: boolean;
  floating?: boolean;
  className?: string;
}) {
  const href = getWhatsAppUrl(message || inquiryMessages[type]);
  const classes = `button whatsapp-button ${outline ? 'outline' : ''} ${floating ? 'floating-whatsapp' : ''} ${className}`;
  const content = (
    <>
      <MessageCircle size={floating ? 25 : 17} aria-hidden="true" />
      {!floating && children}
    </>
  );
  return href ? (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={floating ? 'Chat with Kaah on WhatsApp (opens a new tab)' : undefined}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      onClick={showContactDetails}
      className={classes}
      aria-label={floating ? 'WhatsApp contact information' : undefined}
    >
      {content}
    </button>
  );
}
