import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Shield, Sparkles } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const HeroSection = () => {
  const {
    trackButtonClick,
    trackViewContent,
    initializePixel
  } = useFacebookPixel();

  useEffect(() => {
    initializePixel();
    trackViewContent('Hero Section - Landing Page');
  }, [initializePixel, trackViewContent]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppRedirect = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const handleCasosDeSuccesso = () => {
    const userInfo = {
      source: 'hero_section',
      button_type: 'secondary_cta',
      timestamp: new Date().toISOString()
    };
    trackButtonClick('Ver Transformações Reais', 'Hero Section', userInfo);
    scrollToSection('provas');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-0 px-4 overflow-hidden bg-black">
      
      {/* Background subtle nebulas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-slate-800/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-[#33FFFD]" />
          <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide">
            A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É UMA ESTRATÉGIA.
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
          Sua marca tem{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ffffff, #33FFFD, #ffffff)',
              backgroundSize: '200% auto',
              animation: 'gradient-shift 4s linear infinite',
            }}
          >
            potencial de estrela.
          </span>
          <br />
          <span className="text-slate-300">Nós apontamos a rota.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed font-light">
          Construímos estratégias que levam empresas a outro patamar. Com{' '}
          <span className="text-white font-medium">dados, criatividade</span> e uma metodologia que já gerou mais de{' '}
          <span className="text-white font-medium">R$ 15 milhões para nossos clientes</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-16 sm:mb-20">
          <Button
            size="lg"
            className="relative bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg rounded-2xl border border-white/20 hover:border-[#33FFFD]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(51,255,253,0.2)] hover:scale-105 w-[85%] sm:w-auto backdrop-blur-sm"
            onClick={handleWhatsAppRedirect}
          >
            <Rocket className="w-5 h-5 mr-2 flex-shrink-0" />
            Quero Crescer com a Orion →
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-slate-400 hover:text-white hover:bg-white/5 font-medium px-6 py-4 text-base rounded-2xl transition-all duration-300 w-[85%] sm:w-auto"
            onClick={handleCasosDeSuccesso}
          >
            <Shield className="w-5 h-5 mr-2 flex-shrink-0" />
            Ver Cases de Sucesso
          </Button>
        </div>
      </div>

      {/* Light cone effect — emanates from bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none z-0" aria-hidden>
        {/* Wide base glow on floor */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-64"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(51,255,253,0.18) 0%, rgba(51,255,253,0.06) 40%, transparent 75%)',
          }}
        />
        {/* Cone beam */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '0',
            height: '0',
            borderLeft: '320px solid transparent',
            borderRight: '320px solid transparent',
            borderBottom: '420px solid transparent',
            background: 'none',
            // Fake the cone with a clip-path div instead
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px]"
          style={{
            background: 'linear-gradient(to top, rgba(51,255,253,0.22) 0%, rgba(51,255,253,0.10) 30%, rgba(51,255,253,0.02) 60%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
        {/* Bright core streak */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[300px]"
          style={{
            background: 'linear-gradient(to top, rgba(51,255,253,0.55) 0%, rgba(51,255,253,0.15) 50%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(8px)',
          }}
        />
        {/* Bright point at button origin */}
        <div
          className="absolute bottom-[240px] left-1/2 -translate-x-1/2 w-32 h-8 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(51,255,253,0.7) 0%, rgba(51,255,253,0.2) 50%, transparent 100%)',
            filter: 'blur(6px)',
          }}
        />
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
