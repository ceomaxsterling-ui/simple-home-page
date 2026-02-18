import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Rocket, Sparkles } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';
import StarField from '@/components/StarField';

const HeroSection = () => {
  const { trackButtonClick, trackViewContent, initializePixel } = useFacebookPixel();

  useEffect(() => {
    initializePixel();
    trackViewContent('Hero Section - Landing Page');
  }, [initializePixel, trackViewContent]);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });



  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
      style={{ background: '#030714' }}
    >
      {/* ── Star field ── */}
      <StarField density={110} />

      {/* ── Nebula blobs (corners) ── */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-150px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '100px', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,47,190,0.10) 0%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />

      {/* ── Light cone / portal ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '700px', height: '500px',
        background: 'conic-gradient(from 270deg at 50% 100%, transparent 60deg, rgba(0,212,255,0.18) 90deg, rgba(79,142,247,0.25) 120deg, rgba(0,212,255,0.18) 150deg, transparent 180deg)',
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Core glow */}
      <div style={{
        position: 'absolute', bottom: '-60px', left: '50%',
        transform: 'translateX(-50%)',
        width: '200px', height: '300px',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.35) 0%, rgba(79,142,247,0.15) 40%, transparent 70%)',
        filter: 'blur(20px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full mb-8 sm:mb-10"
          style={{
            background: 'rgba(79,142,247,0.12)',
            border: '1px solid rgba(79,142,247,0.25)',
            backdropFilter: 'blur(8px)',
          }}>
          <Sparkles className="w-4 h-4 text-[#4F8EF7] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-white badge-tracking">
            A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É UMA ESTRATÉGIA.
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-display font-bold leading-tight mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
          <span style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #4F8EF7 55%, #00D4FF 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Sua marca tem potencial de estrela.
          </span>{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4F8EF7, #00D4FF)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Nós apontamos a rota.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 sm:mb-12 leading-relaxed max-w-3xl font-light">
          Construímos estratégias que levam empresas a outro patamar. Com{' '}
          <span className="text-white font-semibold">dados, criatividade</span> e uma metodologia que já gerou mais de{' '}
          <span className="text-white font-semibold">R$ 15 milhões para nossos clientes</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-16 sm:mb-20 w-full px-4 sm:px-0">
          <Button
            size="lg"
            className="btn-glow btn-shimmer text-white font-bold px-8 py-4 sm:px-12 sm:py-6 text-base sm:text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group w-full sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #4F8EF7, #00D4FF)', border: 'none' }}
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Quero Crescer com a Orion →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold px-8 py-4 sm:px-12 sm:py-6 text-base sm:text-lg rounded-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{
              background: 'rgba(79,142,247,0.06)',
              border: '1px solid rgba(79,142,247,0.35)',
              color: '#cbd5e1',
            }}
            onClick={() => scrollToSection('provas')}
          >
            <Shield className="w-5 h-5 mr-2" />
            Ver Cases de Sucesso
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
