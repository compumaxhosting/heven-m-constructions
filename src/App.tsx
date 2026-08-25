import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import ProjectDetailPage from './pages/ProjectDetail';
import ShowcasePage from './pages/Showcase';
import ContactPage from './pages/Contact';
import BlogPage from './pages/Blog';
import NotFoundPage from './pages/NotFound';
import DesignBuildPage from './pages/Services/DesignBuild';
import DesignBuildBergenCountyPage from './pages/Services/DesignBuild/BergenCounty';
import DesignBuildEssexCountyPage from './pages/Services/DesignBuild/EssexCounty';
import DesignBuildMorrisCountyPage from './pages/Services/DesignBuild/MorrisCounty';
import DesignBuildPassaicCountyPage from './pages/Services/DesignBuild/PassaicCounty';
import DesignBuildUnionCountyPage from './pages/Services/DesignBuild/UnionCounty';
import WholeHomeAdditionsPage from './pages/Services/WholeHomeAdditions';
import AdditionsPage from './pages/Services/Additions';
import BoutiqueOfficeConstructionPage from './pages/Services/BoutiqueOffice';
import BergenCountyOfficePage from './pages/Services/BoutiqueOffice/BergenCounty';
import EssexCountyOfficePage from './pages/Services/BoutiqueOffice/EssexCounty';
import MorrisCountyOfficePage from './pages/Services/BoutiqueOffice/MorrisCounty';
import PassaicCountyOfficePage from './pages/Services/BoutiqueOffice/PassaicCounty';
import UnionCountyOfficePage from './pages/Services/BoutiqueOffice/UnionCounty';
import HomeAdditionsBergenCountyPage from './pages/Services/Additions/BergenCounty';
import HomeAdditionsEssexCountyPage from './pages/Services/Additions/EssexCounty';
import HomeAdditionsMorrisCountyPage from './pages/Services/Additions/MorrisCounty';
import HomeAdditionsPassaicCountyPage from './pages/Services/Additions/PassaicCounty';
import HomeAdditionsUnionCountyPage from './pages/Services/Additions/UnionCounty';
import WholeHomeAdditionsBergenCountyPage from './pages/Services/WholeHomeAdditions/BergenCounty';
import WholeHomeAdditionsEssexCountyPage from './pages/Services/WholeHomeAdditions/EssexCounty';
import WholeHomeAdditionsMorrisCountyPage from './pages/Services/WholeHomeAdditions/MorrisCounty';
import WholeHomeAdditionsPassaicCountyPage from './pages/Services/WholeHomeAdditions/PassaicCounty';
import WholeHomeAdditionsUnionCountyPage from './pages/Services/WholeHomeAdditions/UnionCounty';
import VeterinaryHospitalConstructionPage from './pages/Services/VeterinaryHospital';
import VeterinaryHospitalBergenCountyPage from './pages/Services/VeterinaryHospital/BergenCounty';
import VeterinaryHospitalEssexCountyPage from './pages/Services/VeterinaryHospital/EssexCounty';
import VeterinaryHospitalMorrisCountyPage from './pages/Services/VeterinaryHospital/MorrisCounty';
import VeterinaryHospitalPassaicCountyPage from './pages/Services/VeterinaryHospital/PassaicCounty';
import VeterinaryHospitalUnionCountyPage from './pages/Services/VeterinaryHospital/UnionCounty';
import ValueEngineeringPage from './pages/Services/ValueEngineering';
import ValueEngineeringBergenCountyPage from './pages/Services/ValueEngineering/BergenCounty';
import ValueEngineeringEssexCountyPage from './pages/Services/ValueEngineering/EssexCounty';
import ValueEngineeringMorrisCountyPage from './pages/Services/ValueEngineering/MorrisCounty';
import ValueEngineeringPassaicCountyPage from './pages/Services/ValueEngineering/PassaicCounty';
import ValueEngineeringUnionCountyPage from './pages/Services/ValueEngineering/UnionCounty';
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
          <Route path="/whole-home-additions-bergen-county-nj" element={<WholeHomeAdditionsBergenCountyPage />} />
          <Route path="/whole-home-additions-essex-county-nj" element={<WholeHomeAdditionsEssexCountyPage />} />
          <Route path="/whole-home-additions-morris-county-nj" element={<WholeHomeAdditionsMorrisCountyPage />} />
          <Route path="/whole-home-additions-passaic-county-nj" element={<WholeHomeAdditionsPassaicCountyPage />} />
          <Route path="/whole-home-additions-union-county-nj" element={<WholeHomeAdditionsUnionCountyPage />} />
          <Route path="/services/additions" element={<AdditionsPage />} />
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
          <Route path="/services/value-engineering" element={<ValueEngineeringPage />} />
          <Route path="/value-engineering-bergen-county-nj" element={<ValueEngineeringBergenCountyPage />} />
          <Route path="/value-engineering-essex-county-nj" element={<ValueEngineeringEssexCountyPage />} />
          <Route path="/value-engineering-morris-county-nj" element={<ValueEngineeringMorrisCountyPage />} />
          <Route path="/value-engineering-passaic-county-nj" element={<ValueEngineeringPassaicCountyPage />} />
          <Route path="/value-engineering-union-county-nj" element={<ValueEngineeringUnionCountyPage />} />
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
