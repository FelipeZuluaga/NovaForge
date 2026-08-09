import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pricing.css';

// Importación de las imágen7es para el carrusel de fondo
import img1 from '../assets/SoftwareMedida/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/InfraestructuraServidores/img4.png';
import img5 from '../assets/InfraestructuraServidores/img5.png';

const Pricing = () => {
    const navigate = useNavigate();
    const [currentBg, setCurrentBg] = useState(0);
    const backgrounds = [img1, img2, img3, img4, img5];

    // Lógica para el carrusel de fondo automático
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [backgrounds.length]);

    // Función para desplazamiento suave al contacto
    const scrollToContact = () => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const planes = [
        {
            nombre: "Sistemas & Facturación",
            desc: "La solución definitiva para automatizar las ventas, inventarios y el control de tu comercio.",
            features: [
                "Software de Facturación (POS e Interna)",
                "Control de Inventarios en tiempo real",
                "Configuración de terminales y ticketeras",
                "Reportes automatizados de ventas",
                "Soporte técnico y mantenimiento preventivo"
            ],
            destacado: false,
            waLink: "https://wa.me/573132742361?text=Hola,%20me%20interesa%20el%20plan%20de%20Sistemas%20y%20Facturación"
        },
        {
            nombre: "Desarrollo & Medida",
            desc: "Software único, páginas web de alto impacto y aplicaciones móviles escalables para tu marca.",
            features: [
                "Desarrollo Web Profesional y Corporativo",
                "Aplicaciones Móviles nativas (iOS / Android)",
                "Software 100% personalizado a tu operación",
                "Diseño de interfaz exclusivo (UX/UI)",
                "Garantía de escalabilidad e infraestructura"
            ],
            destacado: true,
            waLink: "https://wa.me/573132742361?text=Hola,%20me%20interesa%20el%20plan%20de%20Desarrollo%20a%20la%20medida"
        },
        {
            nombre: "Equipamiento & Branding",
            desc: "Creamos la identidad de tu empresa y te suministramos todo el hardware necesario.",
            features: [
                "Venta de computadores, tablets y pantallas",
                "Diseño de logos y manuales de marca",
                "Creación de letreros y tarjetas profesionales",
                "Optimización y alistamiento de máquinas",
                "Consultoría de infraestructura tecnológica"
            ],
            destacado: false,
            waLink: "https://wa.me/573228556369?text=Hola,%20me%20interesa%20el%20plan%20de%20Equipamiento%20y%20Branding"
        }
    ];
    return (
        <section id="planes" className="pricing-section">
            {/* Fondo Dinámico con Carrusel */}
            <div className="pricing-bg-wrapper">
                {backgrounds.map((img, index) => (
                    <div
                        key={index}
                        className={`pricing-bg-slide ${currentBg === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="pricing-overlay"></div>
            </div>

            {/* Contenido de la sección */}
            <div className="pricing-content">
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
                            {/* 
                            <button
                                className="btn-text-link"
                                onClick={() => navigate('/portafolio')}
                            >
                                Ver portafolio de proyectos
                            </button>*/}

                            <a
                                href={plan.waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={plan.destacado ? "btn-primary-card" : "btn-outline"}
                                style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                            >
                                Solicitar Asesoría
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;