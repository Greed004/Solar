import React from 'react';
import { DollarSign, Award, ShieldCheck, Leaf, TrendingUp, Zap, LucideIcon } from 'lucide-react';
import { DIFFERENTIALS } from '../data/companyData';

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Award,
  ShieldCheck,
  Leaf,
  TrendingUp,
  Zap,
};

export const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>Nossos Diferenciais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Por que escolher a Projeto Energia?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Unimos conhecimento técnico, equipamentos de primeira linha e atendimento próximo para garantir a melhor experiência e o máximo retorno em cada instalação.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIALS.map((diff) => {
            const IconComponent = iconMap[diff.iconName] || Zap;
            return (
              <div
                key={diff.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
