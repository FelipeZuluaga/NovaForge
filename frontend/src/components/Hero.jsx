import { useState, useEffect } from 'react';
import '../styles/Hero.css';

// Imágenes de los 2 pilares principales
import bgSaaS from '../assets/Software_Desarrollo_Web.png';
import bgAgencia from '../assets/Software_Desarrollo_Web2.png'; 

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [bgSaaS, bgAgencia];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section id="inicio" className="hero-container">
      {/* Capas de fondo dinámicas */}
      <div className="hero-background-wrapper">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${currentBg === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Contenido Principal Centrado */}
      <div className="hero-content">
        <span className="hero-tagline">Impulsamos tu Crecimiento Digital</span>
        
        <h1 className="hero-title">
          Soluciones de Software & <br />
          <span>Aceleración de Ventas</span>
        </h1>

        <p className="hero-description">
          Simplificamos tu gestión operativa con software a la medida y maximizamos tu facturación con estrategias de atracción de clientes de alto impacto.
        </p>

        {/* Botones Alineados */}
        <div className="hero-buttons-container">
          <a
            href="#contacto"
            className="hero-btn btn-primary"
          >
            Probar Software de Inventario
          </a>

          <a
            href="https://wa.me/573132742361?text=Hola%20NovaForge,%20quiero%20acelerar%20las%20ventas%20de%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn-secondary"
          >
            Acelerar mis Ventas
          </a>
        </div>
      </div>

      {/* Grilla de los 2 Pilares de Negocio */}
      <div className="hero-info-grid">
        {/* Pilar 1: SaaS */}
        <div className="info-card">
          <div className="info-card-badge">Producto SaaS</div>
          <h3>Software de Inventario & Ventas</h3>
          <p>
            Controla tu stock en tiempo real, calcula tu margen de ganancia real y automatiza la facturación y reportes de tu negocio sin perder tiempo en tareas repetitivas.
          </p>
        </div>

        {/* Pilar 2: Agencia Growth */}
        <div className="info-card">
          <div className="info-card-badge">Agencia Growth</div>
          <h3>Aceleradora de Ventas & Web</h3>
          <p>
            Diseñamos landing pages optimizadas para la conversión e implementamos campañas publicitarias estratégicas (Meta & Google Ads) para atraer clientes cualificados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;