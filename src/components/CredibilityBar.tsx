import React from 'react';
import { CREDIBILITY_METRICS } from '../data/companyData';

export const CredibilityBar: React.FC = () => {
  return (
    <section className="py-8 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {CREDIBILITY_METRICS.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/70 border border-slate-100 transition-all hover:bg-slate-50 hover:border-amber-200"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-1">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
                {metric.label}
              </span>
              {metric.description && (
                <span className="text-[11px] text-slate-500 hidden sm:block">
                  {metric.description}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <p className="text-[11px] text-slate-400 text-center mt-4">
          * O prazo de retorno do investimento varia de acordo com as características de cada projeto, perfil de consumo e insolação.
        </p>
      </div>
    </section>
  );
};
