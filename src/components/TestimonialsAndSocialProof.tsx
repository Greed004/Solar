import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2, User } from 'lucide-react';
import { TESTIMONIALS_RESERVED } from '../data/companyData';

export const TestimonialsAndSocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Satisfação & Credibilidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            A Confiança de Quem Já Gera a Própria Energia
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Acompanhe a experiência de clientes que transformaram o custo com energia elétrica em economia e autonomia com a Projeto Energia.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS_RESERVED.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {item.clientName}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.role} • {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners & Standards Reserved Block */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-6">
            Equipamentos de Primeira Linha & Padrões Homologados
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center text-xs font-semibold text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Inversores Homologados</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Módulos Tier 1</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>Conformidade ABNT / NBR</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Homologação CPFL / Concessionárias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
