import { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú móvil al hacer clic
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src={logo} alt="NovaForge Icon" className="nav-logo" />
        <span className="nav-brand-name">NovaForge</span>
      </div>

      <div className={`nav-hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>

      <div className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        {/* Cambiamos #hero por /#inicio para que coincida con el ID del Hero */}
        <a href="/#inicio" onClick={closeMenu}>Inicio</a>
        
        {/* Usamos /# para que si el usuario está en /portafolio pueda volver a la sección */}
        <a href="/#mision-vision" onClick={closeMenu}>Misión y Visión</a>
        
        <a href="/#planes" onClick={closeMenu}>Planes</a>
        
        {/* Agregamos el enlace al nuevo Portafolio (Página aparte) */}
        <a href="/portafolio" onClick={closeMenu}>Portafolio</a>

        <a href="/#garantias" onClick={closeMenu}>Garantías</a>
        
        <a href="/#faq" onClick={closeMenu}>FAQ</a>
        
        <a href="/#contacto" className="nav-cta" onClick={closeMenu}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;