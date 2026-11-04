import React, { useState } from 'react';
import { Cpu, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F17]/80 border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0B0F17] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
              NOVA<span className="text-cyan-400">FORGE</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Software & Web Labs</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#paginas-web" className="hover:text-cyan-400 transition-colors">Páginas Web</a>
          <a href="#software-medida" className="hover:text-cyan-400 transition-colors">Software a Medida</a>
          <a href="#saas-product" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span>Nuestro SaaS</span>
            <span className="px-2 py-0.5 text-[10px] bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30 font-mono">NEW</span>
          </a>
          <a href="#testimonios" className="hover:text-cyan-400 transition-colors">Casos de Éxito</a>
          <a href="#cotizador" className="hover:text-cyan-400 transition-colors">Cotizador</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#cotizador" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105">
            <span className="relative px-5 py-2.5 bg-[#0B0F17] rounded-[10px] flex items-center gap-2">
              Iniciar Proyecto
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </span>
          </a>
        </div>

        {/* Mobile button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111827]/95 border-b border-gray-800 px-4 pt-2 pb-6 space-y-3">
          <a href="#paginas-web" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400">Páginas Web</a>
          <a href="#software-medida" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400">Software a Medida</a>
          <a href="#saas-product" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400">Producto SaaS</a>
          <a href="#testimonios" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400">Casos de Éxito</a>
          <a href="#cotizador" onClick={() => setIsOpen(false)} className="block py-2 text-cyan-400 font-semibold">Cotizar Proyecto</a>
        </div>
      )}
    </header>
  );
}