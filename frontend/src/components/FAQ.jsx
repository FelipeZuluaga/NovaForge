import { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      pregunta: "¿Cuánto tiempo toma desarrollar un software a la medida?",
      respuesta: "Depende de la complejidad. Un MVP (Producto Mínimo Viable) suele tomar entre 4 a 8 semanas, mientras que sistemas empresariales robustos pueden llevar de 3 a 6 meses."
    },
    {
      pregunta: "¿El software será de mi propiedad?",
      respuesta: "Sí. Al finalizar el proyecto y liquidar el pago, transferimos la propiedad intelectual y el código fuente. Tú eres el dueño total de la solución."
    },
    {
      pregunta: "¿Ofrecen soporte después de la entrega?",
      respuesta: "Totalmente. Todos nuestros planes incluyen un periodo de garantía y soporte técnico para asegurar que la transición sea exitosa y el sistema funcione sin errores."
    },
    {
      pregunta: "¿Pueden integrar el nuevo software con mis sistemas actuales?",
      respuesta: "Sí, somos expertos en integraciones vía API. Podemos conectar tu nueva solución con herramientas que ya utilices como CRMs, ERPs o pasarelas de pago."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <h2 className="section-title">Preguntas <span>Frecuentes</span></h2>
        <p className="section-subtitle">Resolvemos tus dudas antes de empezar a construir.</p>
      </div>

      <div className="faq-container">
        {questions.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.pregunta}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{item.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;