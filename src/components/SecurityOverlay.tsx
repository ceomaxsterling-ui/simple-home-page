import React from 'react';

interface SecurityOverlayProps {
  children: React.ReactNode;
  showWatermark?: boolean;
  watermarkText?: string;
  overlayOpacity?: number;
}

const SecurityOverlay: React.FC<SecurityOverlayProps> = ({
  children,
  showWatermark = true,
  watermarkText = '© TYRION - Conteúdo Protegido',
  overlayOpacity = 0.02
}) => {
  return (
    <div className="relative">
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Security overlay */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-20"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(30, 144, 255, ${overlayOpacity}) 50px,
            rgba(30, 144, 255, ${overlayOpacity}) 52px
          )`
        }}
      />

      {/* Watermark */}
      {showWatermark && (
        <div 
          className="absolute inset-0 pointer-events-none select-none z-30 flex items-center justify-center opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent 0,
              transparent 200px,
              currentColor 200px,
              currentColor 202px
            ), repeating-linear-gradient(
              -45deg,
              transparent 0,
              transparent 200px,
              currentColor 200px,
              currentColor 202px
            )`,
            color: 'hsl(var(--primary))'
          }}
        >
          <div 
            className="text-4xl font-bold text-primary/10 transform rotate-45 whitespace-nowrap"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              fontSize: 'clamp(2rem, 8vw, 6rem)'
            }}
          >
            {watermarkText}
          </div>
        </div>
      )}

      {/* Additional protection layers */}
      <div className="absolute inset-0 pointer-events-none z-40">
        {/* Invisible grid overlay */}
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(transparent 98%, rgba(30, 144, 255, 0.01) 100%),
              linear-gradient(90deg, transparent 98%, rgba(30, 144, 255, 0.01) 100%)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </div>
  );
};

export default SecurityOverlay;