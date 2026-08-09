import { useState, useEffect } from 'react';
import '../styles/Hero.css';

// Importamos las imágenes que funcionarán como fondos dinámicos
import bgSoftware from '../assets/DesarrolloWebBranding/Software_Desarrollo_Web.png';
import bgInfraestructura from '../assets/Infraestructura_Soporte.png';
import bgInfraestructura2 from '../assets/Infraestructura_Soporte2.png';
import bgBranding from '../assets/DesarrolloWebBranding/Branding_Identidad_Visual.png';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Array con las rutas de las imágenes de fondo
  const backgrounds = [bgSoftware, bgInfraestructura, bgBranding, bgInfraestructura2];

  // Efecto para cambiar el fondo automáticamente cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section id="inicio" className="hero-container">
      {/* Capas de fondo dinámicas para lograr una transición suave */}
      <div className="hero-background-wrapper">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${currentBg === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        {/* Capa oscura superpuesta para asegurar que las letras sigan siendo legibles */}
        <div className="hero-overlay"></div>
      </div>

      {/* Contenido estático del frente (Se mantiene igual a tu diseño original) */}
      <div className="hero-content">
        <h1 className="hero-title">
          Toda la tecnología que tu<br /> negocio necesita, en un solo <span>lugar</span>.
        </h1>
        <p className="hero-subtitle">
          En NovaForge forjamos soluciones integrales de alta calidad: desde el desarrollo de software a medida y sistemas de facturación, hasta identidad visual, suministro de equipos y soporte técnico garantizado.
        </p>

        <a
          href="https://wa.me/573132742361?text=Hola,%20me%20gustaría%20iniciar%20mi%20transformación%20digital"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button className="btn-primary">Iniciar mi transformación digital</button>
        </a>
      </div>

      {/* Grilla de Unidades de Negocio Estática */}
      <div className="hero-info-grid">

        {/* Tarjeta 1 */}
        <div className="info-card">

          <h3>Software & Desarrollo Web</h3>
          <p>
            Creamos herramientas digitales a la medida de tu operación: Páginas web corporativas, aplicaciones móviles modernas y sistemas de facturación con control de inventarios automatizado.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="info-card">
          <h3>Infraestructura & Soporte</h3>
          <p>
            Equipamos y protegemos la continuidad de tu empresa. Venta de computadores y periféricos, mantenimiento preventivo y configuración completa de terminales de facturación (POS).
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="info-card">
          <h3>Branding & Identidad Visual</h3>
          <p>
            Diseñamos la cara profesional de tu marca ante el mundo. Creación de logos corporativos, manuales de marca, letreros, fachadas y tarjetas profesionales de presentación.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;