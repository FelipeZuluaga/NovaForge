import '../styles/MissionVision.css';

// Importación de las nuevas imágenes
import imgMision from '../assets/nuestra_mision.png';
import imgVision from '../assets/nuestra_vision.png';

const MissionVision = () => {
    return (
        <section id="mision-vision" className="mv-section">
            <div className="mv-container">
                <div className="mv-grid">
                    {/* Tarjeta de Misión */}
                    <div className="mv-card">
                        <div className="mv-icon-container">
                            <img src={imgMision} alt="Misión NovaForge" className="mv-custom-icon" />
                        </div>
                        <h3>Nuestra Misión</h3>
                        <p>
                            Impulsar la transformación y competitividad de los negocios mediante un 
                            ecosistema integral que abarca desde la creación de su identidad visual y 
                            el desarrollo de software a medida, hasta el suministro, configuración y 
                            soporte continuo de su infraestructura tecnológica.
                        </p>
                    </div>

                    {/* Tarjeta de Visión */}
                    <div className="mv-card">
                        <div className="mv-icon-container">
                            <img src={imgVision} alt="Visión NovaForge" className="mv-custom-icon" />
                        </div>
                        <h3>Nuestra Visión</h3>
                        <p>
                            Consolidarnos para los próximos años como el aliado tecnológico estratégico e 
                            integral de referencia para empresas y comercios, reconocidos por nuestra capacidad 
                            de centralizar y resolver todas sus necesidades digitales y operativas bajo el 
                            sello de calidad y confiabilidad de NovaForge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;