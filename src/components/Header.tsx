import React, { useState, useEffect } from 'react';
import { Sun, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

interface HeaderProps {
  onOpenQuoteWithPreset?: (type: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['home', 'sobre', 'diferenciais', 'servicos', 'projetos', 'orcamento', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Diferenciais', href: '#diferenciais', id: 'diferenciais' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'Projetos', href: '#projetos', id: 'projetos' },
    { label: 'Orçamento', href: '#orcamento', id: 'orcamento' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-md border-b border-slate-100 py-3'
          : 'border-b border-slate-100/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none"
          title="Projeto Energia - Energia Solar Fotovoltaica"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Sun className="w-6 h-6 fill-current text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              PROJETO <span className="text-amber-500">ENERGIA</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              Energia Solar Fotovoltaica
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-150 py-1 ${
                activeSection === link.id
                  ? 'text-amber-600 font-bold border-b-2 border-amber-500'
                  : 'text-slate-600 hover:text-amber-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_CONTACTS.phones[0].clean}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>(17) 3305-2278</span>
          </a>

          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all active:scale-95"
          >
            <span>Solicite seu Orçamento</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-700 hover:text-slate-900 lg:hidden rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-50 text-amber-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#orcamento"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
            >
              Solicite seu Orçamento
            </a>

            <a
              href={COMPANY_CONTACTS.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
