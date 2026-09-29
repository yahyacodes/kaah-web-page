'use client';

import { useId, useState } from 'react';
import { Plane, Package } from 'lucide-react';
import { FlightInquiryForm, CargoQuoteForm } from './LeadForm';
import BrandLogo from './BrandLogo';

export default function BookingPanel() {
  const [tab, setTab] = useState<'flight' | 'cargo'>('flight');
  const id = useId();
  return <div className="booking-panel product-ui" id="quote">
    <div className="booking-brand"><BrandLogo /><span className="quote-pill">Let’s get you moving</span></div>
    <div className="booking-tabs" role="tablist" aria-label="Choose inquiry type" onKeyDown={e => {
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
        const next = e.key === 'Home' ? 'flight' : e.key === 'End' ? 'cargo' : tab === 'flight' ? 'cargo' : 'flight';
        setTab(next);
        document.getElementById(`${id}-${next}-tab`)?.focus();
      }
    }}>
      {(['flight', 'cargo'] as const).map(type => <button key={type} type="button" role="tab" id={`${id}-${type}-tab`} aria-controls={`${id}-${type}-panel`} aria-selected={tab === type} tabIndex={tab === type ? 0 : -1} onClick={() => setTab(type)}>{type === 'flight' ? <Plane size={16} /> : <Package size={16} />}{type === 'flight' ? 'FLIGHTS' : 'CARGO'}</button>)}
    </div>
    <div role="tabpanel" id={`${id}-flight-panel`} aria-labelledby={`${id}-flight-tab`} hidden={tab !== 'flight'}><FlightInquiryForm compact buttonLabel="Check Flights" /></div>
    <div role="tabpanel" id={`${id}-cargo-panel`} aria-labelledby={`${id}-cargo-tab`} hidden={tab !== 'cargo'}><CargoQuoteForm compact buttonLabel="Get Cargo Quote" /></div>
  </div>;
}
