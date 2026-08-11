import { useState, useEffect } from 'react';
import '../styles/Pricing.css';

// Importación de imágenes para el carrusel de fondo
import img1 from '../assets/Software_Desarrollo_Web.png';
import img2 from '../assets/Software_Desarrollo_Web2.png';

const Pricing = () => {
    const [currentBg, setCurrentBg] = useState(0);
    const backgrounds = [img1, img2];

    // Carrusel de fondo automático
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [backgrounds.length]);

    const planes = [
        {
            id: 1,
            nombre: "SaaS Inventario & Ventas",
            badge: "Software Operativo",
            desc: "La solución completa para controlar tu stock, automatizar facturación y calcular tus ganancias netas en tiempo real.",
            destacado: false,
            features: [
                "Control de inventario en tiempo real multi-bodega",
                "Módulo de ventas y facturación POS rápida",
                "Cálculo automático de margen de ganancia por producto",
                "Alertas inteligentes de bajo stock",
                "Soporte técnico y actualizaciones continuas"
            ],
            waLink: "https://wa.me/573132742361?text=Hola,%20me%20interesa%20el%20plan%20SaaS%20Inventario%20%26%20Ventas"
        },
        {
            id: 2,
            nombre: "Aceleradora de Ventas Digitales",
            badge: "Growth & Captación B2B/B2C",
            desc: "Estrategia integral para multiplicar tus prospectos cualificados mediante embudos de conversión y pauta publicitaria.",
            destacado: true, // Destacado visualmente
            features: [
                "Diseño de Landing Page de alta conversión",
                "Gestión y optimización de campañas en Meta Ads",
                "Integración directa con WhatsApp / CRM",
                "Estrategia de retargeting para prospectos",
                "Reportes mensuales de rendimiento y ROAS"
            ],
            waLink: "https://wa.me/573132742361?text=Hola,%20me%20interesa%20el%20plan%20Aceleradora%20de%20Ventas"
        }
    ];

    return (
        <section className="pricing-section">
            {/* Fondo dinámico con imágenes suaves */}
            <div className="pricing-bg-wrapper">
                {backgrounds.map((bg, idx) => (
                    <div
                        key={idx}
                        className={`pricing-bg-slide ${idx === currentBg ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${bg})` }}
                    />
                ))}
            </div>
            <div className="pricing-overlay"></div>

            {/* Contenido principal */}
            <div className="pricing-container">
                <div className="pricing-header">
                    <h2>Planes y <span>Soluciones</span></h2>
                    <p>Elige la solución que tu empresa necesita para automatizar su operación o acelerar sus ventas.</p>
                </div>

                <div className="pricing-grid">
                    {planes.map((plan) => (
                        <div
                            key={plan.id}
                            className={`price-card ${plan.destacado ? 'popular' : ''}`}
                        >
                            {plan.destacado && <span className="badge-featured">Más Solicitado</span>}
                            
                            <span className="price-badge-category">
                                {plan.badge}
                            </span>
                            
                            <h3 className="price-title">{plan.nombre}</h3>
                            <p className="price-desc">{plan.desc}</p>

                            <ul className="price-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            <a
                                href={plan.waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={plan.destacado ? "btn-primary-card" : "btn-outline"}
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