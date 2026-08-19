import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MisionVision from './components/mision_vision'; 
import Portfolio from './components/Portfolio'; 
import Pricing from './components/Pricing';
import Contact from './components/Contact';  
import Garantias from './components/Garantias';
import SocialMenu from './components/SocialMenu'; 

// Cambiamos <mision_vision /> por <MisionVision />
const Home = () => (
  <>
    <Hero />
    <MisionVision />
    <Portfolio />
    <Pricing />
    <Contact />
    <Garantias />
  </>
);

// App.js
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <SocialMenu />
        <Footer />
      </div>
    </Router>
  );
}

export default App;