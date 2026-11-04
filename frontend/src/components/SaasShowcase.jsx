import React, { useState } from 'react';
import { Sparkles, Box, TrendingUp, Check, Users, ShieldCheck, Cpu, Globe, ExternalLink } from 'lucide-react';

export default function SaasShowcase() {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <section id="saas-product" className="py-24 bg-[#0B0F17] relative overflow-hidden border-t border-gray-800/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Producto SaaS Insignia
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Conoce <span className="text-gradient">NovaForge SaaS Engine</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Nuestra solución propia concebida para la gestión, analítica y optimización continua de aplicaciones y proyectos digitales en tiempo real.
          </p>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-violet-600/20 text-violet-400 rounded-xl border border-violet-500/30">
                <Box className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">NovaForge Cloud Platform v2.4</h3>
                <p className="text-xs text-gray-400 font-mono">https://novaforge-saas.com/dashboard</p>
              </div>
            </div>

            <div className="flex items-center bg-[#0B0F17] p-1 rounded-xl border border-gray-800">
              <button onClick={() => setActiveTab('analytics')} className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'analytics' ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                Analytics & Vistas
              </button>
              <button onClick={() => setActiveTab('users')} className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'users' ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                Gestión Usuarios
              </button>
              <button onClick={() => setActiveTab('api')} className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'api' ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                API Keys & Logs
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-[#0B0F17]/80 border border-gray-800">
                    <span className="text-xs text-gray-400 font-mono">Peticiones Totales (24h)</span>
                    <div className="text-2xl font-bold font-mono text-white mt-2">1,482,920</div>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 mt-2">
                      <TrendingUp className="w-3.5 h-3.5" /> +14.2% vs semana anterior
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0B0F17]/80 border border-gray-800">
                    <span className="text-xs text-gray-400 font-mono">Latencia Promedio</span>
                    <div className="text-2xl font-bold font-mono text-cyan-400 mt-2">24 ms</div>
                    <span className="text-xs text-cyan-300 flex items-center gap-1 mt-2">
                      <Check className="w-3.5 h-3.5" /> Global Edge CDN Active
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0B0F17]/80 border border-gray-800">
                    <span className="text-xs text-gray-400 font-mono">Suscripciones SaaS Activas</span>
                    <div className="text-2xl font-bold font-mono text-violet-400 mt-2">3,850</div>
                    <span className="text-xs text-violet-300 flex items-center gap-1 mt-2">
                      <Users className="w-3.5 h-3.5" /> +120 nuevos hoy
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0B0F17]/80 border border-gray-800 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">JD</div>
                    <div>
                      <div className="text-white font-medium">John Doe</div>
                      <div className="text-xs text-gray-400">john@enterprise.com</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Plan Enterprise</span>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="p-4 rounded-xl bg-[#0B0F17]/80 border border-gray-800 font-mono text-xs text-gray-300 space-y-2">
                <p className="text-gray-500">// Clave de API activa para entorno de producción</p>
                <div className="flex items-center justify-between bg-black/40 p-3 rounded border border-gray-800">
                  <span>nf_live_99a8b7c6d5e4f3a2b1c0_prod</span>
                  <span className="text-cyan-400 text-xs">Copiado</span>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-800">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Seguridad de Grado Bancario</h4>
                <p className="text-xs text-gray-400">Encriptación de extremo a extremo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Cpu className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Infraestructura Serverless</h4>
                <p className="text-xs text-gray-400">Despliegue automático con auto-escalado.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Prueba Gratuita Disponible</h4>
                <p className="text-xs text-gray-400">14 días de prueba gratis en el plan estándar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}