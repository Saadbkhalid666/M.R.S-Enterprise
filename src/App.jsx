import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import SuppliersSection from './components/SuppliersSection';
import ProjectsSection from './components/ProjectsSection';
import ClientTestimonialsSection from './components/ClientTestimonialsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ContactSection from './components/ContactSection';
import FooterComponent from './components/FooterComponent';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Helmet>
        <title>M.R.S Enterprises | Premium Industrial Solutions</title>
        <meta 
          name="description" 
          content="Leading industrial importer and government contractor in Pakistan. Supply electrical components, mechanical parts, lifting equipment from global manufacturers." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <SuppliersSection />
        <ProjectsSection />
        <ClientTestimonialsSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>

      <FooterComponent />
    </div>
  );
}
