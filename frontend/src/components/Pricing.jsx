import '../styles/Pricing.css';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
    const navigate = useNavigate();

    // Función para desplazamiento suave al contacto
    const scrollToContact = () => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const planes = [
        /* ... tus datos de planes se mantienen igual ... */
        {
            nombre: "Solución SaaS",
            desc: "Ideal para gestión de inventarios, rutas y facturación rápida.",
            features: ["Módulo de Inventarios & Rutas", "Facturación electrónica Cloud", "Reportes de ventas en tiempo real", "Soporte técnico estándar", "Acceso multi-usuario (hasta 5)"],
            destacado: false,
        },
        {
            nombre: "Desarrollo & Medida",
            desc: "Software único y aplicaciones móviles escalables.",
            features: ["Desarrollo Web & Móvil nativo", "Diseño de interfaz (UX/UI)", "Software 100% personalizado", "Integración con APIs externas", "Garantía de escalabilidad"],
            destacado: true,
        },
        {
            nombre: "Consultoría & Cloud",
            desc: "Optimización de infraestructura y estrategia digital.",
            features: ["Consultoría Tecnológica", "Configuración de Servidores & Cloud", "Estrategia de Marketing Digital", "Auditoría de seguridad", "Mantenimiento preventivo 24/7"],
            destacado: false,
        }
    ];

    return (
        <section id="planes" className="pricing-section">
            <div className="pricing-header">
                <h2 className="section-title">Nuestros Planes</h2>
                <p className="section-subtitle">Inversión tecnológica diseñada para escalar tu negocio.</p>
            </div>

            <div className="pricing-grid">
                {planes.map((plan, index) => (
                    <div key={index} className={`price-card ${plan.destacado ? 'featured' : ''}`}>
                        {plan.destacado && <span className="badge">Recomendado</span>}
                        <h3>{plan.nombre}</h3>
                        <p className="price-desc">{plan.desc}</p>

                        <ul className="price-features">
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>

                        <button
                            className="btn-text-link"
                            onClick={() => navigate('/portafolio')}
                        >
                            Ver portafolio de proyectos
                        </button>

                        {/* AGREGAMOS EL ONCLICK AQUÍ */}
                        <button 
                            className={plan.destacado ? "btn-primary-card" : "btn-outline"}
                            onClick={scrollToContact}
                        >
                            Solicitar Asesoría
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;