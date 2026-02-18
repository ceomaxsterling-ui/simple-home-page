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

      {/* Light cone effect — neon beam rising from bottom, connecting to next section */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-0" aria-hidden>

        {/* Floor spread glow — wide base bleeding into next section */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-80"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 100%, rgba(11,37,78,0.95) 0%, rgba(11,37,78,0.6) 35%, rgba(11,37,78,0.15) 65%, transparent 100%)',
          }}
        />

        {/* Wide cone body */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px]"
          style={{
            background: 'linear-gradient(to top, rgba(11,37,78,1) 0%, rgba(11,37,78,0.75) 25%, rgba(11,37,78,0.35) 55%, rgba(11,37,78,0.05) 80%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />

        {/* Medium cone — brighter inner */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px]"
          style={{
            background: 'linear-gradient(to top, rgba(30,80,160,0.95) 0%, rgba(20,55,120,0.7) 30%, rgba(11,37,78,0.3) 60%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Core bright streak */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-[420px]"
          style={{
            background: 'linear-gradient(to top, rgba(80,140,255,1) 0%, rgba(50,100,220,0.8) 25%, rgba(20,60,160,0.4) 55%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(6px)',
          }}
        />

        {/* Ultra-bright neon core spine */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[360px]"
          style={{
            background: 'linear-gradient(to top, rgba(150,200,255,1) 0%, rgba(100,160,255,0.9) 20%, rgba(60,120,240,0.5) 50%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(3px)',
          }}
        />

        {/* Neon glow halo at apex (button area) */}
        <div
          className="absolute bottom-[260px] left-1/2 -translate-x-1/2 w-48 h-10 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(100,180,255,0.9) 0%, rgba(30,80,200,0.5) 40%, transparent 100%)',
            filter: 'blur(10px)',
          }}
        />

        {/* Outer neon bloom at base */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-32 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(11,37,78,0.9) 0%, rgba(11,37,78,0.4) 50%, transparent 100%)',
            filter: 'blur(20px)',
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
