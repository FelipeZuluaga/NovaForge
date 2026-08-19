import { useState } from 'react';
import '../styles/Portfolio.css';

// 1. Corrección de nombres de variables de video (sin puntos ni caracteres inválidos)
import videoSaaS from '../assets/SaaS.mp4';
import videoLandingPage from '../assets/VideoLoganPageCampaña.mp4';

// Opcional: Logos o imágenes para el poster de cada video
import logoCliente1 from '../assets/Software_Desarrollo_Web.png';
import logoCliente2 from '../assets/Software_Desarrollo_Web2.png';

const Portfolio = () => {
  const casosDeExito = [
    {
      id: 1,
      cliente: "Mayorista Gallego",
      titulo: "SaaS de Control de Inventario y Ventas POS",
      categoria: "Software SaaS Operativo",
      descripcion: "Implementación de nuestra plataforma SaaS para automatizar el control de stock, margen de ganancias por producto y facturación en punto de venta.",
      resultadoClave: "+45% Eficiencia Operativa",
      videoUrl: videoSaaS, 
      isVideoEmbed: false, 
      testimonio: {
        frase: "Eliminamos las pérdidas por descuadres de stock y ahora sabemos exactamente cuál es nuestra ganancia neta diaria sin hacer tareas manuales.",
        autor: "Carlos Mendoza",
        cargo: "Gerente de Operaciones"
      },
      tags: ["Gestión de Inventario", "Cálculo de Margen", "Automatización POS"]
    },
    {
      id: 2,
      cliente: "Distribuidora Tech",
      titulo: "Landing Page de Alta Conversión + Campañas Meta Ads",
      categoria: "Aceleradora de Ventas",
      descripcion: "Diseño de embudo de captación enfocado en B2B junto con optimización de pauta digital para la generación constante de prospectos cualificados.",
      resultadoClave: "3.2x Retorno de Inversión (ROAS)",
      videoUrl: videoLandingPage, 
      isVideoEmbed: false,
      testimonio: {
        frase: "Logramos triplicar las solicitudes de cotización en menos de 60 días manteniendo el mismo presupuesto publicitario.",
        autor: "Sofía Ramírez",
        cargo: "Directora de Marketing"
      },
      tags: ["Landing Page", "Meta Ads", "Captación B2B"]
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2>Casos de <span>Éxito</span></h2>
        <p>Resultados reales de clientes que automatizaron su operación y escalaron sus ventas.</p>
      </div>

      <div className="portfolio-grid">
        {casosDeExito.map((proy) => (
          <div key={proy.id} className="portfolio-card">
            
            {/* Contenedor de Video / Media */}
            <div className="portfolio-media">
              {proy.isVideoEmbed ? (
                <iframe
                  src={proy.videoUrl}
                  title={proy.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls controlsList="nodownload" poster={proy.logoCliente}>
                  <source src={proy.videoUrl} type="video/mp4" />
                  Tu navegador no soporta el reproductor de video.
                </video>
              )}
            </div>

            {/* Contenido de la Tarjeta */}
            <div className="portfolio-card-body">
              <div className="proy-header-meta">
                <span className="proy-categoria">{proy.categoria}</span>
                <span className="proy-badge-metric">{proy.resultadoClave}</span>
              </div>

              <h3 className="proy-titulo">{proy.titulo}</h3>

              <p className="proy-descripcion">{proy.descripcion}</p>

              {/* Testimonio y Footer alineados al final */}
              <div className="client-experience">
                <p className="client-quote">"{proy.testimonio.frase}"</p>
                <div className="client-footer">
                  <div className="client-author-info">
                    <strong>{proy.testimonio.autor}</strong>
                    <span>{proy.testimonio.cargo} — {proy.cliente}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="portfolio-tags">
                {proy.tags.map((tag, i) => (
                  <span key={i} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;