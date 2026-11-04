import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573167323879?text=Hola,%20vengo%20de%20la%20web%20de%20NovaForge%20y%20quiero%20más%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22bf5b] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat de WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current text-white" />
      
      {/* Tooltip flotante al pasar el mouse */}
      <span className="absolute right-full mr-3 bg-[#111827] text-gray-100 border border-gray-800 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        ¡Hablemos por WhatsApp!
      </span>
    </a>
  );
}