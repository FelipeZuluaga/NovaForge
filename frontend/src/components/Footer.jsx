import '../styles/Footer.css';
import logo from '../assets/logo.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaChartLine, FaRocket } from 'react-icons/fa';
import { LuBox } from 'react-icons/lu';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                
                {/* Bloque de Marca */}
                <div className="footer-brand">
                    <div className="footer-logo-wrap">
                        <img src={logo} alt="NovaForge Logo" className="footer-logo" />
                        <span className="footer-name">NovaForge</span>
                    </div>
                    <p className="footer-brand-desc">
                        Plataforma SaaS de control operativo y agencia de crecimiento digital. Impulsamos la rentabilidad de las empresas automatizando inventarios y escalando sus ventas en línea.
                    </p>
                </div>

                {/* Bloque de Navegación */}
                <div className="footer-links">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#mision-vision">Misión & Visión</a></li>
                        <li><a href="#planes">Nuestros Planes</a></li>
                        <li><a href="#casos-exito">Casos de Éxito</a></li>
                        <li><a href="#garantias">Garantías</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                {/* Bloque de Soluciones (Actualizado al nuevo enfoque) */}
                <div className="footer-services">
                    <h4>Soluciones</h4>
                    <ul>
                        <li>
                            <LuBox className="service-icon" /> 
                            <span>SaaS Inventarios & POS</span>
                        </li>
                        <li>
                            <FaRocket className="service-icon" /> 
                            <span>Landing Pages de Alta Conversión</span>
                        </li>
                        <li>
                            <FaChartLine className="service-icon" /> 
                            <span>Gestión de Meta & Google Ads</span>
                        </li>
                    </ul>
                </div>

                {/* Bloque de Contacto */}
                <div className="footer-contact">
                    <h4>Contacto Directo</h4>
                    <div className="contact-item-wrap">
                        <FaEnvelope className="contact-icon" />
                        <a href="mailto:novaforge.as@gmail.com">novaforge.as@gmail.com</a>
                    </div>
                    <div className="contact-item-wrap">
                        <FaPhone className="contact-icon" />
                        <a href="tel:+573132742361">+57 313 274 2361</a>
                    </div>
                    <div className="contact-item-wrap">
                        <FaMapMarkerAlt className="contact-icon" />
                        <p>Bogotá, Colombia</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} NovaForge. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;