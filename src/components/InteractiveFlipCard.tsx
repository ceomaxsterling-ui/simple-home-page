
import React, { useState, useEffect } from 'react';
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
  isHovered?: boolean;
  onHover?: (index: number | null) => void;
  globalSolutionMode?: boolean;
  flipDelay?: number;
}

const InteractiveFlipCard: React.FC<InteractiveFlipCardProps> = ({
  card,
  index,
  flipDelay = 0,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const totalCycle = 6000; // 3s front + 3s back
    const timeout = setTimeout(() => {
      setIsFlipped(true);
      const interval = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, flipDelay);

    // Also set up the ongoing interval after initial delay
    let interval: NodeJS.Timeout;
    const startInterval = setTimeout(() => {
      interval = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 3000);
    }, flipDelay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(startInterval);
      if (interval) clearInterval(interval);
    };
  }, [flipDelay]);

  return (
    <div 
      className="relative w-full h-48 md:h-56"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Face - Problem */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(145deg, rgba(30, 30, 35, 0.9), rgba(20, 20, 25, 0.95))',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="relative z-10 flex items-start justify-between">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight pr-3">
              {card.problem.title}
            </h3>
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-red-500/20">
              <X className="w-5 h-5 text-red-400" />
            </div>
          </div>
          <p className="relative z-10 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {card.problem.description}
          </p>
        </div>

        {/* Back Face - Solution */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden flip-card-back"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #1E90FF, #25A8F5)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 0 40px rgba(30, 144, 255, 0.5), 0 0 80px rgba(37, 168, 245, 0.3)',
            animation: 'flipCardPulse 2s ease-in-out infinite',
          }}
        >
          {/* Radial light overlay */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)' }}
          />
          {/* Star particles */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none flip-card-stars" />
          
          <div className="relative z-10 flex items-start justify-between">
            <h3 className="text-lg md:text-xl text-white leading-tight pr-3" style={{ fontWeight: 600 }}>
              {card.solution.title}
            </h3>
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <Check className="w-5 h-5 text-white" style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))' }} />
            </div>
          </div>
          <p className="relative z-10 text-sm md:text-base leading-relaxed text-white" style={{ fontWeight: 600 }}>
            {card.solution.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFlipCard;
