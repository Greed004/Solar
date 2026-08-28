import React from 'react';
import { Sun, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { REAL_CASES } from '../data/companyData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sun className="w-3.5 h-3.5 text-amber-600" />
            <span>Casos Reais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Projetos que Geram Resultados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conheça alguns dos projetos executados pela Projeto Energia, gerando energia limpa e proporcionando redução substancial nas despesas de nossos clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_CASES.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Specs List */}
                <div className="space-y-2.5 py-3 border-y border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Módulos:</span>
                    <strong className="text-slate-900 font-bold">{project.modules} módulos</strong>
                  </div>

                  {project.powerKwp && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Potência:</span>
                      <strong className="text-slate-900 font-bold">{project.powerKwp} kWp</strong>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Geração média:</span>
                    <strong className="text-slate-900 font-bold">~{project.avgGenerationKwh} kWh/mês</strong>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-50 text-amber-600 font-bold">
                    <span>Economia apresentada:</span>
                    <span>~R$ {project.monthlySavings.toLocaleString('pt-BR')}/mês</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2">
                <a
                  href="#orcamento"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 hover:bg-amber-500 hover:text-white text-slate-700 text-xs font-bold rounded-xl transition-all"
                >
                  <span>Quero um projeto similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            * <strong>Nota de Transparência</strong>: Os valores acima representam exemplos de projetos reais executados e não devem ser utilizados como garantia de economia para novos clientes. O desempenho e a economia de cada projeto variam conforme o consumo, a tarifa da concessionária e a insolação do local.
          </p>
        </div>
      </div>
    </section>
  );
};
