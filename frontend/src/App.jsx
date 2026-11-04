import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SaasShowcase from './components/SaasShowcase';
import Testimonials from './components/Testimonials';
import ProjectEstimator from './components/ProjectEstimator';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // <--- Importar aquí

export default function App() {
  return (
    <div className="bg-[#0B0F17] text-gray-100 font-sans antialiased selection:bg-cyan-400 selection:text-black overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Services />
      <SaasShowcase />
      <Testimonials />
      <ProjectEstimator />
      <Footer />
      <WhatsAppButton /> {/* <--- Colocar el botón flotante aquí */}
    </div>
  );
}