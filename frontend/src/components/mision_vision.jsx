import '../styles/MissionVision.css';

const MissionVision = () => {
    return (
        <section id="mision-vision" className="mv-section">
            <div className="mv-container">
                <div className="mv-grid">
                    {/* Tarjeta de Misión */}
                    <div className="mv-card">
                        <div className="mv-icon">🎯</div>
                        <h3>Misión</h3>
                        <p>
                            Desarrollar soluciones de software profesionales y a la medida, 
                            aplicando buenas prácticas, calidad técnica y enfoque en eficiencia, 
                            para ayudar a las empresas a optimizar y hacer crecer sus procesos tecnológicos.
                        </p>
                    </div>

                    {/* Tarjeta de Visión */}
                    <div className="mv-card">
                        <div className="mv-icon">🚀</div>
                        <h3>Visión</h3>
                        <p>
                            Ser una empresa de software reconocida por su profesionalismo, 
                            confiabilidad y excelencia técnica, convirtiéndose en un aliado 
                            tecnológico estratégico para empresas que buscan soluciones escalables 
                            y bien construidas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;