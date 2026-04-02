import '../styles/Footer.css';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo-wrap">
                        <img src={logo} alt="NovaForge Logo" className="footer-logo" />
                        <span className="footer-name">NovaForge</span>
                    </div>
                    <p>Soluciones de software profesional para empresas que buscan excelencia técnica y escalabilidad.</p>
                </div>

                <div className="footer-links">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#planes">Misión y Visión</a></li>
                        <li><a href="#contacto">Planes</a></li>
                        <li><a href="#contacto">Garantias y confianza</a></li>
                        <li><a href="#contacto">Preguntas frecuentes</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contacto</h4>
                    <p>novaforge.as@gmail.com</p>
                    <p>3132742361</p>
                    <p>Bogotá, Colombia</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} NovaForge. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;