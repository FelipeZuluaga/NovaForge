import '../styles/WhatsAppButton.css';
// Puedes usar un icono de react-icons si lo tienes, 
// o una imagen/SVG directamente.
import whatsappIcon from '../assets/whatsapp-icon.png'; 

const WhatsAppButton = () => {
  const phoneNumber = "573132742361"; // Reemplaza con tu número (incluye código de país sin el +)
  const message = "Hola NovaForge, me gustaría solicitar información sobre sus servicios.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Contáctanos por WhatsApp"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;