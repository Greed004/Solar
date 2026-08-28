import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Passo a Passo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Como Funciona?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Do primeiro contato à geração de energia limpa, acompanhamos você em todas as etapas do processo com transparência e agilidade.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-amber-400 transition-all duration-200 flex flex-col justify-between group hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-amber-500/80 group-hover:text-amber-500 transition-colors">
                    {stepItem.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:border-amber-300 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 mb-2">
                  {stepItem.description}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {stepItem.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 text-center">
          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all active:scale-95"
          >
            <span>Iniciar Análise do Meu Projeto</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
