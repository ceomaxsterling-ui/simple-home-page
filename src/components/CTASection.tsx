
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const CTASection = () => {
  const { trackButtonClick, trackContact, trackLead } = useFacebookPixel();

  const handleWhatsAppRedirect = () => {
    // Capturar informações do usuário se disponível
    const userInfo = {
      source: 'cta_final',
      timestamp: new Date().toISOString(),
      page_location: window.location.href
    };

    // Múltiplos eventos para melhor tracking
    trackButtonClick('Comece Sua Transformação', 'CTA Final', userInfo);
    trackContact('WhatsApp', userInfo);
    trackLead('CTA Final', userInfo);
    
    console.log('Eventos do Facebook Pixel disparados - CTA Final');
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section id="cta-final" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-950 via-black to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-elevix-blue/5 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className="text-center space-y-5 sm:space-y-6 md:space-y-8">
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
            <Button size="lg" className="bg-gradient-to-r from-elevix-blue to-blue-600 hover:from-blue-hover hover:to-blue-700 text-white font-bold px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-base md:text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-elevix-blue/25 w-full sm:w-auto group" onClick={handleWhatsAppRedirect}>
              <span className="sm:hidden">Agende Consultoria Gratuita</span>
              <span className="hidden sm:inline">Agende Sua Consultoria Estratégica Gratuita ⚡</span>
              <Zap className="hidden sm:inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Apenas 10 consultorias por mês para garantir atenção total a cada empresa.{' '}
            Garanta a sua <span className="text-elevix-blue font-medium">consultoria estratégica gratuita</span> — não deixe para depois.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
