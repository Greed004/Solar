import React from 'react';
import { ArrowRight, Sun, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Subtle lighting circles */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-700/20 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 backdrop-blur-xs shadow-inner">
              <Sun className="w-8 h-8 fill-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Pronto para começar a economizar?
            </h2>

            <p className="text-amber-50 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Descubra como a energia solar fotovoltaica pode fazer sentido para sua casa ou empresa. Solicite uma análise técnica completa com nossa equipe.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#orcamento"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Solicite seu Orçamento</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </a>

              <a
                href={COMPANY_CONTACTS.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
