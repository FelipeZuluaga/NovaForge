import React, { useState } from 'react';
import { Globe, Code, Layers, Send } from 'lucide-react';

export default function ProjectEstimator() {
  const [serviceType, setServiceType] = useState('web');
  const [optSeo, setOptSeo] = useState(false);
  const [optAuth, setOptAuth] = useState(false);
  const [optPayment, setOptPayment] = useState(false);
  const [optSupport, setOptSupport] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Cálculo dinámico
  let min = serviceType === 'web' ? 500 : serviceType === 'software' ? 1200 : 800;
  let max = serviceType === 'web' ? 900 : serviceType === 'software' ? 2500 : 1500;
  let time = serviceType === 'web' ? '1 - 2 semanas' : serviceType === 'software' ? '3 - 5 semanas' : '2 - 3 semanas';

  if (optSeo) { min += 200; max += 300; }
  if (optAuth) { min += 250; max += 400; }
  if (optPayment) { min += 200; max += 350; }
  if (optSupport) { min += 150; max += 250; }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cotizador" className="py-24 bg-[#0A0D14] relative border-t border-gray-800/50 bg-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="text-cyan-400 text-sm font-mono font-semibold uppercase tracking-wider mb-2">Cotizador Interactivo & Contacto</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            ¿Listo para iniciar tu <span className="text-gradient">Próximo Proyecto Digital?</span>
          </h2>
          <p className="text-gray-400">Selecciona el tipo de solución que necesitas y obtén un estimado inicial en tiempo real.</p>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Paso 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-4">1. Tipo de Desarrollo Requerido</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <label className={`relative flex flex-col p-4 bg-[#0B0F17] rounded-xl border cursor-pointer transition-all ${serviceType === 'web' ? 'border-cyan-400 bg-cyan-500/10' : 'border-gray-800'}`}>
                  <input type="radio" name="service_type" value="web" className="sr-only" checked={serviceType === 'web'} onChange={() => setServiceType('web')} />
                  <Globe className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-sm font-bold text-white">Página Web / Landing</span>
                  <span className="text-xs text-gray-400 mt-1">Sitios corporativos y landing pages.</span>
                </label>

                <label className={`relative flex flex-col p-4 bg-[#0B0F17] rounded-xl border cursor-pointer transition-all ${serviceType === 'software' ? 'border-violet-500 bg-violet-500/10' : 'border-gray-800'}`}>
                  <input type="radio" name="service_type" value="software" className="sr-only" checked={serviceType === 'software'} onChange={() => setServiceType('software')} />
                  <Code className="w-6 h-6 text-violet-400 mb-2" />
                  <span className="text-sm font-bold text-white">Software a Medida</span>
                  <span className="text-xs text-gray-400 mt-1">Sistemas web custom, APIs, Dashboards.</span>
                </label>

                <label className={`relative flex flex-col p-4 bg-[#0B0F17] rounded-xl border cursor-pointer transition-all ${serviceType === 'saas' ? 'border-pink-500 bg-pink-500/10' : 'border-gray-800'}`}>
                  <input type="radio" name="service_type" value="saas" className="sr-only" checked={serviceType === 'saas'} onChange={() => setServiceType('saas')} />
                  <Layers className="w-6 h-6 text-pink-400 mb-2" />
                  <span className="text-sm font-bold text-white">SaaS / Implementación</span>
                  <span className="text-xs text-gray-400 mt-1">Integración de producto SaaS de NovaForge.</span>
                </label>

              </div>
            </div>

            {/* Paso 2: Extras */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-4">2. Opciones Adicionales</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <label className="flex items-center gap-3 p-3 bg-[#0B0F17] rounded-lg border border-gray-800 cursor-pointer">
                  <input type="checkbox" checked={optSeo} onChange={(e) => setOptSeo(e.target.checked)} className="rounded bg-[#111827] border-gray-800 text-cyan-400" />
                  <span className="text-gray-300">SEO Avanzado & Optimización</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-[#0B0F17] rounded-lg border border-gray-800 cursor-pointer">
                  <input type="checkbox" checked={optAuth} onChange={(e) => setOptAuth(e.target.checked)} className="rounded bg-[#111827] border-gray-800 text-cyan-400" />
                  <span className="text-gray-300">Sistema de Usuarios & Autenticación</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-[#0B0F17] rounded-lg border border-gray-800 cursor-pointer">
                  <input type="checkbox" checked={optPayment} onChange={(e) => setOptPayment(e.target.checked)} className="rounded bg-[#111827] border-gray-800 text-cyan-400" />
                  <span className="text-gray-300">Pasarela de Pagos (Stripe / MercadoPago)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-[#0B0F17] rounded-lg border border-gray-800 cursor-pointer">
                  <input type="checkbox" checked={optSupport} onChange={(e) => setOptSupport(e.target.checked)} className="rounded bg-[#111827] border-gray-800 text-cyan-400" />
                  <span className="text-gray-300">Mantenimiento & Soporte Mensual</span>
                </label>
              </div>
            </div>

            {/* Estimado de Inversión */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-violet-950/40 border border-gray-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase">Estimado Aproximado de Inversión</span>
                <div className="text-2xl font-bold font-mono text-white">${min.toLocaleString()} - ${max.toLocaleString()} USD</div>
              </div>
              <span className="text-xs text-gray-400 hidden sm:inline">Tiempo estimado: <span className="text-cyan-400 font-semibold">{time}</span></span>
            </div>

            {/* Datos de contacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2">Nombre o Empresa</label>
                <input type="text" required placeholder="Tu Nombre o Negocio" className="w-full bg-[#0B0F17] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2">Correo Electrónico</label>
                <input type="email" required placeholder="tu@email.com" className="w-full bg-[#0B0F17] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2">Detalles del Proyecto</label>
              <textarea rows="3" placeholder="Cuéntanos brevemente qué necesitas construir o integrar..." className="w-full bg-[#0B0F17] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-400 to-violet-600 hover:opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /> Enviar Solicitud de Cotización
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm">
              ¡Gracias por tu mensaje! Un desarrollador especializado de NovaForge revisará tu proyecto y se pondrá en contacto en menos de 24 horas.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}