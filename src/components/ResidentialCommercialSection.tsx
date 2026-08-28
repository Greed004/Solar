import React from 'react';
import { Home, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ResidentialCommercialSectionProps {
  onSelectProjectType?: (type: 'Residencial' | 'Comercial') => void;
}

export const ResidentialCommercialSection: React.FC<ResidentialCommercialSectionProps> = ({
  onSelectProjectType,
}) => {
  const handleSelect = (type: 'Residencial' | 'Comercial') => {
    if (onSelectProjectType) {
      onSelectProjectType(type);
    }
    const orcamentoEl = document.getElementById('orcamento');
    if (orcamentoEl) {
      orcamentoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Soluções Sob Medida para Cada Perfil
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Seja para a sua residência ou para o seu negócio, projetamos o sistema fotovoltaico com a dimensão exata para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Residencial Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-400 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                <Home className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1 block">
                Solução Residencial
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
                Mais economia para sua casa e mais liberdade para o seu futuro.
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Tenha ar-condicionado, eletrodomésticos e conforto para toda a família sem a preocupação com faturas elevadas no final do mês.
              </p>

              <div className="space-y-3 pt-2 pb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Redução expressiva na conta de energia</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Geração própria limpa e renovável</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Valorização imediata do imóvel</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Autonomia energética e tranquilidade</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSelect('Residencial')}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-md group-hover:bg-amber-500 group-hover:text-white"
            >
              <span>Orçamento Residencial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Comercial Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-400 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1 block">
                Solução Comercial
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
                Transforme o custo da energia em eficiência para sua empresa.
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Reduza as despesas fixas operacionais do seu negócio e aumente a margem de lucro com previsibilidade orçamentária.
              </p>

              <div className="space-y-3 pt-2 pb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Redução substancial de custos operacionais</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Previsibilidade de fluxo de caixa</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Eficiência energética empresarial</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Excelente retorno sobre o investimento (ROI)</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSelect('Comercial')}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-md group-hover:bg-amber-500 group-hover:text-white"
            >
              <span>Orçamento Comercial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
