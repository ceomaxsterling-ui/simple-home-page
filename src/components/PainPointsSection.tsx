
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
        title: "Sua Marca Não Gera Autoridade",
        description: "A primeira impressão decide tudo. Se ela não transmite confiança, o cliente vai embora antes de você ter a chance de convencê-lo."
      },
      solution: {
        title: "Autoridade Visual Que Fecha Portas",
        description: "Construímos identidades que fazem o cliente confiar na sua empresa antes de você dizer uma só palavra."
      }
    },
    {
      problem: {
        title: "Investimento Que Não Retorna",
        description: "Você atrai atenção, mas os clientes não avançam. O problema não é o produto — é a estratégia que não guia o cliente até a decisão."
      },
      solution: {
        title: "Cada Contato Vira Oportunidade",
        description: "Estruturamos sua comunicação para conduzir o cliente da descoberta à compra — com clareza, confiança e zero atrito."
      }
    },
    {
      problem: {
        title: "Você Opera Abaixo do Seu Teto",
        description: "Sua operação funciona — mas não no ritmo que você sabe que é possível. Gargalos invisíveis estão limitando o que você poderia conquistar."
      },
      solution: {
        title: "Órbita Máxima Ativada",
        description: "Mapeamos os pontos de travamento e implementamos as alavancas que fazem sua empresa crescer de forma consistente e sustentável."
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
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #081B2D 0%, #0d2540 100%)' }}>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl transition-all duration-1000 ${
          isInSolutionMode ? 'opacity-100' : 'opacity-40'
        }`} style={{ background: 'radial-gradient(circle, rgba(97,164,248,0.08) 0%, transparent 70%)' }} />
        <div className={`absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl transition-all duration-1000 ${
          isInSolutionMode ? 'opacity-100' : 'opacity-30'
        }`} style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8 leading-tight">
            Seu potencial é maior do que seus resultados atuais.{' '}
            <AnimatedRotatingWord 
              words={rotatingWords}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            />
          </h2>
          
          <p className={`text-lg sm:text-xl md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-12 xl:mb-16 transition-colors duration-500 ${
            isInSolutionMode ? 'text-elevix-blue/90' : 'text-gray-300'
          }`}>
            {isInSolutionMode 
              ? 'Para cada obstáculo, existe uma rota. A Orion foi construída para encontrá-la — e executá-la.' 
              : 'Não importa o tamanho ou o segmento da sua empresa. Esses são os obstáculos que impedem marcas ambiciosas de atingir seu verdadeiro potencial.'
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
          <div className={`max-w-4xl mx-auto p-6 md:p-10 rounded-3xl border transition-all duration-500 ${
            isInSolutionMode
              ? 'border-[rgba(97,164,248,0.20)]'
              : 'border-[rgba(239,68,68,0.15)]'
          }`} style={{ background: 'rgba(8,27,45,0.6)', backdropFilter: 'blur(12px)' }}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-semibold mb-3 md:mb-4">
              {isInSolutionMode
                ? 'A Transformação Que Você Precisa'
                : 'O Custo de Não Agir Agora'
              }
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-white/70">
              {isInSolutionMode ? (
                <>
                  Cada problema tem solução profissional com a{' '}
                  <span className="text-[#61A4F8] font-bold">Orion</span>.
                  Transforme seu negócio e{' '}
                  <span className="text-[#61A4F8] font-bold">multiplique seus resultados</span> hoje mesmo.
                </>
              ) : (
                <>
                  Cada mês sem a estratégia certa é{' '}
                  <span className="text-red-400 font-bold">crescimento que não volta</span>.
                  Os obstáculos que travam sua empresa hoje têm solução — e ela começa com{' '}
                  <span className="text-red-400 font-bold">uma conversa</span>.
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
              {isInSolutionMode ? 'Existe uma rota para onde você quer chegar. E nós sabemos como traçá-la.' : 'Existe uma rota para onde você quer chegar. Nós sabemos como encontrá-la.'}
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
