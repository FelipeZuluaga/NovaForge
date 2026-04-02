import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '', // Cambiado de correo a telefono
        empresa: '',
        mensaje: '',
        interes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("¡Mensaje enviado con éxito! Nos contactaremos pronto.");
                // Limpiamos el formulario con los campos correctos
                setFormData({ nombre: '', telefono: '', empresa: '', mensaje: '', interes: '' });
            }
        } catch (error) {
            console.error("Error al enviar:", error);
            alert("Hubo un error al conectar con el servidor.");
        }
    };

    return (
        <section id="contacto" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>¿Listo para <span>escalar</span>?</h2>
                    <p>Déjanos tus datos y un consultor técnico de NovaForge se pondrá en contacto contigo en menos de 24 horas.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <select
                            name="interes"
                            onChange={handleChange}
                            className="form-select"
                            value={formData.interes}
                            required
                        >
                            <option value="" disabled hidden>¿En qué estás interesado?</option>
                            <option value="inventarios" style={{ background: '#0a0f18' }}>Software inventarios rutas</option>
                            <option value="web-movil" style={{ background: '#0a0f18' }}>Desarrollo web y movil</option>
                            <option value="medida" style={{ background: '#0a0f18' }}>Software a la medida</option>
                            <option value="consultoria" style={{ background: '#0a0f18' }}>Consultoria Tecnologica</option>
                            <option value="cloud" style={{ background: '#0a0f18' }}>Servidores & cloud</option>
                            <option value="marketing" style={{ background: '#0a0f18' }}>Marketing Digital</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            name="nombre" 
                            placeholder="Nombre completo" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    {/* Nuevo campo de Teléfono */}
                    <div className="form-group">
                        <input 
                            type="tel" 
                            name="telefono" 
                            placeholder="Teléfono de comunicación" 
                            value={formData.telefono} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            name="mensaje" 
                            placeholder="¿En qué podemos ayudarte?" 
                            value={formData.mensaje} 
                            onChange={handleChange} 
                            required
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-submit">Enviar Solicitud</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;