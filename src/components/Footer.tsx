import React from 'react';
import { Sun, Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Institutional (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
                <Sun className="w-6 h-6 fill-current text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-tight">
                  PROJETO <span className="text-amber-500">ENERGIA</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Energia Solar Fotovoltaica
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Especialistas em projetos fotovoltaicos, instalações elétricas e eficiência energética. Soluções seguras e completas para residências, comércios e empresas em São José do Rio Preto e região.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider">
                Redes Sociais
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={COMPANY_CONTACTS.socials.instagram}
                  aria-label="Instagram da Projeto Energia"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_CONTACTS.socials.facebook}
                  aria-label="Facebook da Projeto Energia"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_CONTACTS.socials.linkedin}
                  aria-label="LinkedIn da Projeto Energia"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_CONTACTS.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Projeto Energia"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Navegação
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#sobre" className="text-slate-400 hover:text-amber-400 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#diferenciais" className="text-slate-400 hover:text-amber-400 transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-amber-400 transition-colors">Soluções</a>
              </li>
              <li>
                <a href="#projetos" className="text-slate-400 hover:text-amber-400 transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#orcamento" className="text-slate-400 hover:text-amber-400 transition-colors">Orçamento</a>
              </li>
              <li>
                <a href="#contato" className="text-slate-400 hover:text-amber-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Canais de Atendimento
            </span>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Telefone Fixo:</span>
                  <a href="tel:1733052278" className="text-white hover:text-amber-400 font-semibold">
                    (17) 3305-2278
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block">WhatsApp Comercial:</span>
                  <div className="flex flex-col gap-0.5">
                    <a href="https://wa.me/5517997078718" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 font-semibold">
                      (17) 99707-8718
                    </a>
                    <a href="https://wa.me/5517992830720" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 font-semibold">
                      (17) 99283-0720
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block">E-mails:</span>
                  <a href="mailto:adailton@projetoenergia.com.br" className="text-white hover:text-amber-400 block">
                    adailton@projetoenergia.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Endereço & CNPJ (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Sede & Localização
            </span>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white">Projeto Energia</strong><br />
                  Av. Francisco das Chagas Oliveira, 232<br />
                  São José do Rio Preto / SP<br />
                  CEP: 15091-330
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                <span>CNPJ: </span>
                <span className="text-slate-300 font-mono">{COMPANY_CONTACTS.cnpj}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Projeto Energia — Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
