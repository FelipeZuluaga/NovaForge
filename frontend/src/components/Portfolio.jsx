import { useState } from 'react';
import '../styles/Portfolio.css';

// Importa los medios (imágenes de capturas del software y logos de clientes)
import FacturaElectrica from '../assets/SoftwareMedida/FacturaElectrica.mp4'; 
import soporte_Mantenimiento from '../assets/InfraestructuraServidores/soporte_Mantenimiento.mp4'; 
import CodigoBarrar from '../assets/SoftwareMedida/video-codigo-barrar.mp4'; 



import logoCliente1 from '../assets/SoftwareMedida/LogoMG.jpeg'; // Reemplazar con el logo real
import logoCliente2 from '../assets/InfraestructuraServidores/LogoMR.png';
import logoCliente3 from '../assets/SoftwareMedida/Inventarios.png';

const Portfolio = () => {
  const casosDeExito = [
    {
      id: 1,
      cliente: "Mayorista Gallego",
      logoCliente: logoCliente1,
      titulo: "Sistema SaaS de Gestión de Inventarios y POS",
      categoria: "Software a la Medida",
      descripcion: "Desarrollamos una plataforma SaaS integral con facturación POS, control de stock en tiempo real y módulo de reportes automatizados.",
      resultadoClave: "+45% Velocidad en Facturación",
      testimonio: {
        frase: "El software desarrollado transformó completamente nuestra operación diaria. La facturación es inmediata y no hemos vuelto a tener descuadres de stock.",
        autor: "Carlos Mendoza",
        cargo: "Gerente de Operaciones"
      },
      tags: ["SaaS POS", "React / Node.js", "MySQL Cloud"],
      media: [
        { tipo: 'video', url: FacturaElectrica },
        // Puedes agregar más capturas para que funcione el carrusel:
        // { tipo: 'imagen', url: capturaPantalla2 }
      ]
    },
    {
      id: 2,
      cliente: "MR Ingeniria Tecnologia shop",
      logoCliente: logoCliente2,
      titulo: "Infraestructura Cloud y Redes Multi-Sede",
      categoria: "Infraestructura & Servidores",
      descripcion: "Implementación de servidores locales Ubuntu, VPN interconectada entre 3 sucursales y sistema de soporte administrado 24/7.",
      resultadoClave: "99.9% Disponibilidad del Sistema",
      testimonio: {
        frase: "Cero caídas en el sistema durante nuestras horas pico. El soporte remoto responde en minutos.",
        autor: "Miguel Angel Romero Romero",
        cargo: "Director de Tecnología"
      },
      tags: ["Linux Ubuntu", "Redes VPN", "Soporte 24/7"],
      media: [
        { tipo: 'video', url: soporte_Mantenimiento }
      ]
    },
    {
      id: 3,
      cliente: "Droguerias Serna",
      //logoCliente: logoCliente3,
      titulo: "Plataforma Web & Sistema de Identidad",
      categoria: "Desarrollo Web & Branding",
      descripcion: "Diseño UI/UX, desarrollo de portal web corporativo y creación de la línea gráfica completa lista para integración del software.",
      resultadoClave: "100% Digitalización de la Marca",
      testimonio: {
        frase: "Lograron proyectar la imagen profesional que nuestra empresa necesitaba frente a inversionistas.",
        autor: "Andrés Serna Ororio",
        cargo: "CEO & Fundador"
      },
      tags: ["UI / UX", "Branding", "Desarrollo Web"],
      media: [
        { tipo: 'video', url: CodigoBarrar }
      ]
    }
  ];

  return (
    <section id="proyectos" className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="section-title">Nuestros <span>Casos de Éxito</span></h2>
        <p className="section-subtitle">
          Proyectos reales donde nuestro software a la medida e infraestructura han impulsado el crecimiento de nuestros clientes.
        </p>
      </div>

      <div className="portfolio-grid">
        {casosDeExito.map((caso) => (
          <ProjectCard key={caso.id} proy={caso} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ proy }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = proy.media[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % proy.media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + proy.media.length) % proy.media.length);
  };

  return (
    <div className="portfolio-card">
      {/* Área Multimedia (Capturas / Video del Software) */}
      <div className="portfolio-image">
        <div className="carousel-container">
          {currentItem.tipo === 'video' ? (
            <video 
              src={currentItem.url} 
              className="carousel-img" 
              autoPlay 
              muted 
              loop 
              playsInline
            />
          ) : (
            <img src={currentItem.url} alt={proy.titulo} className="carousel-img" />
          )}

          {/* Botones de navegación solo si hay más de 1 elemento */}
          {proy.media.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={handlePrev}>‹</button>
              <button className="carousel-btn next" onClick={handleNext}>›</button>

              <div className="carousel-dots">
                {proy.media.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Hover con detalles técnicos y descripción */}
        <div className="portfolio-overlay">
          <p>{proy.descripcion}</p>
          <div className="portfolio-tags">
            {proy.tags.map((tag, i) => <span key={i}>{tag}</span>)}
          </div>
        </div>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="portfolio-info">
        <div className="proy-header-meta">
          <span className="proy-cat">{proy.categoria}</span>
          <span className="proy-badge-metric">{proy.resultadoClave}</span>
        </div>

        <h3>{proy.titulo}</h3>

        {/* Testimonio y Experiencia del Cliente */}
        <div className="client-experience">
          <p className="client-quote">"{proy.testimonio.frase}"</p>
          <div className="client-footer">
            <div className="client-author-info">
              <strong>{proy.testimonio.autor}</strong>
              <span>{proy.testimonio.cargo} — {proy.cliente}</span>
            </div>
            {proy.logoCliente && (
              <img 
                src={proy.logoCliente} 
                alt={`Logo ${proy.cliente}`} 
                className="client-logo"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;