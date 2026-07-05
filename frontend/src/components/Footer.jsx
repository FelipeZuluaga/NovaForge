import '../styles/Footer.css';
import logo from '../assets/logo.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLaptop, FaGlobe, FaDesktop, FaPalette } from 'react-icons/fa';

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
                    <p>Soluciones integrales en tecnología: desarrollo de software a medida, sistemas POS de facturación, identidad corporativa y suministro de hardware empresarial.</p>
                </div>

                {/* Bloque de Navegación */}
                <div className="footer-links">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#mision-vision">Misión y Visión</a></li>
                        <li><a href="#planes">Nuestros Planes</a></li>
                        <li><a href="#garantias">Garantía y Confianza</a></li>
                        <li><a href="#faq">Preguntas Frecuentes</a></li>
                    </ul>
                </div>

                {/* Bloque de Soluciones con iconos */}
                <div className="footer-links">
                    <h4>Soluciones</h4>
                    <ul className="footer-services">
                        <li><FaLaptop /> <span>Software POS & Rutas</span></li>
                        <li><FaGlobe /> <span>Páginas Web y Apps</span></li>
                        <li><FaDesktop /> <span>Computadores y Servidores</span></li>
                        <li><FaPalette /> <span>Diseño de Marca y Logos</span></li>
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
                        <a href="tel:+573132742361">313 274 2361</a>
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