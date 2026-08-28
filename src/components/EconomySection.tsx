import React from 'react';
import { ArrowRight, DollarSign, TrendingDown, Sun, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export const EconomySection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 p-8 sm:p-12 lg:p-16 text-white relative shadow-2xl overflow-hidden border border-slate-800">
          {/* Ambient Lighting Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-5">
                <DollarSign className="w-4 h-4 text-amber-400" />
                <span>Eficiência & Redução de Custos</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                Sua conta de energia pode trabalhar a seu favor.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Em vez de pagar faturas caras e sofrer com reajustes tarifários contínuos e bandeiras tarifárias, você investe em um ativo próprio que gera energia limpa por mais de 25 anos.
              </p>

              {/* Highlight Callout */}
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-amber-500/30 w-full mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">Até 90%</span>
                  <span className="text-sm sm:text-base font-bold text-slate-200">de economia potencial</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  * A economia pode chegar a até 90%, dependendo das características do sistema, consumo, tarifa da concessionária e condições do projeto.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Proteção contra inflação energética</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Créditos de energia na rede</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Retorno médio em ~5 anos*</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Valorização do patrimônio</span>
                </div>
              </div>

              <a
                href="#orcamento"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Quero Solicitar um Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Right Card: Comparative Insight */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-xl flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-3 flex items-center justify-between">
                  <span>Comparativo de Cenário</span>
                  <Sun className="w-4 h-4 text-amber-400" />
                </h3>

                {/* Scenario 1 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-500/20">
                  <div className="flex items-center justify-between text-xs text-rose-300 font-bold mb-1">
                    <span>Sem Energia Solar</span>
                    <TrendingDown className="w-4 h-4 text-rose-400" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pagamento contínuo de tarifas, custos de bandeiras e exposição aos reajustes anuais das concessionárias.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-bold mb-1">
                    <span>Com Projeto Energia</span>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Produção própria de energia limpa, redução de até 90% na fatura e independência energética por décadas.
                  </p>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400">
                    Estudo de viabilidade técnica 100% individualizado.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
