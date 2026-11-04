import React from 'react';
import { Layout, Zap, Search, Check, Database, Sliders, Workflow } from 'lucide-react';

export default function Services() {
  return (
    <>
      {/* Sección 01: Páginas Web */}
      <section id="paginas-web" className="py-24 bg-[#0B0F17] relative border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="text-cyan-400 text-sm font-mono font-semibold uppercase tracking-wider mb-2">Sección 01</div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Páginas Web & Landing Pages <br /><span className="text-gradient-cyan">de Alto Rendimiento</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-sm sm:text-base">
              Diseñamos y desarrollamos sitios web memorables enfocados en la velocidad de carga, la conversión y el posicionamiento SEO superior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rediseño & Refactorización</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Modernizamos sitios webs obsoletos convirtiéndolos en plataformas ultrarápidas, adaptadas a móviles y preparadas para convertir visitantes en clientes.
              </p>
              <ul className="space-y-2 text-xs font-mono text-gray-300 border-t border-gray-800/60 pt-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> UI/UX Futurista</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Carga en sub-segundos</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-violet-500/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tecnología Jamstack & React</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Construimos con React y Tailwind CSS. Cero plantillas lentas de WordPress. Rendimiento puro y seguridad impenetrable.
              </p>
              <ul className="space-y-2 text-xs font-mono text-gray-300 border-t border-gray-800/60 pt-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-violet-400" /> Clean Code Protocol</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-violet-400" /> Componentes Modulares</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Técnico On-Page</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Estructuramos tu sitio para dominar Google. Metatags dinámicos, schemas y optimización extrema de Core Web Vitals.
              </p>
              <ul className="space-y-2 text-xs font-mono text-gray-300 border-t border-gray-800/60 pt-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-400" /> Indexación Instantánea</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-400" /> Open Graph & Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 02: Software a Medida */}
      <section id="software-medida" className="py-24 bg-[#0A0D14] relative border-t border-gray-800/50 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-violet-400 text-sm font-mono font-semibold uppercase tracking-wider mb-2">Sección 02</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Soluciones de Software <span className="text-gradient">a la Medida de tu Negocio</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Desarrollamos la arquitectura digital exacta que tu empresa necesita para automatizar procesos y escalar operaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[#111827] border border-gray-800 hover:bg-[#111827]/80 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg"><Database className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Desarrollo de Software Custom & APIs</h4>
                    <p className="text-sm text-gray-400">Creación de REST & GraphQL APIs robustas, microservicios y bases de datos optimizadas.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#111827] border border-gray-800 hover:bg-[#111827]/80 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 text-violet-400 rounded-lg"><Sliders className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Plataformas SaaS & Paneles de Control</h4>
                    <p className="text-sm text-gray-400">Construcción de dashboards administrativos y productos SaaS desde cero con pasarelas de pago.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#111827] border border-gray-800 hover:bg-[#111827]/80 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg"><Workflow className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Integraciones de Sistemas & Automatizaciones</h4>
                    <p className="text-sm text-gray-400">Conectamos tu software con ERPs, CRMs (Hubspot, Salesforce) y APIs de inteligencia artificial.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-400">api-gateway.ts — NovaForge Stack</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-3 overflow-x-auto">
                <p className="text-gray-500">// Arquitectura Escalable</p>
                <p><span className="text-violet-400">async function</span> <span className="text-yellow-300">processOrder</span>() &#123;</p>
                <p className="pl-4 text-gray-400">// Validación de Seguridad y Despliegue</p>
                <p className="pl-4"><span className="text-emerald-400">return</span> &#123; status: <span className="text-emerald-300">200</span>, success: <span className="text-emerald-300">true</span> &#125;;</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}