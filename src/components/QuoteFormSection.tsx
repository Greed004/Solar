import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Sun, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

interface QuoteFormSectionProps {
  initialProjectType?: string;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({ initialProjectType = 'Residencial' }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    projectType: initialProjectType,
    averageBill: 'R$ 500 a R$ 1.000',
    city: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Phone input mask handler
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData((prev) => ({ ...prev, whatsapp: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, digite seu nome.');
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setStatus('error');
      setErrorMessage('Por favor, informe um número de WhatsApp válido com DDD.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      return;
    }

    setStatus('loading');

    // Simulate reliable dispatch / submission
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const text = `*Solicitação de Orçamento - Projeto Energia*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Tipo de Projeto:* ${formData.projectType}%0A` +
      `*Valor Médio da Conta:* ${formData.averageBill}%0A` +
      `*Cidade/Estado:* ${formData.city || 'Não informado'}%0A` +
      `*Mensagem:* ${formData.message || 'Sem mensagem adicional'}`;

    window.open(`https://wa.me/5517997078718?text=${text}`, '_blank');
  };

  return (
    <section id="orcamento" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Trust */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Atendimento Consultivo</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Solicite seu Orçamento
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Conte para nós um pouco sobre sua necessidade. Nossa equipe técnica analisará as informações e orientará você sobre a melhor solução para seu imóvel ou empresa.
              </p>

              {/* Direct Contacts List */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Telefone Fixo</span>
                    <a href="tel:1733052278" className="text-sm font-bold text-slate-900 hover:text-amber-600">
                      (17) 3305-2278
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">WhatsApp Comercial</span>
                    <div className="flex flex-col gap-0.5">
                      <a href="https://wa.me/5517997078718" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 hover:text-emerald-600">
                        (17) 99707-8718
                      </a>
                      <a href="https://wa.me/5517992830720" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 hover:text-emerald-600">
                        (17) 99283-0720
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">E-mail Comercial</span>
                    <a href="mailto:adailton@projetoenergia.com.br" className="text-sm font-bold text-slate-900 hover:text-amber-600">
                      adailton@projetoenergia.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Endereço</span>
                    <p className="text-sm font-bold text-slate-900">
                      Av. Francisco das Chagas Oliveira, 232<br />
                      <span className="text-xs font-normal text-slate-600">São José do Rio Preto/SP — CEP 15091-330</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                      Solicitação Enviada com Sucesso!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Recebemos sua solicitação! Nossa equipe técnica entrará em contato para entender melhor seu projeto e apresentar uma proposta personalizada.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar no WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          whatsapp: '',
                          email: '',
                          projectType: 'Residencial',
                          averageBill: 'R$ 500 a R$ 1.000',
                          city: '',
                          message: '',
                        });
                      }}
                      className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
                    >
                      Enviar outro orçamento
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>{errorMessage || 'Não foi possível enviar sua solicitação. Verifique os campos e tente novamente.'}</span>
                    </div>
                  )}

                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                      Nome Completo *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Grid: WhatsApp & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                        WhatsApp *
                      </label>
                      <input
                        id="whatsapp"
                        type="text"
                        required
                        placeholder="(00) 00000-0000"
                        value={formData.whatsapp}
                        onChange={handlePhoneChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="seuemail@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Grid: Tipo de projeto & Valor da conta */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                        Tipo de Projeto
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      >
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="averageBill" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                        Valor Médio da Conta
                      </label>
                      <select
                        id="averageBill"
                        value={formData.averageBill}
                        onChange={(e) => setFormData({ ...formData, averageBill: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      >
                        <option value="Até R$ 300">Até R$ 300</option>
                        <option value="R$ 300 a R$ 500">R$ 300 a R$ 500</option>
                        <option value="R$ 500 a R$ 1.000">R$ 500 a R$ 1.000</option>
                        <option value="R$ 1.000 a R$ 3.000">R$ 1.000 a R$ 3.000</option>
                        <option value="Acima de R$ 3.000">Acima de R$ 3.000</option>
                        <option value="Não sei informar">Não sei informar</option>
                      </select>
                    </div>
                  </div>

                  {/* Cidade / Estado */}
                  <div>
                    <label htmlFor="city" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                      Cidade / Estado
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Ex: São José do Rio Preto / SP"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Mensagem Opcional */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Conte um pouco sobre seu projeto ou suas dúvidas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold text-base rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    {status === 'loading' ? (
                      <span>Enviando dados...</span>
                    ) : (
                      <>
                        <span>Solicitar Orçamento</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Seus dados estão protegidos. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
