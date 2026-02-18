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

      {/* Neon beam — narrow, precise, futuristic like reference */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-0" aria-hidden>

        {/* Very subtle wide ambient — doesn't dirty the visual */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '700px',
            height: '280px',
            background: 'radial-gradient(ellipse 55% 100% at 50% 100%, rgba(15,140,250,0.08) 0%, transparent 100%)',
          }}
        />

        {/* Outer cone — narrow angle, like a projector beam */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '220px',
            height: '500px',
            background: 'linear-gradient(to top, rgba(15,140,250,0.50) 0%, rgba(15,140,250,0.22) 35%, rgba(15,140,250,0.04) 70%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 12% 100%, 88% 100%)',
            filter: 'blur(4px)',
          }}
        />

        {/* Inner cone — tighter, more saturated */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '90px',
            height: '480px',
            background: 'linear-gradient(to top, rgba(15,140,250,1) 0%, rgba(15,140,250,0.75) 25%, rgba(15,140,250,0.18) 60%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 10% 100%, 90% 100%)',
            filter: 'blur(1px)',
          }}
        />

        {/* Ultra-hot white core — the neon filament */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '28px',
            height: '430px',
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(200,235,255,1) 8%, rgba(15,140,250,1) 30%, rgba(15,140,250,0.3) 60%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 18% 100%, 82% 100%)',
            filter: 'blur(0.5px)',
          }}
        />

        {/* Apex point glow — tight bright point at button level */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: '295px',
            width: '80px',
            height: '14px',
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(15,140,250,0.9) 40%, transparent 100%)',
            filter: 'blur(4px)',
            borderRadius: '9999px',
          }}
        />

        {/* Floor pool — tight, not wide, controlled */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '320px',
            height: '60px',
            background: 'radial-gradient(ellipse at center bottom, rgba(15,140,250,0.55) 0%, rgba(15,140,250,0.15) 55%, transparent 100%)',
            filter: 'blur(14px)',
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
