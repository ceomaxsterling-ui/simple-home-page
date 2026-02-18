import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Target, Zap, CheckCircle, Shield, Rocket, AlertTriangle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';
const HeroSection = () => {
  const scrollY = useScrollAnimation();
  const {
    trackButtonClick,
    trackContact,
    trackLead,
    trackViewContent,
    initializePixel
  } = useFacebookPixel();

  // Cards para mobile e desktop
  const mobileCards = [{
    icon: TrendingUp,
    title: "Garantia Total de 30 Dias",
    description: "Se seu projeto não atingir o padrão Orion, devolvemos 100% do investimento."
  }, {
    icon: Users,
    title: "Mais de 5.000 Projetos Criados",
    description: "Experiência comprovada ajudando negócios a crescerem com autoridade e credibilidade."
  }, {
    icon: Target,
    title: "Design Estratégico Para Performance",
    description: "Soluções criadas especificamente para converter visitantes em clientes reais."
  }, {
    icon: Zap,
    title: "Suporte Especializado",
    description: "Acompanhamento completo até seu negócio estar gerando resultados consistentes."
  }];
  useEffect(() => {
    // Inicializar o pixel com configurações avançadas
    initializePixel();

    // Track view da seção hero
    trackViewContent('Hero Section - Landing Page');
  }, [initializePixel, trackViewContent]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleWhatsAppRedirect = () => {
    window.open(WHATSAPP_URL, '_blank');
  };
  const handleCasosDeSuccesso = () => {
    console.log('Botão Ver Transformações Reais clicado');
    const userInfo = {
      source: 'hero_section',
      button_type: 'secondary_cta',
      timestamp: new Date().toISOString()
    };
    trackButtonClick('Ver Transformações Reais', 'Hero Section', userInfo);
    scrollToSection('provas');
  };

  // Animação ajustada - card mantém tamanho original até scroll maior (APENAS DESKTOP)
  const scrollThreshold = 400;
  const effectiveScroll = Math.max(0, scrollY - scrollThreshold);
  const cardScale = effectiveScroll > 0 ? Math.max(0.85, 1 - effectiveScroll * 0.0001) : 1;
  const cardOpacity = effectiveScroll > 0 ? Math.max(0.90, 1 - effectiveScroll * 0.00004) : 1;
  const cardTranslateY = effectiveScroll > 0 ? effectiveScroll * 0.12 : 0;
  return <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-8 pb-4 px-2 relative overflow-hidden">
      {/* Sophisticated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-slate-700/20 via-blue-800/15 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-tl from-blue-600/20 via-slate-600/10 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-60 sm:h-[600px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-none w-full h-full flex items-center justify-center py-px px-0">
        <Card style={{
        // Aplicar efeitos de scroll APENAS no desktop (sm e acima)
        transform: window.innerWidth >= 640 ? `scale(${cardScale}) translateY(${cardTranslateY}px)` : 'none',
        opacity: window.innerWidth >= 640 ? cardOpacity : 1,
        boxShadow: '0 0 60px rgba(30, 144, 255, 0.15), 0 0 120px rgba(15, 23, 42, 0.8), inset 0 0 60px rgba(255, 255, 255, 0.03)',
        minHeight: '85vh'
      }} className="mx-auto p-4 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-slate-900/95 via-gray-900/98 to-slate-800/95 backdrop-blur-xl shadow-2xl shadow-blue-900/20 border border-slate-700/50 rounded-xl sm:rounded-[32px] hero-card-premium flex flex-col items-center justify-center sm:px-[65px] sm:my-[66px] w-[95%] sm:w-[85%] md:w-[90%] lg:w-[95%] xl:w-[98%] px-[8px] my-[77px] py-[59px]">
          <div className="text-center space-y-4 sm:space-y-8 max-w-5xl mb-6 sm:mb-12 w-full">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-gradient-to-r from-elevix-blue/20 to-blue-500/10 border border-elevix-blue/30 mb-6 sm:mb-8 mx-auto backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-elevix-blue/20">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-elevix-blue animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
                A DISTÂNCIA ENTRE ONDE VOCÊ ESTÁ E ONDE QUER CHEGAR É UMA ESTRATÉGIA.
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(255_255_255_/_20%)]">
              Sua marca tem potencial de estrela.{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-elevix-blue via-blue-400 to-elevix-blue bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Nós apontamos a rota.
                </span>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Construímos estratégias que levam empresas a outro patamar. Com <span className="text-white font-semibold">dados, criatividade</span> e uma metodologia que já gerou 
              mais de <span className="text-white font-semibold">R$ 15 milhões para nossos clientes</span>.
            </p>
            
            {/* Botões - CTAs Atualizados */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-2 sm:px-0 w-full">
              <Button size="lg" className="relative z-10 bg-gradient-to-r from-elevix-blue to-blue-600 hover:from-blue-hover hover:to-blue-700 text-white hover:text-white font-bold px-4 py-3 sm:px-12 sm:py-6 text-sm sm:text-xl rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-elevix-blue/25 hover:scale-105 group border border-blue-400/20 w-[90%] sm:w-auto min-h-[48px] flex items-center justify-center" onClick={handleWhatsAppRedirect}>
                <Rocket className="hidden sm:block w-6 h-6 mr-2 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-sm sm:text-xl leading-tight text-center">Quero Crescer com a Orion →</span>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-600 bg-slate-800/50 backdrop-blur-sm text-slate-200 hover:bg-slate-700/70 hover:text-elevix-blue hover:border-blue-500/50 font-semibold px-4 py-3 sm:px-12 sm:py-6 text-sm sm:text-xl rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50 w-[90%] sm:w-auto min-h-[48px] flex items-center justify-center" onClick={handleCasosDeSuccesso} type="button">
                <Shield className="hidden sm:block w-6 h-6 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-xl leading-tight text-center">Ver Cases de Sucesso</span>
              </Button>
            </div>
          </div>
          
          {/* Card de Garantias - Layouts diferentes para Mobile e Desktop */}
          <div className="w-full max-w-6xl bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-800/60 backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 border border-slate-600/40 shadow-inner shadow-slate-900/50">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-100 text-center mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 px-1 sm:px-0">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-elevix-blue" />
              <span className="bg-gradient-to-r from-slate-100 to-blue-200 bg-clip-text text-transparent">Por Que Escolher a Orion?</span>
            </h3>
            
            {/* Mobile: Cards Empilhados Verticalmente */}
            <div className="block sm:hidden space-y-4">
              {mobileCards.map((card, index) => {
              const IconComponent = card.icon;
              return <div key={index} className="flex items-start gap-3 bg-gradient-to-br from-slate-700/40 to-slate-800/60 backdrop-blur-sm rounded-lg p-4 border border-slate-600/30">
                    <IconComponent className="w-5 h-5 text-elevix-blue flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-elevix-blue text-sm font-semibold mb-2">{card.title}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{card.description}</div>
                    </div>
                  </div>;
            })}
            </div>
            
            {/* Desktop: Grid Original */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-600/30 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 group hover:shadow-lg hover:shadow-blue-900/20">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-elevix-blue group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-slate-100 mb-2">30 Dias</div>
                <div className="text-blue-300 text-sm font-semibold mb-1">Garantia Orion</div>
                <div className="text-slate-400 text-xs">Se o projeto não atingir o padrão que prometemos, devolvemos 100% do investimento. Sem letras miúdas.</div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-600/30 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 group hover:shadow-lg hover:shadow-blue-900/20">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-elevix-blue group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-slate-100 mb-2">500+</div>
                <div className="text-blue-300 text-sm font-semibold mb-1">Empresas Impulsionadas</div>
                <div className="text-slate-400 text-xs">Empresas que chegaram até nós com desafios reais — e foram embora com resultados que elas mesmas não esperavam.</div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-600/30 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 group hover:shadow-lg hover:shadow-blue-900/20">
                <div className="flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-elevix-blue group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-slate-100 mb-2">Design</div>
                <div className="text-blue-300 text-sm font-semibold mb-1">Estratégico Para Performance</div>
                <div className="text-slate-400 text-xs">Cada pixel tem uma função. Criamos para impressionar — e para vender.</div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-600/30 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 group hover:shadow-lg hover:shadow-blue-900/20">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-elevix-blue group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-slate-100 mb-2">Suporte</div>
                <div className="text-blue-300 text-sm font-semibold mb-1">Especializado e Rápido</div>
                <div className="text-slate-400 text-xs">Do briefing à entrega: sua equipe dedicada, sempre disponível. Sem respostas automáticas.</div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center px-2 sm:px-0">
              <p className="text-blue-300 text-sm sm:text-lg font-semibold mb-2 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-lg sm:text-2xl">🚀</span>
                <span className="text-center leading-tight">Mais de R$ 15 Milhões em Receita Gerados Para Nossos Clientes</span>
              </p>
              <p className="text-slate-300 text-xs sm:text-sm px-2 sm:px-0 leading-relaxed">
                Números reais. Empresas reais. Metodologia comprovada.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default HeroSection;