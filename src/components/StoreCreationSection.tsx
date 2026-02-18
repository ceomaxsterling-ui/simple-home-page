import React, { useState, useEffect, useRef, memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Palette, Smartphone, CreditCard, Zap, Shield, TrendingUp, CheckCircle, ArrowRight, Play, Monitor, ShoppingCart, Gauge } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/links';
const StoreCreationSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const creationSteps = [{
    id: 0,
    icon: <Settings className="w-6 h-6" />,
    title: "Diagnóstico Profundo",
    description: "Antes de agir, entendemos. Mapeamos seu mercado, seus concorrentes e seus objetivos reais. O plano que nasce daqui não serve para nenhuma outra empresa — só para a sua.",
    features: ["Escuta Ativa", "Análise de Mercado", "Plano de Ação Detalhado", "KPIs Definidos"],
    color: "elevix-blue",
    bgGradient: "from-elevix-blue/20 to-blue-500/10"
  }, {
    id: 1,
    icon: <Zap className="w-6 h-6" />,
    title: "Execução com Precisão",
    description: "Time dedicado, prazos reais, entrega de alto nível. Cada detalhe é cuidado com o mesmo cuidado que teríamos se fosse nossa própria empresa.",
    features: ["Design e Conteúdo", "Identidade da Marca", "Implementação Técnica", "Plataformas Otimizadas"],
    color: "blue-400",
    bgGradient: "from-blue-400/20 to-blue-500/10"
  }, {
    id: 2,
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Crescimento Contínuo",
    description: "Entregamos e continuamos. Monitoramos cada resultado, identificamos o que pode ir mais longe e recalibramos a rota. Crescimento aqui não é um pico — é uma trajetória.",
    features: ["Monitoramento 24/7", "Análise de Performance", "Ajustes Estratégicos", "Crescimento Sustentável"],
    color: "blue-500",
    bgGradient: "from-blue-500/20 to-blue-600/10"
  }];
  const benefits = [{
    icon: <Gauge className="w-5 h-5" />,
    text: "Performance Superior",
    value: "98%"
  }, {
    icon: <ShoppingCart className="w-5 h-5" />,
    text: "Otimização e Conversão",
    value: "12.5%"
  }, {
    icon: <Shield className="w-5 h-5" />,
    text: "Segurança Total",
    value: "100%"
  }, {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "ROI Médio",
    value: "280%"
  }];
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized auto-advance steps with pause on hover
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let isPaused = false;

    const startInterval = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          setActiveStep(prev => (prev + 1) % creationSteps.length);
        }
      }, 6000); // Increased interval for better performance
    };

    const pauseAutoAdvance = () => {
      isPaused = true;
    };

    const resumeAutoAdvance = () => {
      isPaused = false;
    };

    startInterval();

    // Add hover listeners to pause auto-advance
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('mouseenter', pauseAutoAdvance);
      sectionElement.addEventListener('mouseleave', resumeAutoAdvance);
    }

    return () => {
      clearInterval(interval);
      if (sectionElement) {
        sectionElement.removeEventListener('mouseenter', pauseAutoAdvance);
        sectionElement.removeEventListener('mouseleave', resumeAutoAdvance);
      }
    };
  }, []);
  return <section ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-20 left-20 w-96 h-96 bg-elevix-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-elevix-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 text-elevix-blue mb-6">
            <Zap className="w-6 h-6" />
            <span className="text-lg font-medium">Nossa Rota</span>
            <Zap className="w-6 h-6" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Três Etapas. Uma Missão.
            <br />
            <span className="text-elevix-blue bg-gradient-to-r from-elevix-blue to-blue-400 bg-clip-text text-transparent">
              Levar sua empresa ao lugar que ela merece.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sem achismo. Sem improviso. Cada projeto segue uma{' '}
            <span className="text-elevix-blue font-semibold">rota precisa</span> — para que você saiba exatamente onde está e{' '}
            <span className="text-elevix-blue font-semibold">para onde está indo</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left Side - Steps Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Como Funciona <span className="text-elevix-blue">Na Prática</span>
            </h3>
            
            <div className="space-y-4">
              {creationSteps.map((step, index) => <div key={step.id} onClick={() => setActiveStep(index)} className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${activeStep === index ? 'border-elevix-blue/50 bg-elevix-blue/10' : 'border-gray-800/50 bg-gray-900/30 hover:border-gray-700/50 hover:bg-gray-900/50'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${activeStep === index ? 'bg-elevix-blue/20 text-elevix-blue' : 'bg-gray-800/50 text-gray-400 group-hover:text-white'}`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg transition-colors duration-300 ${activeStep === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {step.title}
                      </h4>
                      <p className={`text-sm transition-colors duration-300 ${activeStep === index ? 'text-elevix-blue' : 'text-gray-500'}`}>
                        {step.description}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-elevix-blue' : 'bg-gray-600'}`}></div>
                  </div>

                  {activeStep === index && <div className="mt-4 pt-4 border-t border-gray-800/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-elevix-blue flex-shrink-0" />
                            <span className="text-sm text-gray-300 break-words">{feature}</span>
                          </div>)}
                      </div>
                    </div>}
                </div>)}
            </div>
          </div>

          {/* Right Side - Active Step Details */}
          <div className="relative">
            <Card className={`p-8 bg-gradient-to-br ${creationSteps[activeStep].bgGradient} border-gray-800/50 relative overflow-hidden`}>
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-elevix-blue rounded-full animate-pulse" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }} />)}
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-2xl bg-elevix-blue/20">
                    <div className="text-elevix-blue">
                      {creationSteps[activeStep].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {creationSteps[activeStep].title}
                    </h3>
                    <p className="text-elevix-blue font-medium">
                      Etapa {activeStep + 1} de {creationSteps.length}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {creationSteps[activeStep].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {creationSteps[activeStep].features.map((feature, idx) => <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-900/50 border border-gray-800/50 min-h-[60px]">
                      <CheckCircle className="w-5 h-5 text-elevix-blue flex-shrink-0" />
                      <span className="text-white font-medium text-sm break-words flex-1">{feature}</span>
                    </div>)}
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progresso</span>
                    <span>{Math.round((activeStep + 1) / creationSteps.length * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-elevix-blue to-blue-400 rounded-full transition-all duration-1000" style={{
                    width: `${(activeStep + 1) / creationSteps.length * 100}%`
                  }}></div>
                  </div>
                </div>

              </div>
            </Card>
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => <Card key={index} className="p-6 bg-gray-900/50 border-gray-800/50 text-center hover:border-elevix-blue/30 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-elevix-blue/20 text-elevix-blue">
                  {benefit.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-elevix-blue mb-1">{benefit.value}</div>
              <p className="text-gray-300 text-sm">{benefit.text}</p>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            className="group bg-gradient-to-r from-elevix-blue to-blue-500 hover:from-blue-500 hover:to-elevix-blue text-white font-bold py-3 px-5 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-lg leading-tight"
          >
            <span>Quero Ver Como Isso Funciona Para Minha Empresa →</span>
            <ArrowRight className="hidden sm:inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <p className="text-gray-400 text-sm mt-4">
            ✓ Sem compromisso • ✓ Plano exclusivo para sua empresa • ✓ Resultados comprovados
          </p>
        </div>
      </div>
    </section>;
};
export default memo(StoreCreationSection);