import React from 'react';
import { Cpu, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17] border-t border-gray-800/60 py-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-[#0B0F17] rounded-[7px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">NOVA<span className="text-cyan-400">FORGE</span></span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Especialistas en desarrollo de páginas web, arquitectura de software personalizada y soluciones SaaS.
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-wider">Servicios</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#paginas-web" className="hover:text-cyan-400 transition-colors">Diseño & Páginas Web</a></li>
              <li><a href="#software-medida" className="hover:text-cyan-400 transition-colors">Software a Medida</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-wider">Producto SaaS</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#saas-product" className="hover:text-cyan-400 transition-colors">Demo Interactiva</a></li>
              <li><a href="#saas-product" className="hover:text-cyan-400 transition-colors">Documentación API</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-wider">Contacto</h5>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> contacto@novaforge-saas.com</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-cyan-400" /> novaforge-saas.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/40 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>&copy; 2026 NovaForge Software & Web Solutions. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacidad</a>
            <a href="#" className="hover:text-gray-400">Términos del Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}