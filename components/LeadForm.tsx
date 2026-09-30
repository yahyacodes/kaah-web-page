'use client';

import { useId, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { formatInquiry, getWhatsAppUrl } from '@/lib/whatsapp';

type LeadFormProps = { type: 'flight' | 'cargo'; compact?: boolean; buttonLabel?: string };

/** Returns today in local YYYY-MM-DD format for date field validation. */
function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/** Collects and validates flight or cargo details before a WhatsApp handoff. */
export default function LeadForm({ type, compact = false, buttonLabel }: LeadFormProps) {
  const id = useId();
  const [departure, setDeparture] = useState('');
  const [error, setError] = useState('');
  const [handoff, setHandoff] = useState<string | null>(null);
  const [attempted, setAttempted] = useState(false);
  const isFlight = type === 'flight';
  // Give each field a unique ID when several inquiry forms share a page.
  const field = (name: string) => `${id}-${name}`;

  /** Validates inquiry fields and opens WhatsApp with the prepared message. */
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).map(([key, value]) => [
        key,
        String(value).trim(),
      ]),
    );
    setError('');
    setHandoff(null);
    setAttempted(false);
    if (!data.name || !data.from || !data.to) {
      setError('Please enter your name, departure city, and destination.');
      return;
    }
    if (data.from.toLocaleLowerCase() === data.to.toLocaleLowerCase()) {
      setError('Please choose different departure and destination cities.');
      return;
    }
    if (
      !/^\+?[\d\s()-]{7,25}$/.test(data.phone) ||
      data.phone.replace(/\D/g, '').length < 7 ||
      data.phone.replace(/\D/g, '').length > 15
    ) {
      setError('Enter a valid phone or WhatsApp number, including your country code.');
      return;
    }
    if (isFlight && (!data.departure || data.departure < localToday())) {
      setError('Choose a departure date today or later.');
      return;
    }
    if (isFlight && data.return && data.return < data.departure) {
      setError('The return date must be on or after departure.');
      return;
    }
    if (
      isFlight &&
      (!Number.isInteger(Number(data.passengers)) ||
        Number(data.passengers) < 1 ||
        Number(data.passengers) > 99)
    ) {
      setError('Enter between 1 and 99 passengers.');
      return;
    }
    if (!isFlight && (!Number.isFinite(Number(data.weight)) || Number(data.weight) <= 0)) {
      setError('Enter an approximate weight greater than zero.');
      return;
    }
    if (!isFlight && !compact && !data.description) {
      setError('Please briefly describe what you are sending.');
      return;
    }
    if (process.env.NODE_ENV === 'development') console.info('Kaah inquiry:', { type, ...data });
    const url = getWhatsAppUrl(formatInquiry(type, data));
    setAttempted(true);
    if (!url) {
      setError(
        'WhatsApp inquiries are not connected yet. Your details have not been sent. Please try again later.',
      );
      return;
    }
    setHandoff(url);
    // No backend: the customer must send the prepared message in WhatsApp.
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form
      className={`lead-form ${compact ? 'compact-form' : ''}`}
      onSubmit={submit}
      onChange={() => {
        setError('');
        setHandoff(null);
        setAttempted(false);
      }}
      aria-label={`${isFlight ? 'Flight inquiry' : 'Cargo quote'}${compact ? ' quick' : ''} form`}
    >
      <div className="lead-fields">
        <label htmlFor={field('from')}>
          {compact ? 'From' : isFlight ? 'Flying From' : 'Sending From'}
          <input
            id={field('from')}
            name="from"
            placeholder="Nairobi"
            maxLength={80}
            required
            autoComplete="off"
          />
        </label>
        <label htmlFor={field('to')}>
          {compact ? 'To' : isFlight ? 'Flying To' : 'Sending To'}
          <input
            id={field('to')}
            name="to"
            placeholder="Mogadishu"
            maxLength={80}
            required
            autoComplete="off"
          />
        </label>
        {isFlight ? (
          <>
            <label htmlFor={field('departure')}>
              {compact ? 'Departure' : 'Departure Date'}
              <input
                id={field('departure')}
                name="departure"
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                onFocus={(e) => {
                  e.currentTarget.min = localToday();
                }}
                required
              />
            </label>
            {!compact && (
              <label htmlFor={field('return')}>
                Return Date <span>(optional)</span>
                <input
                  id={field('return')}
                  name="return"
                  type="date"
                  min={departure || undefined}
                />
              </label>
            )}
            <label htmlFor={field('passengers')}>
              Passengers
              <input
                id={field('passengers')}
                name="passengers"
                type="number"
                min="1"
                max="99"
                step="1"
                defaultValue="1"
                required
              />
            </label>
            {!compact && (
              <label htmlFor={field('cabin')}>
                Cabin Class
                <select id={field('cabin')} name="cabin" defaultValue="Economy">
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                  <option>First</option>
                </select>
              </label>
            )}
          </>
        ) : (
          <>
            <label htmlFor={field('weight')}>
              {compact ? 'Weight (kg)' : 'Approximate Weight (kg)'}
              <input
                id={field('weight')}
                name="weight"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="25"
                required
              />
            </label>
            <label htmlFor={field('cargoType')}>
              Cargo Type
              <select id={field('cargoType')} name="cargoType" required defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option>Personal</option>
                <option>Commercial</option>
                <option>Documents</option>
                <option>Other</option>
              </select>
            </label>
            {!compact && (
              <label className="full-field" htmlFor={field('description')}>
                Description
                <textarea
                  id={field('description')}
                  name="description"
                  placeholder="Tell us what you’re sending"
                  rows={2}
                  maxLength={600}
                  required
                />
              </label>
            )}
          </>
        )}
        <label htmlFor={field('name')}>
          Your Name
          <input
            id={field('name')}
            name="name"
            autoComplete="name"
            placeholder="Full name"
            maxLength={100}
            required
          />
        </label>
        <label htmlFor={field('phone')}>
          Phone / WhatsApp
          <input
            id={field('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Include country code"
            maxLength={25}
            required
          />
        </label>
      </div>
      <button className="button form-submit" type="submit">
        {buttonLabel || (isFlight ? 'Check Available Flights' : 'Get Cargo Price')}
        <ArrowRight size={16} aria-hidden="true" />
      </button>
      <p className="form-note">
        <MessageCircle size={12} aria-hidden="true" /> Continue in WhatsApp to send your inquiry.{' '}
        <a href="/privacy">Privacy</a>
      </p>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {attempted && handoff && (
        <div className="handoff-status" role="status">
          <p>Your inquiry is ready. Send the message in WhatsApp to reach our team.</p>
          <a href={handoff} target="_blank" rel="noopener noreferrer">
            Open WhatsApp with your details <ArrowRight size={13} />
          </a>
        </div>
      )}
    </form>
  );
}

/** Configures the shared inquiry form for flight requests. */
export function FlightInquiryForm(props: Omit<LeadFormProps, 'type'>) {
  return <LeadForm type="flight" {...props} />;
}
/** Configures the shared inquiry form for cargo quotes. */
export function CargoQuoteForm(props: Omit<LeadFormProps, 'type'>) {
  return <LeadForm type="cargo" {...props} />;
}
