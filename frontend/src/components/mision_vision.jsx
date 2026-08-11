import '../styles/MissionVision.css';

// Importación de las imágenes
import imgMision from '../assets/mision.png';
import imgVision from '../assets/vision.png';

const MissionVision = () => {
    return (
        <section id="mision-vision" className="mv-section">
            <div className="mv-container">
                <div className="mv-grid">
                    {/* Tarjeta de Misión */}
                    <div className="mv-card">
                        <div className="mv-image-container">
                            <img 
                                src={imgMision} 
                                alt="Equipo de NovaForge trabajando en Misión" 
                                className="mv-photo" 
                            />
                        </div>
                        <h3>Nuestra Misión</h3>
                        <p>
                            Impulsar la rentabilidad y el crecimiento de los negocios optimizando 
                            su operación con nuestro software de gestión de inventario y ganancias, 
                            mientras aceleramos sus ventas mediante páginas web de alta conversión y 
                            campañas digitales estratégicas.
                        </p>
                    </div>

                    {/* Tarjeta de Visión */}
                    <div className="mv-card">
                        <div className="mv-image-container">
                            <img 
                                src={imgVision} 
                                alt="Equipo de NovaForge trabajando en Visión" 
                                className="mv-photo" 
                            />
                        </div>
                        <h3>Nuestra Visión</h3>
                        <p>
                            Consolidarnos como la plataforma y aliado tecnológico de referencia para 
                            pequeñas y medianas empresas que buscan automatizar sus procesos operativos 
                            y escalar su facturación digital bajo la confiabilidad y calidad de NovaForge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;