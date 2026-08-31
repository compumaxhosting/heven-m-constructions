import Hero from './Hero';
import Marquee from './Marquee';
import PracticeSection from './PracticeSection';
import PortfolioSection from './PortfolioSection';
import ShowcaseSection from './ShowcaseSection';
import ProcessSection from './ProcessSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';


const homeSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://www.havenmconstruction.com/#organization",
  "name": "Haven M Construction",
  "url": "https://www.havenmconstruction.com/",
  "description": "Haven M Construction designs and builds residential and commercial spaces, specializing in additions, design-build, boutique offices, value engineering, and veterinary hospitals in Verona, NJ and surrounding counties.",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Bergen County, NJ" },
    { "@type": "AdministrativeArea", "name": "Essex County, NJ" },
    { "@type": "AdministrativeArea", "name": "Morris County, NJ" },
    { "@type": "AdministrativeArea", "name": "Passaic County, NJ" },
    { "@type": "AdministrativeArea", "name": "Union County, NJ" }
  ],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design-Build Construction", "serviceType": "Design-Build Construction", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction", "serviceType": "Residential Construction", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Construction", "serviceType": "Commercial Construction", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Additions", "serviceType": "Home Additions", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Whole-Home Additions", "serviceType": "Whole-Home Additions", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Value Engineering", "serviceType": "Value Engineering", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boutique Office Construction", "serviceType": "Boutique Office Construction", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Veterinary Hospital Construction", "serviceType": "Veterinary Hospital Construction", "provider": { "@id": "https://www.havenmconstruction.com/#organization" } } }
  ]
};

export default function HomePage() {
  return (
    <main>

      <Hero />
      <Marquee />
      <PracticeSection />
      <PortfolioSection />
      <ShowcaseSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}


