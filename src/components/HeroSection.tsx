import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const HeroSection = () => {
  const { trackViewContent, initializePixel } = useFacebookPixel();

  useEffect(() => {
    initializePixel();
    trackViewContent('Hero Section - Landing Page');
  }, [initializePixel, trackViewContent]);

  const handleWhatsAppRedirect = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-center pt-20 pb-0 px-4 overflow-hidden">

      {/* Falling stars — styled via CSS nth-child */}
      <div className="stars-container">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`star-${i}`} className="star" />
        ))}
      </div>

      {/* Bottom concentrated blue light */}
      <div className="bottom-light" />

      {/* Static starfield */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '8%',  left: '12%', size: 1.5, opacity: 0.5 },
          { top: '15%', left: '78%', size: 1,   opacity: 0.4 },
          { top: '22%', left: '34%', size: 1,   opacity: 0.35 },
          { top: '6%',  left: '55%', size: 1.5, opacity: 0.45 },
          { top: '30%', left: '90%', size: 1,   opacity: 0.3 },
          { top: '42%', left: '5%',  size: 1.5, opacity: 0.4 },
          { top: '18%', left: '65%', size: 1,   opacity: 0.3 },
          { top: '55%', left: '22%', size: 1,   opacity: 0.35 },
          { top: '70%', left: '88%', size: 1.5, opacity: 0.4 },
          { top: '62%', left: '47%', size: 1,   opacity: 0.25 },
          { top: '80%', left: '10%', size: 1,   opacity: 0.3 },
          { top: '88%', left: '72%', size: 1.5, opacity: 0.4 },
          { top: '75%', left: '33%', size: 1,   opacity: 0.3 },
          { top: '4%',  left: '88%', size: 1,   opacity: 0.35 },
          { top: '48%', left: '68%', size: 1.5, opacity: 0.3 },
          { top: '35%', left: '15%', size: 1,   opacity: 0.4 },
          { top: '12%', left: '42%', size: 1.5, opacity: 0.45 },
          { top: '25%', left: '8%',  size: 1,   opacity: 0.3 },
          { top: '38%', left: '58%', size: 1.5, opacity: 0.3 },
          { top: '66%', left: '18%', size: 1,   opacity: 0.35 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `rgba(165,210,255,${star.opacity})`,
              boxShadow: `0 0 ${star.size * 3}px rgba(126,200,255,${star.opacity * 0.8})`,
              animation: `twinkle ${3 + i % 4}s ease-in-out infinite`,
              animationDelay: `${(i * 0.4) % 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full px-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7EC8FF] flex-shrink-0" />
          <span className="text-[10px] sm:text-xs font-medium text-slate-300 tracking-wide leading-snug">
            A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É UMA ESTRATÉGIA.
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-white">
          Dobramos seu faturamento com{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ffffff, #7EC8FF, #ffffff)',
              backgroundSize: '200% auto',
              animation: 'gradient-shift 4s linear infinite',
            }}>
            funis de venda e tráfego pago
          </span>{' '}
          <span className="text-white">de alta performance.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light">
          Implementamos nossa <span className="text-white font-medium">Metodologia Orion de Alavancagem</span> para transformar cliques em clientes — garantindo um{' '}
          <span className="text-white font-medium">ROI médio de 300%</span> para nossos parceiros.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full mb-12 sm:mb-20">
          <Button
            size="lg"
            className="relative text-white font-semibold px-6 py-4 sm:px-10 sm:py-5 text-sm sm:text-base md:text-lg rounded-2xl border border-[#70B8FF]/40 hover:border-[#70B8FF]/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,184,255,0.35)] hover:scale-105 w-[90%] sm:w-auto"
            style={{ backgroundColor: '#1E90FF' }}
            onClick={handleWhatsAppRedirect}>
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
            Receber Meu Diagnóstico Gratuito →
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: var(--star-opacity, 0.4); transform: scale(1); }
          50%       { opacity: calc(var(--star-opacity, 0.4) * 0.3); transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
