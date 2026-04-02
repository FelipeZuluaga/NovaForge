import '../styles/Garantias.css';

const Garantias = () => {
  const items = [
    {
      icono: "🛡️",
      titulo: "Código de Alta Calidad",
      desc: "Aplicamos las mejores prácticas y estándares técnicos para entregar software robusto y fácil de mantener."
    },
    {
      icono: "📈",
      titulo: "Escalabilidad Garantizada",
      desc: "Diseñamos soluciones preparadas para crecer junto a tu empresa, soportando mayores volúmenes de datos y usuarios."
    },
    {
      icono: "🤝",
      titulo: "Soporte y Acompañamiento",
      desc: "No solo entregamos código; somos tus aliados tecnológicos con soporte técnico post-entrega constante."
    },
    {
      icono: "🔒",
      titulo: "Confidencialidad Total",
      desc: "Tu propiedad intelectual y datos están protegidos bajo estrictos acuerdos de confidencialidad (NDA)."
    }
  ];

  return (
    <section id="garantias" className="garantias-section">
      <div className="garantias-header">
        <h2 className="section-title">Nuestra <span>Garantía</span></h2>
        <p className="section-subtitle">Tu tranquilidad es nuestra prioridad en cada línea de código.</p>
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