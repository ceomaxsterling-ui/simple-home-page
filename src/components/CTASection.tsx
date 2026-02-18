import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const CTASection = () => {
  const { trackButtonClick, trackContact, trackLead } = useFacebookPixel();

  const handleWhatsAppRedirect = () => {
    trackButtonClick('Comece Sua Transformação', 'CTA Final', { source: 'cta_final' });
    trackContact('WhatsApp', {});
    trackLead('CTA Final', {});
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section id="cta-final" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Deep nebula background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(79,142,247,0.14) 0%, rgba(123,47,190,0.09) 40%, transparent 70%), #030714'
      }} />
      {/* Extra density blobs for climax */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Sua Empresa Tem Potencial Para Ir Muito Mais Longe.{' '}
              <span style={{ background: 'linear-gradient(135deg, #4F8EF7, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                A Orion Vai Te Mostrar Como.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Não importa onde sua empresa está agora. O que importa é para onde ela quer ir. Se você tem ambição de crescer, a Orion tem a rota — e a experiência para percorrê-la
              <span className="text-white font-semibold"> com você</span>.
            </p>
          </div>

          <div className="py-4">
            <Button
              size="lg"
              className="btn-glow btn-shimmer text-white font-bold px-6 sm:px-16 py-4 sm:py-6 text-base sm:text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto group leading-tight"
              style={{ background: 'linear-gradient(135deg, #4F8EF7, #00D4FF)' }}
              onClick={handleWhatsAppRedirect}
            >
              <span className="sm:hidden">Agende Consultoria Gratuita</span>
              <span className="hidden sm:inline">Agende Sua Consultoria Estratégica Gratuita</span>
              <Zap className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Urgency badge */}
          <div className="flex justify-center">
            <div className="badge-urgency">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-dot flex-shrink-0" />
              <span className="text-white text-sm font-medium">
                Apenas 10 consultorias por mês • Garanta a sua agora
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
