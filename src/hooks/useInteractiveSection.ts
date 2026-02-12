
import { useState, useCallback } from 'react';

export const useInteractiveSection = () => {
  const [isInSolutionMode, setIsInSolutionMode] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleMode = useCallback(() => {
    setIsInSolutionMode(prev => !prev);
  }, []);

  const handleCardHover = useCallback((cardIndex: number | null) => {
    setHoveredCard(cardIndex);
  }, []);

  return {
    isInSolutionMode,
    hoveredCard,
    toggleMode,
    handleCardHover,
    setIsInSolutionMode
  };
};
