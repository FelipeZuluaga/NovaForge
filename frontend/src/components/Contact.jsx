import '../styles/Contact.css';
import { FaWhatsapp, FaLinux, FaWindows, FaAndroid, FaApple, FaReact, FaNodeJs, FaDesktop } from 'react-icons/fa';
import { SiUbuntu, SiIntel, SiAmd, SiDell, SiHp } from 'react-icons/si';
import servicioClienteImg from '../assets/servicio_cliente.png'; // Importación local

const Contact = () => {
    const whatsappLink = "https://wa.me/573132742361?text=Hola%20NovaForge,%20necesito%20atención%20de%20servicio%20al%20cliente%20por%20favor.";

    const tecnologias = [
        { nombre: "Linux", icono: <FaLinux /> }, { nombre: "Ubuntu", icono: <SiUbuntu /> },
        { nombre: "Windows", icono: <FaWindows /> }, { nombre: "Intel", icono: <SiIntel /> },
        { nombre: "AMD", icono: <SiAmd /> }, { nombre: "Dell", icono: <SiDell /> },
        { nombre: "HP", icono: <SiHp /> }, { nombre: "Android", icono: <FaAndroid /> },
        { nombre: "iOS", icono: <FaApple /> }, { nombre: "React", icono: <FaReact /> },
        { nombre: "Node.js", icono: <FaNodeJs /> }
    ];

    return (
        <section id="contacto" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Más de <span>10 años</span> de experiencia</h2>
                    <p className="contact-experience-text">
                        En NovaForge fusionamos trayectoria técnica y vanguardia digital. Somos especialistas en dar soporte, desarrollar software de alto rendimiento y estructurar la infraestructura tecnológica de empresas exigentes.
                    </p>

                    <div className="tech-brands-container">
                        <h3>Tecnologías y Marcas que respaldamos:</h3>
                        <div className="tech-badge-grid">
                            {tecnologias.map((tech, index) => (
                                <div key={index} className="tech-badge">
                                    {tech.icono} <span>{tech.nombre}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box">
                    <div className="callcenter-image-wrapper">
                        <img src={servicioClienteImg} alt="Soporte Técnico" className="callcenter-img" />
                        <div className="support-overlay">
                            <span className="status-dot">●</span> Soporte Activo 24/7
                        </div>
                    </div>

                    <div className="cta-action-content">
                        <h3>¿Prefieres una asesoría inmediata?</h3>
                        <p>Nuestro centro de atención está listo para asistirte en tiempo real con ingenieros expertos.</p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-cta"
                        >
                            <FaWhatsapp className="ws-icon" /> Chatear por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;