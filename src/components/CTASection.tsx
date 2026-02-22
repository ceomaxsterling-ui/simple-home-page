
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';

import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const CTASection = () => {
  const { trackButtonClick, trackContact, trackLead } = useFacebookPixel();
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppRedirect = () => {
    const userInfo = {
      source: 'cta_final',
      timestamp: new Date().toISOString(),
      page_location: window.location.href
    };
    trackButtonClick('Comece Sua Transformação', 'CTA Final', userInfo);
    trackContact('WhatsApp', userInfo);
    trackLead('CTA Final', userInfo);
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section
      id="cta-final"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #020308 50%, #050505 100%)'
      }}>

      {/* Deep center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(95,145,255,0.15) 0%, transparent 60%)',
          filter: 'blur(20px)'
        }} />

      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(95,145,255,0.6), transparent)' }} />

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(95,145,255,0.35), transparent)' }} />

      {/* Side orbs for depth */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(95,145,255,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(95,145,255,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />

      {/* Cosmic particles */}
      {[
      { left: '10%', top: '30%', size: 2, delay: '0s', duration: '9s' },
      { left: '85%', top: '25%', size: 1.5, delay: '2s', duration: '11s' },
      { left: '50%', top: '70%', size: 1.5, delay: '4s', duration: '8s' },
      { left: '20%', top: '65%', size: 1, delay: '1.5s', duration: '10s' },
      { left: '75%', top: '55%', size: 2, delay: '3s', duration: '12s' }].
      map((p, i) =>
      <div
        key={i}
        className="cosmic-particle"
        style={{
          left: p.left, top: p.top,
          width: `${p.size}px`, height: `${p.size}px`,
          animationDelay: p.delay, animationDuration: p.duration
        }} />

      )}

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className="text-center space-y-5 sm:space-y-6 md:space-y-8">
          {/* Main card with glow border */}
          <div
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(95,145,255,0.08) 0%, rgba(5,5,5,0.97) 60%)',
              border: '1px solid rgba(95,145,255,0.3)',
              boxShadow: '0 0 60px rgba(95,145,255,0.12), inset 0 0 30px rgba(95,145,255,0.03)'
            }}>

            {/* Inner top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(95,145,255,0.7), transparent)' }} />

            {/* Floating orb */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(95,145,255,0.15) 0%, transparent 70%)',
                filter: 'blur(30px)'
              }} />


            <div className="relative z-10 space-y-5 sm:space-y-6 md:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Sua Empresa Tem Potencial Para Ir Muito Mais Longe.{' '}
                  <span className="text-elevix-blue">A Orion Vai Te Mostrar Como.</span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Não importa onde sua empresa está agora. O que importa é para onde ela quer ir. Se você tem ambição de crescer, a Orion tem a rota — e a experiência para percorrê-la
                  <span className="text-white font-semibold"> com você</span>.
                </p>
              </div>
              
              <div className="py-2 sm:py-4">
                <Button
                  size="lg"
                  className="btn-interactive bg-elevix-blue hover:bg-blue-hover text-white font-bold px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-base md:text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-elevix-blue/30 w-full sm:w-auto group"
                  onClick={handleWhatsAppRedirect}>

                  <span className="sm:hidden">Agende Consultoria Gratuita</span>
                  <span className="hidden sm:inline">Agende Sua Consultoria Estratégica Gratuita </span>
                  
                </Button>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                Apenas 10 consultorias por mês para garantir atenção total a cada empresa.{' '}
                Garanta a sua <span className="text-elevix-blue font-medium">consultoria estratégica gratuita</span> — não deixe para depois.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;