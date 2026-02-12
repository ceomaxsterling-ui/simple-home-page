
import React from 'react';

interface AnimatedCoringaWordProps {
  isInSolutionMode: boolean;
  onToggle: () => void;
}

const AnimatedCoringaWord: React.FC<AnimatedCoringaWordProps> = ({ 
  isInSolutionMode, 
  onToggle 
}) => {
  return (
    <span 
      className="relative inline-block cursor-pointer group transition-all duration-500"
      onClick={onToggle}
      onMouseEnter={onToggle}
    >
      <span 
        className={`transition-all duration-500 font-bold text-4xl md:text-6xl lg:text-7xl ${
          isInSolutionMode 
            ? 'text-transparent bg-gradient-to-r from-elevix-blue to-blue-600 bg-clip-text scale-110' 
            : 'text-red-500 scale-100'
        }`}
      >
        {isInSolutionMode ? 'multiplicar' : 'desaparecer'}
      </span>
      
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          isInSolutionMode ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-elevix-blue blur-sm font-bold text-4xl md:text-6xl lg:text-7xl">
          {isInSolutionMode ? 'multiplicar' : 'desaparecer'}
        </span>
      </div>
    </span>
  );
};

export default AnimatedCoringaWord;
