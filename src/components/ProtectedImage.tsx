import React, { useState } from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  onProtectionAttempt?: () => void;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  className = '',
  onProtectionAttempt
}) => {
  const [attempts, setAttempts] = useState(0);

  const handleProtectionAttempt = () => {
    setAttempts(prev => prev + 1);
    if (onProtectionAttempt) {
      onProtectionAttempt();
    }
    console.warn(`Tentativa de extração de imagem detectada. Tentativas: ${attempts + 1}`);
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleProtectionAttempt();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    handleProtectionAttempt();
    return false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      handleProtectionAttempt();
    }
  };

  return (
    <div className="relative inline-block">
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className={`select-none pointer-events-auto ${className}`}
        draggable={false}
        onContextMenu={handleRightClick}
        onDragStart={handleDragStart}
        onTouchStart={handleTouchStart}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          WebkitTouchCallout: 'none'
        } as React.CSSProperties}
      />

      {/* Transparent overlay for additional protection */}
      <div 
        className="absolute inset-0 bg-transparent cursor-default select-none"
        onContextMenu={handleRightClick}
        onDragStart={handleDragStart}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          pointerEvents: 'auto'
        }}
      />

      {/* Anti-screenshot overlay (subtle) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(30, 144, 255, 0.1) 2px,
            rgba(30, 144, 255, 0.1) 3px
          )`
        }}
      />
    </div>
  );
};

export default ProtectedImage;