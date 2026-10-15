import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
export const metadata: Metadata = { title: 'Privacy Policy | Kaah Travel & Cargo' };
/** Displays the privacy information for inquiry forms and contact channels. */
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This notice describes how the inquiry forms on this website work.</p>
      <h2>Details you choose to share</h2>
      <p>
        Flight and cargo forms ask for your name, phone number, route, and the travel or shipment
        details needed to prepare an inquiry. Please do not include payment information, passport
        numbers, or other sensitive documents in these forms.
      </p>
      <h2>Sending your inquiry</h2>
      <p>
        Submitting a form sends your inquiry to Kaah by email through our email delivery provider.
        Kaah uses the information you share to respond to your request and discuss your travel or
        cargo arrangements. The website does not store inquiries in a website database.
      </p>
      <h2>WhatsApp and external services</h2>
      <p>
        Opening WhatsApp takes you to an external service. Its own privacy terms apply to your use
        of that service. The website host may also process standard connection information, such as
        your IP address, to deliver and protect the website.
      </p>
      <h2>Questions about your information</h2>
      <p>
        Contact the Kaah team through WhatsApp if you have questions about the details you have
        shared or would like to request a correction or deletion.
      </p>
    </LegalPage>
  );
}
