import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-[#0B0F17] relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-cyan-400 text-sm font-mono font-semibold uppercase tracking-wider mb-2">Testimonios & Impacto</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Lo que dicen nuestros <span className="text-gradient-cyan">Clientes & Partners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "El rediseño de nuestra plataforma web por parte de NovaForge duplicó la velocidad de carga y aumentó la tasa de conversión en un 40% en el primer mes."
              </p>
            </div>
            <div className="pt-4 border-t border-gray-800/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">CAR</div>
              <div>
                <div className="text-sm font-bold text-white">Carlos Alvarado</div>
                <div className="text-xs text-gray-400">CTO — FinTech Corp</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Desarrollaron nuestro sistema de software a medida en un tiempo récord. La arquitectura limpia y la integración de APIs superaron nuestras expectativas."
              </p>
            </div>
            <div className="pt-4 border-t border-gray-800/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">VAL</div>
              <div>
                <div className="text-sm font-bold text-white">Valeria Mendoza</div>
                <div className="text-xs text-gray-400">Founder — HealthTech SaaS</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Integramos el motor SaaS de NovaForge y redujimos en un 60% nuestros tiempos de procesamiento operativo. El soporte es impecable."
              </p>
            </div>
            <div className="pt-4 border-t border-gray-800/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">DR</div>
              <div>
                <div className="text-sm font-bold text-white">Diego Ramírez</div>
                <div className="text-xs text-gray-400">Head of Product — Logistics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}