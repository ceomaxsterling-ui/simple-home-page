import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  featured?: boolean;
}

interface AchievementsCarouselProps {
  achievements: Achievement[];
}

const AchievementsCarousel: React.FC<AchievementsCarouselProps> = ({ achievements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalSlides = achievements.length;
  const maxIndex = totalSlides - cardsPerView;

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning, maxIndex]);

  const next = useCallback(() => {
    if (currentIndex >= maxIndex) {
      goTo(0);
    } else {
      goTo(currentIndex + 1);
    }
  }, [currentIndex, maxIndex, goTo]);

  const prev = useCallback(() => {
    if (currentIndex <= 0) {
      goTo(maxIndex);
    } else {
      goTo(currentIndex - 1);
    }
  }, [currentIndex, maxIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(next, 2800);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, next]);

  // Touch/drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStart);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -50) next();
    else if (dragDelta > 50) prev();
    setDragDelta(0);
  };

  const cardWidthPercent = 100 / cardsPerView;
  const translateX = -(currentIndex * cardWidthPercent) + (isDragging ? (dragDelta / (containerRef.current?.offsetWidth || 1)) * 100 : 0);

  // Progress percentage
  const progress = maxIndex === 0 ? 100 : (currentIndex / maxIndex) * 100;

  // Dot groups: one dot per possible slide position
  const dots = Array.from({ length: maxIndex + 1 });

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel viewport */}
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <div
                className={`
                  relative h-full p-7 rounded-2xl
                  bg-gradient-to-br ${achievement.gradient}
                  backdrop-blur-sm border
                  ${achievement.featured
                    ? 'border-blue-400/70 shadow-[0_0_30px_rgba(59,130,246,0.25)]'
                    : achievement.borderColor}
                  hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
                  transition-all duration-300 group
                `}
              >
                {/* Featured badge */}
                {achievement.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-blue-500/40 uppercase tracking-wider">
                      Destaque
                    </span>
                  </div>
                )}

                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-blue-400/5 pointer-events-none" />

                {/* Icon */}
                <div className="flex items-center justify-center mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center border border-blue-500/40 group-hover:border-blue-400/60 transition-colors duration-300">
                    {achievement.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-center mb-2">
                  <div className="text-4xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                    {achievement.number}
                  </div>
                  <div className="text-blue-400 text-xs uppercase tracking-widest font-semibold">Resultado</div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-4" />

                {/* Title & description */}
                <h3 className="text-lg font-bold text-white text-center mb-3 leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {achievement.description}
                </p>

                {/* Performance bar */}
                <div className="mt-5 space-y-1">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Performance</span>
                    <span className="text-blue-400">Excelente</span>
                  </div>
                  <div className="h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                      style={{ width: '95%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-gray-900/90 border border-blue-500/40 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:border-blue-400 hover:text-white transition-all duration-200 shadow-lg shadow-blue-500/10 backdrop-blur-sm"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-gray-900/90 border border-blue-500/40 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:border-blue-400 hover:text-white transition-all duration-200 shadow-lg shadow-blue-500/10 backdrop-blur-sm"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom controls */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {dots.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-7 h-2.5 bg-gradient-to-r from-blue-500 to-blue-400 shadow-md shadow-blue-500/50'
                  : 'w-2.5 h-2.5 bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span className="text-blue-400 font-medium">{currentIndex + 1} / {maxIndex + 1}</span>
            <span>Progresso</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AchievementsCarousel);
