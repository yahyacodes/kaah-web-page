import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
export const metadata: Metadata = { title: 'Terms & Conditions | Kaah Travel & Cargo' };
/** Displays the terms for travel inquiries and cargo services. */
export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        This website helps you inquire about services from Kaah Travel & Cargo Agency LTD, a travel
        and cargo agency.
      </p>
      <h2>Inquiries and quotations</h2>
      <p>
        Submitting details or opening a prepared WhatsApp message is a request for information. It
        does not confirm a flight reservation, cargo shipment, price, or delivery timeframe. Our
        team must confirm availability, pricing, and the applicable arrangements with you.
      </p>
      <h2>Travel arrangements</h2>
      <p>
        Routes, schedules, fares, baggage allowances, and travel requirements depend on the
        available service and your journey. Ask our team about the relevant conditions, including
        changes and cancellations, before confirming a booking.
      </p>
      <h2>Cargo arrangements</h2>
      <p>
        Cargo acceptance, pricing, documentation, and estimated delivery times depend on the
        shipment and destination. Provide accurate details of the contents and approximate weight so
        our team can confirm the available options and requirements.
      </p>
      <h2>Before you confirm</h2>
      <p>
        Review the specific quote and service conditions provided by our team. Destination tiles and
        interface illustrations on this website do not guarantee a direct route or availability.
        Illustrative testimonial cards are placeholders, not verified customer reviews.
      </p>
      <h2>Get in touch</h2>
      <p>
        If you have questions about a quote or an arrangement, speak with our team before making a
        payment or confirming a service.
      </p>
    </LegalPage>
  );
}
