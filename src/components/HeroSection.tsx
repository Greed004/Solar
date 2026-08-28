import React from 'react';
import { ArrowRight, ShieldCheck, Sun, Zap, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-white">
      {/* Subtle background ambient glow */}
      <div className="absolute top-10 right-0 -z-10 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-sky-50/80 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
              <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              <span>Energia Solar Inteligente</span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Transforme a luz do sol em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                economia real
              </span>{' '}
              e sustentabilidade para sua empresa ou residência.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              A <strong>Projeto Energia</strong> desenvolve soluções fotovoltaicas completas e personalizadas para reduzir custos com energia elétrica e gerar energia limpa com máxima segurança e eficiência.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Solicite seu Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-sm sm:text-base rounded-xl transition-all"
              >
                <span>Conheça Nossas Soluções</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Até 90% de economia*</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Engenharia & Homologação</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>Valorização Patrimonial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100 p-2 sm:p-3 border border-slate-200 shadow-xl shadow-slate-200/50">
              {/* Main Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 sm:aspect-16/11 flex items-center justify-center group">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Instalação de painéis solares fotovoltaicos Projeto Energia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1">
                    <Zap className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Engenharia Fotovoltaica de Ponta</span>
                  </div>
                  <p className="text-sm font-bold text-white leading-tight">
                    São José do Rio Preto e Região Noroeste Paulista
                  </p>
                </div>
              </div>

              {/* Floating Highlight Card 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-fadeIn">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-5 h-5 fill-amber-500/30" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase">Potencial Máximo</span>
                  <strong className="text-sm font-extrabold text-slate-900">Até 90% de Redução*</strong>
                </div>
              </div>

              {/* Floating Highlight Card 2 */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-fadeIn">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase">Projetos Seguros</span>
                  <strong className="text-sm font-extrabold text-slate-900">100% Homologados</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
