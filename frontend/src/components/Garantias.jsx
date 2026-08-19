import '../styles/Garantias.css';
import { LuShieldCheck, LuTrendingUp, LuHeadset, LuLock } from 'react-icons/lu';

const Garantias = () => {
  const items = [
    {
      icono: <LuShieldCheck />,
      titulo: "Estabilidad & Disponibilidad SaaS",
      desc: "Garantizamos un tiempo de actividad del 99.9% en nuestra plataforma de inventarios para que tu negocio opere sin interrupciones ni pérdida de datos."
    },
    {
      icono: <LuTrendingUp />,
      titulo: "Enfoque en Resultados & Conversión",
      desc: "Diseñamos landing pages y campañas optimizadas bajo métricas clave para maximizar la captación de clientes cualificados para tu empresa."
    },
    {
      icono: <LuHeadset />,
      titulo: "Soporte Técnico Continuo",
      desc: "Acompañamiento especializado directo para resolver dudas en el uso del software y optimizar tus campañas de pauta digital."
    },
    {
      icono: <LuLock />,
      titulo: "Seguridad y Propiedad de Datos",
      desc: "Tus inventarios, registros de ventas e información de clientes están protegidos con altos estándares de encriptación y privacidad."
    }
  ];

  return (
    <section id="garantias" className="garantias-section">
      <div className="garantias-container">
        {/* Encabezado */}
        <div className="garantias-header">
          <h2 className="section-title">Nuestra <span>Garantía</span></h2>
          <p className="section-subtitle">
            Tu tranquilidad operativa y el crecimiento de tus ventas son el centro de nuestro compromiso.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="garantias-grid">
          {items.map((item, index) => (
            <div key={index} className="garantia-card">
              <div className="garantia-icon">
                {item.icono}
              </div>
              <h3 className="garantia-title">{item.titulo}</h3>
              <p className="garantia-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Garantias;