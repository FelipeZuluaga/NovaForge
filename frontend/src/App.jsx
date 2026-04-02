import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importamos los componentes de las secciones
import Hero from './components/Hero';
import MissionVision from './components/mision_vision';
import Pricing from './components/Pricing';
import Garantias from './components/Garantias';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

// Importamos la nueva página y el botón
import PortfolioPage from './components/Portfolio';
import WhatsAppButton from './components/WhatsAppButton'; 

// Componente que agrupa la Landing Page principal
const Home = () => (
  <>
    <Hero />
    <MissionVision />
    <Pricing />
    <Garantias />
    <FAQ />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <main>
          <Routes>
            {/* Ruta para la página principal (Landing) */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para la página independiente de Portafolio */}
            <Route path="/portafolio" element={<PortfolioPage />} />
          </Routes>
        </main>

        {/* Colocamos el botón aquí para que sea global. 
            Estará presente tanto en "/" como en "/portafolio" 
        */}
        <WhatsAppButton />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
