import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Zap, CheckCircle, Shield, Rocket, Sparkles } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';
import StarField from '@/components/StarField';

const HeroSection = () => {
  const { trackButtonClick, trackViewContent, initializePixel } = useFacebookPixel();
  const [mounted, setMounted] = useState(false);

  const mobileCards = [
    { icon: TrendingUp, title: "Garantia Total de 30 Dias", description: "Se seu projeto não atingir o padrão Orion, devolvemos 100% do investimento." },
    { icon: Users, title: "500+ Empresas Impulsionadas", description: "Empresas que chegaram com desafios reais — e foram além do que esperavam." },
    { icon: Target, title: "Design Estratégico Para Performance", description: "Cada pixel tem uma função. Criamos para impressionar — e para vender." },
    { icon: Zap, title: "Suporte Especializado", description: "Do briefing à entrega: sua equipe dedicada, sempre disponível." },
  ];

  useEffect(() => {
    initializePixel();
    trackViewContent('Hero Section - Landing Page');
    setMounted(true);
  }, [initializePixel, trackViewContent]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCasosDeSuccesso = () => {
    trackButtonClick('Ver Cases de Sucesso', 'Hero Section', { source: 'hero_section' });
    scrollToSection('provas');
  };

  const desktopCards = [
    { icon: TrendingUp, num: "30 Dias", label: "Garantia Orion", desc: "Se o projeto não atingir o padrão que prometemos, devolvemos 100% do investimento. Sem letras miúdas.", color: "text-nebula-blue" },
    { icon: Users, num: "500+", label: "Empresas Impulsionadas", desc: "Empresas que chegaram até nós com desafios reais — e foram além do que elas mesmas esperavam.", color: "text-blue-cyan" },
    { icon: Target, num: "Design", label: "Estratégico Para Performance", desc: "Cada pixel tem uma função. Criamos para impressionar — e para vender.", color: "text-nebula-blue" },
    { icon: Zap, num: "Suporte", label: "Especializado e Rápido", desc: "Do briefing à entrega: sua equipe dedicada, sempre disponível. Sem respostas automáticas.", color: "text-blue-cyan" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-8 pb-4 px-2 relative overflow-hidden">
      {/* ── Star field (constelação) ── */}
      <StarField density={120} />

      {/* ── Nebula blobs ── */}
      <div className="blob-1 animate-pulse-nebula" />
      <div className="blob-2 animate-pulse-nebula" style={{ animationDelay: '2s' }} />
      <div className="blob-3 animate-pulse-nebula" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto relative z-10 max-w-none w-full h-full flex items-center justify-center py-px px-0">
        <div
          className="mx-auto hero-card-premium flex flex-col items-center justify-center"
          style={{
            background: 'rgba(13,27,53,0.72)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(79,142,247,0.18)',
            borderRadius: '32px',
            boxShadow: '0 0 60px rgba(79,142,247,0.12), 0 0 120px rgba(0,0,0,0.8)',
            padding: 'clamp(1.5rem, 4vw, 4rem)',
            margin: '4rem auto',
          }}
        >
          <div className="text-center space-y-4 sm:space-y-8 max-w-5xl mb-6 sm:mb-12 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[rgba(79,142,247,0.2)] to-[rgba(0,212,255,0.1)] border border-[rgba(79,142,247,0.3)] mb-6 sm:mb-8 mx-auto backdrop-blur-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-nebula-blue animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-white badge-tracking">
                A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É UMA ESTRATÉGIA.
              </span>
            </div>

            {/* H1 with gradient */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-gradient-hero">Sua marca tem potencial de estrela.</span>{' '}
              <span className="bg-gradient-to-r from-nebula-blue via-blue-cyan to-nebula-blue bg-clip-text text-transparent animate-gradient">
                Nós apontamos a rota.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Construímos estratégias que levam empresas a outro patamar. Com{' '}
              <span className="text-white font-semibold">dados, criatividade</span> e uma metodologia que já gerou mais de{' '}
              <span className="text-white font-semibold">R$ 15 milhões para nossos clientes</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-2 sm:px-0 w-full">
              <Button
                size="lg"
                className="relative z-10 btn-glow btn-shimmer bg-gradient-to-r from-nebula-blue to-[#00D4FF] hover:from-[#3d7ef6] hover:to-[#00bfec] text-white font-bold px-4 py-3 sm:px-12 sm:py-6 text-sm sm:text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group border border-[rgba(79,142,247,0.3)] w-[90%] sm:w-auto min-h-[48px] flex items-center justify-center"
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
              >
                <Rocket className="hidden sm:block w-6 h-6 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-xl leading-tight text-center">Quero Crescer com a Orion →</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[rgba(79,142,247,0.4)] bg-[rgba(79,142,247,0.05)] backdrop-blur-sm text-slate-200 hover:bg-[rgba(79,142,247,0.1)] hover:text-white hover:border-[rgba(0,212,255,0.5)] font-semibold px-4 py-3 sm:px-12 sm:py-6 text-sm sm:text-xl rounded-2xl transition-all duration-500 hover:scale-105 w-[90%] sm:w-auto min-h-[48px] flex items-center justify-center overflow-hidden relative"
                onClick={handleCasosDeSuccesso}
              >
                <Shield className="hidden sm:block w-6 h-6 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-xl leading-tight text-center">Ver Cases de Sucesso</span>
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div
            className="w-full max-w-6xl rounded-xl sm:rounded-3xl p-4 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-slate-100 text-center mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 px-1 sm:px-0">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-nebula-blue" />
              <span className="bg-gradient-to-r from-slate-100 to-[#00D4FF] bg-clip-text text-transparent">Por Que Escolher a Orion?</span>
            </h3>

            {/* Mobile */}
            <div className="block sm:hidden space-y-4">
              {mobileCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <Icon className="w-5 h-5 text-nebula-blue flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-nebula-blue text-sm font-semibold mb-2">{card.title}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{card.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {desktopCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl p-6 text-center border hover:border-[rgba(0,212,255,0.4)] transition-all duration-500 hover:scale-105 group hover:shadow-lg hover:shadow-[rgba(79,142,247,0.2)] hover:-translate-y-1`}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Icon className={`w-8 h-8 ${card.color} group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`} />
                    </div>
                    <div className="text-3xl font-display font-bold text-slate-100 mb-2">{card.num}</div>
                    <div className="text-[#00D4FF] text-sm font-semibold mb-1">{card.label}</div>
                    <div className="text-slate-400 text-xs">{card.desc}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 sm:mt-8 text-center px-2 sm:px-0">
              <p className="text-[#00D4FF] text-sm sm:text-lg font-semibold mb-2 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-lg sm:text-2xl">🚀</span>
                <span className="text-center leading-tight">Mais de R$ 15 Milhões em Receita Gerados Para Nossos Clientes</span>
              </p>
              <p className="text-slate-300 text-xs sm:text-sm px-2 sm:px-0 leading-relaxed">
                Números reais. Empresas reais. Metodologia comprovada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
