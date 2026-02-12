
import React from 'react';
import { useInteractiveSection } from '@/hooks/useInteractiveSection';
import AnimatedRotatingWord from './AnimatedRotatingWord';
import InteractiveFlipCard from './InteractiveFlipCard';
import { CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const PainPointsSection = () => {
  const { 
    isInSolutionMode, 
    hoveredCard, 
    toggleMode, 
    handleCardHover 
  } = useInteractiveSection();

  const [flippedMobileCards, setFlippedMobileCards] = React.useState<Set<number>>(new Set());

  const rotatingWords = [
    "amadora", 
    "fraca",
    "limitada"
  ];

  const interactiveCards = [
    {
      problem: {
        title: "Presença Digital Que Não Passa Confiança",
        description: "Seu site parece amador, afasta clientes e destrói suas conversões antes mesmo deles conhecerem sua oferta."
      },
      solution: {
        title: "Design Profissional e Confiável",
        description: "Tenha uma presença digital profissional que gera credibilidade e faz o cliente confiar na sua marca."
      }
    },
    {
      problem: {
        title: "Presença Digital Que Não Converte",
        description: "Você investe em tráfego, mas seu site não converte. Os visitantes entram e saem sem realizar ação nenhuma."
      },
      solution: {
        title: "Estrutura Otimizada Para Conversão",
        description: "Site estrategicamente construído para converter visitantes em leads qualificados e clientes reais."
      }
    },
    {
      problem: {
        title: "Presença Digital Boa, Mas Sem Todo Seu Potencial",
        description: "Seu site até funciona, mas você sabe que poderia estar gerando muito mais resultados com a estrutura certa."
      },
      solution: {
        title: "Performance Máxima Desbloqueada",
        description: "Eleve sua operação ao próximo nível com uma presença digital que explora todo seu potencial de crescimento."
      }
    }
  ];

  const handleMobileCardClick = (index: number) => {
    const newFlippedCards = new Set(flippedMobileCards);
    
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
      // Auto-revert after 3 seconds
      setTimeout(() => {
        setFlippedMobileCards(prev => {
          const updated = new Set(prev);
          updated.delete(index);
          return updated;
        });
      }, 3000);
    }
    
    setFlippedMobileCards(newFlippedCards);
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-24 xl:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 md:top-20 left-4 md:left-10 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl transition-all duration-1000 ${
          isInSolutionMode 
            ? 'bg-elevix-blue/8' 
            : 'bg-red-500/5'
        }`}></div>
        <div className={`absolute bottom-16 md:bottom-32 right-4 md:right-20 w-48 md:w-80 h-48 md:h-80 rounded-full blur-3xl transition-all duration-1000 ${
          isInSolutionMode 
            ? 'bg-elevix-blue/10' 
            : 'bg-red-500/8'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[600px] h-60 md:h-[400px] rounded-full blur-3xl transition-all duration-1000 ${
          isInSolutionMode 
            ? 'bg-elevix-blue/5' 
            : 'bg-red-500/3'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8 leading-tight">
            Cansado de ter uma presença digital{' '}
            <AnimatedRotatingWord 
              words={rotatingWords}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            />
            ?
          </h2>
          
          <p className={`text-lg sm:text-xl md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-12 xl:mb-16 transition-colors duration-500 ${
            isInSolutionMode ? 'text-elevix-blue/90' : 'text-gray-300'
          }`}>
            {isInSolutionMode 
              ? 'Cada desafio tem uma solução profissional. Não importa seu segmento - transformamos problemas em oportunidades de crescimento.' 
              : 'Não importa se você é um negócio local, infoprodutor ou e-commerce... estes problemas travam seu crescimento e podem ser fatais para seu negócio.'
            }
          </p>

          {/* Mobile: Interactive Flip Cards */}
          <div className="block md:hidden max-w-md mx-auto mb-8">
            <div className="space-y-3">
              {interactiveCards.map((card, index) => {
                const isFlipped = flippedMobileCards.has(index);
                const showSolution = isFlipped || isInSolutionMode;
                
                return (
                  <div
                    key={index}
                    className="relative perspective-1000 cursor-pointer"
                    onClick={() => handleMobileCardClick(index)}
                  >
                    <div 
                      className={`relative w-full transition-transform duration-400 ease-in-out transform-style-preserve-3d ${
                        showSolution ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* Front Face - Problem */}
                      <div className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-500 backface-hidden ${
                        showSolution 
                          ? 'bg-gradient-to-br from-elevix-blue/10 to-blue-900/5 border-elevix-blue/20' 
                          : 'bg-gradient-to-br from-red-500/10 to-red-900/5 border-red-500/20'
                      }`}>
                        <div className="flex-shrink-0 mt-0.5">
                          {showSolution ? (
                            <CheckCircle className="w-5 h-5 text-elevix-blue" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-semibold mb-1 ${
                            showSolution ? 'text-elevix-blue' : 'text-red-300'
                          }`}>
                            {showSolution ? card.solution.title : card.problem.title}
                          </div>
                          <div className="text-xs text-gray-400 leading-relaxed">
                            {showSolution ? card.solution.description : card.problem.description}
                          </div>
                        </div>
                      </div>

                      {/* Back Face - Solution */}
                      <div className="absolute inset-0 flex items-start gap-3 p-3 rounded-xl border transition-all duration-500 backface-hidden rotate-y-180 bg-gradient-to-br from-elevix-blue/10 to-blue-900/5 border-elevix-blue/20">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-5 h-5 text-elevix-blue" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold mb-1 text-elevix-blue">
                            {card.solution.title}
                          </div>
                          <div className="text-xs text-blue-100 leading-relaxed">
                            {card.solution.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: Interactive Cards Grid */}
          <div className="hidden md:block max-w-6xl mx-auto mb-12 lg:mb-16 xl:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {interactiveCards.map((card, index) => (
                <InteractiveFlipCard
                  key={index}
                  card={card}
                  index={index}
                  isHovered={hoveredCard === index}
                  onHover={handleCardHover}
                  globalSolutionMode={isInSolutionMode}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <div className={`max-w-4xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10 rounded-2xl border transition-all duration-500 ${
            isInSolutionMode 
              ? 'bg-gradient-to-br from-elevix-blue/10 to-blue-900/5 border-elevix-blue/20' 
              : 'bg-gradient-to-br from-red-500/10 to-red-900/5 border-red-500/20'
          }`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-semibold mb-3 md:mb-4">
              {isInSolutionMode 
                ? 'A Transformação Que Você Precisa' 
                : 'O Custo de Não Agir Agora'
              }
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              {isInSolutionMode ? (
                <>
                  Cada problema tem solução profissional com a{' '}
                  <span className="text-elevix-blue font-bold">Orion</span>.
                  Transforme seu negócio e{' '}
                  <span className="text-elevix-blue font-bold">multiplique seus resultados</span> hoje mesmo.
                </>
              ) : (
                <>
                  <span className="text-gray-200">
                    Cada dia sem uma estratégia profissional significa{' '}
                  </span>
                  <span className="text-red-500 font-bold">oportunidades perdidas</span>
                  <span className="text-gray-200">
                    , frustração acumulada e{' '}
                  </span>
                  <span className="text-red-500 font-bold">crescimento estagnado</span>
                  <span className="text-gray-200">
                    . Chega de deixar{' '}
                  </span>
                  <span className="text-red-500 font-bold">resultados na mesa</span>
                  <span className="text-gray-200">
                    . Transforme seu negócio hoje.
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <div className={`inline-flex items-center space-x-2 transition-colors duration-500 ${
            isInSolutionMode ? 'text-elevix-blue' : 'text-gray-400'
          }`}>
            <div className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-500 ${
              isInSolutionMode ? 'bg-elevix-blue' : 'bg-red-500'
            }`}></div>
            <span className="text-base md:text-lg">
              {isInSolutionMode ? 'Vamos transformar seu negócio no próximo nível...' : 'Mas existe uma solução profissional completa...'}
            </span>
            <div className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-500 ${
              isInSolutionMode ? 'bg-elevix-blue' : 'bg-red-500'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
