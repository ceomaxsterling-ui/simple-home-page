import React, { useEffect } from 'react';
import { TrendingUp, Users, Target, Zap, CheckCircle, Rocket, Shield, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const HeroSection = () => {
  const scrollY = useScrollAnimation();
  const { trackButtonClick, trackContact, trackViewContent, initializePixel } = useFacebookPixel();

  useEffect(() => {
    initializePixel();
    trackViewContent('Hero Section - Landing Page');
  }, [initializePixel, trackViewContent]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppRedirect = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const handleCasosDeSuccesso = () => {
    trackButtonClick('Ver Transformações Reais', 'Hero Section', { source: 'hero_section' });
    scrollToSection('provas');
  };

  const pillCards = [
    { icon: TrendingUp, value: '30 Dias', label: 'Garantia Orion', desc: 'Resultados ou devolvemos 100% do investimento.' },
    { icon: Users, value: '500+', label: 'Empresas Impulsionadas', desc: 'Negócios que transformamos com estratégia e precisão.' },
    { icon: Target, value: 'Design', label: 'Estratégico', desc: 'Cada pixel tem uma função. Criamos para vender.' },
    { icon: Zap, value: 'Suporte', label: 'Especializado', desc: 'Do briefing à entrega. Sem respostas automáticas.' },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-4 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Animated background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main radial glow - center top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30 animate-bg-float"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(97,164,248,0.35) 0%, rgba(255,0,255,0.15) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Secondary glows */}
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,0,255,0.4), transparent)',
            filter: 'blur(80px)',
            animation: 'bg-float 50s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(97,164,248,0.4), transparent)',
            filter: 'blur(80px)',
            animation: 'bg-float 35s ease-in-out infinite reverse',
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Energy Orb */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-60 energy-orb pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 mx-auto"
          style={{
            background: 'rgba(97, 164, 248, 0.08)',
            border: '1px solid rgba(97, 164, 248, 0.25)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: '#61A4F8' }} />
          <span
            className="text-xs sm:text-sm font-medium text-white/80 tracking-widest uppercase"
            style={{ letterSpacing: '0.08em' }}
          >
            A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É UMA ESTRATÉGIA.
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-bold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          <span className="text-white">Sua marca tem potencial de estrela.{' '}</span>
          <span className="section-title-gradient">Nós apontamos a rota.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-10 leading-relaxed"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: 'rgba(255,255,255,0.70)',
            maxWidth: '680px',
          }}
        >
          Construímos estratégias que levam empresas a outro patamar. Com{' '}
          <span className="text-white font-semibold">dados, criatividade</span> e uma metodologia que já gerou mais de{' '}
          <span className="text-white font-semibold">R$ 15 milhões para nossos clientes</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
          <button
            onClick={handleWhatsAppRedirect}
            className="btn-neon-pill flex items-center gap-2 w-full sm:w-auto text-base"
          >
            <Rocket className="w-5 h-5" />
            Quero Crescer com a Orion →
          </button>
          <button
            onClick={handleCasosDeSuccesso}
            className="btn-neon-outline flex items-center gap-2 w-full sm:w-auto text-base"
          >
            <Shield className="w-5 h-5" />
            Ver Cases de Sucesso
          </button>
        </div>

        {/* Light beam from CTA to cards */}
        <div className="relative flex justify-center mb-8">
          <div
            className="light-beam-vertical h-12 animate-beam-flow"
            style={{ margin: '0 auto' }}
          />
        </div>

        {/* Stats Cards */}
        <div
          className="glass-card mx-auto p-6 sm:p-8"
          style={{ maxWidth: '900px' }}
        >
          <h3 className="text-base sm:text-lg font-semibold text-white mb-6 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" style={{ color: '#61A4F8' }} />
            <span>Por Que Escolher a Orion?</span>
          </h3>

          {/* Mobile: stacked */}
          <div className="flex flex-col gap-3 sm:hidden">
            {pillCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{
                    background: 'rgba(97, 164, 248, 0.06)',
                    border: '1px solid rgba(97, 164, 248, 0.15)',
                  }}
                >
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#61A4F8' }} />
                  <div>
                    <p className="text-sm font-semibold text-white">{card.value} — {card.label}</p>
                    <p className="text-xs text-white/55 mt-0.5">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: 4 cols */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pillCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl text-center transition-all duration-300 group cursor-default"
                  style={{
                    background: 'rgba(97, 164, 248, 0.05)',
                    border: '1px solid rgba(97, 164, 248, 0.15)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = '0 0 20px rgba(97,164,248,0.2), 0 0 40px rgba(255,0,255,0.1)';
                    el.style.borderColor = 'rgba(97,164,248,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = 'none';
                    el.style.borderColor = 'rgba(97,164,248,0.15)';
                  }}
                >
                  <Icon className="w-7 h-7 mx-auto mb-3" style={{ color: '#61A4F8', filter: 'drop-shadow(0 0 5px #61A4F8)' }} />
                  <p className="stat-number text-2xl sm:text-3xl mb-1">{card.value}</p>
                  <p className="text-xs font-semibold" style={{ color: '#61A4F8' }}>{card.label}</p>
                  <p className="text-xs mt-1 leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-semibold" style={{ color: '#61A4F8' }}>
              🚀 Mais de R$ 15 Milhões em Receita Gerados Para Nossos Clientes
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Números reais. Empresas reais. Metodologia comprovada.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom light beam to next section */}
      <div className="relative mt-12 flex justify-center">
        <div className="light-beam-vertical h-16 animate-beam-flow" />
      </div>
    </section>
  );
};

export default HeroSection;
