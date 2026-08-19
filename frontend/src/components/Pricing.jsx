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
            nombre: "Plan Emprendedor",
            badge: "SaaS Licencia Básica",
            precioMensual: "$35.000 COP",
            precioAnual: "$350.000 COP",
            desc: "Ideal para pequeños negocios o servicios que van empezando y buscan ordenar sus ventas.",
            destacado: false,
            features: [
                "Límite de Productos: Hasta 50 productos",
                "Facturación Electrónica: ❌ No incluye (Solo Ticket / Recibo POS interno)",
                "Cálculo de ganancias netas en tiempo real",
                "Control de inventario básico",
                "Soporte estándar por WhatsApp"
            ],
            waLink: "https://wa.me/573132742361?text=Hola,%20me%20interesa%20el%20Plan%20Emprendedor%20($35.000/mes)%20y%20quisiera%20una%20demostración."
        },
        {
            id: 2,
            nombre: "Plan PyME",
            badge: "SaaS Licencia Comercial",
            precioMensual: "$79.000 COP",
            precioAnual: "$790.000 COP",
            desc: "Para negocios en crecimiento que requieren emitir facturas legales a la DIAN.",
            destacado: true, // Se activa el borde azul neon y el badge "Más Vendido"
            badgeFeatured: "Más Vendido",
            features: [
                "Límite de Productos: Hasta 500 productos",
                "Facturación Electrónica: ⚠️ Bolsa básica incluida (50 facturas/mes)",
                "Alertas inteligentes de bajo stock",
                "Cálculo de margen de ganancia neta",
                "Soporte prioritario por WhatsApp"
            ],
            waLink: "https://wa.me/573132742361?text=Hola,%20me%20interesa%20el%20Plan%20PyME%20($79.000/mes)%20y%20quisiera%20adquirir%20la%20licencia."
        },
        {
            id: 3,
            nombre: "Plan Pro / Ilimitado",
            badge: "SaaS Licencia Empresarial",
            precioMensual: "$149.000 COP",
            precioAnual: "$1.490.000 COP",
            desc: "Para negocios consolidados con alto flujo de ventas e inventario amplio.",
            destacado: false,
            features: [
                "Límite de Productos: Productos ILIMITADOS",
                "Facturación Electrónica: ✅ Facturas Electrónicas ILIMITADAS",
                "Control de stock multi-bodega",
                "Reportes avanzados de ventas y ganancias",
                "Soporte VIP prioritario 24/7"
            ],
            waLink: "https://wa.me/573132742361?text=Hola,%20me%20interesa%20el%20Plan%20Pro%20Ilimitado%20($149.000/mes)%20y%20quisiera%20activar%20mi%20cuenta."
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
                    <h2>Paquetes de <span>Licencias SaaS</span></h2>
                    <p>Elige la capacidad de inventario y facturación que tu empresa necesita para operar y crecer.</p>
                </div>

                <div className="pricing-grid">
                    {planes.map((plan) => (
                        <div
                            key={plan.id}
                            className={`price-card ${plan.destacado ? 'popular' : ''}`}
                        >
                            {plan.destacado && <span className="badge-featured">{plan.badgeFeatured}</span>}
                            
                            <span className="price-badge-category">
                                {plan.badge}
                            </span>
                            
                            <h3 className="price-title">{plan.nombre}</h3>
                            <p className="price-desc">{plan.desc}</p>

                            {/* Bloque de Precios en el diseño */}
                            <div className="price-tag-container">
                                <div className="price-main">
                                    <span className="price-amount">{plan.precioMensual}</span>
                                    <span className="price-period"> / mes</span>
                                </div>
                                <span className="price-annual-discount">
                                    o {plan.precioAnual} / año (2 meses gratis)
                                </span>
                            </div>

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
                                Solicitar Licencia por WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;