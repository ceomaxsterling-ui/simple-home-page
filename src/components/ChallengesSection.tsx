
import React, { useState, useEffect, memo } from 'react';
import { Users, Target, Zap, TrendingUp, Shield, Rocket } from 'lucide-react';
import MobileStackView from './MobileStackView';
import DesktopGrid from './DesktopGrid';
import StatsSummary from './StatsSummary';

const ChallengesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const achievements = [{
    icon: <Users className="w-8 md:w-10 h-8 md:h-10 text-elevix-blue" />,
    number: "500+",
    title: "Negócios Ativos",
    description: "Comunidade crescente de empreendedores de diversos segmentos utilizando nossas estratégias diariamente para maximizar resultados e escalar seus negócios digitais com metodologia comprovada.",
    gradient: "from-blue-500/20 to-blue-500/10",
    borderColor: "border-blue-500/30"
  }, {
    icon: <Target className="w-10 md:w-12 h-10 md:h-12 text-elevix-blue" />,
    number: "97%",
    title: "Taxa de Sucesso dos Projetos",
    description: "Nossos projetos são otimizados com metodologia exclusiva testada rigorosamente. Cada elemento é desenvolvido para converter visitantes em clientes, independente do seu segmento de atuação. Acompanhe os resultados através do nosso canal oficial no WhatsApp com atualizações em tempo real.",
    gradient: "from-blue-500/25 to-blue-600/15",
    borderColor: "border-blue-500/40"
  }, {
    icon: <Zap className="w-8 md:w-10 h-8 md:h-10 text-blue-400" />,
    number: "24/7",
    title: "Suporte Especializado",
    description: "Atendimento especializado via chat ao vivo, WhatsApp prioritário e suporte técnico via Telegram para resolver problemas do seu negócio e otimizar resultados rapidamente, independente do seu segmento.",
    gradient: "from-blue-600/20 to-blue-400/10",
    borderColor: "border-blue-400/30"
  }, {
    icon: <TrendingUp className="w-10 md:w-12 h-10 md:h-12 text-blue-300" />,
    number: "300%",
    title: "Aumento Médio em Resultados",
    description: "Nossos clientes conseguem em média um aumento de 300% em conversões, leads qualificados e vendas após implementação da nossa metodologia. Resultados comprovados em diversos segmentos de mercado que você pode acompanhar.",
    gradient: "from-blue-400/25 to-blue-500/15",
    borderColor: "border-blue-400/40"
  }, {
    icon: <Shield className="w-8 md:w-10 h-8 md:h-10 text-blue-500" />,
    number: "100%",
    title: "Garantia de Entrega",
    description: "Confiança total em nossos serviços. Oferecemos garantia completa de entrega do seu projeto funcional e otimizado, independente do segmento, porque sabemos que nossa metodologia funciona.",
    gradient: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30"
  }, {
    icon: <Rocket className="w-10 md:w-12 h-10 md:h-12 text-blue-500" />,
    number: "R$ 50K+",
    title: "Faturamento Médio dos Clientes",
    description: "Nossos principais clientes atingem faturamentos superiores a R$ 50.000 mensais utilizando nossa estrutura otimizada e ferramentas exclusivas de automação e conversão em diversos segmentos de mercado.",
    gradient: "from-blue-500/25 to-blue-400/15",
    borderColor: "border-blue-500/40"
  }];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isAnimating) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev + 1) % achievements.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev - 1 + achievements.length) % achievements.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleSlideChange = (index: number) => {
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Optimized auto-advance carousel with pause on hover
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let isPaused = false;

    const startTimer = () => {
      timer = setInterval(() => {
        if (!isPaused) {
          nextSlide();
        }
      }, 8000); // Increased interval for better performance
    };

    const pauseAutoAdvance = () => {
      isPaused = true;
    };

    const resumeAutoAdvance = () => {
      isPaused = false;
    };

    startTimer();

    // Add hover listeners to pause auto-advance
    const sectionElement = document.getElementById('challenges');
    if (sectionElement) {
      sectionElement.addEventListener('mouseenter', pauseAutoAdvance);
      sectionElement.addEventListener('mouseleave', resumeAutoAdvance);
    }

    return () => {
      clearInterval(timer);
      if (sectionElement) {
        sectionElement.removeEventListener('mouseenter', pauseAutoAdvance);
        sectionElement.removeEventListener('mouseleave', resumeAutoAdvance);
      }
    };
  }, []);

  return (
    <section id="challenges" className="section-space py-20 relative overflow-hidden">
      <div className="space-dots" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados Que Falam Por Si:{' '}
            <span className="text-blue-500">O Sucesso dos Nossos Clientes</span>{' '}
            é a Nossa Maior Conquista
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acreditamos que os números contam a melhor história. Nossos cases de sucesso 
            abrangem diversos segmentos e demonstram o impacto real da{' '}
            <span className="text-elevix-blue font-semibold">Metodologia Orion de Alavancagem</span>. 
            Veja como ajudamos negócios como o seu a alcançar o extraordinário:
          </p>
        </div>

        <DesktopGrid achievements={achievements} />

        <MobileStackView
          achievements={achievements}
          currentSlide={currentSlide}
          isAnimating={isAnimating}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
          onSlideChange={handleSlideChange}
        />

        <div className="md:hidden">
          <StatsSummary />
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default memo(ChallengesSection);
