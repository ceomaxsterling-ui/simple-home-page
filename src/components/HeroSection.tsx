import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Rocket, Sparkles } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';
import StarField from '@/components/StarField';

const HeroSection = () => {
  const { trackViewContent, initializePixel } = useFacebookPixel();

  useEffect(() => {
    initializePixel();
    trackViewContent('Hero Section - Landing Page');
  }, [initializePixel, trackViewContent]);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #081B2D 0%, #103051 50%, #081B2D 100%)' }}
    >
      {/* Star field */}
      <StarField density={90} />

      {/* ── Nebula blobs nos cantos ── */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-180px',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(97,164,248,0.10) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '80px', right: '-120px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />

      {/* ── Esfera de energia / ponto focal visual ── */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -60%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(97,164,248,0.06) 0%, rgba(97,164,248,0.03) 40%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Cone / portal de luz saindo de baixo ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '700px', height: '500px',
        background: 'conic-gradient(from 270deg at 50% 100%, transparent 60deg, rgba(97,164,248,0.15) 90deg, rgba(59,130,246,0.22) 120deg, rgba(97,164,248,0.15) 150deg, transparent 180deg)',
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Núcleo do portal */}
      <div style={{
        position: 'absolute', bottom: '-60px', left: '50%',
        transform: 'translateX(-50%)',
        width: '200px', height: '300px',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(97,164,248,0.30) 0%, rgba(59,130,246,0.12) 40%, transparent 70%)',
        filter: 'blur(20px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Anel de luz orbital (esfera) ── */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -55%)',
        width: '500px', height: '500px',
        borderRadius: '50%',
        border: '1px solid rgba(97,164,248,0.06)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -55%)',
        width: '350px', height: '350px',
        borderRadius: '50%',
        border: '1px solid rgba(97,164,248,0.09)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Conteúdo ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-10"
          style={{
            background: 'rgba(97,164,248,0.08)',
            border: '1px solid rgba(97,164,248,0.20)',
            backdropFilter: 'blur(8px)',
          }}>
          <Sparkles className="w-3.5 h-3.5 text-[#61A4F8] animate-pulse" />
          <span className="text-xs font-medium text-white/80 badge-tracking">
            A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É UMA ESTRATÉGIA.
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-display font-bold leading-[1.1] mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl tracking-tight">
          <span style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #61A4F8 60%, #a8d1ff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Sua marca tem potencial de estrela.{' '}
          </span>
          <span style={{
            background: 'linear-gradient(135deg, #61A4F8, #a8d1ff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Nós apontamos a rota.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed max-w-2xl font-light">
          Construímos estratégias que levam empresas a outro patamar. Com{' '}
          <span className="text-white/90 font-medium">dados, criatividade</span> e uma metodologia que já gerou mais de{' '}
          <span className="text-white/90 font-medium">R$ 15 milhões para nossos clientes</span>.
        </p>

        {/* CTAs — pill buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-0">
          <Button
            size="lg"
            className="btn-glow btn-shimmer text-white font-semibold px-8 py-4 sm:px-12 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 group w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #61A4F8, #3b82f6)',
              border: 'none',
              borderRadius: '999px',
            }}
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Quero Crescer com a Orion →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium px-8 py-4 sm:px-12 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{
              background: 'rgba(97,164,248,0.05)',
              border: '1px solid rgba(97,164,248,0.25)',
              color: 'rgba(255,255,255,0.75)',
              borderRadius: '999px',
            }}
            onClick={() => scrollToSection('provas')}
          >
            <Shield className="w-5 h-5 mr-2 opacity-70" />
            Ver Cases de Sucesso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
