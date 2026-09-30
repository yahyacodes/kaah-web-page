import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/LogoStrip';
import ProblemSection from '@/components/Reality';
import ServicesSection from '@/components/Features';
import Modules from '@/components/Modules';
import HowItWorks from '@/components/Lifecycle';
import CustomerTrust from '@/components/Customers';
import Destinations from '@/components/Integrations';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ContactControls from '@/components/ContactControls';

/** Assembles the landing page sections in their display order. */
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <ServicesSection />
        <Modules />
        <HowItWorks />
        <CustomerTrust />
        <Destinations />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ContactControls />
    </>
  );
}
