
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
          className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
            showSolution 
              ? 'bg-gray-900/30 border-gray-800/50' 
              : 'bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-500/30 hover:border-red-500/50'
          } border backdrop-blur-sm`}
        >
          <div className="flex items-start justify-between">
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
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {card.problem.description}
          </p>
        </div>

        {/* Back Face - Solution */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-elevix-blue/30 to-blue-700/20 border border-elevix-blue/30 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {card.solution.title}
            </h3>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-elevix-blue/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-elevix-blue" />
            </div>
          </div>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            {card.solution.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFlipCard;
