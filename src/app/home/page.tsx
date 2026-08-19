import Hero from '../../components/Hero';
import Marquee from '../../components/Marquee';
import PracticeSection from '../../components/PracticeSection';
import PortfolioSection from '../../components/PortfolioSection';
import ShowcaseSection from '../../components/ShowcaseSection';
import ProcessSection from '../../components/ProcessSection';
import ServicesSection from '../../components/ServicesSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import ContactSection from '../../components/ContactSection';

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
