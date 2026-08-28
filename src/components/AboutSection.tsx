import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sun, Award, Wrench } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with badges */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80"
                alt="Engenharia e instalação de energia solar Projeto Energia"
                className="w-full h-full object-cover aspect-4/3"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  Compromisso com a Excelência
                </p>
                <p className="text-base font-bold text-white">
                  Engenharia e soluções completas em energia limpa
                </p>
              </div>
            </div>

            {/* Experience Pill */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-amber-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-sm font-extrabold text-slate-900 block">
                  Soluções Completas
                </strong>
                <span className="text-xs text-slate-500">
                  Do dimensionamento à manutenção
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Sobre a Empresa</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Compromisso, tecnologia e sustentabilidade para gerar sua própria energia.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              A <strong>Projeto Energia</strong> é uma empresa especializada em engenharia fotovoltaica, instalações elétricas e eficiência energética. Nosso propósito é tornar a geração de energia solar uma solução simples, segura, altamente rentável e acessível para residências, condomínios e empresas.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Não atuamos simplesmente com a venda de equipamentos. Desenvolvemos e executamos <strong>soluções completas</strong> — desde o estudo de viabilidade e dimensionamento técnico, até a homologação junto à concessionária, instalação e manutenção preventiva.
            </p>

            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Equipe técnica qualificada</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Equipamentos homologados</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Projetos 100% personalizados</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Atendimento consultivo e ágil</span>
              </div>
            </div>

            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95"
            >
              <span>Conheça Nossas Soluções</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
