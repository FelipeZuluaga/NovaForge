import { useState } from 'react'; // 1. Importamos useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MissionVision from './components/mision_vision';
import Pricing from './components/Pricing';
import Garantias from './components/Garantias';
import Contact from './components/Contact';
import PortfolioPage from './components/Portfolio';
import SocialMenu from './components/SocialMenu'; 

const Home = () => (
  <>
    <Hero />
    <MissionVision />
    <Pricing />
    <Garantias />
    <Contact />
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
            <Route path="/portafolio" element={<PortfolioPage />} />
          </Routes>
        </main>

        <SocialMenu /> {/* ESTO DEBE ESTAR AQUÍ: Fuera de Navbar, fuera de Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;