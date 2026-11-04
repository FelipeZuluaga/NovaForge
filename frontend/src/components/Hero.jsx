import React from 'react';
import { Code2, Layers, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 bg-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-gray-800 text-xs font-mono text-cyan-400 mb-8 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Desarrollo Web Next-Gen & Arquitectura de Software</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Transformamos ideas complejas en <span className="text-gradient">experiencias web & software</span> de alto nivel.
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Especialistas en la creación de sitios web ultrarápidos, sistemas web customizados y soluciones SaaS preparadas para escalar sin límites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#cotizador" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base">
              <Code2 className="w-5 h-5" />
              Cotizar mi proyecto
            </a>
            <a href="#saas-product" className="w-full sm:w-auto px-8 py-4 bg-[#111827] hover:bg-gray-800 border border-gray-800 text-gray-200 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-base">
              <Layers className="w-5 h-5 text-violet-400" />
              Explorar nuestro SaaS
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-800/60 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-[#111827]/40 border border-gray-800/40">
              <div className="text-2xl font-bold font-mono text-cyan-400">99.9%</div>
              <div className="text-xs text-gray-400 mt-1">Uptime & Rendimiento</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111827]/40 border border-gray-800/40">
              <div className="text-2xl font-bold font-mono text-violet-400">+50</div>
              <div className="text-xs text-gray-400 mt-1">Sitios y Apps Lanzados</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111827]/40 border border-gray-800/40">
              <div className="text-2xl font-bold font-mono text-cyan-400">&lt;100ms</div>
              <div className="text-xs text-gray-400 mt-1">Carga Promedio Web</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111827]/40 border border-gray-800/40">
              <div className="text-2xl font-bold font-mono text-pink-400">100%</div>
              <div className="text-xs text-gray-400 mt-1">Código Personalizado</div>
            </div>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-[#0B0F17] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
            <div className="bg-[#161d2a] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="text-xs font-mono text-gray-400 ml-2 hidden sm:inline">NovaForge Studio — Next.js / React Engine</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" /> Build Success
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0E131F]">
              <div className="md:col-span-5 font-mono text-xs space-y-2 text-gray-300 bg-[#0B0F17]/90 p-4 rounded-xl border border-gray-800 overflow-x-auto">
                <p className="text-gray-500">// NovaForge Architecture</p>
                <p><span className="text-violet-400">import</span> &#123; NovaCore &#125; <span className="text-violet-400">from</span> <span className="text-emerald-300">'@novaforge/web-stack'</span>;</p>
                <p className="pt-2"><span className="text-violet-400">const</span> <span className="text-cyan-300">config</span> = &#123;</p>
                <p className="pl-4">framework: <span className="text-emerald-300">'React / Vite'</span>,</p>
                <p className="pl-4">performance: <span className="text-emerald-300">'Lighthouse 100/100'</span>,</p>
                <p>&#125;;</p>
              </div>

              <div className="md:col-span-7 bg-[#111827]/80 p-5 rounded-xl border border-gray-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Live Metrics Render</span>
                    <span className="text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">Active Node</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">Performance Index</span>
                        <span className="text-emerald-400 font-mono">99%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full w-[99%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <span>Stack: React + Tailwind v4</span>
                  <span className="text-cyan-400 font-mono">200ms TTFB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}