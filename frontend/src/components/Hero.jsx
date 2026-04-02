import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Software profesional,<br /> hecho para <span>crecer</span>.
        </h1>
        <p className="hero-subtitle">
          En NovaForge desarrollamos soluciones tecnológicas de alta calidad 
          y escalables para empresas que buscan excelencia técnica.
        </p>
        
        {/* Enlace al ID de contacto */}
        <a href="#contacto" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">Solicitar asesoría gratuita</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;