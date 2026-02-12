
import React from 'react';

interface Achievement {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

interface MobileStackViewProps {
  achievements: Achievement[];
  currentSlide: number;
  isAnimating: boolean;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSlideChange: (index: number) => void;
}

const MobileStackView: React.FC<MobileStackViewProps> = ({
  achievements,
  currentSlide,
  isAnimating,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onPrevSlide,
  onNextSlide,
  onSlideChange
}) => {
  const getSlidePosition = (index: number) => {
    const diff = index - currentSlide;
    if (diff === 0) return 'active';
    if (diff === 1 || diff === -(achievements.length - 1)) return 'next';
    if (diff === -1 || diff === achievements.length - 1) return 'prev';
    return 'hidden';
  };

  return (
    <div className="md:hidden">
      <div className="relative h-[500px] perspective-1000">
        <div
          className="relative w-full h-full"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {achievements.map((achievement, index) => {
            const position = getSlidePosition(index);
            let transformStyle = '';
            let zIndex = 0;
            let opacity = 0;

            switch (position) {
              case 'active':
                transformStyle = 'translateX(0%) scale(1) rotateY(0deg)';
                zIndex = 30;
                opacity = 1;
                break;
              case 'next':
                transformStyle = 'translateX(85%) scale(0.8) rotateY(-25deg)';
                zIndex = 20;
                opacity = 0.6;
                break;
              case 'prev':
                transformStyle = 'translateX(-85%) scale(0.8) rotateY(25deg)';
                zIndex = 20;
                opacity = 0.6;
                break;
              default:
                transformStyle = 'translateX(200%) scale(0.5) rotateY(-45deg)';
                zIndex = 10;
                opacity = 0;
            }

            return (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-500 ease-in-out preserve-3d"
                style={{
                  transform: transformStyle,
                  zIndex,
                  opacity,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${achievement.gradient} backdrop-blur-sm border ${achievement.borderColor} shadow-2xl`}>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center border border-blue-500/40">
                      {achievement.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-blue-300 text-xs uppercase tracking-wider font-semibold">
                        Resultado
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {achievement.title}
                    </h3>
                    
                    <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 rounded-xl p-4 border border-blue-500/20 backdrop-blur-sm">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Progress Bar Visual */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Performance</span>
                        <span>Excelente</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  onSlideChange(index);
                }
              }}
              className={`relative transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-3' 
                  : 'w-3 h-3'
              }`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileStackView;
