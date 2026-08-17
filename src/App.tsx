import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './app/home/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import PortfolioPage from './app/portfolio/page';
import ProjectDetailPage from './app/project-detail/page';
import ShowcasePage from './app/showcase/page';
import ContactPage from './app/contact/page';
import BlogPage from './app/blog/page';
import NotFoundPage from './app/not-found/page';
import DesignBuildPage from './app/services/design-build/page';
import DesignBuildBergenCountyPage from './app/services/design-build/bergen-county/page';
import DesignBuildEssexCountyPage from './app/services/design-build/essex-county/page';
import DesignBuildMorrisCountyPage from './app/services/design-build/morris-county/page';
import DesignBuildPassaicCountyPage from './app/services/design-build/passaic-county/page';
import DesignBuildUnionCountyPage from './app/services/design-build/union-county/page';
import WholeHomeAdditionsPage from './app/services/whole-home-additions/page';
import BoutiqueOfficeConstructionPage from './app/services/boutique-office-construction/page';
import BergenCountyOfficePage from './app/services/boutique-office-construction/bergen-county/page';
import EssexCountyOfficePage from './app/services/boutique-office-construction/essex-county/page';
import MorrisCountyOfficePage from './app/services/boutique-office-construction/morris-county/page';
import PassaicCountyOfficePage from './app/services/boutique-office-construction/passaic-county/page';
import UnionCountyOfficePage from './app/services/boutique-office-construction/union-county/page';
import HomeAdditionsBergenCountyPage from './app/services/whole-home-additions/bergen-county/page';
import HomeAdditionsEssexCountyPage from './app/services/whole-home-additions/essex-county/page';
import HomeAdditionsMorrisCountyPage from './app/services/whole-home-additions/morris-county/page';
import HomeAdditionsPassaicCountyPage from './app/services/whole-home-additions/passaic-county/page';
import HomeAdditionsUnionCountyPage from './app/services/whole-home-additions/union-county/page';
import VeterinaryHospitalConstructionPage from './app/services/veterinary-hospital-construction-nj/page';
import VeterinaryHospitalBergenCountyPage from './app/services/veterinary-hospital-construction-nj/bergen-county/page';
import VeterinaryHospitalEssexCountyPage from './app/services/veterinary-hospital-construction-nj/essex-county/page';
import VeterinaryHospitalMorrisCountyPage from './app/services/veterinary-hospital-construction-nj/morris-county/page';
import VeterinaryHospitalPassaicCountyPage from './app/services/veterinary-hospital-construction-nj/passaic-county/page';
import VeterinaryHospitalUnionCountyPage from './app/veterinary-hospital-construction-union-county-nj/page';
import { PageTransition } from './components/PageTransition';
import ScrollUpButton from './components/ScrollUpButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}



function Layout() {
  const location = useLocation();

 

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Header />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="/design-build-construction-nj" element={<DesignBuildPage />} />
          <Route path="/design-build-bergen-county-nj" element={<DesignBuildBergenCountyPage />} />
          <Route path="/design-build-essex-county-nj" element={<DesignBuildEssexCountyPage />} />
          <Route path="/design-build-morris-county-nj" element={<DesignBuildMorrisCountyPage />} />
          <Route path="/design-build-passaic-county-nj" element={<DesignBuildPassaicCountyPage />} />
          <Route path="/design-build-union-county-nj" element={<DesignBuildUnionCountyPage />} />
          <Route path="/services/whole-home-additions" element={<WholeHomeAdditionsPage />} />
          <Route path="/services/boutique-office-construction" element={<BoutiqueOfficeConstructionPage />} />
          <Route path="/boutique-office-construction-bergen-county-nj" element={<BergenCountyOfficePage />} />
          <Route path="/boutique-office-construction-essex-county-nj" element={<EssexCountyOfficePage />} />
          <Route path="/boutique-office-construction-morris-county-nj" element={<MorrisCountyOfficePage />} />
          <Route path="/boutique-office-construction-passaic-county-nj" element={<PassaicCountyOfficePage />} />
          <Route path="/boutique-office-construction-union-county-nj" element={<UnionCountyOfficePage />} />
          <Route path="/home-additions-bergen-county-nj" element={<HomeAdditionsBergenCountyPage />} />
          <Route path="/home-additions-essex-county-nj" element={<HomeAdditionsEssexCountyPage />} />
          <Route path="/home-additions-morris-county-nj" element={<HomeAdditionsMorrisCountyPage />} />
          <Route path="/home-additions-passaic-county-nj" element={<HomeAdditionsPassaicCountyPage />} />
          <Route path="/home-additions-union-county-nj" element={<HomeAdditionsUnionCountyPage />} />
          <Route path="/veterinary-hospital-construction-nj" element={<VeterinaryHospitalConstructionPage />} />
          <Route path="/veterinary-hospital-construction-bergen-county-nj" element={<VeterinaryHospitalBergenCountyPage />} />
          <Route path="/veterinary-hospital-construction-essex-county-nj" element={<VeterinaryHospitalEssexCountyPage />} />
          <Route path="/veterinary-hospital-construction-morris-county-nj" element={<VeterinaryHospitalMorrisCountyPage />} />
          <Route path="/veterinary-hospital-construction-passaic-county-nj" element={<VeterinaryHospitalPassaicCountyPage />} />
          <Route path="/veterinary-hospital-construction-union-county-nj" element={<VeterinaryHospitalUnionCountyPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
      <ScrollUpButton />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
