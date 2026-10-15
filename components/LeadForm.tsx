'use client';

import { useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Mail, CheckCircle, X } from 'lucide-react';
import { localToday, validateInquiry } from '@/lib/inquiry';

type LeadFormProps = { type: 'flight' | 'cargo'; compact?: boolean; buttonLabel?: string };

/** Collects and validates flight or cargo details before sending them by email. */
export default function LeadForm({ type, compact = false, buttonLabel }: LeadFormProps) {
  const id = useId();
  const [departure, setDeparture] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const pending = useRef(false);
  const isFlight = type === 'flight';
  // Give each field a unique ID when several inquiry forms share a page.
  const field = (name: string) => `${id}-${name}`;

  /** Sends only validated requests and confirms provider acceptance. */
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).map(([key, value]) => [
        key,
        String(value).trim(),
      ]),
    );
    setError('');
    setSuccess(false);
    const validationError = validateInquiry(type, data);
    if (validationError) {
      setError(validationError);
      return;
    }
    pending.current = true;
    setSending(true);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, details: data }),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(result.error || 'We could not send your request. Please try again.');
      form.reset();
      setDeparture('');
      setSuccess(true);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'We could not send your request. Please try again.',
      );
    } finally {
      pending.current = false;
      setSending(false);
    }
  }

  return (
    <form
      className={`lead-form ${compact ? 'compact-form' : ''}`}
      onSubmit={submit}
      onChange={() => {
        setError('');
        setSuccess(false);
      }}
      aria-label={`${isFlight ? 'Flight inquiry' : 'Cargo quote'}${compact ? ' quick' : ''} form`}
    >
      <fieldset className="lead-fields" disabled={sending}>
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
            {
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
            }
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
      </fieldset>
      <button className="button form-submit" type="submit" disabled={sending} aria-busy={sending}>
        {sending
          ? 'Sending…'
          : buttonLabel || (isFlight ? 'Check Available Flights' : 'Get Cargo Price')}
        <ArrowRight size={16} aria-hidden="true" />
      </button>
      <p className="form-note">
        <Mail size={12} aria-hidden="true" /> Send your request directly to our team.{' '}
        <a href="/privacy">Privacy</a>
      </p>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {success &&
        createPortal(
          <div className="inquiry-toast" role="status" aria-live="polite">
            <CheckCircle size={24} aria-hidden="true" />
            <div>
              <strong>Request sent successfully!</strong>
              <p>
                Thank you. Our team will contact you about your {isFlight ? 'flight' : 'cargo'}{' '}
                request.
              </p>
            </div>
            <button
              type="button"
              aria-label="Dismiss success message"
              onClick={() => setSuccess(false)}
            >
              <X size={18} />
            </button>
          </div>,
          document.body,
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
