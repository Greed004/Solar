import React from 'react';
import { SunMedium, Wrench, Cpu, BarChart3, Sparkles, Check, ArrowRight, LucideIcon } from 'lucide-react';
import { SERVICES } from '../data/companyData';

const iconMap: Record<string, LucideIcon> = {
  SunMedium,
  Wrench,
  Cpu,
  BarChart3,
  Sparkles,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <SunMedium className="w-3.5 h-3.5 text-amber-500" />
            <span>Serviços & Engenharia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Nossas Soluções
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Desenvolvemos projetos completos em engenharia solar e elétrica para atender residências, condomínios, estabelecimentos comerciais e indústrias.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || SunMedium;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`p-7 rounded-3xl bg-white border transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 ${
                  isFeatured
                    ? 'border-amber-300 shadow-md ring-1 ring-amber-300/40 md:col-span-2 lg:col-span-1'
                    : 'border-slate-200/80 shadow-xs hover:shadow-lg hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {isFeatured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                        Destaque
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-amber-600 block mb-3">
                    {service.subtitle}
                  </span>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature items */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="#orcamento"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors group-hover:underline"
                  >
                    <span>Solicitar orçamento para este serviço</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
