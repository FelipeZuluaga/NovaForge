import { useState } from 'react';
import { FaWhatsapp, FaTiktok, FaFacebook, FaShoppingCart, FaTimes } from 'react-icons/fa';
import '../styles/SocialMenu.css';

const SocialMenu = ({ isHidden }) => {
  // Inicializamos en true para que siempre esté abierto por defecto
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = [
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/573132742361?text=Hola+NovaForge', color: '#25D366' },
    { name: 'TikTok', icon: <FaTiktok />, url: 'https://www.tiktok.com/@novaforge598?_r=1&_t=ZS-96n1vKDzsCj', color: '#000' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=61572142791983', color: '#4267B2' },
  ];

  return (
    <div className={`social-menu-container ${isOpen ? 'open' : ''} ${isHidden ? 'hidden' : ''}`}>
      {/* Botón principal */}
      <button className="main-float-btn" onClick={toggleMenu} aria-label="Toggle menú flotante">
        {isOpen ? <FaTimes /> : <FaPlus />}
      </button>

      {/* Lista de enlaces */}
      <div className="menu-items">
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="menu-item"
            style={{ '--item-color': link.color }}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMenu;