import { useState } from 'react';
import '../styles/Portfolio.css';

// Importa los videos que vas a asignar a cada pilar
import videoDesarrollo from '../assets/despues_novaforge.mp4'; 
// Nota: Para pruebas puedes usar el mismo video corporativo en los tres, 
// o clonar e importar videoSoporte.mp4 y videoBranding.mp4 cuando los tengas.
import videoSoporte from '../assets/video_SaaS.mp4'; 
import videoBranding from '../assets/video_SaaS.mp4'; 

const Portfolio = () => {
  const pilaresProyectos = [
    {
      id: 1,
      titulo: "Software & Desarrollo Web",
      categoria: "Pilar Operativo 01",
      descripcion: "Diseño y despliegue de plataformas SaaS, sistemas POS de facturación y aplicativos en la nube con arquitecturas escalables y bases de datos optimizadas.",
      tags: ["React / Node.js", "Sistemas POS", "MySQL & Cloud", "APIs"],
      media: [{ tipo: 'video', url: videoDesarrollo }]
    },
    {
      id: 2,
      titulo: "Infraestructura & Soporte",
      categoria: "Pilar Operativo 02",
      descripcion: "Montaje de servidores locales (Linux/Ubuntu), configuración de redes estructuradas, mantenimiento preventivo de hardware y soporte técnico administrado 24/7.",
      tags: ["Servidores Linux", "Redes POS", "Mantenimiento PC", "Soporte Remoto"],
      media: [{ tipo: 'video', url: videoSoporte }]
    },
    {
      id: 3,
      titulo: "Branding & Identidad Visual",
      categoria: "Pilar Operativo 03",
      descripcion: "Creación de identidad corporativa, diseño de logotipos de alta fidelidad, marcas de agua personalizadas y layouts de interfaz (UI/UX) listos para desarrollo.",
      tags: ["Diseño de Logos", "UI / UX", "Identidad Corporativa", "Formatos Word/Web"],
      media: [{ tipo: 'video', url: videoBranding }]
    }
  ];

  return (
    <section id="proyectos" className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="section-title">Nuestros <span>Casos de Éxito</span></h2>
        <p className="section-subtitle">Soluciones reales divididas en nuestros tres frentes de ejecución tecnológica.</p>
      </div>

      <div className="portfolio-grid">
        {pilaresProyectos.map((proy) => (
          <ProjectCard key={proy.id} proy={proy} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ proy }) => {
  // Como ahora cada pilar tiene un solo video fijo de demostración, 
  // la lógica del carrusel se simplifica directamente al primer elemento.
  const currentItem = proy.media[0];

  return (
    <div className="portfolio-card">
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