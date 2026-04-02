import { useState } from 'react';
import '../styles/Portfolio.css';

// Importaciones de tus archivos locales
import loginImg from '../assets/login.png';
import panelImg from '../assets/panel_central.png';
import videoSaaS from '../assets/video_SaaS.mp4'; // Importamos tu nuevo video

const Portfolio = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "SaaS de Gestión Logística",
      categoria: "Software a Medida",
      descripcion: "Optimización de rutas en tiempo real y control de inventarios para flotas de transporte.",
      tags: ["React", "Node.js", "MySQL"],
      media: [
        { tipo: 'img', url: loginImg },
        { tipo: 'img', url: panelImg }
      ]
    },
    {
      id: 2,
      titulo: "App Web y movil de E-commerce",
      categoria: "Desarrollo Web y movil",
      descripcion: "Experiencia de compra fluida con catálogo dinámico.",
      tags: ["React Native", "Firebase"],
      media: [
        { tipo: 'video', url: videoSaaS }, // Usamos el video importado aquí
        { tipo: 'img', url: panelImg }
      ]
    }
  ];

  return (
    <section id="proyectos" className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="section-title">Nuestros <span>Casos de Éxito</span></h2>
        <p className="section-subtitle">Soluciones reales para retos tecnológicos complejos.</p>
      </div>

      <div className="portfolio-grid">
        {proyectos.map((proy) => (
          <ProjectCard key={proy.id} proy={proy} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ proy }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = proy.media[currentIndex];

  const nextMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % proy.media.length);
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + proy.media.length) % proy.media.length);
  };

  return (
    <div className="portfolio-card">
      <div className="portfolio-image">
        <div className="carousel-container">
          
          {/* Renderizado dinámico según el tipo de archivo */}
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
          
          {/* Botones de navegación del carrusel */}
          {proy.media.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={prevMedia}>‹</button>
              <button className="carousel-btn next" onClick={nextMedia}>›</button>
              <div className="carousel-dots">
                {proy.media.map((_, i) => (
                  <span key={i} className={`dot ${currentIndex === i ? 'active' : ''}`}></span>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="portfolio-overlay">
          <p>{proy.descripcion}</p>
          <div className="portfolio-tags">
            {proy.tags.map((tag, i) => <span key={i}>{tag}</span>)}
          </div>
        </div>
      </div>
      
      <div className="portfolio-info">
        <span className="proy-cat">{proy.categoria}</span>
        <h3>{proy.titulo}</h3>
      </div>
    </div>
  );
};

export default Portfolio;