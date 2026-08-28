import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento Rápido">
      {/* Desktop & Tablet Floating Button */}
      <a
        href={COMPANY_CONTACTS.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp Comercial da Projeto Energia"
        className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:scale-105 active:scale-95 group"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 fill-current text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
        </div>
        <span className="text-xs font-bold hidden md:inline">
          Falar no WhatsApp
        </span>
      </a>

      {/* Mobile Sticky Action Bar */}
      <div className="block sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2.5 shadow-lg">
        <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
          <a
            href="#orcamento"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 active:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs text-center"
          >
            <span>Orçamento</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={COMPANY_CONTACTS.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-500 active:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs text-center"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
