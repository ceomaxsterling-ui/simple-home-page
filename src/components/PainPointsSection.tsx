
import React from 'react';
import { useInteractiveSection } from '@/hooks/useInteractiveSection';
import AnimatedRotatingWord from './AnimatedRotatingWord';
import InteractiveFlipCard from './InteractiveFlipCard';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const PainPointsSection = () => {
  const {
    isInSolutionMode,
    hoveredCard,
    toggleMode,
    handleCardHover
  } = useInteractiveSection();

  const [flippedMobileCards, setFlippedMobileCards] = React.useState<Set<number>>(new Set());

  const rotatingWords = ["amadora", "fraca", "limitada"];

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
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: isInSolutionMode
              ? 'radial-gradient(circle, #61A4F8, transparent)'
              : 'radial-gradient(circle, rgba(255,50,50,0.5), transparent)',
            transition: 'background 1s ease',
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-12"
          style={{
            background: isInSolutionMode
              ? 'radial-gradient(circle, #FF00FF, transparent)'
              : 'radial-gradient(circle, rgba(255,50,50,0.4), transparent)',
            transition: 'background 1s ease',
          }}
        />
      </div>

      {/* Top beam connector */}
      <div className="absolute top-0 left-0 right-0 light-beam animate-beam-flow" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            className="font-bold text-white leading-tight mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Seu potencial é maior do que seus resultados atuais.{' '}
            <AnimatedRotatingWord
              words={rotatingWords}
              className="section-title-gradient"
            />
          </h2>

          <p
            className="max-w-3xl mx-auto leading-relaxed mb-10 transition-colors duration-500"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: isInSolutionMode ? '#61A4F8' : 'rgba(255,255,255,0.70)',
            }}
          >
            {isInSolutionMode
              ? 'Para cada obstáculo, existe uma rota. A Orion foi construída para encontrá-la — e executá-la.'
              : 'Não importa o tamanho ou o segmento da sua empresa. Esses são os obstáculos que impedem marcas ambiciosas de atingir seu verdadeiro potencial.'}
          </p>

          {/* Mobile cards */}
          <div className="block md:hidden max-w-md mx-auto mb-8 space-y-3">
            {interactiveCards.map((card, index) => {
              const isFlipped = flippedMobileCards.has(index);
              const showSolution = isFlipped || isInSolutionMode;
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleMobileCardClick(index)}
                >
                  <div
                    className="flex items-start gap-3 p-4 rounded-2xl transition-all duration-500"
                    style={{
                      background: showSolution
                        ? 'rgba(97,164,248,0.08)'
                        : 'rgba(255,50,50,0.06)',
                      border: showSolution
                        ? '1px solid rgba(97,164,248,0.25)'
                        : '1px solid rgba(255,50,50,0.2)',
                    }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {showSolution
                        ? <CheckCircle className="w-5 h-5" style={{ color: '#61A4F8' }} />
                        : <AlertTriangle className="w-5 h-5 text-red-400" />}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold mb-1" style={{ color: showSolution ? '#61A4F8' : '#f87171' }}>
                        {showSolution ? card.solution.title : card.problem.title}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {showSolution ? card.solution.description : card.problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop flip cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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

        {/* Impact Statement */}
        <div className="text-center">
          <div
            className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl transition-all duration-500"
            style={{
              background: isInSolutionMode
                ? 'rgba(97,164,248,0.07)'
                : 'rgba(255,50,50,0.06)',
              border: isInSolutionMode
                ? '1px solid rgba(97,164,248,0.2)'
                : '1px solid rgba(255,50,50,0.18)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold mb-3" style={{ letterSpacing: '-0.01em' }}>
              {isInSolutionMode ? 'A Transformação Que Você Precisa' : 'O Custo de Não Agir Agora'}
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>
              {isInSolutionMode ? (
                <>
                  Cada problema tem solução profissional com a{' '}
                  <span className="font-bold" style={{ color: '#61A4F8' }}>Orion</span>.
                  Transforme seu negócio e{' '}
                  <span className="font-bold" style={{ color: '#61A4F8' }}>multiplique seus resultados</span> hoje mesmo.
                </>
              ) : (
                <>
                  Cada mês sem a estratégia certa é{' '}
                  <span className="font-bold text-red-400">crescimento que não volta</span>.
                  Os obstáculos que travam sua empresa hoje têm solução — e ela começa com{' '}
                  <span className="font-bold text-red-400">uma conversa</span>.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="text-center mt-10">
          <div
            className="inline-flex items-center space-x-2 transition-colors duration-500"
            style={{ color: isInSolutionMode ? '#61A4F8' : 'rgba(255,255,255,0.4)' }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: isInSolutionMode ? '#61A4F8' : '#ef4444' }}
            />
            <span className="text-sm">
              {isInSolutionMode
                ? 'Existe uma rota para onde você quer chegar. E nós sabemos como traçá-la.'
                : 'Existe uma rota para onde você quer chegar. Nós sabemos como encontrá-la.'}
            </span>
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: isInSolutionMode ? '#61A4F8' : '#ef4444' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom beam */}
      <div className="absolute bottom-0 left-0 right-0 light-beam animate-beam-flow" />
    </section>
  );
};

export default PainPointsSection;
