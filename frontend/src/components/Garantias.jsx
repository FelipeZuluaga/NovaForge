import '../styles/Garantias.css';
import { LuShieldCheck, LuPlugZap, LuHeadset, LuLock } from 'react-icons/lu';

const Garantias = () => {
  const items = [
    {
      icono: <LuShieldCheck />,
      titulo: "Calidad y Estabilidad",
      desc: "Implementamos buenas prácticas de desarrollo y configuramos hardware óptimo para entregar sistemas estables, robustos y duraderos."
    },
    {
      icono: <LuPlugZap />,
      titulo: "Soluciones de Extremo a Extremo",
      desc: "Centralizamos tus necesidades digitales y físicas. Diseñamos tu marca, programamos tus sistemas y equipamos toda tu oficina en un solo lugar."
    },
    {
      icono: <LuHeadset />,
      titulo: "Soporte Integral Continuo",
      desc: "Garantizamos el respaldo constante tanto en el software desarrollado como en el mantenimiento preventivo y correctivo de tus equipos informáticos."
    },
    {
      icono: <LuLock />,
      titulo: "Confidencialidad y Respaldo",
      desc: "Tus datos comerciales, bases de datos y propiedad intelectual están protegidos bajo estrictos acuerdos de seguridad y confidencialidad."
    }
  ];

  return (
    <section id="garantias" className="garantias-section">
      <div className="garantias-header">
        <h2 className="section-title">Nuestra <span>Garantía</span></h2>
        <p className="section-subtitle">Tu tranquilidad operativa y el crecimiento de tu negocio son nuestra máxima prioridad.</p>
      </div>

      <div className="garantias-grid">
        {items.map((item, index) => (
          <div key={index} className="garantia-card">
            <div className="garantia-icon">{item.icono}</div>
            <h3>{item.titulo}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Garantias;