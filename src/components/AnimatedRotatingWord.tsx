
import React, { useState, useEffect, memo } from 'react';

interface AnimatedRotatingWordProps {
  words: string[];
  className?: string;
}

const AnimatedRotatingWord: React.FC<AnimatedRotatingWordProps> = ({
  words,
  className = ""
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Optimized with longer interval for better performance
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block transition-all duration-500 ${className}`}>
      <span className="font-bold underline decoration-elevix-blue decoration-2 underline-offset-4 text-elevix-blue">
        {words[currentWordIndex]}
      </span>
    </span>
  );
};

export default memo(AnimatedRotatingWord);
