import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CredibilityBar } from './components/CredibilityBar';
import { AboutSection } from './components/AboutSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { EconomySection } from './components/EconomySection';
import { ServicesSection } from './components/ServicesSection';
import { ResidentialCommercialSection } from './components/ResidentialCommercialSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsAndSocialProof } from './components/TestimonialsAndSocialProof';
import { QuoteFormSection } from './components/QuoteFormSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [selectedProjectType, setSelectedProjectType] = useState<'Residencial' | 'Comercial'>('Residencial');

  const handleSelectProjectType = (type: 'Residencial' | 'Comercial') => {
    setSelectedProjectType(type);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-amber-500 selection:text-white">
      {/* 1. Header / Navbar Fixo */}
      <Header />

      {/* 2. Main Content Long Page */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Faixa de Credibilidade / Números */}
        <CredibilityBar />

        {/* Sobre a Projeto Energia */}
        <AboutSection />

        {/* Diferenciais */}
        <DifferentialsSection />

        {/* Seção de Economia */}
        <EconomySection />

        {/* Nossas Soluções / Serviços */}
        <ServicesSection />

        {/* Residencial e Comercial */}
        <ResidentialCommercialSection onSelectProjectType={handleSelectProjectType} />

        {/* Projetos Realizados (Cases) */}
        <ProjectsSection />

        {/* Como Funciona */}
        <HowItWorksSection />

        {/* Provas Sociais e Depoimentos Reservados */}
        <TestimonialsAndSocialProof />

        {/* Formulário de Orçamento */}
        <QuoteFormSection initialProjectType={selectedProjectType} />

        {/* Perguntas Frequentes */}
        <FaqSection />

        {/* CTA Final */}
        <FinalCtaSection />
      </main>

      {/* 3. Footer Completo */}
      <Footer />

      {/* 4. WhatsApp Flutuante & Barra Mobile */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
