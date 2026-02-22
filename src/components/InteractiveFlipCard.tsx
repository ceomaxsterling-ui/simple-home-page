
import React from 'react';
import { Check, X } from 'lucide-react';

interface CardData {
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
}

interface InteractiveFlipCardProps {
  card: CardData;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  globalSolutionMode: boolean;
}

const InteractiveFlipCard: React.FC<InteractiveFlipCardProps> = ({
  card,
  index,
  isHovered,
  onHover,
  globalSolutionMode
}) => {
  const showSolution = isHovered || globalSolutionMode;

  return (
    <div 
      className="relative w-full h-48 md:h-56 perspective-1000"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Card Container */}
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          showSolution ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face - Problem */}
        <div 
          className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 overflow-hidden ${
            showSolution 
              ? 'border-gray-800/50' 
              : 'border-red-500/30 hover:border-red-500/50'
          } border`}
          style={{
            background: showSolution
              ? 'rgba(15,20,25,0.6)'
              : 'linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(15,20,25,0.95) 50%, rgba(239,68,68,0.06) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(239,68,68,0.06) 0%, transparent 70%)' }} />
          <div className="relative z-10 flex items-start justify-between">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {card.problem.title}
            </h3>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              showSolution ? 'bg-gray-700' : 'bg-red-500/20'
            }`}>
              <X className={`w-5 h-5 transition-colors duration-300 ${
                showSolution ? 'text-gray-400' : 'text-red-400'
              }`} />
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)' }} className="relative z-10 text-sm md:text-base leading-relaxed">
            {card.problem.description}
          </p>
        </div>

        {/* Back Face - Solution */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(30,144,255,0.15) 0%, rgba(15,20,25,0.95) 50%, rgba(37,168,245,0.08) 100%)',
            border: '1px solid rgba(30,144,255,0.3)',
            boxShadow: '0 0 30px rgba(30,144,255,0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(37,168,245,0.08) 0%, transparent 70%)' }} />
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full pointer-events-none" style={{ background: 'rgba(30,144,255,0.4)', boxShadow: '0 0 6px rgba(30,144,255,0.6)' }} />
          <div className="relative z-10 flex items-start justify-between">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {card.solution.title}
            </h3>
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(30,144,255,0.15)', border: '1px solid rgba(30,144,255,0.25)' }}>
              <Check className="w-5 h-5 text-[#1E90FF]" style={{ filter: 'drop-shadow(0 0 6px rgba(30,144,255,0.6))' }} />
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)' }} className="relative z-10 text-sm md:text-base leading-relaxed">
            {card.solution.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFlipCard;
