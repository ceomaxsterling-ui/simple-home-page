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
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-center pt-20 pb-0 px-4 overflow-hidden">
      
      {/* Falling blue stars */}
      <div className="stars-container">
        {[
          { size: 3, left: '10%', duration: '10s', delay: '0s'   },
          { size: 2, left: '25%', duration: '12s', delay: '1s'   },
          { size: 3, left: '40%', duration: '14s', delay: '2s'   },
          { size: 2, left: '55%', duration: '11s', delay: '0.5s' },
          { size: 3, left: '70%', duration: '13s', delay: '1.5s' },
          { size: 2, left: '85%', duration: '12s', delay: '3s'   },
          { size: 3, left: '15%', duration: '15s', delay: '2.5s' },
          { size: 2, left: '60%', duration: '10s', delay: '4s'   },
          { size: 2, left: '30%', duration: '11s', delay: '0.8s' },
          { size: 3, left: '75%', duration: '13s', delay: '2.2s' },
        ].map((s, i) => (
          <div
            key={`fall-${i}`}
            className="star"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              left: s.left,
              animationDuration: s.duration,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* Ambient light bottom glow */}
      <div className="ambient-light" />

      {/* Blue glow connector to next section */}
      <div className="blue-glow" />

      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Static star dots — small, subtle, blue-tinted */}
        {[
          { top: '8%',  left: '12%',  size: 1.5, opacity: 0.5 },
          { top: '15%', left: '78%',  size: 1,   opacity: 0.4 },
          { top: '22%', left: '34%',  size: 1,   opacity: 0.35 },
          { top: '6%',  left: '55%',  size: 1.5, opacity: 0.45 },
          { top: '30%', left: '90%',  size: 1,   opacity: 0.3 },
          { top: '42%', left: '5%',   size: 1.5, opacity: 0.4 },
          { top: '18%', left: '65%',  size: 1,   opacity: 0.3 },
          { top: '55%', left: '22%',  size: 1,   opacity: 0.35 },
          { top: '70%', left: '88%',  size: 1.5, opacity: 0.4 },
          { top: '62%', left: '47%',  size: 1,   opacity: 0.25 },
          { top: '80%', left: '10%',  size: 1,   opacity: 0.3 },
          { top: '88%', left: '72%',  size: 1.5, opacity: 0.4 },
          { top: '75%', left: '33%',  size: 1,   opacity: 0.3 },
          { top: '4%',  left: '88%',  size: 1,   opacity: 0.35 },
          { top: '48%', left: '68%',  size: 1.5, opacity: 0.3 },
          { top: '35%', left: '15%',  size: 1,   opacity: 0.4 },
          { top: '92%', left: '50%',  size: 1,   opacity: 0.3 },
          { top: '12%', left: '42%',  size: 1.5, opacity: 0.45 },
          { top: '58%', left: '80%',  size: 1,   opacity: 0.35 },
          { top: '25%', left: '8%',   size: 1,   opacity: 0.3 },
          { top: '82%', left: '92%',  size: 1,   opacity: 0.4 },
          { top: '38%', left: '58%',  size: 1.5, opacity: 0.3 },
          { top: '66%', left: '18%',  size: 1,   opacity: 0.35 },
          { top: '50%', left: '95%',  size: 1,   opacity: 0.3 },
          { top: '2%',  left: '22%',  size: 1,   opacity: 0.4 },
          { top: '95%', left: '28%',  size: 1.5, opacity: 0.3 },
          { top: '44%', left: '38%',  size: 1,   opacity: 0.25 },
          { top: '72%', left: '62%',  size: 1,   opacity: 0.35 },
          { top: '20%', left: '95%',  size: 1,   opacity: 0.3 },
          { top: '85%', left: '42%',  size: 1.5, opacity: 0.35 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `rgba(15,140,250,${star.opacity})`,
              boxShadow: `0 0 ${star.size * 3}px rgba(15,140,250,${star.opacity * 0.8})`,
              animation: `twinkle ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.4) % 4}s`,
            }}
          />
        ))}

        {/* A few brighter white-tinted stars for contrast */}
        {[
          { top: '10%', left: '48%', size: 2 },
          { top: '60%', left: '7%',  size: 2 },
          { top: '33%', left: '82%', size: 2 },
          { top: '78%', left: '55%', size: 2 },
        ].map((star, i) => (
          <div
            key={`bright-${i}`}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: 'rgba(200,230,255,0.85)',
              boxShadow: '0 0 6px rgba(15,140,250,0.6), 0 0 2px rgba(255,255,255,0.9)',
              animation: `twinkle ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-[#0F8CFA]" />
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
              backgroundImage: 'linear-gradient(90deg, #ffffff, #0F8CFA, #ffffff)',
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
            className="relative bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg rounded-2xl border border-white/20 hover:border-[#0F8CFA]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(15,140,250,0.25)] hover:scale-105 w-[85%] sm:w-auto backdrop-blur-sm"
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

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: var(--star-opacity, 0.4); transform: scale(1); }
          50% { opacity: calc(var(--star-opacity, 0.4) * 0.3); transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
