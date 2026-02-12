
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
    <section id="cta-final" className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-black to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-elevix-blue/5 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Seu Próximo Nível{' '}
              <span className="text-elevix-blue">Começa Aqui</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Não importa o tamanho do seu negócio ou a complexidade do seu desafio. Se sua meta é ter 
              <span className="text-white font-semibold"> mais leads qualificados</span>, otimizar seus custos, 
              <span className="text-white font-semibold"> escalar suas vendas</span> ou construir uma 
              <span className="text-white font-semibold"> marca forte no digital</span>, a Orion Company tem a solução. 
              A hora de transformar seu negócio e alcançar{' '}
              <span className="text-elevix-blue font-semibold">resultados exponenciais</span> é agora.
            </p>
          </div>
          
          <div className="py-4">
            <Button size="lg" className="bg-gradient-to-r from-elevix-blue to-blue-600 hover:from-blue-hover hover:to-blue-700 text-white font-bold px-6 sm:px-12 py-3 sm:py-5 text-sm sm:text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-elevix-blue/25 w-full sm:w-auto group leading-tight" onClick={handleWhatsAppRedirect}>
              <span className="sm:hidden">Agende Consultoria Gratuita</span>
              <span className="hidden sm:inline">Agende Sua Consultoria Estratégica Gratuita</span>
              <Zap className="hidden sm:inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
          
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Vagas limitadas para acompanhamento personalizado. 
            Garanta sua <span className="text-elevix-blue font-medium">consultoria estratégica gratuita</span> e descubra como 
            a Metodologia Orion de Alavancagem pode transformar seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
