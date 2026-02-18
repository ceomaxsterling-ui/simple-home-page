
import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, MessageSquare, BarChart3, Users, Play, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionsSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      id: 0,
      icon: <Palette className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Estratégia e Branding",
      subtitle: "Para Todos os Negócios",
      description: "Construímos a fundação da sua marca. Uma identidade forte não é estética — é estratégia. É o que faz empresas serem lembradas quando a concorrência é esquecida.",
      features: ["Identidade Visual Completa", "Design de Marca Exclusivo", "Planejamento Estratégico", "Posicionamento de Mercado"],
      color: "elevix-blue",
      gradient: "from-elevix-blue/20 to-blue-500/5",
      buttonBorder: "border-elevix-blue",
      dashboardMetrics: [
        { label: "Design", value: "95%" },
        { label: "Estratégia", value: "98%" },
        { label: "Branding", value: "92%" }
      ],
      dashboardStats: [
        { label: "Marcas Criadas", value: "200+" },
        { label: "Satisfação", value: "98%" }
      ]
    },
    {
      id: 1,
      icon: <BarChart3 className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Performance e Aquisição",
      subtitle: "Resultados Mensuráveis",
      description: "Cada real investido em mídia precisa trabalhar. Gerenciamos suas campanhas com precisão cirúrgica — para atrair as pessoas certas, no momento certo, com a mensagem certa.",
      features: ["Gestão de Tráfego Pago", "Criação de Criativos", "Otimização de Conversão (CRO)", "Análise de Performance"],
      color: "blue-400",
      gradient: "from-blue-500/20 to-blue-400/5",
      buttonBorder: "border-blue-400",
      dashboardMetrics: [
        { label: "ROI", value: "85%" },
        { label: "Conversão", value: "90%" },
        { label: "Performance", value: "95%" }
      ],
      dashboardStats: [
        { label: "ROI Médio", value: "280%" },
        { label: "Campanhas", value: "500+" }
      ]
    },
    {
      id: 2,
      icon: <MessageSquare className="w-6 md:w-8 h-6 md:h-8" />,
      title: "Presença e Relacionamento",
      subtitle: "Onde Seus Clientes Estão",
      description: "Sua marca presente onde seus clientes estão. Criamos conteúdo, gerenciamos canais e automatizamos processos para que nenhuma oportunidade passe em branco.",
      features: ["Design de Social Media", "Google Meu Negócio", "Automação de Atendimento", "Gestão de Relacionamento"],
      color: "blue-500",
      gradient: "from-blue-500/20 to-blue-400/5",
      buttonBorder: "border-blue-500",
      dashboardMetrics: [
        { label: "Engajamento", value: "24/7" },
        { label: "Automação", value: "90%" },
        { label: "Visibilidade", value: "95%" }
      ],
      dashboardStats: [
        { label: "Alcance", value: "+400%" },
        { label: "Automação", value: "24/7" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const parallaxOffset = scrollY * 0.1;

  return (
    <section 
      ref={sectionRef}
      id="solucoes" 
      className="relative py-12 md:py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-elevix-blue/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${parallaxOffset}px) rotate(${scrollY * 0.05}deg)` }}
        ></div>
        <div 
          className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${-parallaxOffset}px) rotate(${-scrollY * 0.03}deg)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-elevix-blue/3 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0002})` }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 text-elevix-blue mb-4 md:mb-6">
            <div className="w-2 h-2 bg-elevix-blue rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base md:text-lg font-medium">O Arsenal da Orion</span>
            <div className="w-2 h-2 bg-elevix-blue rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight text-center px-2 sm:px-0">
            Tudo Que Sua Empresa Precisa Para Ir Mais Longe{' '}
            <span className="text-elevix-blue">
              — Em Um Só Lugar.
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Da identidade ao crescimento. Da estratégia à execução. Operamos como uma{' '}
            <span className="text-elevix-blue font-semibold">extensão da sua empresa</span> — com foco total em levar sua marca a outro patamar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-2 sm:px-0">
          <div className="flex flex-col md:flex-row justify-center space-y-3 sm:space-y-4 md:space-y-0 md:space-x-6">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`group relative p-3 sm:p-4 md:p-6 rounded-2xl border transition-all duration-500 ${
                  activeService === index 
                    ? 'border-elevix-blue/50 bg-elevix-blue/5' 
                    : 'border-gray-800/50 bg-gray-900/30 hover:border-gray-700/50'
                }`}
              >
                <div className={`flex items-center space-x-2 sm:space-x-3 md:space-x-4 transition-all duration-300 ${
                  activeService === index ? 'scale-105' : 'group-hover:scale-102'
                }`}>
                  <div className={`p-2 md:p-3 rounded-xl transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-elevix-blue/20 text-elevix-blue' 
                      : 'bg-gray-800/50 text-gray-400 group-hover:text-white'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <h3 className={`font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                      activeService === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs md:text-sm transition-colors duration-300 ${
                      activeService === index ? 'text-elevix-blue' : 'text-gray-500'
                    }`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                {activeService === index && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-elevix-blue/10 to-transparent opacity-50 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-2 sm:px-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                activeService === index 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-10 scale-95 absolute pointer-events-none'
              }`}
            >
              <Card className={`p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br ${service.gradient} border-gray-800/50 hover:border-${service.color}/30 transition-all duration-500 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-${service.color} rounded-full animate-pulse`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                      <div className={`p-2 sm:p-3 md:p-4 rounded-2xl bg-${service.color}/20`}>
                        <div className={`text-${service.color}`}>
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                          {service.title}
                        </h3>
                        <p className={`text-sm sm:text-base md:text-lg font-semibold text-${service.color}`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                        >
                          <CheckCircle className={`w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:w-5 text-${service.color}`} />
                          <span className="text-white font-medium text-xs sm:text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <Button 
                        onClick={() => scrollToSection('nossas-solucoes')}
                        className={`group bg-transparent text-white border-2 ${service.buttonBorder} hover:bg-${service.color}/10 font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base`}
                      >
                        Explorar Solução →
                        <ArrowRight className="ml-1 sm:ml-2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-gray-700/50 backdrop-blur-sm`}>
                      <div className="space-y-3 sm:space-y-4 md:space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">Performance</span>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-${service.color} animate-pulse`}></div>
                            <span className={`text-${service.color} font-bold text-xs sm:text-sm md:text-base`}>Ativo</span>
                          </div>
                        </div>

                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          {service.dashboardMetrics.map((metric, idx) => (
                            <div key={idx} className="space-y-1 sm:space-y-2">
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-300">{metric.label}</span>
                                <span className={`text-${service.color} font-bold`}>
                                  {metric.value}
                                </span>
                              </div>
                              <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r from-${service.color} to-${service.color}/70 rounded-full transition-all duration-1000 ease-out`}
                                  style={{ 
                                    width: metric.value.includes('%') ? metric.value : '100%',
                                    animationDelay: `${idx * 200}ms`
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 border-t border-gray-700/50">
                          {service.dashboardStats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className={`text-base sm:text-lg md:text-2xl font-bold text-${service.color}`}>
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-400">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                        <div className={`w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-${service.color}/20 rounded-full flex items-center justify-center animate-bounce`}>
                          <Play className={`w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 text-${service.color}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
