import '../styles/Contact.css';
import { FaWhatsapp, FaReact, FaNodeJs, FaGoogle, FaMeta } from 'react-icons/fa6';
import { SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import servicioClienteImg from '../assets/servicio_cliente.png';

const Contact = () => {
    const whatsappLink = "https://wa.me/573132742361?text=Hola%20NovaForge,%20quiero%20agendar%20una%20asesor%C3%ADa%20para%20mi%20negocio.";

    // Stack tecnológico enfocado en Software SaaS y Growth Marketing
    const tecnologias = [
        { nombre: "React", icono: <FaReact /> },
        { nombre: "Node.js", icono: <FaNodeJs /> },
        { nombre: "TypeScript", icono: <SiTypescript /> },
        { nombre: "PostgreSQL", icono: <SiPostgresql /> },
        { nombre: "Tailwind CSS", icono: <SiTailwindcss /> },
        { nombre: "Meta Ads", icono: <FaMeta /> },
        { nombre: "Google Ads", icono: <FaGoogle /> }
    ];

    return (
        <section id="contacto" className="contact-section">
            <div className="contact-container">
                {/* Lado Izquierdo: Mensaje y Tecnologías */}
                <div className="contact-info">
                    <h2 className="contact-title">
                        Impulsa tu negocio <span>hoy mismo</span>
                    </h2>
                    
                    <p className="contact-experience-text">
                        Automatiza tus inventarios y escala tu facturación digital con el respaldo de nuestro stack tecnológico y asesoría estratégica personalizada.
                    </p>

                    <div className="tech-brands-container">
                        <h3>Tecnologías & Infraestructura</h3>
                        <div className="tech-badge-grid">
                            {tecnologias.map((tech, index) => (
                                <div key={index} className="tech-badge">
                                    <span className="tech-icon">{tech.icono}</span>
                                    <span>{tech.nombre}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Tarjeta de Atención Comercial / CTA WhatsApp */}
                <div className="contact-cta-box">
                    <div className="callcenter-image-wrapper">
                        <img 
                            src={servicioClienteImg} 
                            alt="Atención al cliente NovaForge" 
                            className="callcenter-img" 
                        />
                        <div className="support-overlay">
                            <span className="status-dot">●</span> Atención Comercial Activa
                        </div>
                    </div>

                    <div className="cta-action-content">
                        <h3>¿Prefieres una asesoría directa?</h3>
                        <p>
                            Escríbenos para agendar una demostración en vivo de nuestro SaaS o analizar la estrategia de tu próximo sitio web.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-cta"
                        >
                            <FaWhatsapp className="ws-icon" /> Agendar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;